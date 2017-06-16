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
var HTTP = Package.http.HTTP;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:oembed":{"client":{"template.baseWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.baseWidget.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedBaseWidget");                                                                             // 2
Template["oembedBaseWidget"] = new Template("Template.oembedBaseWidget", (function() {                                // 3
  var view = this;                                                                                                    // 4
  return Blaze._TemplateWith(function() {                                                                             // 5
    return {                                                                                                          // 6
      template: Spacebars.call(view.lookup("template"))                                                               // 7
    };                                                                                                                // 8
  }, function() {                                                                                                     // 9
    return Spacebars.include(function() {                                                                             // 10
      return Spacebars.call(Template.__dynamic);                                                                      // 11
    });                                                                                                               // 12
  });                                                                                                                 // 13
}));                                                                                                                  // 14
                                                                                                                      // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"baseWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/baseWidget.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedBaseWidget.helpers({                                                                                   // 1
	template: function () {                                                                                              // 2
		var contentType = void 0;                                                                                           // 3
                                                                                                                      //
		if (this.headers) {                                                                                                 // 4
			contentType = this.headers.contentType;                                                                            // 5
		}                                                                                                                   // 6
                                                                                                                      //
		if (this._overrideTemplate) {                                                                                       // 8
			return this._overrideTemplate;                                                                                     // 9
		}                                                                                                                   // 10
                                                                                                                      //
		if (this.headers && contentType && contentType.match(/image\/.*/)) {                                                // 11
			return 'oembedImageWidget';                                                                                        // 12
		}                                                                                                                   // 13
                                                                                                                      //
		if (this.headers && contentType && contentType.match(/audio\/.*/)) {                                                // 14
			return 'oembedAudioWidget';                                                                                        // 15
		}                                                                                                                   // 16
                                                                                                                      //
		if (this.headers && contentType && contentType.match(/video\/.*/) || this.meta && this.meta.twitterPlayerStreamContentType && this.meta.twitterPlayerStreamContentType.match(/video\/.*/)) {
			return 'oembedVideoWidget';                                                                                        // 18
		}                                                                                                                   // 19
                                                                                                                      //
		if (this.meta && this.meta.oembedHtml) {                                                                            // 20
			return 'oembedFrameWidget';                                                                                        // 21
		}                                                                                                                   // 22
                                                                                                                      //
		if (this.meta && this.meta.sandstorm && this.meta.sandstorm.grain) {                                                // 23
			return 'oembedSandstormGrain';                                                                                     // 24
		}                                                                                                                   // 25
                                                                                                                      //
		return 'oembedUrlWidget';                                                                                           // 26
	}                                                                                                                    // 27
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedImageWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedImageWidget.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedImageWidget");                                                                            // 2
Template["oembedImageWidget"] = new Template("Template.oembedImageWidget", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("parsedUrl"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", Blaze.If(function() {                                                                          // 8
      return Spacebars.call(view.lookup("collapsed"));                                                                // 9
    }, function() {                                                                                                   // 10
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 11
        class: "collapse-switch icon-right-dir",                                                                      // 12
        "data-index": function() {                                                                                    // 13
          return Spacebars.mustache(view.lookup("index"));                                                            // 14
        },                                                                                                            // 15
        "data-collapsed": function() {                                                                                // 16
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 17
        }                                                                                                             // 18
      }), "\n\t\t" ];                                                                                                 // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 21
        class: "collapse-switch icon-down-dir",                                                                       // 22
        "data-index": function() {                                                                                    // 23
          return Spacebars.mustache(view.lookup("index"));                                                            // 24
        },                                                                                                            // 25
        "data-collapsed": function() {                                                                                // 26
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 27
        }                                                                                                             // 28
      }), "\n\t\t\t", Blaze.If(function() {                                                                           // 29
        return Spacebars.call(view.lookup("loadImage"));                                                              // 30
      }, function() {                                                                                                 // 31
        return [ "\n\t\t\t\t", HTML.FIGURE("\n\t\t\t\t\t", HTML.DIV({                                                 // 32
          class: "inline-image",                                                                                      // 33
          style: function() {                                                                                         // 34
            return [ "background-image: url('", Spacebars.mustache(view.lookup("url")), "');" ];                      // 35
          }                                                                                                           // 36
        }, "\n\t\t\t\t\t\t", HTML.IMG({                                                                               // 37
          src: function() {                                                                                           // 38
            return Spacebars.mustache(view.lookup("url"));                                                            // 39
          },                                                                                                          // 40
          height: "200",                                                                                              // 41
          class: "gallery-item"                                                                                       // 42
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                             // 43
      }, function() {                                                                                                 // 44
        return [ "\n\t\t\t\t", HTML.DIV({                                                                             // 45
          class: "image-to-download",                                                                                 // 46
          "data-url": function() {                                                                                    // 47
            return Spacebars.mustache(view.lookup("url"));                                                            // 48
          }                                                                                                           // 49
        }, "\n\t\t\t\t\t", HTML.I({                                                                                   // 50
          class: "icon-picture"                                                                                       // 51
        }), "\n\t\t\t\t\t", HTML.DIV("click to load"), "\n\t\t\t\t"), "\n\t\t\t" ];                                   // 52
      }), "\n\t\t" ];                                                                                                 // 53
    }), "\n\t" ];                                                                                                     // 54
  });                                                                                                                 // 55
}));                                                                                                                  // 56
                                                                                                                      // 57
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedImageWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedImageWidget.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedImageWidget.helpers({                                                                                  // 1
	loadImage: function () {                                                                                             // 2
		var user = Meteor.user();                                                                                           // 3
                                                                                                                      //
		if (user && user.settings && user.settings.preferences && user.settings.preferences.autoImageLoad === false && this.downloadImages == null) {
			return false;                                                                                                      // 6
		}                                                                                                                   // 7
                                                                                                                      //
		if (Meteor.Device.isPhone() && user && user.settings && user.settings.preferences && user.settings.preferences.saveMobileBandwidth && this.downloadImages == null) {
			return false;                                                                                                      // 9
		}                                                                                                                   // 10
                                                                                                                      //
		return true;                                                                                                        // 11
	},                                                                                                                   // 12
	collapsed: function () {                                                                                             // 13
		if (this.collapsed != null) {                                                                                       // 14
			return this.collapsed;                                                                                             // 15
		} else {                                                                                                            // 16
			var user = Meteor.user();                                                                                          // 17
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 19
	}                                                                                                                    // 20
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedAudioWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedAudioWidget.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedAudioWidget");                                                                            // 2
Template["oembedAudioWidget"] = new Template("Template.oembedAudioWidget", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return HTML.A({                                                                                                     // 5
    href: function() {                                                                                                // 6
      return Spacebars.mustache(view.lookup("url"));                                                                  // 7
    },                                                                                                                // 8
    target: "_blank"                                                                                                  // 9
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 10
    return Spacebars.call(view.lookup("parsedUrl"));                                                                  // 11
  }, function() {                                                                                                     // 12
    return [ "\n\t\t\t", Blaze.If(function() {                                                                        // 13
      return Spacebars.call(view.lookup("collapsed"));                                                                // 14
    }, function() {                                                                                                   // 15
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                              // 16
        class: "collapse-switch icon-right-dir",                                                                      // 17
        "data-index": function() {                                                                                    // 18
          return Spacebars.mustache(view.lookup("index"));                                                            // 19
        },                                                                                                            // 20
        "data-collapsed": function() {                                                                                // 21
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 22
        }                                                                                                             // 23
      }), "\n\t\t\t" ];                                                                                               // 24
    }, function() {                                                                                                   // 25
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                              // 26
        class: "collapse-switch icon-down-dir",                                                                       // 27
        "data-index": function() {                                                                                    // 28
          return Spacebars.mustache(view.lookup("index"));                                                            // 29
        },                                                                                                            // 30
        "data-collapsed": function() {                                                                                // 31
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 32
        }                                                                                                             // 33
      }), "\n\t\t\t\t", HTML.BLOCKQUOTE({                                                                             // 34
        class: "background-transparent-darker-before"                                                                 // 35
      }, "\n\t\t\t\t\t", HTML.AUDIO({                                                                                 // 36
        controls: ""                                                                                                  // 37
      }, "\n\t\t\t\t\t\t", HTML.SOURCE({                                                                              // 38
        src: function() {                                                                                             // 39
          return Spacebars.mustache(view.lookup("url"));                                                              // 40
        },                                                                                                            // 41
        type: function() {                                                                                            // 42
          return Spacebars.mustache(Spacebars.dot(view.lookup("headers"), "contentType"));                            // 43
        }                                                                                                             // 44
      }), "\n\t\t\t\t\t\tYour browser does not support the audio element.\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];
    }), "\n\t\t" ];                                                                                                   // 46
  }), "\n\t");                                                                                                        // 47
}));                                                                                                                  // 48
                                                                                                                      // 49
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedAudioWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedAudioWidget.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedAudioWidget.helpers({                                                                                  // 1
	collapsed: function () {                                                                                             // 2
		if (this.collapsed) {                                                                                               // 3
			return this.collapsed;                                                                                             // 4
		} else {                                                                                                            // 5
			var user = Meteor.user();                                                                                          // 6
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 8
	}                                                                                                                    // 9
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedVideoWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedVideoWidget.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedVideoWidget");                                                                            // 2
Template["oembedVideoWidget"] = new Template("Template.oembedVideoWidget", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("parsedUrl"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t", HTML.BLOCKQUOTE({                                                                                // 8
      class: "background-transparent-darker-before"                                                                   // 9
    }, "\n\t\t", HTML.DIV(HTML.A({                                                                                    // 10
      href: function() {                                                                                              // 11
        return Spacebars.mustache(view.lookup("url"));                                                                // 12
      }                                                                                                               // 13
    }, Blaze.View("lookup:parsedUrl.host", function() {                                                               // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("parsedUrl"), "host"));                                     // 15
    }))), "\n\t\t", HTML.SPAN(Blaze.View("lookup:title", function() {                                                 // 16
      return Spacebars.mustache(view.lookup("title"));                                                                // 17
    })), "\n\t\t", Blaze.If(function() {                                                                              // 18
      return Spacebars.call(view.lookup("collapsed"));                                                                // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 21
        class: "collapse-switch icon-right-dir",                                                                      // 22
        "data-index": function() {                                                                                    // 23
          return Spacebars.mustache(view.lookup("index"));                                                            // 24
        },                                                                                                            // 25
        "data-collapsed": function() {                                                                                // 26
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 27
        }                                                                                                             // 28
      }), "\n\t\t" ];                                                                                                 // 29
    }, function() {                                                                                                   // 30
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 31
        class: "collapse-switch icon-down-dir",                                                                       // 32
        "data-index": function() {                                                                                    // 33
          return Spacebars.mustache(view.lookup("index"));                                                            // 34
        },                                                                                                            // 35
        "data-collapsed": function() {                                                                                // 36
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 37
        }                                                                                                             // 38
      }), HTML.BR(), "\n\t\t\t", HTML.VIDEO({                                                                         // 39
        controls: "",                                                                                                 // 40
        class: "inline-video"                                                                                         // 41
      }, "\n\t\t\t\t", HTML.SOURCE({                                                                                  // 42
        src: function() {                                                                                             // 43
          return Spacebars.mustache(view.lookup("url"));                                                              // 44
        },                                                                                                            // 45
        type: function() {                                                                                            // 46
          return Spacebars.mustache(view.lookup("contentType"));                                                      // 47
        }                                                                                                             // 48
      }), "\n\t\t\t\tYour browser does not support the video element.\n\t\t\t"), "\n\t\t" ];                          // 49
    }), "\n\t"), "\n" ];                                                                                              // 50
  });                                                                                                                 // 51
}));                                                                                                                  // 52
                                                                                                                      // 53
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedVideoWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedVideoWidget.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var getTitle = function (self) {                                                                                      // 1
	if (self.meta == null) {                                                                                             // 2
		return;                                                                                                             // 3
	}                                                                                                                    // 4
                                                                                                                      //
	return self.meta.ogTitle || self.meta.twitterTitle || self.meta.title || self.meta.pageTitle;                        // 5
};                                                                                                                    // 6
                                                                                                                      //
Template.oembedVideoWidget.helpers({                                                                                  // 8
	url: function () {                                                                                                   // 9
		if (this.meta && this.meta.twitterPlayerStream) {                                                                   // 10
			return this.meta.twitterPlayerStream;                                                                              // 11
		} else if (this.url) {                                                                                              // 12
			return this.url;                                                                                                   // 13
		}                                                                                                                   // 14
	},                                                                                                                   // 15
	contentType: function () {                                                                                           // 16
		if (this.meta && this.meta.twitterPlayerStreamContentType) {                                                        // 17
			return this.meta.twitterPlayerStreamContentType;                                                                   // 18
		} else if (this.headers && this.headers.contentType) {                                                              // 19
			return this.headers.contentType;                                                                                   // 20
		}                                                                                                                   // 21
	},                                                                                                                   // 22
	title: function () {                                                                                                 // 23
		return getTitle(this);                                                                                              // 24
	},                                                                                                                   // 25
	collapsed: function () {                                                                                             // 26
		if (this.collapsed) {                                                                                               // 27
			return this.collapsed;                                                                                             // 28
		} else {                                                                                                            // 29
			var user = Meteor.user();                                                                                          // 30
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 32
	}                                                                                                                    // 33
});                                                                                                                   // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedYoutubeWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedYoutubeWidget.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedYoutubeWidget");                                                                          // 2
Template["oembedYoutubeWidget"] = new Template("Template.oembedYoutubeWidget", (function() {                          // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("parsedUrl"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.BLOCKQUOTE({                                                                              // 8
      class: "background-transparent-darker-before"                                                                   // 9
    }, "\n\t\t\t", HTML.A({                                                                                           // 10
      href: function() {                                                                                              // 11
        return Spacebars.mustache(view.lookup("url"));                                                                // 12
      }                                                                                                               // 13
    }, Blaze.View("lookup:parsedUrl.host", function() {                                                               // 14
      return Spacebars.mustache(Spacebars.dot(view.lookup("parsedUrl"), "host"));                                     // 15
    })), "\n\t\t\t", Blaze.If(function() {                                                                            // 16
      return Spacebars.call(view.lookup("collapsed"));                                                                // 17
    }, function() {                                                                                                   // 18
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                              // 19
        class: "collapse-switch icon-right-dir",                                                                      // 20
        "data-index": function() {                                                                                    // 21
          return Spacebars.mustache(view.lookup("index"));                                                            // 22
        },                                                                                                            // 23
        "data-collapsed": function() {                                                                                // 24
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 25
        }                                                                                                             // 26
      }), HTML.BR(), "\n\t\t\t" ];                                                                                    // 27
    }, function() {                                                                                                   // 28
      return [ "\n\t\t\t\t", HTML.SPAN({                                                                              // 29
        class: "collapse-switch icon-down-dir",                                                                       // 30
        "data-index": function() {                                                                                    // 31
          return Spacebars.mustache(view.lookup("index"));                                                            // 32
        },                                                                                                            // 33
        "data-collapsed": function() {                                                                                // 34
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 35
        }                                                                                                             // 36
      }), HTML.BR(), "\n\t\t\t\t", HTML.IFRAME({                                                                      // 37
        width: "355",                                                                                                 // 38
        height: "200",                                                                                                // 39
        src: function() {                                                                                             // 40
          return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "twitterPlayer"));                             // 41
        },                                                                                                            // 42
        frameborder: "0",                                                                                             // 43
        allowfullscreen: ""                                                                                           // 44
      }), HTML.BR(), "\n\t\t\t\t", Blaze.View("lookup:meta.description", function() {                                 // 45
        return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "description")));              // 46
      }), "\n\t\t\t" ];                                                                                               // 47
    }), "\n\t\t"), "\n\t" ];                                                                                          // 48
  });                                                                                                                 // 49
}));                                                                                                                  // 50
                                                                                                                      // 51
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedYoutubeWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedYoutubeWidget.js                                                           //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedYoutubeWidget.helpers({                                                                                // 1
	collapsed: function () {                                                                                             // 2
		if (this.collapsed) {                                                                                               // 3
			return this.collapsed;                                                                                             // 4
		} else {                                                                                                            // 5
			var user = Meteor.user();                                                                                          // 6
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 8
	}                                                                                                                    // 9
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedUrlWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedUrlWidget.js                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedUrlWidget");                                                                              // 2
Template["oembedUrlWidget"] = new Template("Template.oembedUrlWidget", (function() {                                  // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("show"));                                                                       // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t\t", HTML.BLOCKQUOTE({                                                                              // 8
      class: "background-transparent-darker-before"                                                                   // 9
    }, "\n\t\t\t", HTML.DIV({                                                                                         // 10
      style: function() {                                                                                             // 11
        return [ Blaze.If(function() {                                                                                // 12
          return Spacebars.call(view.lookup("image"));                                                                // 13
        }, function() {                                                                                               // 14
          return "min-height: 80px;";                                                                                 // 15
        }), " padding: 10px 3px;" ];                                                                                  // 16
      }                                                                                                               // 17
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                            // 18
      return Spacebars.call(view.lookup("image"));                                                                    // 19
    }, function() {                                                                                                   // 20
      return [ "\n\t\t\t\t\t", Blaze.If(function() {                                                                  // 21
        return Spacebars.call(Spacebars.dot(view.lookup("meta"), "ogImageUserGenerated"));                            // 22
      }, function() {                                                                                                 // 23
        return [ "\n\t\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t\t", HTML.A({                                              // 24
          href: function() {                                                                                          // 25
            return Spacebars.mustache(view.lookup("url"));                                                            // 26
          },                                                                                                          // 27
          target: function() {                                                                                        // 28
            return Spacebars.mustache(view.lookup("target"));                                                         // 29
          }                                                                                                           // 30
        }, "\n\t\t\t\t\t\t\t\t", HTML.IMG({                                                                           // 31
          src: function() {                                                                                           // 32
            return Spacebars.mustache(view.lookup("image"));                                                          // 33
          },                                                                                                          // 34
          height: "200"                                                                                               // 35
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                 // 36
      }, function() {                                                                                                 // 37
        return [ "\n\t\t\t\t\t\t", HTML.A({                                                                           // 38
          href: function() {                                                                                          // 39
            return Spacebars.mustache(view.lookup("url"));                                                            // 40
          },                                                                                                          // 41
          target: function() {                                                                                        // 42
            return Spacebars.mustache(view.lookup("target"));                                                         // 43
          }                                                                                                           // 44
        }, "\n\t\t\t\t\t\t\t", HTML.IMG({                                                                             // 45
          src: function() {                                                                                           // 46
            return Spacebars.mustache(view.lookup("image"));                                                          // 47
          },                                                                                                          // 48
          height: "60",                                                                                               // 49
          align: "left",                                                                                              // 50
          style: "margin-right: 10px;"                                                                                // 51
        }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                      // 52
      }), "\n\t\t\t\t" ];                                                                                             // 53
    }), "\n\t\t\t\t", HTML.DIV({                                                                                      // 54
      style: "color: #AAA;"                                                                                           // 55
    }, Blaze.View("lookup:parsedUrl.host", function() {                                                               // 56
      return Spacebars.mustache(Spacebars.dot(view.lookup("parsedUrl"), "host"));                                     // 57
    })), "\n\t\t\t\t", Blaze.If(function() {                                                                          // 58
      return Spacebars.call(view.lookup("title"));                                                                    // 59
    }, function() {                                                                                                   // 60
      return [ "\n\t\t\t\t\t", HTML.DIV("\n\t\t\t\t\t\t", HTML.A({                                                    // 61
        href: function() {                                                                                            // 62
          return Spacebars.mustache(view.lookup("url"));                                                              // 63
        },                                                                                                            // 64
        target: function() {                                                                                          // 65
          return Spacebars.mustache(view.lookup("target"));                                                           // 66
        }                                                                                                             // 67
      }, HTML.STRONG(Blaze.View("lookup:title", function() {                                                          // 68
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("title")));                                           // 69
      }))), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                          // 70
    }), "\n\t\t\t\t", HTML.DIV({                                                                                      // 71
      style: "overflow:hidden;white-space:nowrap;text-overflow:ellipsis"                                              // 72
    }, Blaze.View("lookup:description", function() {                                                                  // 73
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("description")));                                       // 74
    })), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                                            // 75
  });                                                                                                                 // 76
}));                                                                                                                  // 77
                                                                                                                      // 78
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedUrlWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedUrlWidget.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var getTitle = function (self) {                                                                                      // 1
	if (self.meta == null) {                                                                                             // 2
		return;                                                                                                             // 3
	}                                                                                                                    // 4
                                                                                                                      //
	return self.meta.ogTitle || self.meta.twitterTitle || self.meta.title || self.meta.pageTitle;                        // 5
};                                                                                                                    // 6
                                                                                                                      //
var getDescription = function (self) {                                                                                // 8
	if (self.meta == null) {                                                                                             // 9
		return;                                                                                                             // 10
	}                                                                                                                    // 11
                                                                                                                      //
	var description = self.meta.ogDescription || self.meta.twitterDescription || self.meta.description;                  // 12
                                                                                                                      //
	if (description == null) {                                                                                           // 13
		return;                                                                                                             // 14
	}                                                                                                                    // 15
                                                                                                                      //
	return _.unescape(description.replace(/(^[“\s]*)|([”\s]*$)/g, ''));                                                  // 16
};                                                                                                                    // 17
                                                                                                                      //
Template.oembedUrlWidget.helpers({                                                                                    // 19
	description: function () {                                                                                           // 20
		var description = getDescription(this);                                                                             // 21
                                                                                                                      //
		if (_.isString(description)) {                                                                                      // 22
			return Blaze._escape(description);                                                                                 // 23
		}                                                                                                                   // 24
	},                                                                                                                   // 25
	title: function () {                                                                                                 // 26
		var title = getTitle(this);                                                                                         // 27
                                                                                                                      //
		if (_.isString(title)) {                                                                                            // 28
			return Blaze._escape(title);                                                                                       // 29
		}                                                                                                                   // 30
	},                                                                                                                   // 31
	target: function () {                                                                                                // 32
		if (!(this.parsedUrl && this.parsedUrl.host) || !(document && document.location && document.location.host) || this.parsedUrl && this.parsedUrl.host !== document.location.host) {
			return '_blank';                                                                                                   // 34
		}                                                                                                                   // 35
	},                                                                                                                   // 36
	image: function () {                                                                                                 // 37
		if (this.meta == null) {                                                                                            // 38
			return;                                                                                                            // 39
		}                                                                                                                   // 40
                                                                                                                      //
		var decodedOgImage = void 0;                                                                                        // 41
                                                                                                                      //
		if (this.meta.ogImage && this.meta.ogImage.replace) {                                                               // 42
			decodedOgImage = this.meta.ogImage.replace(/&amp;/g, '&');                                                         // 43
		}                                                                                                                   // 44
                                                                                                                      //
		var url = this.meta.msapplicationTileImage || decodedOgImage || this.meta.twitterImage;                             // 45
                                                                                                                      //
		if (url == null) {                                                                                                  // 46
			return;                                                                                                            // 47
		}                                                                                                                   // 48
                                                                                                                      //
		if (url.indexOf('//') === 0) {                                                                                      // 49
			url = "" + this.parsedUrl.protocol + url;                                                                          // 50
		} else if (url.indexOf('/') === 0 && this.parsedUrl && this.parsedUrl.host) {                                       // 51
			url = this.parsedUrl.protocol + "//" + this.parsedUrl.host + url;                                                  // 52
		}                                                                                                                   // 53
                                                                                                                      //
		return url;                                                                                                         // 54
	},                                                                                                                   // 55
	show: function () {                                                                                                  // 56
		return getDescription(this) != null || getTitle(this) != null;                                                      // 57
	},                                                                                                                   // 58
	collapsed: function () {                                                                                             // 59
		if (this.collapsed != null) {                                                                                       // 60
			return this.collapsed;                                                                                             // 61
		} else {                                                                                                            // 62
			var user = Meteor.user();                                                                                          // 63
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 65
	}                                                                                                                    // 66
});                                                                                                                   // 19
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedFrameWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedFrameWidget.js                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedFrameWidget");                                                                            // 2
Template["oembedFrameWidget"] = new Template("Template.oembedFrameWidget", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return Blaze.If(function() {                                                                                        // 5
    return Spacebars.call(view.lookup("parsedUrl"));                                                                  // 6
  }, function() {                                                                                                     // 7
    return [ "\n\t", HTML.BLOCKQUOTE({                                                                                // 8
      class: "background-transparent-darker-before"                                                                   // 9
    }, "\n\t\t", Blaze.If(function() {                                                                                // 10
      return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedProviderName"));                                // 11
    }, function() {                                                                                                   // 12
      return [ "\n\t\t\t", Blaze.If(function() {                                                                      // 13
        return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedProviderUrl"));                               // 14
      }, function() {                                                                                                 // 15
        return [ "\n\t\t\t\t", HTML.A({                                                                               // 16
          href: function() {                                                                                          // 17
            return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedProviderUrl"));                       // 18
          },                                                                                                          // 19
          style: "color: #9e9ea6"                                                                                     // 20
        }, Blaze.View("lookup:meta.oembedProviderName", function() {                                                  // 21
          return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedProviderName"));                        // 22
        })), "\n\t\t\t" ];                                                                                            // 23
      }), "\n\t\t" ];                                                                                                 // 24
    }), "\n\t\t", Blaze.If(function() {                                                                               // 25
      return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedAuthorName"));                                  // 26
    }, function() {                                                                                                   // 27
      return [ "\n\t\t\t", Blaze.If(function() {                                                                      // 28
        return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedAuthorUrl"));                                 // 29
      }, function() {                                                                                                 // 30
        return [ "\n\t\t\t\t", HTML.BR({                                                                              // 31
          class: "only-after-a"                                                                                       // 32
        }), "\n\t\t\t\t", HTML.A({                                                                                    // 33
          href: function() {                                                                                          // 34
            return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedAuthorUrl"));                         // 35
          }                                                                                                           // 36
        }, Blaze.View("lookup:meta.oembedAuthorName", function() {                                                    // 37
          return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedAuthorName"));                          // 38
        })), "\n\t\t\t" ];                                                                                            // 39
      }), "\n\t\t" ];                                                                                                 // 40
    }), "\n\t\t", Blaze.If(function() {                                                                               // 41
      return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedTitle"));                                       // 42
    }, function() {                                                                                                   // 43
      return [ "\n\t\t\t", Blaze.If(function() {                                                                      // 44
        return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedUrl"));                                       // 45
      }, function() {                                                                                                 // 46
        return [ "\n\t\t\t\t", HTML.BR({                                                                              // 47
          class: "only-after-a"                                                                                       // 48
        }), "\n\t\t\t\t", HTML.A({                                                                                    // 49
          href: function() {                                                                                          // 50
            return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedUrl"));                               // 51
          }                                                                                                           // 52
        }, Blaze.View("lookup:meta.oembedTitle", function() {                                                         // 53
          return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedTitle"));                               // 54
        })), "\n\t\t\t" ];                                                                                            // 55
      }), "\n\t\t" ];                                                                                                 // 56
    }), "\n\t\t", Blaze.If(function() {                                                                               // 57
      return Spacebars.call(view.lookup("collapsed"));                                                                // 58
    }, function() {                                                                                                   // 59
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 60
        class: "collapse-switch icon-right-dir",                                                                      // 61
        "data-index": function() {                                                                                    // 62
          return Spacebars.mustache(view.lookup("index"));                                                            // 63
        },                                                                                                            // 64
        "data-collapsed": function() {                                                                                // 65
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 66
        }                                                                                                             // 67
      }), HTML.BR(), "\n\t\t" ];                                                                                      // 68
    }, function() {                                                                                                   // 69
      return [ "\n\t\t\t", HTML.SPAN({                                                                                // 70
        class: "collapse-switch icon-down-dir",                                                                       // 71
        "data-index": function() {                                                                                    // 72
          return Spacebars.mustache(view.lookup("index"));                                                            // 73
        },                                                                                                            // 74
        "data-collapsed": function() {                                                                                // 75
          return Spacebars.mustache(view.lookup("collapsed"));                                                        // 76
        }                                                                                                             // 77
      }), HTML.BR(), "\n\t\t\t", Blaze.If(function() {                                                                // 78
        return Spacebars.call(Spacebars.dot(view.lookup("meta"), "oembedDescription"));                               // 79
      }, function() {                                                                                                 // 80
        return [ "\n\t\t\t\t", HTML.P(Blaze.View("lookup:meta.oembedDescription", function() {                        // 81
          return Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedDescription"));                         // 82
        })), "\n\t\t\t" ];                                                                                            // 83
      }), "\n\t\t\t", Blaze.View("lookup:meta.oembedHtml", function() {                                               // 84
        return Spacebars.makeRaw(Spacebars.mustache(Spacebars.dot(view.lookup("meta"), "oembedHtml")));               // 85
      }), "\n\t\t" ];                                                                                                 // 86
    }), "\n\t"), "\n" ];                                                                                              // 87
  });                                                                                                                 // 88
}));                                                                                                                  // 89
                                                                                                                      // 90
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedFrameWidget.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedFrameWidget.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedFrameWidget.helpers({                                                                                  // 1
	collapsed: function () {                                                                                             // 2
		if (this.collapsed) {                                                                                               // 3
			return this.collapsed;                                                                                             // 4
		} else {                                                                                                            // 5
			var user = Meteor.user();                                                                                          // 6
			return user && user.settings && user.settings.preferences && user.settings.preferences.collapseMediaByDefault === true;
		}                                                                                                                   // 8
	}                                                                                                                    // 9
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.oembedSandstormGrain.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/template.oembedSandstormGrain.js                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("oembedSandstormGrain");                                                                         // 2
Template["oembedSandstormGrain"] = new Template("Template.oembedSandstormGrain", (function() {                        // 3
  var view = this;                                                                                                    // 4
  return HTML.BLOCKQUOTE({                                                                                            // 5
    class: "sandstorm-grain background-transparent-darker-before"                                                     // 6
  }, "\n\t\t", HTML.LABEL("\n\t\t\t", HTML.BUTTON({                                                                   // 7
    onclick: "sandstormOembed(event)",                                                                                // 8
    "data-token": function() {                                                                                        // 9
      return Spacebars.mustache(view.lookup("token"));                                                                // 10
    },                                                                                                                // 11
    "data-descriptor": function() {                                                                                   // 12
      return Spacebars.mustache(view.lookup("descriptor"));                                                           // 13
    }                                                                                                                 // 14
  }, "\n\t\t\t\t", Blaze.View("lookup:grainTitle", function() {                                                       // 15
    return Spacebars.mustache(view.lookup("grainTitle"));                                                             // 16
  }), "\n\t\t\t"), "\n\t\t\t", HTML.IMG({                                                                             // 17
    src: function() {                                                                                                 // 18
      return Spacebars.mustache(view.lookup("appIconUrl"));                                                           // 19
    }                                                                                                                 // 20
  }), "\n\t\t"), "\n\t");                                                                                             // 21
}));                                                                                                                  // 22
                                                                                                                      // 23
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"oembedSandstormGrain.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_oembed/client/oembedSandstormGrain.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Template.oembedSandstormGrain.helpers({                                                                               // 1
	token: function () {                                                                                                 // 2
		return this.meta.sandstorm.grain.token;                                                                             // 3
	},                                                                                                                   // 4
	appTitle: function () {                                                                                              // 5
		return this.meta.sandstorm.grain.appTitle.defaultText;                                                              // 6
	},                                                                                                                   // 7
	grainTitle: function () {                                                                                            // 8
		return this.meta.sandstorm.grain.grainTitle;                                                                        // 9
	},                                                                                                                   // 10
	appIconUrl: function () {                                                                                            // 11
		return this.meta.sandstorm.grain.appIconUrl;                                                                        // 12
	},                                                                                                                   // 13
	descriptor: function () {                                                                                            // 14
		return this.meta.sandstorm.grain.descriptor;                                                                        // 15
	}                                                                                                                    // 16
});                                                                                                                   // 1
                                                                                                                      //
window.sandstormOembed = function (e) {                                                                               // 19
	e = e || window.event;                                                                                               // 20
	var src = e.target || e.srcElement;                                                                                  // 21
	var token = src.getAttribute('data-token');                                                                          // 22
	var descriptor = src.getAttribute('data-descriptor');                                                                // 23
	return Meteor.call('sandstormOffer', token, descriptor);                                                             // 24
};                                                                                                                    // 25
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:oembed/client/template.baseWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/baseWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedImageWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedImageWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedAudioWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedAudioWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedVideoWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedVideoWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedYoutubeWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedYoutubeWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedUrlWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedUrlWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedFrameWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedFrameWidget.js");
require("./node_modules/meteor/rocketchat:oembed/client/template.oembedSandstormGrain.js");
require("./node_modules/meteor/rocketchat:oembed/client/oembedSandstormGrain.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:oembed'] = {};

})();
