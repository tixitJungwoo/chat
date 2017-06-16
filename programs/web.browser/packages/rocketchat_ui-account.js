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
var SHA256 = Package.sha.SHA256;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-account":{"client":{"template.account.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/template.account.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("account");                                                                                       // 2
Template["account"] = new Template("Template.account", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static"                                                                      // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "User_Settings");                                                      // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.accountFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/template.accountFlex.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("accountFlex");                                                                                   // 2
Template["accountFlex"] = new Template("Template.accountFlex", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER("\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                      // 5
    return Spacebars.mustache(view.lookup("_"), "My_Account");                                                         // 6
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 7
    class: "content"                                                                                                   // 8
  }, "\n\t\t", HTML.DIV({                                                                                              // 9
    class: "wrapper"                                                                                                   // 10
  }, "\n\t\t\t", HTML.UL("\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.A({                                                // 11
    href: function() {                                                                                                 // 12
      return Spacebars.mustache(view.lookup("pathFor"), "account", Spacebars.kw({                                      // 13
        group: "preferences"                                                                                           // 14
      }));                                                                                                             // 15
    },                                                                                                                 // 16
    class: "account-link"                                                                                              // 17
  }, Blaze.View("lookup:_", function() {                                                                               // 18
    return Spacebars.mustache(view.lookup("_"), "Preferences");                                                        // 19
  })), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                                              // 20
    return Spacebars.call(view.lookup("allowUserProfileChange"));                                                      // 21
  }, function() {                                                                                                      // 22
    return [ "\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.A({                                                            // 23
      href: function() {                                                                                               // 24
        return Spacebars.mustache(view.lookup("pathFor"), "account", Spacebars.kw({                                    // 25
          group: "profile"                                                                                             // 26
        }));                                                                                                           // 27
      },                                                                                                               // 28
      class: "account-link"                                                                                            // 29
    }, Blaze.View("lookup:_", function() {                                                                             // 30
      return Spacebars.mustache(view.lookup("_"), "Profile");                                                          // 31
    })), "\n\t\t\t\t"), "\n\t\t\t\t" ];                                                                                // 32
  }), "\n\t\t\t\t", Blaze.If(function() {                                                                              // 33
    return Spacebars.call(view.lookup("allowUserAvatarChange"));                                                       // 34
  }, function() {                                                                                                      // 35
    return [ "\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.A({                                                            // 36
      href: function() {                                                                                               // 37
        return Spacebars.mustache(view.lookup("pathFor"), "changeAvatar");                                             // 38
      },                                                                                                               // 39
      class: "account-link"                                                                                            // 40
    }, Blaze.View("lookup:_", function() {                                                                             // 41
      return Spacebars.mustache(view.lookup("_"), "Avatar");                                                           // 42
    })), "\n\t\t\t\t"), "\n\t\t\t\t" ];                                                                                // 43
  }), "\n\t\t\t\t", HTML.LI("\n\t\t\t\t\t", HTML.A({                                                                   // 44
    href: function() {                                                                                                 // 45
      return Spacebars.mustache(view.lookup("pathFor"), "account", Spacebars.kw({                                      // 46
        group: "security"                                                                                              // 47
      }));                                                                                                             // 48
    },                                                                                                                 // 49
    class: "account-link"                                                                                              // 50
  }, Blaze.View("lookup:_", function() {                                                                               // 51
    return Spacebars.mustache(view.lookup("_"), "Security");                                                           // 52
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t") ];                                                               // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.accountPreferences.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/template.accountPreferences.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("accountPreferences");                                                                            // 2
Template["accountPreferences"] = new Template("Template.accountPreferences", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static"                                                                      // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "Preferences");                                                        // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content"                                                                                                   // 14
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 15
    class: "rocket-form"                                                                                               // 16
  }, "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.DIV({                                                            // 17
    class: "section"                                                                                                   // 18
  }, "\n\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                     // 19
    return Spacebars.mustache(view.lookup("_"), "Localization");                                                       // 20
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 21
    class: "section-content border-component-color"                                                                    // 22
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                    // 23
    class: "input-line"                                                                                                // 24
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL({                                                                                // 25
    for: "language"                                                                                                    // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "Language");                                                           // 28
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 29
    id: "language",                                                                                                    // 30
    class: "required"                                                                                                  // 31
  }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                 // 32
    return Spacebars.call(view.lookup("languages"));                                                                   // 33
  }, function() {                                                                                                      // 34
    return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                 // 35
      value: function() {                                                                                              // 36
        return Spacebars.mustache(view.lookup("key"));                                                                 // 37
      },                                                                                                               // 38
      selected: function() {                                                                                           // 39
        return Spacebars.mustache(view.lookup("userLanguage"), view.lookup("key"));                                    // 40
      },                                                                                                               // 41
      dir: "auto"                                                                                                      // 42
    }, Blaze.View("lookup:name", function() {                                                                          // 43
      return Spacebars.mustache(view.lookup("name"));                                                                  // 44
    })), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                                   // 45
  }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({
    class: "section"                                                                                                   // 47
  }, "\n\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                     // 48
    return Spacebars.mustache(view.lookup("_"), "Messages");                                                           // 49
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 50
    class: "section-content border-component-color"                                                                    // 51
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                    // 52
    class: "input-line double-col"                                                                                     // 53
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 54
    return Spacebars.mustache(view.lookup("_"), "Desktop_Notifications");                                              // 55
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                    // 56
    return Spacebars.call(view.lookup("desktopNotificationEnabled"));                                                  // 57
  }, function() {                                                                                                      // 58
    return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                  // 59
      return Spacebars.mustache(view.lookup("_"), "Desktop_Notifications_Enabled");                                    // 60
    })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.BUTTON({                                                            // 61
      class: "button test-notifications"                                                                               // 62
    }, HTML.I({                                                                                                        // 63
      class: "icon-comment-empty secondary-font-color"                                                                 // 64
    }), " ", HTML.SPAN(Blaze.View("lookup:_", function() {                                                             // 65
      return Spacebars.mustache(view.lookup("_"), "Test_Desktop_Notifications");                                       // 66
    })))), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                   // 67
  }, function() {                                                                                                      // 68
    return [ "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                           // 69
      return Spacebars.call(view.lookup("desktopNotificationDisabled"));                                               // 70
    }, function() {                                                                                                    // 71
      return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                              // 72
        return Spacebars.mustache(view.lookup("_"), "Desktop_Notifications_Disabled");                                 // 73
      })), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                                 // 74
    }, function() {                                                                                                    // 75
      return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.BUTTON({                                                    // 76
        class: "button enable-notifications"                                                                           // 77
      }, HTML.I({                                                                                                      // 78
        class: "icon-comment-empty secondary-font-color"                                                               // 79
      }), " ", HTML.SPAN(Blaze.View("lookup:_", function() {                                                           // 80
        return Spacebars.mustache(view.lookup("_"), "Enable_Desktop_Notifications");                                   // 81
      })))), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                               // 82
    }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                      // 83
  }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                       // 84
    class: "input-line double-col"                                                                                     // 85
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 86
    return Spacebars.mustache(view.lookup("_"), "Notification_Duration");                                              // 87
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                    // 88
    return Spacebars.call(view.lookup("desktopNotificationDuration"));                                                 // 89
  }, function() {                                                                                                      // 90
    return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 91
      type: "number",                                                                                                  // 92
      name: "desktopNotificationDuration",                                                                             // 93
      min: "0",                                                                                                        // 94
      value: function() {                                                                                              // 95
        return Spacebars.mustache(view.lookup("desktopNotificationDuration"));                                         // 96
      }                                                                                                                // 97
    }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                      // 98
  }, function() {                                                                                                      // 99
    return [ "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 100
      type: "number",                                                                                                  // 101
      name: "desktopNotificationDuration",                                                                             // 102
      min: "0",                                                                                                        // 103
      value: "",                                                                                                       // 104
      placeholder: function() {                                                                                        // 105
        return Spacebars.mustache(view.lookup("_"), "Use_Global_Settings");                                            // 106
      }                                                                                                                // 107
    }), "\n\t\t\t\t\t\t\t\t\t" ];                                                                                      // 108
  }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                       // 109
    class: "input-line double-col",                                                                                    // 110
    id: "unreadAlert"                                                                                                  // 111
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 112
    return Spacebars.mustache(view.lookup("_"), "Unread_Tray_Icon_Alert");                                             // 113
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 114
    type: "radio",                                                                                                     // 115
    name: "unreadAlert",                                                                                               // 116
    value: "1",                                                                                                        // 117
    checked: function() {                                                                                              // 118
      return Spacebars.mustache(view.lookup("checked"), "unreadAlert", true, true);                                    // 119
    }                                                                                                                  // 120
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 121
    return Spacebars.mustache(view.lookup("_"), "On");                                                                 // 122
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 123
    type: "radio",                                                                                                     // 124
    name: "unreadAlert",                                                                                               // 125
    value: "0",                                                                                                        // 126
    checked: function() {                                                                                              // 127
      return Spacebars.mustache(view.lookup("checked"), "unreadAlert", false);                                         // 128
    }                                                                                                                  // 129
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 130
    return Spacebars.mustache(view.lookup("_"), "Off");                                                                // 131
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 132
    class: "input-line double-col"                                                                                     // 133
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 134
    return Spacebars.mustache(view.lookup("_"), "Use_Emojis");                                                         // 135
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 136
    type: "radio",                                                                                                     // 137
    name: "useEmojis",                                                                                                 // 138
    value: "1",                                                                                                        // 139
    checked: function() {                                                                                              // 140
      return Spacebars.mustache(view.lookup("checked"), "useEmojis", true, true);                                      // 141
    }                                                                                                                  // 142
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 143
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 144
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 145
    type: "radio",                                                                                                     // 146
    name: "useEmojis",                                                                                                 // 147
    value: "0",                                                                                                        // 148
    checked: function() {                                                                                              // 149
      return Spacebars.mustache(view.lookup("checked"), "useEmojis", false);                                           // 150
    }                                                                                                                  // 151
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 152
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 153
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 154
    class: "input-line double-col",                                                                                    // 155
    id: "convertAsciiEmoji"                                                                                            // 156
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 157
    return Spacebars.mustache(view.lookup("_"), "Convert_Ascii_Emojis");                                               // 158
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 159
    type: "radio",                                                                                                     // 160
    name: "convertAsciiEmoji",                                                                                         // 161
    value: "1",                                                                                                        // 162
    checked: function() {                                                                                              // 163
      return Spacebars.mustache(view.lookup("checked"), "convertAsciiEmoji", true, true);                              // 164
    }                                                                                                                  // 165
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 166
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 167
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 168
    type: "radio",                                                                                                     // 169
    name: "convertAsciiEmoji",                                                                                         // 170
    value: "0",                                                                                                        // 171
    checked: function() {                                                                                              // 172
      return Spacebars.mustache(view.lookup("checked"), "convertAsciiEmoji", false);                                   // 173
    }                                                                                                                  // 174
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 175
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 176
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 177
    class: "input-line double-col",                                                                                    // 178
    id: "autoImageLoad"                                                                                                // 179
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 180
    return Spacebars.mustache(view.lookup("_"), "Auto_Load_Images");                                                   // 181
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 182
    type: "radio",                                                                                                     // 183
    name: "autoImageLoad",                                                                                             // 184
    value: "1",                                                                                                        // 185
    checked: function() {                                                                                              // 186
      return Spacebars.mustache(view.lookup("checked"), "autoImageLoad", true, true);                                  // 187
    }                                                                                                                  // 188
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 189
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 190
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 191
    type: "radio",                                                                                                     // 192
    name: "autoImageLoad",                                                                                             // 193
    value: "0",                                                                                                        // 194
    checked: function() {                                                                                              // 195
      return Spacebars.mustache(view.lookup("checked"), "autoImageLoad", false);                                       // 196
    }                                                                                                                  // 197
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 198
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 199
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 200
    class: "input-line double-col",                                                                                    // 201
    id: "saveMobileBandwidth"                                                                                          // 202
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 203
    return Spacebars.mustache(view.lookup("_"), "Save_Mobile_Bandwidth");                                              // 204
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 205
    type: "radio",                                                                                                     // 206
    name: "saveMobileBandwidth",                                                                                       // 207
    value: "1",                                                                                                        // 208
    checked: function() {                                                                                              // 209
      return Spacebars.mustache(view.lookup("checked"), "saveMobileBandwidth", true, true);                            // 210
    }                                                                                                                  // 211
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 212
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 213
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 214
    type: "radio",                                                                                                     // 215
    name: "saveMobileBandwidth",                                                                                       // 216
    value: "0",                                                                                                        // 217
    checked: function() {                                                                                              // 218
      return Spacebars.mustache(view.lookup("checked"), "saveMobileBandwidth", false);                                 // 219
    }                                                                                                                  // 220
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 221
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 222
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 223
    class: "input-line double-col",                                                                                    // 224
    id: "collapseMediaByDefault"                                                                                       // 225
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 226
    return Spacebars.mustache(view.lookup("_"), "Collapse_Embedded_Media_By_Default");                                 // 227
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 228
    type: "radio",                                                                                                     // 229
    name: "collapseMediaByDefault",                                                                                    // 230
    value: "1",                                                                                                        // 231
    checked: function() {                                                                                              // 232
      return Spacebars.mustache(view.lookup("checked"), "collapseMediaByDefault", true);                               // 233
    }                                                                                                                  // 234
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 235
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 236
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 237
    type: "radio",                                                                                                     // 238
    name: "collapseMediaByDefault",                                                                                    // 239
    value: "0",                                                                                                        // 240
    checked: function() {                                                                                              // 241
      return Spacebars.mustache(view.lookup("checked"), "collapseMediaByDefault", false, true);                        // 242
    }                                                                                                                  // 243
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 244
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 245
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 246
    class: "input-line double-col",                                                                                    // 247
    id: "unreadRoomsMode"                                                                                              // 248
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 249
    return Spacebars.mustache(view.lookup("_"), "Unread_Rooms_Mode");                                                  // 250
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 251
    type: "radio",                                                                                                     // 252
    name: "unreadRoomsMode",                                                                                           // 253
    value: "1",                                                                                                        // 254
    checked: function() {                                                                                              // 255
      return Spacebars.mustache(view.lookup("checked"), "unreadRoomsMode", true);                                      // 256
    }                                                                                                                  // 257
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 258
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 259
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 260
    type: "radio",                                                                                                     // 261
    name: "unreadRoomsMode",                                                                                           // 262
    value: "0",                                                                                                        // 263
    checked: function() {                                                                                              // 264
      return Spacebars.mustache(view.lookup("checked"), "unreadRoomsMode", false, true);                               // 265
    }                                                                                                                  // 266
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 267
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 268
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 269
    class: "input-line double-col",                                                                                    // 270
    id: "hideUsernames"                                                                                                // 271
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 272
    return Spacebars.mustache(view.lookup("_"), "Hide_usernames");                                                     // 273
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 274
    type: "radio",                                                                                                     // 275
    name: "hideUsernames",                                                                                             // 276
    value: "1",                                                                                                        // 277
    checked: function() {                                                                                              // 278
      return Spacebars.mustache(view.lookup("checked"), "hideUsernames", true);                                        // 279
    }                                                                                                                  // 280
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 281
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 282
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 283
    type: "radio",                                                                                                     // 284
    name: "hideUsernames",                                                                                             // 285
    value: "0",                                                                                                        // 286
    checked: function() {                                                                                              // 287
      return Spacebars.mustache(view.lookup("checked"), "hideUsernames", false, true);                                 // 288
    }                                                                                                                  // 289
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 290
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 291
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                           // 292
    return Spacebars.call(view.lookup("showRoles"));                                                                   // 293
  }, function() {                                                                                                      // 294
    return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 295
      class: "input-line double-col",                                                                                  // 296
      id: "hideRoles"                                                                                                  // 297
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                          // 298
      return Spacebars.mustache(view.lookup("_"), "Hide_roles");                                                       // 299
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                            // 300
      type: "radio",                                                                                                   // 301
      name: "hideRoles",                                                                                               // 302
      value: "1",                                                                                                      // 303
      checked: function() {                                                                                            // 304
        return Spacebars.mustache(view.lookup("checked"), "hideRoles", true);                                          // 305
      }                                                                                                                // 306
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 307
      return Spacebars.mustache(view.lookup("_"), "True");                                                             // 308
    })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                             // 309
      type: "radio",                                                                                                   // 310
      name: "hideRoles",                                                                                               // 311
      value: "0",                                                                                                      // 312
      checked: function() {                                                                                            // 313
        return Spacebars.mustache(view.lookup("checked"), "hideRoles", false, true);                                   // 314
      }                                                                                                                // 315
    }), " ", Blaze.View("lookup:_", function() {                                                                       // 316
      return Spacebars.mustache(view.lookup("_"), "False");                                                            // 317
    })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                         // 318
  }), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                   // 319
    class: "input-line double-col",                                                                                    // 320
    id: "hideFlexTab"                                                                                                  // 321
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 322
    return Spacebars.mustache(view.lookup("_"), "Hide_flextab");                                                       // 323
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 324
    type: "radio",                                                                                                     // 325
    name: "hideFlexTab",                                                                                               // 326
    value: "1",                                                                                                        // 327
    checked: function() {                                                                                              // 328
      return Spacebars.mustache(view.lookup("checked"), "hideFlexTab", true);                                          // 329
    }                                                                                                                  // 330
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 331
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 332
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 333
    type: "radio",                                                                                                     // 334
    name: "hideFlexTab",                                                                                               // 335
    value: "0",                                                                                                        // 336
    checked: function() {                                                                                              // 337
      return Spacebars.mustache(view.lookup("checked"), "hideFlexTab", false, true);                                   // 338
    }                                                                                                                  // 339
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 340
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 341
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 342
    class: "input-line double-col",                                                                                    // 343
    id: "hideAvatars"                                                                                                  // 344
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 345
    return Spacebars.mustache(view.lookup("_"), "Hide_Avatars");                                                       // 346
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 347
    type: "radio",                                                                                                     // 348
    name: "hideAvatars",                                                                                               // 349
    value: "1",                                                                                                        // 350
    checked: function() {                                                                                              // 351
      return Spacebars.mustache(view.lookup("checked"), "hideAvatars", true);                                          // 352
    }                                                                                                                  // 353
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 354
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 355
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 356
    type: "radio",                                                                                                     // 357
    name: "hideAvatars",                                                                                               // 358
    value: "0",                                                                                                        // 359
    checked: function() {                                                                                              // 360
      return Spacebars.mustache(view.lookup("checked"), "hideAvatars", false, true);                                   // 361
    }                                                                                                                  // 362
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 363
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 364
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 365
    class: "input-line double-col",                                                                                    // 366
    id: "mergeChannels"                                                                                                // 367
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 368
    return Spacebars.mustache(view.lookup("_"), "UI_Merge_Channels_Groups");                                           // 369
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                  // 370
    type: "radio",                                                                                                     // 371
    name: "mergeChannels",                                                                                             // 372
    value: "1",                                                                                                        // 373
    checked: function() {                                                                                              // 374
      return Spacebars.mustache(view.lookup("checked"), "mergeChannels", true);                                        // 375
    }                                                                                                                  // 376
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 377
    return Spacebars.mustache(view.lookup("_"), "True");                                                               // 378
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 379
    type: "radio",                                                                                                     // 380
    name: "mergeChannels",                                                                                             // 381
    value: "0",                                                                                                        // 382
    checked: function() {                                                                                              // 383
      return Spacebars.mustache(view.lookup("checked"), "mergeChannels", false);                                       // 384
    }                                                                                                                  // 385
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 386
    return Spacebars.mustache(view.lookup("_"), "False");                                                              // 387
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(HTML.INPUT({                                                                 // 388
    type: "radio",                                                                                                     // 389
    name: "mergeChannels",                                                                                             // 390
    value: "-1",                                                                                                       // 391
    checked: function() {                                                                                              // 392
      return Spacebars.mustache(view.lookup("checked"), "mergeChannels", view.lookup("undefined"), true);              // 393
    }                                                                                                                  // 394
  }), " ", Blaze.View("lookup:_", function() {                                                                         // 395
    return Spacebars.mustache(view.lookup("_"), "Default");                                                            // 396
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 397
    class: "input-line double-col",                                                                                    // 398
    id: "sendOnEnter"                                                                                                  // 399
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 400
    return Spacebars.mustache(view.lookup("_"), "Enter_Behaviour");                                                    // 401
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 402
    class: "input-monitor",                                                                                            // 403
    name: "sendOnEnter"                                                                                                // 404
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                           // 405
    value: "normal",                                                                                                   // 406
    selected: function() {                                                                                             // 407
      return Spacebars.mustache(view.lookup("selected"), "sendOnEnter", "normal", true);                               // 408
    }                                                                                                                  // 409
  }, Blaze.View("lookup:_", function() {                                                                               // 410
    return Spacebars.mustache(view.lookup("_"), "Enter_Normal");                                                       // 411
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 412
    value: "alternative",                                                                                              // 413
    selected: function() {                                                                                             // 414
      return Spacebars.mustache(view.lookup("selected"), "sendOnEnter", "alternative");                                // 415
    }                                                                                                                  // 416
  }, Blaze.View("lookup:_", function() {                                                                               // 417
    return Spacebars.mustache(view.lookup("_"), "Enter_Alternative");                                                  // 418
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 419
    value: "desktop",                                                                                                  // 420
    selected: function() {                                                                                             // 421
      return Spacebars.mustache(view.lookup("selected"), "sendOnEnter", "desktop");                                    // 422
    }                                                                                                                  // 423
  }, Blaze.View("lookup:_", function() {                                                                               // 424
    return Spacebars.mustache(view.lookup("_"), "Only_On_Desktop");                                                    // 425
  })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                     // 426
    class: "info"                                                                                                      // 427
  }, Blaze.View("lookup:_", function() {                                                                               // 428
    return Spacebars.mustache(view.lookup("_"), "Enter_Behaviour_Description");                                        // 429
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 430
    class: "input-line double-col",                                                                                    // 431
    id: "viewMode"                                                                                                     // 432
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 433
    return Spacebars.mustache(view.lookup("_"), "View_mode");                                                          // 434
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 435
    class: "input-monitor",                                                                                            // 436
    name: "viewMode"                                                                                                   // 437
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                           // 438
    value: "0",                                                                                                        // 439
    selected: function() {                                                                                             // 440
      return Spacebars.mustache(view.lookup("selected"), "viewMode", 0, true);                                         // 441
    }                                                                                                                  // 442
  }, Blaze.View("lookup:_", function() {                                                                               // 443
    return Spacebars.mustache(view.lookup("_"), "Normal");                                                             // 444
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 445
    value: "1",                                                                                                        // 446
    selected: function() {                                                                                             // 447
      return Spacebars.mustache(view.lookup("selected"), "viewMode", 1, false);                                        // 448
    }                                                                                                                  // 449
  }, Blaze.View("lookup:_", function() {                                                                               // 450
    return Spacebars.mustache(view.lookup("_"), "Cozy");                                                               // 451
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 452
    value: "2",                                                                                                        // 453
    selected: function() {                                                                                             // 454
      return Spacebars.mustache(view.lookup("selected"), "viewMode", 2, false);                                        // 455
    }                                                                                                                  // 456
  }, Blaze.View("lookup:_", function() {                                                                               // 457
    return Spacebars.mustache(view.lookup("_"), "Compact");                                                            // 458
  })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                     // 459
    class: "info"                                                                                                      // 460
  }, Blaze.View("lookup:_", function() {                                                                               // 461
    return Spacebars.mustache(view.lookup("_"), "View_mode_info");                                                     // 462
  })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 463
    class: "input-line double-col",                                                                                    // 464
    id: "emailNotificationMode"                                                                                        // 465
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 466
    return Spacebars.mustache(view.lookup("_"), "Email_Notification_Mode");                                            // 467
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 468
    class: "input-monitor",                                                                                            // 469
    name: "emailNotificationMode"                                                                                      // 470
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                           // 471
    value: "disabled",                                                                                                 // 472
    selected: function() {                                                                                             // 473
      return Spacebars.mustache(view.lookup("selected"), "emailNotificationMode", "disabled", false);                  // 474
    }                                                                                                                  // 475
  }, Blaze.View("lookup:_", function() {                                                                               // 476
    return Spacebars.mustache(view.lookup("_"), "Email_Notification_Mode_Disabled");                                   // 477
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 478
    value: "all",                                                                                                      // 479
    selected: function() {                                                                                             // 480
      return Spacebars.mustache(view.lookup("selected"), "emailNotificationMode", "all", true);                        // 481
    }                                                                                                                  // 482
  }, Blaze.View("lookup:_", function() {                                                                               // 483
    return Spacebars.mustache(view.lookup("_"), "Email_Notification_Mode_All");                                        // 484
  })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                // 485
    class: "info"                                                                                                      // 486
  }, Blaze.View("lookup:_", function() {                                                                               // 487
    return Spacebars.mustache(view.lookup("_"), "You_need_to_verifiy_your_email_address_to_get_notications");          // 488
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                             // 489
    class: "section"                                                                                                   // 490
  }, "\n\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                     // 491
    return Spacebars.mustache(view.lookup("_"), "Highlights");                                                         // 492
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 493
    class: "section-content border-component-color"                                                                    // 494
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                    // 495
    class: "input-line double-col"                                                                                     // 496
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 497
    return Spacebars.mustache(view.lookup("_"), "Highlights_List");                                                    // 498
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {           // 499
    return Spacebars.mustache(view.lookup("_"), "Highlights_How_To");                                                  // 500
  })), "\n\t\t\t\t\t\t\t\t\t", HTML.TEXTAREA({                                                                         // 501
    name: "highlights",                                                                                                // 502
    id: "highlights",                                                                                                  // 503
    cols: "30",                                                                                                        // 504
    rows: "10",                                                                                                        // 505
    value: function() {                                                                                                // 506
      return Spacebars.mustache(view.lookup("highlights"));                                                            // 507
    }                                                                                                                  // 508
  }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({       // 509
    class: "section"                                                                                                   // 510
  }, "\n\t\t\t\t\t\t", HTML.H1(Blaze.View("lookup:_", function() {                                                     // 511
    return Spacebars.mustache(view.lookup("_"), "Sound");                                                              // 512
  })), "\n\t\t\t\t\t\t", HTML.DIV({                                                                                    // 513
    class: "section-content border-component-color"                                                                    // 514
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                    // 515
    class: "input-line double-col"                                                                                     // 516
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 517
    return Spacebars.mustache(view.lookup("_"), "New_Room_Notification");                                              // 518
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 519
    name: "newRoomNotification",                                                                                       // 520
    class: "audio"                                                                                                     // 521
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                           // 522
    value: "none",                                                                                                     // 523
    selected: function() {                                                                                             // 524
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("newRoomNotification"), "none");                       // 525
    }                                                                                                                  // 526
  }, Blaze.View("lookup:_", function() {                                                                               // 527
    return Spacebars.mustache(view.lookup("_"), "None");                                                               // 528
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 529
    value: "door",                                                                                                     // 530
    selected: function() {                                                                                             // 531
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("newRoomNotification"), "door");                       // 532
    }                                                                                                                  // 533
  }, "Door (", Blaze.View("lookup:_", function() {                                                                     // 534
    return Spacebars.mustache(view.lookup("_"), "Default");                                                            // 535
  }), ")"), "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                          // 536
    return Spacebars.call(view.lookup("audioAssets"));                                                                 // 537
  }, function() {                                                                                                      // 538
    return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                 // 539
      value: function() {                                                                                              // 540
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 541
      },                                                                                                               // 542
      selected: function() {                                                                                           // 543
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("newRoomNotification"), view.lookup("_id"));         // 544
      }                                                                                                                // 545
    }, Blaze.View("lookup:name", function() {                                                                          // 546
      return Spacebars.mustache(view.lookup("name"));                                                                  // 547
    })), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                                   // 548
  }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({              // 549
    class: "input-line double-col"                                                                                     // 550
  }, "\n\t\t\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                              // 551
    return Spacebars.mustache(view.lookup("_"), "New_Message_Notification");                                           // 552
  })), "\n\t\t\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t\t\t", HTML.SELECT({                                            // 553
    name: "newMessageNotification",                                                                                    // 554
    class: "audio"                                                                                                     // 555
  }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                           // 556
    value: "none",                                                                                                     // 557
    selected: function() {                                                                                             // 558
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("newMessageNotification"), "none");                    // 559
    }                                                                                                                  // 560
  }, Blaze.View("lookup:_", function() {                                                                               // 561
    return Spacebars.mustache(view.lookup("_"), "None");                                                               // 562
  })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                         // 563
    value: "chime",                                                                                                    // 564
    selected: function() {                                                                                             // 565
      return Spacebars.mustache(view.lookup("$eq"), view.lookup("newMessageNotification"), "chime");                   // 566
    }                                                                                                                  // 567
  }, "Chime (", Blaze.View("lookup:_", function() {                                                                    // 568
    return Spacebars.mustache(view.lookup("_"), "Default");                                                            // 569
  }), ")"), "\n\t\t\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                          // 570
    return Spacebars.call(view.lookup("audioAssets"));                                                                 // 571
  }, function() {                                                                                                      // 572
    return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                 // 573
      value: function() {                                                                                              // 574
        return Spacebars.mustache(view.lookup("_id"));                                                                 // 575
      },                                                                                                               // 576
      selected: function() {                                                                                           // 577
        return Spacebars.mustache(view.lookup("$eq"), view.lookup("newMessageNotification"), view.lookup("_id"));      // 578
      }                                                                                                                // 579
    }, Blaze.View("lookup:name", function() {                                                                          // 580
      return Spacebars.mustache(view.lookup("name"));                                                                  // 581
    })), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                                   // 582
  }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({
    class: "submit"                                                                                                    // 584
  }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                     // 585
    class: "button primary save"                                                                                       // 586
  }, HTML.Raw('<i class="icon-send"></i>'), HTML.SPAN(Blaze.View("lookup:_", function() {                              // 587
    return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                       // 588
  }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                // 589
}));                                                                                                                   // 590
                                                                                                                       // 591
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.accountProfile.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/template.accountProfile.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("accountProfile");                                                                                // 2
Template["accountProfile"] = new Template("Template.accountProfile", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.SECTION({                                                                                                // 5
    class: "page-container page-home page-static"                                                                      // 6
  }, "\n\t\t", HTML.HEADER({                                                                                           // 7
    class: "fixed-title border-component-color"                                                                        // 8
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 9
    class: "room-title"                                                                                                // 10
  }, Blaze.View("lookup:_", function() {                                                                               // 11
    return Spacebars.mustache(view.lookup("_"), "Profile");                                                            // 12
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 13
    class: "content"                                                                                                   // 14
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 15
    class: "rocket-form"                                                                                               // 16
  }, "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", HTML.DIV({                                                            // 17
    class: "input-line"                                                                                                // 18
  }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                    // 19
    for: "realname"                                                                                                    // 20
  }, Blaze.View("lookup:_", function() {                                                                               // 21
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 22
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.INPUT({                                                     // 23
    type: "text",                                                                                                      // 24
    name: "realname",                                                                                                  // 25
    id: "realname",                                                                                                    // 26
    value: function() {                                                                                                // 27
      return Spacebars.mustache(view.lookup("realname"));                                                              // 28
    }                                                                                                                  // 29
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                   // 30
    class: "input-line"                                                                                                // 31
  }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                    // 32
    for: "username"                                                                                                    // 33
  }, Blaze.View("lookup:_", function() {                                                                               // 34
    return Spacebars.mustache(view.lookup("_"), "Username");                                                           // 35
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", Blaze.If(function() {                                              // 36
    return Spacebars.call(view.lookup("allowUsernameChange"));                                                         // 37
  }, function() {                                                                                                      // 38
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 39
      type: "text",                                                                                                    // 40
      name: "username",                                                                                                // 41
      id: "username",                                                                                                  // 42
      value: function() {                                                                                              // 43
        return Spacebars.mustache(view.lookup("username"));                                                            // 44
      }                                                                                                                // 45
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 46
  }, function() {                                                                                                      // 47
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 48
      type: "text",                                                                                                    // 49
      name: "username",                                                                                                // 50
      id: "username",                                                                                                  // 51
      value: function() {                                                                                              // 52
        return Spacebars.mustache(view.lookup("username"));                                                            // 53
      },                                                                                                               // 54
      readonly: "readonly",                                                                                            // 55
      title: function() {                                                                                              // 56
        return Spacebars.mustache(view.lookup("usernameChangeDisabled"));                                              // 57
      }                                                                                                                // 58
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 59
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                   // 60
    class: "input-line"                                                                                                // 61
  }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                    // 62
    for: "email"                                                                                                       // 63
  }, Blaze.View("lookup:_", function() {                                                                               // 64
    return Spacebars.mustache(view.lookup("_"), "Email");                                                              // 65
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", Blaze.If(function() {                                              // 66
    return Spacebars.call(view.lookup("emailVerified"));                                                               // 67
  }, function() {                                                                                                      // 68
    return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 69
      class: "right"                                                                                                   // 70
    }, "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                                  // 71
      class: "icon-ok success-color",                                                                                  // 72
      title: function() {                                                                                              // 73
        return Spacebars.mustache(view.lookup("_"), "Email_verified");                                                 // 74
      }                                                                                                                // 75
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                                                       // 76
  }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                          // 77
    return Spacebars.call(view.lookup("allowEmailChange"));                                                            // 78
  }, function() {                                                                                                      // 79
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 80
      type: "email",                                                                                                   // 81
      name: "email",                                                                                                   // 82
      id: "email",                                                                                                     // 83
      value: function() {                                                                                              // 84
        return Spacebars.mustache(view.lookup("email"));                                                               // 85
      }                                                                                                                // 86
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 87
  }, function() {                                                                                                      // 88
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 89
      type: "email",                                                                                                   // 90
      name: "email",                                                                                                   // 91
      id: "email",                                                                                                     // 92
      value: function() {                                                                                              // 93
        return Spacebars.mustache(view.lookup("email"));                                                               // 94
      },                                                                                                               // 95
      readonly: "readonly",                                                                                            // 96
      title: function() {                                                                                              // 97
        return Spacebars.mustache(view.lookup("emailChangeDisabled"));                                                 // 98
      }                                                                                                                // 99
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 100
  }), "\n\t\t\t\t\t\t", Blaze.Unless(function() {                                                                      // 101
    return Spacebars.call(view.lookup("emailVerified"));                                                               // 102
  }, function() {                                                                                                      // 103
    return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 104
      class: "text-right"                                                                                              // 105
    }, "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                             // 106
      class: "button",                                                                                                 // 107
      id: "resend-verification-email"                                                                                  // 108
    }, Blaze.View("lookup:_", function() {                                                                             // 109
      return Spacebars.mustache(view.lookup("_"), "Resend_verification_email");                                        // 110
    })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                                                      // 111
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                   // 112
    class: "input-line"                                                                                                // 113
  }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                    // 114
    for: "password"                                                                                                    // 115
  }, Blaze.View("lookup:_", function() {                                                                               // 116
    return Spacebars.mustache(view.lookup("_"), "New_password");                                                       // 117
  })), "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", Blaze.If(function() {                                              // 118
    return Spacebars.call(view.lookup("allowPasswordChange"));                                                         // 119
  }, function() {                                                                                                      // 120
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 121
      type: "password",                                                                                                // 122
      name: "password",                                                                                                // 123
      id: "password"                                                                                                   // 124
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 125
  }, function() {                                                                                                      // 126
    return [ "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 127
      type: "password",                                                                                                // 128
      name: "password",                                                                                                // 129
      id: "password",                                                                                                  // 130
      disabled: "",                                                                                                    // 131
      readonly: "readonly",                                                                                            // 132
      title: function() {                                                                                              // 133
        return Spacebars.mustache(view.lookup("passwordChangeDisabled"));                                              // 134
      },                                                                                                               // 135
      placeholder: function() {                                                                                        // 136
        return Spacebars.mustache(view.lookup("passwordChangeDisabled"));                                              // 137
      }                                                                                                                // 138
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 139
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.FIELDSET("\n\t\t\t\t\t", Blaze._TemplateWith(function() {
    return {                                                                                                           // 141
      hideFromForm: Spacebars.call(false),                                                                             // 142
      formData: Spacebars.call(view.lookup("customFields"))                                                            // 143
    };                                                                                                                 // 144
  }, function() {                                                                                                      // 145
    return Spacebars.include(view.lookupTemplate("customFieldsForm"));                                                 // 146
  }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                          // 147
    class: "submit"                                                                                                    // 148
  }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                     // 149
    class: "button primary send"                                                                                       // 150
  }, HTML.Raw('<i class="icon-send"></i>'), HTML.SPAN(Blaze.View("lookup:_", function() {                              // 151
    return Spacebars.mustache(view.lookup("_"), "Save_changes");                                                       // 152
  }))), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 153
    class: "logoutOthers"                                                                                              // 154
  }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                     // 155
    class: "button logout"                                                                                             // 156
  }, Blaze.View("lookup:_", function() {                                                                               // 157
    return Spacebars.mustache(view.lookup("_"), "Logout_Others");                                                      // 158
  })), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                                              // 159
    return Spacebars.call(view.lookup("allowDeleteOwnAccount"));                                                       // 160
  }, function() {                                                                                                      // 161
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 162
      class: "delete-account text-right"                                                                               // 163
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 164
      class: "button danger delete"                                                                                    // 165
    }, HTML.I({                                                                                                        // 166
      class: "icon-trash"                                                                                              // 167
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 168
      return Spacebars.mustache(view.lookup("_"), "Delete_my_account");                                                // 169
    }))), "\n\t\t\t\t"), "\n\t\t\t\t" ];                                                                               // 170
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 171
}));                                                                                                                   // 172
                                                                                                                       // 173
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"avatar":{"template.avatar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/avatar/template.avatar.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("avatar");                                                                                        // 2
Template["avatar"] = new Template("Template.avatar", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "avatar"                                                                                                    // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "avatar-image",                                                                                             // 8
    style: function() {                                                                                                // 9
      return Spacebars.mustache(view.lookup("imageUrl"));                                                              // 10
    }                                                                                                                  // 11
  }), "\n\t");                                                                                                         // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.prompt.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/avatar/template.prompt.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("avatarSuggestion");                                                                              // 2
Template["avatarSuggestion"] = new Template("Template.avatarSuggestion", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("."));                                                                           // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.DIV({                                                                                      // 8
      class: "avatar-suggestion-item border-component-color"                                                           // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                          // 10
      class: "avatar tertiary-background-color",                                                                       // 11
      style: function() {                                                                                              // 12
        return [ "background-image: url(", Spacebars.mustache(view.lookup("blob")), ");" ];                            // 13
      }                                                                                                                // 14
    }, "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                             // 15
      class: "action"                                                                                                  // 16
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 17
      type: "button",                                                                                                  // 18
      class: function() {                                                                                              // 19
        return [ "button primary ", Spacebars.mustache(view.lookup("service")), " select-service" ];                   // 20
      }                                                                                                                // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "Use_service_avatar", view.lookup("service"));                       // 23
    })), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                             // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
Template.__checkName("avatarSuggestionLogin");                                                                         // 28
Template["avatarSuggestionLogin"] = new Template("Template.avatarSuggestionLogin", (function() {                       // 29
  var view = this;                                                                                                     // 30
  return Blaze.If(function() {                                                                                         // 31
    return Spacebars.call(view.lookup("."));                                                                           // 32
  }, function() {                                                                                                      // 33
    return [ "\n\t\t", HTML.DIV({                                                                                      // 34
      class: "avatar-suggestion-item border-component-color"                                                           // 35
    }, "\n\t\t\t", HTML.DIV({                                                                                          // 36
      class: "avatar question-mark icon-user tertiary-background-color"                                                // 37
    }), "\n\t\t\t", HTML.DIV({                                                                                         // 38
      class: "action"                                                                                                  // 39
    }, "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 40
      type: "button",                                                                                                  // 41
      class: function() {                                                                                              // 42
        return [ "button primary ", Spacebars.mustache(view.lookup(".")), " login-with-service" ];                     // 43
      }                                                                                                                // 44
    }, Blaze.View("lookup:_", function() {                                                                             // 45
      return Spacebars.mustache(view.lookup("_"), "Login_with", view.lookup("."));                                     // 46
    })), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                             // 47
  });                                                                                                                  // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
Template.__checkName("avatarPrompt");                                                                                  // 51
Template["avatarPrompt"] = new Template("Template.avatarPrompt", (function() {                                         // 52
  var view = this;                                                                                                     // 53
  return HTML.SECTION({                                                                                                // 54
    class: "page-container page-home page-static content-background-color"                                             // 55
  }, "\n\t\t", HTML.HEADER({                                                                                           // 56
    class: "fixed-title content-background-color border-component-color"                                               // 57
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t", HTML.H2("\n\t\t\t\t", HTML.SPAN({       // 58
    class: "room-title"                                                                                                // 59
  }, Blaze.View("lookup:_", function() {                                                                               // 60
    return Spacebars.mustache(view.lookup("_"), "Select_an_avatar");                                                   // 61
  })), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 62
    class: "content"                                                                                                   // 63
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 64
    class: "avatarPrompt"                                                                                              // 65
  }, "\n\t\t\t\t", HTML.HEADER({                                                                                       // 66
    class: "content-background-color border-component-color"                                                           // 67
  }, "\n\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                        // 68
    return Spacebars.mustache(view.lookup("_"), "Select_service_to_login");                                            // 69
  })), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV("\n\t\t\t\t\t", HTML.DIV({                                                // 70
    class: "avatar-suggestions"                                                                                        // 71
  }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                      // 72
    class: "avatar-suggestion-item border-component-color"                                                             // 73
  }, "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                              // 74
    return {                                                                                                           // 75
      username: Spacebars.call(view.lookup("initialsUsername"))                                                        // 76
    };                                                                                                                 // 77
  }, function() {                                                                                                      // 78
    return Spacebars.include(view.lookupTemplate("avatar"));                                                           // 79
  }), "\n\t\t\t\t\t\t\t", Spacebars.With(function() {                                                                  // 80
    return {                                                                                                           // 81
      service: Spacebars.call("initials")                                                                              // 82
    };                                                                                                                 // 83
  }, function() {                                                                                                      // 84
    return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 85
      class: "action"                                                                                                  // 86
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                           // 87
      type: "button",                                                                                                  // 88
      class: "button primary select-service"                                                                           // 89
    }, Blaze.View("lookup:_", function() {                                                                             // 90
      return Spacebars.mustache(view.lookup("_"), "Use_initials_avatar");                                              // 91
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                                  // 92
  }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                                                  // 93
    class: "avatar-suggestion-item border-component-color"                                                             // 94
  }, "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                                    // 95
    style: function() {                                                                                                // 96
      return [ "background-image: url(", Spacebars.mustache(Spacebars.dot(view.lookup("upload"), "blob")), ");" ];     // 97
    },                                                                                                                 // 98
    class: function() {                                                                                                // 99
      return [ "avatar tertiary-background-color ", Blaze.Unless(function() {                                          // 100
        return Spacebars.call(view.lookup("upload"));                                                                  // 101
      }, function() {                                                                                                  // 102
        return "question-mark icon-upload";                                                                            // 103
      }) ];                                                                                                            // 104
    }                                                                                                                  // 105
  }, "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.DIV({                                                               // 106
    class: "action"                                                                                                    // 107
  }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                                  // 108
    class: "button primary"                                                                                            // 109
  }, Blaze.View("lookup:_", function() {                                                                               // 110
    return Spacebars.mustache(view.lookup("_"), "Select_file");                                                        // 111
  }), "\n\t\t\t\t\t\t\t\t\t", HTML.Raw('<input type="file" class="avatar-file-input" accept="image/*">'), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t", Spacebars.With(function() {
    return Spacebars.call(view.lookup("upload"));                                                                      // 113
  }, function() {                                                                                                      // 114
    return [ "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 115
      type: "button",                                                                                                  // 116
      class: "button primary select-service"                                                                           // 117
    }, Blaze.View("lookup:_", function() {                                                                             // 118
      return Spacebars.mustache(view.lookup("_"), "Use_uploaded_avatar");                                              // 119
    })), "\n\t\t\t\t\t\t\t\t" ];                                                                                       // 120
  }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({                                             // 121
    class: "avatar-suggestion-item border-component-color"                                                             // 122
  }, "\n\t\t\t\t\t\t\t", Spacebars.With(function() {                                                                   // 123
    return {                                                                                                           // 124
      service: Spacebars.call("url")                                                                                   // 125
    };                                                                                                                 // 126
  }, function() {                                                                                                      // 127
    return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 128
      class: "avatar question-mark icon-upload tertiary-background-color"                                              // 129
    }), "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                               // 130
      class: "action"                                                                                                  // 131
    }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                              // 132
      class: "input-line"                                                                                              // 133
    }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                          // 134
      type: "text",                                                                                                    // 135
      name: "avatarurl",                                                                                               // 136
      id: "avatarurl"                                                                                                  // 137
    }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                        // 138
      type: "button",                                                                                                  // 139
      class: "button primary select-service"                                                                           // 140
    }, Blaze.View("lookup:_", function() {                                                                             // 141
      return Spacebars.mustache(view.lookup("_"), "Use_url_for_avatar");                                               // 142
    })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                         // 143
  }), "\n\t\t\t\t\t\t"), "\n\n\t\t\t\t\t\t", Blaze.If(function() {                                                     // 144
    return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "ready"));                                         // 145
  }, function() {                                                                                                      // 146
    return [ "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                      // 147
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "gravatar"));                         // 148
    }, function() {                                                                                                    // 149
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 150
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 151
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "facebook"));                         // 152
    }, function() {                                                                                                    // 153
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 154
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 155
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "google"));                           // 156
    }, function() {                                                                                                    // 157
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 158
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 159
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "github"));                           // 160
    }, function() {                                                                                                    // 161
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 162
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 163
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "gitlab"));                           // 164
    }, function() {                                                                                                    // 165
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 166
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 167
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "linkedin"));                         // 168
    }, function() {                                                                                                    // 169
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 170
    }), "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 171
      return Spacebars.call(Spacebars.dot(view.lookup("suggestions"), "avatars", "twitter"));                          // 172
    }, function() {                                                                                                    // 173
      return Spacebars.include(view.lookupTemplate("avatarSuggestion"));                                               // 174
    }), "\n\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 175
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "facebook");                                         // 176
    }, function() {                                                                                                    // 177
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 178
        return "facebook";                                                                                             // 179
      }, function() {                                                                                                  // 180
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 181
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 182
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 183
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "google");                                           // 184
    }, function() {                                                                                                    // 185
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 186
        return "google";                                                                                               // 187
      }, function() {                                                                                                  // 188
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 189
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 190
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 191
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "github");                                           // 192
    }, function() {                                                                                                    // 193
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 194
        return "github";                                                                                               // 195
      }, function() {                                                                                                  // 196
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 197
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 198
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 199
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "gitlab");                                           // 200
    }, function() {                                                                                                    // 201
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 202
        return "gitlab";                                                                                               // 203
      }, function() {                                                                                                  // 204
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 205
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 206
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 207
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "linkedin");                                         // 208
    }, function() {                                                                                                    // 209
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 210
        return "linkedin";                                                                                             // 211
      }, function() {                                                                                                  // 212
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 213
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 214
    }), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                                      // 215
      return Spacebars.dataMustache(view.lookup("suggestAvatar"), "twitter");                                          // 216
    }, function() {                                                                                                    // 217
      return [ "\n\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 218
        return "twitter";                                                                                              // 219
      }, function() {                                                                                                  // 220
        return Spacebars.include(view.lookupTemplate("avatarSuggestionLogin"));                                        // 221
      }), "\n\t\t\t\t\t\t\t" ];                                                                                        // 222
    }), "\n\n\n\t\t\t\t\t\t" ];                                                                                        // 223
  }, function() {                                                                                                      // 224
    return [ "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                   // 225
      return Spacebars.mustache(view.lookup("_"), "Loading_suggestion");                                               // 226
    }), "\n\t\t\t\t\t\t" ];                                                                                            // 227
  }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\n\t\t\t\t", Blaze.If(function() {                                            // 228
    return Spacebars.call(Spacebars.dot(view.lookup("username"), "ready"));                                            // 229
  }, function() {                                                                                                      // 230
    return [ "\n\t\t\t\t\t", HTML.DIV({                                                                                // 231
      class: "submit"                                                                                                  // 232
    }, "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                                 // 233
      "data-loading-text": function() {                                                                                // 234
        return [ Spacebars.mustache(view.lookup("_"), "Please_wait"), "..." ];                                         // 235
      },                                                                                                               // 236
      class: "button primary login"                                                                                    // 237
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 238
      return Spacebars.mustache(view.lookup("_"), "Use_this_username");                                                // 239
    }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                             // 240
  }), "\n\t\t\t"), "\n\t\t"), "\n\t");                                                                                 // 241
}));                                                                                                                   // 242
                                                                                                                       // 243
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"avatar.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/avatar/avatar.coffee.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.avatar.helpers({                                                                                              // 1
  imageUrl: function () {                                                                                              // 2
    var ref, url, username;                                                                                            // 3
    username = this.username;                                                                                          // 3
                                                                                                                       //
    if (username == null && this.userId != null) {                                                                     // 4
      username = (ref = Meteor.users.findOne(this.userId)) != null ? ref.username : void 0;                            // 5
    }                                                                                                                  // 7
                                                                                                                       //
    if (username == null) {                                                                                            // 7
      return;                                                                                                          // 8
    }                                                                                                                  // 10
                                                                                                                       //
    Session.get("avatar_random_" + username);                                                                          // 10
    url = getAvatarUrlFromUsername(username);                                                                          // 12
    return "background-image:url(" + url + ");";                                                                       // 14
  }                                                                                                                    // 2
});                                                                                                                    // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"prompt.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/avatar/prompt.coffee.js                                                       //
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
Template.avatarPrompt.onCreated(function () {                                                                          // 2
  var self;                                                                                                            // 3
  self = this;                                                                                                         // 3
  self.suggestions = new ReactiveVar();                                                                                // 4
  self.upload = new ReactiveVar();                                                                                     // 5
                                                                                                                       //
  self.getSuggestions = function () {                                                                                  // 7
    self.suggestions.set(void 0);                                                                                      // 8
    return Meteor.call('getAvatarSuggestion', function (error, avatars) {                                              // 10
      return self.suggestions.set({                                                                                    // 11
        ready: true,                                                                                                   // 11
        avatars: avatars                                                                                               // 12
      });                                                                                                              // 11
    });                                                                                                                // 9
  };                                                                                                                   // 7
                                                                                                                       //
  return self.getSuggestions();                                                                                        // 17
});                                                                                                                    // 2
Template.avatarPrompt.onRendered(function () {                                                                         // 16
  return Tracker.afterFlush(function () {                                                                              // 21
    if (!RocketChat.settings.get("Accounts_AllowUserAvatarChange")) {                                                  // 19
      FlowRouter.go("home");                                                                                           // 19
    }                                                                                                                  // 24
                                                                                                                       //
    SideNav.setFlex("accountFlex");                                                                                    // 20
    return SideNav.openFlex();                                                                                         // 26
  });                                                                                                                  // 17
});                                                                                                                    // 16
Template.avatarPrompt.helpers({                                                                                        // 23
  suggestions: function () {                                                                                           // 24
    return Template.instance().suggestions.get();                                                                      // 25
  },                                                                                                                   // 24
  suggestAvatar: function (service) {                                                                                  // 27
    var suggestions;                                                                                                   // 28
    suggestions = Template.instance().suggestions.get();                                                               // 28
    return RocketChat.settings.get("Accounts_OAuth_" + _.capitalize(service)) && !suggestions.avatars[service];        // 29
  },                                                                                                                   // 24
  upload: function () {                                                                                                // 31
    return Template.instance().upload.get();                                                                           // 32
  },                                                                                                                   // 24
  username: function () {                                                                                              // 34
    var ref;                                                                                                           // 35
    return (ref = Meteor.user()) != null ? ref.username : void 0;                                                      // 35
  },                                                                                                                   // 24
  initialsUsername: function () {                                                                                      // 37
    var ref;                                                                                                           // 38
    return '@' + ((ref = Meteor.user()) != null ? ref.username : void 0);                                              // 38
  }                                                                                                                    // 24
});                                                                                                                    // 24
Template.avatarPrompt.events({                                                                                         // 40
  'click .select-service': function () {                                                                               // 41
    var tmpService;                                                                                                    // 42
                                                                                                                       //
    if (this.service === 'initials') {                                                                                 // 42
      return Meteor.call('resetAvatar', function (err) {                                                               // 56
        var ref;                                                                                                       // 44
                                                                                                                       //
        if ((err != null ? (ref = err.details) != null ? ref.timeToReset : void 0 : void 0) != null) {                 // 44
          return toastr.error(t('error-too-many-requests', {                                                           // 59
            seconds: parseInt(err.details.timeToReset / 1000)                                                          // 45
          }));                                                                                                         // 45
        } else {                                                                                                       // 44
          toastr.success(t('Avatar_changed_successfully'));                                                            // 47
          return RocketChat.callbacks.run('userAvatarSet', 'initials');                                                // 64
        }                                                                                                              // 65
      });                                                                                                              // 43
    } else if (this.service === 'url') {                                                                               // 42
      if (_.trim($('#avatarurl').val())) {                                                                             // 50
        return Meteor.call('setAvatarFromService', $('#avatarurl').val(), '', this.service, function (err) {           // 69
          var ref;                                                                                                     // 52
                                                                                                                       //
          if (err) {                                                                                                   // 52
            if (((ref = err.details) != null ? ref.timeToReset : void 0) != null) {                                    // 53
              return toastr.error(t('error-too-many-requests', {                                                       // 73
                seconds: parseInt(err.details.timeToReset / 1000)                                                      // 54
              }));                                                                                                     // 54
            } else {                                                                                                   // 53
              return toastr.error(t('Avatar_url_invalid_or_error'));                                                   // 77
            }                                                                                                          // 52
          } else {                                                                                                     // 52
            toastr.success(t('Avatar_changed_successfully'));                                                          // 58
            return RocketChat.callbacks.run('userAvatarSet', 'url');                                                   // 81
          }                                                                                                            // 82
        });                                                                                                            // 51
      } else {                                                                                                         // 50
        return toastr.error(t('Please_enter_value_for_url'));                                                          // 85
      }                                                                                                                // 49
    } else {                                                                                                           // 49
      tmpService = this.service;                                                                                       // 63
      return Meteor.call('setAvatarFromService', this.blob, this.contentType, this.service, function (err) {           // 89
        var ref;                                                                                                       // 65
                                                                                                                       //
        if ((err != null ? (ref = err.details) != null ? ref.timeToReset : void 0 : void 0) != null) {                 // 65
          return toastr.error(t('error-too-many-requests', {                                                           // 92
            seconds: parseInt(err.details.timeToReset / 1000)                                                          // 66
          }));                                                                                                         // 66
        } else {                                                                                                       // 65
          toastr.success(t('Avatar_changed_successfully'));                                                            // 68
          return RocketChat.callbacks.run('userAvatarSet', tmpService);                                                // 97
        }                                                                                                              // 98
      });                                                                                                              // 64
    }                                                                                                                  // 100
  },                                                                                                                   // 41
  'click .login-with-service': function (event, template) {                                                            // 71
    var loginWithService, serviceConfig;                                                                               // 72
    loginWithService = "loginWith" + _.capitalize(this);                                                               // 72
    serviceConfig = {};                                                                                                // 74
    return Meteor[loginWithService](serviceConfig, function (error) {                                                  // 106
      if ((error != null ? error.error : void 0) === 'github-no-public-email') {                                       // 77
        alert(t("github_no_public_email"));                                                                            // 78
        return;                                                                                                        // 79
      }                                                                                                                // 110
                                                                                                                       //
      console.log(error);                                                                                              // 81
                                                                                                                       //
      if (error != null) {                                                                                             // 82
        toastr.error(error.message);                                                                                   // 83
        return;                                                                                                        // 84
      }                                                                                                                // 115
                                                                                                                       //
      return template.getSuggestions();                                                                                // 116
    });                                                                                                                // 76
  },                                                                                                                   // 41
  'change .avatar-file-input': function (event, template) {                                                            // 88
    var blob, e, files, i, len, reader, ref;                                                                           // 89
    e = event.originalEvent || event;                                                                                  // 89
    files = e.target.files;                                                                                            // 90
                                                                                                                       //
    if (!files || files.length === 0) {                                                                                // 91
      files = ((ref = e.dataTransfer) != null ? ref.files : void 0) || [];                                             // 92
    }                                                                                                                  // 125
                                                                                                                       //
    for (i = 0, len = files.length; i < len; i++) {                                                                    // 94
      blob = files[i];                                                                                                 // 127
                                                                                                                       //
      if (!/image\/.+/.test(blob.type)) {                                                                              // 95
        return;                                                                                                        // 96
      }                                                                                                                // 130
                                                                                                                       //
      reader = new FileReader();                                                                                       // 98
      reader.readAsDataURL(blob);                                                                                      // 99
                                                                                                                       //
      reader.onloadend = function () {                                                                                 // 100
        template.upload.set({                                                                                          // 101
          service: 'upload',                                                                                           // 102
          contentType: blob.type,                                                                                      // 103
          blob: reader.result                                                                                          // 104
        });                                                                                                            // 102
        return RocketChat.callbacks.run('userAvatarSet', 'upload');                                                    // 139
      };                                                                                                               // 100
    }                                                                                                                  // 94
  }                                                                                                                    // 41
});                                                                                                                    // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"account.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/account.coffee.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.account.onRendered(function () {                                                                              // 1
  return Tracker.afterFlush(function () {                                                                              // 2
    SideNav.setFlex("accountFlex");                                                                                    // 3
    return SideNav.openFlex();                                                                                         // 4
  });                                                                                                                  // 2
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accountFlex.coffee.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/accountFlex.coffee.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.accountFlex.events({                                                                                          // 1
  'mouseenter header': function () {                                                                                   // 2
    return SideNav.overArrow();                                                                                        // 3
  },                                                                                                                   // 2
  'mouseleave header': function () {                                                                                   // 5
    return SideNav.leaveArrow();                                                                                       // 6
  },                                                                                                                   // 2
  'click header': function () {                                                                                        // 8
    return SideNav.closeFlex();                                                                                        // 9
  },                                                                                                                   // 2
  'click .cancel-settings': function () {                                                                              // 11
    return SideNav.closeFlex();                                                                                        // 12
  },                                                                                                                   // 2
  'click .account-link': function () {                                                                                 // 14
    return menu.close();                                                                                               // 15
  }                                                                                                                    // 2
});                                                                                                                    // 2
Template.accountFlex.helpers({                                                                                         // 17
  allowUserProfileChange: function () {                                                                                // 18
    return RocketChat.settings.get("Accounts_AllowUserProfileChange");                                                 // 19
  },                                                                                                                   // 18
  allowUserAvatarChange: function () {                                                                                 // 20
    return RocketChat.settings.get("Accounts_AllowUserAvatarChange");                                                  // 21
  }                                                                                                                    // 18
});                                                                                                                    // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accountPreferences.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/accountPreferences.coffee.js                                                  //
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
Template.accountPreferences.helpers({                                                                                  // 2
  audioAssets: function () {                                                                                           // 3
    return RocketChat.CustomSounds && RocketChat.CustomSounds.getList && RocketChat.CustomSounds.getList() || [];      // 4
  },                                                                                                                   // 3
  newMessageNotification: function () {                                                                                // 6
    var ref, ref1, ref2;                                                                                               // 7
    return ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.newMessageNotification : void 0 : void 0 : void 0) || 'chime';
  },                                                                                                                   // 3
  newRoomNotification: function () {                                                                                   // 9
    var ref, ref1, ref2;                                                                                               // 10
    return ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.newRoomNotification : void 0 : void 0 : void 0) || 'door';
  },                                                                                                                   // 3
  languages: function () {                                                                                             // 12
    var key, language, languages, result;                                                                              // 13
    languages = TAPi18n.getLanguages();                                                                                // 13
    result = [];                                                                                                       // 14
                                                                                                                       //
    for (key in meteorBabelHelpers.sanitizeForInObject(languages)) {                                                   // 15
      language = languages[key];                                                                                       // 20
      result.push(_.extend(language, {                                                                                 // 16
        key: key                                                                                                       // 16
      }));                                                                                                             // 16
    }                                                                                                                  // 15
                                                                                                                       //
    return _.sortBy(result, 'key');                                                                                    // 17
  },                                                                                                                   // 3
  userLanguage: function (key) {                                                                                       // 19
    var ref;                                                                                                           // 20
    return ((ref = Meteor.user().language || defaultUserLanguage()) != null ? ref.split('-').shift().toLowerCase() : void 0) === key;
  },                                                                                                                   // 3
  checked: function (property, value, defaultValue) {                                                                  // 22
    var currentValue, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8;                                             // 23
                                                                                                                       //
    if (((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2[property] : void 0 : void 0 : void 0) == null && defaultValue === true) {
      currentValue = value;                                                                                            // 24
    } else if (((ref3 = Meteor.user()) != null ? (ref4 = ref3.settings) != null ? (ref5 = ref4.preferences) != null ? ref5[property] : void 0 : void 0 : void 0) != null) {
      currentValue = !!((ref6 = Meteor.user()) != null ? (ref7 = ref6.settings) != null ? (ref8 = ref7.preferences) != null ? ref8[property] : void 0 : void 0 : void 0);
    }                                                                                                                  // 37
                                                                                                                       //
    return currentValue === value;                                                                                     // 28
  },                                                                                                                   // 3
  selected: function (property, value, defaultValue) {                                                                 // 30
    var ref, ref1, ref2, ref3, ref4, ref5;                                                                             // 31
                                                                                                                       //
    if (!((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2[property] : void 0 : void 0 : void 0)) {
      return defaultValue === true;                                                                                    // 32
    } else {                                                                                                           // 31
      return ((ref3 = Meteor.user()) != null ? (ref4 = ref3.settings) != null ? (ref5 = ref4.preferences) != null ? ref5[property] : void 0 : void 0 : void 0) === value;
    }                                                                                                                  // 46
  },                                                                                                                   // 3
  highlights: function () {                                                                                            // 36
    var ref, ref1, ref2, ref3;                                                                                         // 37
    return (ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? (ref3 = ref2['highlights']) != null ? ref3.join(', ') : void 0 : void 0 : void 0 : void 0;
  },                                                                                                                   // 3
  desktopNotificationEnabled: function () {                                                                            // 39
    return KonchatNotification.notificationStatus.get() === 'granted' || window.Notification && Notification.permission === "granted";
  },                                                                                                                   // 3
  desktopNotificationDisabled: function () {                                                                           // 42
    return KonchatNotification.notificationStatus.get() === 'denied' || window.Notification && Notification.permission === "denied";
  },                                                                                                                   // 3
  desktopNotificationDuration: function () {                                                                           // 45
    var ref, ref1, ref2;                                                                                               // 46
    return ((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.desktopNotificationDuration : void 0 : void 0 : void 0) - 0;
  },                                                                                                                   // 3
  showRoles: function () {                                                                                             // 48
    return RocketChat.settings.get('UI_DisplayRoles');                                                                 // 49
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.accountPreferences.onCreated(function () {                                                                    // 51
  var instance, ref, ref1, ref2, settingsTemplate;                                                                     // 52
  settingsTemplate = this.parentTemplate(3);                                                                           // 52
                                                                                                                       //
  if (settingsTemplate.child == null) {                                                                                // 70
    settingsTemplate.child = [];                                                                                       // 53
  }                                                                                                                    // 72
                                                                                                                       //
  settingsTemplate.child.push(this);                                                                                   // 54
  this.useEmojis = new ReactiveVar(((ref = Meteor.user()) != null ? (ref1 = ref.settings) != null ? (ref2 = ref1.preferences) != null ? ref2.useEmojis : void 0 : void 0 : void 0) == null || Meteor.user().settings.preferences.useEmojis);
  instance = this;                                                                                                     // 57
  this.autorun(function () {                                                                                           // 58
    if (instance.useEmojis.get()) {                                                                                    // 59
      return Tracker.afterFlush(function () {                                                                          // 78
        return $('#convertAsciiEmoji').show();                                                                         // 79
      });                                                                                                              // 60
    } else {                                                                                                           // 59
      return Tracker.afterFlush(function () {                                                                          // 82
        return $('#convertAsciiEmoji').hide();                                                                         // 83
      });                                                                                                              // 63
    }                                                                                                                  // 85
  });                                                                                                                  // 58
                                                                                                                       //
  this.clearForm = function () {                                                                                       // 66
    return this.find('#language').value = localStorage.getItem('userLanguage');                                        // 88
  };                                                                                                                   // 66
                                                                                                                       //
  return this.save = function () {                                                                                     // 90
    var data, reload, selectedLanguage;                                                                                // 70
    instance = this;                                                                                                   // 70
    data = {};                                                                                                         // 71
    reload = false;                                                                                                    // 73
    selectedLanguage = $('#language').val();                                                                           // 74
                                                                                                                       //
    if (localStorage.getItem('userLanguage') !== selectedLanguage) {                                                   // 76
      localStorage.setItem('userLanguage', selectedLanguage);                                                          // 77
      data.language = selectedLanguage;                                                                                // 78
      reload = true;                                                                                                   // 79
    }                                                                                                                  // 100
                                                                                                                       //
    data.newRoomNotification = $('select[name=newRoomNotification]').val();                                            // 81
    data.newMessageNotification = $('select[name=newMessageNotification]').val();                                      // 82
    data.useEmojis = $('input[name=useEmojis]:checked').val();                                                         // 83
    data.convertAsciiEmoji = $('input[name=convertAsciiEmoji]:checked').val();                                         // 84
    data.saveMobileBandwidth = $('input[name=saveMobileBandwidth]:checked').val();                                     // 85
    data.collapseMediaByDefault = $('input[name=collapseMediaByDefault]:checked').val();                               // 86
    data.viewMode = parseInt($('#viewMode').find('select').val());                                                     // 87
    data.hideUsernames = $('#hideUsernames').find('input:checked').val();                                              // 88
    data.hideRoles = $('#hideRoles').find('input:checked').val();                                                      // 89
    data.hideFlexTab = $('#hideFlexTab').find('input:checked').val();                                                  // 90
    data.hideAvatars = $('#hideAvatars').find('input:checked').val();                                                  // 91
    data.mergeChannels = $('#mergeChannels').find('input:checked').val();                                              // 92
    data.sendOnEnter = $('#sendOnEnter').find('select').val();                                                         // 93
    data.unreadRoomsMode = $('input[name=unreadRoomsMode]:checked').val();                                             // 94
    data.autoImageLoad = $('input[name=autoImageLoad]:checked').val();                                                 // 95
    data.emailNotificationMode = $('select[name=emailNotificationMode]').val();                                        // 96
    data.highlights = _.compact(_.map($('[name=highlights]').val().split(','), function (e) {                          // 97
      return _.trim(e);                                                                                                // 97
    }));                                                                                                               // 97
    data.desktopNotificationDuration = $('input[name=desktopNotificationDuration]').val();                             // 98
    data.unreadAlert = $('#unreadAlert').find('input:checked').val();                                                  // 99
    return Meteor.call('saveUserPreferences', data, function (error, results) {                                        // 122
      if (results) {                                                                                                   // 102
        toastr.success(t('Preferences_saved'));                                                                        // 103
        instance.clearForm();                                                                                          // 104
                                                                                                                       //
        if (reload) {                                                                                                  // 105
          setTimeout(function () {                                                                                     // 106
            return Meteor._reload.reload();                                                                            // 128
          }, 1000);                                                                                                    // 106
        }                                                                                                              // 102
      }                                                                                                                // 131
                                                                                                                       //
      if (error) {                                                                                                     // 110
        return handleError(error);                                                                                     // 133
      }                                                                                                                // 134
    });                                                                                                                // 101
  };                                                                                                                   // 69
});                                                                                                                    // 51
Template.accountPreferences.onRendered(function () {                                                                   // 113
  return Tracker.afterFlush(function () {                                                                              // 140
    SideNav.setFlex("accountFlex");                                                                                    // 115
    return SideNav.openFlex();                                                                                         // 142
  });                                                                                                                  // 114
});                                                                                                                    // 113
Template.accountPreferences.events({                                                                                   // 118
  'click .submit button': function (e, t) {                                                                            // 119
    return t.save();                                                                                                   // 148
  },                                                                                                                   // 119
  'change input[name=useEmojis]': function (e, t) {                                                                    // 122
    return t.useEmojis.set($(e.currentTarget).val() === '1');                                                          // 151
  },                                                                                                                   // 119
  'click .enable-notifications': function () {                                                                         // 125
    return KonchatNotification.getDesktopPermission();                                                                 // 154
  },                                                                                                                   // 119
  'click .test-notifications': function () {                                                                           // 128
    return KonchatNotification.notify({                                                                                // 157
      duration: $('input[name=desktopNotificationDuration]').val(),                                                    // 130
      payload: {                                                                                                       // 131
        sender: {                                                                                                      // 132
          username: 'rocket.cat'                                                                                       // 133
        }                                                                                                              // 133
      },                                                                                                               // 132
      title: TAPi18n.__('Desktop_Notification_Test'),                                                                  // 134
      text: TAPi18n.__('This_is_a_desktop_notification')                                                               // 135
    });                                                                                                                // 130
  },                                                                                                                   // 119
  'change .audio': function (e) {                                                                                      // 137
    var $audio, audio, ref;                                                                                            // 138
    e.preventDefault();                                                                                                // 138
    audio = $(e.currentTarget).val();                                                                                  // 139
                                                                                                                       //
    if (audio === 'none') {                                                                                            // 140
      return;                                                                                                          // 141
    }                                                                                                                  // 174
                                                                                                                       //
    if (audio) {                                                                                                       // 143
      $audio = $('audio#' + audio);                                                                                    // 144
      return $audio != null ? (ref = $audio[0]) != null ? ref.play() : void 0 : void 0;                                // 177
    }                                                                                                                  // 178
  }                                                                                                                    // 119
});                                                                                                                    // 119
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accountProfile.coffee.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-account/client/accountProfile.coffee.js                                                      //
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
Template.accountProfile.helpers({                                                                                      // 2
  allowDeleteOwnAccount: function () {                                                                                 // 3
    return RocketChat.settings.get('Accounts_AllowDeleteOwnAccount');                                                  // 4
  },                                                                                                                   // 3
  realname: function () {                                                                                              // 6
    return Meteor.user().name;                                                                                         // 7
  },                                                                                                                   // 3
  username: function () {                                                                                              // 9
    return Meteor.user().username;                                                                                     // 10
  },                                                                                                                   // 3
  email: function () {                                                                                                 // 12
    var ref, ref1;                                                                                                     // 13
    return (ref = Meteor.user().emails) != null ? (ref1 = ref[0]) != null ? ref1.address : void 0 : void 0;            // 13
  },                                                                                                                   // 3
  emailVerified: function () {                                                                                         // 15
    var ref, ref1;                                                                                                     // 16
    return (ref = Meteor.user().emails) != null ? (ref1 = ref[0]) != null ? ref1.verified : void 0 : void 0;           // 16
  },                                                                                                                   // 3
  allowUsernameChange: function () {                                                                                   // 18
    return RocketChat.settings.get("Accounts_AllowUsernameChange") && RocketChat.settings.get("LDAP_Enable") !== true;
  },                                                                                                                   // 3
  allowEmailChange: function () {                                                                                      // 21
    return RocketChat.settings.get("Accounts_AllowEmailChange");                                                       // 22
  },                                                                                                                   // 3
  usernameChangeDisabled: function () {                                                                                // 24
    return t('Username_Change_Disabled');                                                                              // 25
  },                                                                                                                   // 3
  allowPasswordChange: function () {                                                                                   // 27
    return RocketChat.settings.get("Accounts_AllowPasswordChange");                                                    // 28
  },                                                                                                                   // 3
  passwordChangeDisabled: function () {                                                                                // 30
    return t('Password_Change_Disabled');                                                                              // 31
  },                                                                                                                   // 3
  customFields: function () {                                                                                          // 33
    return Meteor.user().customFields;                                                                                 // 34
  }                                                                                                                    // 3
});                                                                                                                    // 3
Template.accountProfile.onCreated(function () {                                                                        // 36
  var settingsTemplate;                                                                                                // 37
  settingsTemplate = this.parentTemplate(3);                                                                           // 37
                                                                                                                       //
  if (settingsTemplate.child == null) {                                                                                // 44
    settingsTemplate.child = [];                                                                                       // 38
  }                                                                                                                    // 46
                                                                                                                       //
  settingsTemplate.child.push(this);                                                                                   // 39
                                                                                                                       //
  this.clearForm = function () {                                                                                       // 41
    return this.find('#password').value = '';                                                                          // 49
  };                                                                                                                   // 41
                                                                                                                       //
  this.changePassword = function (newPassword, callback) {                                                             // 44
    var instance;                                                                                                      // 45
    instance = this;                                                                                                   // 45
                                                                                                                       //
    if (!newPassword) {                                                                                                // 46
      return callback();                                                                                               // 47
    } else {                                                                                                           // 46
      if (!RocketChat.settings.get("Accounts_AllowPasswordChange")) {                                                  // 50
        toastr.remove();                                                                                               // 51
        toastr.error(t('Password_Change_Disabled'));                                                                   // 52
        instance.clearForm();                                                                                          // 53
      }                                                                                                                // 46
    }                                                                                                                  // 62
  };                                                                                                                   // 44
                                                                                                                       //
  return this.save = function (typedPassword) {                                                                        // 64
    var customFields, data, instance, ref, ref1;                                                                       // 57
    instance = this;                                                                                                   // 57
    data = {                                                                                                           // 59
      typedPassword: typedPassword                                                                                     // 59
    };                                                                                                                 // 59
                                                                                                                       //
    if (_.trim($('#password').val()) && RocketChat.settings.get("Accounts_AllowPasswordChange")) {                     // 61
      data.newPassword = $('#password').val();                                                                         // 62
    }                                                                                                                  // 72
                                                                                                                       //
    if (_.trim($('#realname').val())) {                                                                                // 64
      data.realname = _.trim($('#realname').val());                                                                    // 65
    }                                                                                                                  // 75
                                                                                                                       //
    if (_.trim($('#username').val()) !== Meteor.user().username) {                                                     // 67
      if (!RocketChat.settings.get("Accounts_AllowUsernameChange")) {                                                  // 68
        toastr.remove();                                                                                               // 69
        toastr.error(t('Username_Change_Disabled'));                                                                   // 70
        instance.clearForm();                                                                                          // 71
        return;                                                                                                        // 72
      } else {                                                                                                         // 68
        data.username = _.trim($('#username').val());                                                                  // 74
      }                                                                                                                // 67
    }                                                                                                                  // 85
                                                                                                                       //
    if (_.trim($('#email').val()) !== ((ref = Meteor.user().emails) != null ? (ref1 = ref[0]) != null ? ref1.address : void 0 : void 0)) {
      if (!RocketChat.settings.get("Accounts_AllowEmailChange")) {                                                     // 77
        toastr.remove();                                                                                               // 78
        toastr.error(t('Email_Change_Disabled'));                                                                      // 79
        instance.clearForm();                                                                                          // 80
        return;                                                                                                        // 81
      } else {                                                                                                         // 77
        data.email = _.trim($('#email').val());                                                                        // 83
      }                                                                                                                // 76
    }                                                                                                                  // 95
                                                                                                                       //
    customFields = {};                                                                                                 // 85
    $('[data-customfield=true]').each(function () {                                                                    // 86
      return customFields[this.name] = $(this).val() || '';                                                            // 98
    });                                                                                                                // 86
    return Meteor.call('saveUserProfile', data, customFields, function (error, results) {                              // 100
      if (results) {                                                                                                   // 90
        toastr.remove();                                                                                               // 91
        toastr.success(t('Profile_saved_successfully'));                                                               // 92
        swal.close();                                                                                                  // 93
        instance.clearForm();                                                                                          // 94
      }                                                                                                                // 106
                                                                                                                       //
      if (error) {                                                                                                     // 96
        toastr.remove();                                                                                               // 97
        return handleError(error);                                                                                     // 109
      }                                                                                                                // 110
    });                                                                                                                // 89
  };                                                                                                                   // 56
});                                                                                                                    // 36
Template.accountProfile.onRendered(function () {                                                                       // 100
  return Tracker.afterFlush(function () {                                                                              // 116
    if (!RocketChat.settings.get("Accounts_AllowUserProfileChange")) {                                                 // 103
      FlowRouter.go("home");                                                                                           // 103
    }                                                                                                                  // 119
                                                                                                                       //
    SideNav.setFlex("accountFlex");                                                                                    // 104
    return SideNav.openFlex();                                                                                         // 121
  });                                                                                                                  // 101
});                                                                                                                    // 100
Template.accountProfile.events({                                                                                       // 107
  'click .submit button': function (e, instance) {                                                                     // 108
    var ref, ref1, ref2, ref3, reqPass, user;                                                                          // 109
    user = Meteor.user();                                                                                              // 109
    reqPass = (_.trim($('#email').val()) !== (user != null ? (ref = user.emails) != null ? (ref1 = ref[0]) != null ? ref1.address : void 0 : void 0 : void 0) || _.trim($('#password').val())) && s.trim(user != null ? (ref2 = user.services) != null ? (ref3 = ref2.password) != null ? ref3.bcrypt : void 0 : void 0 : void 0);
                                                                                                                       //
    if (!reqPass) {                                                                                                    // 111
      return instance.save();                                                                                          // 112
    }                                                                                                                  // 132
                                                                                                                       //
    return swal({                                                                                                      // 133
      title: t("Please_enter_your_password"),                                                                          // 115
      text: t("For_your_security_you_must_enter_your_current_password_to_continue"),                                   // 116
      type: "input",                                                                                                   // 117
      inputType: "password",                                                                                           // 118
      showCancelButton: true,                                                                                          // 119
      closeOnConfirm: false,                                                                                           // 120
      confirmButtonText: t('Save'),                                                                                    // 121
      cancelButtonText: t('Cancel')                                                                                    // 122
    }, function (_this) {                                                                                              // 115
      return function (typedPassword) {                                                                                // 143
        if (typedPassword) {                                                                                           // 125
          toastr.remove();                                                                                             // 126
          toastr.warning(t("Please_wait_while_your_profile_is_being_saved"));                                          // 127
          return instance.save(SHA256(typedPassword));                                                                 // 147
        } else {                                                                                                       // 125
          swal.showInputError(t("You_need_to_type_in_your_password_in_order_to_do_this"));                             // 130
          return false;                                                                                                // 131
        }                                                                                                              // 151
      };                                                                                                               // 124
    }(this));                                                                                                          // 124
  },                                                                                                                   // 108
  'click .logoutOthers button': function (event, templateInstance) {                                                   // 132
    return Meteor.logoutOtherClients(function (error) {                                                                // 156
      if (error) {                                                                                                     // 134
        toastr.remove();                                                                                               // 135
        return handleError(error);                                                                                     // 159
      } else {                                                                                                         // 134
        toastr.remove();                                                                                               // 138
        return toastr.success(t('Logged_out_of_other_clients_successfully'));                                          // 162
      }                                                                                                                // 163
    });                                                                                                                // 133
  },                                                                                                                   // 108
  'click .delete-account button': function (e) {                                                                       // 140
    var ref, ref1, ref2;                                                                                               // 141
    e.preventDefault();                                                                                                // 141
                                                                                                                       //
    if (s.trim((ref = Meteor.user()) != null ? (ref1 = ref.services) != null ? (ref2 = ref1.password) != null ? ref2.bcrypt : void 0 : void 0 : void 0)) {
      return swal({                                                                                                    // 170
        title: t("Are_you_sure_you_want_to_delete_your_account"),                                                      // 144
        text: t("If_you_are_sure_type_in_your_password"),                                                              // 145
        type: "input",                                                                                                 // 146
        inputType: "password",                                                                                         // 147
        showCancelButton: true,                                                                                        // 148
        closeOnConfirm: false,                                                                                         // 149
        confirmButtonText: t('Delete'),                                                                                // 150
        cancelButtonText: t('Cancel')                                                                                  // 151
      }, function (_this) {                                                                                            // 144
        return function (typedPassword) {                                                                              // 180
          if (typedPassword) {                                                                                         // 154
            toastr.remove();                                                                                           // 155
            toastr.warning(t("Please_wait_while_your_account_is_being_deleted"));                                      // 156
            return Meteor.call('deleteUserOwnAccount', SHA256(typedPassword), function (error, results) {              // 184
              if (error) {                                                                                             // 158
                toastr.remove();                                                                                       // 159
                return swal.showInputError(t("Your_password_is_wrong"));                                               // 187
              } else {                                                                                                 // 158
                return swal.close();                                                                                   // 189
              }                                                                                                        // 190
            });                                                                                                        // 157
          } else {                                                                                                     // 154
            swal.showInputError(t("You_need_to_type_in_your_password_in_order_to_do_this"));                           // 164
            return false;                                                                                              // 165
          }                                                                                                            // 195
        };                                                                                                             // 153
      }(this));                                                                                                        // 153
    } else {                                                                                                           // 142
      return swal({                                                                                                    // 199
        title: t("Are_you_sure_you_want_to_delete_your_account"),                                                      // 168
        text: t("If_you_are_sure_type_in_your_username"),                                                              // 169
        type: "input",                                                                                                 // 170
        showCancelButton: true,                                                                                        // 171
        closeOnConfirm: false,                                                                                         // 172
        confirmButtonText: t('Delete'),                                                                                // 173
        cancelButtonText: t('Cancel')                                                                                  // 174
      }, function (_this) {                                                                                            // 168
        return function (deleteConfirmation) {                                                                         // 208
          var ref3;                                                                                                    // 177
                                                                                                                       //
          if (deleteConfirmation === ((ref3 = Meteor.user()) != null ? ref3.username : void 0)) {                      // 177
            toastr.remove();                                                                                           // 178
            toastr.warning(t("Please_wait_while_your_account_is_being_deleted"));                                      // 179
            return Meteor.call('deleteUserOwnAccount', deleteConfirmation, function (error, results) {                 // 213
              if (error) {                                                                                             // 181
                toastr.remove();                                                                                       // 182
                return swal.showInputError(t("Your_password_is_wrong"));                                               // 216
              } else {                                                                                                 // 181
                return swal.close();                                                                                   // 218
              }                                                                                                        // 219
            });                                                                                                        // 180
          } else {                                                                                                     // 177
            swal.showInputError(t("You_need_to_type_in_your_username_in_order_to_do_this"));                           // 187
            return false;                                                                                              // 188
          }                                                                                                            // 224
        };                                                                                                             // 176
      }(this));                                                                                                        // 176
    }                                                                                                                  // 227
  },                                                                                                                   // 108
  'click #resend-verification-email': function (e) {                                                                   // 190
    var ref, ref1;                                                                                                     // 191
    e.preventDefault();                                                                                                // 191
    e.currentTarget.innerHTML = e.currentTarget.innerHTML + ' ...';                                                    // 193
    e.currentTarget.disabled = true;                                                                                   // 194
    return Meteor.call('sendConfirmationEmail', (ref = Meteor.user().emails) != null ? (ref1 = ref[0]) != null ? ref1.address : void 0 : void 0, function (_this) {
      return function (error, results) {                                                                               // 235
        if (results) {                                                                                                 // 197
          toastr.success(t('Verification_email_sent'));                                                                // 198
        } else if (error) {                                                                                            // 197
          handleError(error);                                                                                          // 200
        }                                                                                                              // 240
                                                                                                                       //
        e.currentTarget.innerHTML = e.currentTarget.innerHTML.replace(' ...', '');                                     // 202
        return e.currentTarget.disabled = false;                                                                       // 242
      };                                                                                                               // 196
    }(this));                                                                                                          // 196
  }                                                                                                                    // 108
});                                                                                                                    // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:ui-account/client/template.account.js");
require("./node_modules/meteor/rocketchat:ui-account/client/template.accountFlex.js");
require("./node_modules/meteor/rocketchat:ui-account/client/template.accountPreferences.js");
require("./node_modules/meteor/rocketchat:ui-account/client/template.accountProfile.js");
require("./node_modules/meteor/rocketchat:ui-account/client/avatar/template.avatar.js");
require("./node_modules/meteor/rocketchat:ui-account/client/avatar/template.prompt.js");
require("./node_modules/meteor/rocketchat:ui-account/client/account.coffee.js");
require("./node_modules/meteor/rocketchat:ui-account/client/accountFlex.coffee.js");
require("./node_modules/meteor/rocketchat:ui-account/client/accountPreferences.coffee.js");
require("./node_modules/meteor/rocketchat:ui-account/client/accountProfile.coffee.js");
require("./node_modules/meteor/rocketchat:ui-account/client/avatar/avatar.coffee.js");
require("./node_modules/meteor/rocketchat:ui-account/client/avatar/prompt.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-account'] = {};

})();
