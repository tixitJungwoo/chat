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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-sidenav":{"client":{"template.accountBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.accountBox.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("accountBox");                                                                                    // 2
Template["accountBox"] = new Template("Template.accountBox", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "account-box",                                                                                              // 6
    "aria-label": function() {                                                                                         // 7
      return Spacebars.mustache(view.lookup("_"), "Account");                                                          // 8
    },                                                                                                                 // 9
    role: "region"                                                                                                     // 10
  }, "\n\t\t", Spacebars.With(function() {                                                                             // 11
    return Spacebars.call(view.lookup("myUserInfo"));                                                                  // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 14
      class: function() {                                                                                              // 15
        return [ "info status-", Spacebars.mustache(view.lookup("status")), " primary-background-color" ];             // 16
      }                                                                                                                // 17
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 18
      return Spacebars.call(view.lookup("username"));                                                                  // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 21
        class: "thumb",                                                                                                // 22
        "data-status": function() {                                                                                    // 23
          return Spacebars.mustache(view.lookup("visualStatus"));                                                      // 24
        }                                                                                                              // 25
      }, "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                            // 26
        return {                                                                                                       // 27
          username: Spacebars.call(view.lookup("username"))                                                            // 28
        };                                                                                                             // 29
      }, function() {                                                                                                  // 30
        return Spacebars.include(view.lookupTemplate("avatar"));                                                       // 31
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 32
        class: "data"                                                                                                  // 33
      }, "\n\t\t\t\t\t\t", HTML.H4({                                                                                   // 34
        "data-username": function() {                                                                                  // 35
          return Spacebars.mustache(view.lookup("username"));                                                          // 36
        }                                                                                                              // 37
      }, Blaze.View("lookup:fname", function() {                                                                       // 38
        return Spacebars.mustache(view.lookup("fname"));                                                               // 39
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                            // 40
    }), "\n\t\t\t"), "\n\t\t\t", HTML.NAV({                                                                            // 41
      class: "options primary-background-color animated-hidden"                                                        // 42
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 43
      class: "wrapper"                                                                                                 // 44
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 45
      "data-status": "online",                                                                                         // 46
      class: "status online"                                                                                           // 47
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 48
      return Spacebars.mustache(view.lookup("_"), "Online");                                                           // 49
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 50
      "data-status": "away",                                                                                           // 51
      class: "status away"                                                                                             // 52
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 53
      return Spacebars.mustache(view.lookup("_"), "Away", Spacebars.kw({                                               // 54
        context: "male"                                                                                                // 55
      }));                                                                                                             // 56
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 57
      "data-status": "busy",                                                                                           // 58
      class: "status busy"                                                                                             // 59
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 60
      return Spacebars.mustache(view.lookup("_"), "Busy", Spacebars.kw({                                               // 61
        context: "male"                                                                                                // 62
      }));                                                                                                             // 63
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 64
      "data-status": "offline",                                                                                        // 65
      class: "status offline"                                                                                          // 66
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 67
      return Spacebars.mustache(view.lookup("_"), "Invisible");                                                        // 68
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 69
      id: "account",                                                                                                   // 70
      class: "account-link"                                                                                            // 71
    }, HTML.I({                                                                                                        // 72
      class: "icon-sliders"                                                                                            // 73
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 74
      return Spacebars.mustache(view.lookup("_"), "My_Account");                                                       // 75
    }))), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                      // 76
      return Spacebars.call(view.lookup("registeredMenus"));                                                           // 77
    }, function() {                                                                                                    // 78
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 79
        class: "account-box-item"                                                                                      // 80
      }, HTML.I({                                                                                                      // 81
        class: function() {                                                                                            // 82
          return Spacebars.mustache(view.lookup("icon"));                                                              // 83
        }                                                                                                              // 84
      }), HTML.SPAN(Blaze.View("lookup:name", function() {                                                             // 85
        return Spacebars.mustache(view.lookup("name"));                                                                // 86
      }))), "\n\t\t\t\t\t" ];                                                                                          // 87
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 88
      return Spacebars.call(view.lookup("showAdminOption"));                                                           // 89
    }, function() {                                                                                                    // 90
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 91
        id: "admin",                                                                                                   // 92
        class: "account-link"                                                                                          // 93
      }, HTML.I({                                                                                                      // 94
        class: "icon-wrench"                                                                                           // 95
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 96
        return Spacebars.mustache(view.lookup("_"), "Administration");                                                 // 97
      }))), "\n\t\t\t\t\t" ];                                                                                          // 98
    }), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 99
      id: "logout"                                                                                                     // 100
    }, HTML.I({                                                                                                        // 101
      class: "icon-logout"                                                                                             // 102
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 103
      return Spacebars.mustache(view.lookup("_"), "Logout");                                                           // 104
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                      // 105
  }), "\n\t");                                                                                                         // 106
}));                                                                                                                   // 107
                                                                                                                       // 108
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.combined.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.combined.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("combined");                                                                                      // 2
Template["combined"] = new Template("Template.combined", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H3({                                                                                                   // 5
    class: function() {                                                                                                // 6
      return [ "add-room ", Spacebars.mustache(view.lookup("isActive")) ];                                             // 7
    }                                                                                                                  // 8
  }, "\n\t\t", Blaze.View("lookup:_", function() {                                                                     // 9
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t"), "\n\t", HTML.UL("\n\t\t", Blaze.Each(function() {                                                 // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t" ];                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t", HTML.P({                                                                                      // 20
      class: "empty"                                                                                                   // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "No_channels_yet");                                                  // 23
    })), "\n\t\t" ];                                                                                                   // 24
  }), "\n\t"), "\n\t", HTML.BUTTON({                                                                                   // 25
    class: "more more-channels background-transparent-darker-hover"                                                    // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "More_channels");                                                      // 28
  }), "...") ];                                                                                                        // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.chatRoomItem.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.chatRoomItem.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("chatRoomItem");                                                                                  // 2
Template["chatRoomItem"] = new Template("Template.chatRoomItem", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return HTML.LI({                                                                                                     // 5
    class: function() {                                                                                                // 6
      return [ "link-room-", Spacebars.mustache(view.lookup("rid")), " background-transparent-darker-hover ", Spacebars.mustache(view.lookup("active")), " ", Blaze.If(function() {
        return Spacebars.call(view.lookup("unread"));                                                                  // 8
      }, function() {                                                                                                  // 9
        return "has-unread";                                                                                           // 10
      }), " ", Blaze.If(function() {                                                                                   // 11
        return Spacebars.call(view.lookup("alert"));                                                                   // 12
      }, function() {                                                                                                  // 13
        return "has-alert";                                                                                            // 14
      }) ];                                                                                                            // 15
    }                                                                                                                  // 16
  }, "\n\t\t", HTML.A({                                                                                                // 17
    class: "open-room",                                                                                                // 18
    href: function() {                                                                                                 // 19
      return Spacebars.mustache(view.lookup("route"));                                                                 // 20
    },                                                                                                                 // 21
    title: function() {                                                                                                // 22
      return Spacebars.mustache(view.lookup("name"));                                                                  // 23
    }                                                                                                                  // 24
  }, "\n\t\t\t", Blaze.If(function() {                                                                                 // 25
    return Spacebars.call(view.lookup("unread"));                                                                      // 26
  }, function() {                                                                                                      // 27
    return [ "\n\t\t\t\t", HTML.SPAN({                                                                                 // 28
      class: "unread"                                                                                                  // 29
    }, Blaze.View("lookup:unread", function() {                                                                        // 30
      return Spacebars.mustache(view.lookup("unread"));                                                                // 31
    })), "\n\t\t\t" ];                                                                                                 // 32
  }), "\n\t\t\t", HTML.I({                                                                                             // 33
    class: function() {                                                                                                // 34
      return [ Spacebars.mustache(view.lookup("roomIcon")), " ", Spacebars.mustache(view.lookup("userStatus")) ];      // 35
    },                                                                                                                 // 36
    "aria-label": ""                                                                                                   // 37
  }), "\n\t\t\t", HTML.SPAN({                                                                                          // 38
    class: function() {                                                                                                // 39
      return [ "name ", Spacebars.mustache(view.lookup("archived")) ];                                                 // 40
    }                                                                                                                  // 41
  }, Blaze.View("lookup:name", function() {                                                                            // 42
    return Spacebars.mustache(view.lookup("name"));                                                                    // 43
  })), "\n\t\t\t", Blaze.If(function() {                                                                               // 44
    return Spacebars.dataMustache(view.lookup("$not"), view.lookup("unread"));                                         // 45
  }, function() {                                                                                                      // 46
    return [ "\n\t\t\t\t", HTML.SPAN({                                                                                 // 47
      class: "opt"                                                                                                     // 48
    }, "\n\t\t\t\t\t", HTML.I({                                                                                        // 49
      class: "icon-eye-off hide-room",                                                                                 // 50
      title: function() {                                                                                              // 51
        return Spacebars.mustache(view.lookup("_"), "Hide_room");                                                      // 52
      },                                                                                                               // 53
      "aria-label": function() {                                                                                       // 54
        return Spacebars.mustache(view.lookup("_"), "Hide_room");                                                      // 55
      }                                                                                                                // 56
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                          // 57
      return Spacebars.call(view.lookup("canLeave"));                                                                  // 58
    }, function() {                                                                                                    // 59
      return [ "\n\t\t\t\t\t\t", HTML.I({                                                                              // 60
        class: "icon-logout leave-room",                                                                               // 61
        title: function() {                                                                                            // 62
          return Spacebars.mustache(view.lookup("_"), "Leave_room");                                                   // 63
        },                                                                                                             // 64
        "aria-label": function() {                                                                                     // 65
          return Spacebars.mustache(view.lookup("_"), "Leave_room");                                                   // 66
        }                                                                                                              // 67
      }), "\n\t\t\t\t\t" ];                                                                                            // 68
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 69
  }), "\n\t\t"), "\n\t");                                                                                              // 70
}));                                                                                                                   // 71
                                                                                                                       // 72
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.channels.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.channels.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("channels");                                                                                      // 2
Template["channels"] = new Template("Template.channels", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H3({                                                                                                   // 5
    class: function() {                                                                                                // 6
      return [ "add-room background-transparent-darker-hover ", Spacebars.mustache(view.lookup("isActive")) ];         // 7
    }                                                                                                                  // 8
  }, "\n\t\t", Blaze.View("lookup:_", function() {                                                                     // 9
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t"), "\n\t", HTML.UL("\n\t\t", Blaze.Each(function() {                                                 // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t" ];                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t", HTML.P({                                                                                      // 20
      class: "empty"                                                                                                   // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "No_channels_yet");                                                  // 23
    })), "\n\t\t" ];                                                                                                   // 24
  }), "\n\t"), "\n\t", HTML.BUTTON({                                                                                   // 25
    class: "more more-channels background-transparent-darker-hover"                                                    // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "More_channels");                                                      // 28
  }), "...") ];                                                                                                        // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.channelsAnonymous.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.channelsAnonymous.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("channelsAnonymous");                                                                             // 2
Template["channelsAnonymous"] = new Template("Template.channelsAnonymous", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H3({                                                                                                   // 5
    class: function() {                                                                                                // 6
      return [ "add-room background-transparent-darker-hover ", Spacebars.mustache(view.lookup("isActive")) ];         // 7
    }                                                                                                                  // 8
  }, "\n\t\t", Blaze.View("lookup:_", function() {                                                                     // 9
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t"), "\n\t", HTML.UL("\n\t\t", Blaze.Each(function() {                                                 // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t" ];                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t", HTML.P({                                                                                      // 20
      class: "empty"                                                                                                   // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "No_channels_yet");                                                  // 23
    })), "\n\t\t" ];                                                                                                   // 24
  }), "\n\t"), "\n\t", HTML.BUTTON({                                                                                   // 25
    class: "more more-channels background-transparent-darker-hover"                                                    // 26
  }, Blaze.View("lookup:_", function() {                                                                               // 27
    return Spacebars.mustache(view.lookup("_"), "More_channels");                                                      // 28
  }), "...") ];                                                                                                        // 29
}));                                                                                                                   // 30
                                                                                                                       // 31
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.createCombinedFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.createCombinedFlex.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("createCombinedFlex");                                                                            // 2
Template["createCombinedFlex"] = new Template("Template.createCombinedFlex", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    class: "primary-background-color"                                                                                  // 6
  }, "\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                        // 7
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 8
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 9
    class: "content primary-background-color"                                                                          // 10
  }, "\n\t\t", HTML.DIV({                                                                                              // 11
    class: "wrapper"                                                                                                   // 12
  }, "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                                           // 13
    return Spacebars.mustache(view.lookup("_"), "Create_new");                                                         // 14
  })), "\n\t\t\t", HTML.DIV({                                                                                          // 15
    class: "input-line no-icon"                                                                                        // 16
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 17
    for: "channel-name"                                                                                                // 18
  }, Blaze.View("lookup:_", function() {                                                                               // 19
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 20
  })), "\n\t\t\t\t", HTML.INPUT({                                                                                      // 21
    type: "text",                                                                                                      // 22
    id: "channel-name",                                                                                                // 23
    class: "required",                                                                                                 // 24
    dir: "auto",                                                                                                       // 25
    placeholder: function() {                                                                                          // 26
      return Spacebars.mustache(view.lookup("_"), "Enter_name_here");                                                  // 27
    }                                                                                                                  // 28
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 29
    class: "input-line toggle"                                                                                         // 30
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 31
    for: "channel-type"                                                                                                // 32
  }, Blaze.View("lookup:_", function() {                                                                               // 33
    return Spacebars.mustache(view.lookup("_"), "Private");                                                            // 34
  })), "\n\t\t\t\t", HTML.DIV({                                                                                        // 35
    class: "input checkbox toggle"                                                                                     // 36
  }, "\n\t\t\t\t\t", HTML.INPUT(HTML.Attrs({                                                                           // 37
    type: "checkbox",                                                                                                  // 38
    id: "channel-type"                                                                                                 // 39
  }, function() {                                                                                                      // 40
    return Spacebars.attrMustache(view.lookup("privateSwitchDisabled"));                                               // 41
  }, function() {                                                                                                      // 42
    return Spacebars.attrMustache(view.lookup("privateSwitchChecked"));                                                // 43
  })), "\n\t\t\t\t\t", HTML.Raw('<label class="color-tertiary-font-color" for="channel-type"></label>'), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "input-line toggle"                                                                                         // 45
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 46
    for: "channel-ro"                                                                                                  // 47
  }, Blaze.View("lookup:_", function() {                                                                               // 48
    return Spacebars.mustache(view.lookup("_"), "Read_only_channel");                                                  // 49
  })), "\n\t\t\t\t", HTML.Raw('<div class="input checkbox toggle">\n\t\t\t\t\t<input type="checkbox" id="channel-ro">\n\t\t\t\t\t<label class="color-tertiary-font-color" for="channel-ro"></label>\n\t\t\t\t</div>'), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({
    class: "input-line no-icon"                                                                                        // 51
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 52
    class: "color-tertiary-font-color",                                                                                // 53
    for: "channel-members"                                                                                             // 54
  }, Blaze.View("lookup:_", function() {                                                                               // 55
    return Spacebars.mustache(view.lookup("_"), "Select_users");                                                       // 56
  })), "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                                  // 57
    return {                                                                                                           // 58
      settings: Spacebars.call(view.lookup("autocompleteSettings")),                                                   // 59
      id: Spacebars.call("channel-members"),                                                                           // 60
      class: Spacebars.call("search"),                                                                                 // 61
      placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Search_by_username")),                     // 62
      autocomplete: Spacebars.call("off")                                                                              // 63
    };                                                                                                                 // 64
  }, function() {                                                                                                      // 65
    return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                                // 66
  }), "\n\t\t\t\t", HTML.UL({                                                                                          // 67
    class: "selected-users"                                                                                            // 68
  }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                           // 69
    return Spacebars.call(view.lookup("selectedUsers"));                                                               // 70
  }, function() {                                                                                                      // 71
    return [ "\n\t\t\t\t\t\t", HTML.LI({                                                                               // 72
      class: "background-transparent-darker"                                                                           // 73
    }, Blaze.View("lookup:.", function() {                                                                             // 74
      return Spacebars.mustache(view.lookup("."));                                                                     // 75
    }), " ", HTML.I({                                                                                                  // 76
      class: "icon-cancel remove-room-member"                                                                          // 77
    })), "\n\t\t\t\t\t" ];                                                                                             // 78
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                    // 79
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "fields"));                                              // 80
  }, function() {                                                                                                      // 81
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 82
      class: "input-error"                                                                                             // 83
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 84
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 85
    })), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                       // 86
      return Spacebars.call(Spacebars.dot(view.lookup("error"), "fields"));                                            // 87
    }, function() {                                                                                                    // 88
      return [ "\n\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                            // 89
        return Spacebars.mustache(view.lookup("_"), "The_field_is_required", view.lookup("."));                        // 90
      })), "\n\t\t\t\t\t" ];                                                                                           // 91
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 92
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 93
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "invalid"));                                             // 94
  }, function() {                                                                                                      // 95
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 96
      class: "input-error"                                                                                             // 97
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 98
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 99
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 100
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Invalid_room_name", view.lookup("roomName")));    // 101
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 102
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 103
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "duplicate"));                                           // 104
  }, function() {                                                                                                      // 105
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 106
      class: "input-error"                                                                                             // 107
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 108
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 109
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 110
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Duplicate_channel_name", view.lookup("roomName")));
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 112
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 113
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "archivedduplicate"));                                   // 114
  }, function() {                                                                                                      // 115
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 116
      class: "input-error"                                                                                             // 117
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 118
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 119
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 120
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Duplicate_archived_channel_name", view.lookup("roomName")));
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 122
  }), "\n\t\t\t", HTML.DIV({                                                                                           // 123
    class: "input-submit"                                                                                              // 124
  }, "\n\t\t\t\t", HTML.BUTTON({                                                                                       // 125
    class: "button primary save-channel"                                                                               // 126
  }, Blaze.View("lookup:_", function() {                                                                               // 127
    return Spacebars.mustache(view.lookup("_"), "Create");                                                             // 128
  })), "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 129
    class: "button cancel-channel"                                                                                     // 130
  }, Blaze.View("lookup:_", function() {                                                                               // 131
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                             // 132
  })), "\n\t\t\t"), "\n\t\t"), "\n\t") ];                                                                              // 133
}));                                                                                                                   // 134
                                                                                                                       // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.directMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.directMessages.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("directMessages");                                                                                // 2
Template["directMessages"] = new Template("Template.directMessages", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H3({                                                                                                   // 5
    class: function() {                                                                                                // 6
      return [ "add-room ", Spacebars.mustache(view.lookup("isActive")) ];                                             // 7
    }                                                                                                                  // 8
  }, "\n\t\t", Blaze.View("lookup:_", function() {                                                                     // 9
    return Spacebars.mustache(view.lookup("_"), "Direct_Messages");                                                    // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t"), "\n\t", HTML.UL("\n\t\t", Blaze.Each(function() {                                                 // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t" ];                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t", HTML.P({                                                                                      // 20
      class: "empty"                                                                                                   // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "No_direct_messages_yet");                                           // 23
    })), "\n\t\t" ];                                                                                                   // 24
  }), "\n\t") ];                                                                                                       // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.listChannelsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.listChannelsFlex.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("listChannelsFlex");                                                                              // 2
Template["listChannelsFlex"] = new Template("Template.listChannelsFlex", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    class: "primary-background-color"                                                                                  // 6
  }, "\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                        // 7
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 8
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 9
    class: "content primary-background-color"                                                                          // 10
  }, "\n\t\t", HTML.DIV({                                                                                              // 11
    class: "wrapper"                                                                                                   // 12
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 13
    class: "flex-control"                                                                                              // 14
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 15
    class: "search"                                                                                                    // 16
  }, "\n\t\t\t\t\t", HTML.FORM({                                                                                       // 17
    class: "search-form",                                                                                              // 18
    role: "form"                                                                                                       // 19
  }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                      // 20
    class: "input-line search"                                                                                         // 21
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 22
    class: "c-select",                                                                                                 // 23
    id: "show"                                                                                                         // 24
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 25
    value: "joined",                                                                                                   // 26
    selected: function() {                                                                                             // 27
      return Spacebars.mustache(view.lookup("showSelected"), "joined");                                                // 28
    },                                                                                                                 // 29
    class: "primary-background-color"                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "Joined");                                                             // 32
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 33
    value: "all",                                                                                                      // 34
    selected: function() {                                                                                             // 35
      return Spacebars.mustache(view.lookup("showSelected"), "all");                                                   // 36
    },                                                                                                                 // 37
    class: "primary-background-color"                                                                                  // 38
  }, Blaze.View("lookup:_", function() {                                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "All");                                                                // 40
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-comment secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 42
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 43
    class: "c-select",                                                                                                 // 44
    id: "sort-channels"                                                                                                // 45
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 46
    value: "name",                                                                                                     // 47
    selected: function() {                                                                                             // 48
      return Spacebars.mustache(view.lookup("sortChannelsSelected"), "name");                                          // 49
    },                                                                                                                 // 50
    class: "primary-background-color"                                                                                  // 51
  }, Blaze.View("lookup:_", function() {                                                                               // 52
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 53
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 54
    value: "msgs",                                                                                                     // 55
    selected: function() {                                                                                             // 56
      return Spacebars.mustache(view.lookup("sortChannelsSelected"), "msgs");                                          // 57
    },                                                                                                                 // 58
    class: "primary-background-color"                                                                                  // 59
  }, Blaze.View("lookup:_", function() {                                                                               // 60
    return Spacebars.mustache(view.lookup("_"), "Number_of_messages");                                                 // 61
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                          // 62
    class: "c-select",                                                                                                 // 63
    id: "sort-subscriptions",                                                                                          // 64
    style: "display: none"                                                                                             // 65
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 66
    value: "name",                                                                                                     // 67
    selected: function() {                                                                                             // 68
      return Spacebars.mustache(view.lookup("sortSubscriptionsSelected"), "name");                                     // 69
    },                                                                                                                 // 70
    class: "primary-background-color"                                                                                  // 71
  }, Blaze.View("lookup:_", function() {                                                                               // 72
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 73
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 74
    value: "ls",                                                                                                       // 75
    selected: function() {                                                                                             // 76
      return Spacebars.mustache(view.lookup("sortSubscriptionsSelected"), "ls");                                       // 77
    },                                                                                                                 // 78
    class: "primary-background-color"                                                                                  // 79
  }, Blaze.View("lookup:_", function() {                                                                               // 80
    return Spacebars.mustache(view.lookup("_"), "Last_seen");                                                          // 81
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-sort-alt-up secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 83
  }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                                  // 84
    type: "text",                                                                                                      // 85
    id: "channel-search",                                                                                              // 86
    class: "search",                                                                                                   // 87
    placeholder: function() {                                                                                          // 88
      return Spacebars.mustache(view.lookup("_"), "Search_Channels");                                                  // 89
    },                                                                                                                 // 90
    autocomplete: "off"                                                                                                // 91
  }), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-right-open-small secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Channels_list");                                                      // 93
  })), "\n\t\t\t", HTML.UL("\n\t\t\t\t", Blaze.Each(function() {                                                       // 94
    return Spacebars.call(view.lookup("channel"));                                                                     // 95
  }, function() {                                                                                                      // 96
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                        // 97
      href: function() {                                                                                               // 98
        return Spacebars.mustache(view.lookup("pathFor"), "channel", Spacebars.kw({                                    // 99
          name: view.lookup("name")                                                                                    // 100
        }));                                                                                                           // 101
      },                                                                                                               // 102
      class: "channel-link"                                                                                            // 103
    }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                    // 104
      class: "icon-hash"                                                                                               // 105
    }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                                     // 106
      return Spacebars.mustache(view.lookup("name"));                                                                  // 107
    }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                // 108
      class: "opt fixed"                                                                                               // 109
    }, "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                     // 110
      return Spacebars.call(view.lookup("member"));                                                                    // 111
    }, function() {                                                                                                    // 112
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 113
        class: "icon-eye",                                                                                             // 114
        title: function() {                                                                                            // 115
          return Spacebars.mustache(view.lookup("_"), "Open");                                                         // 116
        },                                                                                                             // 117
        "aria-label": function() {                                                                                     // 118
          return Spacebars.mustache(view.lookup("_"), "Open");                                                         // 119
        }                                                                                                              // 120
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 121
    }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 122
      return Spacebars.call(view.lookup("hidden"));                                                                    // 123
    }, function() {                                                                                                    // 124
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 125
        class: "icon-eye-off",                                                                                         // 126
        title: function() {                                                                                            // 127
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 128
        },                                                                                                             // 129
        "aria-label": function() {                                                                                     // 130
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 131
        }                                                                                                              // 132
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 133
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                       // 134
  }), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                   // 135
    return Spacebars.call(view.lookup("hasMore"));                                                                     // 136
  }, function() {                                                                                                      // 137
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 138
      class: "load-more"                                                                                               // 139
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t"), "\n\t\t\t" ];                 // 140
  }), "\n\t\t"), "\n\t") ];                                                                                            // 141
}));                                                                                                                   // 142
                                                                                                                       // 143
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.listCombinedFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.listCombinedFlex.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("listCombinedFlex");                                                                              // 2
Template["listCombinedFlex"] = new Template("Template.listCombinedFlex", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    class: "primary-background-color"                                                                                  // 6
  }, "\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                        // 7
    return Spacebars.mustache(view.lookup("_"), "Channels");                                                           // 8
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 9
    class: "content primary-background-color"                                                                          // 10
  }, "\n\t\t", HTML.DIV({                                                                                              // 11
    class: "wrapper"                                                                                                   // 12
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 13
    class: "flex-control"                                                                                              // 14
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 15
    class: "search"                                                                                                    // 16
  }, "\n\t\t\t\t\t", HTML.FORM({                                                                                       // 17
    class: "search-form",                                                                                              // 18
    role: "form"                                                                                                       // 19
  }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                      // 20
    class: "input-line search"                                                                                         // 21
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 22
    class: "c-select",                                                                                                 // 23
    id: "show"                                                                                                         // 24
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 25
    value: "joined",                                                                                                   // 26
    selected: function() {                                                                                             // 27
      return Spacebars.mustache(view.lookup("showSelected"), "joined");                                                // 28
    },                                                                                                                 // 29
    class: "primary-background-color"                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "Joined");                                                             // 32
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 33
    value: "all",                                                                                                      // 34
    selected: function() {                                                                                             // 35
      return Spacebars.mustache(view.lookup("showSelected"), "all");                                                   // 36
    },                                                                                                                 // 37
    class: "primary-background-color"                                                                                  // 38
  }, Blaze.View("lookup:_", function() {                                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "All");                                                                // 40
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-comment secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 42
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 43
    class: "c-select",                                                                                                 // 44
    id: "sort-channels"                                                                                                // 45
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 46
    value: "name",                                                                                                     // 47
    selected: function() {                                                                                             // 48
      return Spacebars.mustache(view.lookup("sortChannelsSelected"), "name");                                          // 49
    },                                                                                                                 // 50
    class: "primary-background-color"                                                                                  // 51
  }, Blaze.View("lookup:_", function() {                                                                               // 52
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 53
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 54
    value: "msgs",                                                                                                     // 55
    selected: function() {                                                                                             // 56
      return Spacebars.mustache(view.lookup("sortChannelsSelected"), "msgs");                                          // 57
    },                                                                                                                 // 58
    class: "primary-background-color"                                                                                  // 59
  }, Blaze.View("lookup:_", function() {                                                                               // 60
    return Spacebars.mustache(view.lookup("_"), "Number_of_messages");                                                 // 61
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                          // 62
    class: "c-select",                                                                                                 // 63
    id: "sort-subscriptions",                                                                                          // 64
    style: "display: none"                                                                                             // 65
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 66
    value: "name",                                                                                                     // 67
    selected: function() {                                                                                             // 68
      return Spacebars.mustache(view.lookup("sortSubscriptionsSelected"), "name");                                     // 69
    },                                                                                                                 // 70
    class: "primary-background-color"                                                                                  // 71
  }, Blaze.View("lookup:_", function() {                                                                               // 72
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 73
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 74
    value: "ls",                                                                                                       // 75
    selected: function() {                                                                                             // 76
      return Spacebars.mustache(view.lookup("sortSubscriptionsSelected"), "ls");                                       // 77
    },                                                                                                                 // 78
    class: "primary-background-color"                                                                                  // 79
  }, Blaze.View("lookup:_", function() {                                                                               // 80
    return Spacebars.mustache(view.lookup("_"), "Last_seen");                                                          // 81
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-sort-alt-up secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 83
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 84
    class: "c-select",                                                                                                 // 85
    id: "channel-type"                                                                                                 // 86
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 87
    value: "all",                                                                                                      // 88
    selected: function() {                                                                                             // 89
      return Spacebars.mustache(view.lookup("channelTypeSelected"), "all");                                            // 90
    },                                                                                                                 // 91
    class: "primary-background-color"                                                                                  // 92
  }, Blaze.View("lookup:_", function() {                                                                               // 93
    return Spacebars.mustache(view.lookup("_"), "All");                                                                // 94
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 95
    value: "public",                                                                                                   // 96
    selected: function() {                                                                                             // 97
      return Spacebars.mustache(view.lookup("channelTypeSelected"), "public");                                         // 98
    },                                                                                                                 // 99
    class: "primary-background-color"                                                                                  // 100
  }, Blaze.View("lookup:_", function() {                                                                               // 101
    return Spacebars.mustache(view.lookup("_"), "Public");                                                             // 102
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 103
    value: "private",                                                                                                  // 104
    selected: function() {                                                                                             // 105
      return Spacebars.mustache(view.lookup("channelTypeSelected"), "private");                                        // 106
    },                                                                                                                 // 107
    class: "primary-background-color"                                                                                  // 108
  }, Blaze.View("lookup:_", function() {                                                                               // 109
    return Spacebars.mustache(view.lookup("_"), "Private");                                                            // 110
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-lock secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 112
  }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                                  // 113
    type: "text",                                                                                                      // 114
    id: "channel-search",                                                                                              // 115
    class: "search",                                                                                                   // 116
    placeholder: function() {                                                                                          // 117
      return Spacebars.mustache(view.lookup("_"), "Search");                                                           // 118
    },                                                                                                                 // 119
    autocomplete: "off"                                                                                                // 120
  }), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-search secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "List_of_Channels");                                                   // 122
  })), "\n\t\t\t", HTML.UL("\n\t\t\t\t", Blaze.Each(function() {                                                       // 123
    return Spacebars.call(view.lookup("channel"));                                                                     // 124
  }, function() {                                                                                                      // 125
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                        // 126
      href: function() {                                                                                               // 127
        return Spacebars.mustache(view.lookup("pathFor"), view.lookup("url"), Spacebars.kw({                           // 128
          name: view.lookup("name")                                                                                    // 129
        }));                                                                                                           // 130
      },                                                                                                               // 131
      class: "channel-link"                                                                                            // 132
    }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                    // 133
      class: function() {                                                                                              // 134
        return Spacebars.mustache(view.lookup("roomIcon"));                                                            // 135
      }                                                                                                                // 136
    }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                                     // 137
      return Spacebars.mustache(view.lookup("name"));                                                                  // 138
    }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                // 139
      class: "opt fixed"                                                                                               // 140
    }, "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                     // 141
      return Spacebars.call(view.lookup("member"));                                                                    // 142
    }, function() {                                                                                                    // 143
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 144
        class: "icon-eye",                                                                                             // 145
        title: function() {                                                                                            // 146
          return Spacebars.mustache(view.lookup("_"), "Open");                                                         // 147
        },                                                                                                             // 148
        "aria-label": function() {                                                                                     // 149
          return Spacebars.mustache(view.lookup("_"), "Open");                                                         // 150
        }                                                                                                              // 151
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 152
    }), "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                    // 153
      return Spacebars.call(view.lookup("hidden"));                                                                    // 154
    }, function() {                                                                                                    // 155
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 156
        class: "icon-eye-off",                                                                                         // 157
        title: function() {                                                                                            // 158
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 159
        },                                                                                                             // 160
        "aria-label": function() {                                                                                     // 161
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 162
        }                                                                                                              // 163
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 164
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                       // 165
  }), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                   // 166
    return Spacebars.call(view.lookup("hasMore"));                                                                     // 167
  }, function() {                                                                                                      // 168
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 169
      class: "load-more"                                                                                               // 170
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t"), "\n\t\t\t" ];                 // 171
  }), "\n\t\t"), "\n\t") ];                                                                                            // 172
}));                                                                                                                   // 173
                                                                                                                       // 174
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.listPrivateGroupsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.listPrivateGroupsFlex.js                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("listPrivateGroupsFlex");                                                                         // 2
Template["listPrivateGroupsFlex"] = new Template("Template.listPrivateGroupsFlex", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    class: "primary-background-color"                                                                                  // 6
  }, "\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                        // 7
    return Spacebars.mustache(view.lookup("_"), "Private_Groups");                                                     // 8
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 9
    class: "content primary-background-color"                                                                          // 10
  }, "\n\t\t", HTML.DIV({                                                                                              // 11
    class: "wrapper"                                                                                                   // 12
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 13
    class: "flex-control"                                                                                              // 14
  }, "\n\t\t\t\t", HTML.DIV({                                                                                          // 15
    class: "search"                                                                                                    // 16
  }, "\n\t\t\t\t\t", HTML.FORM({                                                                                       // 17
    class: "search-form",                                                                                              // 18
    role: "form"                                                                                                       // 19
  }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                      // 20
    class: "input-line search"                                                                                         // 21
  }, "\n\t\t\t\t\t\t\t", HTML.SELECT({                                                                                 // 22
    class: "c-select",                                                                                                 // 23
    id: "sort"                                                                                                         // 24
  }, "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                               // 25
    value: "name",                                                                                                     // 26
    selected: function() {                                                                                             // 27
      return Spacebars.mustache(view.lookup("sortSelected"), "name");                                                  // 28
    },                                                                                                                 // 29
    class: "primary-background-color"                                                                                  // 30
  }, Blaze.View("lookup:_", function() {                                                                               // 31
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 32
  })), "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                             // 33
    value: "ls",                                                                                                       // 34
    selected: function() {                                                                                             // 35
      return Spacebars.mustache(view.lookup("sortSelected"), "ls");                                                    // 36
    },                                                                                                                 // 37
    class: "primary-background-color"                                                                                  // 38
  }, Blaze.View("lookup:_", function() {                                                                               // 39
    return Spacebars.mustache(view.lookup("_"), "Last_seen");                                                          // 40
  })), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-sort-alt-up secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.DIV({
    class: "input-line search"                                                                                         // 42
  }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                                  // 43
    type: "text",                                                                                                      // 44
    id: "channel-search",                                                                                              // 45
    class: "search",                                                                                                   // 46
    placeholder: function() {                                                                                          // 47
      return Spacebars.mustache(view.lookup("_"), "Search_Private_Groups");                                            // 48
    },                                                                                                                 // 49
    autocomplete: "off"                                                                                                // 50
  }), "\n\t\t\t\t\t\t\t", HTML.Raw('<i class="icon-right-open-small secondary-font-color"></i>'), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {
    return Spacebars.mustache(view.lookup("_"), "Private_Groups_list");                                                // 52
  })), "\n\t\t\t", HTML.UL("\n\t\t\t\t", Blaze.Each(function() {                                                       // 53
    return Spacebars.call(view.lookup("groups"));                                                                      // 54
  }, function() {                                                                                                      // 55
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", HTML.A({                                                        // 56
      href: function() {                                                                                               // 57
        return Spacebars.mustache(view.lookup("pathFor"), "group", Spacebars.kw({                                      // 58
          name: view.lookup("name")                                                                                    // 59
        }));                                                                                                           // 60
      },                                                                                                               // 61
      class: "channel-link"                                                                                            // 62
    }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                    // 63
      class: "icon-lock"                                                                                               // 64
    }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:name", function() {                                                     // 65
      return Spacebars.mustache(view.lookup("name"));                                                                  // 66
    }), "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                                // 67
      class: "opt fixed"                                                                                               // 68
    }, "\n\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                                     // 69
      return Spacebars.call(view.lookup("hidden"));                                                                    // 70
    }, function() {                                                                                                    // 71
      return [ "\n\t\t\t\t\t\t\t\t", HTML.I({                                                                          // 72
        class: "icon-eye-off",                                                                                         // 73
        title: function() {                                                                                            // 74
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 75
        },                                                                                                             // 76
        "aria-label": function() {                                                                                     // 77
          return Spacebars.mustache(view.lookup("_"), "Hidden");                                                       // 78
        }                                                                                                              // 79
      }), "\n\t\t\t\t\t\t\t\t" ];                                                                                      // 80
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                       // 81
  }), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                   // 82
    return Spacebars.call(view.lookup("hasMore"));                                                                     // 83
  }, function() {                                                                                                      // 84
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 85
      class: "load-more"                                                                                               // 86
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t"), "\n\t\t\t" ];                 // 87
  }), "\n\t\t"), "\n\t") ];                                                                                            // 88
}));                                                                                                                   // 89
                                                                                                                       // 90
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.privateGroups.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.privateGroups.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("privateGroups");                                                                                 // 2
Template["privateGroups"] = new Template("Template.privateGroups", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H3({                                                                                                   // 5
    class: function() {                                                                                                // 6
      return [ "add-room background-transparent-darker-hover ", Spacebars.mustache(view.lookup("isActive")) ];         // 7
    }                                                                                                                  // 8
  }, "\n\t\t", Blaze.View("lookup:_", function() {                                                                     // 9
    return Spacebars.mustache(view.lookup("_"), "Private_Groups");                                                     // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t"), "\n\t", HTML.UL("\n\t\t", Blaze.Each(function() {                                                 // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t" ];                           // 18
  }, function() {                                                                                                      // 19
    return [ "\n\t\t\t", HTML.P({                                                                                      // 20
      class: "empty"                                                                                                   // 21
    }, Blaze.View("lookup:_", function() {                                                                             // 22
      return Spacebars.mustache(view.lookup("_"), "No_groups_yet");                                                    // 23
    })), "\n\t\t" ];                                                                                                   // 24
  }), "\n\t"), "\n\t", Blaze.If(function() {                                                                           // 25
    return Spacebars.dataMustache(view.lookup("$gt"), view.lookup("total"), view.lookup("totalOpen"));                 // 26
  }, function() {                                                                                                      // 27
    return [ "\n\t\t", HTML.BUTTON({                                                                                   // 28
      class: "more more-groups background-transparent-darker-hover"                                                    // 29
    }, Blaze.View("lookup:_", function() {                                                                             // 30
      return Spacebars.mustache(view.lookup("_"), "More_groups");                                                      // 31
    }), "..."), "\n\t" ];                                                                                              // 32
  }) ];                                                                                                                // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.privateGroupsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.privateGroupsFlex.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("privateGroupsFlex");                                                                             // 2
Template["privateGroupsFlex"] = new Template("Template.privateGroupsFlex", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.HEADER({                                                                                               // 5
    class: "primary-background-color"                                                                                  // 6
  }, "\n\t\t", HTML.DIV("\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                        // 7
    return Spacebars.mustache(view.lookup("_"), "Private_Groups");                                                     // 8
  })), "\n\t\t"), "\n\t"), "\n\t", HTML.DIV({                                                                          // 9
    class: "content primary-background-color"                                                                          // 10
  }, "\n\t\t", HTML.DIV({                                                                                              // 11
    class: "wrapper"                                                                                                   // 12
  }, "\n\t\t\t", HTML.H4(Blaze.View("lookup:_", function() {                                                           // 13
    return Spacebars.mustache(view.lookup("_"), "Create_new");                                                         // 14
  })), "\n\t\t\t", HTML.DIV({                                                                                          // 15
    class: "input-line"                                                                                                // 16
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 17
    class: "color-tertiary-font-color",                                                                                // 18
    for: "pvt-group-name"                                                                                              // 19
  }, Blaze.View("lookup:_", function() {                                                                               // 20
    return Spacebars.mustache(view.lookup("_"), "Name");                                                               // 21
  })), "\n\t\t\t\t", HTML.INPUT({                                                                                      // 22
    type: "text",                                                                                                      // 23
    id: "pvt-group-name",                                                                                              // 24
    class: "required",                                                                                                 // 25
    dir: "auto",                                                                                                       // 26
    placeholder: function() {                                                                                          // 27
      return Spacebars.mustache(view.lookup("_"), "Enter_name_here");                                                  // 28
    }                                                                                                                  // 29
  }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                              // 30
    class: "input-line"                                                                                                // 31
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 32
    class: "color-tertiary-font-color",                                                                                // 33
    for: "channel-ro"                                                                                                  // 34
  }, Blaze.View("lookup:_", function() {                                                                               // 35
    return Spacebars.mustache(view.lookup("_"), "Read_only_group");                                                    // 36
  })), "\n\t\t\t\t", HTML.Raw('<input type="checkbox" id="channel-ro">'), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({          // 37
    class: "input-line"                                                                                                // 38
  }, "\n\t\t\t\t", HTML.LABEL({                                                                                        // 39
    class: "color-tertiary-font-color",                                                                                // 40
    for: "pvt-group-members"                                                                                           // 41
  }, Blaze.View("lookup:_", function() {                                                                               // 42
    return Spacebars.mustache(view.lookup("_"), "Select_users");                                                       // 43
  })), "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                                  // 44
    return {                                                                                                           // 45
      settings: Spacebars.call(view.lookup("autocompleteSettings")),                                                   // 46
      id: Spacebars.call("pvt-group-members"),                                                                         // 47
      class: Spacebars.call("search"),                                                                                 // 48
      placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Search_by_username")),                     // 49
      autocomplete: Spacebars.call("off")                                                                              // 50
    };                                                                                                                 // 51
  }, function() {                                                                                                      // 52
    return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                                // 53
  }), "\n\t\t\t\t", HTML.UL({                                                                                          // 54
    class: "selected-users"                                                                                            // 55
  }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                           // 56
    return Spacebars.call(view.lookup("selectedUsers"));                                                               // 57
  }, function() {                                                                                                      // 58
    return [ "\n\t\t\t\t\t\t", HTML.LI({                                                                               // 59
      class: "background-transparent-darker"                                                                           // 60
    }, Blaze.View("lookup:.", function() {                                                                             // 61
      return Spacebars.mustache(view.lookup("."));                                                                     // 62
    }), " ", HTML.I({                                                                                                  // 63
      class: "icon-cancel remove-room-member"                                                                          // 64
    })), "\n\t\t\t\t\t" ];                                                                                             // 65
  }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                    // 66
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "fields"));                                              // 67
  }, function() {                                                                                                      // 68
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 69
      class: "input-error error-color"                                                                                 // 70
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 71
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 72
    })), "\n\t\t\t\t\t", Blaze.Each(function() {                                                                       // 73
      return Spacebars.call(Spacebars.dot(view.lookup("error"), "fields"));                                            // 74
    }, function() {                                                                                                    // 75
      return [ "\n\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                            // 76
        return Spacebars.mustache(view.lookup("_"), "The_field_is_required", view.lookup("."));                        // 77
      })), "\n\t\t\t\t\t" ];                                                                                           // 78
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 79
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 80
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "invalid"));                                             // 81
  }, function() {                                                                                                      // 82
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 83
      class: "input-error error-color"                                                                                 // 84
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 85
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 86
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 87
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Invalid_room_name", view.lookup("groupName")));   // 88
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 89
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 90
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "duplicate"));                                           // 91
  }, function() {                                                                                                      // 92
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 93
      class: "input-error error-color"                                                                                 // 94
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 95
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 96
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 97
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Duplicate_private_group_name", view.lookup("groupName")));
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 99
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 100
    return Spacebars.call(Spacebars.dot(view.lookup("error"), "archivedduplicate"));                                   // 101
  }, function() {                                                                                                      // 102
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 103
      class: "input-error error-color"                                                                                 // 104
    }, "\n\t\t\t\t\t", HTML.STRONG(Blaze.View("lookup:_", function() {                                                 // 105
      return Spacebars.mustache(view.lookup("_"), "Oops!");                                                            // 106
    })), "\n\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 107
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Duplicate_archived_private_group_name", view.lookup("groupName")));
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 109
  }), "\n\t\t\t", HTML.DIV({                                                                                           // 110
    class: "input-submit"                                                                                              // 111
  }, "\n\t\t\t\t", HTML.BUTTON({                                                                                       // 112
    class: "button primary save-pvt-group"                                                                             // 113
  }, Blaze.View("lookup:_", function() {                                                                               // 114
    return Spacebars.mustache(view.lookup("_"), "Create");                                                             // 115
  })), "\n\t\t\t\t", HTML.BUTTON({                                                                                     // 116
    class: "button cancel-pvt-group"                                                                                   // 117
  }, Blaze.View("lookup:_", function() {                                                                               // 118
    return Spacebars.mustache(view.lookup("_"), "Cancel");                                                             // 119
  })), "\n\t\t\t"), "\n\t\t"), "\n\t") ];                                                                              // 120
}));                                                                                                                   // 121
                                                                                                                       // 122
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.sideNav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.sideNav.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("sideNav");                                                                                       // 2
Template["sideNav"] = new Template("Template.sideNav", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.ASIDE({                                                                                                  // 5
    class: "side-nav primary-background-color color-tertiary-font-color",                                              // 6
    role: "navigation"                                                                                                 // 7
  }, "\n\t\t", HTML.HEADER({                                                                                           // 8
    class: "header"                                                                                                    // 9
  }, "\n\t\t\t", Spacebars.include(view.lookupTemplate("accountBox")), "\n\t\t"), "\n\t\t", Spacebars.include(view.lookupTemplate("toolbar")), "\n\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 11
  }, function() {                                                                                                      // 12
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 13
      class: "unread-rooms background-primary-action-color color-primary-action-contrast top-unread-rooms hidden"      // 14
    }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                               // 15
      return Spacebars.mustache(view.lookup("_"), "More_unreads");                                                     // 16
    }), " ", HTML.I({                                                                                                  // 17
      class: "icon-up-big"                                                                                             // 18
    }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                            // 19
      class: "rooms-list",                                                                                             // 20
      "aria-label": function() {                                                                                       // 21
        return Spacebars.mustache(view.lookup("_"), "Channels");                                                       // 22
      },                                                                                                               // 23
      role: "region"                                                                                                   // 24
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 25
      class: "wrapper"                                                                                                 // 26
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("unreadRooms")), "\n\n\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("roomType"));                                                                  // 28
    }, function() {                                                                                                    // 29
      return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                 // 30
        return Spacebars.call(view.lookup("canShowRoomType"));                                                         // 31
      }, function() {                                                                                                  // 32
        return [ "\n\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 33
          return {                                                                                                     // 34
            template: Spacebars.call(view.lookup("templateName"))                                                      // 35
          };                                                                                                           // 36
        }, function() {                                                                                                // 37
          return Spacebars.include(function() {                                                                        // 38
            return Spacebars.call(Template.__dynamic);                                                                 // 39
          });                                                                                                          // 40
        }), "\n\t\t\t\t\t\t" ];                                                                                        // 41
      }), "\n\t\t\t\t\t" ];                                                                                            // 42
    }), "\n\n\t\t\t\t\t", Blaze.If(function() {                                                                        // 43
      return Spacebars.call(view.lookup("canViewHistory"));                                                            // 44
    }, function() {                                                                                                    // 45
      return [ "\n\t\t\t\t\t\t", HTML.H3({                                                                             // 46
        class: "history-div"                                                                                           // 47
      }, "\n\t\t\t\t\t\t\t", HTML.A({                                                                                  // 48
        href: function() {                                                                                             // 49
          return Spacebars.mustache(view.lookup("pathFor"), "privateHistory");                                         // 50
        }                                                                                                              // 51
      }, Blaze.View("lookup:_", function() {                                                                           // 52
        return Spacebars.mustache(view.lookup("_"), "History");                                                        // 53
      })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                        // 54
    }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                             // 55
      class: "unread-rooms background-primary-action-color color-primary-action-contrast bottom-unread-rooms hidden"   // 56
    }, "\n\t\t\t\t", Blaze.View("lookup:_", function() {                                                               // 57
      return Spacebars.mustache(view.lookup("_"), "More_unreads");                                                     // 58
    }), " ", HTML.I({                                                                                                  // 59
      class: "icon-down-big"                                                                                           // 60
    }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                            // 61
      class: "flex-nav primary-background-color animated-hidden"                                                       // 62
    }, "\n\t\t\t\t", HTML.SECTION("\n\t\t\t\t\t", Blaze._TemplateWith(function() {                                     // 63
      return {                                                                                                         // 64
        template: Spacebars.call(view.lookup("flexTemplate")),                                                         // 65
        data: Spacebars.call(view.lookup("flexData"))                                                                  // 66
      };                                                                                                               // 67
    }, function() {                                                                                                    // 68
      return Spacebars.include(function() {                                                                            // 69
        return Spacebars.call(Template.__dynamic);                                                                     // 70
      });                                                                                                              // 71
    }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.SPAN({                                                            // 72
      class: "arrow bottom"                                                                                            // 73
    }), "\n\t\t" ];                                                                                                    // 74
  }, function() {                                                                                                      // 75
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 76
      class: "rooms-list",                                                                                             // 77
      "aria-label": function() {                                                                                       // 78
        return Spacebars.mustache(view.lookup("_"), "Channels");                                                       // 79
      },                                                                                                               // 80
      role: "region"                                                                                                   // 81
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 82
      class: "wrapper"                                                                                                 // 83
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("channelsAnonymous")), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];
  }), "\n\t\t", HTML.FOOTER({                                                                                          // 85
    class: "footer"                                                                                                    // 86
  }, "\n\t\t\t", Blaze.View("lookup:footer", function() {                                                              // 87
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("footer")));                                               // 88
  }), "\n\t\t"), "\n\t");                                                                                              // 89
}));                                                                                                                   // 90
                                                                                                                       // 91
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.starredRooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.starredRooms.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("starredRooms");                                                                                  // 2
Template["starredRooms"] = new Template("Template.starredRooms", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("total"));                                                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.H3({                                                                                       // 8
      class: function() {                                                                                              // 9
        return Spacebars.mustache(view.lookup("isActive"));                                                            // 10
      }                                                                                                                // 11
    }, HTML.I({                                                                                                        // 12
      class: "icon-star"                                                                                               // 13
    }), Blaze.View("lookup:_", function() {                                                                            // 14
      return Spacebars.mustache(view.lookup("_"), "Favorites");                                                        // 15
    }), " ", HTML.SPAN({                                                                                               // 16
      class: "room-count-small"                                                                                        // 17
    }, "(", Blaze.View("lookup:rooms.count", function() {                                                              // 18
      return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                         // 19
    }), ")")), "\n\t\t", HTML.UL("\n\t\t\t", Blaze.Each(function() {                                                   // 20
      return Spacebars.call(view.lookup("rooms"));                                                                     // 21
    }, function() {                                                                                                    // 22
      return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t\t" ];                     // 23
    }), "\n\t\t"), "\n\t" ];                                                                                           // 24
  });                                                                                                                  // 25
}));                                                                                                                   // 26
                                                                                                                       // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.toolbar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.toolbar.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("toolbar");                                                                                       // 2
Template["toolbar"] = new Template("Template.toolbar", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "toolbar"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "toolbar-wrapper"                                                                                           // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "toolbar-search"                                                                                            // 10
  }, "\n\t\t\t\t", HTML.Raw('<i class="toolbar-search__icon icon-search"></i>'), "\n\t\t\t\t", HTML.INPUT({            // 11
    type: "text",                                                                                                      // 12
    name: "toolbar-input",                                                                                             // 13
    class: "toolbar-search__input background-transparent-light color-content-background-color border-transparent-lighter",
    placeholder: function() {                                                                                          // 15
      return Spacebars.mustache(view.lookup("getPlaceholder"));                                                        // 16
    }                                                                                                                  // 17
  }), "\n\t\t\t\t", HTML.Raw('<i class="toolbar-search__icon toolbar-search__icon--cancel icon-cancel"></i>'), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("canCreate"));                                                                   // 19
  }, function() {                                                                                                      // 20
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 21
      class: "toolbar-search__buttons"                                                                                 // 22
    }, "\n\t\t\t\t\t", HTML.I({                                                                                        // 23
      class: "toolbar-search__create-channel icon-plus"                                                                // 24
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                   // 25
  }), "\n\t\t"), "\n\n\t\t", Blaze._TemplateWith(function() {                                                          // 26
    return Spacebars.call(view.lookup("popupConfig"));                                                                 // 27
  }, function() {                                                                                                      // 28
    return Spacebars.include(view.lookupTemplate("messagePopup"));                                                     // 29
  }), "\n\t");                                                                                                         // 30
}));                                                                                                                   // 31
                                                                                                                       // 32
Template.__checkName("toolbarSearchList");                                                                             // 33
Template["toolbarSearchList"] = new Template("Template.toolbarSearchList", (function() {                               // 34
  var view = this;                                                                                                     // 35
  return [ HTML.I({                                                                                                    // 36
    class: function() {                                                                                                // 37
      return [ Spacebars.mustache(view.lookup("icon")), " ", Spacebars.mustache(view.lookup("userStatus")) ];          // 38
    }                                                                                                                  // 39
  }), "\n\t", HTML.SPAN({                                                                                              // 40
    class: function() {                                                                                                // 41
      return [ "room-title ", Blaze.If(function() {                                                                    // 42
        return Spacebars.call(view.lookup("unread"));                                                                  // 43
      }, function() {                                                                                                  // 44
        return "bold";                                                                                                 // 45
      }) ];                                                                                                            // 46
    }                                                                                                                  // 47
  }, Blaze.View("lookup:displayName", function() {                                                                     // 48
    return Spacebars.mustache(view.lookup("displayName"));                                                             // 49
  })), "\n\t", Blaze.If(function() {                                                                                   // 50
    return Spacebars.call(view.lookup("unread"));                                                                      // 51
  }, function() {                                                                                                      // 52
    return [ "\n\t\t", HTML.SPAN({                                                                                     // 53
      class: "unread"                                                                                                  // 54
    }, Blaze.View("lookup:unread", function() {                                                                        // 55
      return Spacebars.mustache(view.lookup("unread"));                                                                // 56
    })), "\n\t" ];                                                                                                     // 57
  }) ];                                                                                                                // 58
}));                                                                                                                   // 59
                                                                                                                       // 60
Template.__checkName("toolbarSearchListEmpty");                                                                        // 61
Template["toolbarSearchListEmpty"] = new Template("Template.toolbarSearchListEmpty", (function() {                     // 62
  var view = this;                                                                                                     // 63
  return Blaze.View("lookup:_", function() {                                                                           // 64
    return Spacebars.mustache(view.lookup("_"), "No_results_found");                                                   // 65
  });                                                                                                                  // 66
}));                                                                                                                   // 67
                                                                                                                       // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.unreadRooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.unreadRooms.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("unreadRooms");                                                                                   // 2
Template["unreadRooms"] = new Template("Template.unreadRooms", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "unread-rooms-mode ", Spacebars.mustache(view.lookup("hasUnread")) ];                                   // 7
    }                                                                                                                  // 8
  }, "\n\t\t", HTML.H3("\n\t\t\t", Blaze.View("lookup:_", function() {                                                 // 9
    return Spacebars.mustache(view.lookup("_"), "Unread_Rooms");                                                       // 10
  }), " ", HTML.SPAN({                                                                                                 // 11
    class: "room-count-small"                                                                                          // 12
  }, "(", Blaze.View("lookup:rooms.count", function() {                                                                // 13
    return Spacebars.mustache(Spacebars.dot(view.lookup("rooms"), "count"));                                           // 14
  }), ")"), "\n\t\t"), "\n\n\t\t", HTML.UL("\n\t\t\t", Blaze.Each(function() {                                         // 15
    return Spacebars.call(view.lookup("rooms"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("chatRoomItem")), "\n\t\t\t" ];                       // 18
  }), "\n\t\t"), "\n\t");                                                                                              // 19
}));                                                                                                                   // 20
                                                                                                                       // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userStatus.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/template.userStatus.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userStatus");                                                                                    // 2
Template["userStatus"] = new Template("Template.userStatus", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "account-box"                                                                                               // 6
  }, "\n\t\t", Spacebars.With(function() {                                                                             // 7
    return Spacebars.call(view.lookup("myUserInfo"));                                                                  // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 10
      class: function() {                                                                                              // 11
        return [ "info status-", Spacebars.mustache(view.lookup("status")), " primary-background-color" ];             // 12
      }                                                                                                                // 13
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 14
      return Spacebars.call(view.lookup("username"));                                                                  // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 17
        class: "thumb",                                                                                                // 18
        "data-status": function() {                                                                                    // 19
          return Spacebars.mustache(view.lookup("visualStatus"));                                                      // 20
        }                                                                                                              // 21
      }, "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                            // 22
        return {                                                                                                       // 23
          username: Spacebars.call(view.lookup("username"))                                                            // 24
        };                                                                                                             // 25
      }, function() {                                                                                                  // 26
        return Spacebars.include(view.lookupTemplate("avatar"));                                                       // 27
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 28
        class: "data"                                                                                                  // 29
      }, "\n\t\t\t\t\t\t", HTML.H4(Blaze.View("lookup:username", function() {                                          // 30
        return Spacebars.mustache(view.lookup("username"));                                                            // 31
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                            // 32
    }), "\n\t\t\t"), "\n\t\t\t", HTML.NAV({                                                                            // 33
      class: "options primary-background-color animated-hidden"                                                        // 34
    }, "\n\t\t\t\t", HTML.DIV({                                                                                        // 35
      class: "wrapper"                                                                                                 // 36
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 37
      "data-status": "online",                                                                                         // 38
      class: "status online"                                                                                           // 39
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 40
      return Spacebars.mustache(view.lookup("_"), "Online");                                                           // 41
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 42
      "data-status": "away",                                                                                           // 43
      class: "status away"                                                                                             // 44
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 45
      return Spacebars.mustache(view.lookup("_"), "Away", Spacebars.kw({                                               // 46
        context: "male"                                                                                                // 47
      }));                                                                                                             // 48
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 49
      "data-status": "busy",                                                                                           // 50
      class: "status busy"                                                                                             // 51
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 52
      return Spacebars.mustache(view.lookup("_"), "Busy", Spacebars.kw({                                               // 53
        context: "male"                                                                                                // 54
      }));                                                                                                             // 55
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 56
      "data-status": "offline",                                                                                        // 57
      class: "status offline"                                                                                          // 58
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 59
      return Spacebars.mustache(view.lookup("_"), "Invisible");                                                        // 60
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 61
      id: "account",                                                                                                   // 62
      class: "account-link"                                                                                            // 63
    }, HTML.I({                                                                                                        // 64
      class: "icon-sliders"                                                                                            // 65
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 66
      return Spacebars.mustache(view.lookup("_"), "My_Account");                                                       // 67
    }))), "\n\t\t\t\t\t", Blaze.If(function() {                                                                        // 68
      return Spacebars.call(view.lookup("showAdminOption"));                                                           // 69
    }, function() {                                                                                                    // 70
      return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                         // 71
        id: "admin",                                                                                                   // 72
        class: "account-link"                                                                                          // 73
      }, HTML.I({                                                                                                      // 74
        class: "icon-wrench"                                                                                           // 75
      }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                // 76
        return Spacebars.mustache(view.lookup("_"), "Administration");                                                 // 77
      }))), "\n\t\t\t\t\t" ];                                                                                          // 78
    }), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                  // 79
      id: "logout"                                                                                                     // 80
    }, HTML.I({                                                                                                        // 81
      class: "icon-logout"                                                                                             // 82
    }), HTML.SPAN(Blaze.View("lookup:_", function() {                                                                  // 83
      return Spacebars.mustache(view.lookup("_"), "Logout");                                                           // 84
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                      // 85
  }), "\n\t");                                                                                                         // 86
}));                                                                                                                   // 87
                                                                                                                       // 88
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"accountBox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/accountBox.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.accountBox.helpers({                                                                                          // 1
	myUserInfo: function () {                                                                                             // 2
		if (Meteor.user() == null && RocketChat.settings.get('Accounts_AllowAnonymousRead')) {                               // 3
			return {                                                                                                            // 4
				name: t('Anonymous'),                                                                                              // 5
				fname: t('Anonymous'),                                                                                             // 6
				status: 'online',                                                                                                  // 7
				visualStatus: t('online'),                                                                                         // 8
				username: 'anonymous'                                                                                              // 9
			};                                                                                                                  // 4
		}                                                                                                                    // 11
                                                                                                                       //
		var visualStatus = 'online';                                                                                         // 13
		var user = Meteor.user() || {};                                                                                      // 14
		var name = user.name,                                                                                                // 2
		    username = user.username;                                                                                        // 2
                                                                                                                       //
		switch (Session.get("user_" + username + "_status")) {                                                               // 16
			case 'away':                                                                                                        // 17
				visualStatus = t('away');                                                                                          // 18
				break;                                                                                                             // 19
                                                                                                                       //
			case 'busy':                                                                                                        // 20
				visualStatus = t('busy');                                                                                          // 21
				break;                                                                                                             // 22
                                                                                                                       //
			case 'offline':                                                                                                     // 23
				visualStatus = t('invisible');                                                                                     // 24
				break;                                                                                                             // 25
		}                                                                                                                    // 16
                                                                                                                       //
		return {                                                                                                             // 27
			name: Session.get("user_" + username + "_name") || username,                                                        // 28
			status: Session.get("user_" + username + "_status"),                                                                // 29
			visualStatus: visualStatus,                                                                                         // 30
			_id: Meteor.userId(),                                                                                               // 31
			username: username,                                                                                                 // 32
			fname: name || username                                                                                             // 33
		};                                                                                                                   // 27
	},                                                                                                                    // 35
	showAdminOption: function () {                                                                                        // 37
		return RocketChat.authz.hasAtLeastOnePermission(['view-statistics', 'view-room-administration', 'view-user-administration', 'view-privileged-setting']) || RocketChat.AdminBox.getOptions().length > 0;
	},                                                                                                                    // 39
	registeredMenus: function () {                                                                                        // 41
		return AccountBox.getItems();                                                                                        // 42
	}                                                                                                                     // 43
});                                                                                                                    // 1
Template.accountBox.events({                                                                                           // 46
	'click .options .status': function (event) {                                                                          // 47
		event.preventDefault();                                                                                              // 48
		AccountBox.setStatus(event.currentTarget.dataset.status);                                                            // 49
		return RocketChat.callbacks.run('userStatusManuallySet', event.currentTarget.dataset.status);                        // 50
	},                                                                                                                    // 51
	'click .account-box': function () {                                                                                   // 53
		if (Meteor.userId() == null && RocketChat.settings.get('Accounts_AllowAnonymousRead')) {                             // 54
			return;                                                                                                             // 55
		}                                                                                                                    // 56
                                                                                                                       //
		return AccountBox.toggle();                                                                                          // 58
	},                                                                                                                    // 59
	'click #logout': function (event) {                                                                                   // 61
		event.preventDefault();                                                                                              // 62
		var user = Meteor.user();                                                                                            // 63
		return Meteor.logout(function () {                                                                                   // 64
			RocketChat.callbacks.run('afterLogoutCleanUp', user);                                                               // 65
			Meteor.call('logoutCleanUp', user);                                                                                 // 66
			return FlowRouter.go('home');                                                                                       // 67
		});                                                                                                                  // 68
	},                                                                                                                    // 69
	'click #avatar': function () {                                                                                        // 71
		return FlowRouter.go('changeAvatar');                                                                                // 72
	},                                                                                                                    // 73
	'click #account': function () {                                                                                       // 75
		SideNav.setFlex('accountFlex');                                                                                      // 76
		SideNav.openFlex();                                                                                                  // 77
		return FlowRouter.go('account');                                                                                     // 78
	},                                                                                                                    // 79
	'click #admin': function () {                                                                                         // 81
		SideNav.setFlex('adminFlex');                                                                                        // 82
		SideNav.openFlex();                                                                                                  // 83
		return FlowRouter.go('admin-info');                                                                                  // 84
	},                                                                                                                    // 85
	'click .account-link': function (event) {                                                                             // 87
		event.stopPropagation();                                                                                             // 88
		event.preventDefault();                                                                                              // 89
		return AccountBox.openFlex();                                                                                        // 90
	},                                                                                                                    // 91
	'click .account-box-item': function () {                                                                              // 93
		if (this.href) {                                                                                                     // 94
			FlowRouter.go(this.href);                                                                                           // 95
		}                                                                                                                    // 96
                                                                                                                       //
		if (this.sideNav != null) {                                                                                          // 98
			SideNav.setFlex(this.sideNav);                                                                                      // 99
			return SideNav.openFlex();                                                                                          // 100
		}                                                                                                                    // 101
	}                                                                                                                     // 102
});                                                                                                                    // 46
Template.accountBox.onRendered(function () {                                                                           // 105
	return AccountBox.init();                                                                                             // 105
});                                                                                                                    // 105
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"combined.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/combined.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.combined.helpers({                                                                                            // 1
	isActive: function () {                                                                                               // 2
		if (ChatSubscription.findOne({                                                                                       // 3
			t: {                                                                                                                // 3
				$in: ['c', 'p']                                                                                                    // 3
			},                                                                                                                  // 3
			f: {                                                                                                                // 3
				$ne: true                                                                                                          // 3
			},                                                                                                                  // 3
			open: true,                                                                                                         // 3
			rid: Session.get('openedRoom')                                                                                      // 3
		}, {                                                                                                                 // 3
			fields: {                                                                                                           // 3
				_id: 1                                                                                                             // 3
			}                                                                                                                   // 3
		})) {                                                                                                                // 3
			return 'active';                                                                                                    // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	rooms: function () {                                                                                                  // 8
		var query = {                                                                                                        // 9
			t: {                                                                                                                // 10
				$in: ['c', 'p']                                                                                                    // 10
			},                                                                                                                  // 10
			open: true                                                                                                          // 11
		};                                                                                                                   // 9
                                                                                                                       //
		if (RocketChat.settings.get('Favorite_Rooms')) {                                                                     // 14
			query.f = {                                                                                                         // 15
				$ne: true                                                                                                          // 15
			};                                                                                                                  // 15
		}                                                                                                                    // 16
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode) {
			query.$or = [{                                                                                                      // 19
				alert: {                                                                                                           // 20
					$ne: true                                                                                                         // 20
				}                                                                                                                  // 20
			}, {                                                                                                                // 20
				hideUnreadStatus: true                                                                                             // 21
			}];                                                                                                                 // 21
		}                                                                                                                    // 23
                                                                                                                       //
		return ChatSubscription.find(query, {                                                                                // 25
			sort: {                                                                                                             // 25
				'name': 1                                                                                                          // 25
			}                                                                                                                   // 25
		});                                                                                                                  // 25
	}                                                                                                                     // 26
});                                                                                                                    // 1
Template.combined.events({                                                                                             // 28
	'click .more-channels': function () {                                                                                 // 29
		SideNav.setFlex('listCombinedFlex');                                                                                 // 30
		return SideNav.openFlex();                                                                                           // 31
	}                                                                                                                     // 32
});                                                                                                                    // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"chatRoomItem.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/chatRoomItem.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals KonchatNotification, menu */Template.chatRoomItem.helpers({                                                 // 1
	alert: function () {                                                                                                  // 5
		if (!this.hideUnreadStatus && (FlowRouter.getParam('_id') !== this.rid || !document.hasFocus())) {                   // 6
			return this.alert;                                                                                                  // 7
		}                                                                                                                    // 8
	},                                                                                                                    // 9
	unread: function () {                                                                                                 // 11
		if ((FlowRouter.getParam('_id') !== this.rid || !document.hasFocus()) && this.unread > 0) {                          // 12
			return this.unread;                                                                                                 // 13
		}                                                                                                                    // 14
	},                                                                                                                    // 15
	userStatus: function () {                                                                                             // 17
		var userStatus = RocketChat.roomTypes.getUserStatus(this.t, this.rid);                                               // 18
		return "status-" + (userStatus || 'offline');                                                                        // 19
	},                                                                                                                    // 20
	name: function () {                                                                                                   // 22
		if (RocketChat.settings.get('UI_Use_Real_Name') && this.fname) {                                                     // 23
			return this.fname;                                                                                                  // 24
		}                                                                                                                    // 25
                                                                                                                       //
		return this.name;                                                                                                    // 27
	},                                                                                                                    // 28
	roomIcon: function () {                                                                                               // 30
		return RocketChat.roomTypes.getIcon(this.t);                                                                         // 31
	},                                                                                                                    // 32
	active: function () {                                                                                                 // 34
		if (Session.get('openedRoom') && Session.get('openedRoom') === this.rid || Session.get('openedRoom') === this._id) {
			return 'active';                                                                                                    // 36
		}                                                                                                                    // 37
	},                                                                                                                    // 38
	canLeave: function () {                                                                                               // 40
		var roomData = Session.get("roomData" + this.rid);                                                                   // 41
                                                                                                                       //
		if (!roomData) {                                                                                                     // 43
			return false;                                                                                                       // 43
		}                                                                                                                    // 43
                                                                                                                       //
		if (roomData.cl != null && !roomData.cl || roomData.t === 'd') {                                                     // 45
			return false;                                                                                                       // 46
		} else {                                                                                                             // 47
			return true;                                                                                                        // 48
		}                                                                                                                    // 49
	},                                                                                                                    // 50
	route: function () {                                                                                                  // 52
		return RocketChat.roomTypes.getRouteLink(this.t, this);                                                              // 53
	},                                                                                                                    // 54
	archived: function () {                                                                                               // 56
		return this.archived ? 'archived' : undefined;                                                                       // 57
	}                                                                                                                     // 58
});                                                                                                                    // 3
                                                                                                                       //
Template.chatRoomItem.rendered = function () {                                                                         // 61
	if (!(FlowRouter.getParam('_id') && FlowRouter.getParam('_id') === this.data.rid) && !this.data.ls && this.data.alert === true) {
		return KonchatNotification.newRoom(this.data.rid);                                                                   // 63
	}                                                                                                                     // 64
};                                                                                                                     // 65
                                                                                                                       //
Template.chatRoomItem.events({                                                                                         // 67
	'click .open-room': function () {                                                                                     // 69
		return menu.close();                                                                                                 // 70
	},                                                                                                                    // 71
	'click .hide-room': function (e) {                                                                                    // 73
		var _this = this;                                                                                                    // 73
                                                                                                                       //
		e.stopPropagation();                                                                                                 // 74
		e.preventDefault();                                                                                                  // 75
		var rid = this.rid;                                                                                                  // 73
		var name = this.name;                                                                                                // 73
                                                                                                                       //
		var warnText = function () {                                                                                         // 80
			switch (_this.t) {                                                                                                  // 81
				case 'c':                                                                                                          // 82
					return 'Hide_Room_Warning';                                                                                       // 82
                                                                                                                       //
				case 'p':                                                                                                          // 83
					return 'Hide_Group_Warning';                                                                                      // 83
                                                                                                                       //
				case 'd':                                                                                                          // 84
					return 'Hide_Private_Warning';                                                                                    // 84
			}                                                                                                                   // 81
		}();                                                                                                                 // 86
                                                                                                                       //
		return swal({                                                                                                        // 88
			title: t('Are_you_sure'),                                                                                           // 89
			text: warnText ? t(warnText, name) : '',                                                                            // 90
			type: 'warning',                                                                                                    // 91
			showCancelButton: true,                                                                                             // 92
			confirmButtonColor: '#DD6B55',                                                                                      // 93
			confirmButtonText: t('Yes_hide_it'),                                                                                // 94
			cancelButtonText: t('Cancel'),                                                                                      // 95
			closeOnConfirm: true,                                                                                               // 96
			html: false                                                                                                         // 97
		}, function () {                                                                                                     // 88
			if (['channel', 'group', 'direct'].includes(FlowRouter.getRouteName()) && Session.get('openedRoom') === rid) {      // 99
				FlowRouter.go('home');                                                                                             // 100
			}                                                                                                                   // 101
                                                                                                                       //
			return Meteor.call('hideRoom', rid, function (err) {                                                                // 103
				if (err) {                                                                                                         // 104
					return handleError(err);                                                                                          // 105
				} else if (rid === Session.get('openedRoom')) {                                                                    // 106
					return Session.delete('openedRoom');                                                                              // 107
				}                                                                                                                  // 108
			});                                                                                                                 // 109
		});                                                                                                                  // 110
	},                                                                                                                    // 111
	'click .leave-room': function (e) {                                                                                   // 113
		var _this2 = this;                                                                                                   // 113
                                                                                                                       //
		e.stopPropagation();                                                                                                 // 114
		e.preventDefault();                                                                                                  // 115
		var rid = this.rid;                                                                                                  // 113
		var name = this.name;                                                                                                // 113
                                                                                                                       //
		var warnText = function () {                                                                                         // 120
			switch (false) {                                                                                                    // 121
				case _this2.t !== 'c':                                                                                             // 122
					return 'Leave_Room_Warning';                                                                                      // 122
                                                                                                                       //
				case _this2.t !== 'p':                                                                                             // 123
					return 'Leave_Group_Warning';                                                                                     // 123
                                                                                                                       //
				case _this2.t !== 'd':                                                                                             // 124
					return 'Leave_Private_Warning';                                                                                   // 124
			}                                                                                                                   // 121
		}();                                                                                                                 // 126
                                                                                                                       //
		return swal({                                                                                                        // 127
			title: t('Are_you_sure'),                                                                                           // 128
			text: t(warnText, name),                                                                                            // 129
			type: 'warning',                                                                                                    // 130
			showCancelButton: true,                                                                                             // 131
			confirmButtonColor: '#DD6B55',                                                                                      // 132
			confirmButtonText: t('Yes_leave_it'),                                                                               // 133
			cancelButtonText: t('Cancel'),                                                                                      // 134
			closeOnConfirm: false,                                                                                              // 135
			html: false                                                                                                         // 136
		}, function (isConfirm) {                                                                                            // 127
			if (isConfirm) {                                                                                                    // 138
				return Meteor.call('leaveRoom', rid, function (err) {                                                              // 139
					if (err) {                                                                                                        // 140
						return swal({                                                                                                    // 141
							title: t('Warning'),                                                                                            // 142
							text: handleError(err, false),                                                                                  // 143
							type: 'warning',                                                                                                // 144
							html: false                                                                                                     // 145
						});                                                                                                              // 141
					} else {                                                                                                          // 148
						swal.close();                                                                                                    // 149
                                                                                                                       //
						if (['channel', 'group', 'direct'].includes(FlowRouter.getRouteName()) && Session.get('openedRoom') === rid) {   // 150
							FlowRouter.go('home');                                                                                          // 151
						}                                                                                                                // 152
                                                                                                                       //
						return RoomManager.close(rid);                                                                                   // 154
					}                                                                                                                 // 155
				});                                                                                                                // 156
			} else {                                                                                                            // 157
				return swal.close();                                                                                               // 158
			}                                                                                                                   // 159
		});                                                                                                                  // 160
	}                                                                                                                     // 161
});                                                                                                                    // 67
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"channels.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/channels.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.channels.helpers({                                                                                            // 3
	isActive: function () {                                                                                               // 4
		if (ChatSubscription.findOne({                                                                                       // 5
			t: {                                                                                                                // 5
				$in: ['c']                                                                                                         // 5
			},                                                                                                                  // 5
			f: {                                                                                                                // 5
				$ne: true                                                                                                          // 5
			},                                                                                                                  // 5
			open: true,                                                                                                         // 5
			rid: Session.get('openedRoom')                                                                                      // 5
		}, {                                                                                                                 // 5
			fields: {                                                                                                           // 5
				_id: 1                                                                                                             // 5
			}                                                                                                                   // 5
		}) !== null) {                                                                                                       // 5
			return 'active';                                                                                                    // 6
		}                                                                                                                    // 7
	},                                                                                                                    // 8
	rooms: function () {                                                                                                  // 10
		var query = {                                                                                                        // 11
			t: {                                                                                                                // 12
				$in: ['c']                                                                                                         // 12
			},                                                                                                                  // 12
			open: true                                                                                                          // 13
		};                                                                                                                   // 11
                                                                                                                       //
		if (RocketChat.settings.get('Favorite_Rooms')) {                                                                     // 16
			query.f = {                                                                                                         // 17
				$ne: true                                                                                                          // 17
			};                                                                                                                  // 17
		}                                                                                                                    // 18
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode) {
			query.$or = [{                                                                                                      // 21
				alert: {                                                                                                           // 22
					$ne: true                                                                                                         // 22
				}                                                                                                                  // 22
			}, {                                                                                                                // 22
				hideUnreadStatus: true                                                                                             // 23
			}];                                                                                                                 // 23
		}                                                                                                                    // 25
                                                                                                                       //
		return ChatSubscription.find(query, {                                                                                // 27
			sort: {                                                                                                             // 28
				't': 1,                                                                                                            // 28
				'name': 1                                                                                                          // 28
			}                                                                                                                   // 28
		});                                                                                                                  // 28
	}                                                                                                                     // 29
});                                                                                                                    // 3
Template.channels.events({                                                                                             // 32
	'click .more-channels': function () {                                                                                 // 33
		SideNav.setFlex('listChannelsFlex');                                                                                 // 34
		return SideNav.openFlex();                                                                                           // 35
	}                                                                                                                     // 36
});                                                                                                                    // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"channelsAnonymous.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/channelsAnonymous.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.channelsAnonymous.helpers({                                                                                   // 1
	isActive: function () {                                                                                               // 2
		var currentRoom = RocketChat.models.Rooms.findOne({                                                                  // 3
			_id: Session.get('openedRoom')                                                                                      // 3
		});                                                                                                                  // 3
                                                                                                                       //
		if (currentRoom) {                                                                                                   // 4
			return 'active';                                                                                                    // 5
		}                                                                                                                    // 6
	},                                                                                                                    // 7
	rooms: function () {                                                                                                  // 9
		var query = {                                                                                                        // 10
			t: 'c'                                                                                                              // 11
		};                                                                                                                   // 10
		return RocketChat.models.Rooms.find(query, {                                                                         // 14
			sort: {                                                                                                             // 14
				name: 1                                                                                                            // 14
			}                                                                                                                   // 14
		});                                                                                                                  // 14
	}                                                                                                                     // 15
});                                                                                                                    // 1
Template.channelsAnonymous.events({                                                                                    // 18
	'click .more-channels': function () {                                                                                 // 19
		SideNav.setFlex('listChannelsFlex');                                                                                 // 20
		SideNav.openFlex();                                                                                                  // 21
	}                                                                                                                     // 22
});                                                                                                                    // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"createCombinedFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/createCombinedFlex.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.createCombinedFlex.helpers({                                                                                  // 1
	selectedUsers: function () {                                                                                          // 2
		return Template.instance().selectedUsers.get();                                                                      // 3
	},                                                                                                                    // 4
	name: function () {                                                                                                   // 6
		return Template.instance().selectedUserNames[this.valueOf()];                                                        // 7
	},                                                                                                                    // 8
	error: function () {                                                                                                  // 10
		return Template.instance().error.get();                                                                              // 11
	},                                                                                                                    // 12
	roomName: function () {                                                                                               // 14
		return Template.instance().roomName.get();                                                                           // 15
	},                                                                                                                    // 16
	autocompleteSettings: function () {                                                                                   // 18
		return {                                                                                                             // 19
			limit: 10,                                                                                                          // 20
			// inputDelay: 300                                                                                                  // 21
			rules: [{                                                                                                           // 22
				// @TODO maybe change this 'collection' and/or template                                                            // 24
				collection: 'UserAndRoom',                                                                                         // 25
				subscription: 'userAutocomplete',                                                                                  // 26
				field: 'username',                                                                                                 // 27
				template: Template.userSearch,                                                                                     // 28
				noMatchTemplate: Template.userSearchEmpty,                                                                         // 29
				matchAll: true,                                                                                                    // 30
				filter: {                                                                                                          // 31
					exceptions: [Meteor.user().username].concat(Template.instance().selectedUsers.get())                              // 32
				},                                                                                                                 // 31
				selector: function (match) {                                                                                       // 34
					return {                                                                                                          // 35
						term: match                                                                                                      // 35
					};                                                                                                                // 35
				},                                                                                                                 // 36
				sort: 'username'                                                                                                   // 37
			}]                                                                                                                  // 23
		};                                                                                                                   // 19
	},                                                                                                                    // 41
	privateSwitchDisabled: function () {                                                                                  // 42
		return RocketChat.authz.hasAllPermission(['create-c', 'create-p']) ? '' : 'disabled';                                // 43
	},                                                                                                                    // 44
	privateSwitchChecked: function () {                                                                                   // 45
		return RocketChat.authz.hasAllPermission('create-c') ? '' : 'checked';                                               // 46
	}                                                                                                                     // 47
});                                                                                                                    // 1
Template.createCombinedFlex.events({                                                                                   // 50
	'autocompleteselect #channel-members': function (event, instance, doc) {                                              // 51
		instance.selectedUsers.set(instance.selectedUsers.get().concat(doc.username));                                       // 52
		instance.selectedUserNames[doc.username] = doc.name;                                                                 // 54
		event.currentTarget.value = '';                                                                                      // 56
		return event.currentTarget.focus();                                                                                  // 57
	},                                                                                                                    // 58
	'click .remove-room-member': function () {                                                                            // 60
		var self = this;                                                                                                     // 61
		var users = Template.instance().selectedUsers.get();                                                                 // 63
		users = _.reject(Template.instance().selectedUsers.get(), function (_id) {                                           // 64
			return _id === self.valueOf();                                                                                      // 64
		});                                                                                                                  // 64
		Template.instance().selectedUsers.set(users);                                                                        // 66
		return $('#channel-members').focus();                                                                                // 68
	},                                                                                                                    // 69
	'click header': function (e, instance) {                                                                              // 71
		return SideNav.closeFlex(function () {                                                                               // 72
			return instance.clearForm();                                                                                        // 72
		});                                                                                                                  // 72
	},                                                                                                                    // 73
	'click .cancel-channel': function (e, instance) {                                                                     // 75
		return SideNav.closeFlex(function () {                                                                               // 76
			return instance.clearForm();                                                                                        // 76
		});                                                                                                                  // 76
	},                                                                                                                    // 77
	'mouseenter header': function () {                                                                                    // 79
		return SideNav.overArrow();                                                                                          // 80
	},                                                                                                                    // 81
	'mouseleave header': function () {                                                                                    // 83
		return SideNav.leaveArrow();                                                                                         // 84
	},                                                                                                                    // 85
	'keydown input[type="text"]': function () {                                                                           // 87
		return Template.instance().error.set([]);                                                                            // 88
	},                                                                                                                    // 89
	'keyup #channel-name': function (e, instance) {                                                                       // 91
		if (e.keyCode === 13) {                                                                                              // 92
			return instance.$('#channel-members').focus();                                                                      // 93
		}                                                                                                                    // 94
	},                                                                                                                    // 95
	'keydown #channel-members': function (e, instance) {                                                                  // 97
		if ($(e.currentTarget).val() === '' && e.keyCode === 13) {                                                           // 98
			return instance.$('.save-channel').click();                                                                         // 99
		}                                                                                                                    // 100
	},                                                                                                                    // 101
	'click .save-channel': function (e, instance) {                                                                       // 103
		var err = SideNav.validate();                                                                                        // 104
		var name = instance.find('#channel-name').value.toLowerCase().trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');    // 105
		var privateGroup = instance.find('#channel-type').checked;                                                           // 106
		var readOnly = instance.find('#channel-ro').checked;                                                                 // 107
		var createRoute = privateGroup ? 'createPrivateGroup' : 'createChannel';                                             // 108
		var successRoute = privateGroup ? 'group' : 'channel';                                                               // 109
		instance.roomName.set(name);                                                                                         // 110
                                                                                                                       //
		if (!err) {                                                                                                          // 111
			return Meteor.call(createRoute, name, instance.selectedUsers.get(), readOnly, function (err, result) {              // 112
				if (err) {                                                                                                         // 113
					if (err.error === 'error-invalid-name') {                                                                         // 114
						instance.error.set({                                                                                             // 115
							invalid: true                                                                                                   // 115
						});                                                                                                              // 115
						return;                                                                                                          // 116
					}                                                                                                                 // 117
                                                                                                                       //
					if (err.error === 'error-duplicate-channel-name') {                                                               // 118
						instance.error.set({                                                                                             // 119
							duplicate: true                                                                                                 // 119
						});                                                                                                              // 119
						return;                                                                                                          // 120
					}                                                                                                                 // 121
                                                                                                                       //
					if (err.error === 'error-archived-duplicate-name') {                                                              // 122
						instance.error.set({                                                                                             // 123
							archivedduplicate: true                                                                                         // 123
						});                                                                                                              // 123
						return;                                                                                                          // 124
					} else {                                                                                                          // 125
						return handleError(err);                                                                                         // 126
					}                                                                                                                 // 127
				}                                                                                                                  // 128
                                                                                                                       //
				SideNav.closeFlex(function () {                                                                                    // 130
					return instance.clearForm();                                                                                      // 130
				});                                                                                                                // 130
                                                                                                                       //
				if (!privateGroup) {                                                                                               // 132
					RocketChat.callbacks.run('aftercreateCombined', {                                                                 // 133
						_id: result.rid,                                                                                                 // 133
						name: name                                                                                                       // 133
					});                                                                                                               // 133
				}                                                                                                                  // 134
                                                                                                                       //
				return FlowRouter.go(successRoute, {                                                                               // 136
					name: name                                                                                                        // 136
				}, FlowRouter.current().queryParams);                                                                              // 136
			});                                                                                                                 // 137
		} else {                                                                                                             // 138
			return instance.error.set({                                                                                         // 139
				fields: err                                                                                                        // 139
			});                                                                                                                 // 139
		}                                                                                                                    // 140
	}                                                                                                                     // 141
});                                                                                                                    // 50
Template.createCombinedFlex.onCreated(function () {                                                                    // 144
	var instance = this;                                                                                                  // 145
	instance.selectedUsers = new ReactiveVar([]);                                                                         // 146
	instance.selectedUserNames = {};                                                                                      // 147
	instance.error = new ReactiveVar([]);                                                                                 // 148
	instance.roomName = new ReactiveVar('');                                                                              // 149
	return instance.clearForm = function () {                                                                             // 151
		instance.error.set([]);                                                                                              // 152
		instance.roomName.set('');                                                                                           // 153
		instance.selectedUsers.set([]);                                                                                      // 154
		instance.find('#channel-name').value = '';                                                                           // 155
		instance.find('#channel-type').checked = false;                                                                      // 156
		return instance.find('#channel-members').value = '';                                                                 // 157
	};                                                                                                                    // 158
});                                                                                                                    // 159
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"directMessages.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/directMessages.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.directMessages.helpers({                                                                                      // 1
	isActive: function () {                                                                                               // 2
		if (ChatSubscription.findOne({                                                                                       // 3
			t: {                                                                                                                // 3
				$in: ['d']                                                                                                         // 3
			},                                                                                                                  // 3
			f: {                                                                                                                // 3
				$ne: true                                                                                                          // 3
			},                                                                                                                  // 3
			open: true,                                                                                                         // 3
			rid: Session.get('openedRoom')                                                                                      // 3
		}, {                                                                                                                 // 3
			fields: {                                                                                                           // 3
				_id: 1                                                                                                             // 3
			}                                                                                                                   // 3
		})) {                                                                                                                // 3
			return 'active';                                                                                                    // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	rooms: function () {                                                                                                  // 8
		var query = {                                                                                                        // 9
			t: {                                                                                                                // 9
				$in: ['d']                                                                                                         // 9
			},                                                                                                                  // 9
			f: {                                                                                                                // 9
				$ne: true                                                                                                          // 9
			},                                                                                                                  // 9
			open: true                                                                                                          // 9
		};                                                                                                                   // 9
		var sort = {                                                                                                         // 10
			't': 1                                                                                                              // 10
		};                                                                                                                   // 10
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode) {
			query.$or = [{                                                                                                      // 13
				alert: {                                                                                                           // 14
					$ne: true                                                                                                         // 14
				}                                                                                                                  // 14
			}, {                                                                                                                // 14
				hideUnreadStatus: true                                                                                             // 15
			}];                                                                                                                 // 15
		}                                                                                                                    // 17
                                                                                                                       //
		if (RocketChat.settings.get('UI_Use_Real_Name')) {                                                                   // 19
			sort.fname = 1;                                                                                                     // 20
		}                                                                                                                    // 21
                                                                                                                       //
		sort.name = 1;                                                                                                       // 22
		return ChatSubscription.find(query, {                                                                                // 24
			sort: sort                                                                                                          // 24
		});                                                                                                                  // 24
	}                                                                                                                     // 25
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"listChannelsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/listChannelsFlex.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.listChannelsFlex.helpers({                                                                                    // 1
	channel: function () {                                                                                                // 2
		return Template.instance().channelsList.get();                                                                       // 3
	},                                                                                                                    // 4
	hasMore: function () {                                                                                                // 5
		return Template.instance().hasMore.get();                                                                            // 6
	},                                                                                                                    // 7
	sortChannelsSelected: function (sort) {                                                                               // 8
		return Template.instance().sortChannels.get() === sort;                                                              // 9
	},                                                                                                                    // 10
	sortSubscriptionsSelected: function (sort) {                                                                          // 11
		return Template.instance().sortSubscriptions.get() === sort;                                                         // 12
	},                                                                                                                    // 13
	showSelected: function (show) {                                                                                       // 14
		return Template.instance().show.get() === show;                                                                      // 15
	},                                                                                                                    // 16
	member: function () {                                                                                                 // 17
		return !!RocketChat.models.Subscriptions.findOne({                                                                   // 18
			name: this.name,                                                                                                    // 18
			open: true                                                                                                          // 18
		});                                                                                                                  // 18
	},                                                                                                                    // 19
	hidden: function () {                                                                                                 // 20
		return !!RocketChat.models.Subscriptions.findOne({                                                                   // 21
			name: this.name,                                                                                                    // 21
			open: false                                                                                                         // 21
		});                                                                                                                  // 21
	}                                                                                                                     // 22
});                                                                                                                    // 1
Template.listChannelsFlex.events({                                                                                     // 25
	'click header': function () {                                                                                         // 26
		return SideNav.closeFlex();                                                                                          // 27
	},                                                                                                                    // 28
	'click .channel-link': function () {                                                                                  // 30
		return SideNav.closeFlex();                                                                                          // 31
	},                                                                                                                    // 32
	'click footer .create': function () {                                                                                 // 34
		if (RocketChat.authz.hasAtLeastOnePermission('create-c')) {                                                          // 35
			return SideNav.setFlex('createChannelFlex');                                                                        // 36
		}                                                                                                                    // 37
	},                                                                                                                    // 38
	'mouseenter header': function () {                                                                                    // 40
		return SideNav.overArrow();                                                                                          // 41
	},                                                                                                                    // 42
	'mouseleave header': function () {                                                                                    // 44
		return SideNav.leaveArrow();                                                                                         // 45
	},                                                                                                                    // 46
	'scroll .content': _.throttle(function (e, t) {                                                                       // 48
		if (t.hasMore.get() && e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                        // 49
			return t.limit.set(t.limit.get() + 50);                                                                             // 50
		}                                                                                                                    // 51
	}, 200),                                                                                                              // 52
	'submit .search-form': function (e) {                                                                                 // 55
		return e.preventDefault();                                                                                           // 56
	},                                                                                                                    // 57
	'keyup #channel-search': _.debounce(function (e, instance) {                                                          // 59
		return instance.nameFilter.set($(e.currentTarget).val());                                                            // 59
	}, 300),                                                                                                              // 59
	'change #sort-channels': function (e, instance) {                                                                     // 62
		return instance.sortChannels.set($(e.currentTarget).val());                                                          // 63
	},                                                                                                                    // 64
	'change #sort-subscriptions': function (e, instance) {                                                                // 66
		return instance.sortSubscriptions.set($(e.currentTarget).val());                                                     // 67
	},                                                                                                                    // 68
	'change #show': function (e, instance) {                                                                              // 70
		var show = $(e.currentTarget).val();                                                                                 // 71
                                                                                                                       //
		if (show === 'joined') {                                                                                             // 72
			instance.$('#sort-channels').hide();                                                                                // 73
			instance.$('#sort-subscriptions').show();                                                                           // 74
		} else {                                                                                                             // 75
			instance.$('#sort-channels').show();                                                                                // 76
			instance.$('#sort-subscriptions').hide();                                                                           // 77
		}                                                                                                                    // 78
                                                                                                                       //
		return instance.show.set(show);                                                                                      // 79
	}                                                                                                                     // 80
});                                                                                                                    // 25
Template.listChannelsFlex.onCreated(function () {                                                                      // 83
	var _this = this;                                                                                                     // 83
                                                                                                                       //
	this.channelsList = new ReactiveVar([]);                                                                              // 84
	this.hasMore = new ReactiveVar(true);                                                                                 // 85
	this.limit = new ReactiveVar(50);                                                                                     // 86
	this.nameFilter = new ReactiveVar('');                                                                                // 87
	this.sortChannels = new ReactiveVar('name');                                                                          // 88
	this.sortSubscriptions = new ReactiveVar('name');                                                                     // 89
	this.show = new ReactiveVar('all');                                                                                   // 90
	return this.autorun(function () {                                                                                     // 92
		if (_this.show.get() === 'joined') {                                                                                 // 93
			_this.hasMore.set(true);                                                                                            // 94
                                                                                                                       //
			var options = {                                                                                                     // 95
				fields: {                                                                                                          // 95
					name: 1                                                                                                           // 95
				}                                                                                                                  // 95
			};                                                                                                                  // 95
                                                                                                                       //
			if (_.isNumber(_this.limit.get())) {                                                                                // 96
				options.limit = _this.limit.get();                                                                                 // 97
			}                                                                                                                   // 98
                                                                                                                       //
			if (_.trim(_this.sortSubscriptions.get())) {                                                                        // 99
				switch (_this.sortSubscriptions.get()) {                                                                           // 100
					case 'name':                                                                                                      // 101
						options.sort = {                                                                                                 // 102
							name: 1                                                                                                         // 102
						};                                                                                                               // 102
						break;                                                                                                           // 103
                                                                                                                       //
					case 'ls':                                                                                                        // 104
						options.sort = {                                                                                                 // 105
							ls: -1                                                                                                          // 105
						};                                                                                                               // 105
						break;                                                                                                           // 106
				}                                                                                                                  // 100
			}                                                                                                                   // 108
                                                                                                                       //
			_this.channelsList.set(RocketChat.models.Subscriptions.find({                                                       // 109
				name: new RegExp(s.trim(s.escapeRegExp(_this.nameFilter.get())), 'i'),                                             // 110
				t: 'c'                                                                                                             // 111
			}, options).fetch());                                                                                               // 109
                                                                                                                       //
			if (_this.channelsList.get().length < _this.limit.get()) {                                                          // 114
				return _this.hasMore.set(false);                                                                                   // 115
			}                                                                                                                   // 116
		} else {                                                                                                             // 117
			return Meteor.call('channelsList', _this.nameFilter.get(), 'public', _this.limit.get(), _this.sortChannels.get(), function (err, result) {
				if (result) {                                                                                                      // 119
					_this.hasMore.set(true);                                                                                          // 120
                                                                                                                       //
					_this.channelsList.set(result.channels);                                                                          // 121
                                                                                                                       //
					if (result.channels.length < _this.limit.get()) {                                                                 // 122
						return _this.hasMore.set(false);                                                                                 // 123
					}                                                                                                                 // 124
				}                                                                                                                  // 125
			});                                                                                                                 // 126
		}                                                                                                                    // 128
	});                                                                                                                   // 129
});                                                                                                                    // 131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"listCombinedFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/listCombinedFlex.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.listCombinedFlex.helpers({                                                                                    // 1
	channel: function () {                                                                                                // 2
		return Template.instance().channelsList.get();                                                                       // 3
	},                                                                                                                    // 4
	hasMore: function () {                                                                                                // 5
		return Template.instance().hasMore.get();                                                                            // 6
	},                                                                                                                    // 7
	sortChannelsSelected: function (sort) {                                                                               // 8
		return Template.instance().sortChannels.get() === sort;                                                              // 9
	},                                                                                                                    // 10
	sortSubscriptionsSelected: function (sort) {                                                                          // 11
		return Template.instance().sortSubscriptions.get() === sort;                                                         // 12
	},                                                                                                                    // 13
	showSelected: function (show) {                                                                                       // 14
		return Template.instance().show.get() === show;                                                                      // 15
	},                                                                                                                    // 16
	channelTypeSelected: function (type) {                                                                                // 17
		return Template.instance().channelType.get() === type;                                                               // 18
	},                                                                                                                    // 19
	member: function () {                                                                                                 // 20
		return !!RocketChat.models.Subscriptions.findOne({                                                                   // 21
			name: this.name,                                                                                                    // 21
			open: true                                                                                                          // 21
		});                                                                                                                  // 21
	},                                                                                                                    // 22
	hidden: function () {                                                                                                 // 23
		return !!RocketChat.models.Subscriptions.findOne({                                                                   // 24
			name: this.name,                                                                                                    // 24
			open: false                                                                                                         // 24
		});                                                                                                                  // 24
	},                                                                                                                    // 25
	roomIcon: function () {                                                                                               // 26
		return RocketChat.roomTypes.getIcon(this.t);                                                                         // 27
	},                                                                                                                    // 28
	url: function () {                                                                                                    // 29
		return this.t === 'p' ? 'group' : 'channel';                                                                         // 30
	}                                                                                                                     // 31
});                                                                                                                    // 1
Template.listCombinedFlex.events({                                                                                     // 34
	'click header': function () {                                                                                         // 35
		return SideNav.closeFlex();                                                                                          // 36
	},                                                                                                                    // 37
	'click .channel-link': function () {                                                                                  // 39
		return SideNav.closeFlex();                                                                                          // 40
	},                                                                                                                    // 41
	'mouseenter header': function () {                                                                                    // 43
		return SideNav.overArrow();                                                                                          // 44
	},                                                                                                                    // 45
	'mouseleave header': function () {                                                                                    // 47
		return SideNav.leaveArrow();                                                                                         // 48
	},                                                                                                                    // 49
	'scroll .content': _.throttle(function (e, t) {                                                                       // 51
		if (t.hasMore.get() && e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                        // 52
			return t.limit.set(t.limit.get() + 50);                                                                             // 53
		}                                                                                                                    // 54
	}, 200),                                                                                                              // 55
	'submit .search-form': function (e) {                                                                                 // 58
		return e.preventDefault();                                                                                           // 59
	},                                                                                                                    // 60
	'keyup #channel-search': _.debounce(function (e, instance) {                                                          // 62
		return instance.nameFilter.set($(e.currentTarget).val());                                                            // 62
	}, 300),                                                                                                              // 62
	'change #sort-channels': function (e, instance) {                                                                     // 65
		return instance.sortChannels.set($(e.currentTarget).val());                                                          // 66
	},                                                                                                                    // 67
	'change #channel-type': function (e, instance) {                                                                      // 69
		return instance.channelType.set($(e.currentTarget).val());                                                           // 70
	},                                                                                                                    // 71
	'change #sort-subscriptions': function (e, instance) {                                                                // 73
		return instance.sortSubscriptions.set($(e.currentTarget).val());                                                     // 74
	},                                                                                                                    // 75
	'change #show': function (e, instance) {                                                                              // 77
		var show = $(e.currentTarget).val();                                                                                 // 78
                                                                                                                       //
		if (show === 'joined') {                                                                                             // 79
			instance.$('#sort-channels').hide();                                                                                // 80
			instance.$('#sort-subscriptions').show();                                                                           // 81
		} else {                                                                                                             // 82
			instance.$('#sort-channels').show();                                                                                // 83
			instance.$('#sort-subscriptions').hide();                                                                           // 84
		}                                                                                                                    // 85
                                                                                                                       //
		return instance.show.set(show);                                                                                      // 86
	}                                                                                                                     // 87
});                                                                                                                    // 34
Template.listCombinedFlex.onCreated(function () {                                                                      // 90
	var _this = this;                                                                                                     // 90
                                                                                                                       //
	this.channelsList = new ReactiveVar([]);                                                                              // 91
	this.hasMore = new ReactiveVar(true);                                                                                 // 92
	this.limit = new ReactiveVar(50);                                                                                     // 93
	this.nameFilter = new ReactiveVar('');                                                                                // 94
	this.sortChannels = new ReactiveVar('name');                                                                          // 95
	this.sortSubscriptions = new ReactiveVar('name');                                                                     // 96
	this.channelType = new ReactiveVar('all');                                                                            // 97
	this.show = new ReactiveVar('all');                                                                                   // 98
	this.type = this.t === 'p' ? 'group' : 'channel';                                                                     // 99
	return this.autorun(function () {                                                                                     // 101
		if (_this.show.get() === 'joined') {                                                                                 // 102
			_this.hasMore.set(true);                                                                                            // 103
                                                                                                                       //
			var options = {                                                                                                     // 104
				fields: {                                                                                                          // 104
					name: 1,                                                                                                          // 104
					t: 1                                                                                                              // 104
				}                                                                                                                  // 104
			};                                                                                                                  // 104
                                                                                                                       //
			if (_.isNumber(_this.limit.get())) {                                                                                // 105
				options.limit = _this.limit.get();                                                                                 // 106
			}                                                                                                                   // 107
                                                                                                                       //
			if (_.trim(_this.sortSubscriptions.get())) {                                                                        // 108
				switch (_this.sortSubscriptions.get()) {                                                                           // 109
					case 'name':                                                                                                      // 110
						options.sort = {                                                                                                 // 111
							name: 1                                                                                                         // 111
						};                                                                                                               // 111
						break;                                                                                                           // 112
                                                                                                                       //
					case 'ls':                                                                                                        // 113
						options.sort = {                                                                                                 // 114
							ls: -1                                                                                                          // 114
						};                                                                                                               // 114
						break;                                                                                                           // 115
				}                                                                                                                  // 109
			}                                                                                                                   // 117
                                                                                                                       //
			var type = {                                                                                                        // 118
				$in: ['c', 'p']                                                                                                    // 118
			};                                                                                                                  // 118
                                                                                                                       //
			if (_.trim(_this.channelType.get())) {                                                                              // 119
				switch (_this.channelType.get()) {                                                                                 // 120
					case 'public':                                                                                                    // 121
						type = 'c';                                                                                                      // 122
						break;                                                                                                           // 123
                                                                                                                       //
					case 'private':                                                                                                   // 124
						type = 'p';                                                                                                      // 125
						break;                                                                                                           // 126
				}                                                                                                                  // 120
			}                                                                                                                   // 128
                                                                                                                       //
			_this.channelsList.set(RocketChat.models.Subscriptions.find({                                                       // 129
				name: new RegExp(s.trim(s.escapeRegExp(_this.nameFilter.get())), 'i'),                                             // 130
				t: type                                                                                                            // 131
			}, options).fetch());                                                                                               // 129
                                                                                                                       //
			if (_this.channelsList.get().length < _this.limit.get()) {                                                          // 134
				return _this.hasMore.set(false);                                                                                   // 135
			}                                                                                                                   // 136
		} else {                                                                                                             // 137
			return Meteor.call('channelsList', _this.nameFilter.get(), _this.channelType.get(), _this.limit.get(), _this.sortChannels.get(), function (err, result) {
				if (result) {                                                                                                      // 139
					_this.hasMore.set(true);                                                                                          // 140
                                                                                                                       //
					_this.channelsList.set(result.channels);                                                                          // 141
                                                                                                                       //
					if (result.channels.length < _this.limit.get()) {                                                                 // 142
						return _this.hasMore.set(false);                                                                                 // 143
					}                                                                                                                 // 144
				}                                                                                                                  // 145
			});                                                                                                                 // 146
		}                                                                                                                    // 148
	});                                                                                                                   // 149
});                                                                                                                    // 151
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"listPrivateGroupsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/listPrivateGroupsFlex.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.listPrivateGroupsFlex.helpers({                                                                               // 1
	groups: function () {                                                                                                 // 2
		return Template.instance().groups.get();                                                                             // 3
	},                                                                                                                    // 4
	hasMore: function () {                                                                                                // 5
		return Template.instance().hasMore.get();                                                                            // 6
	},                                                                                                                    // 7
	sortSelected: function (sort) {                                                                                       // 8
		return Template.instance().sort.get() === sort;                                                                      // 9
	},                                                                                                                    // 10
	hidden: function () {                                                                                                 // 11
		return !!RocketChat.models.Subscriptions.findOne({                                                                   // 12
			name: this.name,                                                                                                    // 12
			open: false                                                                                                         // 12
		});                                                                                                                  // 12
	}                                                                                                                     // 13
});                                                                                                                    // 1
Template.listPrivateGroupsFlex.events({                                                                                // 16
	'click header': function () {                                                                                         // 17
		return SideNav.closeFlex();                                                                                          // 18
	},                                                                                                                    // 19
	'click .channel-link': function () {                                                                                  // 21
		return SideNav.closeFlex();                                                                                          // 22
	},                                                                                                                    // 23
	'mouseenter header': function () {                                                                                    // 25
		return SideNav.overArrow();                                                                                          // 26
	},                                                                                                                    // 27
	'mouseleave header': function () {                                                                                    // 29
		return SideNav.leaveArrow();                                                                                         // 30
	},                                                                                                                    // 31
	'scroll .content': _.throttle(function (e, t) {                                                                       // 33
		if (t.hasMore.get() && e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                        // 34
			return t.limit.set(t.limit.get() + 50);                                                                             // 35
		}                                                                                                                    // 36
	}, 200),                                                                                                              // 37
	'keyup #channel-search': _.debounce(function (e, instance) {                                                          // 40
		return instance.nameFilter.set($(e.currentTarget).val());                                                            // 40
	}, 300),                                                                                                              // 40
	'change #sort': function (e, instance) {                                                                              // 43
		return instance.sort.set($(e.currentTarget).val());                                                                  // 44
	}                                                                                                                     // 45
});                                                                                                                    // 16
Template.listPrivateGroupsFlex.onCreated(function () {                                                                 // 48
	var _this = this;                                                                                                     // 48
                                                                                                                       //
	this.groups = new ReactiveVar([]);                                                                                    // 49
	this.hasMore = new ReactiveVar(true);                                                                                 // 50
	this.limit = new ReactiveVar(50);                                                                                     // 51
	this.nameFilter = new ReactiveVar('');                                                                                // 52
	this.sort = new ReactiveVar('name');                                                                                  // 53
	return this.autorun(function () {                                                                                     // 55
		_this.hasMore.set(true);                                                                                             // 56
                                                                                                                       //
		var options = {                                                                                                      // 57
			fields: {                                                                                                           // 57
				name: 1                                                                                                            // 57
			}                                                                                                                   // 57
		};                                                                                                                   // 57
                                                                                                                       //
		if (_.isNumber(_this.limit.get())) {                                                                                 // 58
			options.limit = _this.limit.get();                                                                                  // 59
		}                                                                                                                    // 60
                                                                                                                       //
		if (_.trim(_this.sort.get())) {                                                                                      // 61
			switch (_this.sort.get()) {                                                                                         // 62
				case 'name':                                                                                                       // 63
					options.sort = {                                                                                                  // 64
						name: 1                                                                                                          // 64
					};                                                                                                                // 64
					break;                                                                                                            // 65
                                                                                                                       //
				case 'ls':                                                                                                         // 66
					options.sort = {                                                                                                  // 67
						ls: -1                                                                                                           // 67
					};                                                                                                                // 67
					break;                                                                                                            // 68
			}                                                                                                                   // 62
		}                                                                                                                    // 70
                                                                                                                       //
		_this.groups.set(RocketChat.models.Subscriptions.find({                                                              // 72
			name: new RegExp(s.trim(s.escapeRegExp(_this.nameFilter.get())), 'i'),                                              // 73
			t: 'p',                                                                                                             // 74
			archived: {                                                                                                         // 75
				$ne: true                                                                                                          // 75
			}                                                                                                                   // 75
		}, options).fetch());                                                                                                // 72
                                                                                                                       //
		if (_this.groups.get().length < _this.limit.get()) {                                                                 // 78
			return _this.hasMore.set(false);                                                                                    // 79
		}                                                                                                                    // 80
	});                                                                                                                   // 81
});                                                                                                                    // 83
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"privateGroups.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/privateGroups.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.privateGroups.helpers({                                                                                       // 1
	isActive: function () {                                                                                               // 2
		if (ChatSubscription.findOne({                                                                                       // 3
			t: {                                                                                                                // 3
				$in: ['p']                                                                                                         // 3
			},                                                                                                                  // 3
			f: {                                                                                                                // 3
				$ne: true                                                                                                          // 3
			},                                                                                                                  // 3
			open: true,                                                                                                         // 3
			rid: Session.get('openedRoom')                                                                                      // 3
		}, {                                                                                                                 // 3
			fields: {                                                                                                           // 3
				_id: 1                                                                                                             // 3
			}                                                                                                                   // 3
		})) {                                                                                                                // 3
			return 'active';                                                                                                    // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	rooms: function () {                                                                                                  // 8
		var query = {                                                                                                        // 9
			t: {                                                                                                                // 9
				$in: ['p']                                                                                                         // 9
			},                                                                                                                  // 9
			f: {                                                                                                                // 9
				$ne: true                                                                                                          // 9
			},                                                                                                                  // 9
			open: true                                                                                                          // 9
		};                                                                                                                   // 9
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode) {
			query.$or = [{                                                                                                      // 12
				alert: {                                                                                                           // 13
					$ne: true                                                                                                         // 13
				}                                                                                                                  // 13
			}, {                                                                                                                // 13
				hideUnreadStatus: true                                                                                             // 14
			}];                                                                                                                 // 14
		}                                                                                                                    // 16
                                                                                                                       //
		return ChatSubscription.find(query, {                                                                                // 18
			sort: {                                                                                                             // 18
				't': 1,                                                                                                            // 18
				'name': 1                                                                                                          // 18
			}                                                                                                                   // 18
		});                                                                                                                  // 18
	},                                                                                                                    // 19
	total: function () {                                                                                                  // 21
		return ChatSubscription.find({                                                                                       // 22
			t: {                                                                                                                // 22
				$in: ['p']                                                                                                         // 22
			},                                                                                                                  // 22
			f: {                                                                                                                // 22
				$ne: true                                                                                                          // 22
			}                                                                                                                   // 22
		}).count();                                                                                                          // 22
	},                                                                                                                    // 23
	totalOpen: function () {                                                                                              // 25
		return ChatSubscription.find({                                                                                       // 26
			t: {                                                                                                                // 26
				$in: ['p']                                                                                                         // 26
			},                                                                                                                  // 26
			f: {                                                                                                                // 26
				$ne: true                                                                                                          // 26
			},                                                                                                                  // 26
			open: true                                                                                                          // 26
		}).count();                                                                                                          // 26
	}                                                                                                                     // 27
});                                                                                                                    // 1
Template.privateGroups.events({                                                                                        // 30
	'click .more-groups': function () {                                                                                   // 31
		SideNav.setFlex('listPrivateGroupsFlex');                                                                            // 32
		return SideNav.openFlex();                                                                                           // 33
	}                                                                                                                     // 34
});                                                                                                                    // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"privateGroupsFlex.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/privateGroupsFlex.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.privateGroupsFlex.helpers({                                                                                   // 1
	selectedUsers: function () {                                                                                          // 2
		return Template.instance().selectedUsers.get();                                                                      // 3
	},                                                                                                                    // 4
	name: function () {                                                                                                   // 6
		return Template.instance().selectedUserNames[this.valueOf()];                                                        // 7
	},                                                                                                                    // 8
	groupName: function () {                                                                                              // 10
		return Template.instance().groupName.get();                                                                          // 11
	},                                                                                                                    // 12
	error: function () {                                                                                                  // 14
		return Template.instance().error.get();                                                                              // 15
	},                                                                                                                    // 16
	autocompleteSettings: function () {                                                                                   // 18
		return {                                                                                                             // 19
			limit: 10,                                                                                                          // 20
			// inputDelay: 300                                                                                                  // 21
			rules: [{                                                                                                           // 22
				// @TODO maybe change this 'collection' and/or template                                                            // 24
				collection: 'UserAndRoom',                                                                                         // 25
				subscription: 'userAutocomplete',                                                                                  // 26
				field: 'username',                                                                                                 // 27
				template: Template.userSearch,                                                                                     // 28
				noMatchTemplate: Template.userSearchEmpty,                                                                         // 29
				matchAll: true,                                                                                                    // 30
				filter: {                                                                                                          // 31
					exceptions: [Meteor.user().username].concat(Template.instance().selectedUsers.get())                              // 32
				},                                                                                                                 // 31
				selector: function (match) {                                                                                       // 34
					return {                                                                                                          // 35
						term: match                                                                                                      // 35
					};                                                                                                                // 35
				},                                                                                                                 // 36
				sort: 'username'                                                                                                   // 37
			}]                                                                                                                  // 23
		};                                                                                                                   // 19
	}                                                                                                                     // 41
});                                                                                                                    // 1
Template.privateGroupsFlex.events({                                                                                    // 43
	'autocompleteselect #pvt-group-members': function (event, instance, doc) {                                            // 44
		instance.selectedUsers.set(instance.selectedUsers.get().concat(doc.username));                                       // 45
		instance.selectedUserNames[doc.username] = doc.name;                                                                 // 47
		event.currentTarget.value = '';                                                                                      // 49
		return event.currentTarget.focus();                                                                                  // 50
	},                                                                                                                    // 51
	'click .remove-room-member': function () {                                                                            // 53
		var self = this;                                                                                                     // 54
		var users = Template.instance().selectedUsers.get();                                                                 // 55
		users = _.reject(Template.instance().selectedUsers.get(), function (_id) {                                           // 56
			return _id === self.valueOf();                                                                                      // 56
		});                                                                                                                  // 56
		Template.instance().selectedUsers.set(users);                                                                        // 58
		return $('#pvt-group-members').focus();                                                                              // 60
	},                                                                                                                    // 61
	'click .cancel-pvt-group': function (e, instance) {                                                                   // 63
		return SideNav.closeFlex(function () {                                                                               // 64
			return instance.clearForm();                                                                                        // 64
		});                                                                                                                  // 64
	},                                                                                                                    // 65
	'click header': function (e, instance) {                                                                              // 67
		return SideNav.closeFlex(function () {                                                                               // 68
			return instance.clearForm();                                                                                        // 68
		});                                                                                                                  // 68
	},                                                                                                                    // 69
	'mouseenter header': function () {                                                                                    // 71
		return SideNav.overArrow();                                                                                          // 72
	},                                                                                                                    // 73
	'mouseleave header': function () {                                                                                    // 75
		return SideNav.leaveArrow();                                                                                         // 76
	},                                                                                                                    // 77
	'keydown input[type="text"]': function () {                                                                           // 79
		return Template.instance().error.set([]);                                                                            // 80
	},                                                                                                                    // 81
	'keyup #pvt-group-name': function (e, instance) {                                                                     // 83
		if (e.keyCode === 13) {                                                                                              // 84
			return instance.$('#pvt-group-members').focus();                                                                    // 85
		}                                                                                                                    // 86
	},                                                                                                                    // 87
	'keydown #pvt-group-members': function (e, instance) {                                                                // 89
		if ($(e.currentTarget).val() === '' && e.keyCode === 13) {                                                           // 90
			return instance.$('.save-pvt-group').click();                                                                       // 91
		}                                                                                                                    // 92
	},                                                                                                                    // 93
	'click .save-pvt-group': function (e, instance) {                                                                     // 95
		var err = SideNav.validate();                                                                                        // 96
		var name = instance.find('#pvt-group-name').value.toLowerCase().trim();                                              // 97
		var readOnly = instance.find('#channel-ro').checked;                                                                 // 98
		instance.groupName.set(name);                                                                                        // 99
                                                                                                                       //
		if (!err) {                                                                                                          // 100
			return Meteor.call('createPrivateGroup', name, instance.selectedUsers.get(), readOnly, function (err) {             // 101
				if (err) {                                                                                                         // 102
					if (err.error === 'error-invalid-name') {                                                                         // 103
						instance.error.set({                                                                                             // 104
							invalid: true                                                                                                   // 104
						});                                                                                                              // 104
						return;                                                                                                          // 105
					}                                                                                                                 // 106
                                                                                                                       //
					if (err.error === 'error-duplicate-channel-name') {                                                               // 107
						instance.error.set({                                                                                             // 108
							duplicate: true                                                                                                 // 108
						});                                                                                                              // 108
						return;                                                                                                          // 109
					}                                                                                                                 // 110
                                                                                                                       //
					if (err.error === 'error-archived-duplicate-name') {                                                              // 111
						instance.error.set({                                                                                             // 112
							archivedduplicate: true                                                                                         // 112
						});                                                                                                              // 112
						return;                                                                                                          // 113
					}                                                                                                                 // 114
                                                                                                                       //
					return handleError(err);                                                                                          // 115
				}                                                                                                                  // 116
                                                                                                                       //
				SideNav.closeFlex();                                                                                               // 117
				instance.clearForm();                                                                                              // 118
				return FlowRouter.go('group', {                                                                                    // 119
					name: name                                                                                                        // 119
				}, FlowRouter.current().queryParams);                                                                              // 119
			});                                                                                                                 // 120
		} else {                                                                                                             // 121
			return Template.instance().error.set({                                                                              // 122
				fields: err                                                                                                        // 122
			});                                                                                                                 // 122
		}                                                                                                                    // 123
	}                                                                                                                     // 124
});                                                                                                                    // 43
Template.privateGroupsFlex.onCreated(function () {                                                                     // 127
	var instance = this;                                                                                                  // 128
	instance.selectedUsers = new ReactiveVar([]);                                                                         // 129
	instance.selectedUserNames = {};                                                                                      // 130
	instance.error = new ReactiveVar([]);                                                                                 // 131
	instance.groupName = new ReactiveVar('');                                                                             // 132
	return instance.clearForm = function () {                                                                             // 134
		instance.error.set([]);                                                                                              // 135
		instance.groupName.set('');                                                                                          // 136
		instance.selectedUsers.set([]);                                                                                      // 137
		instance.find('#pvt-group-name').value = '';                                                                         // 138
		return instance.find('#pvt-group-members').value = '';                                                               // 139
	};                                                                                                                    // 140
});                                                                                                                    // 141
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"sideNav.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/sideNav.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals menu*/Template.sideNav.helpers({                                                                            // 1
	flexTemplate: function () {                                                                                           // 4
		return SideNav.getFlex().template;                                                                                   // 5
	},                                                                                                                    // 6
	flexData: function () {                                                                                               // 8
		return SideNav.getFlex().data;                                                                                       // 9
	},                                                                                                                    // 10
	footer: function () {                                                                                                 // 12
		return RocketChat.settings.get('Layout_Sidenav_Footer');                                                             // 13
	},                                                                                                                    // 14
	showStarredRooms: function () {                                                                                       // 16
		var favoritesEnabled = RocketChat.settings.get('Favorite_Rooms');                                                    // 17
		var hasFavoriteRoomOpened = ChatSubscription.findOne({                                                               // 18
			f: true,                                                                                                            // 18
			open: true                                                                                                          // 18
		});                                                                                                                  // 18
                                                                                                                       //
		if (favoritesEnabled && hasFavoriteRoomOpened) {                                                                     // 20
			return true;                                                                                                        // 20
		}                                                                                                                    // 20
	},                                                                                                                    // 21
	roomType: function () {                                                                                               // 23
		return RocketChat.roomTypes.getTypes();                                                                              // 24
	},                                                                                                                    // 25
	canShowRoomType: function () {                                                                                        // 27
		var userPref = undefined;                                                                                            // 28
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences) {                                 // 29
			userPref = Meteor.user().settings.preferences.mergeChannels;                                                        // 30
		}                                                                                                                    // 31
                                                                                                                       //
		var globalPref = RocketChat.settings.get('UI_Merge_Channels_Groups');                                                // 32
		var mergeChannels = userPref != null ? userPref : globalPref;                                                        // 33
                                                                                                                       //
		if (mergeChannels) {                                                                                                 // 34
			return RocketChat.roomTypes.checkCondition(this) && this.template !== 'privateGroups';                              // 35
		} else {                                                                                                             // 36
			return RocketChat.roomTypes.checkCondition(this);                                                                   // 37
		}                                                                                                                    // 38
	},                                                                                                                    // 39
	templateName: function () {                                                                                           // 41
		var userPref = undefined;                                                                                            // 42
                                                                                                                       //
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences) {                                 // 43
			userPref = Meteor.user().settings.preferences.mergeChannels;                                                        // 44
		}                                                                                                                    // 45
                                                                                                                       //
		var globalPref = RocketChat.settings.get('UI_Merge_Channels_Groups');                                                // 46
		var mergeChannels = userPref != null ? userPref : globalPref;                                                        // 47
                                                                                                                       //
		if (mergeChannels) {                                                                                                 // 48
			return this.template === 'channels' ? 'combined' : this.template;                                                   // 49
		} else {                                                                                                             // 50
			return this.template;                                                                                               // 51
		}                                                                                                                    // 52
	}                                                                                                                     // 53
});                                                                                                                    // 3
Template.sideNav.events({                                                                                              // 56
	'click .close-flex': function () {                                                                                    // 57
		return SideNav.closeFlex();                                                                                          // 58
	},                                                                                                                    // 59
	'click .arrow': function () {                                                                                         // 61
		return SideNav.toggleCurrent();                                                                                      // 62
	},                                                                                                                    // 63
	'mouseenter .header': function () {                                                                                   // 65
		return SideNav.overArrow();                                                                                          // 66
	},                                                                                                                    // 67
	'mouseleave .header': function () {                                                                                   // 69
		return SideNav.leaveArrow();                                                                                         // 70
	},                                                                                                                    // 71
	'scroll .rooms-list': function () {                                                                                   // 73
		return menu.updateUnreadBars();                                                                                      // 74
	},                                                                                                                    // 75
	'dropped .side-nav': function (e) {                                                                                   // 77
		return e.preventDefault();                                                                                           // 78
	}                                                                                                                     // 79
});                                                                                                                    // 56
Template.sideNav.onRendered(function () {                                                                              // 82
	SideNav.init();                                                                                                       // 83
	menu.init();                                                                                                          // 84
	return Meteor.defer(function () {                                                                                     // 86
		return menu.updateUnreadBars();                                                                                      // 86
	});                                                                                                                   // 86
});                                                                                                                    // 87
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"starredRooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/starredRooms.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.starredRooms.helpers({                                                                                        // 1
	isActive: function () {                                                                                               // 2
		if (ChatSubscription.findOne({                                                                                       // 3
			f: true,                                                                                                            // 3
			rid: Session.get('openedRoom')                                                                                      // 3
		}, {                                                                                                                 // 3
			fields: {                                                                                                           // 3
				_id: 1                                                                                                             // 3
			}                                                                                                                   // 3
		})) {                                                                                                                // 3
			return 'active';                                                                                                    // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	rooms: function () {                                                                                                  // 8
		var query = {                                                                                                        // 9
			f: true,                                                                                                            // 9
			open: true                                                                                                          // 9
		};                                                                                                                   // 9
                                                                                                                       //
		if (Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode) {
			query.$or = [{                                                                                                      // 12
				alert: {                                                                                                           // 13
					$ne: true                                                                                                         // 13
				}                                                                                                                  // 13
			}, {                                                                                                                // 13
				hideUnreadStatus: true                                                                                             // 14
			}];                                                                                                                 // 14
		}                                                                                                                    // 16
                                                                                                                       //
		return ChatSubscription.find(query, {                                                                                // 18
			sort: {                                                                                                             // 18
				't': 1,                                                                                                            // 18
				'name': 1                                                                                                          // 18
			}                                                                                                                   // 18
		});                                                                                                                  // 18
	},                                                                                                                    // 20
	total: function () {                                                                                                  // 21
		return ChatSubscription.find({                                                                                       // 22
			f: true                                                                                                             // 22
		}).count();                                                                                                          // 22
	}                                                                                                                     // 23
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolbar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/toolbar.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* global menu */var isLoading = void 0;                                                                               // 1
var filterText = '';                                                                                                   // 3
var usernamesFromClient = void 0;                                                                                      // 4
var resultsFromClient = void 0;                                                                                        // 5
Meteor.startup(function () {                                                                                           // 7
	isLoading = new ReactiveVar(false);                                                                                   // 8
});                                                                                                                    // 9
var toolbarSearch = {                                                                                                  // 11
	shortcut: false,                                                                                                      // 12
	clear: function () {                                                                                                  // 13
		var $inputMessage = $('textarea.input-message');                                                                     // 14
                                                                                                                       //
		if (0 === $inputMessage.length) {                                                                                    // 16
			return;                                                                                                             // 17
		}                                                                                                                    // 18
                                                                                                                       //
		$inputMessage.focus();                                                                                               // 20
		$('.toolbar-search__input').val('');                                                                                 // 21
                                                                                                                       //
		if (this.shortcut) {                                                                                                 // 23
			menu.close();                                                                                                       // 24
		}                                                                                                                    // 25
	},                                                                                                                    // 26
	focus: function (fromShortcut) {                                                                                      // 27
		menu.open();                                                                                                         // 28
		$('.toolbar-search__input').focus();                                                                                 // 29
		this.shortcut = fromShortcut;                                                                                        // 30
	}                                                                                                                     // 31
};                                                                                                                     // 11
this.toolbarSearch = toolbarSearch;                                                                                    // 34
                                                                                                                       //
var getFromServer = function (cb, type) {                                                                              // 36
	isLoading.set(true);                                                                                                  // 37
	var currentFilter = filterText;                                                                                       // 38
	Meteor.call('spotlight', currentFilter, usernamesFromClient, type, function (err, results) {                          // 40
		if (currentFilter !== filterText) {                                                                                  // 41
			return;                                                                                                             // 42
		}                                                                                                                    // 43
                                                                                                                       //
		isLoading.set(false);                                                                                                // 45
                                                                                                                       //
		if (err) {                                                                                                           // 47
			console.log(err);                                                                                                   // 48
			return false;                                                                                                       // 49
		}                                                                                                                    // 50
                                                                                                                       //
		var resultsFromServer = [];                                                                                          // 52
		var usersLength = results.users.length;                                                                              // 53
		var roomsLength = results.rooms.length;                                                                              // 54
                                                                                                                       //
		if (usersLength) {                                                                                                   // 56
			for (var i = 0; i < usersLength; i++) {                                                                             // 57
				resultsFromServer.push({                                                                                           // 58
					_id: results.users[i]._id,                                                                                        // 59
					t: 'd',                                                                                                           // 60
					name: results.users[i].username,                                                                                  // 61
					fname: results.users[i].name                                                                                      // 62
				});                                                                                                                // 58
			}                                                                                                                   // 64
		}                                                                                                                    // 65
                                                                                                                       //
		if (roomsLength) {                                                                                                   // 67
			var _loop = function (_i) {                                                                                         // 67
				var alreadyOnClient = resultsFromClient.find(function (item) {                                                     // 69
					return item._id === results.rooms[_i]._id;                                                                        // 69
				});                                                                                                                // 69
                                                                                                                       //
				if (alreadyOnClient) {                                                                                             // 70
					return "continue";                                                                                                // 71
				}                                                                                                                  // 72
                                                                                                                       //
				resultsFromServer.push({                                                                                           // 74
					_id: results.rooms[_i]._id,                                                                                       // 75
					t: results.rooms[_i].t,                                                                                           // 76
					name: results.rooms[_i].name                                                                                      // 77
				});                                                                                                                // 74
			};                                                                                                                  // 67
                                                                                                                       //
			for (var _i = 0; _i < roomsLength; _i++) {                                                                          // 68
				var _ret = _loop(_i);                                                                                              // 68
                                                                                                                       //
				if (_ret === "continue") continue;                                                                                 // 68
			}                                                                                                                   // 79
		}                                                                                                                    // 80
                                                                                                                       //
		if (resultsFromServer.length) {                                                                                      // 82
			cb(resultsFromClient.concat(resultsFromServer));                                                                    // 83
		}                                                                                                                    // 84
	});                                                                                                                   // 85
};                                                                                                                     // 86
                                                                                                                       //
var getFromServerDebounced = _.debounce(getFromServer, 500);                                                           // 88
                                                                                                                       //
Template.toolbar.helpers({                                                                                             // 90
	canCreate: function () {                                                                                              // 91
		return RocketChat.authz.hasAtLeastOnePermission(['create-c', 'create-p']);                                           // 92
	},                                                                                                                    // 93
	results: function () {                                                                                                // 94
		return Template.instance().resultsList.get();                                                                        // 95
	},                                                                                                                    // 96
	getPlaceholder: function () {                                                                                         // 97
		var placeholder = TAPi18n.__('Search');                                                                              // 98
                                                                                                                       //
		if (!Meteor.Device.isDesktop()) {                                                                                    // 100
			return placeholder;                                                                                                 // 101
		} else if (window.navigator.platform.toLowerCase().includes('mac')) {                                                // 102
			placeholder = placeholder + " (CMD+K)";                                                                             // 103
		} else {                                                                                                             // 104
			placeholder = placeholder + " (Ctrl+K)";                                                                            // 105
		}                                                                                                                    // 106
                                                                                                                       //
		return placeholder;                                                                                                  // 108
	},                                                                                                                    // 109
	popupConfig: function () {                                                                                            // 110
		var open = new ReactiveVar(false);                                                                                   // 111
		Tracker.autorun(function () {                                                                                        // 113
			if (open.get() === false) {                                                                                         // 114
				toolbarSearch.clear();                                                                                             // 115
			}                                                                                                                   // 116
		});                                                                                                                  // 117
		var config = {                                                                                                       // 119
			cls: 'search-results-list',                                                                                         // 120
			collection: Meteor.userId() ? RocketChat.models.Subscriptions : RocketChat.models.Rooms,                            // 121
			template: 'toolbarSearchList',                                                                                      // 122
			emptyTemplate: 'toolbarSearchListEmpty',                                                                            // 123
			input: '.toolbar-search__input',                                                                                    // 124
			cleanOnEnter: true,                                                                                                 // 125
			closeOnEsc: false,                                                                                                  // 126
			blurOnSelectItem: true,                                                                                             // 127
			isLoading: isLoading,                                                                                               // 128
			open: open,                                                                                                         // 129
			getFilter: function (collection, filter, cb) {                                                                      // 130
				filterText = filter;                                                                                               // 131
				var type = {                                                                                                       // 133
					users: true,                                                                                                      // 134
					rooms: true                                                                                                       // 135
				};                                                                                                                 // 133
				var query = {                                                                                                      // 138
					rid: {                                                                                                            // 139
						$ne: Session.get('openedRoom')                                                                                   // 140
					}                                                                                                                 // 139
				};                                                                                                                 // 138
                                                                                                                       //
				if (!Meteor.userId()) {                                                                                            // 144
					query._id = query.rid;                                                                                            // 145
					delete query.rid;                                                                                                 // 146
				}                                                                                                                  // 147
                                                                                                                       //
				if (filterText[0] === '#') {                                                                                       // 149
					filterText = filterText.slice(1);                                                                                 // 150
					type.users = false;                                                                                               // 151
					query.t = 'c';                                                                                                    // 152
				}                                                                                                                  // 153
                                                                                                                       //
				if (filterText[0] === '@') {                                                                                       // 155
					filterText = filterText.slice(1);                                                                                 // 156
					type.rooms = false;                                                                                               // 157
					query.t = 'd';                                                                                                    // 158
				}                                                                                                                  // 159
                                                                                                                       //
				var searchQuery = new RegExp(RegExp.escape(filterText), 'i');                                                      // 161
				query.$or = [{                                                                                                     // 162
					name: searchQuery                                                                                                 // 163
				}, {                                                                                                               // 163
					fname: searchQuery                                                                                                // 164
				}];                                                                                                                // 164
				resultsFromClient = collection.find(query, {                                                                       // 167
					limit: 20,                                                                                                        // 167
					sort: {                                                                                                           // 167
						unread: -1,                                                                                                      // 167
						ls: -1                                                                                                           // 167
					}                                                                                                                 // 167
				}).fetch();                                                                                                        // 167
				var resultsFromClientLength = resultsFromClient.length;                                                            // 169
				var user = Meteor.user();                                                                                          // 170
                                                                                                                       //
				if (user) {                                                                                                        // 171
					usernamesFromClient = [user];                                                                                     // 172
				}                                                                                                                  // 173
                                                                                                                       //
				for (var i = 0; i < resultsFromClientLength; i++) {                                                                // 175
					if (resultsFromClient[i].t === 'd') {                                                                             // 176
						usernamesFromClient.push(resultsFromClient[i].name);                                                             // 177
					}                                                                                                                 // 178
				}                                                                                                                  // 179
                                                                                                                       //
				cb(resultsFromClient); // Use `filter` here to get results for `#` or `@` filter only                              // 181
                                                                                                                       //
				if (resultsFromClient.length < 20) {                                                                               // 184
					getFromServerDebounced(cb, type);                                                                                 // 185
				}                                                                                                                  // 186
			},                                                                                                                  // 187
			getValue: function (_id, collection, records) {                                                                     // 189
				var doc = _.findWhere(records, {                                                                                   // 190
					_id: _id                                                                                                          // 190
				});                                                                                                                // 190
                                                                                                                       //
				RocketChat.roomTypes.openRouteLink(doc.t, doc, FlowRouter.current().queryParams);                                  // 192
				menu.close();                                                                                                      // 193
			}                                                                                                                   // 194
		};                                                                                                                   // 119
		return config;                                                                                                       // 197
	}                                                                                                                     // 198
});                                                                                                                    // 90
Template.toolbar.events({                                                                                              // 201
	'keyup .toolbar-search__input': function (e) {                                                                        // 202
		if (e.which === 27) {                                                                                                // 203
			e.preventDefault();                                                                                                 // 204
			e.stopPropagation();                                                                                                // 205
			toolbarSearch.clear();                                                                                              // 207
		}                                                                                                                    // 208
	},                                                                                                                    // 209
	'click .toolbar-search__input': function () {                                                                         // 211
		toolbarSearch.shortcut = false;                                                                                      // 212
	},                                                                                                                    // 213
	'click .toolbar-search__create-channel, touchend .toolbar-search__create-channel': function (e) {                     // 215
		if (RocketChat.authz.hasAtLeastOnePermission(['create-c', 'create-p'])) {                                            // 216
			SideNav.setFlex('createCombinedFlex');                                                                              // 217
			SideNav.openFlex();                                                                                                 // 218
		} else {                                                                                                             // 219
			e.preventDefault();                                                                                                 // 220
		}                                                                                                                    // 221
	},                                                                                                                    // 222
	'blur .toolbar-search__input': function () {                                                                          // 224
		toolbarSearch.clear();                                                                                               // 225
	}                                                                                                                     // 226
});                                                                                                                    // 201
Template.toolbarSearchList.helpers({                                                                                   // 229
	icon: function () {                                                                                                   // 230
		return RocketChat.roomTypes.getIcon(this.t);                                                                         // 231
	},                                                                                                                    // 232
	userStatus: function () {                                                                                             // 233
		if (this.t === 'd') {                                                                                                // 234
			return "status-" + (Session.get("user_" + this.name + "_status") || 'offline');                                     // 235
		} else {                                                                                                             // 236
			return "status-" + (RocketChat.roomTypes.getUserStatus(this.t, this.rid || this._id) || 'offline');                 // 237
		}                                                                                                                    // 238
	},                                                                                                                    // 239
	displayName: function () {                                                                                            // 241
		if (RocketChat.settings.get('UI_Use_Real_Name') && this.fname) {                                                     // 242
			return this.fname;                                                                                                  // 243
		} else {                                                                                                             // 244
			return this.name;                                                                                                   // 245
		}                                                                                                                    // 246
	}                                                                                                                     // 247
});                                                                                                                    // 229
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"unreadRooms.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-sidenav/client/unreadRooms.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.unreadRooms.helpers({                                                                                         // 1
	hasUnread: function () {                                                                                              // 2
		if (Meteor.user() && Meteor.user().settings && Meteor.user().settings.preferences && Meteor.user().settings.preferences.unreadRoomsMode && Template.instance().unreadRooms.count() > 0) {
			return 'has-unread';                                                                                                // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	rooms: function () {                                                                                                  // 8
		return Template.instance().unreadRooms;                                                                              // 9
	}                                                                                                                     // 10
});                                                                                                                    // 1
Template.unreadRooms.onCreated(function () {                                                                           // 13
	var _this = this;                                                                                                     // 13
                                                                                                                       //
	return this.autorun(function () {                                                                                     // 14
		var query = {                                                                                                        // 15
			alert: true,                                                                                                        // 16
			open: true,                                                                                                         // 17
			hideUnreadStatus: {                                                                                                 // 18
				$ne: true                                                                                                          // 18
			}                                                                                                                   // 18
		};                                                                                                                   // 15
		return _this.unreadRooms = ChatSubscription.find(query, {                                                            // 21
			sort: {                                                                                                             // 21
				't': 1,                                                                                                            // 21
				'name': 1                                                                                                          // 21
			}                                                                                                                   // 21
		});                                                                                                                  // 21
	});                                                                                                                   // 22
});                                                                                                                    // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.accountBox.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.combined.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.chatRoomItem.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.channels.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.channelsAnonymous.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.createCombinedFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.directMessages.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.listChannelsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.listCombinedFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.listPrivateGroupsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.privateGroups.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.privateGroupsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.sideNav.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.starredRooms.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.toolbar.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.unreadRooms.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/template.userStatus.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/accountBox.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/combined.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/chatRoomItem.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/channels.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/channelsAnonymous.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/createCombinedFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/directMessages.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/listChannelsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/listCombinedFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/listPrivateGroupsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/privateGroups.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/privateGroupsFlex.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/sideNav.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/starredRooms.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/toolbar.js");
require("./node_modules/meteor/rocketchat:ui-sidenav/client/unreadRooms.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-sidenav'] = {};

})();
