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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
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
var __coffeescriptShare, renderMessageBody;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-message":{"client":{"template.message.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/template.message.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("message");                                                                                      // 2
Template["message"] = new Template("Template.message", (function() {                                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.LI({                                                                                                    // 5
    id: function() {                                                                                                  // 6
      return Spacebars.mustache(view.lookup("_id"));                                                                  // 7
    },                                                                                                                // 8
    class: function() {                                                                                               // 9
      return [ "message background-transparent-dark-hover ", Spacebars.mustache(view.lookup("isSequential")), " ", Spacebars.mustache(view.lookup("system")), " ", Spacebars.mustache(view.lookup("t")), " ", Spacebars.mustache(view.lookup("own")), " ", Spacebars.mustache(view.lookup("isTemp")), " ", Spacebars.mustache(view.lookup("chatops")), " ", Spacebars.mustache(view.lookup("customClass")) ];
    },                                                                                                                // 11
    "data-username": function() {                                                                                     // 12
      return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                         // 13
    },                                                                                                                // 14
    "data-groupable": function() {                                                                                    // 15
      return Spacebars.mustache(view.lookup("isGroupable"));                                                          // 16
    },                                                                                                                // 17
    "data-date": function() {                                                                                         // 18
      return Spacebars.mustache(view.lookup("date"));                                                                 // 19
    },                                                                                                                // 20
    "data-timestamp": function() {                                                                                    // 21
      return Spacebars.mustache(view.lookup("timestamp"));                                                            // 22
    },                                                                                                                // 23
    "data-target": function() {                                                                                       // 24
      return [ "chart", Spacebars.mustache(view.lookup("_id")) ];                                                     // 25
    },                                                                                                                // 26
    "data-chartview": function() {                                                                                    // 27
      return Spacebars.mustache(view.lookup("msgType"));                                                              // 28
    },                                                                                                                // 29
    "data-chartdata": function() {                                                                                    // 30
      return Spacebars.mustache(view.lookup("chartData"));                                                            // 31
    }                                                                                                                 // 32
  }, "\n        ", Blaze.If(function() {                                                                              // 33
    return Spacebars.call(view.lookup("avatar"));                                                                     // 34
  }, function() {                                                                                                     // 35
    return [ "\n            ", Blaze.If(function() {                                                                  // 36
      return Spacebars.call(view.lookup("avatarFromUsername"));                                                       // 37
    }, function() {                                                                                                   // 38
      return [ "\n                ", HTML.BUTTON({                                                                    // 39
        class: "thumb user-card-message",                                                                             // 40
        "data-username": function() {                                                                                 // 41
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 42
        },                                                                                                            // 43
        tabindex: "1"                                                                                                 // 44
      }, Blaze._TemplateWith(function() {                                                                             // 45
        return {                                                                                                      // 46
          username: Spacebars.call(view.lookup("avatarFromUsername"))                                                 // 47
        };                                                                                                            // 48
      }, function() {                                                                                                 // 49
        return Spacebars.include(view.lookupTemplate("avatar"));                                                      // 50
      })), "\n            " ];                                                                                        // 51
    }, function() {                                                                                                   // 52
      return [ "\n                ", HTML.BUTTON({                                                                    // 53
        class: "thumb user-card-message",                                                                             // 54
        "data-username": function() {                                                                                 // 55
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 56
        },                                                                                                            // 57
        tabindex: "1"                                                                                                 // 58
      }, "\n                    ", HTML.DIV({                                                                         // 59
        class: "avatar"                                                                                               // 60
      }, "\n                        ", HTML.DIV({                                                                     // 61
        class: "avatar-image",                                                                                        // 62
        style: function() {                                                                                           // 63
          return [ "background-image:url(", Spacebars.mustache(view.lookup("encodeURI"), view.lookup("avatar")), ");" ];
        }                                                                                                             // 65
      }), "\n                    "), "\n                "), "\n            " ];                                       // 66
    }), "\n        " ];                                                                                               // 67
  }, function() {                                                                                                     // 68
    return [ "\n            ", Blaze.If(function() {                                                                  // 69
      return Spacebars.call(view.lookup("emoji"));                                                                    // 70
    }, function() {                                                                                                   // 71
      return [ "\n                ", HTML.BUTTON({                                                                    // 72
        class: "thumb user-card-message",                                                                             // 73
        "data-username": function() {                                                                                 // 74
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 75
        },                                                                                                            // 76
        tabindex: "1"                                                                                                 // 77
      }, "\n                    ", HTML.DIV({                                                                         // 78
        class: "avatar"                                                                                               // 79
      }, "\n                        ", Blaze.View("lookup:getEmoji", function() {                                     // 80
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getEmoji"), view.lookup("emoji")));                  // 81
      }), "\n                    "), "\n                "), "\n            " ];                                       // 82
    }, function() {                                                                                                   // 83
      return [ "\n                ", HTML.BUTTON({                                                                    // 84
        class: "thumb user-card-message",                                                                             // 85
        "data-username": function() {                                                                                 // 86
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 87
        },                                                                                                            // 88
        tabindex: "1"                                                                                                 // 89
      }, Blaze._TemplateWith(function() {                                                                             // 90
        return {                                                                                                      // 91
          username: Spacebars.call(Spacebars.dot(view.lookup("u"), "username"))                                       // 92
        };                                                                                                            // 93
      }, function() {                                                                                                 // 94
        return Spacebars.include(view.lookupTemplate("avatar"));                                                      // 95
      })), "\n            " ];                                                                                        // 96
    }), "\n        " ];                                                                                               // 97
  }), "\n        ", HTML.BUTTON({                                                                                     // 98
    type: "button",                                                                                                   // 99
    class: "user user-card-message color-primary-font-color",                                                         // 100
    "data-username": function() {                                                                                     // 101
      return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                         // 102
    },                                                                                                                // 103
    tabindex: "1"                                                                                                     // 104
  }, Blaze.View("lookup:getName", function() {                                                                        // 105
    return Spacebars.mustache(view.lookup("getName"));                                                                // 106
  }), Blaze.If(function() {                                                                                           // 107
    return Spacebars.call(view.lookup("showUsername"));                                                               // 108
  }, function() {                                                                                                     // 109
    return [ " ", HTML.SPAN({                                                                                         // 110
      class: "message-alias border-component-color color-info-font-color"                                             // 111
    }, "@", Blaze.View("lookup:u.username", function() {                                                              // 112
      return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                         // 113
    })) ];                                                                                                            // 114
  })), "\n        ", HTML.SPAN({                                                                                      // 115
    class: "info border-component-color color-info-font-color"                                                        // 116
  }, "\n\t\t", Blaze.Each(function() {                                                                                // 117
    return Spacebars.call(view.lookup("roleTags"));                                                                   // 118
  }, function() {                                                                                                     // 119
    return [ "\n            ", HTML.SPAN({                                                                            // 120
      class: "role-tag background-info-font-color",                                                                   // 121
      "data-role": function() {                                                                                       // 122
        return Spacebars.mustache(view.lookup("description"));                                                        // 123
      }                                                                                                               // 124
    }, Blaze.View("lookup:description", function() {                                                                  // 125
      return Spacebars.mustache(view.lookup("description"));                                                          // 126
    })), "\n        " ];                                                                                              // 127
  }), "\n            ", Blaze.If(function() {                                                                         // 128
    return Spacebars.call(view.lookup("isBot"));                                                                      // 129
  }, function() {                                                                                                     // 130
    return [ "\n                ", HTML.SPAN({                                                                        // 131
      class: "is-bot background-info-font-color"                                                                      // 132
    }, "BOT"), "\n            " ];                                                                                    // 133
  }), "\n            ", HTML.SPAN({                                                                                   // 134
    class: "time",                                                                                                    // 135
    title: function() {                                                                                               // 136
      return [ Spacebars.mustache(view.lookup("date")), " ", Spacebars.mustache(view.lookup("time")) ];               // 137
    }                                                                                                                 // 138
  }, Blaze.View("lookup:time", function() {                                                                           // 139
    return Spacebars.mustache(view.lookup("time"));                                                                   // 140
  })), "\n            ", Blaze.If(function() {                                                                        // 141
    return Spacebars.call(view.lookup("showTranslated"));                                                             // 142
  }, function() {                                                                                                     // 143
    return [ "\n                ", HTML.SPAN({                                                                        // 144
      class: "translated"                                                                                             // 145
    }, "\n\t\t\t\t", HTML.I({                                                                                         // 146
      class: function() {                                                                                             // 147
        return [ "icon-language ", Blaze.If(function() {                                                              // 148
          return Spacebars.call(view.lookup("autoTranslateFetching"));                                                // 149
        }, function() {                                                                                               // 150
          return "loading";                                                                                           // 151
        }) ];                                                                                                         // 152
      },                                                                                                              // 153
      "aria-label": function() {                                                                                      // 154
        return Spacebars.mustache(view.lookup("_"), "Translated");                                                    // 155
      }                                                                                                               // 156
    }), "\n\t\t\t"), "\n            " ];                                                                              // 157
  }), "\n            ", Blaze.If(function() {                                                                         // 158
    return Spacebars.call(view.lookup("edited"));                                                                     // 159
  }, function() {                                                                                                     // 160
    return [ "\n                ", HTML.SPAN({                                                                        // 161
      class: "edited",                                                                                                // 162
      title: function() {                                                                                             // 163
        return [ Spacebars.mustache(view.lookup("_"), "edited"), " ", Spacebars.mustache(view.lookup("_"), "at"), " ", Spacebars.mustache(view.lookup("editTime")), " ", Spacebars.mustache(view.lookup("_"), "by"), " ", Spacebars.mustache(view.lookup("editedBy")) ];
      }                                                                                                               // 165
    }, "\n\t\t\t\t", HTML.I({                                                                                         // 166
      class: "icon-edit",                                                                                             // 167
      "aria-label": function() {                                                                                      // 168
        return Spacebars.mustache(view.lookup("_"), "Edited");                                                        // 169
      }                                                                                                               // 170
    }), "\n\t\t\t\t", HTML.BUTTON({                                                                                   // 171
      class: "thumb thumb-small user-card-message",                                                                   // 172
      "data-username": function() {                                                                                   // 173
        return Spacebars.mustache(view.lookup("editedBy"));                                                           // 174
      },                                                                                                              // 175
      tabindex: "1"                                                                                                   // 176
    }, Blaze._TemplateWith(function() {                                                                               // 177
      return {                                                                                                        // 178
        username: Spacebars.call(view.lookup("editedBy"))                                                             // 179
      };                                                                                                              // 180
    }, function() {                                                                                                   // 181
      return Spacebars.include(view.lookupTemplate("avatar"));                                                        // 182
    })), "\n\t\t\t"), "\n            " ];                                                                             // 183
  }), "\n            ", Blaze.If(function() {                                                                         // 184
    return Spacebars.call(view.lookup("private"));                                                                    // 185
  }, function() {                                                                                                     // 186
    return [ "\n                ", HTML.SPAN({                                                                        // 187
      class: "private"                                                                                                // 188
    }, Blaze.View("lookup:_", function() {                                                                            // 189
      return Spacebars.mustache(view.lookup("_"), "Only_you_can_see_this_message");                                   // 190
    })), "\n            " ];                                                                                          // 191
  }), "\n            ", HTML.DIV({                                                                                    // 192
    class: function() {                                                                                               // 193
      return [ "message-cog-container ", Spacebars.mustache(view.lookup("hideCog")) ];                                // 194
    }                                                                                                                 // 195
  }, "\n\t\t\t\t", HTML.I({                                                                                           // 196
    class: "icon-cog message-cog",                                                                                    // 197
    "aria-label": function() {                                                                                        // 198
      return Spacebars.mustache(view.lookup("_"), "Actions");                                                         // 199
    }                                                                                                                 // 200
  }), "\n\t\t\t"), "\n\t\t"), "\n        ", HTML.DIV({                                                                // 201
    id: function() {                                                                                                  // 202
      return [ "chart", Spacebars.mustache(view.lookup("_id")) ];                                                     // 203
    },                                                                                                                // 204
    class: function() {                                                                                               // 205
      return [ "body color-primary-font-color ", Spacebars.mustache(view.lookup("system"), true), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("msgType"));                                                                // 207
      }, function() {                                                                                                 // 208
        return "chartdiv";                                                                                            // 209
      }) ];                                                                                                           // 210
    },                                                                                                                // 211
    dir: "auto",                                                                                                      // 212
    "data-unread-text": function() {                                                                                  // 213
      return Spacebars.mustache(view.lookup("_"), "Unread_Messages");                                                 // 214
    }                                                                                                                 // 215
  }, "\n            ", Blaze.If(function() {                                                                          // 216
    return Spacebars.call(view.lookup("msgType"));                                                                    // 217
  }, function() {                                                                                                     // 218
    return [ "\n                ", Blaze.View("lookup:messageChart", function() {                                     // 219
      return Spacebars.mustache(view.lookup("messageChart"));                                                         // 220
    }), "\n            " ];                                                                                           // 221
  }, function() {                                                                                                     // 222
    return [ "\n                ", Blaze.View("lookup:body", function() {                                             // 223
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("body")));                                              // 224
    }), "\n            " ];                                                                                           // 225
  }), "\n\n            ", Blaze.If(function() {                                                                       // 226
    return Spacebars.call(view.lookup("hasOembed"));                                                                  // 227
  }, function() {                                                                                                     // 228
    return [ "\n                ", Blaze.Each(function() {                                                            // 229
      return Spacebars.call(view.lookup("urls"));                                                                     // 230
    }, function() {                                                                                                   // 231
      return [ "\n                    ", Blaze.View("lookup:injectIndex", function() {                                // 232
        return Spacebars.mustache(view.lookup("injectIndex"), view.lookup("."), view.lookup("@index"));               // 233
      }), " ", Spacebars.include(view.lookupTemplate("oembedBaseWidget")), "\n                " ];                    // 234
    }), "\n            " ];                                                                                           // 235
  }), "\n            ", Blaze.Each(function() {                                                                       // 236
    return Spacebars.call(view.lookup("attachments"));                                                                // 237
  }, function() {                                                                                                     // 238
    return [ "\n                ", Blaze.View("lookup:injectIndex", function() {                                      // 239
      return Spacebars.mustache(view.lookup("injectIndex"), view.lookup("."), view.lookup("@index"));                 // 240
    }), " ", Spacebars.include(view.lookupTemplate("messageAttachment")), "\n            " ];                         // 241
  }), "\n        "), "\n        ", HTML.UL({                                                                          // 242
    class: function() {                                                                                               // 243
      return [ "actionLinks ", Spacebars.mustache(view.lookup("hideActionLinks")) ];                                  // 244
    }                                                                                                                 // 245
  }, "\n            ", Blaze.Each(function() {                                                                        // 246
    return {                                                                                                          // 247
      _sequence: Spacebars.call(view.lookup("actionLinks")),                                                          // 248
      _variable: "actionLink"                                                                                         // 249
    };                                                                                                                // 250
  }, function() {                                                                                                     // 251
    return [ "\n                ", HTML.LI({                                                                          // 252
      class: "color-primary-action-color"                                                                             // 253
    }, "\n\t\t\t\t\t", HTML.SPAN({                                                                                    // 254
      class: "action-link",                                                                                           // 255
      "data-actionlink": function() {                                                                                 // 256
        return Spacebars.mustache(Spacebars.dot(view.lookup("actionLink"), "id"));                                    // 257
      }                                                                                                               // 258
    }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                        // 259
      return Spacebars.call(Spacebars.dot(view.lookup("actionLink"), "icon"));                                        // 260
    }, function() {                                                                                                   // 261
      return [ "\n                            ", HTML.I({                                                             // 262
        class: function() {                                                                                           // 263
          return Spacebars.mustache(Spacebars.dot(view.lookup("actionLink"), "icon"));                                // 264
        }                                                                                                             // 265
      }), "\n                        " ];                                                                             // 266
    }), "\n                        ", Blaze.If(function() {                                                           // 267
      return Spacebars.call(Spacebars.dot(view.lookup("actionLink"), "i18nLabel"));                                   // 268
    }, function() {                                                                                                   // 269
      return [ "\n                            ", Blaze.View("lookup:_", function() {                                  // 270
        return Spacebars.mustache(view.lookup("_"), Spacebars.dot(view.lookup("actionLink"), "i18nLabel"));           // 271
      }), "\n                        " ];                                                                             // 272
    }, function() {                                                                                                   // 273
      return [ "\n                            ", Blaze.View("lookup:actionLink.label", function() {                   // 274
        return Spacebars.mustache(Spacebars.dot(view.lookup("actionLink"), "label"));                                 // 275
      }), "\n                        " ];                                                                             // 276
    }), "\n\t\t\t\t\t"), "\n                "), "\n            " ];                                                   // 277
  }), "\n        "), "\n        ", HTML.UL({                                                                          // 278
    class: function() {                                                                                               // 279
      return [ "reactions ", Spacebars.mustache(view.lookup("hideReactions")) ];                                      // 280
    }                                                                                                                 // 281
  }, "\n            ", Blaze.Each(function() {                                                                        // 282
    return {                                                                                                          // 283
      _sequence: Spacebars.call(view.lookup("reactions")),                                                            // 284
      _variable: "reaction"                                                                                           // 285
    };                                                                                                                // 286
  }, function() {                                                                                                     // 287
    return [ "\n                ", HTML.LI(HTML.Attrs({                                                               // 288
      "data-emoji": function() {                                                                                      // 289
        return Spacebars.mustache(Spacebars.dot(view.lookup("reaction"), "emoji"));                                   // 290
      }                                                                                                               // 291
    }, function() {                                                                                                   // 292
      return Spacebars.attrMustache(view.lookup("markUserReaction"), view.lookup("reaction"));                        // 293
    }), "\n                    ", HTML.SPAN({                                                                         // 294
      class: "reaction-emoji"                                                                                         // 295
    }, Blaze._TemplateWith(function() {                                                                               // 296
      return Spacebars.call(Spacebars.dot(view.lookup("reaction"), "emoji"));                                         // 297
    }, function() {                                                                                                   // 298
      return Spacebars.include(view.lookupTemplate("renderEmoji"));                                                   // 299
    })), "\n                    ", HTML.SPAN({                                                                        // 300
      class: "reaction-count"                                                                                         // 301
    }, Blaze.View("lookup:reaction.count", function() {                                                               // 302
      return Spacebars.mustache(Spacebars.dot(view.lookup("reaction"), "count"));                                     // 303
    })), "\n                    ", HTML.UL({                                                                          // 304
      class: "people"                                                                                                 // 305
    }, "\n\t\t\t\t\t\t", HTML.SPAN({                                                                                  // 306
      style: "font-weight: bold;"                                                                                     // 307
    }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:reaction.usernames", function() {                                       // 308
      return Spacebars.mustache(Spacebars.dot(view.lookup("reaction"), "usernames"));                                 // 309
    }), " ", HTML.SPAN({                                                                                              // 310
      style: "color: #aaa;"                                                                                           // 311
    }, Blaze.View("lookup:reaction.reaction", function() {                                                            // 312
      return Spacebars.mustache(Spacebars.dot(view.lookup("reaction"), "reaction"));                                  // 313
    })), "\n\t\t\t\t\t\t"), "\n                    "), "\n                "), "\n            " ];                     // 314
  }), "\n            ", HTML.Raw('<li class="add-reaction">\n                <span class="icon-people-plus"></span>\n            </li>'), "\n        "), "\n    ");
}));                                                                                                                  // 316
                                                                                                                      // 317
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messageBox.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/template.messageBox.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messageBox");                                                                                   // 2
Template["messageBox"] = new Template("Template.messageBox", (function() {                                            // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("subscribed"));                                                                 // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.FORM({                                                                                    // 8
      class: "message-form",                                                                                          // 9
      method: "post",                                                                                                 // 10
      action: "/"                                                                                                     // 11
    }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                   // 12
      return Spacebars.call(view.lookup("getPopupConfig"));                                                           // 13
    }, function() {                                                                                                   // 14
      return Spacebars.include(view.lookupTemplate("messagePopupConfig"));                                            // 15
    }), "\n\n\t\t\t", Blaze.If(function() {                                                                           // 16
      return Spacebars.call(view.lookup("allowedToSend"));                                                            // 17
    }, function() {                                                                                                   // 18
      return [ "\n\t\t\t\t", HTML.DIV({                                                                               // 19
        class: "message-input border-component-color"                                                                 // 20
      }, "\n\n\t\t\t\t\t", HTML.DIV({                                                                                 // 21
        class: "input-message-container"                                                                              // 22
      }, "\n\n\t\t\t\t\t\t", HTML.TEXTAREA({                                                                          // 23
        dir: "auto",                                                                                                  // 24
        name: "msg",                                                                                                  // 25
        maxlength: function() {                                                                                       // 26
          return Spacebars.mustache(view.lookup("maxMessageLength"));                                                 // 27
        },                                                                                                            // 28
        class: "message-form-text input-message autogrow-short",                                                      // 29
        placeholder: function() {                                                                                     // 30
          return Spacebars.mustache(view.lookup("_"), "Message");                                                     // 31
        }                                                                                                             // 32
      }), "\n\n\t\t\t\t\t\t", HTML.DIV({                                                                              // 33
        class: "inner-left-toolbar"                                                                                   // 34
      }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                 // 35
        class: "emoji-picker-icon icon-people secondary-font-color"                                                   // 36
      }), "\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t"), "\n\n\t\t\t\t\t", Blaze.Unless(function() {                           // 37
        return Spacebars.call(view.lookup("showSend"));                                                               // 38
      }, function() {                                                                                                 // 39
        return [ "\n\n\t\t\t\t\t\t", HTML.DIV({                                                                       // 40
          class: function() {                                                                                         // 41
            return [ "share-items ", Spacebars.mustache(view.lookup("groupAttachHidden")) ];                          // 42
          }                                                                                                           // 43
        }, "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                // 44
          return Spacebars.call(view.lookup("fileUploadEnabled"));                                                    // 45
        }, function() {                                                                                               // 46
          return [ "\n\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                 // 47
            class: "message-buttons file"                                                                             // 48
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                         // 49
            class: "icon-attach file"                                                                                 // 50
          }), "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 51
            type: "file",                                                                                             // 52
            accept: function() {                                                                                      // 53
              return Spacebars.mustache(view.lookup("fileUploadAllowedMediaTypes"));                                  // 54
            }                                                                                                         // 55
          }), "\n\t\t\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                    // 56
            return Spacebars.call(view.lookup("showMic"));                                                            // 57
          }, function() {                                                                                             // 58
            return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                               // 59
              class: "message-buttons mic-button"                                                                     // 60
            }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                   // 61
              class: "mic"                                                                                            // 62
            }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                   // 63
              class: "icon-mic",                                                                                      // 64
              "aria-label": function() {                                                                              // 65
                return Spacebars.mustache(view.lookup("_"), "Record");                                                // 66
              }                                                                                                       // 67
            }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                       // 68
              class: "stop-mic hidden"                                                                                // 69
            }, "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                   // 70
              class: "icon-stop",                                                                                     // 71
              "aria-label": function() {                                                                              // 72
                return Spacebars.mustache(view.lookup("_"), "Stop_Recording");                                        // 73
              }                                                                                                       // 74
            }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                           // 75
          }), "\n\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                           // 76
            return Spacebars.call(view.lookup("showVRec"));                                                           // 77
          }, function() {                                                                                             // 78
            return [ "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                               // 79
              class: "message-buttons video-button"                                                                   // 80
            }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                     // 81
              class: "icon-videocam",                                                                                 // 82
              "aria-label": function() {                                                                              // 83
                return Spacebars.mustache(view.lookup("_"), "Record");                                                // 84
              }                                                                                                       // 85
            }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                      // 86
          }), "\n\n                                ", Blaze.If(function() {                                           // 87
            return Spacebars.call(view.lookup("showChart"));                                                          // 88
          }, function() {                                                                                             // 89
            return [ "\n                                    ", HTML.DIV({                                             // 90
              class: "message-buttons chart-button"                                                                   // 91
            }, "\n                                        ", HTML.I({                                                 // 92
              class: "icon-chart",                                                                                    // 93
              "aria-label": function() {                                                                              // 94
                return Spacebars.mustache(view.lookup("_"), "Chart");                                                 // 95
              }                                                                                                       // 96
            }), "\n                                    "), "\n                                " ];                    // 97
          }), "\n\n\t\t\t\t\t\t\t" ];                                                                                 // 98
        }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 99
          return Spacebars.call(view.lookup("showLocation"));                                                         // 100
        }, function() {                                                                                               // 101
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                   // 102
            class: "message-buttons location-button"                                                                  // 103
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                         // 104
            class: "icon-location"                                                                                    // 105
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                            // 106
        }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                               // 107
          return Spacebars.call(view.lookup("showSandstorm"));                                                        // 108
        }, function() {                                                                                               // 109
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                   // 110
            class: "message-buttons sandstorm-offer"                                                                  // 111
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                         // 112
            class: "icon-plus",                                                                                       // 113
            title: function() {                                                                                       // 114
              return Spacebars.mustache(view.lookup("_"), "Sandstorm_Powerbox_Share");                                // 115
            }                                                                                                         // 116
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                            // 117
        }), "\n\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t", Blaze.If(function() {                                            // 118
          return Spacebars.call(view.lookup("groupAttachHidden"));                                                    // 119
        }, function() {                                                                                               // 120
          return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                     // 121
            class: "message-buttons share"                                                                            // 122
          }, "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                           // 123
            class: "icon-plus"                                                                                        // 124
          }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                                                // 125
        }), "\n\n\t\t\t\t\t" ];                                                                                       // 126
      }), "\n\n\t\t\t\t\t", Blaze.If(function() {                                                                     // 127
        return Spacebars.call(view.lookup("showSend"));                                                               // 128
      }, function() {                                                                                                 // 129
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                         // 130
          class: "message-buttons send-button"                                                                        // 131
        }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                               // 132
          class: "icon-paper-plane",                                                                                  // 133
          "aria-label": function() {                                                                                  // 134
            return Spacebars.mustache(view.lookup("_"), "Send");                                                      // 135
          }                                                                                                           // 136
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 137
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                // 138
    }, function() {                                                                                                   // 139
      return [ "\n\t\t\t\t", HTML.DIV({                                                                               // 140
        class: "stream-info"                                                                                          // 141
      }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                        // 142
        return Spacebars.call(view.lookup("isBlockedOrBlocker"));                                                     // 143
      }, function() {                                                                                                 // 144
        return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                // 145
          return Spacebars.mustache(view.lookup("_"), "room_is_blocked");                                             // 146
        }), "\n\t\t\t\t\t" ];                                                                                         // 147
      }, function() {                                                                                                 // 148
        return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                // 149
          return Spacebars.mustache(view.lookup("_"), "room_is_read_only");                                           // 150
        }), "\n\t\t\t\t\t" ];                                                                                         // 151
      }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                // 152
    }), "\n\n\t\t\t", HTML.DIV({                                                                                      // 153
      class: "users-typing"                                                                                           // 154
    }, "\n\t\t\t\t", Spacebars.With(function() {                                                                      // 155
      return Spacebars.call(view.lookup("usersTyping"));                                                              // 156
    }, function() {                                                                                                   // 157
      return [ "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:users", function() {                                    // 158
        return Spacebars.mustache(view.lookup("users"));                                                              // 159
      })), "\n\t\t\t\t\t", Blaze.If(function() {                                                                      // 160
        return Spacebars.call(view.lookup("multi"));                                                                  // 161
      }, function() {                                                                                                 // 162
        return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                              // 163
          return Spacebars.call(view.lookup("selfTyping"));                                                           // 164
        }, function() {                                                                                               // 165
          return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                            // 166
            return Spacebars.mustache(view.lookup("_"), "are_also_typing");                                           // 167
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 168
        }, function() {                                                                                               // 169
          return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                            // 170
            return Spacebars.mustache(view.lookup("_"), "are_typing");                                                // 171
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 172
        }), "\n\t\t\t\t\t" ];                                                                                         // 173
      }, function() {                                                                                                 // 174
        return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                              // 175
          return Spacebars.call(view.lookup("selfTyping"));                                                           // 176
        }, function() {                                                                                               // 177
          return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                            // 178
            return Spacebars.mustache(view.lookup("_"), "is_also_typing", Spacebars.kw({                              // 179
              context: "male"                                                                                         // 180
            }));                                                                                                      // 181
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 182
        }, function() {                                                                                               // 183
          return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                            // 184
            return Spacebars.mustache(view.lookup("_"), "is_typing", Spacebars.kw({                                   // 185
              context: "male"                                                                                         // 186
            }));                                                                                                      // 187
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 188
        }), "\n\t\t\t\t\t" ];                                                                                         // 189
      }), "\n\t\t\t\t" ];                                                                                             // 190
    }), "\n\t\t\t"), "\n\n\t\t\t", Blaze.If(function() {                                                              // 191
      return Spacebars.call(view.lookup("allowedToSend"));                                                            // 192
    }, function() {                                                                                                   // 193
      return [ "\n\t\t\t\t", Blaze.If(function() {                                                                    // 194
        return Spacebars.call(view.lookup("showFormattingTips"));                                                     // 195
      }, function() {                                                                                                 // 196
        return [ "\n\t\t\t\t\t", HTML.DIV({                                                                           // 197
          class: "formatting-tips",                                                                                   // 198
          "aria-hidden": "true",                                                                                      // 199
          dir: "auto"                                                                                                 // 200
        }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 201
          return Spacebars.call(view.lookup("showMarkdown"));                                                         // 202
        }, function() {                                                                                               // 203
          return [ "\n\t\t\t\t\t\t\t", HTML.B("*", Blaze.View("lookup:_", function() {                                // 204
            return Spacebars.mustache(view.lookup("_"), "bold");                                                      // 205
          }), "*"), "\n\t\t\t\t\t\t\t", HTML.I("_", Blaze.View("lookup:_", function() {                               // 206
            return Spacebars.mustache(view.lookup("_"), "italics");                                                   // 207
          }), "_"), "\n\t\t\t\t\t\t\t", HTML.SPAN("~", HTML.STRIKE(Blaze.View("lookup:_", function() {                // 208
            return Spacebars.mustache(view.lookup("_"), "strike");                                                    // 209
          })), "~"), "\n\t\t\t\t\t\t" ];                                                                              // 210
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 211
          return Spacebars.call(view.lookup("showMarkdownCode"));                                                     // 212
        }, function() {                                                                                               // 213
          return [ "\n\t\t\t\t\t\t\t", HTML.CODE({                                                                    // 214
            class: "code-colors inline"                                                                               // 215
          }, "`", Blaze.View("lookup:_", function() {                                                                 // 216
            return Spacebars.mustache(view.lookup("_"), "inline_code");                                               // 217
          }), "`"), "\n\t\t\t\t\t\t\t", HTML.CODE({                                                                   // 218
            class: "code-colors inline"                                                                               // 219
          }, HTML.SPAN({                                                                                              // 220
            class: "hidden-br"                                                                                        // 221
          }, HTML.BR()), "```", HTML.SPAN({                                                                           // 222
            class: "hidden-br"                                                                                        // 223
          }, HTML.BR()), HTML.I({                                                                                     // 224
            class: "icon-level-down"                                                                                  // 225
          }), Blaze.View("lookup:_", function() {                                                                     // 226
            return Spacebars.mustache(view.lookup("_"), "multi");                                                     // 227
          }), HTML.SPAN({                                                                                             // 228
            class: "hidden-br"                                                                                        // 229
          }, HTML.BR()), HTML.I({                                                                                     // 230
            class: "icon-level-down"                                                                                  // 231
          }), Blaze.View("lookup:_", function() {                                                                     // 232
            return Spacebars.mustache(view.lookup("_"), "line");                                                      // 233
          }), HTML.SPAN({                                                                                             // 234
            class: "hidden-br"                                                                                        // 235
          }, HTML.BR()), HTML.I({                                                                                     // 236
            class: "icon-level-down"                                                                                  // 237
          }), "```"), "\n\t\t\t\t\t\t" ];                                                                             // 238
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 239
          return Spacebars.call(view.lookup("katexSyntax"));                                                          // 240
        }, function() {                                                                                               // 241
          return [ "\n\t\t\t\t\t\t\t", HTML.SPAN(HTML.A({                                                             // 242
            href: "https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX",                                     // 243
            target: "_blank"                                                                                          // 244
          }, Blaze.View("lookup:katexSyntax", function() {                                                            // 245
            return Spacebars.mustache(view.lookup("katexSyntax"));                                                    // 246
          }))), "\n\t\t\t\t\t\t" ];                                                                                   // 247
        }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 248
          return Spacebars.call(view.lookup("showMarkdown"));                                                         // 249
        }, function() {                                                                                               // 250
          return [ "\n\t\t\t\t\t\t\t", HTML.Q(HTML.SPAN({                                                             // 251
            class: "hidden-br"                                                                                        // 252
          }, HTML.BR()), HTML.CharRef({                                                                               // 253
            html: "&gt;",                                                                                             // 254
            str: ">"                                                                                                  // 255
          }), Blaze.View("lookup:_", function() {                                                                     // 256
            return Spacebars.mustache(view.lookup("_"), "quote");                                                     // 257
          })), "\n\t\t\t\t\t\t" ];                                                                                    // 258
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                          // 259
      }), "\n\t\t\t" ];                                                                                               // 260
    }), "\n\n\t\t\t", HTML.DIV({                                                                                      // 261
      class: "editing-commands",                                                                                      // 262
      "aria-hidden": "true",                                                                                          // 263
      dir: "auto"                                                                                                     // 264
    }, "\n\t\t\t\t", HTML.DIV({                                                                                       // 265
      class: "editing-commands-cancel"                                                                                // 266
    }, Blaze.View("lookup:_", function() {                                                                            // 267
      return Spacebars.mustache(view.lookup("_"), "Esc_to");                                                          // 268
    }), " ", HTML.BUTTON({                                                                                            // 269
      type: "button"                                                                                                  // 270
    }, Blaze.View("lookup:_", function() {                                                                            // 271
      return Spacebars.mustache(view.lookup("_"), "Cancel_message_input");                                            // 272
    }))), "\n\t\t\t\t", HTML.DIV({                                                                                    // 273
      class: "editing-commands-save"                                                                                  // 274
    }, Blaze.View("lookup:_", function() {                                                                            // 275
      return Spacebars.mustache(view.lookup("_"), "Enter_to");                                                        // 276
    }), " ", HTML.BUTTON({                                                                                            // 277
      type: "button"                                                                                                  // 278
    }, Blaze.View("lookup:_", function() {                                                                            // 279
      return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                    // 280
    }))), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                           // 281
  }, function() {                                                                                                     // 282
    return [ "\n\t\t", Spacebars.With(function() {                                                                    // 283
      return Spacebars.call(view.lookup("notSubscribedTpl"));                                                         // 284
    }, function() {                                                                                                   // 285
      return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                           // 286
        return Spacebars.call(view.lookup("."));                                                                      // 287
      }, function() {                                                                                                 // 288
        return Spacebars.include(function() {                                                                         // 289
          return Spacebars.call(Template.__dynamic);                                                                  // 290
        });                                                                                                           // 291
      }), "\n\t\t" ];                                                                                                 // 292
    }, function() {                                                                                                   // 293
      return [ "\n\t\t\t", Blaze.If(function() {                                                                      // 294
        return Spacebars.call(view.lookup("canJoin"));                                                                // 295
      }, function() {                                                                                                 // 296
        return [ "\n\t\t\t", HTML.DIV("\n\t\t\t\t", Blaze.View("lookup:_", function() {                               // 297
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "you_are_in_preview_mode_of", Spacebars.kw({  // 298
            room_name: view.lookup("roomName")                                                                        // 299
          })));                                                                                                       // 300
        }), "\n\t\t\t\t", Blaze.If(function() {                                                                       // 301
          return Spacebars.call(view.lookup("joinCodeRequired"));                                                     // 302
        }, function() {                                                                                               // 303
          return [ "\n\t\t\t\t\t", HTML.INPUT({                                                                       // 304
            type: "text",                                                                                             // 305
            name: "joinCode",                                                                                         // 306
            placeholder: function() {                                                                                 // 307
              return Spacebars.mustache(view.lookup("_"), "Code");                                                    // 308
            },                                                                                                        // 309
            style: "width: 100px"                                                                                     // 310
          }), "\n\t\t\t\t" ];                                                                                         // 311
        }), "\n\t\t\t\t", HTML.BUTTON({                                                                               // 312
          class: "button join"                                                                                        // 313
        }, HTML.SPAN(HTML.I({                                                                                         // 314
          class: "icon-login"                                                                                         // 315
        }), " ", Blaze.View("lookup:_", function() {                                                                  // 316
          return Spacebars.mustache(view.lookup("_"), "join");                                                        // 317
        }))), "\n\t\t\t"), "\n\t\t\t" ];                                                                              // 318
      }), "\n\t\t\t", Blaze.If(function() {                                                                           // 319
        return Spacebars.call(view.lookup("anonymousRead"));                                                          // 320
      }, function() {                                                                                                 // 321
        return [ "\n\t\t\t\t", HTML.DIV("\n\t\t\t\t\t", HTML.BUTTON({                                                 // 322
          class: "button register"                                                                                    // 323
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                              // 324
          return Spacebars.mustache(view.lookup("_"), "Sign_in_to_start_talking");                                    // 325
        }))), "\n\t\t\t\t\t", Blaze.If(function() {                                                                   // 326
          return Spacebars.call(view.lookup("anonymousWrite"));                                                       // 327
        }, function() {                                                                                               // 328
          return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                    // 329
            class: "button register-anonymous"                                                                        // 330
          }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                            // 331
            return Spacebars.mustache(view.lookup("_"), "Or_talk_as_anonymous");                                      // 332
          }))), "\n\t\t\t\t\t" ];                                                                                     // 333
        }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                              // 334
      }), "\n\t\t" ];                                                                                                 // 335
    }), "\n\t" ];                                                                                                     // 336
  });                                                                                                                 // 337
}));                                                                                                                  // 338
                                                                                                                      // 339
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messageDropdown.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/template.messageDropdown.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messageDropdown");                                                                              // 2
Template["messageDropdown"] = new Template("Template.messageDropdown", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "message-dropdown content-background-color"                                                                // 6
  }, "\n\t\t", HTML.UL("\n\t\t\t", HTML.LI({                                                                          // 7
    class: "message-dropdown-close secondary-background-color border-component-color"                                 // 8
  }, HTML.I({                                                                                                         // 9
    class: " icon-angle-left",                                                                                        // 10
    "aria-label": function() {                                                                                        // 11
      return Spacebars.mustache(view.lookup("_"), "Close");                                                           // 12
    }                                                                                                                 // 13
  })), "\n\t\t\t", Blaze.If(function() {                                                                              // 14
    return Spacebars.call(Spacebars.dot(view.lookup("actions"), "length"));                                           // 15
  }, function() {                                                                                                     // 16
    return [ "\n\t\t\t\t", Blaze.Each(function() {                                                                    // 17
      return Spacebars.call(view.lookup("actions"));                                                                  // 18
    }, function() {                                                                                                   // 19
      return [ "\n\t\t\t\t\t", HTML.LI({                                                                              // 20
        class: function() {                                                                                           // 21
          return [ Spacebars.mustache(view.lookup("id")), " ", Spacebars.mustache(view.lookup("classes")), " message-action" ];
        },                                                                                                            // 23
        title: function() {                                                                                           // 24
          return Spacebars.mustache(view.lookup("_"), view.lookup("i18nLabel"));                                      // 25
        },                                                                                                            // 26
        "data-id": function() {                                                                                       // 27
          return Spacebars.mustache(view.lookup("id"));                                                               // 28
        }                                                                                                             // 29
      }, HTML.I({                                                                                                     // 30
        class: function() {                                                                                           // 31
          return Spacebars.mustache(view.lookup("icon"));                                                             // 32
        },                                                                                                            // 33
        "aria-label": function() {                                                                                    // 34
          return Spacebars.mustache(view.lookup("_"), view.lookup("i18nLabel"));                                      // 35
        }                                                                                                             // 36
      })), "\n\t\t\t\t" ];                                                                                            // 37
    }), "\n\t\t\t" ];                                                                                                 // 38
  }), "\n\t\t"), "\n\t");                                                                                             // 39
}));                                                                                                                  // 40
                                                                                                                      // 41
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"popup":{"template.messagePopup.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopup.js                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopup");                                                                                 // 2
Template["messagePopup"] = new Template("Template.messagePopup", (function() {                                        // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("isOpen"));                                                                     // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.DIV({                                                                                     // 8
      class: "message-popup-position"                                                                                 // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                         // 10
      class: function() {                                                                                             // 11
        return [ "message-popup content-background-color ", Spacebars.mustache(view.lookup("cls")) ];                 // 12
      }                                                                                                               // 13
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                            // 14
      return Spacebars.call(view.lookup("title"));                                                                    // 15
    }, function() {                                                                                                   // 16
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                             // 17
        class: "message-popup-title secondary-background-color border-component-color"                                // 18
      }, "\n\t\t\t\t\t\t", Blaze.View("lookup:title", function() {                                                    // 19
        return Spacebars.mustache(view.lookup("title"));                                                              // 20
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                            // 21
    }), "\n\t\t\t\t", HTML.DIV({                                                                                      // 22
      class: "message-popup-items"                                                                                    // 23
    }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                        // 24
      return Spacebars.call(view.lookup("data"));                                                                     // 25
    }, function() {                                                                                                   // 26
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                           // 27
        class: "popup-item",                                                                                          // 28
        "data-id": function() {                                                                                       // 29
          return Spacebars.mustache(view.lookup("_id"));                                                              // 30
        }                                                                                                             // 31
      }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                         // 32
        return {                                                                                                      // 33
          template: Spacebars.call(Spacebars.dot(view.lookup(".."), "template"))                                      // 34
        };                                                                                                            // 35
      }, function() {                                                                                                 // 36
        return Spacebars.include(function() {                                                                         // 37
          return Spacebars.call(Template.__dynamic);                                                                  // 38
        });                                                                                                           // 39
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                        // 40
    }), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.Unless(function() {                                                        // 41
      return Spacebars.call(view.lookup("data"));                                                                     // 42
    }, function() {                                                                                                   // 43
      return [ "\n\t\t\t\t\t", Blaze.Unless(function() {                                                              // 44
        return Spacebars.call(Spacebars.dot(view.lookup("isLoading"), "get"));                                        // 45
      }, function() {                                                                                                 // 46
        return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                              // 47
          return Spacebars.call(view.lookup("emptyTemplate"));                                                        // 48
        }, function() {                                                                                               // 49
          return [ "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                               // 50
            return {                                                                                                  // 51
              template: Spacebars.call(view.lookup("emptyTemplate"))                                                  // 52
            };                                                                                                        // 53
          }, function() {                                                                                             // 54
            return Spacebars.include(function() {                                                                     // 55
              return Spacebars.call(Template.__dynamic);                                                              // 56
            });                                                                                                       // 57
          }), "\n\t\t\t\t\t\t" ];                                                                                     // 58
        }), "\n\t\t\t\t\t" ];                                                                                         // 59
      }), "\n\t\t\t\t" ];                                                                                             // 60
    }), "\n\t\t\t\t", Blaze.If(function() {                                                                           // 61
      return Spacebars.call(Spacebars.dot(view.lookup("isLoading"), "get"));                                          // 62
    }, function() {                                                                                                   // 63
      return [ "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t" ];                     // 64
    }), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                             // 65
  });                                                                                                                 // 66
}));                                                                                                                  // 67
                                                                                                                      // 68
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messagePopupChannel.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopupChannel.js                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopupChannel");                                                                          // 2
Template["messagePopupChannel"] = new Template("Template.messagePopupChannel", (function() {                          // 3
  var view = this;                                                                                                    // 4
  return [ HTML.I({                                                                                                   // 5
    class: function() {                                                                                               // 6
      return Spacebars.mustache(view.lookup("icon"));                                                                 // 7
    }                                                                                                                 // 8
  }), "\n\t", Blaze.View("lookup:name", function() {                                                                  // 9
    return Spacebars.mustache(view.lookup("name"));                                                                   // 10
  }) ];                                                                                                               // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messagePopupConfig.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopupConfig.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopupConfig");                                                                           // 2
Template["messagePopupConfig"] = new Template("Template.messagePopupConfig", (function() {                            // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "message-popup-results"                                                                                    // 6
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 7
    return Spacebars.call(view.lookup("emojiEnabled"));                                                               // 8
  }, function() {                                                                                                     // 9
    return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                             // 10
      return Spacebars.call(view.lookup("popupEmojiConfig"));                                                         // 11
    }, function() {                                                                                                   // 12
      return Spacebars.include(view.lookupTemplate("messagePopup"));                                                  // 13
    }), "\n\t\t" ];                                                                                                   // 14
  }), "\n\t\t", Blaze._TemplateWith(function() {                                                                      // 15
    return Spacebars.call(view.lookup("popupChannelConfig"));                                                         // 16
  }, function() {                                                                                                     // 17
    return Spacebars.include(view.lookupTemplate("messagePopup"));                                                    // 18
  }), "\n\t\t", Blaze._TemplateWith(function() {                                                                      // 19
    return Spacebars.call(view.lookup("popupUserConfig"));                                                            // 20
  }, function() {                                                                                                     // 21
    return Spacebars.include(view.lookupTemplate("messagePopup"));                                                    // 22
  }), "\n\t\t", Blaze._TemplateWith(function() {                                                                      // 23
    return Spacebars.call(view.lookup("popupSlashCommandsConfig"));                                                   // 24
  }, function() {                                                                                                     // 25
    return Spacebars.include(view.lookupTemplate("messagePopup"));                                                    // 26
  }), "\n\t");                                                                                                        // 27
}));                                                                                                                  // 28
                                                                                                                      // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messagePopupEmoji.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopupEmoji.js                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopupEmoji");                                                                            // 2
Template["messagePopupEmoji"] = new Template("Template.messagePopupEmoji", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return [ Blaze._TemplateWith(function() {                                                                           // 5
    return Spacebars.call(view.lookup("_id"));                                                                        // 6
  }, function() {                                                                                                     // 7
    return Spacebars.include(view.lookupTemplate("renderEmoji"));                                                     // 8
  }), "\n\t", Blaze.View("lookup:_id", function() {                                                                   // 9
    return Spacebars.mustache(view.lookup("_id"));                                                                    // 10
  }) ];                                                                                                               // 11
}));                                                                                                                  // 12
                                                                                                                      // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messagePopupSlashCommand.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopupSlashCommand.js                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopupSlashCommand");                                                                     // 2
Template["messagePopupSlashCommand"] = new Template("Template.messagePopupSlashCommand", (function() {                // 3
  var view = this;                                                                                                    // 4
  return [ HTML.STRONG("/", Blaze.View("lookup:_id", function() {                                                     // 5
    return Spacebars.mustache(view.lookup("_id"));                                                                    // 6
  })), Blaze.If(function() {                                                                                          // 7
    return Spacebars.call(view.lookup("params"));                                                                     // 8
  }, function() {                                                                                                     // 9
    return [ " ", Blaze.View("lookup:params", function() {                                                            // 10
      return Spacebars.mustache(view.lookup("params"));                                                               // 11
    }) ];                                                                                                             // 12
  }), "\n\t", HTML.DIV({                                                                                              // 13
    class: "popup-slash-command-description"                                                                          // 14
  }, HTML.I(Blaze.View("lookup:description", function() {                                                             // 15
    return Spacebars.mustache(view.lookup("description"));                                                            // 16
  }))) ];                                                                                                             // 17
}));                                                                                                                  // 18
                                                                                                                      // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messagePopupUser.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/template.messagePopupUser.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("messagePopupUser");                                                                             // 2
Template["messagePopupUser"] = new Template("Template.messagePopupUser", (function() {                                // 3
  var view = this;                                                                                                    // 4
  return [ Blaze.Unless(function() {                                                                                  // 5
    return Spacebars.call(view.lookup("system"));                                                                     // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.DIV({                                                                                     // 8
      class: function() {                                                                                             // 9
        return [ "popup-user-status border-transparent-dark popup-user-status-", Spacebars.mustache(view.lookup("status")) ];
      }                                                                                                               // 11
    }), "\n\t\t", HTML.DIV({                                                                                          // 12
      class: "popup-user-avatar",                                                                                     // 13
      style: function() {                                                                                             // 14
        return [ "background-image:url(", Spacebars.mustache(view.lookup("avatarUrlFromUsername"), view.lookup("username")), ");" ];
      }                                                                                                               // 16
    }), "\n\t" ];                                                                                                     // 17
  }), "\n\t", HTML.STRONG(Blaze.View("lookup:username", function() {                                                  // 18
    return Spacebars.mustache(view.lookup("username"));                                                               // 19
  })), " ", Blaze.View("lookup:name", function() {                                                                    // 20
    return Spacebars.mustache(view.lookup("name"));                                                                   // 21
  }) ];                                                                                                               // 22
}));                                                                                                                  // 23
                                                                                                                      // 24
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messagePopup.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/messagePopup.coffee.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var getCursorPosition, keys, setCursorPosition, val;                                                                  // 3
keys = {                                                                                                              // 3
  TAB: 9,                                                                                                             // 4
  ENTER: 13,                                                                                                          // 5
  ESC: 27,                                                                                                            // 6
  ARROW_LEFT: 37,                                                                                                     // 7
  ARROW_UP: 38,                                                                                                       // 8
  ARROW_RIGHT: 39,                                                                                                    // 9
  ARROW_DOWN: 40                                                                                                      // 10
};                                                                                                                    // 3
                                                                                                                      //
getCursorPosition = function (input) {                                                                                // 13
  var sel, selLen;                                                                                                    // 14
                                                                                                                      //
  if (input == null) {                                                                                                // 14
    return;                                                                                                           // 14
  }                                                                                                                   // 17
                                                                                                                      //
  if (input.selectionStart != null) {                                                                                 // 15
    return input.selectionStart;                                                                                      // 16
  } else if (document.selection != null) {                                                                            // 15
    input.focus();                                                                                                    // 18
    sel = document.selection.createRange();                                                                           // 19
    selLen = document.selection.createRange().text.length;                                                            // 20
    sel.moveStart('character', -input.value.length);                                                                  // 21
    return sel.text.length - selLen;                                                                                  // 22
  }                                                                                                                   // 26
};                                                                                                                    // 13
                                                                                                                      //
setCursorPosition = function (input, caretPos) {                                                                      // 24
  var range;                                                                                                          // 25
                                                                                                                      //
  if (input == null) {                                                                                                // 25
    return;                                                                                                           // 25
  }                                                                                                                   // 33
                                                                                                                      //
  if (input.selectionStart != null) {                                                                                 // 26
    input.focus();                                                                                                    // 27
    return input.setSelectionRange(caretPos, caretPos);                                                               // 28
  } else if (document.selection != null) {                                                                            // 26
    range = input.createTextRange();                                                                                  // 30
    range.move('character', caretPos);                                                                                // 31
    return range.select();                                                                                            // 40
  }                                                                                                                   // 41
};                                                                                                                    // 24
                                                                                                                      //
val = function (v, d) {                                                                                               // 34
  if (v != null) {                                                                                                    // 35
    return v;                                                                                                         // 46
  } else {                                                                                                            // 35
    return d;                                                                                                         // 48
  }                                                                                                                   // 49
};                                                                                                                    // 34
                                                                                                                      //
Template.messagePopup.onCreated(function () {                                                                         // 37
  var template;                                                                                                       // 38
  template = this;                                                                                                    // 38
  template.textFilter = new ReactiveVar('');                                                                          // 40
  template.textFilterDelay = val(template.data.textFilterDelay, 0);                                                   // 42
  template.open = val(template.data.open, new ReactiveVar(false));                                                    // 44
  template.hasData = new ReactiveVar(false);                                                                          // 46
  template.value = new ReactiveVar();                                                                                 // 48
  template.trigger = val(template.data.trigger, '');                                                                  // 50
  template.triggerAnywhere = val(template.data.triggerAnywhere, true);                                                // 52
  template.closeOnEsc = val(template.data.closeOnEsc, true);                                                          // 54
  template.blurOnSelectItem = val(template.data.blurOnSelectItem, false);                                             // 56
  template.prefix = val(template.data.prefix, template.trigger);                                                      // 58
  template.suffix = val(template.data.suffix, '');                                                                    // 60
                                                                                                                      //
  if (template.triggerAnywhere === true) {                                                                            // 62
    template.matchSelectorRegex = val(template.data.matchSelectorRegex, new RegExp("(?:^| )" + template.trigger + "[^\\s]*$"));
  } else {                                                                                                            // 62
    template.matchSelectorRegex = val(template.data.matchSelectorRegex, new RegExp("(?:^)" + template.trigger + "[^\\s]*$"));
  }                                                                                                                   // 70
                                                                                                                      //
  template.selectorRegex = val(template.data.selectorRegex, new RegExp(template.trigger + "([^\\s]*)$"));             // 67
  template.replaceRegex = val(template.data.replaceRegex, new RegExp(template.trigger + "[^\\s]*$"));                 // 69
  template.getValue = val(template.data.getValue, function (_id) {                                                    // 71
    return _id;                                                                                                       // 71
  });                                                                                                                 // 71
                                                                                                                      //
  template.up = function (_this) {                                                                                    // 73
    return function () {                                                                                              // 77
      var current, previous;                                                                                          // 74
      current = template.find('.popup-item.selected');                                                                // 74
      previous = $(current).prev('.popup-item')[0] || template.find('.popup-item:last-child');                        // 75
                                                                                                                      //
      if (previous != null) {                                                                                         // 76
        current.className = current.className.replace(/\sselected/, '');                                              // 77
        previous.className += ' selected';                                                                            // 78
        return template.value.set(previous.getAttribute('data-id'));                                                  // 84
      }                                                                                                               // 85
    };                                                                                                                // 73
  }(this);                                                                                                            // 73
                                                                                                                      //
  template.down = function (_this) {                                                                                  // 81
    return function () {                                                                                              // 89
      var current, next;                                                                                              // 82
      current = template.find('.popup-item.selected');                                                                // 82
      next = $(current).next('.popup-item')[0] || template.find('.popup-item');                                       // 83
                                                                                                                      //
      if (next != null ? next.classList.contains('popup-item') : void 0) {                                            // 84
        current.className = current.className.replace(/\sselected/, '');                                              // 85
        next.className += ' selected';                                                                                // 86
        return template.value.set(next.getAttribute('data-id'));                                                      // 96
      }                                                                                                               // 97
    };                                                                                                                // 81
  }(this);                                                                                                            // 81
                                                                                                                      //
  template.verifySelection = function (_this) {                                                                       // 89
    return function () {                                                                                              // 101
      var current, first;                                                                                             // 90
      current = template.find('.popup-item.selected');                                                                // 90
                                                                                                                      //
      if (current == null) {                                                                                          // 91
        first = template.find('.popup-item');                                                                         // 92
                                                                                                                      //
        if (first != null) {                                                                                          // 93
          first.className += ' selected';                                                                             // 94
          return template.value.set(first.getAttribute('data-id'));                                                   // 108
        } else {                                                                                                      // 93
          return template.value.set(void 0);                                                                          // 110
        }                                                                                                             // 91
      }                                                                                                               // 112
    };                                                                                                                // 89
  }(this);                                                                                                            // 89
                                                                                                                      //
  template.onInputKeydown = function (_this) {                                                                        // 99
    return function (event) {                                                                                         // 116
      var ref;                                                                                                        // 100
                                                                                                                      //
      if (template.open.curValue !== true || template.hasData.curValue !== true) {                                    // 100
        return;                                                                                                       // 101
      }                                                                                                               // 120
                                                                                                                      //
      if ((ref = event.which) === keys.ENTER || ref === keys.TAB) {                                                   // 103
        if (template.blurOnSelectItem === true) {                                                                     // 104
          template.input.blur();                                                                                      // 105
        } else {                                                                                                      // 104
          template.open.set(false);                                                                                   // 107
        }                                                                                                             // 126
                                                                                                                      //
        template.enterValue();                                                                                        // 109
                                                                                                                      //
        if (template.data.cleanOnEnter) {                                                                             // 111
          template.input.value = '';                                                                                  // 112
        }                                                                                                             // 130
                                                                                                                      //
        event.preventDefault();                                                                                       // 114
        event.stopPropagation();                                                                                      // 115
        return;                                                                                                       // 116
      }                                                                                                               // 134
                                                                                                                      //
      if (event.which === keys.ARROW_UP) {                                                                            // 118
        template.up();                                                                                                // 119
        event.preventDefault();                                                                                       // 121
        event.stopPropagation();                                                                                      // 122
        return;                                                                                                       // 123
      }                                                                                                               // 140
                                                                                                                      //
      if (event.which === keys.ARROW_DOWN) {                                                                          // 125
        template.down();                                                                                              // 126
        event.preventDefault();                                                                                       // 128
        event.stopPropagation();                                                                                      // 129
      }                                                                                                               // 145
    };                                                                                                                // 99
  }(this);                                                                                                            // 99
                                                                                                                      //
  template.setTextFilter = _.debounce(function (value) {                                                              // 132
    return template.textFilter.set(value);                                                                            // 149
  }, template.textFilterDelay);                                                                                       // 132
                                                                                                                      //
  template.onInputKeyup = function (_this) {                                                                          // 136
    return function (event) {                                                                                         // 152
      var ref, value;                                                                                                 // 137
                                                                                                                      //
      if (template.closeOnEsc === true && template.open.curValue === true && event.which === keys.ESC) {              // 137
        template.open.set(false);                                                                                     // 138
        event.preventDefault();                                                                                       // 139
        event.stopPropagation();                                                                                      // 140
        return;                                                                                                       // 141
      }                                                                                                               // 159
                                                                                                                      //
      value = template.input.value;                                                                                   // 143
      value = value.substr(0, getCursorPosition(template.input));                                                     // 144
                                                                                                                      //
      if (template.matchSelectorRegex.test(value)) {                                                                  // 146
        template.setTextFilter(value.match(template.selectorRegex)[1]);                                               // 147
        template.open.set(true);                                                                                      // 148
      } else {                                                                                                        // 146
        template.open.set(false);                                                                                     // 150
      }                                                                                                               // 167
                                                                                                                      //
      if (template.open.curValue !== true) {                                                                          // 152
        return;                                                                                                       // 153
      }                                                                                                               // 170
                                                                                                                      //
      if ((ref = event.which) !== keys.ARROW_UP && ref !== keys.ARROW_DOWN) {                                         // 155
        return Meteor.defer(function () {                                                                             // 172
          return template.verifySelection();                                                                          // 173
        });                                                                                                           // 156
      }                                                                                                               // 175
    };                                                                                                                // 136
  }(this);                                                                                                            // 136
                                                                                                                      //
  template.onFocus = function (_this) {                                                                               // 159
    return function (event) {                                                                                         // 179
      var value;                                                                                                      // 160
      template.clickingItem = false;                                                                                  // 160
                                                                                                                      //
      if (template.open.curValue === true) {                                                                          // 162
        return;                                                                                                       // 163
      }                                                                                                               // 184
                                                                                                                      //
      value = template.input.value;                                                                                   // 165
      value = value.substr(0, getCursorPosition(template.input));                                                     // 166
                                                                                                                      //
      if (template.matchSelectorRegex.test(value)) {                                                                  // 168
        template.setTextFilter(value.match(template.selectorRegex)[1]);                                               // 169
        template.open.set(true);                                                                                      // 170
        return Meteor.defer(function () {                                                                             // 190
          return template.verifySelection();                                                                          // 191
        });                                                                                                           // 171
      } else {                                                                                                        // 168
        return template.open.set(false);                                                                              // 194
      }                                                                                                               // 195
    };                                                                                                                // 159
  }(this);                                                                                                            // 159
                                                                                                                      //
  template.onBlur = function (_this) {                                                                                // 176
    return function (event) {                                                                                         // 199
      if (template.open.curValue === false) {                                                                         // 177
        return;                                                                                                       // 178
      }                                                                                                               // 202
                                                                                                                      //
      if (template.clickingItem === true) {                                                                           // 180
        return;                                                                                                       // 181
      }                                                                                                               // 205
                                                                                                                      //
      return template.open.set(false);                                                                                // 206
    };                                                                                                                // 176
  }(this);                                                                                                            // 176
                                                                                                                      //
  template.enterValue = function () {                                                                                 // 185
    var caret, firstPartValue, getValue, lastPartValue, value;                                                        // 186
                                                                                                                      //
    if (template.value.curValue == null) {                                                                            // 186
      return;                                                                                                         // 186
    }                                                                                                                 // 213
                                                                                                                      //
    value = template.input.value;                                                                                     // 188
    caret = getCursorPosition(template.input);                                                                        // 189
    firstPartValue = value.substr(0, caret);                                                                          // 190
    lastPartValue = value.substr(caret);                                                                              // 191
    getValue = this.getValue(template.value.curValue, template.data.collection, template.records.get(), firstPartValue);
                                                                                                                      //
    if (!getValue) {                                                                                                  // 194
      return;                                                                                                         // 195
    }                                                                                                                 // 221
                                                                                                                      //
    firstPartValue = firstPartValue.replace(template.selectorRegex, template.prefix + getValue + template.suffix);    // 197
    template.input.value = firstPartValue + lastPartValue;                                                            // 199
    return setCursorPosition(template.input, firstPartValue.length);                                                  // 224
  };                                                                                                                  // 185
                                                                                                                      //
  template.records = new ReactiveVar([]);                                                                             // 203
  return Tracker.autorun(function () {                                                                                // 227
    var filter, filterCallback, result;                                                                               // 205
                                                                                                                      //
    if (template.data.collection.findOne != null) {                                                                   // 205
      template.data.collection.find().count();                                                                        // 206
    }                                                                                                                 // 231
                                                                                                                      //
    filter = template.textFilter.get();                                                                               // 208
                                                                                                                      //
    if (filter != null) {                                                                                             // 209
      filterCallback = function (_this) {                                                                             // 210
        return function (result) {                                                                                    // 235
          template.hasData.set((result != null ? result.length : void 0) > 0);                                        // 211
          template.records.set(result);                                                                               // 212
          return Meteor.defer(function () {                                                                           // 238
            return template.verifySelection();                                                                        // 239
          });                                                                                                         // 214
        };                                                                                                            // 210
      }(this);                                                                                                        // 210
                                                                                                                      //
      result = template.data.getFilter(template.data.collection, filter, filterCallback);                             // 217
                                                                                                                      //
      if (result != null) {                                                                                           // 218
        return filterCallback(result);                                                                                // 245
      }                                                                                                               // 209
    }                                                                                                                 // 247
  });                                                                                                                 // 204
});                                                                                                                   // 37
Template.messagePopup.onRendered(function () {                                                                        // 222
  var base;                                                                                                           // 223
                                                                                                                      //
  if (this.data.getInput != null) {                                                                                   // 223
    this.input = typeof (base = this.data).getInput === "function" ? base.getInput() : void 0;                        // 224
  } else if (this.data.input) {                                                                                       // 223
    this.input = this.parentTemplate().find(this.data.input);                                                         // 226
  }                                                                                                                   // 257
                                                                                                                      //
  if (this.input == null) {                                                                                           // 228
    console.error('Input not found for popup');                                                                       // 229
  }                                                                                                                   // 260
                                                                                                                      //
  $(this.input).on('keyup', this.onInputKeyup.bind(this));                                                            // 231
  $(this.input).on('keydown', this.onInputKeydown.bind(this));                                                        // 232
  $(this.input).on('focus', this.onFocus.bind(this));                                                                 // 233
  return $(this.input).on('blur', this.onBlur.bind(this));                                                            // 264
});                                                                                                                   // 222
Template.messagePopup.onDestroyed(function () {                                                                       // 237
  $(this.input).off('keyup', this.onInputKeyup);                                                                      // 238
  $(this.input).off('keydown', this.onInputKeydown);                                                                  // 239
  $(this.input).off('focus', this.onFocus);                                                                           // 240
  return $(this.input).off('blur', this.onBlur);                                                                      // 271
});                                                                                                                   // 237
Template.messagePopup.events({                                                                                        // 244
  'mouseenter .popup-item': function (e) {                                                                            // 245
    var current, template;                                                                                            // 246
                                                                                                                      //
    if (e.currentTarget.className.indexOf('selected') > -1) {                                                         // 246
      return;                                                                                                         // 247
    }                                                                                                                 // 279
                                                                                                                      //
    template = Template.instance();                                                                                   // 249
    current = template.find('.popup-item.selected');                                                                  // 251
                                                                                                                      //
    if (current != null) {                                                                                            // 252
      current.className = current.className.replace(/\sselected/, '');                                                // 253
    }                                                                                                                 // 284
                                                                                                                      //
    e.currentTarget.className += ' selected';                                                                         // 254
    return template.value.set(this._id);                                                                              // 286
  },                                                                                                                  // 245
  'mousedown .popup-item, touchstart .popup-item': function (e) {                                                     // 257
    var template;                                                                                                     // 258
    template = Template.instance();                                                                                   // 258
    return template.clickingItem = true;                                                                              // 291
  },                                                                                                                  // 245
  'mouseup .popup-item, touchend .popup-item': function (e) {                                                         // 261
    var template;                                                                                                     // 262
    template = Template.instance();                                                                                   // 262
    template.clickingItem = false;                                                                                    // 264
    template.value.set(this._id);                                                                                     // 266
    template.enterValue();                                                                                            // 268
    template.open.set(false);                                                                                         // 270
    return toolbarSearch.clear();                                                                                     // 300
  }                                                                                                                   // 245
});                                                                                                                   // 245
Template.messagePopup.helpers({                                                                                       // 275
  isOpen: function () {                                                                                               // 276
    return Template.instance().open.get() && (Template.instance().hasData.get() || Template.instance().data.emptyTemplate != null || !Template.instance().parentTemplate(1).subscriptionsReady());
  },                                                                                                                  // 276
  data: function () {                                                                                                 // 279
    var template;                                                                                                     // 280
    template = Template.instance();                                                                                   // 280
    return template.records.get();                                                                                    // 282
  }                                                                                                                   // 276
});                                                                                                                   // 276
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messagePopupChannel.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/messagePopupChannel.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.messagePopupChannel.helpers({                                                                                // 1
	icon: function () {                                                                                                  // 2
		return RocketChat.roomTypes.getIcon(this.t);                                                                        // 3
	}                                                                                                                    // 4
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messagePopupConfig.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/messagePopupConfig.coffee.js                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var getRoomsFromServer, getRoomsFromServerDelayed, getUsersFromServer, getUsersFromServerDelayed;                     // 1
this.filteredUsersMemory = new Mongo.Collection(null);                                                                // 1
Meteor.startup(function () {                                                                                          // 3
  return Tracker.autorun(function () {                                                                                // 6
    var messageUsers, uniqueMessageUsersControl;                                                                      // 5
                                                                                                                      //
    if (Meteor.user() == null || Session.get('openedRoom') == null) {                                                 // 5
      return;                                                                                                         // 6
    }                                                                                                                 // 10
                                                                                                                      //
    filteredUsersMemory.remove({});                                                                                   // 8
    messageUsers = RocketChat.models.Messages.find({                                                                  // 9
      rid: Session.get('openedRoom'),                                                                                 // 9
      'u.username': {                                                                                                 // 9
        $ne: Meteor.user().username                                                                                   // 9
      }                                                                                                               // 9
    }, {                                                                                                              // 9
      fields: {                                                                                                       // 9
        'u.username': 1,                                                                                              // 9
        'u.name': 1,                                                                                                  // 9
        ts: 1                                                                                                         // 9
      },                                                                                                              // 9
      sort: {                                                                                                         // 9
        ts: -1                                                                                                        // 9
      }                                                                                                               // 9
    }).fetch();                                                                                                       // 9
    uniqueMessageUsersControl = {};                                                                                   // 10
    return messageUsers.forEach(function (messageUser) {                                                              // 28
      if (uniqueMessageUsersControl[messageUser.u.username] == null) {                                                // 12
        uniqueMessageUsersControl[messageUser.u.username] = true;                                                     // 13
        return filteredUsersMemory.upsert(messageUser.u.username, {                                                   // 31
          _id: messageUser.u.username,                                                                                // 15
          username: messageUser.u.username,                                                                           // 16
          name: messageUser.u.name,                                                                                   // 17
          status: Session.get('user_' + messageUser.u.username + '_status') || 'offline',                             // 18
          ts: messageUser.ts                                                                                          // 19
        });                                                                                                           // 15
      }                                                                                                               // 38
    });                                                                                                               // 11
  });                                                                                                                 // 4
});                                                                                                                   // 3
                                                                                                                      //
getUsersFromServer = function (_this) {                                                                               // 22
  return function (filter, records, cb) {                                                                             // 44
    var messageUsers;                                                                                                 // 23
    messageUsers = _.pluck(records, 'username');                                                                      // 23
    return Meteor.call('spotlight', filter, messageUsers, {                                                           // 47
      users: true                                                                                                     // 24
    }, function (err, results) {                                                                                      // 24
      var i, len, ref, result;                                                                                        // 25
                                                                                                                      //
      if (err != null) {                                                                                              // 25
        return console.error(err);                                                                                    // 26
      }                                                                                                               // 53
                                                                                                                      //
      if (results.users.length > 0) {                                                                                 // 28
        ref = results.users;                                                                                          // 29
                                                                                                                      //
        for (i = 0, len = ref.length; i < len; i++) {                                                                 // 29
          result = ref[i];                                                                                            // 57
                                                                                                                      //
          if (records.length < 5) {                                                                                   // 30
            records.push({                                                                                            // 31
              _id: result.username,                                                                                   // 32
              username: result.username,                                                                              // 33
              status: 'offline',                                                                                      // 34
              sort: 3                                                                                                 // 35
            });                                                                                                       // 32
          }                                                                                                           // 65
        }                                                                                                             // 29
                                                                                                                      //
        records = _.sortBy(records, 'sort');                                                                          // 37
        return cb(records);                                                                                           // 68
      }                                                                                                               // 69
    });                                                                                                               // 24
  };                                                                                                                  // 22
}(this);                                                                                                              // 22
                                                                                                                      //
getRoomsFromServer = function (_this) {                                                                               // 41
  return function (filter, records, cb) {                                                                             // 75
    return Meteor.call('spotlight', filter, null, {                                                                   // 76
      rooms: true                                                                                                     // 42
    }, function (err, results) {                                                                                      // 42
      var i, len, ref, room;                                                                                          // 43
                                                                                                                      //
      if (err != null) {                                                                                              // 43
        return console.error(err);                                                                                    // 44
      }                                                                                                               // 82
                                                                                                                      //
      if (results.rooms.length > 0) {                                                                                 // 46
        ref = results.rooms;                                                                                          // 47
                                                                                                                      //
        for (i = 0, len = ref.length; i < len; i++) {                                                                 // 47
          room = ref[i];                                                                                              // 86
                                                                                                                      //
          if (records.length < 5) {                                                                                   // 48
            records.push(room);                                                                                       // 49
          }                                                                                                           // 89
        }                                                                                                             // 47
                                                                                                                      //
        return cb(records);                                                                                           // 91
      }                                                                                                               // 92
    });                                                                                                               // 42
  };                                                                                                                  // 41
}(this);                                                                                                              // 41
                                                                                                                      //
getUsersFromServerDelayed = _.throttle(getUsersFromServer, 500);                                                      // 53
getRoomsFromServerDelayed = _.throttle(getRoomsFromServer, 500);                                                      // 54
Template.messagePopupConfig.helpers({                                                                                 // 57
  popupUserConfig: function () {                                                                                      // 58
    var config, self, template;                                                                                       // 59
    self = this;                                                                                                      // 59
    template = Template.instance();                                                                                   // 60
    config = {                                                                                                        // 62
      title: t('People'),                                                                                             // 63
      collection: filteredUsersMemory,                                                                                // 64
      template: 'messagePopupUser',                                                                                   // 65
      getInput: self.getInput,                                                                                        // 66
      textFilterDelay: 200,                                                                                           // 67
      trigger: '@',                                                                                                   // 68
      suffix: ' ',                                                                                                    // 69
      getFilter: function (collection, filter, cb) {                                                                  // 70
        var all, exp, here, items, messageUsers, ref;                                                                 // 71
        exp = new RegExp("" + RegExp.escape(filter), 'i');                                                            // 71
        items = filteredUsersMemory.find({                                                                            // 74
          ts: {                                                                                                       // 74
            $exists: true                                                                                             // 74
          },                                                                                                          // 74
          $or: [{                                                                                                     // 74
            username: exp                                                                                             // 74
          }, {                                                                                                        // 74
            name: exp                                                                                                 // 74
          }]                                                                                                          // 74
        }, {                                                                                                          // 74
          limit: 5,                                                                                                   // 74
          sort: {                                                                                                     // 74
            ts: -1                                                                                                    // 74
          }                                                                                                           // 74
        }).fetch();                                                                                                   // 74
                                                                                                                      //
        if (items.length < 5 && (filter != null ? filter.trim() : void 0) !== '') {                                   // 77
          messageUsers = _.pluck(items, 'username');                                                                  // 78
          Meteor.users.find({                                                                                         // 79
            $and: [{                                                                                                  // 79
              $or: [{                                                                                                 // 79
                username: exp                                                                                         // 79
              }, {                                                                                                    // 79
                name: exp                                                                                             // 79
              }]                                                                                                      // 79
            }, {                                                                                                      // 79
              username: {                                                                                             // 79
                $nin: [(ref = Meteor.user()) != null ? ref.username : void 0].concat(messageUsers)                    // 79
              }                                                                                                       // 79
            }]                                                                                                        // 79
          }, {                                                                                                        // 79
            limit: 5 - messageUsers.length                                                                            // 79
          }).fetch().forEach(function (item) {                                                                        // 79
            return items.push({                                                                                       // 155
              _id: item.username,                                                                                     // 81
              username: item.username,                                                                                // 82
              name: item.name,                                                                                        // 83
              status: item.status,                                                                                    // 84
              sort: 1                                                                                                 // 85
            });                                                                                                       // 81
          });                                                                                                         // 79
        }                                                                                                             // 163
                                                                                                                      //
        if (items.length < 5 && (filter != null ? filter.trim() : void 0) !== '') {                                   // 104
          getUsersFromServerDelayed(filter, items, cb);                                                               // 105
        }                                                                                                             // 166
                                                                                                                      //
        all = {                                                                                                       // 107
          _id: 'all',                                                                                                 // 108
          username: 'all',                                                                                            // 109
          system: true,                                                                                               // 110
          name: t('Notify_all_in_this_room'),                                                                         // 111
          compatibility: 'channel group',                                                                             // 112
          sort: 4                                                                                                     // 113
        };                                                                                                            // 108
        exp = new RegExp("(^|\\s)" + RegExp.escape(filter), 'i');                                                     // 115
                                                                                                                      //
        if (exp.test(all.username) || exp.test(all.compatibility)) {                                                  // 116
          items.push(all);                                                                                            // 117
        }                                                                                                             // 178
                                                                                                                      //
        here = {                                                                                                      // 119
          _id: 'here',                                                                                                // 120
          username: 'here',                                                                                           // 121
          system: true,                                                                                               // 122
          name: t('Notify_active_in_this_room'),                                                                      // 123
          compatibility: 'channel group',                                                                             // 124
          sort: 4                                                                                                     // 125
        };                                                                                                            // 120
                                                                                                                      //
        if (exp.test(here.username) || exp.test(here.compatibility)) {                                                // 127
          items.push(here);                                                                                           // 128
        }                                                                                                             // 189
                                                                                                                      //
        return items;                                                                                                 // 130
      },                                                                                                              // 63
      getValue: function (_id) {                                                                                      // 132
        return _id;                                                                                                   // 133
      }                                                                                                               // 63
    };                                                                                                                // 63
    return config;                                                                                                    // 135
  },                                                                                                                  // 58
  popupChannelConfig: function () {                                                                                   // 137
    var config, self, template;                                                                                       // 138
    self = this;                                                                                                      // 138
    template = Template.instance();                                                                                   // 139
    config = {                                                                                                        // 141
      title: t('Channels'),                                                                                           // 142
      collection: RocketChat.models.Subscriptions,                                                                    // 143
      trigger: '#',                                                                                                   // 144
      suffix: ' ',                                                                                                    // 145
      template: 'messagePopupChannel',                                                                                // 146
      getInput: self.getInput,                                                                                        // 147
      getFilter: function (collection, filter, cb) {                                                                  // 148
        var exp, records;                                                                                             // 149
        exp = new RegExp(filter, 'i');                                                                                // 149
        records = collection.find({                                                                                   // 151
          name: exp,                                                                                                  // 151
          t: {                                                                                                        // 151
            $in: ['c', 'p']                                                                                           // 151
          }                                                                                                           // 151
        }, {                                                                                                          // 151
          limit: 5,                                                                                                   // 151
          sort: {                                                                                                     // 151
            ls: -1                                                                                                    // 151
          }                                                                                                           // 151
        }).fetch();                                                                                                   // 151
                                                                                                                      //
        if (records.length < 5 && (filter != null ? filter.trim() : void 0) !== '') {                                 // 153
          getRoomsFromServerDelayed(filter, records, cb);                                                             // 154
        }                                                                                                             // 225
                                                                                                                      //
        return records;                                                                                               // 156
      },                                                                                                              // 142
      getValue: function (_id, collection, records) {                                                                 // 158
        var ref;                                                                                                      // 159
        return (ref = _.findWhere(records, {                                                                          // 159
          _id: _id                                                                                                    // 231
        })) != null ? ref.name : void 0;                                                                              // 159
      }                                                                                                               // 142
    };                                                                                                                // 142
    return config;                                                                                                    // 161
  },                                                                                                                  // 58
  popupSlashCommandsConfig: function () {                                                                             // 163
    var config, self, template;                                                                                       // 164
    self = this;                                                                                                      // 164
    template = Template.instance();                                                                                   // 165
    config = {                                                                                                        // 167
      title: t('Commands'),                                                                                           // 168
      collection: RocketChat.slashCommands.commands,                                                                  // 169
      trigger: '/',                                                                                                   // 170
      suffix: ' ',                                                                                                    // 171
      triggerAnywhere: false,                                                                                         // 172
      template: 'messagePopupSlashCommand',                                                                           // 173
      getInput: self.getInput,                                                                                        // 174
      getFilter: function (collection, filter) {                                                                      // 175
        var command, commands, item;                                                                                  // 176
        commands = [];                                                                                                // 176
                                                                                                                      //
        for (command in meteorBabelHelpers.sanitizeForInObject(collection)) {                                         // 177
          item = collection[command];                                                                                 // 253
                                                                                                                      //
          if (command.indexOf(filter) > -1) {                                                                         // 178
            commands.push({                                                                                           // 179
              _id: command,                                                                                           // 180
              params: item.params ? TAPi18n.__(item.params) : '',                                                     // 181
              description: TAPi18n.__(item.description)                                                               // 182
            });                                                                                                       // 180
          }                                                                                                           // 260
        }                                                                                                             // 177
                                                                                                                      //
        commands = commands.sort(function (a, b) {                                                                    // 184
          return a._id > b._id;                                                                                       // 185
        });                                                                                                           // 184
        commands = commands.slice(0, 11);                                                                             // 187
        return commands;                                                                                              // 189
      }                                                                                                               // 168
    };                                                                                                                // 168
    return config;                                                                                                    // 191
  },                                                                                                                  // 58
  emojiEnabled: function () {                                                                                         // 193
    return RocketChat.emoji != null;                                                                                  // 194
  },                                                                                                                  // 58
  popupEmojiConfig: function () {                                                                                     // 196
    var config, self, template;                                                                                       // 197
                                                                                                                      //
    if (RocketChat.emoji != null) {                                                                                   // 197
      self = this;                                                                                                    // 198
      template = Template.instance();                                                                                 // 199
      config = {                                                                                                      // 200
        title: t('Emoji'),                                                                                            // 201
        collection: RocketChat.emoji.list,                                                                            // 202
        template: 'messagePopupEmoji',                                                                                // 203
        trigger: ':',                                                                                                 // 204
        prefix: '',                                                                                                   // 205
        suffix: ' ',                                                                                                  // 206
        getInput: self.getInput,                                                                                      // 207
        getFilter: function (collection, filter, cb) {                                                                // 208
          var key, ref, regExp, results, value;                                                                       // 209
          results = [];                                                                                               // 209
          key = ':' + filter;                                                                                         // 210
                                                                                                                      //
          if (((ref = RocketChat.emoji.packages.emojione) != null ? ref.asciiList[key] : void 0) || filter.length < 2) {
            return [];                                                                                                // 213
          }                                                                                                           // 293
                                                                                                                      //
          regExp = new RegExp('^' + RegExp.escape(key), 'i');                                                         // 215
                                                                                                                      //
          for (key in meteorBabelHelpers.sanitizeForInObject(collection)) {                                           // 217
            value = collection[key];                                                                                  // 296
                                                                                                                      //
            if (results.length > 10) {                                                                                // 218
              break;                                                                                                  // 219
            }                                                                                                         // 299
                                                                                                                      //
            if (regExp.test(key)) {                                                                                   // 221
              results.push({                                                                                          // 222
                _id: key,                                                                                             // 223
                data: value                                                                                           // 224
              });                                                                                                     // 223
            }                                                                                                         // 305
          }                                                                                                           // 217
                                                                                                                      //
          results.sort(function (a, b) {                                                                              // 226
            if (a._id < b._id) {                                                                                      // 227
              return -1;                                                                                              // 228
            }                                                                                                         // 310
                                                                                                                      //
            if (a._id > b._id) {                                                                                      // 229
              return 1;                                                                                               // 230
            }                                                                                                         // 313
                                                                                                                      //
            return 0;                                                                                                 // 231
          });                                                                                                         // 226
          return results;                                                                                             // 233
        }                                                                                                             // 201
      };                                                                                                              // 201
    }                                                                                                                 // 319
                                                                                                                      //
    return config;                                                                                                    // 235
  }                                                                                                                   // 58
});                                                                                                                   // 58
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messagePopupEmoji.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/popup/messagePopupEmoji.coffee.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.messagePopupEmoji.helpers({                                                                                  // 1
  value: function () {                                                                                                // 2
    var length;                                                                                                       // 3
    length = this.data.length;                                                                                        // 3
    return this.data[length - 1];                                                                                     // 4
  }                                                                                                                   // 2
});                                                                                                                   // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"message.coffee.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/message.coffee.js                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var moment = void 0;                                                                                                  // 1
module.import('moment', {                                                                                             // 1
  "default": function (v) {                                                                                           // 1
    moment = v;                                                                                                       // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
                                                                                                                      //
var indexOf = [].indexOf || function (item) {                                                                         // 1
  for (var i = 0, l = this.length; i < l; i++) {                                                                      // 1
    if (i in this && this[i] === item) return i;                                                                      // 1
  }                                                                                                                   // 1
                                                                                                                      //
  return -1;                                                                                                          // 1
};                                                                                                                    // 1
                                                                                                                      //
Template.message.helpers({                                                                                            // 3
  encodeURI: function (text) {                                                                                        // 4
    return encodeURI(text);                                                                                           // 5
  },                                                                                                                  // 4
  isBot: function () {                                                                                                // 6
    if (this.bot != null) {                                                                                           // 7
      return 'bot';                                                                                                   // 7
    }                                                                                                                 // 12
  },                                                                                                                  // 4
  roleTags: function () {                                                                                             // 8
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, roles;                                                               // 9
                                                                                                                      //
    if (!RocketChat.settings.get('UI_DisplayRoles') || ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.hideRoles : void 0 : void 0 : void 0)) {
      return [];                                                                                                      // 10
    }                                                                                                                 // 18
                                                                                                                      //
    roles = _.union((ref3 = UserRoles.findOne((ref4 = this.u) != null ? ref4._id : void 0)) != null ? ref3.roles : void 0, (ref5 = RoomRoles.findOne({
      'u._id': (ref6 = this.u) != null ? ref6._id : void 0,                                                           // 20
      rid: this.rid                                                                                                   // 21
    })) != null ? ref5.roles : void 0);                                                                               // 11
    return RocketChat.models.Roles.find({                                                                             // 12
      _id: {                                                                                                          // 12
        $in: roles                                                                                                    // 12
      },                                                                                                              // 12
      description: {                                                                                                  // 12
        $exists: 1,                                                                                                   // 12
        $ne: ''                                                                                                       // 12
      }                                                                                                               // 12
    }, {                                                                                                              // 12
      fields: {                                                                                                       // 12
        description: 1                                                                                                // 12
      }                                                                                                               // 12
    });                                                                                                               // 12
  },                                                                                                                  // 4
  isGroupable: function () {                                                                                          // 13
    if (this.groupable === false) {                                                                                   // 14
      return 'false';                                                                                                 // 14
    }                                                                                                                 // 40
  },                                                                                                                  // 4
  isSequential: function () {                                                                                         // 15
    if (this.groupable !== false) {                                                                                   // 16
      return 'sequential';                                                                                            // 16
    }                                                                                                                 // 45
  },                                                                                                                  // 4
  avatarFromUsername: function () {                                                                                   // 17
    if (this.avatar != null && this.avatar[0] === '@') {                                                              // 18
      return this.avatar.replace(/^@/, '');                                                                           // 19
    }                                                                                                                 // 50
  },                                                                                                                  // 4
  getEmoji: function (emoji) {                                                                                        // 20
    return renderEmoji(emoji);                                                                                        // 21
  },                                                                                                                  // 4
  getName: function () {                                                                                              // 22
    var ref, ref1;                                                                                                    // 23
                                                                                                                      //
    if (this.alias) {                                                                                                 // 23
      return this.alias;                                                                                              // 24
    }                                                                                                                 // 59
                                                                                                                      //
    if (RocketChat.settings.get('UI_Use_Real_Name') && ((ref = this.u) != null ? ref.name : void 0)) {                // 25
      return this.u.name;                                                                                             // 26
    }                                                                                                                 // 62
                                                                                                                      //
    return (ref1 = this.u) != null ? ref1.username : void 0;                                                          // 27
  },                                                                                                                  // 4
  showUsername: function () {                                                                                         // 28
    var ref;                                                                                                          // 29
    return this.alias || RocketChat.settings.get('UI_Use_Real_Name') && ((ref = this.u) != null ? ref.name : void 0);
  },                                                                                                                  // 4
  own: function () {                                                                                                  // 30
    var ref;                                                                                                          // 31
                                                                                                                      //
    if (((ref = this.u) != null ? ref._id : void 0) === Meteor.userId()) {                                            // 31
      return 'own';                                                                                                   // 31
    }                                                                                                                 // 73
  },                                                                                                                  // 4
  timestamp: function () {                                                                                            // 32
    return +this.ts;                                                                                                  // 33
  },                                                                                                                  // 4
  chatops: function () {                                                                                              // 34
    var ref;                                                                                                          // 35
                                                                                                                      //
    if (((ref = this.u) != null ? ref.username : void 0) === RocketChat.settings.get('Chatops_Username')) {           // 35
      return 'chatops-message';                                                                                       // 35
    }                                                                                                                 // 82
  },                                                                                                                  // 4
  time: function () {                                                                                                 // 36
    return moment(this.ts).format(RocketChat.settings.get('Message_TimeFormat'));                                     // 37
  },                                                                                                                  // 4
  date: function () {                                                                                                 // 38
    return moment(this.ts).format(RocketChat.settings.get('Message_DateFormat'));                                     // 39
  },                                                                                                                  // 4
  isTemp: function () {                                                                                               // 40
    if (this.temp === true) {                                                                                         // 41
      return 'temp';                                                                                                  // 42
    }                                                                                                                 // 93
  },                                                                                                                  // 4
  body: function () {                                                                                                 // 43
    return Template.instance().body;                                                                                  // 44
  },                                                                                                                  // 4
  system: function (returnClass) {                                                                                    // 45
    if (RocketChat.MessageTypes.isSystemMessage(this)) {                                                              // 46
      if (returnClass) {                                                                                              // 47
        return 'color-info-font-color';                                                                               // 48
      }                                                                                                               // 102
                                                                                                                      //
      return 'system';                                                                                                // 50
    }                                                                                                                 // 104
  },                                                                                                                  // 4
  showTranslated: function () {                                                                                       // 52
    var language, ref, subscription;                                                                                  // 53
                                                                                                                      //
    if (RocketChat.settings.get('AutoTranslate_Enabled') && ((ref = this.u) != null ? ref._id : void 0) !== Meteor.userId() && !RocketChat.MessageTypes.isSystemMessage(this)) {
      subscription = RocketChat.models.Subscriptions.findOne({                                                        // 54
        rid: this.rid,                                                                                                // 54
        'u._id': Meteor.userId()                                                                                      // 54
      }, {                                                                                                            // 54
        fields: {                                                                                                     // 54
          autoTranslate: 1,                                                                                           // 54
          autoTranslateLanguage: 1                                                                                    // 54
        }                                                                                                             // 54
      });                                                                                                             // 54
      language = RocketChat.AutoTranslate.getLanguage(this.rid);                                                      // 55
      return this.autoTranslateFetching || (subscription != null ? subscription.autoTranslate : void 0) !== this.autoTranslateShowInverse && this.translations && this.translations[language];
    }                                                                                                                 // 120
  },                                                                                                                  // 4
  edited: function () {                                                                                               // 58
    return Template.instance().wasEdited;                                                                             // 59
  },                                                                                                                  // 4
  editTime: function () {                                                                                             // 61
    if (Template.instance().wasEdited) {                                                                              // 62
      return moment(this.editedAt).format(RocketChat.settings.get('Message_DateFormat') + ' ' + RocketChat.settings.get('Message_TimeFormat'));
    }                                                                                                                 // 128
  },                                                                                                                  // 4
  editedBy: function () {                                                                                             // 64
    var ref;                                                                                                          // 65
                                                                                                                      //
    if (!Template.instance().wasEdited) {                                                                             // 65
      return "";                                                                                                      // 65
    }                                                                                                                 // 134
                                                                                                                      //
    return ((ref = this.editedBy) != null ? ref.username : void 0) || "?";                                            // 69
  },                                                                                                                  // 4
  canEdit: function () {                                                                                              // 70
    var blockEditInMinutes, currentTsDiff, editOwn, hasPermission, isEditAllowed, msgTs, ref;                         // 71
    hasPermission = RocketChat.authz.hasAtLeastOnePermission('edit-message', this.rid);                               // 71
    isEditAllowed = RocketChat.settings.get('Message_AllowEditing');                                                  // 72
    editOwn = ((ref = this.u) != null ? ref._id : void 0) === Meteor.userId();                                        // 73
                                                                                                                      //
    if (!(hasPermission || isEditAllowed && editOwn)) {                                                               // 75
      return;                                                                                                         // 75
    }                                                                                                                 // 144
                                                                                                                      //
    blockEditInMinutes = RocketChat.settings.get('Message_AllowEditing_BlockEditInMinutes');                          // 77
                                                                                                                      //
    if (blockEditInMinutes != null && blockEditInMinutes !== 0) {                                                     // 78
      if (this.ts != null) {                                                                                          // 79
        msgTs = moment(this.ts);                                                                                      // 79
      }                                                                                                               // 149
                                                                                                                      //
      if (msgTs != null) {                                                                                            // 80
        currentTsDiff = moment().diff(msgTs, 'minutes');                                                              // 80
      }                                                                                                               // 152
                                                                                                                      //
      return currentTsDiff < blockEditInMinutes;                                                                      // 81
    } else {                                                                                                          // 78
      return true;                                                                                                    // 83
    }                                                                                                                 // 156
  },                                                                                                                  // 4
  canDelete: function () {                                                                                            // 85
    var blockDeleteInMinutes, currentTsDiff, deleteOwn, hasPermission, isDeleteAllowed, msgTs, ref;                   // 86
    hasPermission = RocketChat.authz.hasAtLeastOnePermission('delete-message', this.rid);                             // 86
    isDeleteAllowed = RocketChat.settings.get('Message_AllowDeleting');                                               // 87
    deleteOwn = ((ref = this.u) != null ? ref._id : void 0) === Meteor.userId();                                      // 88
                                                                                                                      //
    if (!(hasPermission || isDeleteAllowed && deleteOwn)) {                                                           // 90
      return;                                                                                                         // 90
    }                                                                                                                 // 165
                                                                                                                      //
    blockDeleteInMinutes = RocketChat.settings.get('Message_AllowDeleting_BlockDeleteInMinutes');                     // 92
                                                                                                                      //
    if (blockDeleteInMinutes != null && blockDeleteInMinutes !== 0) {                                                 // 93
      if (this.ts != null) {                                                                                          // 94
        msgTs = moment(this.ts);                                                                                      // 94
      }                                                                                                               // 170
                                                                                                                      //
      if (msgTs != null) {                                                                                            // 95
        currentTsDiff = moment().diff(msgTs, 'minutes');                                                              // 95
      }                                                                                                               // 173
                                                                                                                      //
      return currentTsDiff < blockDeleteInMinutes;                                                                    // 96
    } else {                                                                                                          // 93
      return true;                                                                                                    // 98
    }                                                                                                                 // 177
  },                                                                                                                  // 4
  showEditedStatus: function () {                                                                                     // 100
    return RocketChat.settings.get('Message_ShowEditedStatus');                                                       // 101
  },                                                                                                                  // 4
  label: function () {                                                                                                // 102
    if (this.i18nLabel) {                                                                                             // 103
      return t(this.i18nLabel);                                                                                       // 104
    } else if (this.label) {                                                                                          // 103
      return this.label;                                                                                              // 106
    }                                                                                                                 // 187
  },                                                                                                                  // 4
  hasOembed: function () {                                                                                            // 108
    var ref, ref1, ref2, ref3;                                                                                        // 109
                                                                                                                      //
    if (!(((ref = this.urls) != null ? ref.length : void 0) > 0 && Template.oembedBaseWidget != null && RocketChat.settings.get('API_Embed'))) {
      return false;                                                                                                   // 109
    }                                                                                                                 // 193
                                                                                                                      //
    if (ref1 = (ref2 = this.u) != null ? ref2.username : void 0, indexOf.call((ref3 = RocketChat.settings.get('API_EmbedDisabledFor')) != null ? ref3.split(',').map(function (username) {
      return username.trim();                                                                                         // 195
    }) : void 0, ref1) >= 0) {                                                                                        // 111
      return false;                                                                                                   // 111
    }                                                                                                                 // 198
                                                                                                                      //
    return true;                                                                                                      // 113
  },                                                                                                                  // 4
  reactions: function () {                                                                                            // 115
    var emoji, msgReactions, reaction, ref, ref1, total, userUsername, usernames;                                     // 116
    msgReactions = [];                                                                                                // 116
    userUsername = (ref = Meteor.user()) != null ? ref.username : void 0;                                             // 117
    ref1 = this.reactions;                                                                                            // 119
                                                                                                                      //
    for (emoji in meteorBabelHelpers.sanitizeForInObject(ref1)) {                                                     // 119
      reaction = ref1[emoji];                                                                                         // 207
      total = reaction.usernames.length;                                                                              // 120
      usernames = '@' + reaction.usernames.slice(0, 15).join(', @');                                                  // 121
      usernames = usernames.replace('@' + userUsername, t('You').toLowerCase());                                      // 123
                                                                                                                      //
      if (total > 15) {                                                                                               // 125
        usernames = usernames + ' ' + t('And_more', {                                                                 // 126
          length: total - 15                                                                                          // 126
        }).toLowerCase();                                                                                             // 126
      } else {                                                                                                        // 125
        usernames = usernames.replace(/,([^,]+)$/, ' ' + t('and') + '$1');                                            // 128
      }                                                                                                               // 217
                                                                                                                      //
      if (usernames[0] !== '@') {                                                                                     // 130
        usernames = usernames[0].toUpperCase() + usernames.substr(1);                                                 // 131
      }                                                                                                               // 220
                                                                                                                      //
      msgReactions.push({                                                                                             // 133
        emoji: emoji,                                                                                                 // 134
        count: reaction.usernames.length,                                                                             // 135
        usernames: usernames,                                                                                         // 136
        reaction: ' ' + t('Reacted_with').toLowerCase() + ' ' + emoji,                                                // 137
        userReacted: reaction.usernames.indexOf(userUsername) > -1                                                    // 138
      });                                                                                                             // 134
    }                                                                                                                 // 119
                                                                                                                      //
    return msgReactions;                                                                                              // 140
  },                                                                                                                  // 4
  markUserReaction: function (reaction) {                                                                             // 142
    if (reaction.userReacted) {                                                                                       // 143
      return {                                                                                                        // 144
        "class": 'selected'                                                                                           // 145
      };                                                                                                              // 144
    }                                                                                                                 // 236
  },                                                                                                                  // 4
  hideReactions: function () {                                                                                        // 148
    if (_.isEmpty(this.reactions)) {                                                                                  // 149
      return 'hidden';                                                                                                // 149
    }                                                                                                                 // 241
  },                                                                                                                  // 4
  actionLinks: function () {                                                                                          // 151
    return _.map(this.actionLinks, function (actionLink, key) {                                                       // 153
      return _.extend({                                                                                               // 245
        id: key                                                                                                       // 153
      }, _.omit(actionLink, 'method_id', 'params'));                                                                  // 153
    });                                                                                                               // 153
  },                                                                                                                  // 4
  hideActionLinks: function () {                                                                                      // 155
    if (_.isEmpty(this.actionLinks)) {                                                                                // 156
      return 'hidden';                                                                                                // 156
    }                                                                                                                 // 253
  },                                                                                                                  // 4
  injectIndex: function (data, index) {                                                                               // 158
    data.index = index;                                                                                               // 159
  },                                                                                                                  // 4
  hideCog: function () {                                                                                              // 162
    var subscription;                                                                                                 // 163
    subscription = RocketChat.models.Subscriptions.findOne({                                                          // 163
      rid: this.rid                                                                                                   // 163
    });                                                                                                               // 163
                                                                                                                      //
    if (subscription == null) {                                                                                       // 164
      return 'hidden';                                                                                                // 164
    }                                                                                                                 // 265
  },                                                                                                                  // 4
  hideUsernames: function () {                                                                                        // 166
    var prefs, ref, ref1;                                                                                             // 167
    prefs = (ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? ref1.preferences : void 0 : void 0;       // 167
                                                                                                                      //
    if (prefs != null ? prefs.hideUsernames : void 0) {}                                                              // 168
  },                                                                                                                  // 4
  msgType: function () {                                                                                              // 170
    var ref;                                                                                                          // 171
                                                                                                                      //
    if (((ref = Template.instance().msgType) != null ? ref.id : void 0) === 'chart') {                                // 171
      return true;                                                                                                    // 171
    }                                                                                                                 // 278
  },                                                                                                                  // 4
  chartData: function () {                                                                                            // 173
    return Template.instance().chartData;                                                                             // 174
  }                                                                                                                   // 4
});                                                                                                                   // 4
Template.message.onCreated(function () {                                                                              // 176
  var msg;                                                                                                            // 177
  msg = Template.currentData();                                                                                       // 177
  this.wasEdited = msg.editedAt != null && !RocketChat.MessageTypes.isSystemMessage(msg);                             // 179
  this.chartData = JSON.stringify(msg.chartData);                                                                     // 181
  this.msgType = RocketChat.MessageTypes.getType(msg);                                                                // 183
  return this.body = function () {                                                                                    // 291
    var isSystemMessage, messageType, ref;                                                                            // 189
    isSystemMessage = RocketChat.MessageTypes.isSystemMessage(msg);                                                   // 189
    messageType = RocketChat.MessageTypes.getType(msg);                                                               // 190
                                                                                                                      //
    if ((messageType != null ? messageType.render : void 0) != null) {                                                // 192
      msg = messageType.render(msg);                                                                                  // 193
    } else if ((messageType != null ? messageType.template : void 0) != null) {} else if ((messageType != null ? messageType.message : void 0) != null) {
      if ((typeof messageType.data === "function" ? messageType.data(msg) : void 0) != null) {                        // 197
        msg = TAPi18n.__(messageType.message, messageType.data(msg));                                                 // 198
      } else {                                                                                                        // 197
        msg = TAPi18n.__(messageType.message);                                                                        // 200
      }                                                                                                               // 196
    } else {                                                                                                          // 196
      if (((ref = msg.u) != null ? ref.username : void 0) === RocketChat.settings.get('Chatops_Username')) {          // 202
        msg.html = msg.msg;                                                                                           // 203
        msg = RocketChat.callbacks.run('renderMentions', msg);                                                        // 204
        msg = msg.html;                                                                                               // 206
      } else {                                                                                                        // 202
        msg = renderMessageBody(msg);                                                                                 // 208
      }                                                                                                               // 196
    }                                                                                                                 // 313
                                                                                                                      //
    if (isSystemMessage) {                                                                                            // 210
      msg.html = RocketChat.Markdown.parse(msg.html);                                                                 // 211
    }                                                                                                                 // 316
                                                                                                                      //
    return msg;                                                                                                       // 213
  }();                                                                                                                // 185
});                                                                                                                   // 176
                                                                                                                      //
Template.message.onViewRendered = function (context) {                                                                // 215
  var view;                                                                                                           // 216
  view = this;                                                                                                        // 216
  return this._domrange.onAttached(function (domRange) {                                                              // 324
    var $currentNode, $nextNode, currentDataset, currentMessageDate, currentNode, newMessage, nextDataset, nextNode, previousDataset, previousMessageDate, previousNode, ref, templateInstance;
    currentNode = domRange.lastNode();                                                                                // 220
    currentDataset = currentNode.dataset;                                                                             // 221
    previousNode = currentNode.previousElementSibling;                                                                // 222
    nextNode = currentNode.nextElementSibling;                                                                        // 223
    $currentNode = $(currentNode);                                                                                    // 224
    $nextNode = $(nextNode);                                                                                          // 225
                                                                                                                      //
    if (previousNode == null) {                                                                                       // 227
      $currentNode.addClass('new-day').removeClass('sequential');                                                     // 228
    } else if ((previousNode != null ? previousNode.dataset : void 0) != null) {                                      // 227
      previousDataset = previousNode.dataset;                                                                         // 231
      previousMessageDate = new Date(parseInt(previousDataset.timestamp));                                            // 232
      currentMessageDate = new Date(parseInt(currentDataset.timestamp));                                              // 233
                                                                                                                      //
      if (previousMessageDate.toDateString() !== currentMessageDate.toDateString()) {                                 // 235
        $currentNode.addClass('new-day').removeClass('sequential');                                                   // 236
      } else {                                                                                                        // 235
        $currentNode.removeClass('new-day');                                                                          // 238
      }                                                                                                               // 342
                                                                                                                      //
      if (previousDataset.groupable === 'false' || currentDataset.groupable === 'false') {                            // 240
        $currentNode.removeClass('sequential');                                                                       // 241
      } else {                                                                                                        // 240
        if (previousDataset.username !== currentDataset.username || parseInt(currentDataset.timestamp) - parseInt(previousDataset.timestamp) > RocketChat.settings.get('Message_GroupingPeriod') * 1000) {
          $currentNode.removeClass('sequential');                                                                     // 244
        } else if (!$currentNode.hasClass('new-day')) {                                                               // 243
          $currentNode.addClass('sequential');                                                                        // 246
        }                                                                                                             // 240
      }                                                                                                               // 230
    }                                                                                                                 // 352
                                                                                                                      //
    if ((nextNode != null ? nextNode.dataset : void 0) != null) {                                                     // 248
      nextDataset = nextNode.dataset;                                                                                 // 249
                                                                                                                      //
      if (nextDataset.date !== currentDataset.date) {                                                                 // 251
        $nextNode.addClass('new-day').removeClass('sequential');                                                      // 252
      } else {                                                                                                        // 251
        $nextNode.removeClass('new-day');                                                                             // 254
      }                                                                                                               // 359
                                                                                                                      //
      if (nextDataset.groupable !== 'false') {                                                                        // 256
        if (nextDataset.username !== currentDataset.username || parseInt(nextDataset.timestamp) - parseInt(currentDataset.timestamp) > RocketChat.settings.get('Message_GroupingPeriod') * 1000) {
          $nextNode.removeClass('sequential');                                                                        // 258
        } else if (!$nextNode.hasClass('new-day')) {                                                                  // 257
          $nextNode.addClass('sequential');                                                                           // 260
        }                                                                                                             // 256
      }                                                                                                               // 248
    }                                                                                                                 // 367
                                                                                                                      //
    if (nextNode == null) {                                                                                           // 262
      templateInstance = $('#chat-window-' + context.rid)[0] ? (ref = Blaze.getView($('#chat-window-' + context.rid)[0])) != null ? ref.templateInstance() : void 0 : null;
      currentDataset = currentNode.dataset;                                                                           // 265
                                                                                                                      //
      if (currentNode.classList.contains('own') === true) {                                                           // 267
        return templateInstance != null ? templateInstance.atBottom = true : void 0;                                  // 372
      } else {                                                                                                        // 267
        if ((templateInstance != null ? templateInstance.firstNode : void 0) && (templateInstance != null ? templateInstance.atBottom : void 0) === false) {
          newMessage = templateInstance != null ? templateInstance.find(".new-message") : void 0;                     // 271
          return newMessage != null ? newMessage.className = "new-message background-primary-action-color color-content-background-color " : void 0;
        }                                                                                                             // 267
      }                                                                                                               // 262
    }                                                                                                                 // 379
  });                                                                                                                 // 218
};                                                                                                                    // 215
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageBox.coffee.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/messageBox.coffee.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var toastr = void 0;                                                                                                  // 1
module.import('toastr', {                                                                                             // 1
  "default": function (v) {                                                                                           // 1
    toastr = v;                                                                                                       // 1
  }                                                                                                                   // 1
}, 0);                                                                                                                // 1
var mime = void 0;                                                                                                    // 1
module.import('mime-type/with-db', {                                                                                  // 1
  "default": function (v) {                                                                                           // 1
    mime = v;                                                                                                         // 1
  }                                                                                                                   // 1
}, 1);                                                                                                                // 1
var moment = void 0;                                                                                                  // 1
module.import('moment', {                                                                                             // 1
  "default": function (v) {                                                                                           // 1
    moment = v;                                                                                                       // 1
  }                                                                                                                   // 1
}, 2);                                                                                                                // 1
var VRecDialog = void 0;                                                                                              // 1
module.import('meteor/rocketchat:ui-vrecord', {                                                                       // 1
  "VRecDialog": function (v) {                                                                                        // 1
    VRecDialog = v;                                                                                                   // 1
  }                                                                                                                   // 1
}, 3);                                                                                                                // 1
var ChartDialog = void 0;                                                                                             // 1
module.import('meteor/lily:ui-chart', {                                                                               // 1
  "ChartDialog": function (v) {                                                                                       // 1
    ChartDialog = v;                                                                                                  // 1
  }                                                                                                                   // 1
}, 4);                                                                                                                // 1
var firefoxPasteUpload, katexSyntax;                                                                                  // 1
                                                                                                                      //
katexSyntax = function () {                                                                                           // 7
  if (RocketChat.katex.katex_enabled()) {                                                                             // 8
    if (RocketChat.katex.dollar_syntax_enabled()) {                                                                   // 9
      return "$$KaTeX$$";                                                                                             // 9
    }                                                                                                                 // 21
                                                                                                                      //
    if (RocketChat.katex.parenthesis_syntax_enabled()) {                                                              // 10
      return "\\[KaTeX\\]";                                                                                           // 10
    }                                                                                                                 // 8
  }                                                                                                                   // 25
                                                                                                                      //
  return false;                                                                                                       // 12
};                                                                                                                    // 7
                                                                                                                      //
Template.messageBox.helpers({                                                                                         // 14
  roomName: function () {                                                                                             // 15
    var ref, roomData;                                                                                                // 16
    roomData = Session.get('roomData' + this._id);                                                                    // 16
                                                                                                                      //
    if (!roomData) {                                                                                                  // 17
      return '';                                                                                                      // 17
    }                                                                                                                 // 35
                                                                                                                      //
    if (roomData.t === 'd') {                                                                                         // 19
      return (ref = ChatSubscription.findOne({                                                                        // 20
        rid: this._id                                                                                                 // 38
      }, {                                                                                                            // 20
        fields: {                                                                                                     // 40
          name: 1                                                                                                     // 41
        }                                                                                                             // 40
      })) != null ? ref.name : void 0;                                                                                // 39
    } else {                                                                                                          // 19
      return roomData.name;                                                                                           // 22
    }                                                                                                                 // 46
  },                                                                                                                  // 15
  showMarkdown: function () {                                                                                         // 23
    return RocketChat.Markdown;                                                                                       // 24
  },                                                                                                                  // 15
  showMarkdownCode: function () {                                                                                     // 25
    return RocketChat.MarkdownCode;                                                                                   // 26
  },                                                                                                                  // 15
  showKatex: function () {                                                                                            // 27
    return RocketChat.katex;                                                                                          // 28
  },                                                                                                                  // 15
  katexSyntax: function () {                                                                                          // 29
    return katexSyntax();                                                                                             // 30
  },                                                                                                                  // 15
  showFormattingTips: function () {                                                                                   // 31
    return RocketChat.settings.get('Message_ShowFormattingTips') && (RocketChat.Markdown || RocketChat.MarkdownCode || katexSyntax());
  },                                                                                                                  // 15
  canJoin: function () {                                                                                              // 33
    return Meteor.userId() != null && RocketChat.roomTypes.verifyShowJoinLink(this._id);                              // 34
  },                                                                                                                  // 15
  joinCodeRequired: function () {                                                                                     // 35
    var ref;                                                                                                          // 36
    return (ref = Session.get('roomData' + this._id)) != null ? ref.joinCodeRequired : void 0;                        // 36
  },                                                                                                                  // 15
  subscribed: function () {                                                                                           // 37
    return RocketChat.roomTypes.verifyCanSendMessage(this._id);                                                       // 38
  },                                                                                                                  // 15
  allowedToSend: function () {                                                                                        // 39
    var roomData, subscription;                                                                                       // 40
                                                                                                                      //
    if (RocketChat.roomTypes.readOnly(this._id, Meteor.user())) {                                                     // 40
      return false;                                                                                                   // 41
    }                                                                                                                 // 77
                                                                                                                      //
    if (RocketChat.roomTypes.archived(this._id)) {                                                                    // 43
      return false;                                                                                                   // 44
    }                                                                                                                 // 80
                                                                                                                      //
    roomData = Session.get('roomData' + this._id);                                                                    // 46
                                                                                                                      //
    if ((roomData != null ? roomData.t : void 0) === 'd') {                                                           // 47
      subscription = ChatSubscription.findOne({                                                                       // 48
        rid: this._id                                                                                                 // 48
      }, {                                                                                                            // 48
        fields: {                                                                                                     // 48
          archived: 1,                                                                                                // 48
          blocked: 1,                                                                                                 // 48
          blocker: 1                                                                                                  // 48
        }                                                                                                             // 48
      });                                                                                                             // 48
                                                                                                                      //
      if (subscription && (subscription.archived || subscription.blocked || subscription.blocker)) {                  // 49
        return false;                                                                                                 // 50
      }                                                                                                               // 47
    }                                                                                                                 // 95
                                                                                                                      //
    return true;                                                                                                      // 52
  },                                                                                                                  // 15
  isBlockedOrBlocker: function () {                                                                                   // 53
    var roomData, subscription;                                                                                       // 54
    roomData = Session.get('roomData' + this._id);                                                                    // 54
                                                                                                                      //
    if ((roomData != null ? roomData.t : void 0) === 'd') {                                                           // 55
      subscription = ChatSubscription.findOne({                                                                       // 56
        rid: this._id                                                                                                 // 56
      }, {                                                                                                            // 56
        fields: {                                                                                                     // 56
          blocked: 1,                                                                                                 // 56
          blocker: 1                                                                                                  // 56
        }                                                                                                             // 56
      });                                                                                                             // 56
                                                                                                                      //
      if (subscription && (subscription.blocked || subscription.blocker)) {                                           // 57
        return true;                                                                                                  // 58
      }                                                                                                               // 55
    }                                                                                                                 // 113
  },                                                                                                                  // 15
  getPopupConfig: function () {                                                                                       // 60
    var template;                                                                                                     // 61
    template = Template.instance();                                                                                   // 61
    return {                                                                                                          // 62
      getInput: function () {                                                                                         // 63
        return template.find('.input-message');                                                                       // 64
      }                                                                                                               // 62
    };                                                                                                                // 62
  },                                                                                                                  // 15
  usersTyping: function () {                                                                                          // 66
    var last, usernames, users;                                                                                       // 67
    users = MsgTyping.get(this._id);                                                                                  // 67
                                                                                                                      //
    if (users.length === 0) {                                                                                         // 68
      return;                                                                                                         // 69
    }                                                                                                                 // 129
                                                                                                                      //
    if (users.length === 1) {                                                                                         // 70
      return {                                                                                                        // 71
        multi: false,                                                                                                 // 72
        selfTyping: MsgTyping.selfTyping.get(),                                                                       // 73
        users: users[0]                                                                                               // 74
      };                                                                                                              // 71
    }                                                                                                                 // 136
                                                                                                                      //
    last = users.pop();                                                                                               // 77
                                                                                                                      //
    if (users.length > 4) {                                                                                           // 78
      last = t('others');                                                                                             // 79
    }                                                                                                                 // 140
                                                                                                                      //
    usernames = users.join(', ');                                                                                     // 81
    usernames = [usernames, last];                                                                                    // 82
    return {                                                                                                          // 83
      multi: true,                                                                                                    // 84
      selfTyping: MsgTyping.selfTyping.get(),                                                                         // 85
      users: usernames.join(" " + t('and') + " ")                                                                     // 86
    };                                                                                                                // 83
  },                                                                                                                  // 15
  groupAttachHidden: function () {                                                                                    // 89
    if (RocketChat.settings.get('Message_Attachments_GroupAttach')) {                                                 // 90
      return 'hidden';                                                                                                // 90
    }                                                                                                                 // 152
  },                                                                                                                  // 15
  fileUploadEnabled: function () {                                                                                    // 92
    return RocketChat.settings.get('FileUpload_Enabled');                                                             // 93
  },                                                                                                                  // 15
  fileUploadAllowedMediaTypes: function () {                                                                          // 95
    return RocketChat.settings.get('FileUpload_MediaTypeWhiteList');                                                  // 96
  },                                                                                                                  // 15
  showFileUpload: function () {                                                                                       // 98
    var roomData;                                                                                                     // 99
                                                                                                                      //
    if (RocketChat.settings.get('FileUpload_Enabled')) {                                                              // 99
      roomData = Session.get('roomData' + this._id);                                                                  // 100
                                                                                                                      //
      if ((roomData != null ? roomData.t : void 0) === 'd') {                                                         // 101
        return RocketChat.settings.get('FileUpload_Enabled_Direct');                                                  // 102
      } else {                                                                                                        // 101
        return true;                                                                                                  // 104
      }                                                                                                               // 99
    } else {                                                                                                          // 99
      return RocketChat.settings.get('FileUpload_Enabled');                                                           // 106
    }                                                                                                                 // 171
  },                                                                                                                  // 15
  showMic: function () {                                                                                              // 109
    return Template.instance().showMicButton.get();                                                                   // 110
  },                                                                                                                  // 15
  showVRec: function () {                                                                                             // 112
    return Template.instance().showVideoRec.get();                                                                    // 113
  },                                                                                                                  // 15
  showChart: function () {                                                                                            // 115
    return Template.instance().showChartButton.get();                                                                 // 116
  },                                                                                                                  // 15
  showSend: function () {                                                                                             // 118
    if (!Template.instance().isMessageFieldEmpty.get()) {                                                             // 119
      return 'show-send';                                                                                             // 120
    }                                                                                                                 // 185
  },                                                                                                                  // 15
  showLocation: function () {                                                                                         // 122
    return RocketChat.Geolocation.get() !== false;                                                                    // 123
  },                                                                                                                  // 15
  notSubscribedTpl: function () {                                                                                     // 125
    return RocketChat.roomTypes.getNotSubscribedTpl(this._id);                                                        // 126
  },                                                                                                                  // 15
  showSandstorm: function () {                                                                                        // 128
    return Meteor.settings["public"].sandstorm && !Meteor.isCordova;                                                  // 129
  },                                                                                                                  // 15
  anonymousRead: function () {                                                                                        // 131
    return Meteor.userId() == null && RocketChat.settings.get('Accounts_AllowAnonymousRead') === true;                // 132
  },                                                                                                                  // 15
  anonymousWrite: function () {                                                                                       // 134
    return Meteor.userId() == null && RocketChat.settings.get('Accounts_AllowAnonymousRead') === true && RocketChat.settings.get('Accounts_AllowAnonymousWrite') === true;
  }                                                                                                                   // 15
});                                                                                                                   // 15
                                                                                                                      //
firefoxPasteUpload = function (fn) {                                                                                  // 137
  var user;                                                                                                           // 138
  user = navigator.userAgent.match(/Firefox\/(\d+)\.\d/);                                                             // 138
                                                                                                                      //
  if (!user || user[1] > 49) {                                                                                        // 139
    return fn;                                                                                                        // 140
  }                                                                                                                   // 209
                                                                                                                      //
  return function (event, instance) {                                                                                 // 141
    var contentEditableDiv, selectionEnd, selectionStart, textarea;                                                   // 142
                                                                                                                      //
    if ((event.originalEvent.ctrlKey || event.originalEvent.metaKey) && event.keyCode === 86) {                       // 142
      textarea = instance.find("textarea");                                                                           // 143
      selectionStart = textarea.selectionStart;                                                                       // 144
      selectionEnd = textarea.selectionEnd;                                                                           // 145
      contentEditableDiv = instance.find('#msg_contenteditable');                                                     // 146
      contentEditableDiv.focus();                                                                                     // 147
      Meteor.setTimeout(function () {                                                                                 // 148
        var endContent, imageSrc, pastedImg, restoreSelection, startContent, textareaContent;                         // 149
        pastedImg = contentEditableDiv.querySelector('img');                                                          // 149
        textareaContent = textarea.value;                                                                             // 150
        startContent = textareaContent.substring(0, selectionStart);                                                  // 151
        endContent = textareaContent.substring(selectionEnd);                                                         // 152
                                                                                                                      //
        restoreSelection = function (pastedText) {                                                                    // 153
          textarea.value = startContent + pastedText + endContent;                                                    // 154
          textarea.selectionStart = selectionStart + pastedText.length;                                               // 155
          return textarea.selectionEnd = textarea.selectionStart;                                                     // 227
        };                                                                                                            // 153
                                                                                                                      //
        if (pastedImg) {                                                                                              // 157
          contentEditableDiv.innerHTML = '';                                                                          // 157
        }                                                                                                             // 231
                                                                                                                      //
        textarea.focus;                                                                                               // 158
                                                                                                                      //
        if (!pastedImg || contentEditableDiv.innerHTML.length > 0) {                                                  // 159
          return [].slice.call(contentEditableDiv.querySelectorAll("br")).forEach(function (el) {                     // 234
            contentEditableDiv.replaceChild(new Text("\n"), el);                                                      // 161
            return restoreSelection(contentEditableDiv.innerText);                                                    // 236
          });                                                                                                         // 160
        }                                                                                                             // 238
                                                                                                                      //
        imageSrc = pastedImg.getAttribute("src");                                                                     // 163
                                                                                                                      //
        if (imageSrc.match(/^data:image/)) {                                                                          // 164
          return fetch(imageSrc).then(function (img) {                                                                // 241
            return img.blob();                                                                                        // 167
          }).then(function (blob) {                                                                                   // 165
            return fileUpload([{                                                                                      // 244
              file: blob,                                                                                             // 170
              name: 'Clipboard'                                                                                       // 171
            }]);                                                                                                      // 169
          });                                                                                                         // 165
        }                                                                                                             // 251
      }, 150);                                                                                                        // 148
    }                                                                                                                 // 253
                                                                                                                      //
    return fn != null ? fn.apply(this, arguments) : void 0;                                                           // 254
  };                                                                                                                  // 141
};                                                                                                                    // 137
                                                                                                                      //
Template.messageBox.events({                                                                                          // 177
  'click .join': function (event) {                                                                                   // 178
    event.stopPropagation();                                                                                          // 179
    event.preventDefault();                                                                                           // 180
    return Meteor.call('joinRoom', this._id, Template.instance().$('[name=joinCode]').val(), function (_this) {       // 262
      return function (err) {                                                                                         // 263
        if (err != null) {                                                                                            // 182
          toastr.error(t(err.reason));                                                                                // 183
        }                                                                                                             // 266
                                                                                                                      //
        if (RocketChat.authz.hasAllPermission('preview-c-room') === false && RoomHistoryManager.getRoom(_this._id).loaded === 0) {
          RoomManager.getOpenedRoomByRid(_this._id).streamActive = false;                                             // 186
          RoomManager.getOpenedRoomByRid(_this._id).ready = false;                                                    // 187
          RoomHistoryManager.getRoom(_this._id).loaded = void 0;                                                      // 188
          return RoomManager.computation.invalidate();                                                                // 271
        }                                                                                                             // 272
      };                                                                                                              // 181
    }(this));                                                                                                         // 181
  },                                                                                                                  // 178
  'click .register': function (event) {                                                                               // 191
    event.stopPropagation();                                                                                          // 192
    event.preventDefault();                                                                                           // 193
    return Session.set('forceLogin', true);                                                                           // 279
  },                                                                                                                  // 178
  'click .register-anonymous': function (event) {                                                                     // 196
    event.stopPropagation();                                                                                          // 197
    event.preventDefault();                                                                                           // 198
    return Meteor.call('registerUser', {}, function (error, loginData) {                                              // 284
      if (loginData && loginData.token) {                                                                             // 201
        return Meteor.loginWithToken(loginData.token);                                                                // 286
      }                                                                                                               // 287
    });                                                                                                               // 200
  },                                                                                                                  // 178
  'focus .input-message': function (event, instance) {                                                                // 205
    KonchatNotification.removeRoomNotification(this._id);                                                             // 206
    return chatMessages[this._id].input = instance.find('.input-message');                                            // 292
  },                                                                                                                  // 178
  'click .send-button': function (event, instance) {                                                                  // 209
    var input;                                                                                                        // 210
    input = instance.find('.input-message');                                                                          // 210
                                                                                                                      //
    chatMessages[this._id].send(this._id, input, function (_this) {                                                   // 211
      return function () {                                                                                            // 298
        input.updateAutogrow();                                                                                       // 214
        return instance.isMessageFieldEmpty.set(chatMessages[_this._id].isEmpty());                                   // 300
      };                                                                                                              // 211
    }(this));                                                                                                         // 211
                                                                                                                      //
    return input.focus();                                                                                             // 303
  },                                                                                                                  // 178
  'keyup .input-message': function (event, instance) {                                                                // 219
    chatMessages[this._id].keyup(this._id, event, instance);                                                          // 220
                                                                                                                      //
    return instance.isMessageFieldEmpty.set(chatMessages[this._id].isEmpty());                                        // 307
  },                                                                                                                  // 178
  'paste .input-message': function (e, instance) {                                                                    // 223
    var files, i, item, items, len;                                                                                   // 224
    Meteor.setTimeout(function () {                                                                                   // 224
      var input;                                                                                                      // 225
      input = instance.find('.input-message');                                                                        // 225
      return typeof input.updateAutogrow === "function" ? input.updateAutogrow() : void 0;                            // 314
    }, 50);                                                                                                           // 224
                                                                                                                      //
    if (e.originalEvent.clipboardData == null) {                                                                      // 229
      return;                                                                                                         // 230
    }                                                                                                                 // 318
                                                                                                                      //
    items = e.originalEvent.clipboardData.items;                                                                      // 231
    files = [];                                                                                                       // 232
                                                                                                                      //
    for (i = 0, len = items.length; i < len; i++) {                                                                   // 233
      item = items[i];                                                                                                // 322
                                                                                                                      //
      if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {                                               // 234
        e.preventDefault();                                                                                           // 235
        files.push({                                                                                                  // 236
          file: item.getAsFile(),                                                                                     // 237
          name: 'Clipboard - ' + moment().format(RocketChat.settings.get('Message_TimeAndDateFormat'))                // 238
        });                                                                                                           // 237
      }                                                                                                               // 329
    }                                                                                                                 // 233
                                                                                                                      //
    if (files.length) {                                                                                               // 240
      return fileUpload(files);                                                                                       // 332
    } else {                                                                                                          // 240
      return instance.isMessageFieldEmpty.set(false);                                                                 // 334
    }                                                                                                                 // 335
  },                                                                                                                  // 178
  'keydown .input-message': firefoxPasteUpload(function (event, instance) {                                           // 245
    return chatMessages[this._id].keydown(this._id, event, Template.instance());                                      // 338
  }),                                                                                                                 // 245
  'input .input-message': function (event) {                                                                          // 248
    return chatMessages[this._id].valueChanged(this._id, event, Template.instance());                                 // 341
  },                                                                                                                  // 178
  'propertychange .input-message': function (event) {                                                                 // 251
    if (event.originalEvent.propertyName === 'value') {                                                               // 252
      return chatMessages[this._id].valueChanged(this._id, event, Template.instance());                               // 345
    }                                                                                                                 // 346
  },                                                                                                                  // 178
  "click .editing-commands-cancel > button": function (e) {                                                           // 255
    return chatMessages[this._id].clearEditing();                                                                     // 349
  },                                                                                                                  // 178
  "click .editing-commands-save > button": function (e) {                                                             // 258
    return chatMessages[this._id].send(this._id, chatMessages[this._id].input);                                       // 352
  },                                                                                                                  // 178
  'change .message-form input[type=file]': function (event, template) {                                               // 261
    var e, file, files, filesToUpload, i, len, ref;                                                                   // 262
    e = event.originalEvent || event;                                                                                 // 262
    files = e.target.files;                                                                                           // 263
                                                                                                                      //
    if (!files || files.length === 0) {                                                                               // 264
      files = ((ref = e.dataTransfer) != null ? ref.files : void 0) || [];                                            // 265
    }                                                                                                                 // 360
                                                                                                                      //
    filesToUpload = [];                                                                                               // 267
                                                                                                                      //
    for (i = 0, len = files.length; i < len; i++) {                                                                   // 268
      file = files[i];                                                                                                // 363
      Object.defineProperty(file, 'type', {                                                                           // 270
        value: mime.lookup(file.name)                                                                                 // 270
      });                                                                                                             // 270
      filesToUpload.push({                                                                                            // 271
        file: file,                                                                                                   // 272
        name: file.name                                                                                               // 273
      });                                                                                                             // 272
    }                                                                                                                 // 268
                                                                                                                      //
    return fileUpload(filesToUpload);                                                                                 // 372
  },                                                                                                                  // 178
  "click .message-buttons.share": function (e, t) {                                                                   // 277
    console.log('messageButtonClick');                                                                                // 278
    t.$('.share-items').toggleClass('hidden');                                                                        // 279
    return t.$('.message-buttons.share').toggleClass('active');                                                       // 377
  },                                                                                                                  // 178
  'click .message-form .message-buttons.location': function (event, instance) {                                       // 282
    var latitude, longitude, position, roomId, text;                                                                  // 283
    roomId = this._id;                                                                                                // 283
    position = RocketChat.Geolocation.get();                                                                          // 285
    latitude = position.coords.latitude;                                                                              // 287
    longitude = position.coords.longitude;                                                                            // 288
    text = "<div class=\"location-preview\">\n	<img style=\"height: 250px; width: 250px;\" src=\"https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=250x250&markers=color:gray%7Clabel:%7C" + latitude + "," + longitude + "&key=" + RocketChat.settings.get('MapView_GMapsAPIKey') + "\" />\n</div>";
    return swal({                                                                                                     // 386
      title: t('Share_Location_Title'),                                                                               // 297
      text: text,                                                                                                     // 298
      showCancelButton: true,                                                                                         // 299
      closeOnConfirm: true,                                                                                           // 300
      closeOnCancel: true,                                                                                            // 301
      html: true                                                                                                      // 302
    }, function (isConfirm) {                                                                                         // 297
      if (isConfirm !== true) {                                                                                       // 304
        return;                                                                                                       // 305
      }                                                                                                               // 396
                                                                                                                      //
      return Meteor.call("sendMessage", {                                                                             // 397
        _id: Random.id(),                                                                                             // 308
        rid: roomId,                                                                                                  // 309
        msg: "",                                                                                                      // 310
        location: {                                                                                                   // 311
          type: 'Point',                                                                                              // 312
          coordinates: [longitude, latitude]                                                                          // 313
        }                                                                                                             // 312
      });                                                                                                             // 308
    });                                                                                                               // 296
  },                                                                                                                  // 178
  'click .message-form .mic': function (e, t) {                                                                       // 316
    return AudioRecorder.start(function () {                                                                          // 409
      t.$('.stop-mic').removeClass('hidden');                                                                         // 318
      return t.$('.mic').addClass('hidden');                                                                          // 411
    });                                                                                                               // 317
  },                                                                                                                  // 178
  'click .message-form .video-button': function (e, t) {                                                              // 321
    if (VRecDialog.opened) {                                                                                          // 322
      return VRecDialog.close();                                                                                      // 416
    } else {                                                                                                          // 322
      return VRecDialog.open(e.currentTarget);                                                                        // 418
    }                                                                                                                 // 419
  },                                                                                                                  // 178
  'click .message-form .chart-button': function (e, t) {                                                              // 327
    if (ChartDialog.opened) {                                                                                         // 328
      return ChartDialog.close();                                                                                     // 423
    } else {                                                                                                          // 328
      return ChartDialog.open(e.currentTarget, this._id);                                                             // 425
    }                                                                                                                 // 426
  },                                                                                                                  // 178
  'click .message-form .stop-mic': function (e, t) {                                                                  // 333
    AudioRecorder.stop(function (blob) {                                                                              // 334
      return fileUpload([{                                                                                            // 430
        file: blob,                                                                                                   // 336
        type: 'audio',                                                                                                // 337
        name: TAPi18n.__('Audio record') + '.wav'                                                                     // 338
      }]);                                                                                                            // 335
    });                                                                                                               // 334
    t.$('.stop-mic').addClass('hidden');                                                                              // 341
    return t.$('.mic').removeClass('hidden');                                                                         // 439
  },                                                                                                                  // 178
  'click .sandstorm-offer': function (e, t) {                                                                         // 344
    var roomId;                                                                                                       // 345
    roomId = this._id;                                                                                                // 345
    return RocketChat.Sandstorm.request("uiView", function (_this) {                                                  // 444
      return function (err, data) {                                                                                   // 445
        if (err || !data.token) {                                                                                     // 347
          console.error(err);                                                                                         // 348
          return;                                                                                                     // 349
        }                                                                                                             // 449
                                                                                                                      //
        return Meteor.call("sandstormClaimRequest", data.token, data.descriptor, function (err, viewInfo) {           // 450
          if (err) {                                                                                                  // 351
            console.error(err);                                                                                       // 352
            return;                                                                                                   // 353
          }                                                                                                           // 454
                                                                                                                      //
          return Meteor.call("sendMessage", {                                                                         // 455
            _id: Random.id(),                                                                                         // 356
            rid: roomId,                                                                                              // 357
            msg: "",                                                                                                  // 358
            urls: [{                                                                                                  // 359
              url: "grain://sandstorm",                                                                               // 359
              sandstormViewInfo: viewInfo                                                                             // 359
            }]                                                                                                        // 359
          });                                                                                                         // 355
        });                                                                                                           // 350
      };                                                                                                              // 346
    }(this));                                                                                                         // 346
  }                                                                                                                   // 178
});                                                                                                                   // 178
Template.messageBox.onCreated(function () {                                                                           // 362
  this.isMessageFieldEmpty = new ReactiveVar(true);                                                                   // 363
  this.showMicButton = new ReactiveVar(false);                                                                        // 364
  this.showVideoRec = new ReactiveVar(false);                                                                         // 365
  this.showChartButton = new ReactiveVar(true);                                                                       // 366
  return this.autorun(function (_this) {                                                                              // 477
    return function () {                                                                                              // 478
      var videoEnabled, videoRegex, wavEnabled, wavRegex;                                                             // 369
      videoRegex = /video\/webm|video\/\*/i;                                                                          // 369
      videoEnabled = !RocketChat.settings.get("FileUpload_MediaTypeWhiteList") || RocketChat.settings.get("FileUpload_MediaTypeWhiteList").match(videoRegex);
                                                                                                                      //
      if (RocketChat.settings.get('Message_VideoRecorderEnabled') && (navigator.getUserMedia != null || navigator.webkitGetUserMedia != null) && videoEnabled && RocketChat.settings.get('FileUpload_Enabled')) {
        _this.showVideoRec.set(true);                                                                                 // 372
      } else {                                                                                                        // 371
        _this.showVideoRec.set(false);                                                                                // 374
      }                                                                                                               // 486
                                                                                                                      //
      wavRegex = /audio\/wav|audio\/\*/i;                                                                             // 376
      wavEnabled = !RocketChat.settings.get("FileUpload_MediaTypeWhiteList") || RocketChat.settings.get("FileUpload_MediaTypeWhiteList").match(wavRegex);
                                                                                                                      //
      if (RocketChat.settings.get('Message_AudioRecorderEnabled') && (navigator.getUserMedia != null || navigator.webkitGetUserMedia != null) && wavEnabled && RocketChat.settings.get('FileUpload_Enabled')) {
        return _this.showMicButton.set(true);                                                                         // 490
      } else {                                                                                                        // 378
        return _this.showMicButton.set(false);                                                                        // 492
      }                                                                                                               // 493
    };                                                                                                                // 368
  }(this));                                                                                                           // 368
});                                                                                                                   // 362
Meteor.startup(function () {                                                                                          // 384
  RocketChat.Geolocation = new ReactiveVar(false);                                                                    // 385
  return Tracker.autorun(function () {                                                                                // 500
    var error, options, ref, ref1, success;                                                                           // 388
                                                                                                                      //
    if (RocketChat.settings.get('MapView_Enabled') === true && ((ref = RocketChat.settings.get('MapView_GMapsAPIKey')) != null ? ref.length : void 0) && ((ref1 = navigator.geolocation) != null ? ref1.getCurrentPosition : void 0) != null) {
      success = function (_this) {                                                                                    // 389
        return function (position) {                                                                                  // 504
          return RocketChat.Geolocation.set(position);                                                                // 505
        };                                                                                                            // 389
      }(this);                                                                                                        // 389
                                                                                                                      //
      error = function (_this) {                                                                                      // 392
        return function (error) {                                                                                     // 509
          console.log('Error getting your geolocation', error);                                                       // 393
          return RocketChat.Geolocation.set(false);                                                                   // 511
        };                                                                                                            // 392
      }(this);                                                                                                        // 392
                                                                                                                      //
      options = {                                                                                                     // 396
        enableHighAccuracy: true,                                                                                     // 397
        maximumAge: 0,                                                                                                // 398
        timeout: 10000                                                                                                // 399
      };                                                                                                              // 397
      return navigator.geolocation.watchPosition(success, error);                                                     // 519
    } else {                                                                                                          // 388
      return RocketChat.Geolocation.set(false);                                                                       // 521
    }                                                                                                                 // 522
  });                                                                                                                 // 387
});                                                                                                                   // 384
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"renderMessageBody.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_ui-message/client/renderMessageBody.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global renderMessageBody:true */renderMessageBody = function (msg) {                                               // 1
	msg.html = msg.msg;                                                                                                  // 4
                                                                                                                      //
	if (_.trim(msg.html) !== '') {                                                                                       // 6
		msg.html = _.escapeHTML(msg.html);                                                                                  // 7
	}                                                                                                                    // 8
                                                                                                                      //
	var message = RocketChat.callbacks.run('renderMessage', msg);                                                        // 10
                                                                                                                      //
	if (message.tokens && message.tokens.length > 0) {                                                                   // 12
		var _loop = function (token, text) {                                                                                // 12
			message.html = message.html.replace(token, function () {                                                           // 14
				return text;                                                                                                      // 14
			}); // Uses lambda so doesn't need to escape $                                                                     // 14
		};                                                                                                                  // 12
                                                                                                                      //
		for (var _iterator = message.tokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref2;                                                                                                         // 13
                                                                                                                      //
			if (_isArray) {                                                                                                    // 13
				if (_i >= _iterator.length) break;                                                                                // 13
				_ref2 = _iterator[_i++];                                                                                          // 13
			} else {                                                                                                           // 13
				_i = _iterator.next();                                                                                            // 13
				if (_i.done) break;                                                                                               // 13
				_ref2 = _i.value;                                                                                                 // 13
			}                                                                                                                  // 13
                                                                                                                      //
			var _ref = _ref2;                                                                                                  // 13
			var token = _ref.token;                                                                                            // 13
			var text = _ref.text;                                                                                              // 13
                                                                                                                      //
			_loop(token, text);                                                                                                // 13
		}                                                                                                                   // 15
	}                                                                                                                    // 16
                                                                                                                      //
	msg.html = message.html.replace(/\n/gm, '<br/>');                                                                    // 18
	return msg.html;                                                                                                     // 20
}; /* exported renderMessageBody */                                                                                   // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:ui-message/client/template.message.js");
require("./node_modules/meteor/rocketchat:ui-message/client/template.messageBox.js");
require("./node_modules/meteor/rocketchat:ui-message/client/template.messageDropdown.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopup.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopupChannel.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopupConfig.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopupEmoji.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopupSlashCommand.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/template.messagePopupUser.js");
require("./node_modules/meteor/rocketchat:ui-message/client/message.coffee.js");
require("./node_modules/meteor/rocketchat:ui-message/client/messageBox.coffee.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/messagePopup.coffee.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/messagePopupChannel.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/messagePopupConfig.coffee.js");
require("./node_modules/meteor/rocketchat:ui-message/client/popup/messagePopupEmoji.coffee.js");
require("./node_modules/meteor/rocketchat:ui-message/client/renderMessageBody.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['rocketchat:ui-message'] = {}, {
  renderMessageBody: renderMessageBody
});

})();
