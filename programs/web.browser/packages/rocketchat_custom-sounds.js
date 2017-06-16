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
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Template = Package['templating-runtime'].Template;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var _ = Package.underscore._;
var WebApp = Package.webapp.WebApp;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:custom-sounds":{"admin":{"startup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/startup.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.AdminBox.addOption({                                                                                        // 1
	href: 'custom-sounds',                                                                                                // 2
	i18nLabel: 'Custom_Sounds',                                                                                           // 3
	permissionGranted: function () {                                                                                      // 4
		return RocketChat.authz.hasAtLeastOnePermission(['manage-sounds']);                                                  // 5
	}                                                                                                                     // 6
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminSounds.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/template.adminSounds.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminSounds");                                                                                   // 2
Template["adminSounds"] = new Template("Template.adminSounds", (function() {                                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "main-content-flex"                                                                                         // 6
  }, "\n\t\t", HTML.SECTION({                                                                                          // 7
    class: "page-container page-list flex-tab-main-content"                                                            // 8
  }, "\n\t\t\t", HTML.HEADER({                                                                                         // 9
    class: "fixed-title"                                                                                               // 10
  }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("burger")), "\n\t\t\t\t", HTML.H2("\n\t\t\t\t\t", HTML.SPAN({
    class: "room-title"                                                                                                // 12
  }, Blaze.View("lookup:_", function() {                                                                               // 13
    return Spacebars.mustache(view.lookup("_"), "Custom_Sounds");                                                      // 14
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                              // 15
    class: "content"                                                                                                   // 16
  }, "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                                    // 17
    return "manage-sounds";                                                                                            // 18
  }, function() {                                                                                                      // 19
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 20
      return [ "\n\t\t\t\t\t", HTML.FORM({                                                                             // 21
        class: "search-form",                                                                                          // 22
        role: "form"                                                                                                   // 23
      }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                  // 24
        class: "input-line search"                                                                                     // 25
      }, "\n\t\t\t\t\t\t\t", HTML.INPUT({                                                                              // 26
        type: "text",                                                                                                  // 27
        id: "sound-filter",                                                                                            // 28
        placeholder: function() {                                                                                      // 29
          return Spacebars.mustache(view.lookup("_"), "Search");                                                       // 30
        },                                                                                                             // 31
        dir: "auto"                                                                                                    // 32
      }), "\n\t\t\t\t\t\t\t", HTML.I({                                                                                 // 33
        class: "icon-search"                                                                                           // 34
      }), "\n\t\t\t\t\t\t\t", Blaze.Unless(function() {                                                                // 35
        return Spacebars.call(view.lookup("isReady"));                                                                 // 36
      }, function() {                                                                                                  // 37
        return HTML.I({                                                                                                // 38
          class: "icon-spin"                                                                                           // 39
        });                                                                                                            // 40
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                               // 41
        class: "results"                                                                                               // 42
      }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                         // 43
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_results", Spacebars.dot(view.lookup("customsounds"), "length")));
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                                  // 45
        class: "list"                                                                                                  // 46
      }, "\n\t\t\t\t\t\t", HTML.TABLE("\n\t\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t", HTML.TH({
        width: "100%"                                                                                                  // 48
      }, Blaze.View("lookup:_", function() {                                                                           // 49
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 50
      })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {
        return Spacebars.call(view.lookup("customsounds"));                                                            // 52
      }, function() {                                                                                                  // 53
        return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                                       // 54
          class: "sound-info row-link"                                                                                 // 55
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {                                      // 56
          return Spacebars.mustache(view.lookup("name"));                                                              // 57
        }), HTML.CharRef({                                                                                             // 58
          html: "&nbsp;",                                                                                              // 59
          str: " "                                                                                                     // 60
        }), HTML.I({                                                                                                   // 61
          class: "icon-play-circled"                                                                                   // 62
        })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                            // 63
      }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                              // 64
        return Spacebars.call(view.lookup("hasMore"));                                                                 // 65
      }, function() {                                                                                                  // 66
        return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                     // 67
          class: function() {                                                                                          // 68
            return [ "button secondary load-more ", Spacebars.mustache(view.lookup("isLoading")) ];                    // 69
          }                                                                                                            // 70
        }, Blaze.View("lookup:_", function() {                                                                         // 71
          return Spacebars.mustache(view.lookup("_"), "Load_more");                                                    // 72
        })), "\n\t\t\t\t\t\t" ];                                                                                       // 73
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                             // 74
    });                                                                                                                // 75
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Spacebars.With(function() {                                                    // 76
    return Spacebars.call(view.lookup("flexData"));                                                                    // 77
  }, function() {                                                                                                      // 78
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("flexTabBar")), "\n\t\t" ];                             // 79
  }), "\n\t");                                                                                                         // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminSounds.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/adminSounds.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals RocketChatTabBar */Template.adminSounds.helpers({                                                           // 1
	isReady: function () {                                                                                                // 3
		if (Template.instance().ready != null) {                                                                             // 4
			return Template.instance().ready.get();                                                                             // 5
		}                                                                                                                    // 6
                                                                                                                       //
		return undefined;                                                                                                    // 7
	},                                                                                                                    // 8
	customsounds: function () {                                                                                           // 9
		return Template.instance().customsounds();                                                                           // 10
	},                                                                                                                    // 11
	isLoading: function () {                                                                                              // 12
		if (Template.instance().ready != null) {                                                                             // 13
			if (!Template.instance().ready.get()) {                                                                             // 14
				return 'btn-loading';                                                                                              // 15
			}                                                                                                                   // 16
		}                                                                                                                    // 17
	},                                                                                                                    // 18
	hasMore: function () {                                                                                                // 19
		if (Template.instance().limit != null) {                                                                             // 20
			if (typeof Template.instance().customsounds === 'function') {                                                       // 21
				return Template.instance().limit.get() === Template.instance().customsounds().length;                              // 22
			}                                                                                                                   // 23
		}                                                                                                                    // 24
                                                                                                                       //
		return false;                                                                                                        // 25
	},                                                                                                                    // 26
	flexData: function () {                                                                                               // 27
		return {                                                                                                             // 28
			tabBar: Template.instance().tabBar,                                                                                 // 29
			data: Template.instance().tabBarData.get()                                                                          // 30
		};                                                                                                                   // 28
	}                                                                                                                     // 32
});                                                                                                                    // 2
Template.adminSounds.onCreated(function () {                                                                           // 35
	var instance = this;                                                                                                  // 36
	this.limit = new ReactiveVar(50);                                                                                     // 37
	this.filter = new ReactiveVar('');                                                                                    // 38
	this.ready = new ReactiveVar(false);                                                                                  // 39
	this.tabBar = new RocketChatTabBar();                                                                                 // 41
	this.tabBar.showGroup(FlowRouter.current().route.name);                                                               // 42
	this.tabBarData = new ReactiveVar();                                                                                  // 43
	RocketChat.TabBar.addButton({                                                                                         // 45
		groups: ['custom-sounds', 'custom-sounds-selected'],                                                                 // 46
		id: 'add-sound',                                                                                                     // 47
		i18nTitle: 'Custom_Sound_Add',                                                                                       // 48
		icon: 'icon-plus',                                                                                                   // 49
		template: 'adminSoundEdit',                                                                                          // 50
		openClick: function () /*e, t*/{                                                                                     // 51
			instance.tabBarData.set();                                                                                          // 52
			return true;                                                                                                        // 53
		},                                                                                                                   // 54
		order: 1                                                                                                             // 55
	});                                                                                                                   // 45
	RocketChat.TabBar.addButton({                                                                                         // 58
		groups: ['custom-sounds-selected'],                                                                                  // 59
		id: 'admin-sound-info',                                                                                              // 60
		i18nTitle: 'Custom_Sound_Info',                                                                                      // 61
		icon: 'icon-cog',                                                                                                    // 62
		template: 'adminSoundInfo',                                                                                          // 63
		order: 2                                                                                                             // 64
	});                                                                                                                   // 58
	this.autorun(function () {                                                                                            // 67
		var limit = instance.limit != null ? instance.limit.get() : 0;                                                       // 68
		var subscription = instance.subscribe('customSounds', '', limit);                                                    // 69
		instance.ready.set(subscription.ready());                                                                            // 70
	});                                                                                                                   // 71
                                                                                                                       //
	this.customsounds = function () {                                                                                     // 73
		var filter = instance.filter != null ? _.trim(instance.filter.get()) : '';                                           // 74
		var query = {};                                                                                                      // 76
                                                                                                                       //
		if (filter) {                                                                                                        // 78
			var filterReg = new RegExp(s.escapeRegExp(filter), 'i');                                                            // 79
			query = {                                                                                                           // 80
				name: filterReg                                                                                                    // 80
			};                                                                                                                  // 80
		}                                                                                                                    // 81
                                                                                                                       //
		var limit = instance.limit != null ? instance.limit.get() : 0;                                                       // 83
		return RocketChat.models.CustomSounds.find(query, {                                                                  // 85
			limit: limit,                                                                                                       // 85
			sort: {                                                                                                             // 85
				name: 1                                                                                                            // 85
			}                                                                                                                   // 85
		}).fetch();                                                                                                          // 85
	};                                                                                                                    // 86
});                                                                                                                    // 87
Template.adminSounds.onRendered(function () {                                                                          // 89
	return Tracker.afterFlush(function () {                                                                               // 89
		SideNav.setFlex('adminFlex');                                                                                        // 91
		SideNav.openFlex();                                                                                                  // 92
	});                                                                                                                   // 93
});                                                                                                                    // 89
Template.adminSounds.events({                                                                                          // 96
	'keydown #sound-filter': function (e) {                                                                               // 97
		//stop enter key                                                                                                     // 98
		if (e.which === 13) {                                                                                                // 99
			e.stopPropagation();                                                                                                // 100
			e.preventDefault();                                                                                                 // 101
		}                                                                                                                    // 102
	},                                                                                                                    // 103
	'keyup #sound-filter': function (e, t) {                                                                              // 105
		e.stopPropagation();                                                                                                 // 106
		e.preventDefault();                                                                                                  // 107
		t.filter.set(e.currentTarget.value);                                                                                 // 108
	},                                                                                                                    // 109
	'click .sound-info': function (e, instance) {                                                                         // 111
		e.preventDefault();                                                                                                  // 112
		instance.tabBarData.set(RocketChat.models.CustomSounds.findOne({                                                     // 113
			_id: this._id                                                                                                       // 113
		}));                                                                                                                 // 113
		instance.tabBar.showGroup('custom-sounds-selected');                                                                 // 114
		instance.tabBar.open('admin-sound-info');                                                                            // 115
	},                                                                                                                    // 116
	'click .load-more': function (e, t) {                                                                                 // 118
		e.preventDefault();                                                                                                  // 119
		e.stopPropagation();                                                                                                 // 120
		t.limit.set(t.limit.get() + 50);                                                                                     // 121
	},                                                                                                                    // 122
	'click .icon-play-circled': function (e) {                                                                            // 124
		e.preventDefault();                                                                                                  // 125
		e.stopPropagation();                                                                                                 // 126
		var $audio = $("audio#" + this._id);                                                                                 // 127
                                                                                                                       //
		if ($audio && $audio[0] && $audio[0].play) {                                                                         // 128
			$audio[0].play();                                                                                                   // 129
		}                                                                                                                    // 130
	}                                                                                                                     // 131
});                                                                                                                    // 96
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminSoundEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/template.adminSoundEdit.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminSoundEdit");                                                                                // 2
Template["adminSoundEdit"] = new Template("Template.adminSoundEdit", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "sound-view"                                                                                                // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 9
    return Spacebars.call(view.lookup("."));                                                                           // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("soundEdit"));                                                        // 12
  }), "\n\t\t"), "\n\t");                                                                                              // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminSoundInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/template.adminSoundInfo.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminSoundInfo");                                                                                // 2
Template["adminSoundInfo"] = new Template("Template.adminSoundInfo", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "sound-view"                                                                                                // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 9
    return Spacebars.call(view.lookup("."));                                                                           // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("soundInfo"));                                                        // 12
  }), "\n\t\t"), "\n\t");                                                                                              // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.soundEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/template.soundEdit.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("soundEdit");                                                                                     // 2
Template["soundEdit"] = new Template("Template.soundEdit", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return "manage-sounds";                                                                                            // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("requiresPermission"), function() {                                   // 8
      return [ "\n\t\t", HTML.DIV({                                                                                    // 9
        class: "about clearfix"                                                                                        // 10
      }, "\n\t\t\t", HTML.FORM({                                                                                       // 11
        class: "edit-form",                                                                                            // 12
        autocomplete: "off"                                                                                            // 13
      }, "\n\t\t\t\t", Blaze.If(function() {                                                                           // 14
        return Spacebars.call(view.lookup("sound"));                                                                   // 15
      }, function() {                                                                                                  // 16
        return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:sound.name", function() {                                  // 17
          return Spacebars.mustache(Spacebars.dot(view.lookup("sound"), "name"));                                      // 18
        })), "\n\t\t\t\t" ];                                                                                           // 19
      }, function() {                                                                                                  // 20
        return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                           // 21
          return Spacebars.mustache(view.lookup("_"), "Custom_Sound_Add");                                             // 22
        })), "\n\t\t\t\t" ];                                                                                           // 23
      }), "\n\t\t\t\t", HTML.DIV({                                                                                     // 24
        class: "input-line"                                                                                            // 25
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 26
        for: "name"                                                                                                    // 27
      }, Blaze.View("lookup:_", function() {                                                                           // 28
        return Spacebars.mustache(view.lookup("_"), "Name");                                                           // 29
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 30
        type: "text",                                                                                                  // 31
        id: "name",                                                                                                    // 32
        autocomplete: "off",                                                                                           // 33
        value: function() {                                                                                            // 34
          return Spacebars.mustache(Spacebars.dot(view.lookup("sound"), "name"));                                      // 35
        }                                                                                                              // 36
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                      // 37
        class: "input-line"                                                                                            // 38
      }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                  // 39
        for: "image"                                                                                                   // 40
      }, Blaze.View("lookup:_", function() {                                                                           // 41
        return Spacebars.mustache(view.lookup("_"), "Sound_File_mp3");                                                 // 42
      })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                // 43
        id: "image",                                                                                                   // 44
        type: "file",                                                                                                  // 45
        accept: "audio/mp3"                                                                                            // 46
      }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.NAV("\n\t\t\t\t\t", HTML.BUTTON({                                          // 47
        class: "button button-block cancel",                                                                           // 48
        type: "button"                                                                                                 // 49
      }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                 // 50
        return Spacebars.mustache(view.lookup("_"), "Cancel");                                                         // 51
      }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                              // 52
        class: "button button-block primary save"                                                                      // 53
      }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                 // 54
        return Spacebars.mustache(view.lookup("_"), "Save");                                                           // 55
      }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                           // 56
    });                                                                                                                // 57
  });                                                                                                                  // 58
}));                                                                                                                   // 59
                                                                                                                       // 60
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"soundEdit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/soundEdit.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.soundEdit.helpers({                                                                                           // 3
	sound: function () {                                                                                                  // 4
		return Template.instance().sound;                                                                                    // 5
	},                                                                                                                    // 6
	name: function () {                                                                                                   // 8
		return this.name || this._id;                                                                                        // 9
	}                                                                                                                     // 10
});                                                                                                                    // 3
Template.soundEdit.events({                                                                                            // 13
	'click .cancel': function (e, t) {                                                                                    // 14
		e.stopPropagation();                                                                                                 // 15
		e.preventDefault();                                                                                                  // 16
		delete Template.instance().soundFile;                                                                                // 17
		t.cancel(t.find('form'));                                                                                            // 18
	},                                                                                                                    // 19
	'submit form': function (e, t) {                                                                                      // 21
		e.stopPropagation();                                                                                                 // 22
		e.preventDefault();                                                                                                  // 23
		t.save(e.currentTarget);                                                                                             // 24
	},                                                                                                                    // 25
	'change input[type=file]': function (ev) {                                                                            // 27
		var e = ev.originalEvent != null ? ev.originalEvent : ev;                                                            // 28
		var files = e.target.files;                                                                                          // 29
                                                                                                                       //
		if (e.target.files == null || files.length === 0) {                                                                  // 30
			if (e.dataTransfer.files != null) {                                                                                 // 31
				files = e.dataTransfer.files;                                                                                      // 32
			} else {                                                                                                            // 33
				files = [];                                                                                                        // 34
			}                                                                                                                   // 35
		} //using let x of y here seems to have incompatibility with some phones                                             // 36
                                                                                                                       //
                                                                                                                       //
		for (var file in meteorBabelHelpers.sanitizeForInObject(files)) {                                                    // 39
			if (files.hasOwnProperty(file)) {                                                                                   // 40
				Template.instance().soundFile = files[file];                                                                       // 41
			}                                                                                                                   // 42
		}                                                                                                                    // 43
	}                                                                                                                     // 44
});                                                                                                                    // 13
Template.soundEdit.onCreated(function () {                                                                             // 47
	var _this = this;                                                                                                     // 47
                                                                                                                       //
	if (this.data != null) {                                                                                              // 48
		this.sound = this.data.sound;                                                                                        // 49
	} else {                                                                                                              // 50
		this.sound = undefined;                                                                                              // 51
		this.data.tabBar.showGroup('custom-sounds');                                                                         // 52
	}                                                                                                                     // 53
                                                                                                                       //
	this.cancel = function (form, name) {                                                                                 // 55
		form.reset();                                                                                                        // 56
                                                                                                                       //
		_this.data.tabBar.close();                                                                                           // 57
                                                                                                                       //
		if (_this.sound) {                                                                                                   // 58
			_this.data.back(name);                                                                                              // 59
		}                                                                                                                    // 60
	};                                                                                                                    // 61
                                                                                                                       //
	this.getSoundData = function () {                                                                                     // 63
		var soundData = {};                                                                                                  // 64
                                                                                                                       //
		if (_this.sound != null) {                                                                                           // 65
			soundData._id = _this.sound._id;                                                                                    // 66
			soundData.previousName = _this.sound.name;                                                                          // 67
			soundData.extension = _this.sound.extension;                                                                        // 68
			soundData.previousExtension = _this.sound.extension;                                                                // 69
		}                                                                                                                    // 70
                                                                                                                       //
		soundData.name = s.trim(_this.$('#name').val());                                                                     // 71
		soundData.newFile = false;                                                                                           // 72
		return soundData;                                                                                                    // 73
	};                                                                                                                    // 74
                                                                                                                       //
	this.validate = function () {                                                                                         // 76
		var soundData = _this.getSoundData();                                                                                // 77
                                                                                                                       //
		var errors = [];                                                                                                     // 79
                                                                                                                       //
		if (!soundData.name) {                                                                                               // 80
			errors.push('Name');                                                                                                // 81
		}                                                                                                                    // 82
                                                                                                                       //
		if (!soundData._id) {                                                                                                // 84
			if (!_this.soundFile) {                                                                                             // 85
				errors.push('Sound_File_mp3');                                                                                     // 86
			}                                                                                                                   // 87
		}                                                                                                                    // 88
                                                                                                                       //
		for (var _iterator = errors, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                           // 90
                                                                                                                       //
			if (_isArray) {                                                                                                     // 90
				if (_i >= _iterator.length) break;                                                                                 // 90
				_ref = _iterator[_i++];                                                                                            // 90
			} else {                                                                                                            // 90
				_i = _iterator.next();                                                                                             // 90
				if (_i.done) break;                                                                                                // 90
				_ref = _i.value;                                                                                                   // 90
			}                                                                                                                   // 90
                                                                                                                       //
			var error = _ref;                                                                                                   // 90
			toastr.error(TAPi18n.__('error-the-field-is-required', {                                                            // 91
				field: TAPi18n.__(error)                                                                                           // 91
			}));                                                                                                                // 91
		}                                                                                                                    // 92
                                                                                                                       //
		if (_this.soundFile) {                                                                                               // 94
			if (!/audio\/mp3/.test(_this.soundFile.type)) {                                                                     // 95
				errors.push('FileType');                                                                                           // 96
				toastr.error(TAPi18n.__('error-invalid-file-type'));                                                               // 97
			}                                                                                                                   // 98
		}                                                                                                                    // 99
                                                                                                                       //
		return errors.length === 0;                                                                                          // 101
	};                                                                                                                    // 102
                                                                                                                       //
	this.save = function (form) {                                                                                         // 104
		if (_this.validate()) {                                                                                              // 105
			var soundData = _this.getSoundData();                                                                               // 106
                                                                                                                       //
			if (_this.soundFile) {                                                                                              // 108
				soundData.newFile = true;                                                                                          // 109
				soundData.extension = _this.soundFile.name.split('.').pop();                                                       // 110
				soundData.type = _this.soundFile.type;                                                                             // 111
			}                                                                                                                   // 112
                                                                                                                       //
			Meteor.call('insertOrUpdateSound', soundData, function (error, result) {                                            // 114
				if (result) {                                                                                                      // 115
					soundData._id = result;                                                                                           // 116
					soundData.random = Math.round(Math.random() * 1000);                                                              // 117
                                                                                                                       //
					if (_this.soundFile) {                                                                                            // 119
						toastr.info(TAPi18n.__('Uploading_file'));                                                                       // 120
						var reader = new FileReader();                                                                                   // 122
						reader.readAsBinaryString(_this.soundFile);                                                                      // 123
                                                                                                                       //
						reader.onloadend = function () {                                                                                 // 124
							Meteor.call('uploadCustomSound', reader.result, _this.soundFile.type, soundData, function (uploadError /*, data*/) {
								if (uploadError != null) {                                                                                     // 126
									handleError(uploadError);                                                                                     // 127
									console.log(uploadError);                                                                                     // 128
									return;                                                                                                       // 129
								}                                                                                                              // 130
							});                                                                                                             // 131
							delete _this.soundFile;                                                                                         // 133
							toastr.success(TAPi18n.__('File_uploaded'));                                                                    // 134
						};                                                                                                               // 135
					}                                                                                                                 // 136
                                                                                                                       //
					toastr.success(t('Custom_Sound_Saved_Successfully'));                                                             // 138
                                                                                                                       //
					_this.cancel(form, soundData.name);                                                                               // 140
				}                                                                                                                  // 141
                                                                                                                       //
				if (error) {                                                                                                       // 143
					handleError(error);                                                                                               // 144
				}                                                                                                                  // 145
			});                                                                                                                 // 146
		}                                                                                                                    // 147
	};                                                                                                                    // 148
});                                                                                                                    // 149
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.soundInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/template.soundInfo.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("soundInfo");                                                                                     // 2
Template["soundInfo"] = new Template("Template.soundInfo", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("editingSound"));                                                                // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Blaze._TemplateWith(function() {                                                                // 8
      return Spacebars.dataMustache(view.lookup("soundToEdit"));                                                       // 9
    }, function() {                                                                                                    // 10
      return Spacebars.include(view.lookupTemplate("soundEdit"));                                                      // 11
    }), "\n\t" ];                                                                                                      // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t", Spacebars.With(function() {                                                                     // 14
      return Spacebars.call(view.lookup("sound"));                                                                     // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t", HTML.DIV({                                                                                    // 17
        class: "about clearfix"                                                                                        // 18
      }, "\n\t\t\t", HTML.DIV({                                                                                        // 19
        class: "info"                                                                                                  // 20
      }, "\n\t\t\t\t", HTML.H3({                                                                                       // 21
        title: function() {                                                                                            // 22
          return Spacebars.mustache(view.lookup("name"));                                                              // 23
        }                                                                                                              // 24
      }, Blaze.View("lookup:name", function() {                                                                        // 25
        return Spacebars.mustache(view.lookup("name"));                                                                // 26
      })), "\n\t\t\t"), "\n\t\t"), "\n\t\t" ];                                                                         // 27
    }), "\n\t\t", HTML.NAV("\n\t\t\t", Blaze.If(function() {                                                           // 28
      return Spacebars.dataMustache(view.lookup("hasPermission"), "manage-sounds");                                    // 29
    }, function() {                                                                                                    // 30
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                             // 31
        class: "button button-block danger delete"                                                                     // 32
      }, HTML.SPAN(HTML.I({                                                                                            // 33
        class: "icon-trash"                                                                                            // 34
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 35
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 36
      }))), "\n\t\t\t\t", HTML.BUTTON({                                                                                // 37
        class: "button button-block primary edit-sound"                                                                // 38
      }, HTML.SPAN(HTML.I({                                                                                            // 39
        class: "icon-edit"                                                                                             // 40
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 41
        return Spacebars.mustache(view.lookup("_"), "Edit");                                                           // 42
      }))), "\n\t\t\t" ];                                                                                              // 43
    }), "\n\t\t"), "\n\t" ];                                                                                           // 44
  });                                                                                                                  // 45
}));                                                                                                                   // 46
                                                                                                                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"soundInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/soundInfo.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.soundInfo.helpers({                                                                                           // 1
	name: function () {                                                                                                   // 2
		var sound = Template.instance().sound.get();                                                                         // 3
		return sound.name;                                                                                                   // 4
	},                                                                                                                    // 5
	sound: function () {                                                                                                  // 7
		return Template.instance().sound.get();                                                                              // 8
	},                                                                                                                    // 9
	editingSound: function () {                                                                                           // 11
		return Template.instance().editingSound.get();                                                                       // 12
	},                                                                                                                    // 13
	soundToEdit: function () {                                                                                            // 15
		var instance = Template.instance();                                                                                  // 16
		return {                                                                                                             // 17
			tabBar: instance.data.tabBar,                                                                                       // 18
			data: instance.data.data,                                                                                           // 19
			sound: instance.sound.get(),                                                                                        // 20
			back: function (name) {                                                                                             // 21
				instance.editingSound.set();                                                                                       // 22
                                                                                                                       //
				if (name != null) {                                                                                                // 24
					var sound = instance.sound.get();                                                                                 // 25
                                                                                                                       //
					if (sound.name != null && sound.name !== name) {                                                                  // 26
						return instance.loadedName.set(name);                                                                            // 27
					}                                                                                                                 // 28
				}                                                                                                                  // 29
			}                                                                                                                   // 30
		};                                                                                                                   // 17
	}                                                                                                                     // 32
});                                                                                                                    // 1
Template.soundInfo.events({                                                                                            // 35
	'click .delete': function (e, instance) {                                                                             // 36
		e.stopPropagation();                                                                                                 // 37
		e.preventDefault();                                                                                                  // 38
		var sound = instance.sound.get();                                                                                    // 39
                                                                                                                       //
		if (sound != null) {                                                                                                 // 40
			var _id = sound._id;                                                                                                // 41
			swal({                                                                                                              // 42
				title: t('Are_you_sure'),                                                                                          // 43
				text: t('Custom_Sound_Delete_Warning'),                                                                            // 44
				type: 'warning',                                                                                                   // 45
				showCancelButton: true,                                                                                            // 46
				confirmButtonColor: '#DD6B55',                                                                                     // 47
				confirmButtonText: t('Yes_delete_it'),                                                                             // 48
				cancelButtonText: t('Cancel'),                                                                                     // 49
				closeOnConfirm: false,                                                                                             // 50
				html: false                                                                                                        // 51
			}, function () {                                                                                                    // 42
				swal.disableButtons();                                                                                             // 53
				Meteor.call('deleteCustomSound', _id, function (error /*, result*/) {                                              // 55
					if (error) {                                                                                                      // 56
						handleError(error);                                                                                              // 57
						swal.enableButtons();                                                                                            // 58
					} else {                                                                                                          // 59
						swal({                                                                                                           // 60
							title: t('Deleted'),                                                                                            // 61
							text: t('Custom_Sound_Has_Been_Deleted'),                                                                       // 62
							type: 'success',                                                                                                // 63
							timer: 2000,                                                                                                    // 64
							showConfirmButton: false                                                                                        // 65
						});                                                                                                              // 60
						instance.data.tabBar.showGroup('custom-sounds');                                                                 // 68
						instance.data.tabBar.close();                                                                                    // 69
					}                                                                                                                 // 70
				});                                                                                                                // 71
			});                                                                                                                 // 72
		}                                                                                                                    // 73
	},                                                                                                                    // 74
	'click .edit-sound': function (e, instance) {                                                                         // 76
		e.stopPropagation();                                                                                                 // 77
		e.preventDefault();                                                                                                  // 78
		instance.editingSound.set(instance.sound.get()._id);                                                                 // 80
	}                                                                                                                     // 81
});                                                                                                                    // 35
Template.soundInfo.onCreated(function () {                                                                             // 84
	var _this = this;                                                                                                     // 84
                                                                                                                       //
	this.sound = new ReactiveVar();                                                                                       // 85
	this.editingSound = new ReactiveVar();                                                                                // 87
	this.loadedName = new ReactiveVar();                                                                                  // 89
	this.autorun(function () {                                                                                            // 91
		var data = Template.currentData();                                                                                   // 92
                                                                                                                       //
		if (data.clear != null) {                                                                                            // 93
			_this.clear = data.clear;                                                                                           // 94
		}                                                                                                                    // 95
	});                                                                                                                   // 96
	this.autorun(function () {                                                                                            // 98
		var data = Template.currentData();                                                                                   // 99
                                                                                                                       //
		var sound = _this.sound.get();                                                                                       // 100
                                                                                                                       //
		if (sound.name != null) {                                                                                            // 101
			_this.loadedName.set(sound.name);                                                                                   // 102
		} else if (data.name != null) {                                                                                      // 103
			_this.loadedName.set(data.name);                                                                                    // 104
		}                                                                                                                    // 105
	});                                                                                                                   // 106
	this.autorun(function () {                                                                                            // 108
		var data = Template.currentData();                                                                                   // 109
                                                                                                                       //
		_this.sound.set(data);                                                                                               // 110
	});                                                                                                                   // 111
});                                                                                                                    // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/admin/route.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/admin/custom-sounds', {                                                                             // 1
	name: 'custom-sounds',                                                                                                // 2
	subscriptions: function () /*params, queryParams*/{                                                                   // 3
		this.register('customSounds', Meteor.subscribe('customSounds'));                                                     // 4
	},                                                                                                                    // 5
	action: function () /*params*/{                                                                                       // 6
		BlazeLayout.render('main', {                                                                                         // 7
			center: 'adminSounds'                                                                                               // 7
		});                                                                                                                  // 7
	}                                                                                                                     // 8
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"lib":{"CustomSounds.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/client/lib/CustomSounds.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var CustomSounds = function () {                                                                                       //
	function CustomSounds() {                                                                                             // 2
		(0, _classCallCheck3.default)(this, CustomSounds);                                                                   // 2
		this.list = new ReactiveVar({});                                                                                     // 3
		this.add({                                                                                                           // 4
			_id: 'beep',                                                                                                        // 4
			name: 'Beep',                                                                                                       // 4
			extension: 'mp3',                                                                                                   // 4
			src: 'sounds/beep.mp3'                                                                                              // 4
		});                                                                                                                  // 4
		this.add({                                                                                                           // 5
			_id: 'chelle',                                                                                                      // 5
			name: 'Chelle',                                                                                                     // 5
			extension: 'mp3',                                                                                                   // 5
			src: 'sounds/chelle.mp3'                                                                                            // 5
		});                                                                                                                  // 5
		this.add({                                                                                                           // 6
			_id: 'ding',                                                                                                        // 6
			name: 'Ding',                                                                                                       // 6
			extension: 'mp3',                                                                                                   // 6
			src: 'sounds/ding.mp3'                                                                                              // 6
		});                                                                                                                  // 6
		this.add({                                                                                                           // 7
			_id: 'droplet',                                                                                                     // 7
			name: 'Droplet',                                                                                                    // 7
			extension: 'mp3',                                                                                                   // 7
			src: 'sounds/droplet.mp3'                                                                                           // 7
		});                                                                                                                  // 7
		this.add({                                                                                                           // 8
			_id: 'highbell',                                                                                                    // 8
			name: 'Highbell',                                                                                                   // 8
			extension: 'mp3',                                                                                                   // 8
			src: 'sounds/highbell.mp3'                                                                                          // 8
		});                                                                                                                  // 8
		this.add({                                                                                                           // 9
			_id: 'seasons',                                                                                                     // 9
			name: 'Seasons',                                                                                                    // 9
			extension: 'mp3',                                                                                                   // 9
			src: 'sounds/seasons.mp3'                                                                                           // 9
		});                                                                                                                  // 9
	}                                                                                                                     // 10
                                                                                                                       //
	CustomSounds.prototype.add = function () {                                                                            //
		function add(sound) {                                                                                                //
			if (Meteor.isCordova) {                                                                                             // 13
				return;                                                                                                            // 14
			}                                                                                                                   // 15
                                                                                                                       //
			if (!sound.src) {                                                                                                   // 17
				sound.src = this.getURL(sound);                                                                                    // 18
			}                                                                                                                   // 19
                                                                                                                       //
			var audio = $('<audio />', {                                                                                        // 20
				id: sound._id,                                                                                                     // 20
				preload: true                                                                                                      // 20
			}).append($('<source />', {                                                                                         // 20
				src: sound.src                                                                                                     // 21
			}));                                                                                                                // 21
			var list = this.list.get();                                                                                         // 23
			list[sound._id] = sound;                                                                                            // 24
			this.list.set(list);                                                                                                // 25
			$('body').append(audio);                                                                                            // 26
		}                                                                                                                    // 27
                                                                                                                       //
		return add;                                                                                                          //
	}();                                                                                                                  //
                                                                                                                       //
	CustomSounds.prototype.remove = function () {                                                                         //
		function remove(sound) {                                                                                             //
			var list = this.list.get();                                                                                         // 30
			delete list[sound._id];                                                                                             // 31
			this.list.set(list);                                                                                                // 32
			$("#" + sound._id).remove();                                                                                        // 33
		}                                                                                                                    // 34
                                                                                                                       //
		return remove;                                                                                                       //
	}();                                                                                                                  //
                                                                                                                       //
	CustomSounds.prototype.update = function () {                                                                         //
		function update(sound) {                                                                                             //
			var audio = $("#" + sound._id);                                                                                     // 37
                                                                                                                       //
			if (audio && audio[0]) {                                                                                            // 38
				var list = this.list.get();                                                                                        // 39
				list[sound._id] = sound;                                                                                           // 40
				this.list.set(list);                                                                                               // 41
				$('source', audio).attr('src', this.getURL(sound));                                                                // 42
				audio[0].load();                                                                                                   // 43
			} else {                                                                                                            // 44
				this.add(sound);                                                                                                   // 45
			}                                                                                                                   // 46
		}                                                                                                                    // 47
                                                                                                                       //
		return update;                                                                                                       //
	}();                                                                                                                  //
                                                                                                                       //
	CustomSounds.prototype.getURL = function () {                                                                         //
		function getURL(sound) {                                                                                             //
			var path = Meteor.isCordova ? Meteor.absoluteUrl().replace(/\/$/, '') : __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';
			return path + "/custom-sounds/" + sound._id + "." + sound.extension + "?_dc=" + (sound.random || 0);                // 51
		}                                                                                                                    // 52
                                                                                                                       //
		return getURL;                                                                                                       //
	}();                                                                                                                  //
                                                                                                                       //
	CustomSounds.prototype.getList = function () {                                                                        //
		function getList() {                                                                                                 //
			var list = Object.values(this.list.get());                                                                          // 55
			return _.sortBy(list, 'name');                                                                                      // 56
		}                                                                                                                    // 57
                                                                                                                       //
		return getList;                                                                                                      //
	}();                                                                                                                  //
                                                                                                                       //
	return CustomSounds;                                                                                                  //
}();                                                                                                                   //
                                                                                                                       //
RocketChat.CustomSounds = new CustomSounds();                                                                          // 60
Meteor.startup(function () {                                                                                           // 62
	return Meteor.call('listCustomSounds', function (error, result) {                                                     // 62
		for (var _iterator = result, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                           // 64
                                                                                                                       //
			if (_isArray) {                                                                                                     // 64
				if (_i >= _iterator.length) break;                                                                                 // 64
				_ref = _iterator[_i++];                                                                                            // 64
			} else {                                                                                                            // 64
				_i = _iterator.next();                                                                                             // 64
				if (_i.done) break;                                                                                                // 64
				_ref = _i.value;                                                                                                   // 64
			}                                                                                                                   // 64
                                                                                                                       //
			var sound = _ref;                                                                                                   // 64
			RocketChat.CustomSounds.add(sound);                                                                                 // 65
		}                                                                                                                    // 66
	});                                                                                                                   // 67
});                                                                                                                    // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"CustomSounds.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/client/models/CustomSounds.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                                //
                                                                                                                       //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                       //
                                                                                                                       //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                          //
                                                                                                                       //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                 //
                                                                                                                       //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                            //
                                                                                                                       //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                   //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
var CustomSounds = function (_RocketChat$models$_B) {                                                                  //
	(0, _inherits3.default)(CustomSounds, _RocketChat$models$_B);                                                         //
                                                                                                                       //
	function CustomSounds() {                                                                                             // 2
		(0, _classCallCheck3.default)(this, CustomSounds);                                                                   // 2
                                                                                                                       //
		var _this = (0, _possibleConstructorReturn3.default)(this, _RocketChat$models$_B.call(this));                        // 2
                                                                                                                       //
		_this._initModel('custom_sounds');                                                                                   // 4
                                                                                                                       //
		return _this;                                                                                                        // 2
	}                                                                                                                     // 5
                                                                                                                       //
	return CustomSounds;                                                                                                  //
}(RocketChat.models._Base);                                                                                            //
                                                                                                                       //
RocketChat.models.CustomSounds = new CustomSounds();                                                                   // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"updateCustomSound.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/client/notifications/updateCustomSound.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	return RocketChat.Notifications.onAll('updateCustomSound', function (data) {                                          // 1
		return RocketChat.CustomSounds.update(data.soundData);                                                               // 2
	});                                                                                                                   // 2
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deleteCustomSound.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_custom-sounds/client/notifications/deleteCustomSound.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 1
	return RocketChat.Notifications.onAll('deleteCustomSound', function (data) {                                          // 1
		return RocketChat.CustomSounds.remove(data.soundData);                                                               // 2
	});                                                                                                                   // 2
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:custom-sounds/admin/startup.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/template.adminSounds.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/adminSounds.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/template.adminSoundEdit.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/template.adminSoundInfo.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/template.soundEdit.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/soundEdit.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/template.soundInfo.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/soundInfo.js");
require("./node_modules/meteor/rocketchat:custom-sounds/admin/route.js");
require("./node_modules/meteor/rocketchat:custom-sounds/client/lib/CustomSounds.js");
require("./node_modules/meteor/rocketchat:custom-sounds/client/models/CustomSounds.js");
require("./node_modules/meteor/rocketchat:custom-sounds/client/notifications/updateCustomSound.js");
require("./node_modules/meteor/rocketchat:custom-sounds/client/notifications/deleteCustomSound.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:custom-sounds'] = {};

})();
