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
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Random = Package.random.Random;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var WebApp = Package.webapp.WebApp;
var Template = Package['templating-runtime'].Template;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:message-snippet":{"client":{"lib":{"collections.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/lib/collections.js                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
this.SnippetedMessages = new Mongo.Collection('rocketchat_snippeted_message');                                        // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"actionButton.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/actionButton.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	RocketChat.MessageAction.addButton({                                                                                 // 2
		id: 'snippeted-message',                                                                                            // 3
		icon: 'icon-code',                                                                                                  // 4
		i18nLabel: 'Snippet',                                                                                               // 5
		context: ['snippeted', 'message', 'message-mobile'],                                                                // 6
		action: function () {                                                                                               // 11
			var message = this._arguments[1];                                                                                  // 12
			swal({                                                                                                             // 14
				title: 'Create a Snippet',                                                                                        // 15
				text: 'The name of your snippet (with file extension):',                                                          // 16
				type: 'input',                                                                                                    // 17
				showCancelButton: true,                                                                                           // 18
				closeOnConfirm: false,                                                                                            // 19
				animation: 'slide-from-top',                                                                                      // 20
				inputPlaceholder: 'Snippet name'                                                                                  // 21
			}, function (filename) {                                                                                           // 14
				if (filename === false) {                                                                                         // 23
					return false;                                                                                                    // 24
				}                                                                                                                 // 25
                                                                                                                      //
				if (filename === '') {                                                                                            // 26
					swal.showInputError('You need to write something!');                                                             // 27
					return false;                                                                                                    // 28
				}                                                                                                                 // 29
                                                                                                                      //
				message.snippeted = true;                                                                                         // 30
				Meteor.call('snippetMessage', message, filename, function (error) {                                               // 31
					if (error) {                                                                                                     // 32
						return handleError(error);                                                                                      // 33
					}                                                                                                                // 34
                                                                                                                      //
					swal('Nice!', "Snippet '" + filename + "' created.", 'success');                                                 // 35
				});                                                                                                               // 36
			});                                                                                                                // 37
		},                                                                                                                  // 39
		validation: function (message) {                                                                                    // 40
			if (RocketChat.models.Subscriptions.findOne({                                                                      // 41
				rid: message.rid,                                                                                                 // 41
				'u._id': Meteor.userId()                                                                                          // 41
			}) === undefined) {                                                                                                // 41
				return false;                                                                                                     // 42
			}                                                                                                                  // 43
                                                                                                                      //
			if (message.snippeted || RocketChat.settings.get('Message_AllowSnippeting') === undefined || RocketChat.settings.get('Message_AllowSnippeting') === null || RocketChat.settings.get('Message_AllowSnippeting') === false) {
				return false;                                                                                                     // 48
			}                                                                                                                  // 49
                                                                                                                      //
			return RocketChat.authz.hasAtLeastOnePermission('snippet-message', message.rid);                                   // 51
		}                                                                                                                   // 52
	});                                                                                                                  // 2
});                                                                                                                   // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messageType.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/messageType.js                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	RocketChat.MessageTypes.registerType({                                                                               // 2
		id: 'message_snippeted',                                                                                            // 3
		system: true,                                                                                                       // 4
		message: 'Snippeted_a_message',                                                                                     // 5
		data: function (message) {                                                                                          // 6
			var snippetLink = "<a href=\"/snippet/" + message.snippetId + "/" + message.snippetName + "\">" + message.snippetName + "</a>";
			return {                                                                                                           // 8
				snippetLink: snippetLink                                                                                          // 8
			};                                                                                                                 // 8
		}                                                                                                                   // 9
	});                                                                                                                  // 2
});                                                                                                                   // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"snippetMessage.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/snippetMessage.js                                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.methods({                                                                                                      // 1
	snippetMessage: function (message) {                                                                                 // 2
		if (typeof Meteor.userId() === 'undefined' || Meteor.userId() === null) {                                           // 3
			return false;                                                                                                      // 4
		}                                                                                                                   // 5
                                                                                                                      //
		if (typeof RocketChat.settings.get('Message_AllowSnippeting') === 'undefined' || RocketChat.settings.get('Message_AllowSnippeting') === null || RocketChat.settings.get('Message_AllowSnippeting') === false) {
			return false;                                                                                                      // 9
		}                                                                                                                   // 10
                                                                                                                      //
		var subscription = RocketChat.models.Subscriptions.findOne({                                                        // 12
			rid: message.rid,                                                                                                  // 12
			'u._id': Meteor.userId()                                                                                           // 12
		});                                                                                                                 // 12
                                                                                                                      //
		if (subscription === undefined) {                                                                                   // 14
			return false;                                                                                                      // 15
		}                                                                                                                   // 16
                                                                                                                      //
		ChatMessage.update({                                                                                                // 17
			_id: message._id                                                                                                   // 18
		}, {                                                                                                                // 17
			$set: {                                                                                                            // 20
				snippeted: true                                                                                                   // 21
			}                                                                                                                  // 20
		});                                                                                                                 // 19
	}                                                                                                                    // 24
});                                                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"router.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/router.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global FlowRouter, BlazeLayout */FlowRouter.route('/snippet/:snippetId/:snippetName', {                            // 1
	name: 'snippetView',                                                                                                 // 3
	action: function () {                                                                                                // 4
		BlazeLayout.render('main', {                                                                                        // 5
			center: 'snippetPage',                                                                                             // 5
			flexTabBar: null                                                                                                   // 5
		});                                                                                                                 // 5
	},                                                                                                                   // 6
	triggersEnter: [function () {                                                                                        // 7
		RocketChat.TabBar.hide();                                                                                           // 8
	}],                                                                                                                  // 9
	triggersExit: [function () {                                                                                         // 10
		RocketChat.TabBar.show();                                                                                           // 12
	}]                                                                                                                   // 13
});                                                                                                                   // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"page":{"template.snippetPage.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/page/template.snippetPage.js                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("snippetPage");                                                                                  // 2
Template["snippetPage"] = new Template("Template.snippetPage", (function() {                                          // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    id: function() {                                                                                                  // 6
      return Spacebars.mustache(view.lookup("_id"));                                                                  // 7
    },                                                                                                                // 8
    class: function() {                                                                                               // 9
      return [ "snippet-page ", Spacebars.mustache(view.lookup("t")), " ", Spacebars.mustache(view.lookup("own")), " ", Spacebars.mustache(view.lookup("isTemp")) ];
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
    }                                                                                                                 // 23
  }, "\n\t\t", HTML.DIV({                                                                                             // 24
    class: "snippet-informations"                                                                                     // 25
  }, "\n\t\t\t", Blaze._TemplateWith(function() {                                                                     // 26
    return {                                                                                                          // 27
      username: Spacebars.call(Spacebars.dot(view.lookup("snippet"), "u", "username"))                                // 28
    };                                                                                                                // 29
  }, function() {                                                                                                     // 30
    return Spacebars.include(view.lookupTemplate("avatar"));                                                          // 31
  }), "\n\t\t\t", HTML.SPAN({                                                                                         // 32
    class: "username"                                                                                                 // 33
  }, Blaze.View("lookup:snippet.u.username", function() {                                                             // 34
    return Spacebars.mustache(Spacebars.dot(view.lookup("snippet"), "u", "username"));                                // 35
  })), "\n\t\t\t", HTML.SPAN({                                                                                        // 36
    class: "snippet-filename"                                                                                         // 37
  }, Blaze.View("lookup:snippet.snippetName", function() {                                                            // 38
    return Spacebars.mustache(Spacebars.dot(view.lookup("snippet"), "snippetName"));                                  // 39
  })), "\n\t\t"), "\n\n\n\n\t\t", HTML.SPAN({                                                                         // 40
    class: "info"                                                                                                     // 41
  }, " ", Blaze.View("lookup:_", function() {                                                                         // 42
    return Spacebars.mustache(view.lookup("_"), "Snippet_Added", view.lookup("date"));                                // 43
  })), "\n\t\t", HTML.A({                                                                                             // 44
    class: "download-button",                                                                                         // 45
    target: "_blank",                                                                                                 // 46
    href: function() {                                                                                                // 47
      return [ "/snippet/download/", Spacebars.mustache(Spacebars.dot(view.lookup("snippet"), "_id")), "/", Spacebars.mustache(Spacebars.dot(view.lookup("snippet"), "snippetName")) ];
    }                                                                                                                 // 49
  }, "\n\t\t\t", HTML.Raw('<i class="icon-download"></i>'), "\n\t\t\t", Blaze.View("lookup:_", function() {           // 50
    return Spacebars.mustache(view.lookup("_"), "Download_Snippet");                                                  // 51
  }), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                                 // 52
    class: "body",                                                                                                    // 53
    dir: "auto"                                                                                                       // 54
  }, "\n\t\t\t", Blaze.View("lookup:snippetContent", function() {                                                     // 55
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("snippetContent")));                                      // 56
  }), "\n\t\t"), "\n\t");                                                                                             // 57
}));                                                                                                                  // 58
                                                                                                                      // 59
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"snippetPage.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/page/snippetPage.js                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Template.snippetPage.helpers({                                                                                        // 4
	snippet: function () {                                                                                               // 5
		return SnippetedMessages.findOne({                                                                                  // 6
			_id: FlowRouter.getParam('snippetId')                                                                              // 6
		});                                                                                                                 // 6
	},                                                                                                                   // 7
	snippetContent: function () {                                                                                        // 8
		var message = SnippetedMessages.findOne({                                                                           // 9
			_id: FlowRouter.getParam('snippetId')                                                                              // 9
		});                                                                                                                 // 9
                                                                                                                      //
		if (message === undefined) {                                                                                        // 10
			return null;                                                                                                       // 11
		}                                                                                                                   // 12
                                                                                                                      //
		message.html = message.msg;                                                                                         // 13
		var markdownCode = new RocketChat.MarkdownCode(message);                                                            // 14
		return markdownCode.tokens[0].text;                                                                                 // 15
	},                                                                                                                   // 16
	date: function () {                                                                                                  // 17
		var snippet = SnippetedMessages.findOne({                                                                           // 18
			_id: FlowRouter.getParam('snippetId')                                                                              // 18
		});                                                                                                                 // 18
                                                                                                                      //
		if (snippet !== undefined) {                                                                                        // 19
			return moment(snippet.ts).format(RocketChat.settings.get('Message_DateFormat'));                                   // 20
		}                                                                                                                   // 21
	},                                                                                                                   // 22
	time: function () {                                                                                                  // 23
		var snippet = SnippetedMessages.findOne({                                                                           // 24
			_id: FlowRouter.getParam('snippetId')                                                                              // 24
		});                                                                                                                 // 24
                                                                                                                      //
		if (snippet !== undefined) {                                                                                        // 25
			return moment(snippet.ts).format(RocketChat.settings.get('Message_TimeFormat'));                                   // 26
		}                                                                                                                   // 27
	}                                                                                                                    // 28
});                                                                                                                   // 4
Template.snippetPage.onCreated(function () {                                                                          // 31
	var snippetId = FlowRouter.getParam('snippetId');                                                                    // 32
	this.autorun(function () {                                                                                           // 33
		Meteor.subscribe('snippetedMessage', snippetId);                                                                    // 34
	});                                                                                                                  // 35
});                                                                                                                   // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tabBar":{"tabBar.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/tabBar/tabBar.js                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 1
	Tracker.autorun(function () {                                                                                        // 2
		if (RocketChat.settings.get('Message_AllowSnippeting')) {                                                           // 3
			RocketChat.TabBar.addButton({                                                                                      // 4
				groups: ['channel', 'group', 'direct'],                                                                           // 5
				id: 'snippeted-messages',                                                                                         // 6
				i18nTitle: 'Snippeted_Messages',                                                                                  // 7
				icon: 'icon-code',                                                                                                // 8
				template: 'snippetedMessages',                                                                                    // 9
				order: 20                                                                                                         // 10
			});                                                                                                                // 4
		} else {                                                                                                            // 12
			RocketChat.TabBar.removeButton('snippeted-messages');                                                              // 13
		}                                                                                                                   // 14
	});                                                                                                                  // 15
});                                                                                                                   // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.snippetedMessages.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/tabBar/views/template.snippetedMessages.js                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("snippetedMessages");                                                                            // 2
Template["snippetedMessages"] = new Template("Template.snippetedMessages", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    class: "content"                                                                                                  // 6
  }, "\n\t\t", HTML.DIV({                                                                                             // 7
    class: "list-view pinned-messages-list"                                                                           // 8
  }, "\n\t\t\t", HTML.DIV({                                                                                           // 9
    class: "title"                                                                                                    // 10
  }, "\n\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                                        // 11
    return Spacebars.mustache(view.lookup("_"), "Snippet_Messages");                                                  // 12
  })), "\n\t\t\t"), "\n\t\t\t", Blaze.If(function() {                                                                 // 13
    return Spacebars.call(view.templateInstance().subscriptionsReady());                                              // 14
  }, function() {                                                                                                     // 15
    return [ "\n\t\t\t\t", Blaze.Unless(function() {                                                                  // 16
      return Spacebars.call(view.lookup("hasMessages"));                                                              // 17
    }, function() {                                                                                                   // 18
      return [ "\n\t\t\t\t\t", HTML.H2(Blaze.View("lookup:_", function() {                                            // 19
        return Spacebars.mustache(view.lookup("_"), "No_snippet_messages");                                           // 20
      })), "\n\t\t\t\t" ];                                                                                            // 21
    }), "\n\t\t\t" ];                                                                                                 // 22
  }), "\n\t\t"), "\n\t\t", HTML.UL({                                                                                  // 23
    class: "list clearfix"                                                                                            // 24
  }, "\n\t\t\t", Blaze.Each(function() {                                                                              // 25
    return Spacebars.call(view.lookup("messages"));                                                                   // 26
  }, function() {                                                                                                     // 27
    return [ "\n\t\t\t\t", Blaze._TemplateWith(function() {                                                           // 28
      return Spacebars.dataMustache(view.lookup("nrrargs"), "snippetMessage", view.lookup("message"));                // 29
    }, function() {                                                                                                   // 30
      return Spacebars.include(view.lookupTemplate("nrr"), function() {                                               // 31
        return null;                                                                                                  // 32
      });                                                                                                             // 33
    }), "\n\t\t\t" ];                                                                                                 // 34
  }), "\n\t\t"), "\n\t\t", Blaze.If(function() {                                                                      // 35
    return Spacebars.call(view.lookup("hasMore"));                                                                    // 36
  }, function() {                                                                                                     // 37
    return [ "\n\t\t\t", HTML.DIV({                                                                                   // 38
      class: "load-more"                                                                                              // 39
    }, "\n\t\t\t\t", Spacebars.include(view.lookupTemplate("loading")), "\n\t\t\t"), "\n\t\t" ];                      // 40
  }), "\n\t");                                                                                                        // 41
}));                                                                                                                  // 42
                                                                                                                      // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.snippetMessage.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/tabBar/views/template.snippetMessage.js                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("snippetMessage");                                                                               // 2
Template["snippetMessage"] = new Template("Template.snippetMessage", (function() {                                    // 3
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
    }                                                                                                                 // 23
  }, "\n\t\t", Blaze.If(function() {                                                                                  // 24
    return Spacebars.call(view.lookup("avatar"));                                                                     // 25
  }, function() {                                                                                                     // 26
    return [ "\n\t\t\t", Blaze.If(function() {                                                                        // 27
      return Spacebars.call(view.lookup("avatarFromUsername"));                                                       // 28
    }, function() {                                                                                                   // 29
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 30
        class: "thumb user-card-message",                                                                             // 31
        "data-username": function() {                                                                                 // 32
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 33
        },                                                                                                            // 34
        tabindex: "1"                                                                                                 // 35
      }, Blaze._TemplateWith(function() {                                                                             // 36
        return {                                                                                                      // 37
          username: Spacebars.call(view.lookup("avatarFromUsername"))                                                 // 38
        };                                                                                                            // 39
      }, function() {                                                                                                 // 40
        return Spacebars.include(view.lookupTemplate("avatar"));                                                      // 41
      })), "\n\t\t\t" ];                                                                                              // 42
    }, function() {                                                                                                   // 43
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 44
        class: "thumb user-card-message",                                                                             // 45
        "data-username": function() {                                                                                 // 46
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 47
        },                                                                                                            // 48
        tabindex: "1"                                                                                                 // 49
      }, "\n\t\t\t\t\t", HTML.DIV({                                                                                   // 50
        class: "avatar"                                                                                               // 51
      }, "\n\t\t\t\t\t\t", HTML.DIV({                                                                                 // 52
        class: "avatar-image",                                                                                        // 53
        style: function() {                                                                                           // 54
          return [ "background-image:url(", Spacebars.mustache(view.lookup("avatar")), ");" ];                        // 55
        }                                                                                                             // 56
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                               // 57
    }), "\n\t\t" ];                                                                                                   // 58
  }, function() {                                                                                                     // 59
    return [ "\n\t\t\t", Blaze.If(function() {                                                                        // 60
      return Spacebars.call(view.lookup("emoji"));                                                                    // 61
    }, function() {                                                                                                   // 62
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 63
        class: "thumb user-card-message",                                                                             // 64
        "data-username": function() {                                                                                 // 65
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 66
        },                                                                                                            // 67
        tabindex: "1"                                                                                                 // 68
      }, "\n\t\t\t\t\t", HTML.DIV({                                                                                   // 69
        class: "avatar"                                                                                               // 70
      }, "\n\t\t\t\t\t\t", Blaze.View("lookup:getEmoji", function() {                                                 // 71
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("getEmoji"), view.lookup("emoji")));                  // 72
      }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                               // 73
    }, function() {                                                                                                   // 74
      return [ "\n\t\t\t\t", HTML.BUTTON({                                                                            // 75
        class: "thumb user-card-message",                                                                             // 76
        "data-username": function() {                                                                                 // 77
          return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                     // 78
        },                                                                                                            // 79
        tabindex: "1"                                                                                                 // 80
      }, Blaze._TemplateWith(function() {                                                                             // 81
        return {                                                                                                      // 82
          username: Spacebars.call(Spacebars.dot(view.lookup("u"), "username"))                                       // 83
        };                                                                                                            // 84
      }, function() {                                                                                                 // 85
        return Spacebars.include(view.lookupTemplate("avatar"));                                                      // 86
      })), "\n\t\t\t" ];                                                                                              // 87
    }), "\n\t\t" ];                                                                                                   // 88
  }), "\n\t\t", Blaze.If(function() {                                                                                 // 89
    return Spacebars.call(view.lookup("alias"));                                                                      // 90
  }, function() {                                                                                                     // 91
    return [ "\n\t\t\t", HTML.BUTTON({                                                                                // 92
      type: "button",                                                                                                 // 93
      class: "user user-card-message",                                                                                // 94
      "data-username": function() {                                                                                   // 95
        return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                       // 96
      },                                                                                                              // 97
      tabindex: "1"                                                                                                   // 98
    }, Blaze.View("lookup:alias", function() {                                                                        // 99
      return Spacebars.mustache(view.lookup("alias"));                                                                // 100
    }), " ", HTML.SPAN({                                                                                              // 101
      class: "message-alias"                                                                                          // 102
    }, "@", Blaze.View("lookup:u.username", function() {                                                              // 103
      return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                         // 104
    }))), "\n\t\t" ];                                                                                                 // 105
  }, function() {                                                                                                     // 106
    return [ "\n\t\t\t", HTML.BUTTON({                                                                                // 107
      type: "button",                                                                                                 // 108
      class: "user user-card-message",                                                                                // 109
      "data-username": function() {                                                                                   // 110
        return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                       // 111
      },                                                                                                              // 112
      tabindex: "1"                                                                                                   // 113
    }, Blaze.View("lookup:u.username", function() {                                                                   // 114
      return Spacebars.mustache(Spacebars.dot(view.lookup("u"), "username"));                                         // 115
    })), "\n\t\t" ];                                                                                                  // 116
  }), "\n\t\t", HTML.SPAN({                                                                                           // 117
    class: "info"                                                                                                     // 118
  }, "\n\t\t", Blaze.Each(function() {                                                                                // 119
    return Spacebars.call(view.lookup("roleTags"));                                                                   // 120
  }, function() {                                                                                                     // 121
    return [ "\n\t\t\t", HTML.SPAN({                                                                                  // 122
      class: "role-tag",                                                                                              // 123
      "data-role": function() {                                                                                       // 124
        return Spacebars.mustache(view.lookup("description"));                                                        // 125
      }                                                                                                               // 126
    }, Blaze.View("lookup:description", function() {                                                                  // 127
      return Spacebars.mustache(view.lookup("description"));                                                          // 128
    })), "\n\t\t" ];                                                                                                  // 129
  }), "\n\t\t", Blaze.If(function() {                                                                                 // 130
    return Spacebars.call(view.lookup("isBot"));                                                                      // 131
  }, function() {                                                                                                     // 132
    return [ "\n\t\t\t", HTML.SPAN({                                                                                  // 133
      class: "is-bot"                                                                                                 // 134
    }, "BOT"), "\n\t\t" ];                                                                                            // 135
  }), "\n\t\t", HTML.SPAN({                                                                                           // 136
    class: "time",                                                                                                    // 137
    title: function() {                                                                                               // 138
      return [ Spacebars.mustache(view.lookup("date")), " ", Spacebars.mustache(view.lookup("time")) ];               // 139
    }                                                                                                                 // 140
  }, Blaze.View("lookup:time", function() {                                                                           // 141
    return Spacebars.mustache(view.lookup("time"));                                                                   // 142
  })), "\n\t\t", Blaze.If(function() {                                                                                // 143
    return Spacebars.call(view.lookup("edited"));                                                                     // 144
  }, function() {                                                                                                     // 145
    return [ "\n\t\t\t", HTML.SPAN({                                                                                  // 146
      class: "edited",                                                                                                // 147
      title: function() {                                                                                             // 148
        return [ Spacebars.mustache(view.lookup("_"), "edited"), " ", Spacebars.mustache(view.lookup("_"), "at"), " ", Spacebars.mustache(view.lookup("editTime")), " ", Spacebars.mustache(view.lookup("_"), "by"), " ", Spacebars.mustache(view.lookup("editedBy")) ];
      }                                                                                                               // 150
    }, "\n\t\t\t\t", HTML.I({                                                                                         // 151
      class: "icon-edit",                                                                                             // 152
      "aria-label": function() {                                                                                      // 153
        return Spacebars.mustache(view.lookup("_"), "Edited");                                                        // 154
      }                                                                                                               // 155
    }), "\n\t\t\t\t", HTML.BUTTON({                                                                                   // 156
      class: "thumb thumb-small user-card-message",                                                                   // 157
      "data-username": function() {                                                                                   // 158
        return Spacebars.mustache(view.lookup("editedBy"));                                                           // 159
      },                                                                                                              // 160
      tabindex: "1"                                                                                                   // 161
    }, Blaze._TemplateWith(function() {                                                                               // 162
      return {                                                                                                        // 163
        username: Spacebars.call(view.lookup("editedBy"))                                                             // 164
      };                                                                                                              // 165
    }, function() {                                                                                                   // 166
      return Spacebars.include(view.lookupTemplate("avatar"));                                                        // 167
    })), "\n\t\t\t"), "\n\t\t" ];                                                                                     // 168
  }), "\n\t\t", Blaze.If(function() {                                                                                 // 169
    return Spacebars.call(view.lookup("private"));                                                                    // 170
  }, function() {                                                                                                     // 171
    return [ "\n\t\t\t", HTML.SPAN({                                                                                  // 172
      class: "private"                                                                                                // 173
    }, Blaze.View("lookup:_", function() {                                                                            // 174
      return Spacebars.mustache(view.lookup("_"), "Only_you_can_see_this_message");                                   // 175
    })), "\n\t\t" ];                                                                                                  // 176
  }), "\n\t\t\t", HTML.DIV({                                                                                          // 177
    class: function() {                                                                                               // 178
      return [ "message-cog-container ", Spacebars.mustache(view.lookup("hideCog")) ];                                // 179
    }                                                                                                                 // 180
  }, "\n\t\t\t\t", HTML.I({                                                                                           // 181
    class: "icon-cog message-cog",                                                                                    // 182
    "aria-label": function() {                                                                                        // 183
      return Spacebars.mustache(view.lookup("_"), "Actions");                                                         // 184
    }                                                                                                                 // 185
  }), "\n\t\t\t"), "\n\t\t"), "\n\t\t", HTML.DIV({                                                                    // 186
    class: "body",                                                                                                    // 187
    dir: "auto"                                                                                                       // 188
  }, "\n            packages/rocketchat-message-snippet/client/tabBar/views ", Blaze.View("lookup:body", function() {
    return Spacebars.makeRaw(Spacebars.mustache(view.lookup("body")));                                                // 190
  }), "\n\t\t\t", Blaze.If(function() {                                                                               // 191
    return Spacebars.call(view.lookup("hasOembed"));                                                                  // 192
  }, function() {                                                                                                     // 193
    return [ "\n\t\t\t\t", Blaze.Each(function() {                                                                    // 194
      return Spacebars.call(view.lookup("urls"));                                                                     // 195
    }, function() {                                                                                                   // 196
      return [ "\n\t\t\t\t\t", Blaze.View("lookup:injectIndex", function() {                                          // 197
        return Spacebars.mustache(view.lookup("injectIndex"), view.lookup("."), view.lookup("@index"));               // 198
      }), " ", Spacebars.include(view.lookupTemplate("oembedBaseWidget")), "\n\t\t\t\t" ];                            // 199
    }), "\n\t\t\t" ];                                                                                                 // 200
  }), "\n\t\t\t", Blaze.Each(function() {                                                                             // 201
    return Spacebars.call(view.lookup("attachments"));                                                                // 202
  }, function() {                                                                                                     // 203
    return [ "\n\t\t\t\t", Blaze.View("lookup:injectIndex", function() {                                              // 204
      return Spacebars.mustache(view.lookup("injectIndex"), view.lookup("."), view.lookup("@index"));                 // 205
    }), " ", Spacebars.include(view.lookupTemplate("messageAttachment")), "\n\t\t\t" ];                               // 206
  }), "\n\t\t"), "\n\t");                                                                                             // 207
}));                                                                                                                  // 208
                                                                                                                      // 209
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"snippetedMessages.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/tabBar/views/snippetedMessages.js                                       //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/* global SnippetedMessages */Template.snippetedMessages.helpers({                                                    // 1
	hasMessages: function () {                                                                                           // 3
		return SnippetedMessages.find({                                                                                     // 4
			snippeted: true,                                                                                                   // 4
			rid: this.rid                                                                                                      // 4
		}, {                                                                                                                // 4
			sort: {                                                                                                            // 4
				ts: -1                                                                                                            // 4
			}                                                                                                                  // 4
		}).count() > 0;                                                                                                     // 4
	},                                                                                                                   // 5
	messages: function () {                                                                                              // 6
		return SnippetedMessages.find({                                                                                     // 7
			snippeted: true,                                                                                                   // 7
			rid: this.rid                                                                                                      // 7
		}, {                                                                                                                // 7
			sort: {                                                                                                            // 7
				ts: -1                                                                                                            // 7
			}                                                                                                                  // 7
		});                                                                                                                 // 7
	},                                                                                                                   // 8
	message: function () {                                                                                               // 9
		return _.extend(this, {                                                                                             // 10
			customClass: 'snippeted'                                                                                           // 10
		});                                                                                                                 // 10
	},                                                                                                                   // 11
	hasMore: function () {                                                                                               // 12
		return Template.instance().hasMore.get();                                                                           // 13
	}                                                                                                                    // 14
});                                                                                                                   // 2
Template.snippetedMessages.onCreated(function () {                                                                    // 17
	this.hasMore = new ReactiveVar(true);                                                                                // 18
	this.limit = new ReactiveVar(50);                                                                                    // 19
	var self = this;                                                                                                     // 20
	this.autorun(function () {                                                                                           // 21
		var data = Template.currentData();                                                                                  // 22
		self.subscribe('snippetedMessages', data.rid, self.limit.get(), function () {                                       // 23
			if (SnippetedMessages.find({                                                                                       // 24
				snippeted: true,                                                                                                  // 24
				rid: data.rid                                                                                                     // 24
			}).count() < self.limit.get()) {                                                                                   // 24
				return self.hasMore.set(false);                                                                                   // 25
			}                                                                                                                  // 26
		});                                                                                                                 // 27
	});                                                                                                                  // 28
});                                                                                                                   // 29
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"snippetMessage.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_message-snippet/client/tabBar/views/snippetMessage.js                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var moment = void 0;                                                                                                  // 1
module.watch(require("moment"), {                                                                                     // 1
	"default": function (v) {                                                                                            // 1
		moment = v;                                                                                                         // 1
	}                                                                                                                    // 1
}, 0);                                                                                                                // 1
Template.snippetMessage.helpers({                                                                                     // 3
	time: function () {                                                                                                  // 4
		return moment(this.ts).format(RocketChat.settings.get('Message_TimeFormat'));                                       // 5
	},                                                                                                                   // 6
	date: function () {                                                                                                  // 7
		return moment(this.ts).format(RocketChat.settings.get('Message_DateFormat'));                                       // 8
	},                                                                                                                   // 9
	own: function () {                                                                                                   // 10
		if (this.u !== undefined && this.u && this.u._id === Meteor.userId()) {                                             // 11
			return 'own';                                                                                                      // 12
		}                                                                                                                   // 13
	},                                                                                                                   // 14
	body: function () {                                                                                                  // 15
		return "<a href=\"/snippet/" + this._id + "/" + this.snippetName + "\">" + this.snippetName + "</a>";               // 16
	}                                                                                                                    // 17
});                                                                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:message-snippet/client/lib/collections.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/actionButton.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/messageType.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/snippetMessage.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/router.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/page/template.snippetPage.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/page/snippetPage.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/tabBar/tabBar.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/tabBar/views/template.snippetedMessages.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/tabBar/views/template.snippetMessage.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/tabBar/views/snippetedMessages.js");
require("./node_modules/meteor/rocketchat:message-snippet/client/tabBar/views/snippetMessage.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:message-snippet'] = {};

})();
