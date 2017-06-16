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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:push-notifications":{"client":{"views":{"template.pushNotificationsFlexTab.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_push-notifications/client/views/template.pushNotificationsFlexTab.js                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  // 1
Template.__checkName("pushNotificationsFlexTab");                                                                 // 2
Template["pushNotificationsFlexTab"] = new Template("Template.pushNotificationsFlexTab", (function() {            // 3
  var view = this;                                                                                                // 4
  return HTML.DIV({                                                                                               // 5
    class: "content"                                                                                              // 6
  }, "\n\t\t", HTML.DIV({                                                                                         // 7
    class: "list-view push-notifications"                                                                         // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                       // 9
    class: "title"                                                                                                // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                    // 11
    return Spacebars.mustache(view.lookup("_"), "Notifications");                                                 // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.FORM("\n\t\t\t\t", HTML.UL({                                                 // 13
    class: "list clearfix"                                                                                        // 14
  }, "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                     // 15
    return Spacebars.mustache(view.lookup("_"), "Disable_Notifications");                                         // 16
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                               // 17
    class: "input checkbox toggle"                                                                                // 18
  }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                             // 19
    type: "checkbox",                                                                                             // 20
    id: "disableNotifications",                                                                                   // 21
    name: "disableNotifications",                                                                                 // 22
    value: "1",                                                                                                   // 23
    checked: function() {                                                                                         // 24
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("disableNotifications"), true);                   // 25
    }                                                                                                             // 26
  }), "\n\t\t\t\t\t\t\t", HTML.Raw('<label for="disableNotifications"></label>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {
    return Spacebars.dataMustache(view.lookup("$neq"), view.lookup("disableNotifications"), true);                // 28
  }, function() {                                                                                                 // 29
    return [ "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {         // 30
      return Spacebars.mustache(view.lookup("_"), "Audio");                                                       // 31
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                 // 32
      return Spacebars.dataMustache(view.lookup("editing"), "audioNotification");                                 // 33
    }, function() {                                                                                               // 34
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL("\n\t\t\t\t\t\t\t\t\t\t", HTML.SELECT({                         // 35
        name: "audioNotification",                                                                                // 36
        class: "audio"                                                                                            // 37
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                // 38
        value: "none",                                                                                            // 39
        selected: function() {                                                                                    // 40
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("audioNotification"), "none");                // 41
        }                                                                                                         // 42
      }, Blaze.View("lookup:_", function() {                                                                      // 43
        return Spacebars.mustache(view.lookup("_"), "None");                                                      // 44
      })), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                              // 45
        value: "",                                                                                                // 46
        selected: function() {                                                                                    // 47
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("audioNotification"), "");                    // 48
        }                                                                                                         // 49
      }, Blaze.View("lookup:_", function() {                                                                      // 50
        return Spacebars.mustache(view.lookup("_"), "Use_account_preference");                                    // 51
      }), " (", Blaze.View("lookup:_", function() {                                                               // 52
        return Spacebars.mustache(view.lookup("_"), "Default");                                                   // 53
      }), ")"), "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                         // 54
        value: "chime",                                                                                           // 55
        selected: function() {                                                                                    // 56
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("audioNotification"), "chime");               // 57
        }                                                                                                         // 58
      }, "Chime"), "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                            // 59
        return Spacebars.call(view.lookup("audioAssets"));                                                        // 60
      }, function() {                                                                                             // 61
        return [ "\n\t\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                      // 62
          value: function() {                                                                                     // 63
            return Spacebars.mustache(view.lookup("_id"));                                                        // 64
          },                                                                                                      // 65
          selected: function() {                                                                                  // 66
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("audioNotification"), view.lookup("_id"));  // 67
          }                                                                                                       // 68
        }, Blaze.View("lookup:name", function() {                                                                 // 69
          return Spacebars.mustache(view.lookup("name"));                                                         // 70
        })), "\n\t\t\t\t\t\t\t\t\t\t\t" ];                                                                        // 71
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({               // 72
        type: "button",                                                                                           // 73
        class: "button cancel"                                                                                    // 74
      }, Blaze.View("lookup:_", function() {                                                                      // 75
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                    // 76
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 77
        type: "button",                                                                                           // 78
        class: "button primary save"                                                                              // 79
      }, Blaze.View("lookup:_", function() {                                                                      // 80
        return Spacebars.mustache(view.lookup("_"), "Save");                                                      // 81
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 82
    }, function() {                                                                                               // 83
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                // 84
        class: "current-setting"                                                                                  // 85
      }, Blaze.View("lookup:audioValue", function() {                                                             // 86
        return Spacebars.mustache(view.lookup("audioValue"));                                                     // 87
      }), " ", HTML.I({                                                                                           // 88
        class: "icon-play-circled",                                                                               // 89
        "data-play": function() {                                                                                 // 90
          return Spacebars.mustache(view.lookup("audioNotification"));                                            // 91
        }                                                                                                         // 92
      }), " ", HTML.I({                                                                                           // 93
        class: "icon-pencil",                                                                                     // 94
        "data-edit": "audioNotification"                                                                          // 95
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 96
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Desktop");                                                     // 98
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                 // 99
      return Spacebars.dataMustache(view.lookup("editing"), "desktopNotifications");                              // 100
    }, function() {                                                                                               // 101
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                    // 102
        type: "radio",                                                                                            // 103
        name: "desktopNotifications",                                                                             // 104
        value: "all",                                                                                             // 105
        checked: function() {                                                                                     // 106
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("desktopNotifications"), "all");              // 107
        }                                                                                                         // 108
      }), " ", Blaze.View("lookup:_", function() {                                                                // 109
        return Spacebars.mustache(view.lookup("_"), "All_messages");                                              // 110
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 111
        type: "radio",                                                                                            // 112
        name: "desktopNotifications",                                                                             // 113
        value: "mentions",                                                                                        // 114
        checked: function() {                                                                                     // 115
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("desktopNotifications"), "mentions");         // 116
        }                                                                                                         // 117
      }), " ", Blaze.View("lookup:_", function() {                                                                // 118
        return Spacebars.mustache(view.lookup("_"), "Mentions_default");                                          // 119
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 120
        type: "radio",                                                                                            // 121
        name: "desktopNotifications",                                                                             // 122
        value: "nothing",                                                                                         // 123
        checked: function() {                                                                                     // 124
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("desktopNotifications"), "nothing");          // 125
        }                                                                                                         // 126
      }), " ", Blaze.View("lookup:_", function() {                                                                // 127
        return Spacebars.mustache(view.lookup("_"), "Nothing");                                                   // 128
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BR(), "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                       // 129
        return Spacebars.call(view.lookup("desktopNotificationDuration"));                                        // 130
      }, function() {                                                                                             // 131
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                         // 132
          return Spacebars.mustache(view.lookup("_"), "Duration");                                                // 133
        }), " (", Blaze.View("lookup:_", function() {                                                             // 134
          return Spacebars.mustache(view.lookup("_"), "seconds");                                                 // 135
        }), ") ", HTML.INPUT({                                                                                    // 136
          type: "number",                                                                                         // 137
          name: "duration",                                                                                       // 138
          min: "0",                                                                                               // 139
          value: function() {                                                                                     // 140
            return Spacebars.mustache(view.lookup("desktopNotificationDuration"));                                // 141
          }                                                                                                       // 142
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                            // 143
      }, function() {                                                                                             // 144
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                         // 145
          return Spacebars.mustache(view.lookup("_"), "Duration");                                                // 146
        }), " (", Blaze.View("lookup:_", function() {                                                             // 147
          return Spacebars.mustache(view.lookup("_"), "seconds");                                                 // 148
        }), ") ", HTML.INPUT({                                                                                    // 149
          type: "number",                                                                                         // 150
          name: "duration",                                                                                       // 151
          min: "0",                                                                                               // 152
          value: "",                                                                                              // 153
          placeholder: function() {                                                                               // 154
            return Spacebars.mustache(view.lookup("_"), "Use_User_Preferences_or_Global_Settings");               // 155
          }                                                                                                       // 156
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                            // 157
      }), "\n\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 158
        type: "button",                                                                                           // 159
        class: "button cancel"                                                                                    // 160
      }, Blaze.View("lookup:_", function() {                                                                      // 161
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                    // 162
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 163
        type: "button",                                                                                           // 164
        class: "button primary save"                                                                              // 165
      }, Blaze.View("lookup:_", function() {                                                                      // 166
        return Spacebars.mustache(view.lookup("_"), "Save");                                                      // 167
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 168
    }, function() {                                                                                               // 169
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                // 170
        class: "current-setting"                                                                                  // 171
      }, Blaze.View("lookup:subValue", function() {                                                               // 172
        return Spacebars.mustache(view.lookup("subValue"), "desktopNotifications");                               // 173
      }), " ", HTML.I({                                                                                           // 174
        class: "icon-pencil",                                                                                     // 175
        "data-edit": "desktopNotifications"                                                                       // 176
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 177
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                       // 178
      return Spacebars.dataMustache(view.lookup("editing"), "desktopNotifications");                              // 179
    }, function() {                                                                                               // 180
      return [ "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {       // 181
        return Spacebars.mustache(view.lookup("_"), "Desktop_Notifications_Duration");                            // 182
      })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                         // 183
        class: "current-setting"                                                                                  // 184
      }, Blaze.If(function() {                                                                                    // 185
        return Spacebars.call(view.lookup("desktopNotificationDuration"));                                        // 186
      }, function() {                                                                                             // 187
        return [ Blaze.View("lookup:desktopNotificationDuration", function() {                                    // 188
          return Spacebars.mustache(view.lookup("desktopNotificationDuration"));                                  // 189
        }), " ", Blaze.View("lookup:_", function() {                                                              // 190
          return Spacebars.mustache(view.lookup("_"), "seconds");                                                 // 191
        }) ];                                                                                                     // 192
      }, function() {                                                                                             // 193
        return Blaze.View("lookup:_", function() {                                                                // 194
          return Spacebars.mustache(view.lookup("_"), "Use_User_Preferences_or_Global_Settings");                 // 195
        });                                                                                                       // 196
      })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                            // 197
    }), "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {              // 198
      return Spacebars.mustache(view.lookup("_"), "Mobile");                                                      // 199
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                 // 200
      return Spacebars.dataMustache(view.lookup("editing"), "mobilePushNotifications");                           // 201
    }, function() {                                                                                               // 202
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                    // 203
        type: "radio",                                                                                            // 204
        name: "mobilePushNotifications",                                                                          // 205
        value: "all",                                                                                             // 206
        checked: function() {                                                                                     // 207
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("mobilePushNotifications"), "all");           // 208
        }                                                                                                         // 209
      }), " ", Blaze.View("lookup:_", function() {                                                                // 210
        return Spacebars.mustache(view.lookup("_"), "All_messages");                                              // 211
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 212
        type: "radio",                                                                                            // 213
        name: "mobilePushNotifications",                                                                          // 214
        value: "mentions",                                                                                        // 215
        checked: function() {                                                                                     // 216
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("mobilePushNotifications"), "mentions");      // 217
        }                                                                                                         // 218
      }), " ", Blaze.View("lookup:_", function() {                                                                // 219
        return Spacebars.mustache(view.lookup("_"), "Mentions_default");                                          // 220
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 221
        type: "radio",                                                                                            // 222
        name: "mobilePushNotifications",                                                                          // 223
        value: "nothing",                                                                                         // 224
        checked: function() {                                                                                     // 225
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("mobilePushNotifications"), "nothing");       // 226
        }                                                                                                         // 227
      }), " ", Blaze.View("lookup:_", function() {                                                                // 228
        return Spacebars.mustache(view.lookup("_"), "Nothing");                                                   // 229
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 230
        type: "button",                                                                                           // 231
        class: "button cancel"                                                                                    // 232
      }, Blaze.View("lookup:_", function() {                                                                      // 233
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                    // 234
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 235
        type: "button",                                                                                           // 236
        class: "button primary save"                                                                              // 237
      }, Blaze.View("lookup:_", function() {                                                                      // 238
        return Spacebars.mustache(view.lookup("_"), "Save");                                                      // 239
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 240
    }, function() {                                                                                               // 241
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                // 242
        class: "current-setting"                                                                                  // 243
      }, Blaze.View("lookup:subValue", function() {                                                               // 244
        return Spacebars.mustache(view.lookup("subValue"), "mobilePushNotifications");                            // 245
      }), " ", HTML.I({                                                                                           // 246
        class: "icon-pencil",                                                                                     // 247
        "data-edit": "mobilePushNotifications"                                                                    // 248
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 249
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {
      return Spacebars.mustache(view.lookup("_"), "Email");                                                       // 251
    })), "\n\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                 // 252
      return Spacebars.dataMustache(view.lookup("editing"), "emailNotifications");                                // 253
    }, function() {                                                                                               // 254
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                    // 255
        type: "radio",                                                                                            // 256
        name: "emailNotifications",                                                                               // 257
        value: "all",                                                                                             // 258
        checked: function() {                                                                                     // 259
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("emailNotifications"), "all");                // 260
        }                                                                                                         // 261
      }), " ", Blaze.View("lookup:_", function() {                                                                // 262
        return Spacebars.mustache(view.lookup("_"), "All_messages");                                              // 263
      })), "\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                          // 264
        return Spacebars.call(view.lookup("showEmailMentions"));                                                  // 265
      }, function() {                                                                                             // 266
        return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                // 267
          type: "radio",                                                                                          // 268
          name: "emailNotifications",                                                                             // 269
          value: "mentions",                                                                                      // 270
          checked: function() {                                                                                   // 271
            return Spacebars.mustache(view.lookup("$eq"), view.lookup("emailNotifications"), "mentions");         // 272
          }                                                                                                       // 273
        }), " ", Blaze.View("lookup:_", function() {                                                              // 274
          return Spacebars.mustache(view.lookup("_"), "Mentions");                                                // 275
        })), "\n\t\t\t\t\t\t\t\t\t" ];                                                                            // 276
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                         // 277
        type: "radio",                                                                                            // 278
        name: "emailNotifications",                                                                               // 279
        value: "nothing",                                                                                         // 280
        checked: function() {                                                                                     // 281
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("emailNotifications"), "nothing");            // 282
        }                                                                                                         // 283
      }), " ", Blaze.View("lookup:_", function() {                                                                // 284
        return Spacebars.mustache(view.lookup("_"), "Nothing");                                                   // 285
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 286
        type: "radio",                                                                                            // 287
        name: "emailNotifications",                                                                               // 288
        value: "default",                                                                                         // 289
        checked: function() {                                                                                     // 290
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("emailNotifications"), "default");            // 291
        }                                                                                                         // 292
      }), " ", Blaze.View("lookup:_", function() {                                                                // 293
        return Spacebars.mustache(view.lookup("_"), "Use_account_preference");                                    // 294
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 295
        type: "button",                                                                                           // 296
        class: "button cancel"                                                                                    // 297
      }, Blaze.View("lookup:_", function() {                                                                      // 298
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                    // 299
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                  // 300
        type: "button",                                                                                           // 301
        class: "button primary save"                                                                              // 302
      }, Blaze.View("lookup:_", function() {                                                                      // 303
        return Spacebars.mustache(view.lookup("_"), "Save");                                                      // 304
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 305
    }, function() {                                                                                               // 306
      return [ "\n\t\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                // 307
        class: "current-setting"                                                                                  // 308
      }, Blaze.View("lookup:subValue", function() {                                                               // 309
        return Spacebars.mustache(view.lookup("subValue"), "emailNotifications");                                 // 310
      }), " ", HTML.I({                                                                                           // 311
        class: "icon-pencil",                                                                                     // 312
        "data-edit": "emailNotifications"                                                                         // 313
      })), "\n\t\t\t\t\t\t\t\t" ];                                                                                // 314
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                       // 315
      return Spacebars.call(view.lookup("emailVerified"));                                                        // 316
    }, function() {                                                                                               // 317
      return [ "\n\t\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t\t", HTML.DIV({                                           // 318
        class: "alert alert-warning pending-background pending-border"                                            // 319
      }, "\n\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                // 320
        return Spacebars.mustache(view.lookup("_"), "You_wont_receive_email_notifications_because_you_have_not_verified_your_email");
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                             // 322
    }), "\n\t\t\t\t\t" ];                                                                                         // 323
  }), "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                    // 324
    return Spacebars.mustache(view.lookup("_"), "Hide_Unread_Room_Status");                                       // 325
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                               // 326
    class: "input checkbox toggle"                                                                                // 327
  }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                             // 328
    type: "checkbox",                                                                                             // 329
    id: "hideUnreadStatus",                                                                                       // 330
    name: "hideUnreadStatus",                                                                                     // 331
    value: "1",                                                                                                   // 332
    checked: function() {                                                                                         // 333
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("hideUnreadStatus"), true);                       // 334
    }                                                                                                             // 335
  }), "\n\t\t\t\t\t\t\t", HTML.Raw('<label for="hideUnreadStatus"></label>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Unread_Tray_Icon_Alert");                                        // 337
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", Blaze.If(function() {                                       // 338
    return Spacebars.dataMustache(view.lookup("editing"), "unreadAlert");                                         // 339
  }, function() {                                                                                                 // 340
    return [ "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                        // 341
      type: "radio",                                                                                              // 342
      name: "unreadAlert",                                                                                        // 343
      value: "all",                                                                                               // 344
      checked: function() {                                                                                       // 345
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("unreadAlert"), "all");                         // 346
      }                                                                                                           // 347
    }), " ", Blaze.View("lookup:_", function() {                                                                  // 348
      return Spacebars.mustache(view.lookup("_"), "On");                                                          // 349
    })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                            // 350
      type: "radio",                                                                                              // 351
      name: "unreadAlert",                                                                                        // 352
      value: "nothing",                                                                                           // 353
      checked: function() {                                                                                       // 354
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("unreadAlert"), "nothing");                     // 355
      }                                                                                                           // 356
    }), " ", Blaze.View("lookup:_", function() {                                                                  // 357
      return Spacebars.mustache(view.lookup("_"), "Off");                                                         // 358
    })), "\n\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                            // 359
      type: "radio",                                                                                              // 360
      name: "unreadAlert",                                                                                        // 361
      value: "default",                                                                                           // 362
      checked: function() {                                                                                       // 363
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("unreadAlert"), "default");                     // 364
      }                                                                                                           // 365
    }), " ", Blaze.View("lookup:_", function() {                                                                  // 366
      return Spacebars.mustache(view.lookup("_"), "Use_account_preference");                                      // 367
    })), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                      // 368
      type: "button",                                                                                             // 369
      class: "button cancel"                                                                                      // 370
    }, Blaze.View("lookup:_", function() {                                                                        // 371
      return Spacebars.mustache(view.lookup("_"), "Cancel");                                                      // 372
    })), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                      // 373
      type: "button",                                                                                             // 374
      class: "button primary save"                                                                                // 375
    }, Blaze.View("lookup:_", function() {                                                                        // 376
      return Spacebars.mustache(view.lookup("_"), "Save");                                                        // 377
    })), "\n\t\t\t\t\t\t\t" ];                                                                                    // 378
  }, function() {                                                                                                 // 379
    return [ "\n\t\t\t\t\t\t\t\t", HTML.SPAN({                                                                    // 380
      class: "current-setting"                                                                                    // 381
    }, Blaze.View("lookup:unreadAlertText", function() {                                                          // 382
      return Spacebars.mustache(view.lookup("unreadAlertText"));                                                  // 383
    }), " ", HTML.I({                                                                                             // 384
      class: "icon-pencil",                                                                                       // 385
      "data-edit": "unreadAlert"                                                                                  // 386
    })), "\n\t\t\t\t\t\t\t" ];                                                                                    // 387
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                         // 388
}));                                                                                                              // 389
                                                                                                                  // 390
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pushNotificationsFlexTab.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_push-notifications/client/views/pushNotificationsFlexTab.js                                //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var toastr = void 0;                                                                                              // 1
module.watch(require("toastr"), {                                                                                 // 1
	"default": function (v) {                                                                                        // 1
		toastr = v;                                                                                                     // 1
	}                                                                                                                // 1
}, 0);                                                                                                            // 1
/* globals ChatSubscription */Template.pushNotificationsFlexTab.helpers({                                         // 2
	audioAssets: function () {                                                                                       // 5
		return RocketChat.CustomSounds && RocketChat.CustomSounds.getList && RocketChat.CustomSounds.getList() || [];   // 6
	},                                                                                                               // 7
	audioNotification: function () {                                                                                 // 8
		var sub = ChatSubscription.findOne({                                                                            // 9
			rid: Session.get('openedRoom')                                                                                 // 10
		}, {                                                                                                            // 9
			fields: {                                                                                                      // 12
				audioNotification: 1                                                                                          // 13
			}                                                                                                              // 12
		});                                                                                                             // 11
		return sub ? sub.audioNotification || '' : '';                                                                  // 16
	},                                                                                                               // 17
	disableNotifications: function () {                                                                              // 18
		var sub = ChatSubscription.findOne({                                                                            // 19
			rid: Session.get('openedRoom')                                                                                 // 20
		}, {                                                                                                            // 19
			fields: {                                                                                                      // 22
				disableNotifications: 1                                                                                       // 23
			}                                                                                                              // 22
		});                                                                                                             // 21
		return sub ? sub.disableNotifications || false : false;                                                         // 26
	},                                                                                                               // 27
	hideUnreadStatus: function () {                                                                                  // 28
		var sub = ChatSubscription.findOne({                                                                            // 29
			rid: Session.get('openedRoom')                                                                                 // 30
		}, {                                                                                                            // 29
			fields: {                                                                                                      // 32
				hideUnreadStatus: 1                                                                                           // 33
			}                                                                                                              // 32
		});                                                                                                             // 31
		return sub ? sub.hideUnreadStatus || false : false;                                                             // 36
	},                                                                                                               // 37
	desktopNotifications: function () {                                                                              // 38
		var sub = ChatSubscription.findOne({                                                                            // 39
			rid: Session.get('openedRoom')                                                                                 // 40
		}, {                                                                                                            // 39
			fields: {                                                                                                      // 42
				desktopNotifications: 1                                                                                       // 43
			}                                                                                                              // 42
		});                                                                                                             // 41
		return sub ? sub.desktopNotifications : '';                                                                     // 46
	},                                                                                                               // 47
	mobilePushNotifications: function () {                                                                           // 48
		var sub = ChatSubscription.findOne({                                                                            // 49
			rid: Session.get('openedRoom')                                                                                 // 50
		}, {                                                                                                            // 49
			fields: {                                                                                                      // 52
				mobilePushNotifications: 1                                                                                    // 53
			}                                                                                                              // 52
		});                                                                                                             // 51
		return sub ? sub.mobilePushNotifications : '';                                                                  // 56
	},                                                                                                               // 57
	emailNotifications: function () {                                                                                // 58
		var sub = ChatSubscription.findOne({                                                                            // 59
			rid: Session.get('openedRoom')                                                                                 // 60
		}, {                                                                                                            // 59
			fields: {                                                                                                      // 62
				emailNotifications: 1                                                                                         // 63
			}                                                                                                              // 62
		});                                                                                                             // 61
		return sub ? sub.emailNotifications : '';                                                                       // 66
	},                                                                                                               // 67
	showEmailMentions: function () {                                                                                 // 68
		var sub = ChatSubscription.findOne({                                                                            // 69
			rid: Session.get('openedRoom')                                                                                 // 70
		}, {                                                                                                            // 69
			fields: {                                                                                                      // 72
				t: 1                                                                                                          // 73
			}                                                                                                              // 72
		});                                                                                                             // 71
		return sub && sub.t !== 'd';                                                                                    // 76
	},                                                                                                               // 77
	unreadAlert: function () {                                                                                       // 78
		var sub = ChatSubscription.findOne({                                                                            // 79
			rid: Session.get('openedRoom')                                                                                 // 80
		}, {                                                                                                            // 79
			fields: {                                                                                                      // 82
				unreadAlert: 1                                                                                                // 83
			}                                                                                                              // 82
		});                                                                                                             // 81
		return sub ? sub.unreadAlert : 'default';                                                                       // 86
	},                                                                                                               // 87
	unreadAlertText: function () {                                                                                   // 88
		var sub = ChatSubscription.findOne({                                                                            // 89
			rid: Session.get('openedRoom')                                                                                 // 90
		}, {                                                                                                            // 89
			fields: {                                                                                                      // 92
				unreadAlert: 1                                                                                                // 93
			}                                                                                                              // 92
		});                                                                                                             // 91
                                                                                                                  //
		if (sub) {                                                                                                      // 96
			switch (sub.unreadAlert) {                                                                                     // 97
				case 'all':                                                                                                   // 98
					return t('On');                                                                                              // 99
                                                                                                                  //
				case 'nothing':                                                                                               // 100
					return t('Off');                                                                                             // 101
			}                                                                                                              // 97
		}                                                                                                               // 103
                                                                                                                  //
		return t('Use_account_preference');                                                                             // 104
	},                                                                                                               // 105
	audioValue: function () {                                                                                        // 106
		var sub = ChatSubscription.findOne({                                                                            // 107
			rid: Session.get('openedRoom')                                                                                 // 108
		}, {                                                                                                            // 107
			fields: {                                                                                                      // 110
				audioNotification: 1                                                                                          // 111
			}                                                                                                              // 110
		});                                                                                                             // 109
		var audio = sub ? sub.audioNotification || '' : '';                                                             // 114
                                                                                                                  //
		if (audio === 'none') {                                                                                         // 115
			return t('None');                                                                                              // 116
		} else if (audio === '') {                                                                                      // 117
			return t('Use_account_preference');                                                                            // 118
		} else if (audio === 'chime') {                                                                                 // 119
			return 'Chime';                                                                                                // 120
		} else {                                                                                                        // 121
			var audioAssets = RocketChat.CustomSounds && RocketChat.CustomSounds.getList && RocketChat.CustomSounds.getList() || [];
                                                                                                                  //
			var asset = _.findWhere(audioAssets, {                                                                         // 123
				_id: audio                                                                                                    // 123
			});                                                                                                            // 123
                                                                                                                  //
			return asset && asset.name;                                                                                    // 124
		}                                                                                                               // 125
	},                                                                                                               // 126
	subValue: function (field) {                                                                                     // 127
		var _fields;                                                                                                    // 127
                                                                                                                  //
		var sub = ChatSubscription.findOne({                                                                            // 128
			rid: Session.get('openedRoom')                                                                                 // 129
		}, {                                                                                                            // 128
			fields: (_fields = {                                                                                           // 131
				t: 1                                                                                                          // 132
			}, _fields[field] = 1, _fields)                                                                                // 131
		});                                                                                                             // 130
                                                                                                                  //
		if (sub) {                                                                                                      // 136
			switch (sub[field]) {                                                                                          // 137
				case 'all':                                                                                                   // 138
					return t('All_messages');                                                                                    // 139
                                                                                                                  //
				case 'nothing':                                                                                               // 140
					return t('Nothing');                                                                                         // 141
                                                                                                                  //
				case 'default':                                                                                               // 142
					return t('Use_account_preference');                                                                          // 143
                                                                                                                  //
				case 'mentions':                                                                                              // 144
					return t('Mentions');                                                                                        // 145
                                                                                                                  //
				default:                                                                                                      // 146
					if (field === 'emailNotifications') {                                                                        // 147
						return t('Use_account_preference');                                                                         // 148
					} else {                                                                                                     // 149
						return t('Mentions');                                                                                       // 150
					}                                                                                                            // 151
                                                                                                                  //
			}                                                                                                              // 137
		}                                                                                                               // 153
	},                                                                                                               // 154
	desktopNotificationDuration: function () {                                                                       // 155
		var sub = ChatSubscription.findOne({                                                                            // 156
			rid: Session.get('openedRoom')                                                                                 // 157
		}, {                                                                                                            // 156
			fields: {                                                                                                      // 159
				desktopNotificationDuration: 1                                                                                // 160
			}                                                                                                              // 159
		});                                                                                                             // 158
                                                                                                                  //
		if (!sub) {                                                                                                     // 163
			return false;                                                                                                  // 164
		} // Convert to Number                                                                                          // 165
                                                                                                                  //
                                                                                                                  //
		return sub.desktopNotificationDuration - 0;                                                                     // 167
	},                                                                                                               // 168
	editing: function (field) {                                                                                      // 169
		return Template.instance().editing.get() === field;                                                             // 170
	},                                                                                                               // 171
	emailVerified: function () {                                                                                     // 172
		return Meteor.user().emails && Meteor.user().emails[0] && Meteor.user().emails[0].verified;                     // 173
	}                                                                                                                // 174
});                                                                                                               // 4
Template.pushNotificationsFlexTab.onCreated(function () {                                                         // 177
	var _this = this;                                                                                                // 177
                                                                                                                  //
	this.editing = new ReactiveVar();                                                                                // 178
                                                                                                                  //
	this.validateSetting = function (field) {                                                                        // 180
		switch (field) {                                                                                                // 181
			case 'audioNotification':                                                                                      // 182
			case 'hideUnreadStatus':                                                                                       // 183
			case 'disableNotifications':                                                                                   // 184
				return true;                                                                                                  // 185
                                                                                                                  //
			default:                                                                                                       // 186
				var value = _this.$("input[name=" + field + "]:checked").val();                                               // 187
                                                                                                                  //
				if (['all', 'mentions', 'nothing', 'default'].indexOf(value) === -1) {                                        // 188
					toastr.error(t('Invalid_notification_setting_s', value || ''));                                              // 189
					return false;                                                                                                // 190
				}                                                                                                             // 191
                                                                                                                  //
				return true;                                                                                                  // 192
		}                                                                                                               // 181
	};                                                                                                               // 194
                                                                                                                  //
	this.saveSetting = function () {                                                                                 // 196
		var field = _this.editing.get();                                                                                // 197
                                                                                                                  //
		var value = void 0;                                                                                             // 198
                                                                                                                  //
		switch (field) {                                                                                                // 199
			case 'audioNotification':                                                                                      // 200
				value = _this.$("select[name=" + field + "]").val();                                                          // 201
				break;                                                                                                        // 202
                                                                                                                  //
			case 'hideUnreadStatus':                                                                                       // 203
			case 'disableNotifications':                                                                                   // 204
				value = _this.$("input[name=" + field + "]:checked").val() ? '1' : '0';                                       // 205
				break;                                                                                                        // 206
                                                                                                                  //
			default:                                                                                                       // 207
				value = _this.$("input[name=" + field + "]:checked").val();                                                   // 208
				break;                                                                                                        // 209
		}                                                                                                               // 199
                                                                                                                  //
		var duration = $('input[name=duration]').val();                                                                 // 211
                                                                                                                  //
		if (_this.validateSetting(field)) {                                                                             // 212
			Meteor.call('saveNotificationSettings', Session.get('openedRoom'), field, value, function (err /*, result*/) {
				if (err) {                                                                                                    // 214
					return handleError(err);                                                                                     // 215
				}                                                                                                             // 216
                                                                                                                  //
				if (duration !== undefined) {                                                                                 // 217
					Meteor.call('saveDesktopNotificationDuration', Session.get('openedRoom'), duration, function (err) {         // 218
						if (err) {                                                                                                  // 219
							return handleError(err);                                                                                   // 220
						}                                                                                                           // 221
                                                                                                                  //
						_this.editing.set();                                                                                        // 222
					});                                                                                                          // 223
				} else {                                                                                                      // 224
					_this.editing.set();                                                                                         // 225
				}                                                                                                             // 226
			});                                                                                                            // 227
		}                                                                                                               // 228
	};                                                                                                               // 229
});                                                                                                               // 230
Template.pushNotificationsFlexTab.events({                                                                        // 232
	'keydown input[type=text]': function (e, instance) {                                                             // 233
		if (e.keyCode === 13) {                                                                                         // 234
			e.preventDefault();                                                                                            // 235
			instance.saveSetting();                                                                                        // 236
		}                                                                                                               // 237
	},                                                                                                               // 238
	'click [data-edit]': function (e, instance) {                                                                    // 240
		e.preventDefault();                                                                                             // 241
		instance.editing.set($(e.currentTarget).data('edit'));                                                          // 242
		setTimeout(function () {                                                                                        // 243
			instance.$('input.editing').focus().select();                                                                  // 243
		}, 100);                                                                                                        // 243
	},                                                                                                               // 244
	'click .cancel': function (e, instance) {                                                                        // 246
		e.preventDefault();                                                                                             // 247
		instance.editing.set();                                                                                         // 248
	},                                                                                                               // 249
	'click .save': function (e, instance) {                                                                          // 251
		e.preventDefault();                                                                                             // 252
		instance.saveSetting();                                                                                         // 253
	},                                                                                                               // 254
	'click [data-play]': function (e) {                                                                              // 256
		e.preventDefault();                                                                                             // 257
		var audio = $(e.currentTarget).data('play');                                                                    // 258
                                                                                                                  //
		if (audio && audio !== 'none') {                                                                                // 259
			var $audio = $("audio#" + audio);                                                                              // 260
                                                                                                                  //
			if ($audio && $audio[0] && $audio[0].play) {                                                                   // 261
				$audio[0].play();                                                                                             // 262
			}                                                                                                              // 263
		} else {                                                                                                        // 264
			audio = Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.newMessageNotification || 'chime';
                                                                                                                  //
			if (audio && audio !== 'none') {                                                                               // 266
				var _$audio = $("audio#" + audio);                                                                            // 267
                                                                                                                  //
				if (_$audio && _$audio[0] && _$audio[0].play) {                                                               // 268
					_$audio[0].play();                                                                                           // 269
				}                                                                                                             // 270
			}                                                                                                              // 271
		}                                                                                                               // 272
	},                                                                                                               // 273
	'change select[name=audioNotification]': function (e) {                                                          // 275
		e.preventDefault();                                                                                             // 276
		var audio = $(e.currentTarget).val();                                                                           // 277
                                                                                                                  //
		if (audio && audio !== 'none') {                                                                                // 278
			var $audio = $("audio#" + audio);                                                                              // 279
                                                                                                                  //
			if ($audio && $audio[0] && $audio[0].play) {                                                                   // 280
				$audio[0].play();                                                                                             // 281
			}                                                                                                              // 282
		}                                                                                                               // 283
	},                                                                                                               // 284
	'change input[type=checkbox]': function (e, instance) {                                                          // 286
		e.preventDefault();                                                                                             // 287
		instance.editing.set($(e.currentTarget).attr('name'));                                                          // 288
		instance.saveSetting();                                                                                         // 289
	}                                                                                                                // 290
});                                                                                                               // 232
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tabBar.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rocketchat_push-notifications/client/tabBar.js                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 1
	RocketChat.TabBar.addButton({                                                                                    // 2
		groups: ['channel', 'group', 'direct'],                                                                         // 3
		id: 'push-notifications',                                                                                       // 4
		i18nTitle: 'Notifications',                                                                                     // 5
		icon: 'icon-bell-alt',                                                                                          // 6
		template: 'pushNotificationsFlexTab',                                                                           // 7
		order: 2                                                                                                        // 8
	});                                                                                                              // 2
});                                                                                                               // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:push-notifications/client/views/template.pushNotificationsFlexTab.js");
require("./node_modules/meteor/rocketchat:push-notifications/client/views/pushNotificationsFlexTab.js");
require("./node_modules/meteor/rocketchat:push-notifications/client/tabBar.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:push-notifications'] = {};

})();
