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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:message-attachments":{"client":{"template.messageAttachment.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_message-attachments/client/template.messageAttachment.js                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("messageAttachment");                                                                         // 2
Template["messageAttachment"] = new Template("Template.messageAttachment", (function() {                           // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "attachment"                                                                                            // 6
  }, HTML.Raw("\n\t\t<!-- <div>fallback: {{fallback}}</div> -->\n\t\t"), Blaze.View("lookup:pretext", function() {
    return Spacebars.mustache(view.lookup("pretext"));                                                             // 8
  }), "\n\t\t", HTML.DIV({                                                                                         // 9
    class: "attachment-block"                                                                                      // 10
  }, "\n\t\t\t", HTML.DIV({                                                                                        // 11
    class: "attachment-block-border background-info-font-color",                                                   // 12
    style: function() {                                                                                            // 13
      return [ "background-color: ", Spacebars.mustache(view.lookup("color")) ];                                   // 14
    }                                                                                                              // 15
  }), "\n\t\t\t", Blaze.If(function() {                                                                            // 16
    return Spacebars.call(view.lookup("author_name"));                                                             // 17
  }, function() {                                                                                                  // 18
    return [ "\n\t\t\t\t", Blaze.If(function() {                                                                   // 19
      return Spacebars.call(view.lookup("author_link"));                                                           // 20
    }, function() {                                                                                                // 21
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 22
        class: "attachment-author"                                                                                 // 23
      }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 24
        return Spacebars.call(view.lookup("author_icon"));                                                         // 25
      }, function() {                                                                                              // 26
        return [ "\n\t\t\t\t\t\t\t", HTML.IMG({                                                                    // 27
          src: function() {                                                                                        // 28
            return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("author_icon"));                      // 29
          }                                                                                                        // 30
        }), "\n\t\t\t\t\t\t" ];                                                                                    // 31
      }), "\n\t\t\t\t\t\t", HTML.A({                                                                               // 32
        href: function() {                                                                                         // 33
          return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("author_link"));                        // 34
        },                                                                                                         // 35
        target: "_blank"                                                                                           // 36
      }, Blaze.View("lookup:author_name", function() {                                                             // 37
        return Spacebars.mustache(view.lookup("author_name"));                                                     // 38
      })), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                 // 39
        return Spacebars.call(view.lookup("ts"));                                                                  // 40
      }, function() {                                                                                              // 41
        return [ "\n\t\t\t\t\t\t\t", HTML.SPAN({                                                                   // 42
          class: "time"                                                                                            // 43
        }, Blaze.If(function() {                                                                                   // 44
          return Spacebars.call(view.lookup("message_link"));                                                      // 45
        }, function() {                                                                                            // 46
          return HTML.A({                                                                                          // 47
            href: function() {                                                                                     // 48
              return Spacebars.mustache(view.lookup("message_link"));                                              // 49
            }                                                                                                      // 50
          }, Blaze.View("lookup:time", function() {                                                                // 51
            return Spacebars.mustache(view.lookup("time"));                                                        // 52
          }));                                                                                                     // 53
        }, function() {                                                                                            // 54
          return Blaze.View("lookup:time", function() {                                                            // 55
            return Spacebars.mustache(view.lookup("time"));                                                        // 56
          });                                                                                                      // 57
        })), "\n\t\t\t\t\t\t" ];                                                                                   // 58
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 59
    }, function() {                                                                                                // 60
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 61
        class: "attachment-author"                                                                                 // 62
      }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 63
        return Spacebars.call(view.lookup("author_icon"));                                                         // 64
      }, function() {                                                                                              // 65
        return [ "\n\t\t\t\t\t\t\t", HTML.IMG({                                                                    // 66
          src: function() {                                                                                        // 67
            return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("author_icon"));                      // 68
          }                                                                                                        // 69
        }), "\n\t\t\t\t\t\t" ];                                                                                    // 70
      }), "\n\t\t\t\t\t\t", Blaze.View("lookup:author_name", function() {                                          // 71
        return Spacebars.mustache(view.lookup("author_name"));                                                     // 72
      }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                    // 73
        return Spacebars.call(view.lookup("ts"));                                                                  // 74
      }, function() {                                                                                              // 75
        return [ "\n\t\t\t\t\t\t", HTML.SPAN({                                                                     // 76
          class: "time"                                                                                            // 77
        }, Blaze.If(function() {                                                                                   // 78
          return Spacebars.call(view.lookup("message_link"));                                                      // 79
        }, function() {                                                                                            // 80
          return HTML.A({                                                                                          // 81
            href: function() {                                                                                     // 82
              return Spacebars.mustache(view.lookup("message_link"));                                              // 83
            }                                                                                                      // 84
          }, Blaze.View("lookup:time", function() {                                                                // 85
            return Spacebars.mustache(view.lookup("time"));                                                        // 86
          }));                                                                                                     // 87
        }, function() {                                                                                            // 88
          return Blaze.View("lookup:time", function() {                                                            // 89
            return Spacebars.mustache(view.lookup("time"));                                                        // 90
          });                                                                                                      // 91
        })), "\n\t\t\t\t\t" ];                                                                                     // 92
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 93
    }), "\n\t\t\t" ];                                                                                              // 94
  }), "\n\t\t\t", Blaze.If(function() {                                                                            // 95
    return Spacebars.call(view.lookup("title"));                                                                   // 96
  }, function() {                                                                                                  // 97
    return [ "\n\t\t\t\t", HTML.DIV({                                                                              // 98
      class: "attachment-title"                                                                                    // 99
    }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                       // 100
      return Spacebars.call(view.lookup("title_link"));                                                            // 101
    }, function() {                                                                                                // 102
      return [ "\n\t\t\t\t\t\t", HTML.A({                                                                          // 103
        href: function() {                                                                                         // 104
          return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("title_link"));                         // 105
        },                                                                                                         // 106
        target: "_blank"                                                                                           // 107
      }, Blaze.View("lookup:title", function() {                                                                   // 108
        return Spacebars.mustache(view.lookup("title"));                                                           // 109
      })), "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                 // 110
        return Spacebars.call(view.lookup("title_link_download"));                                                 // 111
      }, function() {                                                                                              // 112
        return [ "\n\t\t\t\t\t\t\t", HTML.A({                                                                      // 113
          class: "icon-download attachment-download-icon",                                                         // 114
          href: function() {                                                                                       // 115
            return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("title_link"));                       // 116
          },                                                                                                       // 117
          target: "_blank",                                                                                        // 118
          download: ""                                                                                             // 119
        }), "\n\t\t\t\t\t\t" ];                                                                                    // 120
      }), "\n\t\t\t\t\t" ];                                                                                        // 121
    }, function() {                                                                                                // 122
      return [ "\n\t\t\t\t\t\t", Blaze.View("lookup:title", function() {                                           // 123
        return Spacebars.mustache(view.lookup("title"));                                                           // 124
      }), "\n\t\t\t\t\t" ];                                                                                        // 125
    }), "\n\t\t\t\t\t", Blaze.If(function() {                                                                      // 126
      return Spacebars.call(view.lookup("collapsed"));                                                             // 127
    }, function() {                                                                                                // 128
      return [ "\n\t\t\t\t\t\t", HTML.SPAN({                                                                       // 129
        class: "collapse-switch icon-right-dir",                                                                   // 130
        "data-index": function() {                                                                                 // 131
          return Spacebars.mustache(view.lookup("index"));                                                         // 132
        },                                                                                                         // 133
        "data-collapsed": function() {                                                                             // 134
          return Spacebars.mustache(view.lookup("collapsed"));                                                     // 135
        }                                                                                                          // 136
      }), "\n\t\t\t\t\t" ];                                                                                        // 137
    }, function() {                                                                                                // 138
      return [ "\n\t\t\t\t\t\t", HTML.SPAN({                                                                       // 139
        class: "collapse-switch icon-down-dir",                                                                    // 140
        "data-index": function() {                                                                                 // 141
          return Spacebars.mustache(view.lookup("index"));                                                         // 142
        },                                                                                                         // 143
        "data-collapsed": function() {                                                                             // 144
          return Spacebars.mustache(view.lookup("collapsed"));                                                     // 145
        }                                                                                                          // 146
      }), "\n\t\t\t\t\t" ];                                                                                        // 147
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                               // 148
  }), "\n\n\t\t\t", Blaze.Unless(function() {                                                                      // 149
    return Spacebars.call(view.lookup("collapsed"));                                                               // 150
  }, function() {                                                                                                  // 151
    return [ "\n\t\t\t\t", HTML.DIV({                                                                              // 152
      class: "attachment-flex"                                                                                     // 153
    }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                       // 154
      return Spacebars.call(view.lookup("thumb_url"));                                                             // 155
    }, function() {                                                                                                // 156
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                        // 157
        class: "attachment-thumb"                                                                                  // 158
      }, "\n\t\t\t\t\t\t\t", HTML.IMG({                                                                            // 159
        src: function() {                                                                                          // 160
          return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("thumb_url"));                          // 161
        }                                                                                                          // 162
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 163
    }), "\n\n\t\t\t\t\t", Blaze.If(function() {                                                                    // 164
      return Spacebars.call(view.lookup("text"));                                                                  // 165
    }, function() {                                                                                                // 166
      return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                        // 167
        class: "attachment-flex-column-grow attachment-text"                                                       // 168
      }, "\n\t\t\t\t\t\t\t", Blaze.View("lookup:parsedText", function() {                                          // 169
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("parsedText")));                                   // 170
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 171
    }), "\n\t\t\t\t"), "\n\t\t\t" ];                                                                               // 172
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                          // 173
    return Spacebars.call(view.lookup("image_url"));                                                               // 174
  }, function() {                                                                                                  // 175
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                               // 176
      return Spacebars.call(view.lookup("collapsed"));                                                             // 177
    }, function() {                                                                                                // 178
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 179
        class: "attachment-image"                                                                                  // 180
      }, "\n\t\t\t\t\t", Blaze.If(function() {                                                                     // 181
        return Spacebars.call(view.lookup("loadImage"));                                                           // 182
      }, function() {                                                                                              // 183
        return [ "\n\t\t\t\t\t\t", HTML.FIGURE("\n\t\t\t\t\t\t\t", HTML.DIV({                                      // 184
          class: "inline-image",                                                                                   // 185
          style: function() {                                                                                      // 186
            return [ "background-image: url('", Spacebars.mustache(view.lookup("fixCordova"), view.lookup("image_url")), "');" ];
          }                                                                                                        // 188
        }, "\n\t\t\t\t\t\t\t\t", HTML.IMG({                                                                        // 189
          src: function() {                                                                                        // 190
            return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("image_url"));                        // 191
          },                                                                                                       // 192
          height: function() {                                                                                     // 193
            return Spacebars.mustache(view.lookup("getImageHeight"), Spacebars.dot(view.lookup("image_dimensions"), "height"));
          },                                                                                                       // 195
          class: "gallery-item",                                                                                   // 196
          "data-title": function() {                                                                               // 197
            return Spacebars.mustache(view.lookup("title"));                                                       // 198
          },                                                                                                       // 199
          "data-description": function() {                                                                         // 200
            return Spacebars.mustache(view.lookup("description"));                                                 // 201
          }                                                                                                        // 202
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                         // 203
          return Spacebars.call(view.lookup("description"));                                                       // 204
        }, function() {                                                                                            // 205
          return [ "\n\t\t\t\t\t\t\t\t", HTML.FIGCAPTION({                                                         // 206
            class: "attachment-description"                                                                        // 207
          }, Blaze.View("lookup:description", function() {                                                         // 208
            return Spacebars.mustache(view.lookup("description"));                                                 // 209
          })), "\n\t\t\t\t\t\t\t" ];                                                                               // 210
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                   // 211
      }, function() {                                                                                              // 212
        return [ "\n\t\t\t\t\t\t", HTML.DIV({                                                                      // 213
          class: "image-to-download",                                                                              // 214
          "data-url": function() {                                                                                 // 215
            return Spacebars.mustache(view.lookup("image_url"));                                                   // 216
          }                                                                                                        // 217
        }, "\n\t\t\t\t\t\t\t", HTML.I({                                                                            // 218
          class: "icon-picture"                                                                                    // 219
        }), "\n\t\t\t\t\t\t\t", HTML.DIV("click to load"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                    // 220
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 221
    }), "\n\t\t\t" ];                                                                                              // 222
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                          // 223
    return Spacebars.call(view.lookup("audio_url"));                                                               // 224
  }, function() {                                                                                                  // 225
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                               // 226
      return Spacebars.call(view.lookup("collapsed"));                                                             // 227
    }, function() {                                                                                                // 228
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 229
        class: "attachment-audio"                                                                                  // 230
      }, "\n\t\t\t\t\t\t", HTML.AUDIO({                                                                            // 231
        controls: ""                                                                                               // 232
      }, "\n\t\t\t\t\t\t\t", HTML.SOURCE({                                                                         // 233
        src: function() {                                                                                          // 234
          return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("audio_url"));                          // 235
        },                                                                                                         // 236
        type: function() {                                                                                         // 237
          return Spacebars.mustache(view.lookup("audio_type"));                                                    // 238
        },                                                                                                         // 239
        "data-description": function() {                                                                           // 240
          return Spacebars.mustache(view.lookup("description"));                                                   // 241
        }                                                                                                          // 242
      }), "\n\t\t\t\t\t\t\tYour browser does not support the audio element.\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];                                                                                              // 244
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                          // 245
    return Spacebars.call(view.lookup("video_url"));                                                               // 246
  }, function() {                                                                                                  // 247
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                               // 248
      return Spacebars.call(view.lookup("collapsed"));                                                             // 249
    }, function() {                                                                                                // 250
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 251
        class: "attachment-video"                                                                                  // 252
      }, "\n\t\t\t\t\t\t", HTML.VIDEO({                                                                            // 253
        controls: "",                                                                                              // 254
        class: "inline-video"                                                                                      // 255
      }, "\n\t\t\t\t\t\t\t", HTML.SOURCE({                                                                         // 256
        src: function() {                                                                                          // 257
          return Spacebars.mustache(view.lookup("fixCordova"), view.lookup("video_url"));                          // 258
        },                                                                                                         // 259
        type: function() {                                                                                         // 260
          return Spacebars.mustache(view.lookup("video_type"));                                                    // 261
        },                                                                                                         // 262
        "data-description": function() {                                                                           // 263
          return Spacebars.mustache(view.lookup("description"));                                                   // 264
        }                                                                                                          // 265
      }), "\n\t\t\t\t\t\t\tYour browser does not support the video element.\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];
    }), "\n\t\t\t" ];                                                                                              // 267
  }), "\n\n\t\t\t", Blaze.If(function() {                                                                          // 268
    return Spacebars.call(view.lookup("fields"));                                                                  // 269
  }, function() {                                                                                                  // 270
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                               // 271
      return Spacebars.call(view.lookup("collapsed"));                                                             // 272
    }, function() {                                                                                                // 273
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 274
        class: "attachment-fields"                                                                                 // 275
      }, "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                 // 276
        return Spacebars.call(view.lookup("fields"));                                                              // 277
      }, function() {                                                                                              // 278
        return [ "\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                     // 279
          return Spacebars.call(view.lookup("short"));                                                             // 280
        }, function() {                                                                                            // 281
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                // 282
            class: "attachment-field"                                                                              // 283
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 284
            class: "attachment-field-title"                                                                        // 285
          }, Blaze.View("lookup:title", function() {                                                               // 286
            return Spacebars.mustache(view.lookup("title"));                                                       // 287
          })), "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:RocketChatMarkdown", function() {                        // 288
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("value")));
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                         // 290
        }), "\n\t\t\t\t\t\t" ];                                                                                    // 291
      }), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                // 292
        return Spacebars.call(view.lookup("fields"));                                                              // 293
      }, function() {                                                                                              // 294
        return [ "\n\t\t\t\t\t\t\t", Blaze.If(function() {                                                         // 295
          return Spacebars.call(view.lookup("short"));                                                             // 296
        }, function() {                                                                                            // 297
          return [ "\n\t\t\t\t\t\t\t\t", HTML.DIV({                                                                // 298
            class: "attachment-field attachment-field-short"                                                       // 299
          }, "\n\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                    // 300
            class: "attachment-field-title"                                                                        // 301
          }, Blaze.View("lookup:title", function() {                                                               // 302
            return Spacebars.mustache(view.lookup("title"));                                                       // 303
          })), "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:RocketChatMarkdown", function() {                        // 304
            return Spacebars.makeRaw(Spacebars.mustache(view.lookup("RocketChatMarkdown"), view.lookup("value")));
          }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                         // 306
        }), "\n\t\t\t\t\t\t" ];                                                                                    // 307
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                         // 308
    }), "\n\t\t\t" ];                                                                                              // 309
  }), "\n\n\t\t\t", Blaze.Unless(function() {                                                                      // 310
    return Spacebars.call(view.lookup("image_url"));                                                               // 311
  }, function() {                                                                                                  // 312
    return [ "\n\t\t\t\t", Blaze.If(function() {                                                                   // 313
      return Spacebars.call(view.lookup("description"));                                                           // 314
    }, function() {                                                                                                // 315
      return [ "\n\t\t\t\t\t", HTML.DIV({                                                                          // 316
        class: "attachment-description"                                                                            // 317
      }, Blaze.View("lookup:description", function() {                                                             // 318
        return Spacebars.mustache(view.lookup("description"));                                                     // 319
      })), "\n\t\t\t\t" ];                                                                                         // 320
    }), "\n\t\t\t" ];                                                                                              // 321
  }), "\n\n\t\t\t", Blaze.Each(function() {                                                                        // 322
    return Spacebars.call(view.lookup("attachments"));                                                             // 323
  }, function() {                                                                                                  // 324
    return [ "\n\t\t\t\t", Blaze.View("lookup:injectIndex", function() {                                           // 325
      return Spacebars.mustache(view.lookup("injectIndex"), view.lookup("."), Spacebars.dot(view.lookup(".."), "index"), view.lookup("@index"));
    }), " ", Spacebars.include(view.lookupTemplate("messageAttachment")), "\n\t\t\t" ];                            // 327
  }), "\n\t\t"), "\n\t");                                                                                          // 328
}));                                                                                                               // 329
                                                                                                                   // 330
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageAttachment.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_message-attachments/client/messageAttachment.js                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var moment = void 0;                                                                                               // 1
module.watch(require("moment"), {                                                                                  // 1
	"default": function (v) {                                                                                         // 1
		moment = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
var colors = {                                                                                                     // 2
	good: '#35AC19',                                                                                                  // 3
	warning: '#FCB316',                                                                                               // 4
	danger: '#D30230'                                                                                                 // 5
};                                                                                                                 // 2
                                                                                                                   //
var fixCordova = function (url) {                                                                                  // 7
	if (url && url.indexOf('data:image') === 0) {                                                                     // 8
		return url;                                                                                                      // 9
	}                                                                                                                 // 10
                                                                                                                   //
	if (Meteor.isCordova && url && url[0] === '/') {                                                                  // 11
		url = Meteor.absoluteUrl().replace(/\/$/, '') + url;                                                             // 12
                                                                                                                   //
		var query = "rc_uid=" + Meteor.userId() + "&rc_token=" + Meteor._localStorage.getItem('Meteor.loginToken');      // 13
                                                                                                                   //
		if (url.indexOf('?') === -1) {                                                                                   // 14
			url = url + "?" + query;                                                                                        // 15
		} else {                                                                                                         // 16
			url = url + "&" + query;                                                                                        // 17
		}                                                                                                                // 18
	}                                                                                                                 // 19
                                                                                                                   //
	if (Meteor.settings['public'].sandstorm || url.match(/^(https?:)?\/\//i)) {                                       // 20
		return url;                                                                                                      // 21
	} else if (navigator.userAgent.indexOf('Electron') > -1) {                                                        // 22
		return __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + url;                                                     // 23
	} else {                                                                                                          // 24
		return Meteor.absoluteUrl().replace(/\/$/, '') + __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + url;           // 25
	}                                                                                                                 // 26
}; /*globals renderMessageBody*/                                                                                   // 27
                                                                                                                   //
Template.messageAttachment.helpers({                                                                               // 29
	fixCordova: fixCordova,                                                                                           // 30
	parsedText: function () {                                                                                         // 31
		return renderMessageBody({                                                                                       // 32
			msg: this.text                                                                                                  // 33
		});                                                                                                              // 32
	},                                                                                                                // 35
	loadImage: function () {                                                                                          // 36
		var user = Meteor.user();                                                                                        // 37
                                                                                                                   //
		if (user && user.settings && user.settings.preferences && this.downloadImages !== true) {                        // 38
			if (user.settings.preferences.autoImageLoad === false) {                                                        // 39
				return false;                                                                                                  // 40
			}                                                                                                               // 41
                                                                                                                   //
			if (Meteor.Device.isPhone() && user.settings.preferences.saveMobileBandwidth !== true) {                        // 42
				return false;                                                                                                  // 43
			}                                                                                                               // 44
		}                                                                                                                // 45
                                                                                                                   //
		return true;                                                                                                     // 46
	},                                                                                                                // 47
	getImageHeight: function () {                                                                                     // 48
		var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;                            // 48
		return height;                                                                                                   // 49
	},                                                                                                                // 50
	color: function () {                                                                                              // 51
		return colors[this.color] || this.color;                                                                         // 52
	},                                                                                                                // 53
	collapsed: function () {                                                                                          // 54
		if (this.collapsed != null) {                                                                                    // 55
			return this.collapsed;                                                                                          // 56
		} else {                                                                                                         // 57
			var user = Meteor.user();                                                                                       // 58
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                // 60
	},                                                                                                                // 61
	time: function () {                                                                                               // 62
		var messageDate = new Date(this.ts);                                                                             // 63
		var today = new Date();                                                                                          // 64
                                                                                                                   //
		if (messageDate.toDateString() === today.toDateString()) {                                                       // 65
			return moment(this.ts).format(RocketChat.settings.get('Message_TimeFormat'));                                   // 66
		} else {                                                                                                         // 67
			return moment(this.ts).format(RocketChat.settings.get('Message_TimeAndDateFormat'));                            // 68
		}                                                                                                                // 69
	},                                                                                                                // 70
	injectIndex: function (data, previousIndex, index) {                                                              // 71
		data.index = previousIndex + ".attachments." + index;                                                            // 72
	}                                                                                                                 // 73
});                                                                                                                // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:message-attachments/client/template.messageAttachment.js");
require("./node_modules/meteor/rocketchat:message-attachments/client/messageAttachment.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:message-attachments'] = {};

})();
