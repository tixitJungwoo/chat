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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:ui-flextab":{"client":{"template.flexTabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/template.flexTabBar.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("flexTabBar");                                                                                    // 2
Template["flexTabBar"] = new Template("Template.flexTabBar", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "flex-tab-container border-component-color ", Spacebars.mustache(view.lookup("opened")) ];              // 7
    }                                                                                                                  // 8
  }, "\n\t\t", HTML.SECTION({                                                                                          // 9
    class: "flex-tab border-component-color"                                                                           // 10
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 11
    return {                                                                                                           // 12
      template: Spacebars.call(view.lookup("template")),                                                               // 13
      data: Spacebars.call(view.lookup("flexData"))                                                                    // 14
    };                                                                                                                 // 15
  }, function() {                                                                                                      // 16
    return Spacebars.include(function() {                                                                              // 17
      return Spacebars.call(Template.__dynamic);                                                                       // 18
    });                                                                                                                // 19
  }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                                  // 20
    class: "flex-tab-bar content-background-color",                                                                    // 21
    role: "toolbar"                                                                                                    // 22
  }, "\n\t\t\t", Blaze.Each(function() {                                                                               // 23
    return Spacebars.call(view.lookup("buttons"));                                                                     // 24
  }, function() {                                                                                                      // 25
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 26
      class: function() {                                                                                              // 27
        return [ "tab-button ", Spacebars.mustache(view.lookup("active")), " ", Spacebars.mustache(view.lookup("visible")), " ", Spacebars.mustache(view.lookup("class")) ];
      },                                                                                                               // 29
      title: function() {                                                                                              // 30
        return Spacebars.mustache(view.lookup("title"));                                                               // 31
      }                                                                                                                // 32
    }, "\n\t\t\t\t\t", HTML.BUTTON({                                                                                   // 33
      "aria-label": function() {                                                                                       // 34
        return Spacebars.mustache(view.lookup("title"));                                                               // 35
      }                                                                                                                // 36
    }, HTML.I({                                                                                                        // 37
      class: function() {                                                                                              // 38
        return Spacebars.mustache(view.lookup("icon"));                                                                // 39
      }                                                                                                                // 40
    })), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                                  // 41
  }), "\n\t\t"), "\n\t");                                                                                              // 42
}));                                                                                                                   // 43
                                                                                                                       // 44
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tabs":{"template.membersList.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/template.membersList.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("membersList");                                                                                   // 2
Template["membersList"] = new Template("Template.membersList", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", Spacebars.include(view.lookupTemplate("videoCall")), "\n\t\t", Blaze.If(function() {                    // 7
    return Spacebars.call(view.lookup("isGroupChat"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t\t", HTML.DIV({                                                                                    // 10
      class: "list-view animated"                                                                                      // 11
    }, "\n\t\t\t\t", Spacebars.With(function() {                                                                       // 12
      return Spacebars.call(view.lookup("roomUsers"));                                                                 // 13
    }, function() {                                                                                                    // 14
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 15
        class: "title"                                                                                                 // 16
      }, "\n\t\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                 // 17
        return Spacebars.mustache(view.lookup("_"), "Members_List");                                                   // 18
      })), "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("videoButtons")), "\n\t\t\t\t\t\t", Blaze.If(function() {
        return Spacebars.call(view.lookup("canAddUser"));                                                              // 20
      }, function() {                                                                                                  // 21
        return [ "\n\t\t\t\t\t\t\t", HTML.DIV({                                                                        // 22
          class: "control"                                                                                             // 23
        }, "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                            // 24
          class: "search-form"                                                                                         // 25
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 26
          class: "input-line search"                                                                                   // 27
        }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 28
          return {                                                                                                     // 29
            settings: Spacebars.call(view.lookup("autocompleteSettingsAddUser")),                                      // 30
            id: Spacebars.call("user-add-search"),                                                                     // 31
            class: Spacebars.call("search content-background-color"),                                                  // 32
            placeholder: Spacebars.call(view.lookup("tAddUsers"))                                                      // 33
          };                                                                                                           // 34
        }, function() {                                                                                                // 35
          return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                          // 36
        }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                                         // 37
          class: "icon-plus secondary-font-color"                                                                      // 38
        }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                   // 39
      }), "\n\t\t\t\t\t\t", HTML.P("\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                       // 40
        return Spacebars.call(view.lookup("loading"));                                                                 // 41
      }, function() {                                                                                                  // 42
        return [ "\n\t\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                             // 43
          return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_online_users", Spacebars.kw({         // 44
            total_showing: view.lookup("totalShowing"),                                                                // 45
            online: view.lookup("totalOnline"),                                                                        // 46
            total: view.lookup("total")                                                                                // 47
          })));                                                                                                        // 48
        }), "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                        // 49
          class: "see-all"                                                                                             // 50
        }, Blaze.View("lookup:seeAll", function() {                                                                    // 51
          return Spacebars.mustache(view.lookup("seeAll"));                                                            // 52
        })), "\n\t\t\t\t\t\t\t" ];                                                                                     // 53
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.UL({                                                // 54
        class: "list clearfix lines"                                                                                   // 55
      }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                       // 56
        return Spacebars.call(view.lookup("loading"));                                                                 // 57
      }, function() {                                                                                                  // 58
        return [ "\n\t\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t\t" ];            // 59
      }, function() {                                                                                                  // 60
        return [ "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                           // 61
          return Spacebars.call(view.lookup("users"));                                                                 // 62
        }, function() {                                                                                                // 63
          return [ "\n\t\t\t\t\t\t\t\t", HTML.LI({                                                                     // 64
            class: function() {                                                                                        // 65
              return [ "user-image user-card-room status-", Spacebars.mustache(view.lookup("status")) ];               // 66
            }                                                                                                          // 67
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 68
            "data-username": function() {                                                                              // 69
              return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                               // 70
            },                                                                                                         // 71
            tabindex: "0",                                                                                             // 72
            title: function() {                                                                                        // 73
              return Spacebars.mustache(view.lookup("displayName"));                                                   // 74
            }                                                                                                          // 75
          }, "\n\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                // 76
            return {                                                                                                   // 77
              username: Spacebars.call(Spacebars.dot(view.lookup("user"), "username"))                                 // 78
            };                                                                                                         // 79
          }, function() {                                                                                              // 80
            return Spacebars.include(view.lookupTemplate("avatar"));                                                   // 81
          }), "\n\t\t\t\t\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:displayName", function() {                           // 82
            return Spacebars.mustache(view.lookup("displayName"));                                                     // 83
          }), " ", Blaze.View("lookup:utcOffset", function() {                                                         // 84
            return Spacebars.mustache(view.lookup("utcOffset"));                                                       // 85
          })), "\n\t\t\t\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 86
            return Spacebars.call(view.lookup("muted"));                                                               // 87
          }, function() {                                                                                              // 88
            return [ "\n\t\t\t\t\t\t\t\t\t\t\t", HTML.I({                                                              // 89
              class: "icon-mute",                                                                                      // 90
              title: function() {                                                                                      // 91
                return Spacebars.mustache(view.lookup("_"), "User_muted");                                             // 92
              }                                                                                                        // 93
            }), "\n\t\t\t\t\t\t\t\t\t\t" ];                                                                            // 94
          }), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                    // 95
        }), "\n\t\t\t\t\t\t" ];                                                                                        // 96
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {                                                       // 97
        return Spacebars.call(view.lookup("hasMore"));                                                                 // 98
      }, function() {                                                                                                  // 99
        return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 100
          class: "button show-more-users"                                                                              // 101
        }, Blaze.View("lookup:_", function() {                                                                         // 102
          return Spacebars.mustache(view.lookup("_"), "Show_more");                                                    // 103
        })), "\n\t\t\t\t\t" ];                                                                                         // 104
      }), "\n\t\t\t\t" ];                                                                                              // 105
    }), "\n\t\t\t"), "\n\t\t" ];                                                                                       // 106
  }), "\n\t\t", HTML.DIV({                                                                                             // 107
    class: function() {                                                                                                // 108
      return [ "user-view animated", Blaze.Unless(function() {                                                         // 109
        return Spacebars.call(view.lookup("showUserInfo"));                                                            // 110
      }, function() {                                                                                                  // 111
        return " animated-hidden";                                                                                     // 112
      }) ];                                                                                                            // 113
    }                                                                                                                  // 114
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 115
    return Spacebars.dataMustache(view.lookup("userInfoDetail"));                                                      // 116
  }, function() {                                                                                                      // 117
    return Spacebars.include(view.lookupTemplate("userInfo"));                                                         // 118
  }), "\n\t\t"), "\n\t");                                                                                              // 119
}));                                                                                                                   // 120
                                                                                                                       // 121
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.messageSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/template.messageSearch.js                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("messageSearch");                                                                                 // 2
Template["messageSearch"] = new Template("Template.messageSearch", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view search-messages-list"                                                                            // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "title"                                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Search_Messages");                                                    // 12
  })), "\n\t\t\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                        // 13
    return Spacebars.mustache(view.lookup("_"), "You_can_search_using_RegExp_eg");                                     // 14
  }), " ", HTML.Raw('<code class="code-colors inline">/^text$/i</code>')), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({         // 15
    class: "control"                                                                                                   // 16
  }, "\n\t\t\t\t", HTML.FORM({                                                                                         // 17
    class: "search-form",                                                                                              // 18
    role: "form"                                                                                                       // 19
  }, "\n\t\t\t\t\t", HTML.DIV({                                                                                        // 20
    class: "input-line search"                                                                                         // 21
  }, "\n\t\t\t\t\t\t", HTML.INPUT({                                                                                    // 22
    type: "text",                                                                                                      // 23
    id: "message-search",                                                                                              // 24
    class: "search content-background-color",                                                                          // 25
    placeholder: function() {                                                                                          // 26
      return Spacebars.mustache(view.lookup("tSearchMessages"));                                                       // 27
    },                                                                                                                 // 28
    autocomplete: "off"                                                                                                // 29
  }), "\n\t\t\t\t\t\t", HTML.Raw('<i class="icon-search secondary-font-color"></i>'), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentSearchTerm"));                                                           // 31
  }, function() {                                                                                                      // 32
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                                   // 33
      return Spacebars.call(view.lookup("searchResultMessages"));                                                      // 34
    }, function() {                                                                                                    // 35
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                             // 36
        return Spacebars.mustache(view.lookup("_"), "No_results_found");                                               // 37
      })), "\n\t\t\t\t" ];                                                                                             // 38
    }), "\n\t\t\t" ];                                                                                                  // 39
  }), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                                                       // 40
    return Spacebars.call(view.lookup("currentSearchTerm"));                                                           // 41
  }, function() {                                                                                                      // 42
    return [ "\n\t\t\t", Blaze.If(function() {                                                                         // 43
      return Spacebars.call(view.lookup("searchResultMessages"));                                                      // 44
    }, function() {                                                                                                    // 45
      return [ "\n\t\t\t\t", HTML.UL({                                                                                 // 46
        class: "list clearfix"                                                                                         // 47
      }, "\n\t\t\t\t\t", Blaze.Each(function() {                                                                       // 48
        return Spacebars.call(view.lookup("searchResultMessages"));                                                    // 49
      }, function() {                                                                                                  // 50
        return [ "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 51
          return Spacebars.dataMustache(view.lookup("nrrargs"), "message", view.lookup("message"));                    // 52
        }, function() {                                                                                                // 53
          return Spacebars.include(view.lookupTemplate("nrr"), function() {                                            // 54
            return null;                                                                                               // 55
          });                                                                                                          // 56
        }), "\n\t\t\t\t\t" ];                                                                                          // 57
      }), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                                           // 58
        return Spacebars.call(view.lookup("hasMore"));                                                                 // 59
      }, function() {                                                                                                  // 60
        return [ "\n\t\t\t\t\t", HTML.DIV({                                                                            // 61
          class: "load-more"                                                                                           // 62
        }, "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];       // 63
      }), "\n\t\t\t" ];                                                                                                // 64
    }), "\n\t\t" ];                                                                                                    // 65
  }), "\n\t");                                                                                                         // 66
}));                                                                                                                   // 67
                                                                                                                       // 68
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.uploadedFilesList.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/template.uploadedFilesList.js                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("uploadedFilesList");                                                                             // 2
Template["uploadedFilesList"] = new Template("Template.uploadedFilesList", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "list-view uploaded-files-list"                                                                             // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                            // 9
    class: "title"                                                                                                     // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                         // 11
    return Spacebars.mustache(view.lookup("_"), "Room_uploaded_file_list");                                            // 12
  })), "\n\t\t\t"), "\n\t\t\t", HTML.UL({                                                                              // 13
    class: "list clearfix lines"                                                                                       // 14
  }, "\n\t\t\t\t", Blaze.Each(function() {                                                                             // 15
    return Spacebars.call(view.lookup("files"));                                                                       // 16
  }, function() {                                                                                                      // 17
    return [ "\n\t\t\t\t\t", HTML.LI("\n\t\t\t\t\t\t", Blaze.If(function() {                                           // 18
      return Spacebars.call(view.lookup("canDelete"));                                                                 // 19
    }, function() {                                                                                                    // 20
      return [ "\n\t\t\t\t\t\t", HTML.I({                                                                              // 21
        class: "icon-trash file-delete"                                                                                // 22
      }), "\n\t\t\t\t\t\t" ];                                                                                          // 23
    }), "\n\t\t\t\t\t\t", HTML.A({                                                                                     // 24
      title: function() {                                                                                              // 25
        return Spacebars.mustache(view.lookup("escapedName"));                                                         // 26
      },                                                                                                               // 27
      href: function() {                                                                                               // 28
        return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("url"));                                      // 29
      },                                                                                                               // 30
      target: "_blank",                                                                                                // 31
      class: "file-download",                                                                                          // 32
      download: ""                                                                                                     // 33
    }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                    // 34
      class: "icon-download file-download"                                                                             // 35
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", HTML.A({                                                                  // 36
      title: function() {                                                                                              // 37
        return Spacebars.mustache(view.lookup("escapedName"));                                                         // 38
      },                                                                                                               // 39
      href: function() {                                                                                               // 40
        return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("url"));                                      // 41
      },                                                                                                               // 42
      target: "_blank",                                                                                                // 43
      class: function() {                                                                                              // 44
        return [ "room-file-item file-name ", Spacebars.mustache(view.lookup("customClassForFileType")) ];             // 45
      }                                                                                                                // 46
    }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                                    // 47
      class: function() {                                                                                              // 48
        return Spacebars.mustache(view.lookup("getFileIcon"), view.lookup("type"));                                    // 49
      }                                                                                                                // 50
    }), "\n\t\t\t\t\t\t\t", HTML.P(Blaze.View("lookup:name", function() {                                              // 51
      return Spacebars.mustache(view.lookup("name"));                                                                  // 52
    })), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                           // 53
  }), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                   // 54
    return Spacebars.call(view.lookup("hasMore"));                                                                     // 55
  }, function() {                                                                                                      // 56
    return [ "\n\t\t\t\t", HTML.DIV({                                                                                  // 57
      class: "load-more"                                                                                               // 58
    }, "\n\t\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t\t"), "\n\t\t\t" ];                 // 59
  }), "\n\t\t\t", Blaze.If(function() {                                                                                // 60
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                               // 61
  }, function() {                                                                                                      // 62
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                                   // 63
      return Spacebars.call(view.lookup("hasFiles"));                                                                  // 64
    }, function() {                                                                                                    // 65
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                             // 66
        return Spacebars.mustache(view.lookup("_"), "Room_uploaded_file_list_empty");                                  // 67
      })), "\n\t\t\t\t" ];                                                                                             // 68
    }), "\n\t\t\t" ];                                                                                                  // 69
  }), "\n\t\t"), "\n\t");                                                                                              // 70
}));                                                                                                                   // 71
                                                                                                                       // 72
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/template.userEdit.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userEdit");                                                                                      // 2
Template["userEdit"] = new Template("Template.userEdit", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Unless(function() {                                                                                     // 5
    return Spacebars.call(view.lookup("canEditOrAdd"));                                                                // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.P({                                                                                        // 8
      class: "secondary-font-color"                                                                                    // 9
    }, Blaze.View("lookup:_", function() {                                                                             // 10
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 11
    })), "\n\t" ];                                                                                                     // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t", HTML.DIV({                                                                                      // 14
      class: "about clearfix"                                                                                          // 15
    }, "\n\t\t\t", HTML.FORM({                                                                                         // 16
      class: "edit-form",                                                                                              // 17
      autocomplete: "off"                                                                                              // 18
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 19
      return Spacebars.call(view.lookup("user"));                                                                      // 20
    }, function() {                                                                                                    // 21
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:user.name", function() {                                     // 22
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name"));                                         // 23
      })), "\n\t\t\t\t" ];                                                                                             // 24
    }, function() {                                                                                                    // 25
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                             // 26
        return Spacebars.mustache(view.lookup("_"), "Add_User");                                                       // 27
      })), "\n\t\t\t\t" ];                                                                                             // 28
    }), "\n\t\t\t\t", HTML.DIV({                                                                                       // 29
      class: "input-line"                                                                                              // 30
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 31
      for: "name"                                                                                                      // 32
    }, Blaze.View("lookup:_", function() {                                                                             // 33
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 34
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 35
      type: "text",                                                                                                    // 36
      id: "name",                                                                                                      // 37
      autocomplete: "off",                                                                                             // 38
      value: function() {                                                                                              // 39
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "name"));                                         // 40
      }                                                                                                                // 41
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 42
      class: "input-line"                                                                                              // 43
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 44
      for: "username"                                                                                                  // 45
    }, Blaze.View("lookup:_", function() {                                                                             // 46
      return Spacebars.mustache(view.lookup("_"), "Username");                                                         // 47
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 48
      type: "text",                                                                                                    // 49
      id: "username",                                                                                                  // 50
      autocomplete: "off",                                                                                             // 51
      value: function() {                                                                                              // 52
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "username"));                                     // 53
      }                                                                                                                // 54
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 55
      class: "input-line"                                                                                              // 56
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 57
      for: "email"                                                                                                     // 58
    }, Blaze.View("lookup:_", function() {                                                                             // 59
      return Spacebars.mustache(view.lookup("_"), "Email");                                                            // 60
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 61
      type: "email",                                                                                                   // 62
      id: "email",                                                                                                     // 63
      autocomplete: "off",                                                                                             // 64
      value: function() {                                                                                              // 65
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "emails", "0", "address"));                       // 66
      }                                                                                                                // 67
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 68
      class: "input-line"                                                                                              // 69
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 70
      for: "verified"                                                                                                  // 71
    }, "\n\t\t\t\t\t\t", HTML.INPUT({                                                                                  // 72
      type: "checkbox",                                                                                                // 73
      id: "verified",                                                                                                  // 74
      value: "1",                                                                                                      // 75
      checked: function() {                                                                                            // 76
        return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "emails", "0", "verified"));                      // 77
      }                                                                                                                // 78
    }), "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                          // 79
      return Spacebars.mustache(view.lookup("_"), "Verified");                                                         // 80
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", Blaze.If(function() {                                            // 81
      return Spacebars.dataMustache(view.lookup("hasPermission"), "edit-other-user-password");                         // 82
    }, function() {                                                                                                    // 83
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 84
        class: "input-line"                                                                                            // 85
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 86
        for: "password"                                                                                                // 87
      }, Blaze.View("lookup:_", function() {                                                                           // 88
        return Spacebars.mustache(view.lookup("_"), "Password");                                                       // 89
      })), "\n\t\t\t\t\t\t", HTML.INPUT({                                                                              // 90
        type: "password",                                                                                              // 91
        id: "password",                                                                                                // 92
        autocomplete: "off",                                                                                           // 93
        value: ""                                                                                                      // 94
      }), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                              // 95
        id: "randomPassword",                                                                                          // 96
        class: "button"                                                                                                // 97
      }, Blaze.View("lookup:_", function() {                                                                           // 98
        return Spacebars.mustache(view.lookup("_"), "Random");                                                         // 99
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                 // 100
        class: "input-line"                                                                                            // 101
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 102
        for: "changePassword"                                                                                          // 103
      }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 104
        type: "checkbox",                                                                                              // 105
        id: "changePassword",                                                                                          // 106
        value: "1",                                                                                                    // 107
        checked: function() {                                                                                          // 108
          return Spacebars.mustache(view.lookup("requirePasswordChange"));                                             // 109
        }                                                                                                              // 110
      }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                      // 111
        return Spacebars.mustache(view.lookup("_"), "Require_password_change");                                        // 112
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                          // 113
    }), "\n\t\t\t\t", Blaze.Unless(function() {                                                                        // 114
      return Spacebars.call(view.lookup("user"));                                                                      // 115
    }, function() {                                                                                                    // 116
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                              // 117
        class: "input-line"                                                                                            // 118
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 119
        for: "role"                                                                                                    // 120
      }, Blaze.View("lookup:_", function() {                                                                           // 121
        return Spacebars.mustache(view.lookup("_"), "Role");                                                           // 122
      })), "\n\t\t\t\t\t\t", HTML.SELECT({                                                                             // 123
        id: "role"                                                                                                     // 124
      }, "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                                   // 125
        return Spacebars.call(view.lookup("role"));                                                                    // 126
      }, function() {                                                                                                  // 127
        return [ "\n\t\t\t\t\t\t\t\t", HTML.OPTION({                                                                   // 128
          value: function() {                                                                                          // 129
            return Spacebars.mustache(view.lookup("_id"));                                                             // 130
          },                                                                                                           // 131
          selected: function() {                                                                                       // 132
            return Spacebars.mustache(view.lookup("selectUserRole"));                                                  // 133
          }                                                                                                            // 134
        }, Blaze.View("lookup:name", function() {                                                                      // 135
          return Spacebars.mustache(view.lookup("name"));                                                              // 136
        })), "\n\t\t\t\t\t\t\t" ];                                                                                     // 137
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                               // 138
        class: "input-line"                                                                                            // 139
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 140
        for: "joinDefaultChannels"                                                                                     // 141
      }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 142
        type: "checkbox",                                                                                              // 143
        id: "joinDefaultChannels",                                                                                     // 144
        value: "1",                                                                                                    // 145
        checked: "true"                                                                                                // 146
      }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                      // 147
        return Spacebars.mustache(view.lookup("_"), "Join_default_channels");                                          // 148
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                               // 149
        class: "input-line"                                                                                            // 150
      }, "\n\t\t\t\t\t\t", HTML.LABEL({                                                                                // 151
        for: "sendWelcomeEmail"                                                                                        // 152
      }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 153
        type: "checkbox",                                                                                              // 154
        id: "sendWelcomeEmail",                                                                                        // 155
        value: "1",                                                                                                    // 156
        checked: "true"                                                                                                // 157
      }), "\n\t\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                      // 158
        return Spacebars.mustache(view.lookup("_"), "Send_welcome_email");                                             // 159
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                          // 160
    }), "\n\t\t\t\t", HTML.NAV("\n\t\t\t\t\t", HTML.BUTTON({                                                           // 161
      class: "button button-block cancel",                                                                             // 162
      type: "button"                                                                                                   // 163
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 164
      return Spacebars.mustache(view.lookup("_"), "Cancel");                                                           // 165
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 166
      class: "button button-block primary save"                                                                        // 167
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 168
      return Spacebars.mustache(view.lookup("_"), "Save");                                                             // 169
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                             // 170
  });                                                                                                                  // 171
}));                                                                                                                   // 172
                                                                                                                       // 173
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.userInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/template.userInfo.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("userInfo");                                                                                      // 2
Template["userInfo"] = new Template("Template.userInfo", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("isLoading"));                                                                   // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t" ];                                    // 8
  }, function() {                                                                                                      // 9
    return [ "\n\t\t", Blaze.If(function() {                                                                           // 10
      return Spacebars.call(view.lookup("editingUser"));                                                               // 11
    }, function() {                                                                                                    // 12
      return [ "\n\t\t\t", Blaze._TemplateWith(function() {                                                            // 13
        return Spacebars.dataMustache(view.lookup("userToEdit"));                                                      // 14
      }, function() {                                                                                                  // 15
        return Spacebars.include(view.lookupTemplate("userEdit"));                                                     // 16
      }), "\n\t\t" ];                                                                                                  // 17
    }, function() {                                                                                                    // 18
      return [ "\n\t\t\t", Spacebars.With(function() {                                                                 // 19
        return Spacebars.call(view.lookup("user"));                                                                    // 20
      }, function() {                                                                                                  // 21
        return [ "\n\t\t\t", HTML.DIV({                                                                                // 22
          class: "about clearfix"                                                                                      // 23
        }, "\n\t\t\t\t", HTML.DIV({                                                                                    // 24
          class: "thumb"                                                                                               // 25
        }, "\n\t\t\t\t\t", Blaze._TemplateWith(function() {                                                            // 26
          return {                                                                                                     // 27
            username: Spacebars.call(view.lookup("username"))                                                          // 28
          };                                                                                                           // 29
        }, function() {                                                                                                // 30
          return Spacebars.include(view.lookupTemplate("avatar"));                                                     // 31
        }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                    // 32
          class: "info"                                                                                                // 33
        }, "\n\t\t\t\t\t", HTML.H3({                                                                                   // 34
          title: function() {                                                                                          // 35
            return Spacebars.mustache(view.lookup("name"));                                                            // 36
          }                                                                                                            // 37
        }, HTML.I({                                                                                                    // 38
          class: function() {                                                                                          // 39
            return [ "status-", Spacebars.mustache(view.lookup("status")) ];                                           // 40
          }                                                                                                            // 41
        }), " ", Blaze.View("lookup:name", function() {                                                                // 42
          return Spacebars.mustache(view.lookup("name"));                                                              // 43
        })), "\n\t\t\t\t\t", HTML.P({                                                                                  // 44
          class: "secondary-font-color"                                                                                // 45
        }, "@", Blaze.View("lookup:username", function() {                                                             // 46
          return Spacebars.mustache(view.lookup("username"));                                                          // 47
        })), "\n\t\t\t\t\t", HTML.P({                                                                                  // 48
          class: "secondary-font-color"                                                                                // 49
        }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                   // 50
          return Spacebars.call(view.lookup("roleTags"));                                                              // 51
        }, function() {                                                                                                // 52
          return [ "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                     // 53
            class: "role-tag",                                                                                         // 54
            "data-role": function() {                                                                                  // 55
              return Spacebars.mustache(view.lookup("description"));                                                   // 56
            }                                                                                                          // 57
          }, Blaze.View("lookup:description", function() {                                                             // 58
            return Spacebars.mustache(view.lookup("description"));                                                     // 59
          })), "\n\t\t\t\t\t\t" ];                                                                                     // 60
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", Blaze.If(function() {                                                     // 61
          return Spacebars.call(view.lookup("utc"));                                                                   // 62
        }, function() {                                                                                                // 63
          return HTML.P({                                                                                              // 64
            class: "secondary-font-color"                                                                              // 65
          }, HTML.I({                                                                                                  // 66
            class: "icon-clock"                                                                                        // 67
          }), Blaze.View("lookup:userTime", function() {                                                               // 68
            return Spacebars.mustache(view.lookup("userTime"));                                                        // 69
          }), " (UTC ", Blaze.View("lookup:utc", function() {                                                          // 70
            return Spacebars.mustache(view.lookup("utc"));                                                             // 71
          }), ")");                                                                                                    // 72
        }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                      // 73
          return Spacebars.dataMustache(view.lookup("hasPermission"), "view-full-other-user-info");                    // 74
        }, function() {                                                                                                // 75
          return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                             // 76
            return Spacebars.call(view.lookup("hasEmails"));                                                           // 77
          }, function() {                                                                                              // 78
            return [ "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                       // 79
              return Spacebars.call(view.lookup("emails"));                                                            // 80
            }, function() {                                                                                            // 81
              return [ " ", HTML.P({                                                                                   // 82
                class: "secondary-font-color"                                                                          // 83
              }, HTML.I({                                                                                              // 84
                class: "icon-mail"                                                                                     // 85
              }), " ", Blaze.View("lookup:address", function() {                                                       // 86
                return Spacebars.mustache(view.lookup("address"));                                                     // 87
              }), Blaze.If(function() {                                                                                // 88
                return Spacebars.call(view.lookup("verified"));                                                        // 89
              }, function() {                                                                                          // 90
                return [ HTML.CharRef({                                                                                // 91
                  html: "&nbsp;",                                                                                      // 92
                  str: " "                                                                                             // 93
                }), HTML.I({                                                                                           // 94
                  class: "icon-ok success-color"                                                                       // 95
                }) ];                                                                                                  // 96
              })), " " ];                                                                                              // 97
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 98
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 99
            return Spacebars.call(view.lookup("hasPhone"));                                                            // 100
          }, function() {                                                                                              // 101
            return [ "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                       // 102
              return Spacebars.call(view.lookup("phone"));                                                             // 103
            }, function() {                                                                                            // 104
              return [ " ", HTML.P({                                                                                   // 105
                class: "secondary-font-color"                                                                          // 106
              }, HTML.I({                                                                                              // 107
                class: "icon-phone"                                                                                    // 108
              }), " ", Blaze.View("lookup:phoneNumber", function() {                                                   // 109
                return Spacebars.mustache(view.lookup("phoneNumber"));                                                 // 110
              })), " " ];                                                                                              // 111
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 112
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 113
            return Spacebars.call(view.lookup("lastLogin"));                                                           // 114
          }, function() {                                                                                              // 115
            return [ " ", HTML.P({                                                                                     // 116
              class: "secondary-font-color"                                                                            // 117
            }, HTML.I({                                                                                                // 118
              class: "icon-calendar"                                                                                   // 119
            }), " ", Blaze.View("lookup:_", function() {                                                               // 120
              return Spacebars.mustache(view.lookup("_"), "Created_at");                                               // 121
            }), ": ", Blaze.View("lookup:createdAt", function() {                                                      // 122
              return Spacebars.mustache(view.lookup("createdAt"));                                                     // 123
            })), " " ];                                                                                                // 124
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 125
            return Spacebars.call(view.lookup("lastLogin"));                                                           // 126
          }, function() {                                                                                              // 127
            return [ " ", HTML.P({                                                                                     // 128
              class: "secondary-font-color"                                                                            // 129
            }, HTML.I({                                                                                                // 130
              class: "icon-calendar"                                                                                   // 131
            }), " ", Blaze.View("lookup:_", function() {                                                               // 132
              return Spacebars.mustache(view.lookup("_"), "Last_login");                                               // 133
            }), ": ", Blaze.View("lookup:lastLogin", function() {                                                      // 134
              return Spacebars.mustache(view.lookup("lastLogin"));                                                     // 135
            })), " " ];                                                                                                // 136
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 137
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "facebook", "id"));                           // 138
          }, function() {                                                                                              // 139
            return [ " ", HTML.P({                                                                                     // 140
              class: "secondary-font-color"                                                                            // 141
            }, HTML.I({                                                                                                // 142
              class: "icon-facebook"                                                                                   // 143
            }), HTML.A({                                                                                               // 144
              href: function() {                                                                                       // 145
                return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "facebook", "link"));                 // 146
              },                                                                                                       // 147
              target: "_blank"                                                                                         // 148
            }, Blaze.View("lookup:services.facebook.name", function() {                                                // 149
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "facebook", "name"));                   // 150
            }))), " " ];                                                                                               // 151
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 152
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "github", "id"));                             // 153
          }, function() {                                                                                              // 154
            return [ " ", HTML.P({                                                                                     // 155
              class: "secondary-font-color"                                                                            // 156
            }, HTML.I({                                                                                                // 157
              class: "icon-github-circled"                                                                             // 158
            }), HTML.A({                                                                                               // 159
              href: function() {                                                                                       // 160
                return [ "https://www.github.com/", Spacebars.mustache(Spacebars.dot(view.lookup("services"), "github", "username")) ];
              },                                                                                                       // 162
              target: "_blank"                                                                                         // 163
            }, Blaze.View("lookup:services.github.username", function() {                                              // 164
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "github", "username"));                 // 165
            }))), " " ];                                                                                               // 166
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 167
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "gitlab", "id"));                             // 168
          }, function() {                                                                                              // 169
            return [ " ", HTML.P({                                                                                     // 170
              class: "secondary-font-color"                                                                            // 171
            }, HTML.I({                                                                                                // 172
              class: "icon-gitlab"                                                                                     // 173
            }), Blaze.View("lookup:services.gitlab.username", function() {                                             // 174
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "gitlab", "username"));                 // 175
            })), " " ];                                                                                                // 176
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 177
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "google", "id"));                             // 178
          }, function() {                                                                                              // 179
            return [ " ", HTML.P({                                                                                     // 180
              class: "secondary-font-color"                                                                            // 181
            }, HTML.I({                                                                                                // 182
              class: "icon-gplus"                                                                                      // 183
            }), HTML.A({                                                                                               // 184
              href: function() {                                                                                       // 185
                return [ "https://plus.google.com/", Spacebars.mustache(Spacebars.dot(view.lookup("services"), "google", "id")) ];
              },                                                                                                       // 187
              target: "_blank"                                                                                         // 188
            }, Blaze.View("lookup:services.google.name", function() {                                                  // 189
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "google", "name"));                     // 190
            }))), " " ];                                                                                               // 191
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 192
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "linkedin", "id"));                           // 193
          }, function() {                                                                                              // 194
            return [ " ", HTML.P({                                                                                     // 195
              class: "secondary-font-color"                                                                            // 196
            }, HTML.I({                                                                                                // 197
              class: "icon-linkedin"                                                                                   // 198
            }), HTML.A({                                                                                               // 199
              href: function() {                                                                                       // 200
                return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "linkedin", "publicProfileUrl"));     // 201
              },                                                                                                       // 202
              target: "_blank"                                                                                         // 203
            }, Blaze.View("lookup:linkedinUsername", function() {                                                      // 204
              return Spacebars.mustache(view.lookup("linkedinUsername"));                                              // 205
            }))), " " ];                                                                                               // 206
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 207
            return Spacebars.call(Spacebars.dot(view.lookup("servicesMeteor"), "id"));                                 // 208
          }, function() {                                                                                              // 209
            return [ " ", HTML.P({                                                                                     // 210
              class: "secondary-font-color"                                                                            // 211
            }, HTML.I({                                                                                                // 212
              class: "icon-meteor"                                                                                     // 213
            }), Blaze.View("lookup:servicesMeteor.username", function() {                                              // 214
              return Spacebars.mustache(Spacebars.dot(view.lookup("servicesMeteor"), "username"));                     // 215
            })), " " ];                                                                                                // 216
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 217
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "twitter", "id"));                            // 218
          }, function() {                                                                                              // 219
            return [ " ", HTML.P({                                                                                     // 220
              class: "secondary-font-color"                                                                            // 221
            }, HTML.I({                                                                                                // 222
              class: "icon-twitter"                                                                                    // 223
            }), HTML.A({                                                                                               // 224
              href: function() {                                                                                       // 225
                return [ "https://twitter.com/", Spacebars.mustache(Spacebars.dot(view.lookup("services"), "twitter", "screenName")) ];
              },                                                                                                       // 227
              target: "_blank"                                                                                         // 228
            }, Blaze.View("lookup:services.twitter.screenName", function() {                                           // 229
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "twitter", "screenName"));              // 230
            }))), " " ];                                                                                               // 231
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 232
            return Spacebars.call(Spacebars.dot(view.lookup("services"), "wordpress", "id"));                          // 233
          }, function() {                                                                                              // 234
            return [ " ", HTML.P({                                                                                     // 235
              class: "secondary-font-color"                                                                            // 236
            }, HTML.I({                                                                                                // 237
              class: "icon-wordpress"                                                                                  // 238
            }), Blaze.View("lookup:services.wordpress.user_login", function() {                                        // 239
              return Spacebars.mustache(Spacebars.dot(view.lookup("services"), "wordpress", "user_login"));            // 240
            })), " " ];                                                                                                // 241
          }), "\n\t\t\t\t\t" ];                                                                                        // 242
        }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t" ];                                                                  // 243
      }), "\n\t\t\t", HTML.NAV("\n\t\t\t\t", Blaze.Unless(function() {                                                 // 244
        return Spacebars.dataMustache(view.lookup("isSelf"), Spacebars.dot(view.lookup("user"), "username"));          // 245
      }, function() {                                                                                                  // 246
        return [ "\n\t\t\t\t\t", Blaze.If(function() {                                                                 // 247
          return Spacebars.call(Spacebars.dot(view.lookup("user"), "active"));                                         // 248
        }, function() {                                                                                                // 249
          return [ "\n\t\t\t\t\t\t", Spacebars.include(view.lookupTemplate("videoButtons")), "\n\t\t\t\t\t" ];         // 250
        }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                      // 251
          return Spacebars.call(view.lookup("isDirect"));                                                              // 252
        }, function() {                                                                                                // 253
          return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                             // 254
            return Spacebars.call(view.lookup("isBlocker"));                                                           // 255
          }, function() {                                                                                              // 256
            return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 257
              class: "button button-block tertiary unblock-user"                                                       // 258
            }, HTML.SPAN(HTML.I({                                                                                      // 259
              class: "icon-block"                                                                                      // 260
            }), " ", Blaze.View("lookup:_", function() {                                                               // 261
              return Spacebars.mustache(view.lookup("_"), "Unblock_User");                                             // 262
            }))), "\n\t\t\t\t\t\t" ];                                                                                  // 263
          }, function() {                                                                                              // 264
            return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 265
              class: "button button-block danger block-user"                                                           // 266
            }, HTML.SPAN(HTML.I({                                                                                      // 267
              class: "icon-block"                                                                                      // 268
            }), " ", Blaze.View("lookup:_", function() {                                                               // 269
              return Spacebars.mustache(view.lookup("_"), "Block_User");                                               // 270
            }))), "\n\t\t\t\t\t\t" ];                                                                                  // 271
          }), "\n\t\t\t\t\t" ];                                                                                        // 272
        }), "\n\n\t\t\t\t\t", Blaze.If(function() {                                                                    // 273
          return Spacebars.call(view.lookup("showAll"));                                                               // 274
        }, function() {                                                                                                // 275
          return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                             // 276
            return Spacebars.dataMustache(view.lookup("canDirectMessage"), Spacebars.dot(view.lookup("user"), "username"));
          }, function() {                                                                                              // 278
            return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 279
              class: "button button-block primary pvt-msg"                                                             // 280
            }, HTML.SPAN(HTML.I({                                                                                      // 281
              class: "icon-chat"                                                                                       // 282
            }), " ", Blaze.View("lookup:_", function() {                                                               // 283
              return Spacebars.mustache(view.lookup("_"), "Conversation");                                             // 284
            }))), " " ];                                                                                               // 285
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 286
            return Spacebars.call(view.lookup("canSetOwner"));                                                         // 287
          }, function() {                                                                                              // 288
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 289
              return Spacebars.call(view.lookup("isOwner"));                                                           // 290
            }, function() {                                                                                            // 291
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 292
                class: "button button-block danger unset-owner"                                                        // 293
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 294
                return Spacebars.mustache(view.lookup("_"), "Remove_as_owner");                                        // 295
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 296
            }, function() {                                                                                            // 297
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 298
                class: "button button-block tertiary set-owner"                                                        // 299
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 300
                return Spacebars.mustache(view.lookup("_"), "Set_as_owner");                                           // 301
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 302
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 303
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 304
            return Spacebars.call(view.lookup("canSetModerator"));                                                     // 305
          }, function() {                                                                                              // 306
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 307
              return Spacebars.call(view.lookup("isModerator"));                                                       // 308
            }, function() {                                                                                            // 309
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 310
                class: "button button-block danger unset-moderator"                                                    // 311
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 312
                return Spacebars.mustache(view.lookup("_"), "Remove_as_moderator");                                    // 313
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 314
            }, function() {                                                                                            // 315
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 316
                class: "button button-block tertiary set-moderator"                                                    // 317
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 318
                return Spacebars.mustache(view.lookup("_"), "Set_as_moderator");                                       // 319
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 320
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 321
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 322
            return Spacebars.call(view.lookup("canMuteUser"));                                                         // 323
          }, function() {                                                                                              // 324
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 325
              return Spacebars.call(view.lookup("userMuted"));                                                         // 326
            }, function() {                                                                                            // 327
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 328
                class: "button button-block secondary unmute-user primary"                                             // 329
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 330
                return Spacebars.mustache(view.lookup("_"), "Unmute_user");                                            // 331
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 332
            }, function() {                                                                                            // 333
              return [ "\n\t\t\t\t\t\t\t\t", HTML.BUTTON({                                                             // 334
                class: "button button-block danger mute-user"                                                          // 335
              }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                         // 336
                return Spacebars.mustache(view.lookup("_"), "Mute_user");                                              // 337
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 338
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 339
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 340
            return Spacebars.call(view.lookup("canRemoveUser"));                                                       // 341
          }, function() {                                                                                              // 342
            return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 343
              class: "button button-block danger remove-user"                                                          // 344
            }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                           // 345
              return Spacebars.mustache(view.lookup("_"), "Remove_from_room");                                         // 346
            }))), "\n\t\t\t\t\t\t" ];                                                                                  // 347
          }), "\n\t\t\t\t\t" ];                                                                                        // 348
        }), "\n\n\t\t\t\t\t", Blaze.Unless(function() {                                                                // 349
          return Spacebars.call(view.lookup("hideAdminControls"));                                                     // 350
        }, function() {                                                                                                // 351
          return [ "\n\t\t\t\t\t\t", Blaze.If(function() {                                                             // 352
            return Spacebars.dataMustache(view.lookup("hasPermission"), "edit-other-user-info");                       // 353
          }, function() {                                                                                              // 354
            return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 355
              class: "button button-block primary edit-user"                                                           // 356
            }, HTML.SPAN(HTML.I({                                                                                      // 357
              class: "icon-edit"                                                                                       // 358
            }), " ", Blaze.View("lookup:_", function() {                                                               // 359
              return Spacebars.mustache(view.lookup("_"), "Edit");                                                     // 360
            }))), "\n\t\t\t\t\t\t" ];                                                                                  // 361
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 362
            return Spacebars.dataMustache(view.lookup("hasPermission"), "assign-admin-role");                          // 363
          }, function() {                                                                                              // 364
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 365
              return Spacebars.call(view.lookup("hasAdminRole"));                                                      // 366
            }, function() {                                                                                            // 367
              return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 368
                class: "button button-block danger remove-admin"                                                       // 369
              }, HTML.SPAN(HTML.I({                                                                                    // 370
                class: "icon-shield"                                                                                   // 371
              }), " ", Blaze.View("lookup:_", function() {                                                             // 372
                return Spacebars.mustache(view.lookup("_"), "Remove_Admin");                                           // 373
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 374
            }, function() {                                                                                            // 375
              return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 376
                class: "button button-block secondary make-admin"                                                      // 377
              }, HTML.SPAN(HTML.I({                                                                                    // 378
                class: "icon-shield"                                                                                   // 379
              }), " ", Blaze.View("lookup:_", function() {                                                             // 380
                return Spacebars.mustache(view.lookup("_"), "Make_Admin");                                             // 381
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 382
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 383
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 384
            return Spacebars.dataMustache(view.lookup("hasPermission"), "edit-other-user-active-status");              // 385
          }, function() {                                                                                              // 386
            return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 387
              return Spacebars.call(view.lookup("active"));                                                            // 388
            }, function() {                                                                                            // 389
              return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 390
                class: "button button-block danger deactivate"                                                         // 391
              }, HTML.SPAN(HTML.I({                                                                                    // 392
                class: "icon-block"                                                                                    // 393
              }), " ", Blaze.View("lookup:_", function() {                                                             // 394
                return Spacebars.mustache(view.lookup("_"), "Deactivate");                                             // 395
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 396
            }, function() {                                                                                            // 397
              return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 398
                class: "button button-block secondary activate"                                                        // 399
              }, HTML.SPAN(HTML.I({                                                                                    // 400
                class: "icon-ok-circled"                                                                               // 401
              }), " ", Blaze.View("lookup:_", function() {                                                             // 402
                return Spacebars.mustache(view.lookup("_"), "Activate");                                               // 403
              }))), "\n\t\t\t\t\t\t\t" ];                                                                              // 404
            }), "\n\t\t\t\t\t\t" ];                                                                                    // 405
          }), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                  // 406
            return Spacebars.dataMustache(view.lookup("hasPermission"), "delete-user");                                // 407
          }, function() {                                                                                              // 408
            return [ "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                   // 409
              class: "button button-block danger delete"                                                               // 410
            }, HTML.SPAN(HTML.I({                                                                                      // 411
              class: "icon-trash"                                                                                      // 412
            }), " ", Blaze.View("lookup:_", function() {                                                               // 413
              return Spacebars.mustache(view.lookup("_"), "Delete");                                                   // 414
            }))), "\n\t\t\t\t\t\t" ];                                                                                  // 415
          }), "\n\t\t\t\t\t" ];                                                                                        // 416
        }), "\n\t\t\t\t" ];                                                                                            // 417
      }), "\n\n\t\t\t\t", Blaze.If(function() {                                                                        // 418
        return Spacebars.call(view.lookup("showAll"));                                                                 // 419
      }, function() {                                                                                                  // 420
        return [ "\n\t\t\t\t\t", HTML.BUTTON({                                                                         // 421
          class: "button back"                                                                                         // 422
        }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                               // 423
          return Spacebars.mustache(view.lookup("_"), "View_All");                                                     // 424
        }), " ", HTML.I({                                                                                              // 425
          class: "icon-angle-right"                                                                                    // 426
        }))), "\n\t\t\t\t" ];                                                                                          // 427
      }), "\n\t\t\t"), "\n\t\t" ];                                                                                     // 428
    }), "\n\t" ];                                                                                                      // 429
  });                                                                                                                  // 430
}));                                                                                                                   // 431
                                                                                                                       // 432
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"membersList.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/membersList.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals WebRTC */Template.membersList.helpers({                                                                     // 1
	tAddUsers: function () {                                                                                              // 4
		return t('Add_users');                                                                                               // 5
	},                                                                                                                    // 6
	isGroupChat: function () {                                                                                            // 8
		return ['c', 'p'].includes(ChatRoom.findOne(this.rid, {                                                              // 9
			reactive: false                                                                                                     // 9
		}).t);                                                                                                               // 9
	},                                                                                                                    // 10
	isDirectChat: function () {                                                                                           // 12
		return ChatRoom.findOne(this.rid, {                                                                                  // 13
			reactive: false                                                                                                     // 13
		}).t === 'd';                                                                                                        // 13
	},                                                                                                                    // 14
	seeAll: function () {                                                                                                 // 16
		if (Template.instance().showAllUsers.get()) {                                                                        // 17
			return t('Show_only_online');                                                                                       // 18
		} else {                                                                                                             // 19
			return t('Show_all');                                                                                               // 20
		}                                                                                                                    // 21
	},                                                                                                                    // 22
	roomUsers: function () {                                                                                              // 24
		var onlineUsers = RoomManager.onlineUsers.get();                                                                     // 25
		var roomUsers = Template.instance().users.get();                                                                     // 26
		var room = ChatRoom.findOne(this.rid);                                                                               // 27
		var roomMuted = (room != null ? room.muted : undefined) || [];                                                       // 28
		var userUtcOffset = Meteor.user().utcOffset;                                                                         // 29
		var totalOnline = 0;                                                                                                 // 30
		var users = roomUsers.map(function (user) {                                                                          // 31
			var utcOffset = void 0;                                                                                             // 32
                                                                                                                       //
			if (onlineUsers[user.username] != null) {                                                                           // 33
				totalOnline++;                                                                                                     // 34
				utcOffset = onlineUsers[user.username].utcOffset;                                                                  // 35
                                                                                                                       //
				if (utcOffset != null) {                                                                                           // 37
					if (utcOffset === userUtcOffset) {                                                                                // 38
						utcOffset = '';                                                                                                  // 39
					} else if (utcOffset > 0) {                                                                                       // 40
						utcOffset = "(UTC +" + utcOffset + ")";                                                                          // 41
					} else {                                                                                                          // 42
						utcOffset = "(UTC " + utcOffset + ")";                                                                           // 43
					}                                                                                                                 // 44
				}                                                                                                                  // 45
			}                                                                                                                   // 46
                                                                                                                       //
			return {                                                                                                            // 48
				user: user,                                                                                                        // 49
				status: onlineUsers[user.username] != null ? onlineUsers[user.username].status : undefined,                        // 50
				muted: Array.from(roomMuted).includes(user.username),                                                              // 51
				utcOffset: utcOffset                                                                                               // 52
			};                                                                                                                  // 48
		});                                                                                                                  // 54
                                                                                                                       //
		if (RocketChat.settings.get('UI_Use_Real_Name')) {                                                                   // 56
			users = _.sortBy(users, function (u) {                                                                              // 57
				return u.user.name;                                                                                                // 57
			});                                                                                                                 // 57
		} else {                                                                                                             // 58
			users = _.sortBy(users, function (u) {                                                                              // 59
				return u.user.username;                                                                                            // 59
			});                                                                                                                 // 59
		} // show online users first.                                                                                        // 60
		// sortBy is stable, so we can do this                                                                               // 62
                                                                                                                       //
                                                                                                                       //
		users = _.sortBy(users, function (u) {                                                                               // 63
			return u.status == null;                                                                                            // 63
		});                                                                                                                  // 63
		var hasMore = undefined;                                                                                             // 65
		var usersLimit = Template.instance().usersLimit.get();                                                               // 66
                                                                                                                       //
		if (usersLimit) {                                                                                                    // 67
			hasMore = users.length > usersLimit;                                                                                // 68
			users = _.first(users, usersLimit);                                                                                 // 69
		}                                                                                                                    // 70
                                                                                                                       //
		var totalShowing = users.length;                                                                                     // 71
		var ret = {                                                                                                          // 73
			_id: this.rid,                                                                                                      // 74
			total: Template.instance().total.get(),                                                                             // 75
			totalShowing: totalShowing,                                                                                         // 76
			loading: Template.instance().loading.get(),                                                                         // 77
			totalOnline: totalOnline,                                                                                           // 78
			users: users,                                                                                                       // 79
			hasMore: hasMore                                                                                                    // 80
		};                                                                                                                   // 73
		return ret;                                                                                                          // 82
	},                                                                                                                    // 83
	canAddUser: function () {                                                                                             // 85
		var _this = this;                                                                                                    // 85
                                                                                                                       //
		var roomData = Session.get("roomData" + this._id);                                                                   // 86
                                                                                                                       //
		if (!roomData) {                                                                                                     // 87
			return '';                                                                                                          // 87
		}                                                                                                                    // 87
                                                                                                                       //
		return function () {                                                                                                 // 88
			switch (roomData.t) {                                                                                               // 89
				case 'p':                                                                                                          // 90
					return RocketChat.authz.hasAtLeastOnePermission(['add-user-to-any-p-room', 'add-user-to-joined-room'], _this._id);
                                                                                                                       //
				case 'c':                                                                                                          // 91
					return RocketChat.authz.hasAtLeastOnePermission(['add-user-to-any-c-room', 'add-user-to-joined-room'], _this._id);
                                                                                                                       //
				default:                                                                                                           // 92
					return false;                                                                                                     // 92
			}                                                                                                                   // 89
		}();                                                                                                                 // 94
	},                                                                                                                    // 95
	autocompleteSettingsAddUser: function () {                                                                            // 97
		return {                                                                                                             // 98
			limit: 10,                                                                                                          // 99
			// inputDelay: 300                                                                                                  // 100
			rules: [{                                                                                                           // 101
				collection: 'UserAndRoom',                                                                                         // 103
				subscription: 'userAutocomplete',                                                                                  // 104
				field: 'username',                                                                                                 // 105
				template: Template.userSearch,                                                                                     // 106
				noMatchTemplate: Template.userSearchEmpty,                                                                         // 107
				matchAll: true,                                                                                                    // 108
				filter: {                                                                                                          // 109
					exceptions: [Meteor.user().username]                                                                              // 110
				},                                                                                                                 // 109
				selector: function (match) {                                                                                       // 112
					return {                                                                                                          // 113
						term: match                                                                                                      // 113
					};                                                                                                                // 113
				},                                                                                                                 // 114
				sort: 'username'                                                                                                   // 115
			}]                                                                                                                  // 102
		};                                                                                                                   // 98
	},                                                                                                                    // 119
	showUserInfo: function () {                                                                                           // 121
		var webrtc = WebRTC.getInstanceByRoomId(this.rid);                                                                   // 122
		var videoActive = undefined;                                                                                         // 123
                                                                                                                       //
		if (webrtc && webrtc.localUrl && webrtc.localUrl.get()) {                                                            // 124
			videoActive = webrtc.localUrl.get();                                                                                // 125
		} else if (webrtc && webrtc.remoteItems && webrtc.remoteItems.get() && webrtc.remoteItems.get().length > 0) {        // 126
			videoActive = webrtc.remoteItems.get();                                                                             // 127
		}                                                                                                                    // 128
                                                                                                                       //
		return Template.instance().showDetail.get() && !videoActive;                                                         // 129
	},                                                                                                                    // 130
	userInfoDetail: function () {                                                                                         // 132
		var room = ChatRoom.findOne(this.rid, {                                                                              // 133
			fields: {                                                                                                           // 133
				t: 1                                                                                                               // 133
			}                                                                                                                   // 133
		});                                                                                                                  // 133
		return {                                                                                                             // 135
			tabBar: Template.currentData().tabBar,                                                                              // 136
			username: Template.instance().userDetail.get(),                                                                     // 137
			clear: Template.instance().clearUserDetail,                                                                         // 138
			showAll: ['c', 'p'].includes(room != null ? room.t : undefined),                                                    // 139
			hideAdminControls: ['c', 'p', 'd'].includes(room != null ? room.t : undefined),                                     // 140
			video: ['d'].includes(room != null ? room.t : undefined)                                                            // 141
		};                                                                                                                   // 135
	},                                                                                                                    // 143
	displayName: function () {                                                                                            // 144
		if (RocketChat.settings.get('UI_Use_Real_Name') && this.user.name) {                                                 // 145
			return this.user.name;                                                                                              // 146
		}                                                                                                                    // 147
                                                                                                                       //
		return this.user.username;                                                                                           // 149
	}                                                                                                                     // 150
});                                                                                                                    // 3
Template.membersList.events({                                                                                          // 152
	'click .see-all': function (e, instance) {                                                                            // 153
		var seeAll = instance.showAllUsers.get();                                                                            // 154
		instance.showAllUsers.set(!seeAll);                                                                                  // 155
                                                                                                                       //
		if (!seeAll) {                                                                                                       // 157
			return instance.usersLimit.set(100);                                                                                // 158
		}                                                                                                                    // 159
	},                                                                                                                    // 160
	'autocompleteselect #user-add-search': function (event, template, doc) {                                              // 162
		var roomData = Session.get("roomData" + template.data.rid);                                                          // 164
                                                                                                                       //
		if (['c', 'p'].includes(roomData.t)) {                                                                               // 166
			return Meteor.call('addUserToRoom', {                                                                               // 167
				rid: roomData._id,                                                                                                 // 167
				username: doc.username                                                                                             // 167
			}, function (error) {                                                                                               // 167
				if (error) {                                                                                                       // 168
					return handleError(error);                                                                                        // 169
				}                                                                                                                  // 170
                                                                                                                       //
				return $('#user-add-search').val('');                                                                              // 172
			});                                                                                                                 // 173
		}                                                                                                                    // 174
	},                                                                                                                    // 175
	'click .show-more-users': function (e, instance) {                                                                    // 177
		return instance.usersLimit.set(instance.usersLimit.get() + 100);                                                     // 178
	}                                                                                                                     // 179
});                                                                                                                    // 152
Template.membersList.onCreated(function () {                                                                           // 182
	var _this2 = this;                                                                                                    // 182
                                                                                                                       //
	this.showAllUsers = new ReactiveVar(false);                                                                           // 183
	this.usersLimit = new ReactiveVar(100);                                                                               // 184
	this.userDetail = new ReactiveVar();                                                                                  // 185
	this.showDetail = new ReactiveVar(false);                                                                             // 186
	this.users = new ReactiveVar([]);                                                                                     // 188
	this.total = new ReactiveVar();                                                                                       // 189
	this.loading = new ReactiveVar(true);                                                                                 // 190
	this.tabBar = Template.instance().tabBar;                                                                             // 192
	Tracker.autorun(function () {                                                                                         // 194
		if (_this2.data.rid == null) {                                                                                       // 195
			return;                                                                                                             // 195
		}                                                                                                                    // 195
                                                                                                                       //
		_this2.loading.set(true);                                                                                            // 197
                                                                                                                       //
		return Meteor.call('getUsersOfRoom', _this2.data.rid, _this2.showAllUsers.get(), function (error, users) {           // 198
			_this2.users.set(users.records);                                                                                    // 199
                                                                                                                       //
			_this2.total.set(users.total);                                                                                      // 200
                                                                                                                       //
			return _this2.loading.set(false);                                                                                   // 201
		});                                                                                                                  // 202
	});                                                                                                                   // 204
                                                                                                                       //
	this.clearUserDetail = function () {                                                                                  // 207
		_this2.showDetail.set(false);                                                                                        // 208
                                                                                                                       //
		return setTimeout(function () {                                                                                      // 209
			return _this2.clearRoomUserDetail();                                                                                // 210
		}, 500);                                                                                                             // 211
	};                                                                                                                    // 213
                                                                                                                       //
	this.showUserDetail = function (username) {                                                                           // 215
		_this2.showDetail.set(username != null);                                                                             // 216
                                                                                                                       //
		return _this2.userDetail.set(username);                                                                              // 217
	};                                                                                                                    // 218
                                                                                                                       //
	this.clearRoomUserDetail = this.data.clearUserDetail;                                                                 // 220
	return this.autorun(function () {                                                                                     // 222
		var data = Template.currentData();                                                                                   // 223
		return _this2.showUserDetail(data.userDetail);                                                                       // 224
	});                                                                                                                   // 225
});                                                                                                                    // 227
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageSearch.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/messageSearch.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	return RocketChat.MessageAction.addButton({                                                                           // 2
		id: 'jump-to-search-message',                                                                                        // 3
		icon: 'icon-right-hand',                                                                                             // 4
		i18nLabel: 'Jump_to_message',                                                                                        // 5
		context: ['search'],                                                                                                 // 6
		action: function () {                                                                                                // 9
			var message = this._arguments[1];                                                                                   // 10
			RocketChat.MessageAction.hideDropDown();                                                                            // 11
			return RoomHistoryManager.getSurroundingMessages(message, 50);                                                      // 12
		},                                                                                                                   // 13
		order: 100                                                                                                           // 14
	});                                                                                                                   // 2
});                                                                                                                    // 16
Template.messageSearch.helpers({                                                                                       // 19
	tSearchMessages: function () {                                                                                        // 20
		return t('Search_Messages');                                                                                         // 21
	},                                                                                                                    // 22
	searchResultMessages: function () {                                                                                   // 24
		var searchResult = Template.instance().searchResult.get();                                                           // 25
                                                                                                                       //
		if (searchResult) {                                                                                                  // 26
			return searchResult.messages;                                                                                       // 27
		}                                                                                                                    // 28
	},                                                                                                                    // 29
	hasMore: function () {                                                                                                // 31
		return Template.instance().hasMore.get();                                                                            // 32
	},                                                                                                                    // 33
	currentSearchTerm: function () {                                                                                      // 35
		return Template.instance().currentSearchTerm.get();                                                                  // 36
	},                                                                                                                    // 37
	ready: function () {                                                                                                  // 39
		return Template.instance().ready.get();                                                                              // 40
	},                                                                                                                    // 41
	message: function () {                                                                                                // 43
		return _.extend(this, {                                                                                              // 44
			customClass: 'search'                                                                                               // 44
		});                                                                                                                  // 44
	}                                                                                                                     // 45
});                                                                                                                    // 19
Template.messageSearch.events({                                                                                        // 48
	'keydown #message-search': function (e) {                                                                             // 49
		if (e.keyCode === 13) {                                                                                              // 50
			return e.preventDefault();                                                                                          // 51
		}                                                                                                                    // 52
	},                                                                                                                    // 53
	'keyup #message-search': _.debounce(function (e, t) {                                                                 // 55
		var value = e.target.value.trim();                                                                                   // 56
                                                                                                                       //
		if (value === '' && t.currentSearchTerm.get()) {                                                                     // 57
			t.currentSearchTerm.set('');                                                                                        // 58
			t.searchResult.set(undefined);                                                                                      // 59
			t.hasMore.set(false);                                                                                               // 60
			return;                                                                                                             // 61
		} else if (value === t.currentSearchTerm.get()) {                                                                    // 62
			return;                                                                                                             // 63
		}                                                                                                                    // 64
                                                                                                                       //
		t.hasMore.set(true);                                                                                                 // 66
		t.limit.set(20);                                                                                                     // 67
		return t.search();                                                                                                   // 68
	}, 500),                                                                                                              // 69
	'click .message-cog': function (e, t) {                                                                               // 72
		e.stopPropagation();                                                                                                 // 73
		e.preventDefault();                                                                                                  // 74
		var message_id = $(e.currentTarget).closest('.message').attr('id');                                                  // 75
		var searchResult = t.searchResult.get();                                                                             // 76
		RocketChat.MessageAction.hideDropDown();                                                                             // 77
		t.$("#" + message_id + " .message-dropdown").remove();                                                               // 78
                                                                                                                       //
		if (searchResult) {                                                                                                  // 79
			var message = _.findWhere(searchResult.messages, {                                                                  // 80
				_id: message_id                                                                                                    // 80
			});                                                                                                                 // 80
                                                                                                                       //
			var actions = RocketChat.MessageAction.getButtons(message, 'search');                                               // 81
			var el = Blaze.toHTMLWithData(Template.messageDropdown, {                                                           // 82
				actions: actions                                                                                                   // 82
			});                                                                                                                 // 82
			t.$("#" + message_id + " .message-cog-container").append(el);                                                       // 83
			var dropDown = t.$("#" + message_id + " .message-dropdown");                                                        // 84
			return dropDown.show();                                                                                             // 85
		}                                                                                                                    // 86
	},                                                                                                                    // 87
	'click .load-more button': function (e, t) {                                                                          // 89
		t.limit.set(t.limit.get() + 20);                                                                                     // 90
		return t.search();                                                                                                   // 91
	},                                                                                                                    // 92
	'scroll .content': _.throttle(function (e, t) {                                                                       // 94
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                                           // 95
			t.limit.set(t.limit.get() + 20);                                                                                    // 96
			return t.search();                                                                                                  // 97
		}                                                                                                                    // 98
	}, 200)                                                                                                               // 99
});                                                                                                                    // 48
Template.messageSearch.onCreated(function () {                                                                         // 103
	var _this = this;                                                                                                     // 103
                                                                                                                       //
	this.currentSearchTerm = new ReactiveVar('');                                                                         // 104
	this.searchResult = new ReactiveVar();                                                                                // 105
	this.hasMore = new ReactiveVar(true);                                                                                 // 107
	this.limit = new ReactiveVar(20);                                                                                     // 108
	this.ready = new ReactiveVar(true);                                                                                   // 109
	return this.search = function () {                                                                                    // 111
		_this.ready.set(false);                                                                                              // 112
                                                                                                                       //
		var value = _this.$('#message-search').val();                                                                        // 113
                                                                                                                       //
		return Tracker.nonreactive(function () {                                                                             // 114
			return Meteor.call('messageSearch', value, Session.get('openedRoom'), _this.limit.get(), function (error, result) {
				_this.currentSearchTerm.set(value);                                                                                // 116
                                                                                                                       //
				_this.ready.set(true);                                                                                             // 117
                                                                                                                       //
				if (result != null && ((result.messages != null ? result.messages.length : undefined) > 0 || (result.users != null ? result.users.length : undefined) > 0 || (result.channels != null ? result.channels.length : undefined) > 0)) {
					_this.searchResult.set(result);                                                                                   // 119
                                                                                                                       //
					if ((result.messages != null ? result.messages.length : undefined) + (result.users != null ? result.users.length : undefined) + (result.channels != null ? result.channels.length : undefined) < _this.limit.get()) {
						return _this.hasMore.set(false);                                                                                 // 121
					}                                                                                                                 // 122
				} else {                                                                                                           // 123
					return _this.searchResult.set();                                                                                  // 124
				}                                                                                                                  // 125
			});                                                                                                                 // 126
		});                                                                                                                  // 128
	};                                                                                                                    // 130
});                                                                                                                    // 131
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uploadedFilesList.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/uploadedFilesList.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals chatMessages*/var roomFiles = new Mongo.Collection('room_files');                                           // 1
Template.uploadedFilesList.helpers({                                                                                   // 4
	files: function () {                                                                                                  // 5
		return roomFiles.find({                                                                                              // 6
			rid: this.rid                                                                                                       // 6
		}, {                                                                                                                 // 6
			sort: {                                                                                                             // 6
				uploadedAt: -1                                                                                                     // 6
			}                                                                                                                   // 6
		});                                                                                                                  // 6
	},                                                                                                                    // 7
	hasFiles: function () {                                                                                               // 9
		return roomFiles.find({                                                                                              // 10
			rid: this.rid                                                                                                       // 10
		}).count() > 0;                                                                                                      // 10
	},                                                                                                                    // 11
	hasMore: function () {                                                                                                // 13
		return Template.instance().hasMore.get();                                                                            // 14
	},                                                                                                                    // 15
	getFileIcon: function (type) {                                                                                        // 17
		if (type.match(/^image\/.+$/)) {                                                                                     // 18
			return 'icon-picture';                                                                                              // 19
		}                                                                                                                    // 20
                                                                                                                       //
		return 'icon-docs';                                                                                                  // 22
	},                                                                                                                    // 23
	customClassForFileType: function () {                                                                                 // 25
		if (this.type.match(/^image\/.+$/)) {                                                                                // 26
			return 'room-files-image';                                                                                          // 27
		}                                                                                                                    // 28
	},                                                                                                                    // 29
	escapedName: function () {                                                                                            // 31
		return s.escapeHTML(this.name);                                                                                      // 32
	},                                                                                                                    // 33
	canDelete: function () {                                                                                              // 35
		return RocketChat.authz.hasAtLeastOnePermission('delete-message', this.rid) || RocketChat.settings && RocketChat.settings.get('Message_AllowDeleting') && this.userId === Meteor.userId();
	},                                                                                                                    // 37
	url: function () {                                                                                                    // 39
		return "/file-upload/" + this._id + "/" + this.name;                                                                 // 40
	},                                                                                                                    // 41
	fixCordova: function (url) {                                                                                          // 43
		if ((url != null ? url.indexOf('data:image') : undefined) === 0) {                                                   // 44
			return url;                                                                                                         // 45
		}                                                                                                                    // 46
                                                                                                                       //
		if (Meteor.isCordova && (url != null ? url[0] : undefined) === '/') {                                                // 48
			url = Meteor.absoluteUrl().replace(/\/$/, '') + url;                                                                // 49
                                                                                                                       //
			var query = "rc_uid=" + Meteor.userId() + "&rc_token=" + Meteor._localStorage.getItem('Meteor.loginToken');         // 50
                                                                                                                       //
			if (url.indexOf('?') === -1) {                                                                                      // 51
				url = url + "?" + query;                                                                                           // 52
			} else {                                                                                                            // 53
				url = url + "&" + query;                                                                                           // 54
			}                                                                                                                   // 55
		}                                                                                                                    // 56
                                                                                                                       //
		if (Meteor.settings && Meteor.settings.public && Meteor.settings.sandstorm || url.match(/^(https?:)?\/\//i)) {       // 58
			return url;                                                                                                         // 59
		} else if (navigator.userAgent.indexOf('Electron') > -1) {                                                           // 60
			return __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + url;                                                        // 61
		} else {                                                                                                             // 62
			return Meteor.absoluteUrl().replace(/\/$/, '') + __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + url;              // 63
		}                                                                                                                    // 64
	}                                                                                                                     // 65
});                                                                                                                    // 4
Template.uploadedFilesList.events({                                                                                    // 68
	'click .room-file-item': function (e) {                                                                               // 69
		if ($(e.currentTarget).siblings('.icon-picture').length) {                                                           // 70
			return e.preventDefault();                                                                                          // 71
		}                                                                                                                    // 72
	},                                                                                                                    // 73
	'click .icon-trash': function () {                                                                                    // 75
		var self = this;                                                                                                     // 76
		return swal({                                                                                                        // 77
			title: TAPi18n.__('Are_you_sure'),                                                                                  // 78
			text: TAPi18n.__('You_will_not_be_able_to_recover_file'),                                                           // 79
			type: 'warning',                                                                                                    // 80
			showCancelButton: true,                                                                                             // 81
			confirmButtonColor: '#DD6B55',                                                                                      // 82
			confirmButtonText: TAPi18n.__('Yes_delete_it'),                                                                     // 83
			cancelButtonText: TAPi18n.__('Cancel'),                                                                             // 84
			closeOnConfirm: false,                                                                                              // 85
			html: false                                                                                                         // 86
		}, function () {                                                                                                     // 77
			swal({                                                                                                              // 88
				title: TAPi18n.__('Deleted'),                                                                                      // 89
				text: TAPi18n.__('Your_file_has_been_deleted'),                                                                    // 90
				type: 'success',                                                                                                   // 91
				timer: 1000,                                                                                                       // 92
				showConfirmButton: false                                                                                           // 93
			}); // Check if the upload message for this file is currently loaded                                                // 88
                                                                                                                       //
			var msg = ChatMessage.findOne({                                                                                     // 97
				file: {                                                                                                            // 97
					_id: self._id                                                                                                     // 97
				}                                                                                                                  // 97
			});                                                                                                                 // 97
			return RocketChat.models.Uploads.remove(self._id, function () {                                                     // 98
				if (msg) {                                                                                                         // 99
					return chatMessages[Session.get('openedRoom')].deleteMsg(msg);                                                    // 100
				} else {                                                                                                           // 101
					return Meteor.call('deleteFileMessage', self._id, function (error) {                                              // 102
						if (error) {                                                                                                     // 103
							return handleError(error);                                                                                      // 104
						}                                                                                                                // 105
					});                                                                                                               // 106
				}                                                                                                                  // 107
			});                                                                                                                 // 108
		});                                                                                                                  // 109
	},                                                                                                                    // 110
	'scroll .content': _.throttle(function (e, t) {                                                                       // 112
		if (e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight) {                                           // 113
			return t.limit.set(t.limit.get() + 50);                                                                             // 114
		}                                                                                                                    // 115
	}, 200)                                                                                                               // 116
});                                                                                                                    // 68
Template.uploadedFilesList.onCreated(function () {                                                                     // 120
	var _this = this;                                                                                                     // 120
                                                                                                                       //
	var _Template$currentData = Template.currentData(),                                                                   // 120
	    rid = _Template$currentData.rid;                                                                                  // 120
                                                                                                                       //
	this.hasMore = new ReactiveVar(true);                                                                                 // 122
	this.limit = new ReactiveVar(50);                                                                                     // 123
	return this.autorun(function () {                                                                                     // 124
		return _this.subscribe('roomFiles', rid, _this.limit.get(), function () {                                            // 125
			if (roomFiles.find({                                                                                                // 126
				rid: rid                                                                                                           // 126
			}).fetch().length < _this.limit.get()) {                                                                            // 126
				return _this.hasMore.set(false);                                                                                   // 127
			}                                                                                                                   // 128
		});                                                                                                                  // 129
	});                                                                                                                   // 131
});                                                                                                                    // 133
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userEdit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/userEdit.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.userEdit.helpers({                                                                                            // 3
	canEditOrAdd: function () {                                                                                           // 4
		return Template.instance().user && RocketChat.authz.hasAtLeastOnePermission('edit-other-user-info') || !Template.instance().user && RocketChat.authz.hasAtLeastOnePermission('create-user');
	},                                                                                                                    // 6
	user: function () {                                                                                                   // 8
		return Template.instance().user;                                                                                     // 9
	},                                                                                                                    // 10
	requirePasswordChange: function () {                                                                                  // 12
		return !Template.instance().user || Template.instance().user.requirePasswordChange;                                  // 13
	},                                                                                                                    // 14
	role: function () {                                                                                                   // 16
		return RocketChat.models.Roles.find({}, {                                                                            // 17
			sort: {                                                                                                             // 17
				description: 1,                                                                                                    // 17
				_id: 1                                                                                                             // 17
			}                                                                                                                   // 17
		});                                                                                                                  // 17
	},                                                                                                                    // 18
	selectUserRole: function () {                                                                                         // 20
		if (this._id === 'user') {                                                                                           // 21
			return 'selected';                                                                                                  // 22
		}                                                                                                                    // 23
	},                                                                                                                    // 24
	name: function () {                                                                                                   // 26
		return this.description || this._id;                                                                                 // 27
	}                                                                                                                     // 28
});                                                                                                                    // 3
Template.userEdit.events({                                                                                             // 31
	'click .cancel': function (e, t) {                                                                                    // 32
		e.stopPropagation();                                                                                                 // 33
		e.preventDefault();                                                                                                  // 34
		return t.cancel(t.find('form'));                                                                                     // 35
	},                                                                                                                    // 36
	'click #randomPassword': function (e) {                                                                               // 38
		e.stopPropagation();                                                                                                 // 39
		e.preventDefault();                                                                                                  // 40
		return $('#password').val(Random.id());                                                                              // 41
	},                                                                                                                    // 42
	'submit form': function (e, t) {                                                                                      // 44
		e.stopPropagation();                                                                                                 // 45
		e.preventDefault();                                                                                                  // 46
		return t.save(e.currentTarget);                                                                                      // 48
	}                                                                                                                     // 49
});                                                                                                                    // 31
Template.userEdit.onCreated(function () {                                                                              // 52
	var _this = this;                                                                                                     // 52
                                                                                                                       //
	var userData = void 0;                                                                                                // 53
	this.user = this.data != null ? this.data.user : undefined;                                                           // 54
                                                                                                                       //
	var _Template$currentData = Template.currentData(),                                                                   // 52
	    tabBar = _Template$currentData.tabBar;                                                                            // 52
                                                                                                                       //
	this.cancel = function (form, username) {                                                                             // 58
		form.reset();                                                                                                        // 59
                                                                                                                       //
		_this.$('input[type=checkbox]').prop('checked', true);                                                               // 60
                                                                                                                       //
		if (_this.user) {                                                                                                    // 61
			return _this.data.back(username);                                                                                   // 62
		} else {                                                                                                             // 63
			return tabBar.close();                                                                                              // 64
		}                                                                                                                    // 65
	};                                                                                                                    // 66
                                                                                                                       //
	this.getUserData = function () {                                                                                      // 68
		userData = {                                                                                                         // 69
			_id: _this.user != null ? _this.user._id : undefined                                                                // 69
		};                                                                                                                   // 69
		userData.name = s.trim(_this.$('#name').val());                                                                      // 70
		userData.username = s.trim(_this.$('#username').val());                                                              // 71
		userData.email = s.trim(_this.$('#email').val());                                                                    // 72
		userData.verified = _this.$('#verified:checked').length > 0;                                                         // 73
		userData.password = s.trim(_this.$('#password').val());                                                              // 74
		userData.requirePasswordChange = _this.$('#changePassword:checked').length > 0;                                      // 75
		userData.joinDefaultChannels = _this.$('#joinDefaultChannels:checked').length > 0;                                   // 76
		userData.sendWelcomeEmail = _this.$('#sendWelcomeEmail:checked').length > 0;                                         // 77
                                                                                                                       //
		if (_this.$('#role').val()) {                                                                                        // 78
			userData.roles = [_this.$('#role').val()];                                                                          // 78
		}                                                                                                                    // 78
                                                                                                                       //
		return userData;                                                                                                     // 79
	};                                                                                                                    // 80
                                                                                                                       //
	this.validate = function () {                                                                                         // 82
		userData = _this.getUserData();                                                                                      // 83
		var errors = [];                                                                                                     // 85
                                                                                                                       //
		if (!userData.name) {                                                                                                // 86
			errors.push('Name');                                                                                                // 87
		}                                                                                                                    // 88
                                                                                                                       //
		if (!userData.username) {                                                                                            // 89
			errors.push('Username');                                                                                            // 90
		}                                                                                                                    // 91
                                                                                                                       //
		if (!userData.email) {                                                                                               // 92
			errors.push('Email');                                                                                               // 93
		}                                                                                                                    // 94
                                                                                                                       //
		for (var _iterator = Array.from(errors), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                           // 96
                                                                                                                       //
			if (_isArray) {                                                                                                     // 96
				if (_i >= _iterator.length) break;                                                                                 // 96
				_ref = _iterator[_i++];                                                                                            // 96
			} else {                                                                                                            // 96
				_i = _iterator.next();                                                                                             // 96
				if (_i.done) break;                                                                                                // 96
				_ref = _i.value;                                                                                                   // 96
			}                                                                                                                   // 96
                                                                                                                       //
			var error = _ref;                                                                                                   // 96
			toastr.error(TAPi18n.__('error-the-field-is-required', {                                                            // 97
				field: TAPi18n.__(error)                                                                                           // 97
			}));                                                                                                                // 97
		}                                                                                                                    // 98
                                                                                                                       //
		return errors.length === 0;                                                                                          // 100
	};                                                                                                                    // 101
                                                                                                                       //
	return this.save = function (form) {                                                                                  // 103
		if (_this.validate()) {                                                                                              // 104
			userData = _this.getUserData();                                                                                     // 105
                                                                                                                       //
			if (_this.user != null) {                                                                                           // 107
				for (var key in meteorBabelHelpers.sanitizeForInObject(userData)) {                                                // 108
					if (key) {                                                                                                        // 109
						var value = userData[key];                                                                                       // 110
                                                                                                                       //
						if (!['_id'].includes(key)) {                                                                                    // 111
							if (value === _this.user[key]) {                                                                                // 112
								delete userData[key];                                                                                          // 113
							}                                                                                                               // 114
						}                                                                                                                // 115
					}                                                                                                                 // 116
				}                                                                                                                  // 117
			}                                                                                                                   // 118
                                                                                                                       //
			return Meteor.call('insertOrUpdateUser', userData, function (error, result) {                                       // 120
				if (result) {                                                                                                      // 121
					if (userData._id) {                                                                                               // 122
						toastr.success(t('User_updated_successfully'));                                                                  // 123
					} else {                                                                                                          // 124
						toastr.success(t('User_added_successfully'));                                                                    // 125
					}                                                                                                                 // 126
                                                                                                                       //
					_this.cancel(form, userData.username);                                                                            // 128
				}                                                                                                                  // 129
                                                                                                                       //
				if (error) {                                                                                                       // 131
					return handleError(error);                                                                                        // 132
				}                                                                                                                  // 133
			});                                                                                                                 // 134
		}                                                                                                                    // 135
	};                                                                                                                    // 136
});                                                                                                                    // 137
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"userInfo.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/tabs/userInfo.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var moment = void 0;                                                                                                   // 1
module.watch(require("moment"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		moment = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 1);                                                                                                                 // 1
Template.userInfo.helpers({                                                                                            // 5
	name: function () {                                                                                                   // 6
		var user = Template.instance().user.get();                                                                           // 7
		return user && user.name ? user.name : TAPi18n.__('Unnamed');                                                        // 8
	},                                                                                                                    // 9
	username: function () {                                                                                               // 11
		var user = Template.instance().user.get();                                                                           // 12
		return user && user.username;                                                                                        // 13
	},                                                                                                                    // 14
	email: function () {                                                                                                  // 16
		var user = Template.instance().user.get();                                                                           // 17
		return user && user.emails && user.emails[0] && user.emails[0].address;                                              // 18
	},                                                                                                                    // 19
	utc: function () {                                                                                                    // 21
		var user = Template.instance().user.get();                                                                           // 22
                                                                                                                       //
		if (user && user.utcOffset != null) {                                                                                // 23
			if (user.utcOffset > 0) {                                                                                           // 24
				return "+" + user.utcOffset;                                                                                       // 25
			}                                                                                                                   // 26
                                                                                                                       //
			return user.utcOffset;                                                                                              // 27
		}                                                                                                                    // 28
	},                                                                                                                    // 29
	lastLogin: function () {                                                                                              // 31
		var user = Template.instance().user.get();                                                                           // 32
                                                                                                                       //
		if (user && user.lastLogin) {                                                                                        // 33
			return moment(user.lastLogin).format('LLL');                                                                        // 34
		}                                                                                                                    // 35
	},                                                                                                                    // 36
	createdAt: function () {                                                                                              // 38
		var user = Template.instance().user.get();                                                                           // 39
                                                                                                                       //
		if (user && user.createdAt) {                                                                                        // 40
			return moment(user.createdAt).format('LLL');                                                                        // 41
		}                                                                                                                    // 42
	},                                                                                                                    // 43
	canDirectMessage: function (username) {                                                                               // 45
		var user = Meteor.user();                                                                                            // 46
		return RocketChat.authz.hasAllPermission('create-d') && user && user.username !== username;                          // 47
	},                                                                                                                    // 48
	isSelf: function (username) {                                                                                         // 50
		var user = Meteor.user();                                                                                            // 51
		return user && user.username === username;                                                                           // 52
	},                                                                                                                    // 53
	linkedinUsername: function () {                                                                                       // 55
		var user = Template.instance().user.get();                                                                           // 56
                                                                                                                       //
		if (user && user.services && user.services.linkedin && user.services.linkedin.publicProfileUrl) {                    // 57
			return s.strRight(user.services.linkedin.publicProfileUrl), '/in/';                                                 // 58
		}                                                                                                                    // 59
	},                                                                                                                    // 60
	servicesMeteor: function () {                                                                                         // 62
		var user = Template.instance().user.get();                                                                           // 63
		return user && user.services && user.services['meteor-developer'];                                                   // 64
	},                                                                                                                    // 65
	userTime: function () {                                                                                               // 67
		var user = Template.instance().user.get();                                                                           // 68
                                                                                                                       //
		if (user && user.utcOffset != null) {                                                                                // 69
			return Template.instance().now.get().utcOffset(user.utcOffset).format(RocketChat.settings.get('Message_TimeFormat'));
		}                                                                                                                    // 71
	},                                                                                                                    // 72
	canRemoveUser: function () {                                                                                          // 74
		return RocketChat.authz.hasAllPermission('remove-user', Session.get('openedRoom'));                                  // 75
	},                                                                                                                    // 76
	canMuteUser: function () {                                                                                            // 78
		return RocketChat.authz.hasAllPermission('mute-user', Session.get('openedRoom'));                                    // 79
	},                                                                                                                    // 80
	userMuted: function () {                                                                                              // 82
		var room = ChatRoom.findOne(Session.get('openedRoom'));                                                              // 83
		var user = Template.instance().user.get();                                                                           // 84
		return _.isArray(room && room.muted) && room.muted.indexOf(user && user.username) !== -1;                            // 86
	},                                                                                                                    // 87
	canSetModerator: function () {                                                                                        // 89
		return RocketChat.authz.hasAllPermission('set-moderator', Session.get('openedRoom'));                                // 90
	},                                                                                                                    // 91
	isModerator: function () {                                                                                            // 93
		var user = Template.instance().user.get();                                                                           // 94
                                                                                                                       //
		if (user && user._id) {                                                                                              // 95
			return !!RoomRoles.findOne({                                                                                        // 96
				rid: Session.get('openedRoom'),                                                                                    // 96
				'u._id': user._id,                                                                                                 // 96
				roles: 'moderator'                                                                                                 // 96
			});                                                                                                                 // 96
		}                                                                                                                    // 97
	},                                                                                                                    // 98
	canSetOwner: function () {                                                                                            // 100
		return RocketChat.authz.hasAllPermission('set-owner', Session.get('openedRoom'));                                    // 101
	},                                                                                                                    // 102
	isOwner: function () {                                                                                                // 104
		var user = Template.instance().user.get();                                                                           // 105
                                                                                                                       //
		if (user && user._id) {                                                                                              // 106
			return !!RoomRoles.findOne({                                                                                        // 107
				rid: Session.get('openedRoom'),                                                                                    // 107
				'u._id': user._id,                                                                                                 // 107
				roles: 'owner'                                                                                                     // 107
			});                                                                                                                 // 107
		}                                                                                                                    // 108
	},                                                                                                                    // 109
	user: function () {                                                                                                   // 111
		return Template.instance().user.get();                                                                               // 112
	},                                                                                                                    // 113
	hasEmails: function () {                                                                                              // 115
		return _.isArray(this.emails);                                                                                       // 116
	},                                                                                                                    // 117
	hasPhone: function () {                                                                                               // 119
		return _.isArray(this.phone);                                                                                        // 120
	},                                                                                                                    // 121
	isLoading: function () {                                                                                              // 123
		return Template.instance().loadingUserInfo.get();                                                                    // 124
	},                                                                                                                    // 125
	hasAdminRole: function () {                                                                                           // 127
		var user = Template.instance().user.get();                                                                           // 128
                                                                                                                       //
		if (user && user._id) {                                                                                              // 129
			return RocketChat.authz.hasRole(user._id, 'admin');                                                                 // 130
		}                                                                                                                    // 131
	},                                                                                                                    // 132
	active: function () {                                                                                                 // 134
		var user = Template.instance().user.get();                                                                           // 135
		return user && user.active;                                                                                          // 136
	},                                                                                                                    // 137
	editingUser: function () {                                                                                            // 139
		return Template.instance().editingUser.get();                                                                        // 140
	},                                                                                                                    // 141
	userToEdit: function () {                                                                                             // 143
		var instance = Template.instance();                                                                                  // 144
		return {                                                                                                             // 145
			user: instance.user.get(),                                                                                          // 146
			back: function (username) {                                                                                         // 147
				instance.editingUser.set();                                                                                        // 148
                                                                                                                       //
				if (username != null) {                                                                                            // 150
					var user = instance.user.get();                                                                                   // 151
                                                                                                                       //
					if ((user != null ? user.username : undefined) !== username) {                                                    // 152
						return instance.loadedUsername.set(username);                                                                    // 153
					}                                                                                                                 // 154
				}                                                                                                                  // 155
			}                                                                                                                   // 156
		};                                                                                                                   // 145
	},                                                                                                                    // 158
	roleTags: function () {                                                                                               // 160
		var user = Template.instance().user.get();                                                                           // 161
                                                                                                                       //
		if (user && user._id) {                                                                                              // 162
			var userRoles = UserRoles.findOne(user._id) || {};                                                                  // 163
			var roomRoles = RoomRoles.findOne({                                                                                 // 164
				'u._id': user._id,                                                                                                 // 164
				rid: Session.get('openedRoom')                                                                                     // 164
			}) || {};                                                                                                           // 164
                                                                                                                       //
			if (userRoles.roles || roomRoles.roles) {                                                                           // 165
				var roles = _.union(userRoles.roles || [], roomRoles.roles || []);                                                 // 166
                                                                                                                       //
				return RocketChat.models.Roles.find({                                                                              // 167
					_id: {                                                                                                            // 167
						$in: roles                                                                                                       // 167
					},                                                                                                                // 167
					description: {                                                                                                    // 167
						$exists: 1                                                                                                       // 167
					}                                                                                                                 // 167
				}, {                                                                                                               // 167
					fields: {                                                                                                         // 167
						description: 1                                                                                                   // 167
					}                                                                                                                 // 167
				});                                                                                                                // 167
			} else {                                                                                                            // 168
				return [];                                                                                                         // 169
			}                                                                                                                   // 170
		}                                                                                                                    // 171
	},                                                                                                                    // 172
	isDirect: function () {                                                                                               // 174
		var room = ChatRoom.findOne(Session.get('openedRoom'));                                                              // 175
		return (room != null ? room.t : undefined) === 'd';                                                                  // 177
	},                                                                                                                    // 178
	isBlocker: function () {                                                                                              // 180
		var subscription = ChatSubscription.findOne({                                                                        // 181
			rid: Session.get('openedRoom'),                                                                                     // 181
			'u._id': Meteor.userId()                                                                                            // 181
		}, {                                                                                                                 // 181
			fields: {                                                                                                           // 181
				blocker: 1                                                                                                         // 181
			}                                                                                                                   // 181
		});                                                                                                                  // 181
		return subscription.blocker;                                                                                         // 182
	}                                                                                                                     // 183
});                                                                                                                    // 5
Template.userInfo.events({                                                                                             // 186
	'click .thumb': function (e) {                                                                                        // 187
		return $(e.currentTarget).toggleClass('bigger');                                                                     // 188
	},                                                                                                                    // 189
	'click .pvt-msg': function (e, instance) {                                                                            // 191
		var _this = this;                                                                                                    // 191
                                                                                                                       //
		return Meteor.call('createDirectMessage', this.username, function (error, result) {                                  // 192
			if (error) {                                                                                                        // 193
				return handleError(error);                                                                                         // 194
			}                                                                                                                   // 195
                                                                                                                       //
			if ((result != null ? result.rid : undefined) != null) {                                                            // 197
				return FlowRouter.go('direct', {                                                                                   // 198
					username: _this.username                                                                                          // 198
				}, FlowRouter.current().queryParams, function () {                                                                 // 198
					if (window.matchMedia('(max-width: 500px)').matches) {                                                            // 199
						return instance.tabBar.close();                                                                                  // 200
					}                                                                                                                 // 201
				});                                                                                                                // 202
			}                                                                                                                   // 203
		});                                                                                                                  // 204
	},                                                                                                                    // 205
	'click .back': function (e, instance) {                                                                               // 207
		return instance.clear();                                                                                             // 208
	},                                                                                                                    // 209
	'click .remove-user': function (e, instance) {                                                                        // 211
		e.preventDefault();                                                                                                  // 212
		var rid = Session.get('openedRoom');                                                                                 // 213
		var room = ChatRoom.findOne(rid);                                                                                    // 214
		var user = instance.user.get();                                                                                      // 215
                                                                                                                       //
		if (user && RocketChat.authz.hasAllPermission('remove-user', rid)) {                                                 // 216
			return swal({                                                                                                       // 217
				title: t('Are_you_sure'),                                                                                          // 218
				text: t('The_user_will_be_removed_from_s', room.name),                                                             // 219
				type: 'warning',                                                                                                   // 220
				showCancelButton: true,                                                                                            // 221
				confirmButtonColor: '#DD6B55',                                                                                     // 222
				confirmButtonText: t('Yes_remove_user'),                                                                           // 223
				cancelButtonText: t('Cancel'),                                                                                     // 224
				closeOnConfirm: false,                                                                                             // 225
				html: false                                                                                                        // 226
			}, function () {                                                                                                    // 217
				return Meteor.call('removeUserFromRoom', {                                                                         // 228
					rid: rid,                                                                                                         // 228
					username: user.username                                                                                           // 228
				}, function (err) {                                                                                                // 228
					if (err) {                                                                                                        // 229
						return handleError(err);                                                                                         // 230
					}                                                                                                                 // 231
                                                                                                                       //
					swal({                                                                                                            // 232
						title: t('Removed'),                                                                                             // 233
						text: t('User_has_been_removed_from_s', room.name),                                                              // 234
						type: 'success',                                                                                                 // 235
						timer: 2000,                                                                                                     // 236
						showConfirmButton: false                                                                                         // 237
					});                                                                                                               // 232
					return instance.clear();                                                                                          // 240
				});                                                                                                                // 241
			});                                                                                                                 // 242
		} else {                                                                                                             // 243
			return toastr.error(TAPi18n.__('error-not-allowed'));                                                               // 244
		}                                                                                                                    // 245
	},                                                                                                                    // 246
	'click .mute-user': function (e, instance) {                                                                          // 248
		e.preventDefault();                                                                                                  // 249
		var rid = Session.get('openedRoom');                                                                                 // 250
		var room = ChatRoom.findOne(rid);                                                                                    // 251
		var user = instance.user.get();                                                                                      // 252
                                                                                                                       //
		if (user && RocketChat.authz.hasAllPermission('mute-user', rid)) {                                                   // 253
			return swal({                                                                                                       // 254
				title: t('Are_you_sure'),                                                                                          // 255
				text: t('The_user_wont_be_able_to_type_in_s', room.name),                                                          // 256
				type: 'warning',                                                                                                   // 257
				showCancelButton: true,                                                                                            // 258
				confirmButtonColor: '#DD6B55',                                                                                     // 259
				confirmButtonText: t('Yes_mute_user'),                                                                             // 260
				cancelButtonText: t('Cancel'),                                                                                     // 261
				closeOnConfirm: false,                                                                                             // 262
				html: false                                                                                                        // 263
			}, function () {                                                                                                    // 254
				return Meteor.call('muteUserInRoom', {                                                                             // 265
					rid: rid,                                                                                                         // 265
					username: user.username                                                                                           // 265
				}, function (err) {                                                                                                // 265
					if (err) {                                                                                                        // 266
						return handleError(err);                                                                                         // 267
					}                                                                                                                 // 268
                                                                                                                       //
					return swal({                                                                                                     // 269
						title: t('Muted'),                                                                                               // 270
						text: t('User_has_been_muted_in_s', room.name),                                                                  // 271
						type: 'success',                                                                                                 // 272
						timer: 2000,                                                                                                     // 273
						showConfirmButton: false                                                                                         // 274
					});                                                                                                               // 269
				});                                                                                                                // 276
			});                                                                                                                 // 277
		}                                                                                                                    // 278
	},                                                                                                                    // 279
	'click .unmute-user': function (e, t) {                                                                               // 281
		e.preventDefault();                                                                                                  // 282
		var rid = Session.get('openedRoom');                                                                                 // 283
		var user = t.user.get(); //const room = ChatRoom.findOne(rid); // never used                                         // 284
                                                                                                                       //
		if (user && RocketChat.authz.hasAllPermission('mute-user', rid)) {                                                   // 286
			return Meteor.call('unmuteUserInRoom', {                                                                            // 287
				rid: rid,                                                                                                          // 287
				username: user.username                                                                                            // 287
			}, function (err) {                                                                                                 // 287
				if (err) {                                                                                                         // 288
					return handleError(err);                                                                                          // 289
				}                                                                                                                  // 290
                                                                                                                       //
				return toastr.success(TAPi18n.__('User_unmuted_in_room'));                                                         // 291
			});                                                                                                                 // 292
		} else {                                                                                                             // 293
			return toastr.error(TAPi18n.__('error-not-allowed'));                                                               // 294
		}                                                                                                                    // 295
	},                                                                                                                    // 296
	'click .set-moderator': function (e, t) {                                                                             // 298
		var _this2 = this;                                                                                                   // 298
                                                                                                                       //
		e.preventDefault();                                                                                                  // 299
		var user = t.user.get();                                                                                             // 300
                                                                                                                       //
		if (user) {                                                                                                          // 301
			var userModerator = RoomRoles.findOne({                                                                             // 302
				rid: Session.get('openedRoom'),                                                                                    // 302
				'u._id': user._id,                                                                                                 // 302
				roles: 'moderator'                                                                                                 // 302
			}, {                                                                                                                // 302
				fields: {                                                                                                          // 302
					_id: 1                                                                                                            // 302
				}                                                                                                                  // 302
			});                                                                                                                 // 302
                                                                                                                       //
			if (userModerator == null) {                                                                                        // 303
				return Meteor.call('addRoomModerator', Session.get('openedRoom'), user._id, function (err) {                       // 304
					if (err) {                                                                                                        // 305
						return handleError(err);                                                                                         // 306
					}                                                                                                                 // 307
                                                                                                                       //
					var room = ChatRoom.findOne(Session.get('openedRoom'));                                                           // 309
					return toastr.success(TAPi18n.__('User__username__is_now_a_moderator_of__room_name_', {                           // 310
						username: _this2.username,                                                                                       // 310
						room_name: room.name                                                                                             // 310
					}));                                                                                                              // 310
				});                                                                                                                // 311
			}                                                                                                                   // 312
		}                                                                                                                    // 313
	},                                                                                                                    // 314
	'click .unset-moderator': function (e, t) {                                                                           // 316
		var _this3 = this;                                                                                                   // 316
                                                                                                                       //
		e.preventDefault();                                                                                                  // 317
		var user = t.user.get();                                                                                             // 318
                                                                                                                       //
		if (user) {                                                                                                          // 319
			var userModerator = RoomRoles.findOne({                                                                             // 320
				rid: Session.get('openedRoom'),                                                                                    // 320
				'u._id': user._id,                                                                                                 // 320
				roles: 'moderator'                                                                                                 // 320
			}, {                                                                                                                // 320
				fields: {                                                                                                          // 320
					_id: 1                                                                                                            // 320
				}                                                                                                                  // 320
			});                                                                                                                 // 320
                                                                                                                       //
			if (userModerator != null) {                                                                                        // 321
				return Meteor.call('removeRoomModerator', Session.get('openedRoom'), user._id, function (err) {                    // 322
					if (err) {                                                                                                        // 323
						return handleError(err);                                                                                         // 324
					}                                                                                                                 // 325
                                                                                                                       //
					var room = ChatRoom.findOne(Session.get('openedRoom'));                                                           // 327
					return toastr.success(TAPi18n.__('User__username__removed_from__room_name__moderators', {                         // 328
						username: _this3.username,                                                                                       // 328
						room_name: room.name                                                                                             // 328
					}));                                                                                                              // 328
				});                                                                                                                // 329
			}                                                                                                                   // 330
		}                                                                                                                    // 331
	},                                                                                                                    // 332
	'click .set-owner': function (e, t) {                                                                                 // 334
		var _this4 = this;                                                                                                   // 334
                                                                                                                       //
		e.preventDefault();                                                                                                  // 335
		var user = t.user.get();                                                                                             // 336
                                                                                                                       //
		if (user) {                                                                                                          // 337
			var userOwner = RoomRoles.findOne({                                                                                 // 338
				rid: Session.get('openedRoom'),                                                                                    // 338
				'u._id': user._id,                                                                                                 // 338
				roles: 'owner'                                                                                                     // 338
			}, {                                                                                                                // 338
				fields: {                                                                                                          // 338
					_id: 1                                                                                                            // 338
				}                                                                                                                  // 338
			});                                                                                                                 // 338
                                                                                                                       //
			if (userOwner == null) {                                                                                            // 339
				return Meteor.call('addRoomOwner', Session.get('openedRoom'), user._id, function (err) {                           // 340
					if (err) {                                                                                                        // 341
						return handleError(err);                                                                                         // 342
					}                                                                                                                 // 343
                                                                                                                       //
					var room = ChatRoom.findOne(Session.get('openedRoom'));                                                           // 345
					return toastr.success(TAPi18n.__('User__username__is_now_a_owner_of__room_name_', {                               // 346
						username: _this4.username,                                                                                       // 346
						room_name: room.name                                                                                             // 346
					}));                                                                                                              // 346
				});                                                                                                                // 347
			}                                                                                                                   // 348
		}                                                                                                                    // 349
	},                                                                                                                    // 350
	'click .unset-owner': function (e, t) {                                                                               // 352
		var _this5 = this;                                                                                                   // 352
                                                                                                                       //
		e.preventDefault();                                                                                                  // 353
		var user = t.user.get();                                                                                             // 354
                                                                                                                       //
		if (user) {                                                                                                          // 355
			var userOwner = RoomRoles.findOne({                                                                                 // 356
				rid: Session.get('openedRoom'),                                                                                    // 356
				'u._id': user._id,                                                                                                 // 356
				roles: 'owner'                                                                                                     // 356
			}, {                                                                                                                // 356
				fields: {                                                                                                          // 356
					_id: 1                                                                                                            // 356
				}                                                                                                                  // 356
			});                                                                                                                 // 356
                                                                                                                       //
			if (userOwner != null) {                                                                                            // 357
				return Meteor.call('removeRoomOwner', Session.get('openedRoom'), user._id, function (err) {                        // 358
					if (err) {                                                                                                        // 359
						return handleError(err);                                                                                         // 360
					}                                                                                                                 // 361
                                                                                                                       //
					var room = ChatRoom.findOne(Session.get('openedRoom'));                                                           // 363
					return toastr.success(TAPi18n.__('User__username__removed_from__room_name__owners', {                             // 364
						username: _this5.username,                                                                                       // 364
						room_name: room.name                                                                                             // 364
					}));                                                                                                              // 364
				});                                                                                                                // 365
			}                                                                                                                   // 366
		}                                                                                                                    // 367
	},                                                                                                                    // 368
	'click .deactivate': function (e, instance) {                                                                         // 370
		e.stopPropagation();                                                                                                 // 371
		e.preventDefault();                                                                                                  // 372
		var user = instance.user.get();                                                                                      // 373
                                                                                                                       //
		if (user) {                                                                                                          // 374
			return Meteor.call('setUserActiveStatus', user._id, false, function (error, result) {                               // 375
				if (result) {                                                                                                      // 376
					toastr.success(t('User_has_been_deactivated'));                                                                   // 377
				}                                                                                                                  // 378
                                                                                                                       //
				if (error) {                                                                                                       // 379
					return handleError(error);                                                                                        // 380
				}                                                                                                                  // 381
			});                                                                                                                 // 382
		}                                                                                                                    // 383
	},                                                                                                                    // 384
	'click .activate': function (e, instance) {                                                                           // 386
		e.stopPropagation();                                                                                                 // 387
		e.preventDefault();                                                                                                  // 388
		var user = instance.user.get();                                                                                      // 389
                                                                                                                       //
		if (user) {                                                                                                          // 390
			return Meteor.call('setUserActiveStatus', user._id, true, function (error, result) {                                // 391
				if (result) {                                                                                                      // 392
					toastr.success(t('User_has_been_activated'));                                                                     // 393
				}                                                                                                                  // 394
                                                                                                                       //
				if (error) {                                                                                                       // 395
					return handleError(error);                                                                                        // 396
				}                                                                                                                  // 397
			});                                                                                                                 // 398
		}                                                                                                                    // 399
	},                                                                                                                    // 400
	'click .make-admin': function (e, instance) {                                                                         // 402
		e.stopPropagation();                                                                                                 // 403
		e.preventDefault();                                                                                                  // 404
		var user = instance.user.get();                                                                                      // 405
                                                                                                                       //
		if (user) {                                                                                                          // 406
			return Meteor.call('setAdminStatus', user._id, true, function (error, result) {                                     // 407
				if (result) {                                                                                                      // 408
					toastr.success(t('User_is_now_an_admin'));                                                                        // 409
				}                                                                                                                  // 410
                                                                                                                       //
				if (error) {                                                                                                       // 411
					return handleError(error);                                                                                        // 412
				}                                                                                                                  // 413
			});                                                                                                                 // 414
		}                                                                                                                    // 415
	},                                                                                                                    // 416
	'click .remove-admin': function (e, instance) {                                                                       // 418
		e.stopPropagation();                                                                                                 // 419
		e.preventDefault();                                                                                                  // 420
		var user = instance.user.get();                                                                                      // 421
                                                                                                                       //
		if (user) {                                                                                                          // 422
			return Meteor.call('setAdminStatus', user._id, false, function (error, result) {                                    // 423
				if (result) {                                                                                                      // 424
					toastr.success(t('User_is_no_longer_an_admin'));                                                                  // 425
				}                                                                                                                  // 426
                                                                                                                       //
				if (error) {                                                                                                       // 427
					return handleError(error);                                                                                        // 428
				}                                                                                                                  // 429
			});                                                                                                                 // 430
		}                                                                                                                    // 431
	},                                                                                                                    // 432
	'click .delete': function (e, instance) {                                                                             // 434
		e.stopPropagation();                                                                                                 // 435
		e.preventDefault();                                                                                                  // 436
		var user = instance.user.get();                                                                                      // 437
                                                                                                                       //
		if (user) {                                                                                                          // 438
			return swal({                                                                                                       // 439
				title: t('Are_you_sure'),                                                                                          // 440
				text: t('Delete_User_Warning'),                                                                                    // 441
				type: 'warning',                                                                                                   // 442
				showCancelButton: true,                                                                                            // 443
				confirmButtonColor: '#DD6B55',                                                                                     // 444
				confirmButtonText: t('Yes_delete_it'),                                                                             // 445
				cancelButtonText: t('Cancel'),                                                                                     // 446
				closeOnConfirm: false,                                                                                             // 447
				html: false                                                                                                        // 448
			}, function () {                                                                                                    // 439
				swal.disableButtons();                                                                                             // 450
				return Meteor.call('deleteUser', user._id, function (error) {                                                      // 451
					if (error) {                                                                                                      // 452
						handleError(error);                                                                                              // 453
						return swal.enableButtons();                                                                                     // 454
					} else {                                                                                                          // 455
						swal({                                                                                                           // 456
							title: t('Deleted'),                                                                                            // 457
							text: t('User_has_been_deleted'),                                                                               // 458
							type: 'success',                                                                                                // 459
							timer: 2000,                                                                                                    // 460
							showConfirmButton: false                                                                                        // 461
						});                                                                                                              // 456
						return instance.tabBar.close();                                                                                  // 464
					}                                                                                                                 // 465
				});                                                                                                                // 466
			});                                                                                                                 // 467
		}                                                                                                                    // 468
	},                                                                                                                    // 469
	'click .edit-user': function (e, instance) {                                                                          // 471
		e.stopPropagation();                                                                                                 // 472
		e.preventDefault();                                                                                                  // 473
		var user = instance.user.get();                                                                                      // 474
                                                                                                                       //
		if (user) {                                                                                                          // 475
			return instance.editingUser.set(user._id);                                                                          // 476
		}                                                                                                                    // 477
	},                                                                                                                    // 478
	'click .block-user': function (e, instance) {                                                                         // 480
		e.stopPropagation();                                                                                                 // 481
		e.preventDefault();                                                                                                  // 482
		return Meteor.call('blockUser', {                                                                                    // 484
			rid: Session.get('openedRoom'),                                                                                     // 484
			blocked: instance.user.get()._id                                                                                    // 484
		}, function (error, result) {                                                                                        // 484
			if (result) {                                                                                                       // 485
				toastr.success(t('User_is_blocked'));                                                                              // 486
			}                                                                                                                   // 487
                                                                                                                       //
			if (error) {                                                                                                        // 488
				return handleError(error);                                                                                         // 489
			}                                                                                                                   // 490
		});                                                                                                                  // 491
	},                                                                                                                    // 492
	'click .unblock-user': function (e, instance) {                                                                       // 494
		e.stopPropagation();                                                                                                 // 495
		e.preventDefault();                                                                                                  // 496
		return Meteor.call('unblockUser', {                                                                                  // 498
			rid: Session.get('openedRoom'),                                                                                     // 498
			blocked: instance.user.get()._id                                                                                    // 498
		}, function (error, result) {                                                                                        // 498
			if (result) {                                                                                                       // 499
				toastr.success(t('User_is_unblocked'));                                                                            // 500
			}                                                                                                                   // 501
                                                                                                                       //
			if (error) {                                                                                                        // 502
				return handleError(error);                                                                                         // 503
			}                                                                                                                   // 504
		});                                                                                                                  // 505
	}                                                                                                                     // 506
});                                                                                                                    // 186
Template.userInfo.onCreated(function () {                                                                              // 509
	var _this6 = this;                                                                                                    // 509
                                                                                                                       //
	this.now = new ReactiveVar(moment());                                                                                 // 510
	this.user = new ReactiveVar();                                                                                        // 511
	this.editingUser = new ReactiveVar();                                                                                 // 512
	this.loadingUserInfo = new ReactiveVar(true);                                                                         // 513
	this.loadedUsername = new ReactiveVar();                                                                              // 514
	this.tabBar = Template.currentData().tabBar;                                                                          // 515
	Meteor.setInterval(function () {                                                                                      // 517
		return _this6.now.set(moment());                                                                                     // 518
	}, 30000);                                                                                                            // 519
	this.autorun(function () {                                                                                            // 522
		var username = _this6.loadedUsername.get();                                                                          // 523
                                                                                                                       //
		if (username == null) {                                                                                              // 525
			_this6.loadingUserInfo.set(false);                                                                                  // 526
                                                                                                                       //
			return;                                                                                                             // 527
		}                                                                                                                    // 528
                                                                                                                       //
		_this6.loadingUserInfo.set(true);                                                                                    // 530
                                                                                                                       //
		return _this6.subscribe('fullUserData', username, 1, function () {                                                   // 532
			return _this6.loadingUserInfo.set(false);                                                                           // 533
		});                                                                                                                  // 534
	});                                                                                                                   // 535
	this.autorun(function () {                                                                                            // 537
		var data = Template.currentData();                                                                                   // 538
                                                                                                                       //
		if (data.clear != null) {                                                                                            // 539
			return _this6.clear = data.clear;                                                                                   // 540
		}                                                                                                                    // 541
	});                                                                                                                   // 542
	this.autorun(function () {                                                                                            // 544
		var data = Template.currentData();                                                                                   // 545
                                                                                                                       //
		var user = _this6.user.get();                                                                                        // 546
                                                                                                                       //
		return _this6.loadedUsername.set((user != null ? user.username : undefined) || (data != null ? data.username : undefined));
	});                                                                                                                   // 548
	return this.autorun(function () {                                                                                     // 550
		var filter = void 0;                                                                                                 // 551
		var data = Template.currentData();                                                                                   // 552
                                                                                                                       //
		if (data && data.username != null) {                                                                                 // 553
			filter = {                                                                                                          // 554
				username: data.username                                                                                            // 554
			};                                                                                                                  // 554
		} else if (data && data._id != null) {                                                                               // 555
			filter = {                                                                                                          // 556
				_id: data._id                                                                                                      // 556
			};                                                                                                                  // 556
		}                                                                                                                    // 557
                                                                                                                       //
		var user = Meteor.users.findOne(filter);                                                                             // 559
		return _this6.user.set(user);                                                                                        // 561
	});                                                                                                                   // 562
});                                                                                                                    // 563
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"flexTabBar.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_ui-flextab/client/flexTabBar.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.flexTabBar.helpers({                                                                                          // 1
	active: function () {                                                                                                 // 2
		if (this.template === Template.instance().tabBar.getTemplate() && Template.instance().tabBar.getState() === 'opened') {
			return 'active';                                                                                                    // 4
		}                                                                                                                    // 5
	},                                                                                                                    // 6
	buttons: function () {                                                                                                // 8
		return RocketChat.TabBar.getButtons();                                                                               // 9
	},                                                                                                                    // 10
	title: function () {                                                                                                  // 12
		return t(this.i18nTitle) || this.title;                                                                              // 13
	},                                                                                                                    // 14
	visible: function () {                                                                                                // 16
		if (!Meteor.userId() && !this.anonymous) {                                                                           // 17
			return 'hidden';                                                                                                    // 18
		}                                                                                                                    // 19
                                                                                                                       //
		if (this.groups.indexOf(Template.instance().tabBar.currentGroup()) === -1) {                                         // 21
			return 'hidden';                                                                                                    // 22
		}                                                                                                                    // 23
	},                                                                                                                    // 24
	opened: function () {                                                                                                 // 26
		return Template.instance().tabBar.getState();                                                                        // 27
	},                                                                                                                    // 28
	template: function () {                                                                                               // 30
		return Template.instance().tabBar.getTemplate();                                                                     // 31
	},                                                                                                                    // 32
	flexData: function () {                                                                                               // 34
		return Object.assign(Template.currentData().data || {}, {                                                            // 35
			tabBar: Template.instance().tabBar                                                                                  // 36
		});                                                                                                                  // 35
	}                                                                                                                     // 38
});                                                                                                                    // 1
Template.flexTabBar.events({                                                                                           // 41
	'click .tab-button': function (e, instance) {                                                                         // 42
		e.preventDefault();                                                                                                  // 43
                                                                                                                       //
		if (instance.tabBar.getState() === 'opened' && instance.tabBar.getTemplate() === this.template) {                    // 44
			return instance.tabBar.close();                                                                                     // 45
		} else {                                                                                                             // 46
			return instance.tabBar.open(this);                                                                                  // 47
		}                                                                                                                    // 48
	}                                                                                                                     // 49
});                                                                                                                    // 41
Template.flexTabBar.onCreated(function () {                                                                            // 52
	this.tabBar = Template.currentData().tabBar;                                                                          // 53
});                                                                                                                    // 54
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:ui-flextab/client/template.flexTabBar.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/template.membersList.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/template.messageSearch.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/template.uploadedFilesList.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/template.userEdit.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/template.userInfo.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/flexTabBar.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/membersList.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/messageSearch.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/uploadedFilesList.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/userEdit.js");
require("./node_modules/meteor/rocketchat:ui-flextab/client/tabs/userInfo.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:ui-flextab'] = {};

})();
