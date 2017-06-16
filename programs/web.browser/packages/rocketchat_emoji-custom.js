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
var renderEmoji = Package['rocketchat:emoji'].renderEmoji;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Template = Package['templating-runtime'].Template;
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

/* Package-scope variables */
var isSet, isSetNotNull, getEmojiUrlFromName, deleteEmojiCustom, updateEmojiCustom;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:emoji-custom":{"function-isSet.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/function-isSet.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals isSet:true, isSetNotNull:true */ //http://stackoverflow.com/a/26990347 function isSet() from Gajus          // 1
isSet = function (fn) {                                                                                                // 3
	var value = void 0;                                                                                                   // 4
                                                                                                                       //
	try {                                                                                                                 // 5
		value = fn();                                                                                                        // 6
	} catch (e) {                                                                                                         // 7
		value = undefined;                                                                                                   // 8
	} finally {                                                                                                           // 9
		return value !== undefined;                                                                                          // 10
	}                                                                                                                     // 11
};                                                                                                                     // 12
                                                                                                                       //
isSetNotNull = function (fn) {                                                                                         // 14
	var value = void 0;                                                                                                   // 15
                                                                                                                       //
	try {                                                                                                                 // 16
		value = fn();                                                                                                        // 17
	} catch (e) {                                                                                                         // 18
		value = null;                                                                                                        // 19
	} finally {                                                                                                           // 20
		return value !== null && value !== undefined;                                                                        // 21
	}                                                                                                                     // 22
}; /* exported isSet, isSetNotNull */                                                                                  // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"admin":{"startup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/startup.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
RocketChat.AdminBox.addOption({                                                                                        // 1
	href: 'emoji-custom',                                                                                                 // 2
	i18nLabel: 'Custom_Emoji',                                                                                            // 3
	permissionGranted: function () {                                                                                      // 4
		return RocketChat.authz.hasAtLeastOnePermission(['manage-emoji']);                                                   // 5
	}                                                                                                                     // 6
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminEmoji.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.adminEmoji.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminEmoji");                                                                                    // 2
Template["adminEmoji"] = new Template("Template.adminEmoji", (function() {                                             // 3
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
    return Spacebars.mustache(view.lookup("_"), "Custom_Emoji");                                                       // 14
  })), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                              // 15
    class: "content"                                                                                                   // 16
  }, "\n\t\t\t\t", Blaze.Unless(function() {                                                                           // 17
    return Spacebars.dataMustache(view.lookup("hasPermission"), "manage-emoji");                                       // 18
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
      id: "emoji-filter",                                                                                              // 31
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
    }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                 // 44
      class: "results"                                                                                                 // 45
    }, "\n\t\t\t\t\t\t", Blaze.View("lookup:_", function() {                                                           // 46
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("_"), "Showing_results", Spacebars.dot(view.lookup("customemoji"), "length")));
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
      width: "51%"                                                                                                     // 61
    }, Blaze.View("lookup:_", function() {                                                                             // 62
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 63
    })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                             // 64
      class: "content-background-color border-component-color",                                                        // 65
      width: "49%"                                                                                                     // 66
    }, Blaze.View("lookup:_", function() {                                                                             // 67
      return Spacebars.mustache(view.lookup("_"), "Aliases");                                                          // 68
    })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t", Blaze.Each(function() {
      return Spacebars.call(view.lookup("customemoji"));                                                               // 70
    }, function() {                                                                                                    // 71
      return [ "\n\t\t\t\t\t\t\t\t", HTML.TR({                                                                         // 72
        class: "emoji-info row-link admin-table-row"                                                                   // 73
      }, "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                             // 74
        class: "border-component-color"                                                                                // 75
      }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                                                                          // 76
        class: "emojiAdminPreview-image"                                                                               // 77
      }, "\n\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                  // 78
        return {                                                                                                       // 79
          name: Spacebars.call(view.lookup("name")),                                                                   // 80
          extension: Spacebars.call(view.lookup("extension"))                                                          // 81
        };                                                                                                             // 82
      }, function() {                                                                                                  // 83
        return Spacebars.include(view.lookupTemplate("emojiPreview"));                                                 // 84
      }), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                        // 85
        class: "border-component-color"                                                                                // 86
      }, Blaze.View("lookup:name", function() {                                                                        // 87
        return Spacebars.mustache(view.lookup("name"));                                                                // 88
      })), "\n\t\t\t\t\t\t\t\t\t", HTML.TD({                                                                           // 89
        class: "border-component-color"                                                                                // 90
      }, Blaze.View("lookup:aliases", function() {                                                                     // 91
        return Spacebars.mustache(view.lookup("aliases"));                                                             // 92
      })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                                // 93
    }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                                // 94
      return Spacebars.call(view.lookup("hasMore"));                                                                   // 95
    }, function() {                                                                                                    // 96
      return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                       // 97
        class: function() {                                                                                            // 98
          return [ "button secondary load-more ", Spacebars.mustache(view.lookup("isLoading")) ];                      // 99
        }                                                                                                              // 100
      }, Blaze.View("lookup:_", function() {                                                                           // 101
        return Spacebars.mustache(view.lookup("_"), "Load_more");                                                      // 102
      })), "\n\t\t\t\t\t\t" ];                                                                                         // 103
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                               // 104
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", Spacebars.With(function() {                                                    // 105
    return Spacebars.call(view.lookup("flexData"));                                                                    // 106
  }, function() {                                                                                                      // 107
    return [ "\n\t\t\t", Spacebars.include(view.lookupTemplate("flexTabBar")), "\n\t\t" ];                             // 108
  }), "\n\t");                                                                                                         // 109
}));                                                                                                                   // 110
                                                                                                                       // 111
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"adminEmoji.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/adminEmoji.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals RocketChatTabBar */Template.adminEmoji.helpers({                                                            // 1
	isReady: function () {                                                                                                // 3
		if (Template.instance().ready != null) {                                                                             // 4
			return Template.instance().ready.get();                                                                             // 5
		}                                                                                                                    // 6
                                                                                                                       //
		return undefined;                                                                                                    // 7
	},                                                                                                                    // 8
	customemoji: function () {                                                                                            // 9
		return Template.instance().customemoji();                                                                            // 10
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
			if (typeof Template.instance().customemoji === 'function') {                                                        // 21
				return Template.instance().limit.get() === Template.instance().customemoji().length;                               // 22
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
Template.adminEmoji.onCreated(function () {                                                                            // 35
	var instance = this;                                                                                                  // 36
	this.limit = new ReactiveVar(50);                                                                                     // 37
	this.filter = new ReactiveVar('');                                                                                    // 38
	this.ready = new ReactiveVar(false);                                                                                  // 39
	this.tabBar = new RocketChatTabBar();                                                                                 // 41
	this.tabBar.showGroup(FlowRouter.current().route.name);                                                               // 42
	this.tabBarData = new ReactiveVar();                                                                                  // 43
	RocketChat.TabBar.addButton({                                                                                         // 45
		groups: ['emoji-custom'],                                                                                            // 46
		id: 'add-emoji',                                                                                                     // 47
		i18nTitle: 'Custom_Emoji_Add',                                                                                       // 48
		icon: 'icon-plus',                                                                                                   // 49
		template: 'adminEmojiEdit',                                                                                          // 50
		order: 1                                                                                                             // 51
	});                                                                                                                   // 45
	RocketChat.TabBar.addButton({                                                                                         // 54
		groups: ['emoji-custom'],                                                                                            // 55
		id: 'admin-emoji-info',                                                                                              // 56
		i18nTitle: 'Custom_Emoji_Info',                                                                                      // 57
		icon: 'icon-cog',                                                                                                    // 58
		template: 'adminEmojiInfo',                                                                                          // 59
		order: 2                                                                                                             // 60
	});                                                                                                                   // 54
	this.autorun(function () {                                                                                            // 63
		var limit = instance.limit != null ? instance.limit.get() : 0;                                                       // 64
		var subscription = instance.subscribe('fullEmojiData', '', limit);                                                   // 65
		instance.ready.set(subscription.ready());                                                                            // 66
	});                                                                                                                   // 67
                                                                                                                       //
	this.customemoji = function () {                                                                                      // 69
		var filter = instance.filter != null ? _.trim(instance.filter.get()) : '';                                           // 70
		var query = {};                                                                                                      // 72
                                                                                                                       //
		if (filter) {                                                                                                        // 74
			var filterReg = new RegExp(s.escapeRegExp(filter), 'i');                                                            // 75
			query = {                                                                                                           // 76
				$or: [{                                                                                                            // 76
					name: filterReg                                                                                                   // 76
				}, {                                                                                                               // 76
					aliases: filterReg                                                                                                // 76
				}]                                                                                                                 // 76
			};                                                                                                                  // 76
		}                                                                                                                    // 77
                                                                                                                       //
		var limit = instance.limit != null ? instance.limit.get() : 0;                                                       // 79
		return RocketChat.models.EmojiCustom.find(query, {                                                                   // 81
			limit: limit,                                                                                                       // 81
			sort: {                                                                                                             // 81
				name: 1                                                                                                            // 81
			}                                                                                                                   // 81
		}).fetch();                                                                                                          // 81
	};                                                                                                                    // 82
});                                                                                                                    // 83
Template.adminEmoji.onRendered(function () {                                                                           // 85
	return Tracker.afterFlush(function () {                                                                               // 85
		SideNav.setFlex('adminFlex');                                                                                        // 87
		SideNav.openFlex();                                                                                                  // 88
	});                                                                                                                   // 89
});                                                                                                                    // 85
Template.adminEmoji.events({                                                                                           // 92
	'keydown #emoji-filter': function (e) {                                                                               // 93
		//stop enter key                                                                                                     // 94
		if (e.which === 13) {                                                                                                // 95
			e.stopPropagation();                                                                                                // 96
			e.preventDefault();                                                                                                 // 97
		}                                                                                                                    // 98
	},                                                                                                                    // 99
	'keyup #emoji-filter': function (e, t) {                                                                              // 101
		e.stopPropagation();                                                                                                 // 102
		e.preventDefault();                                                                                                  // 103
		t.filter.set(e.currentTarget.value);                                                                                 // 104
	},                                                                                                                    // 105
	'click .emoji-info': function (e, instance) {                                                                         // 107
		e.preventDefault();                                                                                                  // 108
		instance.tabBarData.set(RocketChat.models.EmojiCustom.findOne({                                                      // 109
			_id: this._id                                                                                                       // 109
		}));                                                                                                                 // 109
		instance.tabBar.open('admin-emoji-info');                                                                            // 110
	},                                                                                                                    // 111
	'click .load-more': function (e, t) {                                                                                 // 113
		e.preventDefault();                                                                                                  // 114
		e.stopPropagation();                                                                                                 // 115
		t.limit.set(t.limit.get() + 50);                                                                                     // 116
	}                                                                                                                     // 117
});                                                                                                                    // 92
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminEmojiEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.adminEmojiEdit.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminEmojiEdit");                                                                                // 2
Template["adminEmojiEdit"] = new Template("Template.adminEmojiEdit", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div style="height:150px">\n\t\tadminEmojiEdit 공지사항 영역\n\t</div>\n\t'), HTML.DIV({                // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "emoji-view"                                                                                                // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 9
    return Spacebars.call(view.lookup("."));                                                                           // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("emojiEdit"));                                                        // 12
  }), "\n\t\t"), "\n\t") ];                                                                                            // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.adminEmojiInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.adminEmojiInfo.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("adminEmojiInfo");                                                                                // 2
Template["adminEmojiInfo"] = new Template("Template.adminEmojiInfo", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div style="height:150px">\n\t\tadminEmojiInfo 공지사항 영역\n\t</div>\n\t'), HTML.DIV({                // 5
    class: "content"                                                                                                   // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "emoji-view"                                                                                                // 8
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                      // 9
    return Spacebars.call(view.lookup("."));                                                                           // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(view.lookupTemplate("emojiInfo"));                                                        // 12
  }), "\n\t\t"), "\n\t") ];                                                                                            // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.emojiPreview.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.emojiPreview.js                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("emojiPreview");                                                                                  // 2
Template["emojiPreview"] = new Template("Template.emojiPreview", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div style="height:150px">\n\t\temojiAdminPreview 공지사항 영역\n\t</div>\n\t'), HTML.DIV({             // 5
    class: "emojiAdminPreview"                                                                                         // 6
  }, "\n\t\t", HTML.DIV({                                                                                              // 7
    class: "emojiAdminPreview-image",                                                                                  // 8
    "data-emoji": function() {                                                                                         // 9
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "name"));                                              // 10
    },                                                                                                                 // 11
    style: function() {                                                                                                // 12
      return [ "background-image:url('", Spacebars.mustache(view.lookup("emojiUrlFromName"), Spacebars.dot(view.lookup("."), "name"), Spacebars.dot(view.lookup("."), "extension")), "');" ];
    }                                                                                                                  // 14
  }), "\n\t") ];                                                                                                       // 15
}));                                                                                                                   // 16
                                                                                                                       // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.emojiEdit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.emojiEdit.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("emojiEdit");                                                                                     // 2
Template["emojiEdit"] = new Template("Template.emojiEdit", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div style="height:150px">\n\t\temojiEdit 공지사항 영역\n\t</div>\n\t'), Blaze.Unless(function() {      // 5
    return Spacebars.dataMustache(view.lookup("hasPermission"), "manage-emoji");                                       // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", HTML.P(Blaze.View("lookup:_", function() {                                                      // 8
      return Spacebars.mustache(view.lookup("_"), "You_are_not_authorized_to_view_this_page");                         // 9
    })), "\n\t" ];                                                                                                     // 10
  }, function() {                                                                                                      // 11
    return [ "\n\t\t", HTML.DIV({                                                                                      // 12
      class: "about clearfix"                                                                                          // 13
    }, "\n\t\t\t", HTML.FORM({                                                                                         // 14
      class: "edit-form",                                                                                              // 15
      autocomplete: "off"                                                                                              // 16
    }, "\n\t\t\t\t", Blaze.If(function() {                                                                             // 17
      return Spacebars.call(view.lookup("emoji"));                                                                     // 18
    }, function() {                                                                                                    // 19
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:emoji.name", function() {                                    // 20
        return Spacebars.mustache(Spacebars.dot(view.lookup("emoji"), "name"));                                        // 21
      })), "\n\t\t\t\t" ];                                                                                             // 22
    }, function() {                                                                                                    // 23
      return [ "\n\t\t\t\t\t", HTML.H3(Blaze.View("lookup:_", function() {                                             // 24
        return Spacebars.mustache(view.lookup("_"), "Custom_Emoji_Add");                                               // 25
      })), "\n\t\t\t\t" ];                                                                                             // 26
    }), "\n\t\t\t\t", HTML.DIV({                                                                                       // 27
      class: "input-line"                                                                                              // 28
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 29
      for: "name"                                                                                                      // 30
    }, Blaze.View("lookup:_", function() {                                                                             // 31
      return Spacebars.mustache(view.lookup("_"), "Name");                                                             // 32
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 33
      type: "text",                                                                                                    // 34
      id: "name",                                                                                                      // 35
      autocomplete: "off",                                                                                             // 36
      value: function() {                                                                                              // 37
        return Spacebars.mustache(Spacebars.dot(view.lookup("emoji"), "name"));                                        // 38
      },                                                                                                               // 39
      class: "content-background-color"                                                                                // 40
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 41
      class: "input-line"                                                                                              // 42
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 43
      for: "aliases"                                                                                                   // 44
    }, Blaze.View("lookup:_", function() {                                                                             // 45
      return Spacebars.mustache(view.lookup("_"), "Aliases");                                                          // 46
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 47
      type: "text",                                                                                                    // 48
      id: "aliases",                                                                                                   // 49
      autocomplete: "off",                                                                                             // 50
      value: function() {                                                                                              // 51
        return Spacebars.mustache(Spacebars.dot(view.lookup("emoji"), "aliases"));                                     // 52
      },                                                                                                               // 53
      class: "content-background-color"                                                                                // 54
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.DIV({                                                                        // 55
      class: "input-line"                                                                                              // 56
    }, "\n\t\t\t\t\t", HTML.LABEL({                                                                                    // 57
      for: "image"                                                                                                     // 58
    }, Blaze.View("lookup:_", function() {                                                                             // 59
      return Spacebars.mustache(view.lookup("_"), "Image");                                                            // 60
    })), "\n\t\t\t\t\t", HTML.INPUT({                                                                                  // 61
      id: "image",                                                                                                     // 62
      type: "file"                                                                                                     // 63
    }), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.NAV("\n\t\t\t\t\t", HTML.BUTTON({                                            // 64
      class: "button button-block cancel",                                                                             // 65
      type: "button"                                                                                                   // 66
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 67
      return Spacebars.mustache(view.lookup("_"), "Cancel");                                                           // 68
    }))), "\n\t\t\t\t\t", HTML.BUTTON({                                                                                // 69
      class: "button button-block primary save"                                                                        // 70
    }, HTML.SPAN(Blaze.View("lookup:_", function() {                                                                   // 71
      return Spacebars.mustache(view.lookup("_"), "Save");                                                             // 72
    }))), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t"), "\n\t" ];                                                             // 73
  }) ];                                                                                                                // 74
}));                                                                                                                   // 75
                                                                                                                       // 76
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"emojiEdit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/emojiEdit.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toastr = void 0;                                                                                                   // 1
module.watch(require("toastr"), {                                                                                      // 1
	"default": function (v) {                                                                                             // 1
		toastr = v;                                                                                                          // 1
	}                                                                                                                     // 1
}, 0);                                                                                                                 // 1
Template.emojiEdit.helpers({                                                                                           // 3
	emoji: function () {                                                                                                  // 4
		return Template.instance().emoji;                                                                                    // 5
	},                                                                                                                    // 6
	name: function () {                                                                                                   // 8
		return this.name || this._id;                                                                                        // 9
	}                                                                                                                     // 10
});                                                                                                                    // 3
Template.emojiEdit.events({                                                                                            // 13
	'click .cancel': function (e, t) {                                                                                    // 14
		e.stopPropagation();                                                                                                 // 15
		e.preventDefault();                                                                                                  // 16
		delete Template.instance().emojiFile;                                                                                // 17
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
		if (files == null || files.length === 0) {                                                                           // 30
			if (e.dataTransfer != null && e.dataTransfer.files != null) {                                                       // 31
				files = e.dataTransfer.files;                                                                                      // 32
			} else {                                                                                                            // 33
				files = [];                                                                                                        // 34
			}                                                                                                                   // 35
		} //using let x of y here seems to have incompatibility with some phones                                             // 36
                                                                                                                       //
                                                                                                                       //
		for (var file in meteorBabelHelpers.sanitizeForInObject(files)) {                                                    // 39
			if (files.hasOwnProperty(file)) {                                                                                   // 40
				Template.instance().emojiFile = files[file];                                                                       // 41
			}                                                                                                                   // 42
		}                                                                                                                    // 43
	}                                                                                                                     // 44
});                                                                                                                    // 13
Template.emojiEdit.onCreated(function () {                                                                             // 47
	var _this = this;                                                                                                     // 47
                                                                                                                       //
	if (this.data != null) {                                                                                              // 48
		this.emoji = this.data.emoji;                                                                                        // 49
	} else {                                                                                                              // 50
		this.emoji = undefined;                                                                                              // 51
	}                                                                                                                     // 52
                                                                                                                       //
	this.tabBar = Template.currentData().tabBar;                                                                          // 54
                                                                                                                       //
	this.cancel = function (form, name) {                                                                                 // 56
		form.reset();                                                                                                        // 57
                                                                                                                       //
		_this.tabBar.close();                                                                                                // 58
                                                                                                                       //
		if (_this.emoji) {                                                                                                   // 59
			_this.data.back(name);                                                                                              // 60
		}                                                                                                                    // 61
	};                                                                                                                    // 62
                                                                                                                       //
	this.getEmojiData = function () {                                                                                     // 64
		var emojiData = {};                                                                                                  // 65
                                                                                                                       //
		if (_this.emoji != null) {                                                                                           // 66
			emojiData._id = _this.emoji._id;                                                                                    // 67
			emojiData.previousName = _this.emoji.name;                                                                          // 68
			emojiData.extension = _this.emoji.extension;                                                                        // 69
			emojiData.previousExtension = _this.emoji.extension;                                                                // 70
		}                                                                                                                    // 71
                                                                                                                       //
		emojiData.name = s.trim(_this.$('#name').val());                                                                     // 72
		emojiData.aliases = s.trim(_this.$('#aliases').val());                                                               // 73
		emojiData.newFile = false;                                                                                           // 74
		return emojiData;                                                                                                    // 75
	};                                                                                                                    // 76
                                                                                                                       //
	this.validate = function () {                                                                                         // 78
		var emojiData = _this.getEmojiData();                                                                                // 79
                                                                                                                       //
		var errors = [];                                                                                                     // 81
                                                                                                                       //
		if (!emojiData.name) {                                                                                               // 82
			errors.push('Name');                                                                                                // 83
		}                                                                                                                    // 84
                                                                                                                       //
		if (!emojiData._id) {                                                                                                // 86
			if (!_this.emojiFile) {                                                                                             // 87
				errors.push('Image');                                                                                              // 88
			}                                                                                                                   // 89
		}                                                                                                                    // 90
                                                                                                                       //
		for (var _iterator = errors, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                           // 92
                                                                                                                       //
			if (_isArray) {                                                                                                     // 92
				if (_i >= _iterator.length) break;                                                                                 // 92
				_ref = _iterator[_i++];                                                                                            // 92
			} else {                                                                                                            // 92
				_i = _iterator.next();                                                                                             // 92
				if (_i.done) break;                                                                                                // 92
				_ref = _i.value;                                                                                                   // 92
			}                                                                                                                   // 92
                                                                                                                       //
			var error = _ref;                                                                                                   // 92
			toastr.error(TAPi18n.__('error-the-field-is-required', {                                                            // 93
				field: TAPi18n.__(error)                                                                                           // 93
			}));                                                                                                                // 93
		}                                                                                                                    // 94
                                                                                                                       //
		if (_this.emojiFile) {                                                                                               // 96
			if (!/image\/.+/.test(_this.emojiFile.type)) {                                                                      // 97
				errors.push('FileType');                                                                                           // 98
				toastr.error(TAPi18n.__('error-invalid-file-type'));                                                               // 99
			}                                                                                                                   // 100
		}                                                                                                                    // 101
                                                                                                                       //
		return errors.length === 0;                                                                                          // 103
	};                                                                                                                    // 104
                                                                                                                       //
	this.save = function (form) {                                                                                         // 106
		if (_this.validate()) {                                                                                              // 107
			var emojiData = _this.getEmojiData();                                                                               // 108
                                                                                                                       //
			if (_this.emojiFile) {                                                                                              // 110
				emojiData.newFile = true;                                                                                          // 111
				emojiData.extension = _this.emojiFile.name.split('.').pop();                                                       // 112
			}                                                                                                                   // 113
                                                                                                                       //
			Meteor.call('insertOrUpdateEmoji', emojiData, function (error, result) {                                            // 115
				if (result) {                                                                                                      // 116
					if (_this.emojiFile) {                                                                                            // 117
						toastr.info(TAPi18n.__('Uploading_file'));                                                                       // 118
						var reader = new FileReader();                                                                                   // 120
						reader.readAsBinaryString(_this.emojiFile);                                                                      // 121
                                                                                                                       //
						reader.onloadend = function () {                                                                                 // 122
							Meteor.call('uploadEmojiCustom', reader.result, _this.emojiFile.type, emojiData, function (uploadError /*, data*/) {
								if (uploadError != null) {                                                                                     // 124
									handleError(uploadError);                                                                                     // 125
									console.log(uploadError);                                                                                     // 126
									return;                                                                                                       // 127
								}                                                                                                              // 128
							});                                                                                                             // 129
							delete _this.emojiFile;                                                                                         // 131
							toastr.success(TAPi18n.__('File_uploaded'));                                                                    // 132
						};                                                                                                               // 133
					}                                                                                                                 // 134
                                                                                                                       //
					if (emojiData._id) {                                                                                              // 136
						toastr.success(t('Custom_Emoji_Updated_Successfully'));                                                          // 137
					} else {                                                                                                          // 138
						toastr.success(t('Custom_Emoji_Added_Successfully'));                                                            // 139
					}                                                                                                                 // 140
                                                                                                                       //
					_this.cancel(form, emojiData.name);                                                                               // 142
				}                                                                                                                  // 143
                                                                                                                       //
				if (error) {                                                                                                       // 145
					handleError(error);                                                                                               // 146
				}                                                                                                                  // 147
			});                                                                                                                 // 148
		}                                                                                                                    // 149
	};                                                                                                                    // 150
});                                                                                                                    // 151
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.emojiInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/template.emojiInfo.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("emojiInfo");                                                                                     // 2
Template["emojiInfo"] = new Template("Template.emojiInfo", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div style="height:150px">\n\t\temojiInfo 공지사항 영역\n\t</div>\n\t'), Blaze.If(function() {          // 5
    return Spacebars.call(view.lookup("editingEmoji"));                                                                // 6
  }, function() {                                                                                                      // 7
    return [ "\n\t\t", Blaze._TemplateWith(function() {                                                                // 8
      return Spacebars.dataMustache(view.lookup("emojiToEdit"));                                                       // 9
    }, function() {                                                                                                    // 10
      return Spacebars.include(view.lookupTemplate("emojiEdit"));                                                      // 11
    }), "\n\t" ];                                                                                                      // 12
  }, function() {                                                                                                      // 13
    return [ "\n\t\t", Spacebars.With(function() {                                                                     // 14
      return Spacebars.call(view.lookup("emoji"));                                                                     // 15
    }, function() {                                                                                                    // 16
      return [ "\n\t\t\t", HTML.DIV({                                                                                  // 17
        class: "about clearfix"                                                                                        // 18
      }, "\n\t\t\t", HTML.DIV({                                                                                        // 19
        class: "thumb"                                                                                                 // 20
      }, "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                                // 21
        return {                                                                                                       // 22
          name: Spacebars.call(view.lookup("name")),                                                                   // 23
          extension: Spacebars.call(view.lookup("extension"))                                                          // 24
        };                                                                                                             // 25
      }, function() {                                                                                                  // 26
        return Spacebars.include(view.lookupTemplate("emojiPreview"));                                                 // 27
      }), "\n\t\t\t"), "\n\t\t\t", HTML.DIV({                                                                          // 28
        class: "info"                                                                                                  // 29
      }, "\n\t\t\t\t", HTML.H3({                                                                                       // 30
        title: function() {                                                                                            // 31
          return Spacebars.mustache(view.lookup("name"));                                                              // 32
        }                                                                                                              // 33
      }, Blaze.View("lookup:name", function() {                                                                        // 34
        return Spacebars.mustache(view.lookup("name"));                                                                // 35
      })), "\n\t\t\t\t", HTML.H3({                                                                                     // 36
        title: function() {                                                                                            // 37
          return Spacebars.mustache(view.lookup("aliases"));                                                           // 38
        }                                                                                                              // 39
      }, Blaze.View("lookup:aliases", function() {                                                                     // 40
        return Spacebars.mustache(view.lookup("aliases"));                                                             // 41
      })), "\n\t\t\t"), "\n\t\t"), "\n\t\t" ];                                                                         // 42
    }), "\n\t\t", HTML.NAV("\n\t\t\t", Blaze.If(function() {                                                           // 43
      return Spacebars.dataMustache(view.lookup("hasPermission"), "manage-emoji");                                     // 44
    }, function() {                                                                                                    // 45
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                             // 46
        class: "button button-block danger delete"                                                                     // 47
      }, HTML.SPAN(HTML.I({                                                                                            // 48
        class: "icon-trash"                                                                                            // 49
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 50
        return Spacebars.mustache(view.lookup("_"), "Delete");                                                         // 51
      }))), "\n\t\t\t", HTML.BUTTON({                                                                                  // 52
        class: "button button-block primary edit-emoji"                                                                // 53
      }, HTML.SPAN(HTML.I({                                                                                            // 54
        class: "icon-edit"                                                                                             // 55
      }), " ", Blaze.View("lookup:_", function() {                                                                     // 56
        return Spacebars.mustache(view.lookup("_"), "Edit");                                                           // 57
      }))), "\n\t\t\t" ];                                                                                              // 58
    }), "\n\t\t"), "\n\t" ];                                                                                           // 59
  }) ];                                                                                                                // 60
}));                                                                                                                   // 61
                                                                                                                       // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"emojiInfo.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/emojiInfo.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.emojiInfo.helpers({                                                                                           // 1
	name: function () {                                                                                                   // 2
		var emoji = Template.instance().emoji.get();                                                                         // 3
		return emoji.name;                                                                                                   // 4
	},                                                                                                                    // 5
	aliases: function () {                                                                                                // 7
		var emoji = Template.instance().emoji.get();                                                                         // 8
		return emoji.aliases;                                                                                                // 9
	},                                                                                                                    // 10
	emoji: function () {                                                                                                  // 12
		return Template.instance().emoji.get();                                                                              // 13
	},                                                                                                                    // 14
	editingEmoji: function () {                                                                                           // 16
		return Template.instance().editingEmoji.get();                                                                       // 17
	},                                                                                                                    // 18
	emojiToEdit: function () {                                                                                            // 20
		var instance = Template.instance();                                                                                  // 21
		return {                                                                                                             // 22
			tabBar: this.tabBar,                                                                                                // 23
			emoji: instance.emoji.get(),                                                                                        // 24
			back: function (name) {                                                                                             // 25
				instance.editingEmoji.set();                                                                                       // 26
                                                                                                                       //
				if (name != null) {                                                                                                // 28
					var emoji = instance.emoji.get();                                                                                 // 29
                                                                                                                       //
					if (emoji != null && emoji.name != null && emoji.name !== name) {                                                 // 30
						return instance.loadedName.set(name);                                                                            // 31
					}                                                                                                                 // 32
				}                                                                                                                  // 33
			}                                                                                                                   // 34
		};                                                                                                                   // 22
	}                                                                                                                     // 36
});                                                                                                                    // 1
Template.emojiInfo.events({                                                                                            // 39
	'click .thumb': function (e) {                                                                                        // 40
		$(e.currentTarget).toggleClass('bigger');                                                                            // 41
	},                                                                                                                    // 42
	'click .delete': function (e, instance) {                                                                             // 44
		e.stopPropagation();                                                                                                 // 45
		e.preventDefault();                                                                                                  // 46
		var emoji = instance.emoji.get();                                                                                    // 47
                                                                                                                       //
		if (emoji != null) {                                                                                                 // 48
			var _id = emoji._id;                                                                                                // 49
			swal({                                                                                                              // 50
				title: t('Are_you_sure'),                                                                                          // 51
				text: t('Custom_Emoji_Delete_Warning'),                                                                            // 52
				type: 'warning',                                                                                                   // 53
				showCancelButton: true,                                                                                            // 54
				confirmButtonColor: '#DD6B55',                                                                                     // 55
				confirmButtonText: t('Yes_delete_it'),                                                                             // 56
				cancelButtonText: t('Cancel'),                                                                                     // 57
				closeOnConfirm: false,                                                                                             // 58
				html: false                                                                                                        // 59
			}, function () {                                                                                                    // 50
				swal.disableButtons();                                                                                             // 61
				Meteor.call('deleteEmojiCustom', _id, function (error /*, result*/) {                                              // 63
					if (error) {                                                                                                      // 64
						handleError(error);                                                                                              // 65
						swal.enableButtons();                                                                                            // 66
					} else {                                                                                                          // 67
						swal({                                                                                                           // 68
							title: t('Deleted'),                                                                                            // 69
							text: t('Custom_Emoji_Has_Been_Deleted'),                                                                       // 70
							type: 'success',                                                                                                // 71
							timer: 2000,                                                                                                    // 72
							showConfirmButton: false                                                                                        // 73
						});                                                                                                              // 68
						instance.tabBar.close();                                                                                         // 76
					}                                                                                                                 // 77
				});                                                                                                                // 78
			});                                                                                                                 // 79
		}                                                                                                                    // 80
	},                                                                                                                    // 81
	'click .edit-emoji': function (e, instance) {                                                                         // 83
		e.stopPropagation();                                                                                                 // 84
		e.preventDefault();                                                                                                  // 85
		instance.editingEmoji.set(instance.emoji.get()._id);                                                                 // 87
	}                                                                                                                     // 88
});                                                                                                                    // 39
Template.emojiInfo.onCreated(function () {                                                                             // 91
	var _this = this;                                                                                                     // 91
                                                                                                                       //
	this.emoji = new ReactiveVar();                                                                                       // 92
	this.editingEmoji = new ReactiveVar();                                                                                // 94
	this.loadedName = new ReactiveVar();                                                                                  // 96
	this.tabBar = Template.currentData().tabBar;                                                                          // 98
	this.autorun(function () {                                                                                            // 100
		var data = Template.currentData();                                                                                   // 101
                                                                                                                       //
		if (data != null && data.clear != null) {                                                                            // 102
			_this.clear = data.clear;                                                                                           // 103
		}                                                                                                                    // 104
	});                                                                                                                   // 105
	this.autorun(function () {                                                                                            // 107
		var data = Template.currentData();                                                                                   // 108
                                                                                                                       //
		var emoji = _this.emoji.get();                                                                                       // 109
                                                                                                                       //
		if (emoji != null && emoji.name != null) {                                                                           // 110
			_this.loadedName.set(emoji.name);                                                                                   // 111
		} else if (data != null && data.name != null) {                                                                      // 112
			_this.loadedName.set(data.name);                                                                                    // 113
		}                                                                                                                    // 114
	});                                                                                                                   // 115
	this.autorun(function () {                                                                                            // 117
		var data = Template.currentData();                                                                                   // 118
                                                                                                                       //
		_this.emoji.set(data);                                                                                               // 119
	});                                                                                                                   // 120
});                                                                                                                    // 121
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/admin/route.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
FlowRouter.route('/admin/emoji-custom', {                                                                              // 1
	name: 'emoji-custom',                                                                                                 // 2
	subscriptions: function () /*params, queryParams*/{                                                                   // 3
		this.register('EmojiCustom', Meteor.subscribe('EmojiCustom'));                                                       // 4
	},                                                                                                                    // 5
	action: function () /*params*/{                                                                                       // 6
		BlazeLayout.render('main', {                                                                                         // 7
			center: 'adminEmoji'                                                                                                // 7
		});                                                                                                                  // 7
	}                                                                                                                     // 8
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"lib":{"emojiCustom.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/client/lib/emojiCustom.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals getEmojiUrlFromName:true, updateEmojiCustom:true, deleteEmojiCustom:true, isSetNotNull */RocketChat.emoji.packages.emojiCustom = {
	emojiCategories: {                                                                                                    // 3
		rocket: TAPi18n.__('Custom')                                                                                         // 3
	},                                                                                                                    // 3
	toneList: {},                                                                                                         // 4
	list: [],                                                                                                             // 5
	render: function (html) {                                                                                             // 7
		var regShortNames = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + RocketChat.emoji.packages.emojiCustom.list.join('|') + ")", 'gi'); // replace regular shortnames first
                                                                                                                       //
		html = html.replace(regShortNames, function (shortname) {                                                            // 11
			// console.log('shortname (preif) ->', shortname, html);                                                            // 12
			if (typeof shortname === 'undefined' || shortname === '' || RocketChat.emoji.packages.emojiCustom.list.indexOf(shortname) === -1) {
				// if the shortname doesnt exist just return the entire match                                                      // 14
				return shortname;                                                                                                  // 15
			} else {                                                                                                            // 16
				var emojiAlias = shortname.replace(/:/g, '');                                                                      // 17
				var dataCheck = RocketChat.emoji.list[shortname];                                                                  // 19
                                                                                                                       //
				if (dataCheck.hasOwnProperty('aliasOf')) {                                                                         // 20
					emojiAlias = dataCheck['aliasOf'];                                                                                // 21
					dataCheck = RocketChat.emoji.list[":" + emojiAlias + ":"];                                                        // 22
				}                                                                                                                  // 23
                                                                                                                       //
				return "<span class=\"emoji\" style=\"background-image:url(" + getEmojiUrlFromName(emojiAlias, dataCheck['extension']) + ");\" data-emoji=\"" + emojiAlias + "\" title=\"" + shortname + "\">" + shortname + "</span>";
			}                                                                                                                   // 26
		});                                                                                                                  // 27
		return html;                                                                                                         // 29
	}                                                                                                                     // 30
};                                                                                                                     // 2
                                                                                                                       //
getEmojiUrlFromName = function (name, extension) {                                                                     // 33
	Session.get;                                                                                                          // 34
	var key = "emoji_random_" + name;                                                                                     // 36
	var random = 0;                                                                                                       // 38
                                                                                                                       //
	if (isSetNotNull(function () {                                                                                        // 39
		return Session.keys[key];                                                                                            // 39
	})) {                                                                                                                 // 39
		random = Session.keys[key];                                                                                          // 40
	}                                                                                                                     // 41
                                                                                                                       //
	if (name == null) {                                                                                                   // 43
		return;                                                                                                              // 44
	}                                                                                                                     // 45
                                                                                                                       //
	var path = Meteor.isCordova ? Meteor.absoluteUrl().replace(/\/$/, '') : __meteor_runtime_config__.ROOT_URL_PATH_PREFIX || '';
	return path + "/emoji-custom/" + encodeURIComponent(name) + "." + extension + "?_dc=" + random;                       // 47
};                                                                                                                     // 48
                                                                                                                       //
Blaze.registerHelper('emojiUrlFromName', getEmojiUrlFromName);                                                         // 50
                                                                                                                       //
deleteEmojiCustom = function (emojiData) {                                                                             // 52
	delete RocketChat.emoji.list[":" + emojiData.name + ":"];                                                             // 53
	var arrayIndex = RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.indexOf(emojiData.name);               // 54
                                                                                                                       //
	if (arrayIndex !== -1) {                                                                                              // 55
		RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.splice(arrayIndex, 1);                                 // 56
	}                                                                                                                     // 57
                                                                                                                       //
	var arrayIndexList = RocketChat.emoji.packages.emojiCustom.list.indexOf(":" + emojiData.name + ":");                  // 58
                                                                                                                       //
	if (arrayIndexList !== -1) {                                                                                          // 59
		RocketChat.emoji.packages.emojiCustom.list.splice(arrayIndexList, 1);                                                // 60
	}                                                                                                                     // 61
                                                                                                                       //
	if (isSetNotNull(function () {                                                                                        // 62
		return emojiData.aliases;                                                                                            // 62
	})) {                                                                                                                 // 62
		for (var _iterator = emojiData.aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
			var _ref;                                                                                                           // 63
                                                                                                                       //
			if (_isArray) {                                                                                                     // 63
				if (_i >= _iterator.length) break;                                                                                 // 63
				_ref = _iterator[_i++];                                                                                            // 63
			} else {                                                                                                            // 63
				_i = _iterator.next();                                                                                             // 63
				if (_i.done) break;                                                                                                // 63
				_ref = _i.value;                                                                                                   // 63
			}                                                                                                                   // 63
                                                                                                                       //
			var alias = _ref;                                                                                                   // 63
			delete RocketChat.emoji.list[":" + alias + ":"];                                                                    // 64
			var aliasIndex = RocketChat.emoji.packages.emojiCustom.list.indexOf(":" + alias + ":");                             // 65
                                                                                                                       //
			if (aliasIndex !== -1) {                                                                                            // 66
				RocketChat.emoji.packages.emojiCustom.list.splice(aliasIndex, 1);                                                  // 67
			}                                                                                                                   // 68
		}                                                                                                                    // 69
	}                                                                                                                     // 70
                                                                                                                       //
	RocketChat.EmojiPicker.updateRecent();                                                                                // 71
};                                                                                                                     // 72
                                                                                                                       //
updateEmojiCustom = function (emojiData) {                                                                             // 74
	var key = "emoji_random_" + emojiData.name;                                                                           // 75
	Session.set(key, Math.round(Math.random() * 1000));                                                                   // 76
	var previousExists = isSetNotNull(function () {                                                                       // 78
		return emojiData.previousName;                                                                                       // 78
	});                                                                                                                   // 78
	var currentAliases = isSetNotNull(function () {                                                                       // 79
		return emojiData.aliases;                                                                                            // 79
	});                                                                                                                   // 79
                                                                                                                       //
	if (previousExists && isSetNotNull(function () {                                                                      // 81
		return RocketChat.emoji.list[":" + emojiData.previousName + ":"].aliases;                                            // 81
	})) {                                                                                                                 // 81
		for (var _iterator2 = RocketChat.emoji.list[":" + emojiData.previousName + ":"].aliases, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
			var _ref2;                                                                                                          // 82
                                                                                                                       //
			if (_isArray2) {                                                                                                    // 82
				if (_i2 >= _iterator2.length) break;                                                                               // 82
				_ref2 = _iterator2[_i2++];                                                                                         // 82
			} else {                                                                                                            // 82
				_i2 = _iterator2.next();                                                                                           // 82
				if (_i2.done) break;                                                                                               // 82
				_ref2 = _i2.value;                                                                                                 // 82
			}                                                                                                                   // 82
                                                                                                                       //
			var alias = _ref2;                                                                                                  // 82
			delete RocketChat.emoji.list[":" + alias + ":"];                                                                    // 83
			var aliasIndex = RocketChat.emoji.packages.emojiCustom.list.indexOf(":" + alias + ":");                             // 84
                                                                                                                       //
			if (aliasIndex !== -1) {                                                                                            // 85
				RocketChat.emoji.packages.emojiCustom.list.splice(aliasIndex, 1);                                                  // 86
			}                                                                                                                   // 87
		}                                                                                                                    // 88
	}                                                                                                                     // 89
                                                                                                                       //
	if (previousExists && emojiData.name !== emojiData.previousName) {                                                    // 91
		var arrayIndex = RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.indexOf(emojiData.previousName);      // 92
                                                                                                                       //
		if (arrayIndex !== -1) {                                                                                             // 93
			RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.splice(arrayIndex, 1);                                // 94
		}                                                                                                                    // 95
                                                                                                                       //
		var arrayIndexList = RocketChat.emoji.packages.emojiCustom.list.indexOf(":" + emojiData.previousName + ":");         // 96
                                                                                                                       //
		if (arrayIndexList !== -1) {                                                                                         // 97
			RocketChat.emoji.packages.emojiCustom.list.splice(arrayIndexList, 1);                                               // 98
		}                                                                                                                    // 99
                                                                                                                       //
		delete RocketChat.emoji.list[":" + emojiData.previousName + ":"];                                                    // 100
	}                                                                                                                     // 101
                                                                                                                       //
	var categoryIndex = RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.indexOf("" + emojiData.name);       // 103
                                                                                                                       //
	if (categoryIndex === -1) {                                                                                           // 104
		RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.push("" + emojiData.name);                             // 105
		RocketChat.emoji.packages.emojiCustom.list.push(":" + emojiData.name + ":");                                         // 106
	}                                                                                                                     // 107
                                                                                                                       //
	RocketChat.emoji.list[":" + emojiData.name + ":"] = Object.assign({                                                   // 108
		emojiPackage: 'emojiCustom'                                                                                          // 108
	}, RocketChat.emoji.list[":" + emojiData.name + ":"], emojiData);                                                     // 108
                                                                                                                       //
	if (currentAliases) {                                                                                                 // 109
		for (var _iterator3 = emojiData.aliases, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
			var _ref3;                                                                                                          // 110
                                                                                                                       //
			if (_isArray3) {                                                                                                    // 110
				if (_i3 >= _iterator3.length) break;                                                                               // 110
				_ref3 = _iterator3[_i3++];                                                                                         // 110
			} else {                                                                                                            // 110
				_i3 = _iterator3.next();                                                                                           // 110
				if (_i3.done) break;                                                                                               // 110
				_ref3 = _i3.value;                                                                                                 // 110
			}                                                                                                                   // 110
                                                                                                                       //
			var _alias = _ref3;                                                                                                 // 110
			RocketChat.emoji.packages.emojiCustom.list.push(":" + _alias + ":");                                                // 111
			RocketChat.emoji.list[":" + _alias + ":"] = {};                                                                     // 112
			RocketChat.emoji.list[":" + _alias + ":"].emojiPackage = 'emojiCustom';                                             // 113
			RocketChat.emoji.list[":" + _alias + ":"].aliasOf = emojiData.name;                                                 // 114
		}                                                                                                                    // 115
	}                                                                                                                     // 116
                                                                                                                       //
	var url = getEmojiUrlFromName(emojiData.name, emojiData.extension); //update in admin interface                       // 118
                                                                                                                       //
	if (previousExists && emojiData.name !== emojiData.previousName) {                                                    // 121
		$(document).find(".emojiAdminPreview-image[data-emoji='" + emojiData.previousName + "']").css('background-image', "url('" + url + ")'").attr('data-emoji', "" + emojiData.name);
	} else {                                                                                                              // 123
		$(document).find(".emojiAdminPreview-image[data-emoji='" + emojiData.name + "']").css('background-image', "url('" + url + "')");
	} //update in picker                                                                                                  // 125
                                                                                                                       //
                                                                                                                       //
	if (previousExists && emojiData.name !== emojiData.previousName) {                                                    // 128
		$(document).find("li[data-emoji='" + emojiData.previousName + "'] span").css('background-image', "url('" + url + "')").attr('data-emoji', "" + emojiData.name);
		$(document).find("li[data-emoji='" + emojiData.previousName + "']").attr('data-emoji', "" + emojiData.name).attr('class', "emoji-" + emojiData.name);
	} else {                                                                                                              // 131
		$(document).find("li[data-emoji='" + emojiData.name + "'] span").css('background-image', "url('" + url + "')");      // 132
	} //update in picker and opened rooms                                                                                 // 133
                                                                                                                       //
                                                                                                                       //
	for (key in meteorBabelHelpers.sanitizeForInObject(RoomManager.openedRooms)) {                                        // 136
		if (RoomManager.openedRooms.hasOwnProperty(key)) {                                                                   // 137
			var room = RoomManager.openedRooms[key];                                                                            // 138
                                                                                                                       //
			if (previousExists && emojiData.name !== emojiData.previousName) {                                                  // 139
				$(room.dom).find("span[data-emoji='" + emojiData.previousName + "']").css('background-image', "url('" + url + "')").attr('data-emoji', "" + emojiData.name);
			} else {                                                                                                            // 141
				$(room.dom).find("span[data-emoji='" + emojiData.name + "']").css('background-image', "url('" + url + "')");       // 142
			}                                                                                                                   // 143
		}                                                                                                                    // 144
	}                                                                                                                     // 145
                                                                                                                       //
	RocketChat.EmojiPicker.updateRecent();                                                                                // 147
};                                                                                                                     // 148
                                                                                                                       //
Meteor.startup(function () {                                                                                           // 150
	return Meteor.call('listEmojiCustom', function (error, result) {                                                      // 150
		RocketChat.emoji.packages.emojiCustom.emojisByCategory = {                                                           // 152
			rocket: []                                                                                                          // 152
		};                                                                                                                   // 152
                                                                                                                       //
		for (var _iterator4 = result, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
			var _ref4;                                                                                                          // 153
                                                                                                                       //
			if (_isArray4) {                                                                                                    // 153
				if (_i4 >= _iterator4.length) break;                                                                               // 153
				_ref4 = _iterator4[_i4++];                                                                                         // 153
			} else {                                                                                                            // 153
				_i4 = _iterator4.next();                                                                                           // 153
				if (_i4.done) break;                                                                                               // 153
				_ref4 = _i4.value;                                                                                                 // 153
			}                                                                                                                   // 153
                                                                                                                       //
			var emoji = _ref4;                                                                                                  // 153
			RocketChat.emoji.packages.emojiCustom.emojisByCategory.rocket.push(emoji.name);                                     // 154
			RocketChat.emoji.packages.emojiCustom.list.push(":" + emoji.name + ":");                                            // 155
			RocketChat.emoji.list[":" + emoji.name + ":"] = emoji;                                                              // 156
			RocketChat.emoji.list[":" + emoji.name + ":"].emojiPackage = 'emojiCustom';                                         // 157
                                                                                                                       //
			for (var _iterator5 = emoji['aliases'], _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
				var _ref5;                                                                                                         // 158
                                                                                                                       //
				if (_isArray5) {                                                                                                   // 158
					if (_i5 >= _iterator5.length) break;                                                                              // 158
					_ref5 = _iterator5[_i5++];                                                                                        // 158
				} else {                                                                                                           // 158
					_i5 = _iterator5.next();                                                                                          // 158
					if (_i5.done) break;                                                                                              // 158
					_ref5 = _i5.value;                                                                                                // 158
				}                                                                                                                  // 158
                                                                                                                       //
				var alias = _ref5;                                                                                                 // 158
				RocketChat.emoji.packages.emojiCustom.list.push(":" + alias + ":");                                                // 159
				RocketChat.emoji.list[":" + alias + ":"] = {                                                                       // 160
					emojiPackage: 'emojiCustom',                                                                                      // 161
					aliasOf: emoji.name                                                                                               // 162
				};                                                                                                                 // 160
			}                                                                                                                   // 164
		}                                                                                                                    // 165
	});                                                                                                                   // 166
}); /* exported getEmojiUrlFromName, updateEmojiCustom, deleteEmojiCustom */                                           // 150
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"models":{"EmojiCustom.js":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/client/models/EmojiCustom.js                                                       //
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
var EmojiCustom = function (_RocketChat$models$_B) {                                                                   //
	(0, _inherits3.default)(EmojiCustom, _RocketChat$models$_B);                                                          //
                                                                                                                       //
	function EmojiCustom() {                                                                                              // 2
		(0, _classCallCheck3.default)(this, EmojiCustom);                                                                    // 2
                                                                                                                       //
		var _this = (0, _possibleConstructorReturn3.default)(this, _RocketChat$models$_B.call(this));                        // 2
                                                                                                                       //
		_this._initModel('custom_emoji');                                                                                    // 4
                                                                                                                       //
		return _this;                                                                                                        // 2
	}                                                                                                                     // 5
                                                                                                                       //
	return EmojiCustom;                                                                                                   //
}(RocketChat.models._Base);                                                                                            //
                                                                                                                       //
RocketChat.models.EmojiCustom = new EmojiCustom();                                                                     // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notifications":{"updateEmojiCustom.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/client/notifications/updateEmojiCustom.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals updateEmojiCustom */Meteor.startup(function () {                                                            // 1
	return RocketChat.Notifications.onLogged('updateEmojiCustom', function (data) {                                       // 2
		return updateEmojiCustom(data.emojiData);                                                                            // 3
	});                                                                                                                   // 3
});                                                                                                                    // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deleteEmojiCustom.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_emoji-custom/client/notifications/deleteEmojiCustom.js                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* globals deleteEmojiCustom */Meteor.startup(function () {                                                            // 1
	return RocketChat.Notifications.onLogged('deleteEmojiCustom', function (data) {                                       // 2
		return deleteEmojiCustom(data.emojiData);                                                                            // 3
	});                                                                                                                   // 3
});                                                                                                                    // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:emoji-custom/function-isSet.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/startup.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.adminEmoji.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/adminEmoji.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.adminEmojiEdit.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.adminEmojiInfo.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.emojiPreview.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.emojiEdit.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/emojiEdit.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/template.emojiInfo.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/emojiInfo.js");
require("./node_modules/meteor/rocketchat:emoji-custom/admin/route.js");
require("./node_modules/meteor/rocketchat:emoji-custom/client/lib/emojiCustom.js");
require("./node_modules/meteor/rocketchat:emoji-custom/client/models/EmojiCustom.js");
require("./node_modules/meteor/rocketchat:emoji-custom/client/notifications/updateEmojiCustom.js");
require("./node_modules/meteor/rocketchat:emoji-custom/client/notifications/deleteEmojiCustom.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:emoji-custom'] = {};

})();
