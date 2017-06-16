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
var Mongo = Package.mongo.Mongo;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
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

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:authorization":{"lib":{"rocketchat.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/lib/rocketchat.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
RocketChat.authz = {};                                                                                             // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"lib":{"ChatPermissions.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/lib/ChatPermissions.js                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
RocketChat.authz.cachedCollection = new RocketChat.CachedCollection({                                              // 1
	name: 'permissions',                                                                                              // 2
	eventType: 'onLogged',                                                                                            // 3
	userRelated: false                                                                                                // 4
});                                                                                                                // 1
RocketChat.authz.cachedCollection.init();                                                                          // 6
this.ChatPermissions = RocketChat.authz.cachedCollection.collection;                                               // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"models":{"Roles.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/lib/models/Roles.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
RocketChat.models.Roles = new Mongo.Collection('rocketchat_roles');                                                // 1
Object.assign(RocketChat.models.Roles, {                                                                           // 3
	findUsersInRole: function (name, scope, options) {                                                                // 4
		var role = this.findOne(name);                                                                                   // 5
		var roleScope = role && role.scope || 'Users';                                                                   // 6
		var model = RocketChat.models[roleScope];                                                                        // 7
		return model && model.findUsersInRoles && model.findUsersInRoles(name, scope, options);                          // 8
	},                                                                                                                // 9
	isUserInRoles: function (userId, roles, scope) {                                                                  // 11
		var _this = this;                                                                                                // 11
                                                                                                                   //
		roles = [].concat(roles);                                                                                        // 12
		return roles.some(function (roleName) {                                                                          // 13
			var role = _this.findOne(roleName);                                                                             // 14
                                                                                                                   //
			var roleScope = role && role.scope || 'Users';                                                                  // 15
			var model = RocketChat.models[roleScope];                                                                       // 16
			return model && model.isUserInRole && model.isUserInRole(userId, roleName, scope);                              // 17
		});                                                                                                              // 18
	}                                                                                                                 // 19
});                                                                                                                // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Users.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/lib/models/Users.js                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
if (_.isUndefined(RocketChat.models.Users)) {                                                                      // 1
	RocketChat.models.Users = {};                                                                                     // 2
}                                                                                                                  // 3
                                                                                                                   //
Object.assign(RocketChat.models.Users, {                                                                           // 5
	isUserInRole: function (userId, roleName) {                                                                       // 6
		var query = {                                                                                                    // 7
			_id: userId,                                                                                                    // 8
			roles: roleName                                                                                                 // 9
		};                                                                                                               // 7
		return !_.isUndefined(this.findOne(query));                                                                      // 12
	},                                                                                                                // 13
	findUsersInRoles: function (roles, scope, options) {                                                              // 15
		roles = [].concat(roles);                                                                                        // 16
		var query = {                                                                                                    // 18
			roles: {                                                                                                        // 19
				$in: roles                                                                                                     // 19
			}                                                                                                               // 19
		};                                                                                                               // 18
		return this.find(query, options);                                                                                // 22
	}                                                                                                                 // 23
});                                                                                                                // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Subscriptions.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/lib/models/Subscriptions.js                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
if (_.isUndefined(RocketChat.models.Subscriptions)) {                                                              // 1
	RocketChat.models.Subscriptions = {};                                                                             // 2
}                                                                                                                  // 3
                                                                                                                   //
Object.assign(RocketChat.models.Subscriptions, {                                                                   // 5
	isUserInRole: function (userId, roleName, roomId) {                                                               // 6
		if (roomId == null) {                                                                                            // 7
			return false;                                                                                                   // 8
		}                                                                                                                // 9
                                                                                                                   //
		var query = {                                                                                                    // 11
			rid: roomId,                                                                                                    // 12
			roles: roleName                                                                                                 // 13
		};                                                                                                               // 11
		return !_.isUndefined(this.findOne(query));                                                                      // 16
	},                                                                                                                // 17
	findUsersInRoles: function (roles, scope, options) {                                                              // 19
		roles = [].concat(roles);                                                                                        // 20
		var query = {                                                                                                    // 22
			roles: {                                                                                                        // 23
				$in: roles                                                                                                     // 23
			}                                                                                                               // 23
		};                                                                                                               // 22
                                                                                                                   //
		if (scope) {                                                                                                     // 26
			query.rid = scope;                                                                                              // 27
		}                                                                                                                // 28
                                                                                                                   //
		var subscriptions = this.find(query).fetch();                                                                    // 30
                                                                                                                   //
		var users = _.compact(_.map(subscriptions, function (subscription) {                                             // 32
			if ('undefined' !== typeof subscription.u && 'undefined' !== typeof subscription.u._id) {                       // 33
				return subscription.u._id;                                                                                     // 34
			}                                                                                                               // 35
		}));                                                                                                             // 36
                                                                                                                   //
		return RocketChat.models.Users.find({                                                                            // 38
			_id: {                                                                                                          // 38
				$in: users                                                                                                     // 38
			}                                                                                                               // 38
		}, options);                                                                                                     // 38
	}                                                                                                                 // 39
});                                                                                                                // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/startup.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Meteor.subscribe('roles');                                                                                         // 1
RocketChat.AdminBox.addOption({                                                                                    // 3
	href: 'admin-permissions',                                                                                        // 4
	i18nLabel: 'Permissions',                                                                                         // 5
	permissionGranted: function () {                                                                                  // 6
		return RocketChat.authz.hasAllPermission('access-permissions');                                                  // 7
	}                                                                                                                 // 8
});                                                                                                                // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hasPermission.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/hasPermission.js                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/* globals ChatPermissions */function atLeastOne() {                                                               // 1
	var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];                         // 3
	var scope = arguments[1];                                                                                         // 3
	return permissions.some(function (permissionId) {                                                                 // 4
		var permission = ChatPermissions.findOne(permissionId);                                                          // 5
		var roles = permission && permission.roles || [];                                                                // 6
		return roles.some(function (roleName) {                                                                          // 8
			var role = RocketChat.models.Roles.findOne(roleName);                                                           // 9
			var roleScope = role && role.scope;                                                                             // 10
			var model = RocketChat.models[roleScope];                                                                       // 11
			return model && model.isUserInRole && model.isUserInRole(Meteor.userId(), roleName, scope);                     // 13
		});                                                                                                              // 14
	});                                                                                                               // 15
}                                                                                                                  // 16
                                                                                                                   //
function all() {                                                                                                   // 18
	var permissions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];                         // 18
	var scope = arguments[1];                                                                                         // 18
	return permissions.every(function (permissionId) {                                                                // 19
		var permission = ChatPermissions.findOne(permissionId);                                                          // 20
		var roles = permission && permission.roles || [];                                                                // 21
		return roles.some(function (roleName) {                                                                          // 23
			var role = RocketChat.models.Roles.findOne(roleName);                                                           // 24
			var roleScope = role && role.scope;                                                                             // 25
			var model = RocketChat.models[roleScope];                                                                       // 26
			return model && model.isUserInRole && model.isUserInRole(Meteor.userId(), roleName, scope);                     // 28
		});                                                                                                              // 29
	});                                                                                                               // 30
}                                                                                                                  // 31
                                                                                                                   //
function hasPermission(permissions, scope, strategy) {                                                             // 33
	var userId = Meteor.userId();                                                                                     // 34
                                                                                                                   //
	if (!userId) {                                                                                                    // 35
		return false;                                                                                                    // 36
	}                                                                                                                 // 37
                                                                                                                   //
	if (!RocketChat.authz.cachedCollection.ready.get()) {                                                             // 39
		return false;                                                                                                    // 40
	}                                                                                                                 // 41
                                                                                                                   //
	permissions = [].concat(permissions);                                                                             // 43
	return strategy(permissions, scope);                                                                              // 44
}                                                                                                                  // 45
                                                                                                                   //
Template.registerHelper('hasPermission', function (permission, scope) {                                            // 47
	return hasPermission(permission, scope, atLeastOne);                                                              // 48
});                                                                                                                // 49
                                                                                                                   //
RocketChat.authz.hasAllPermission = function (permissions, scope) {                                                // 51
	return hasPermission(permissions, scope, all);                                                                    // 52
};                                                                                                                 // 53
                                                                                                                   //
RocketChat.authz.hasAtLeastOnePermission = function (permissions, scope) {                                         // 55
	return hasPermission(permissions, scope, atLeastOne);                                                             // 56
};                                                                                                                 // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"hasRole.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/hasRole.js                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
RocketChat.authz.hasRole = function (userId, roleNames, scope) {                                                   // 1
	roleNames = [].concat(roleNames);                                                                                 // 2
	return RocketChat.models.Roles.isUserInRoles(userId, roleNames, scope);                                           // 3
};                                                                                                                 // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.requiresPermission.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/template.requiresPermission.js                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("requiresPermission");                                                                        // 2
Template["requiresPermission"] = new Template("Template.requiresPermission", (function() {                         // 3
  var view = this;                                                                                                 // 4
  return Blaze.If(function() {                                                                                     // 5
    return Spacebars.dataMustache(view.lookup("hasPermission"), view.lookup("."));                                 // 6
  }, function() {                                                                                                  // 7
    return [ "\n\t\t", Blaze._InOuterTemplateScope(view, function() {                                              // 8
      return Spacebars.include(function() {                                                                        // 9
        return Spacebars.call(view.templateContentBlock);                                                          // 10
      });                                                                                                          // 11
    }), "\n\t" ];                                                                                                  // 12
  }, function() {                                                                                                  // 13
    return [ "\n\t\t", Blaze.If(function() {                                                                       // 14
      return Spacebars.call(view.templateElseBlock);                                                               // 15
    }, function() {                                                                                                // 16
      return [ "\n\t\t\t", Blaze._InOuterTemplateScope(view, function() {                                          // 17
        return Spacebars.include(function() {                                                                      // 18
          return Spacebars.call(view.templateElseBlock);                                                           // 19
        });                                                                                                        // 20
      }), "\n\t\t" ];                                                                                              // 21
    }, function() {                                                                                                // 22
      return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                     // 23
        return Spacebars.mustache(view.lookup("_"), "Not_found_or_not_allowed");                                   // 24
      }), "\n\t\t" ];                                                                                              // 25
    }), "\n\t" ];                                                                                                  // 26
  });                                                                                                              // 27
}));                                                                                                               // 28
                                                                                                                   // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"route.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/route.js                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
FlowRouter.route('/admin/permissions', {                                                                           // 1
	name: 'admin-permissions',                                                                                        // 2
	action: function () /*params*/{                                                                                   // 3
		return BlazeLayout.render('main', {                                                                              // 4
			center: 'pageContainer',                                                                                        // 5
			pageTitle: t('Permissions'),                                                                                    // 6
			pageTemplate: 'permissions'                                                                                     // 7
		});                                                                                                              // 4
	}                                                                                                                 // 9
});                                                                                                                // 1
FlowRouter.route('/admin/permissions/:name?/edit', {                                                               // 12
	name: 'admin-permissions-edit',                                                                                   // 13
	action: function () /*params*/{                                                                                   // 14
		return BlazeLayout.render('main', {                                                                              // 15
			center: 'pageContainer',                                                                                        // 16
			pageTitle: t('Role_Editing'),                                                                                   // 17
			pageTemplate: 'permissionsRole'                                                                                 // 18
		});                                                                                                              // 15
	}                                                                                                                 // 20
});                                                                                                                // 12
FlowRouter.route('/admin/permissions/new', {                                                                       // 23
	name: 'admin-permissions-new',                                                                                    // 24
	action: function () /*params*/{                                                                                   // 25
		return BlazeLayout.render('main', {                                                                              // 26
			center: 'pageContainer',                                                                                        // 27
			pageTitle: t('Role_Editing'),                                                                                   // 28
			pageTemplate: 'permissionsRole'                                                                                 // 29
		});                                                                                                              // 26
	}                                                                                                                 // 31
});                                                                                                                // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"views":{"template.permissions.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/views/template.permissions.js                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("permissions");                                                                               // 2
Template["permissions"] = new Template("Template.permissions", (function() {                                       // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "permissions-manager"                                                                                   // 6
  }, "\n\t\t", Blaze.If(function() {                                                                               // 7
    return Spacebars.call(view.lookup("hasPermission"));                                                           // 8
  }, function() {                                                                                                  // 9
    return [ "\n\t\t\t", HTML.A({                                                                                  // 10
      href: function() {                                                                                           // 11
        return Spacebars.mustache(view.lookup("pathFor"), "admin-permissions-new");                                // 12
      },                                                                                                           // 13
      class: "button primary new-role"                                                                             // 14
    }, Blaze.View("lookup:_", function() {                                                                         // 15
      return Spacebars.mustache(view.lookup("_"), "New_role");                                                     // 16
    })), "\n\t\t\t", HTML.TABLE({                                                                                  // 17
      border: "1",                                                                                                 // 18
      class: "permission-grid secondary-background-color"                                                          // 19
    }, "\n\t\t\t\t", HTML.THEAD({                                                                                  // 20
      class: "content-background-color"                                                                            // 21
    }, "\n\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t", HTML.TH({                                                         // 22
      class: "border-component-color"                                                                              // 23
    }, HTML.CharRef({                                                                                              // 24
      html: "&nbsp;",                                                                                              // 25
      str: " "                                                                                                     // 26
    })), "\n\t\t\t\t\t\t", Blaze.Each(function() {                                                                 // 27
      return Spacebars.call(view.lookup("role"));                                                                  // 28
    }, function() {                                                                                                // 29
      return [ "\n\t\t\t\t\t\t\t", HTML.TH({                                                                       // 30
        class: "border-component-color",                                                                           // 31
        title: function() {                                                                                        // 32
          return Spacebars.mustache(view.lookup("description"));                                                   // 33
        }                                                                                                          // 34
      }, "\n\t\t\t\t\t\t\t\t", HTML.A({                                                                            // 35
        href: function() {                                                                                         // 36
          return Spacebars.mustache(view.lookup("pathFor"), "admin-permissions-edit", Spacebars.kw({               // 37
            name: view.lookup("_id")                                                                               // 38
          }));                                                                                                     // 39
        }                                                                                                          // 40
      }, "\n\t\t\t\t\t\t\t\t\t", Blaze.View("lookup:_id", function() {                                             // 41
        return Spacebars.mustache(view.lookup("_id"));                                                             // 42
      }), "\n\t\t\t\t\t\t\t\t\t", HTML.I({                                                                         // 43
        class: "icon-edit"                                                                                         // 44
      }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t" ];                                          // 45
    }), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t", Blaze.Each(function() {           // 46
      return Spacebars.call(view.lookup("permission"));                                                            // 47
    }, function() {                                                                                                // 48
      return [ "\n\t\t\t\t\t\t", HTML.TR({                                                                         // 49
        class: "admin-table-row"                                                                                   // 50
      }, "\n\t\t\t\t\t\t\t", HTML.TD({                                                                             // 51
        class: "border-component-color"                                                                            // 52
      }, Blaze.View("lookup:_id", function() {                                                                     // 53
        return Spacebars.mustache(view.lookup("_id"));                                                             // 54
      })), "\n\t\t\t\t\t\t\t", Blaze.Each(function() {                                                             // 55
        return Spacebars.call(view.lookup("role"));                                                                // 56
      }, function() {                                                                                              // 57
        return [ "\n\t\t\t\t\t\t\t\t", HTML.TD({                                                                   // 58
          class: "border-component-color"                                                                          // 59
        }, "\n\t\t\t\t\t\t\t\t\t", HTML.INPUT({                                                                    // 60
          type: "checkbox",                                                                                        // 61
          name: function() {                                                                                       // 62
            return [ "perm[", Spacebars.mustache(view.lookup("_id")), "][", Spacebars.mustache(Spacebars.dot(view.lookup(".."), "_id")), "]" ];
          },                                                                                                       // 64
          class: "role-permission",                                                                                // 65
          value: "1",                                                                                              // 66
          checked: function() {                                                                                    // 67
            return Spacebars.mustache(view.lookup("granted"), Spacebars.dot(view.lookup(".."), "roles"));          // 68
          },                                                                                                       // 69
          "data-role": function() {                                                                                // 70
            return Spacebars.mustache(view.lookup("_id"));                                                         // 71
          },                                                                                                       // 72
          "data-permission": function() {                                                                          // 73
            return Spacebars.mustache(Spacebars.dot(view.lookup(".."), "_id"));                                    // 74
          }                                                                                                        // 75
        }), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t" ];                                                           // 76
      }), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t" ];                                                                     // 77
    }), "\n\t\t\t\t"), "\n\t\t\t"), "\n\t\t" ];                                                                    // 78
  }, function() {                                                                                                  // 79
    return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                       // 80
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                               // 81
    }), "\n\t\t" ];                                                                                                // 82
  }), "\n\t");                                                                                                     // 83
}));                                                                                                               // 84
                                                                                                                   // 85
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"permissions.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/views/permissions.js                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/* globals ChatPermissions */Template.permissions.helpers({                                                        // 1
	role: function () {                                                                                               // 4
		return Template.instance().roles.get();                                                                          // 5
	},                                                                                                                // 6
	permission: function () {                                                                                         // 8
		return ChatPermissions.find({}, {                                                                                // 9
			sort: {                                                                                                         // 10
				_id: 1                                                                                                         // 11
			}                                                                                                               // 10
		});                                                                                                              // 9
	},                                                                                                                // 14
	granted: function (roles) {                                                                                       // 16
		if (roles) {                                                                                                     // 17
			if (roles.indexOf(this._id) !== -1) {                                                                           // 18
				return 'checked';                                                                                              // 19
			}                                                                                                               // 20
		}                                                                                                                // 21
	},                                                                                                                // 22
	hasPermission: function () {                                                                                      // 24
		return RocketChat.authz.hasAllPermission('access-permissions');                                                  // 25
	}                                                                                                                 // 26
});                                                                                                                // 3
Template.permissions.events({                                                                                      // 29
	'click .role-permission': function (e, instance) {                                                                // 30
		var permission = e.currentTarget.getAttribute('data-permission');                                                // 31
		var role = e.currentTarget.getAttribute('data-role');                                                            // 32
                                                                                                                   //
		if (instance.permissionByRole[permission].indexOf(role) === -1) {                                                // 34
			return Meteor.call('authorization:addPermissionToRole', permission, role);                                      // 35
		} else {                                                                                                         // 36
			return Meteor.call('authorization:removeRoleFromPermission', permission, role);                                 // 37
		}                                                                                                                // 38
	}                                                                                                                 // 39
});                                                                                                                // 29
Template.permissions.onCreated(function () {                                                                       // 42
	var _this = this;                                                                                                 // 42
                                                                                                                   //
	this.roles = new ReactiveVar([]);                                                                                 // 43
	this.permissionByRole = {};                                                                                       // 44
	this.actions = {                                                                                                  // 45
		added: {},                                                                                                       // 46
		removed: {}                                                                                                      // 47
	};                                                                                                                // 45
	Tracker.autorun(function () {                                                                                     // 50
		_this.roles.set(RocketChat.models.Roles.find().fetch());                                                         // 51
	});                                                                                                               // 52
	Tracker.autorun(function () {                                                                                     // 54
		ChatPermissions.find().observeChanges({                                                                          // 55
			added: function (id, fields) {                                                                                  // 56
				_this.permissionByRole[id] = fields.roles;                                                                     // 57
			},                                                                                                              // 58
			changed: function (id, fields) {                                                                                // 59
				_this.permissionByRole[id] = fields.roles;                                                                     // 60
			},                                                                                                              // 61
			removed: function (id) {                                                                                        // 62
				delete _this.permissionByRole[id];                                                                             // 63
			}                                                                                                               // 64
		});                                                                                                              // 55
	});                                                                                                               // 66
});                                                                                                                // 67
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.permissionsRole.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/views/template.permissionsRole.js                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__checkName("permissionsRole");                                                                           // 2
Template["permissionsRole"] = new Template("Template.permissionsRole", (function() {                               // 3
  var view = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                // 5
    class: "permissions-manager"                                                                                   // 6
  }, "\n\t\t", Blaze.If(function() {                                                                               // 7
    return Spacebars.call(view.lookup("hasPermission"));                                                           // 8
  }, function() {                                                                                                  // 9
    return [ "\n\t\t\t", HTML.A({                                                                                  // 10
      href: function() {                                                                                           // 11
        return Spacebars.mustache(view.lookup("pathFor"), "admin-permissions");                                    // 12
      }                                                                                                            // 13
    }, Blaze.View("lookup:_", function() {                                                                         // 14
      return Spacebars.mustache(view.lookup("_"), "Back_to_permissions");                                          // 15
    })), "\n\t\t\t", HTML.BR(), "\n\t\t\t", HTML.BR(), "\n\t\t\t", Spacebars.With(function() {                     // 16
      return Spacebars.call(view.lookup("role"));                                                                  // 17
    }, function() {                                                                                                // 18
      return [ "\n\t\t\t\t", HTML.FORM({                                                                           // 19
        id: "form-role",                                                                                           // 20
        class: "inline form-role"                                                                                  // 21
      }, "\n\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                            // 22
        return Spacebars.mustache(view.lookup("_"), "Role");                                                       // 23
      }), " :"), "\n\t\t\t\t\t", Blaze.If(function() {                                                             // 24
        return Spacebars.call(view.lookup("editing"));                                                             // 25
      }, function() {                                                                                              // 26
        return [ "\n\t\t\t\t\t\t", HTML.SPAN(Blaze.View("lookup:_id", function() {                                 // 27
          return Spacebars.mustache(view.lookup("_id"));                                                           // 28
        })), "\n\t\t\t\t\t" ];                                                                                     // 29
      }, function() {                                                                                              // 30
        return [ "\n\t\t\t\t\t\t", HTML.INPUT({                                                                    // 31
          type: "text",                                                                                            // 32
          name: "name",                                                                                            // 33
          value: ""                                                                                                // 34
        }), "\n\t\t\t\t\t" ];                                                                                      // 35
      }), "\n\t\t\t\t\t", HTML.BR(), "\n\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                // 36
        return Spacebars.mustache(view.lookup("_"), "Description");                                                // 37
      }), " :"), "\n\t\t\t\t\t", HTML.INPUT({                                                                      // 38
        type: "text",                                                                                              // 39
        name: "description",                                                                                       // 40
        value: function() {                                                                                        // 41
          return Spacebars.mustache(view.lookup("description"));                                                   // 42
        }                                                                                                          // 43
      }), "\n\t\t\t\t\t", HTML.BR(), "\n\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                // 44
        return Spacebars.mustache(view.lookup("_"), "Scope");                                                      // 45
      }), " :"), "\n\t\t\t\t\t", HTML.SELECT({                                                                     // 46
        name: "scope",                                                                                             // 47
        disabled: function() {                                                                                     // 48
          return Spacebars.mustache(view.lookup("protected"));                                                     // 49
        }                                                                                                          // 50
      }, "\n\t\t\t\t\t\t", HTML.OPTION({                                                                           // 51
        value: "Users",                                                                                            // 52
        selected: function() {                                                                                     // 53
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "Users");                            // 54
        }                                                                                                          // 55
      }, Blaze.View("lookup:_", function() {                                                                       // 56
        return Spacebars.mustache(view.lookup("_"), "Global");                                                     // 57
      })), "\n\t\t\t\t\t\t", HTML.OPTION({                                                                         // 58
        value: "Subscriptions",                                                                                    // 59
        selected: function() {                                                                                     // 60
          return Spacebars.mustache(view.lookup("$eq"), view.lookup("scope"), "Subscriptions");                    // 61
        }                                                                                                          // 62
      }, Blaze.View("lookup:_", function() {                                                                       // 63
        return Spacebars.mustache(view.lookup("_"), "Rooms");                                                      // 64
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                             // 65
        class: "form-buttons"                                                                                      // 66
      }, "\n\t\t\t\t\t\t", Blaze.If(function() {                                                                   // 67
        return Spacebars.call(view.lookup("editable"));                                                            // 68
      }, function() {                                                                                              // 69
        return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                                 // 70
          name: "delete",                                                                                          // 71
          class: "button danger delete-role"                                                                       // 72
        }, Blaze.View("lookup:_", function() {                                                                     // 73
          return Spacebars.mustache(view.lookup("_"), "Delete");                                                   // 74
        })), "\n\t\t\t\t\t\t" ];                                                                                   // 75
      }), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                          // 76
        name: "save",                                                                                              // 77
        class: "button primary save"                                                                               // 78
      }, Blaze.View("lookup:_", function() {                                                                       // 79
        return Spacebars.mustache(view.lookup("_"), "Save");                                                       // 80
      })), "\n\t\t\t\t\t"), "\n\t\t\t\t"), "\n\t\t\t" ];                                                           // 81
    }), "\n\t\t\t", Blaze.If(function() {                                                                          // 82
      return Spacebars.call(view.lookup("editing"));                                                               // 83
    }, function() {                                                                                                // 84
      return [ "\n\t\t\t\t", HTML.H2({                                                                             // 85
        class: "border-tertiary-background-color"                                                                  // 86
      }, Blaze.View("lookup:_", function() {                                                                       // 87
        return Spacebars.mustache(view.lookup("_"), "Users_in_role");                                              // 88
      })), "\n\t\t\t\t", Blaze.If(function() {                                                                     // 89
        return Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("role"), "scope"), "Subscriptions");
      }, function() {                                                                                              // 91
        return [ "\n\t\t\t\t\t", HTML.FORM({                                                                       // 92
          id: "form-search-room",                                                                                  // 93
          class: "inline"                                                                                          // 94
        }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 95
          return Spacebars.mustache(view.lookup("_"), "Choose_a_room");                                            // 96
        })), "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 97
          return {                                                                                                 // 98
            settings: Spacebars.call(view.lookup("autocompleteChannelSettings")),                                  // 99
            name: Spacebars.call("room"),                                                                          // 100
            class: Spacebars.call("search"),                                                                       // 101
            placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Enter_a_room_name")),            // 102
            autocomplete: Spacebars.call("off")                                                                    // 103
          };                                                                                                       // 104
        }, function() {                                                                                            // 105
          return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                      // 106
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                       // 107
      }), "\n\t\t\t\t", Blaze.If(function() {                                                                      // 108
        return Spacebars.dataMustache(view.lookup("$or"), Spacebars.dataMustache(view.lookup("$eq"), Spacebars.dot(view.lookup("role"), "scope"), "Users"), view.lookup("searchRoom"));
      }, function() {                                                                                              // 110
        return [ "\n\t\t\t\t\t", HTML.FORM({                                                                       // 111
          id: "form-users",                                                                                        // 112
          class: "inline"                                                                                          // 113
        }, "\n\t\t\t\t\t\t", HTML.LABEL(Blaze.View("lookup:_", function() {                                        // 114
          return Spacebars.mustache(view.lookup("_"), "Add_user");                                                 // 115
        })), "\n\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                                    // 116
          return {                                                                                                 // 117
            settings: Spacebars.call(view.lookup("autocompleteUsernameSettings")),                                 // 118
            name: Spacebars.call("username"),                                                                      // 119
            class: Spacebars.call("search"),                                                                       // 120
            placeholder: Spacebars.call(Spacebars.dataMustache(view.lookup("_"), "Enter_a_username")),             // 121
            autocomplete: Spacebars.call("off")                                                                    // 122
          };                                                                                                       // 123
        }, function() {                                                                                            // 124
          return Spacebars.include(view.lookupTemplate("inputAutocomplete"));                                      // 125
        }), "\n\t\t\t\t\t\t", HTML.BUTTON({                                                                        // 126
          name: "add",                                                                                             // 127
          class: "button primary add"                                                                              // 128
        }, Blaze.View("lookup:_", function() {                                                                     // 129
          return Spacebars.mustache(view.lookup("_"), "Add");                                                      // 130
        })), "\n\t\t\t\t\t"), "\n\t\t\t\t\t", HTML.DIV({                                                           // 131
          class: "list"                                                                                            // 132
        }, "\n\t\t\t\t\t\t", HTML.TABLE("\n\t\t\t\t\t\t\t", HTML.THEAD("\n\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t", HTML.TH(HTML.CharRef({
          html: "&nbsp;",                                                                                          // 134
          str: " "                                                                                                 // 135
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                     // 136
          width: "34%"                                                                                             // 137
        }, Blaze.View("lookup:_", function() {                                                                     // 138
          return Spacebars.mustache(view.lookup("_"), "Name");                                                     // 139
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                     // 140
          width: "33%"                                                                                             // 141
        }, Blaze.View("lookup:_", function() {                                                                     // 142
          return Spacebars.mustache(view.lookup("_"), "Username");                                                 // 143
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH({                                                                     // 144
          width: "33%"                                                                                             // 145
        }, Blaze.View("lookup:_", function() {                                                                     // 146
          return Spacebars.mustache(view.lookup("_"), "Email");                                                    // 147
        })), "\n\t\t\t\t\t\t\t\t\t", HTML.TH(HTML.CharRef({                                                        // 148
          html: "&nbsp;",                                                                                          // 149
          str: " "                                                                                                 // 150
        })), "\n\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t", HTML.TBODY("\n\t\t\t\t\t\t\t\t", Blaze.Unless(function() {
          return Spacebars.call(view.lookup("hasUsers"));                                                          // 152
        }, function() {                                                                                            // 153
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.TR("\n\t\t\t\t\t\t\t\t\t\t", HTML.TD({                             // 154
            colspan: "5",                                                                                          // 155
            class: "empty-role"                                                                                    // 156
          }, Blaze.View("lookup:_", function() {                                                                   // 157
            return Spacebars.mustache(view.lookup("_"), "There_are_no_users_in_this_role");                        // 158
          })), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                    // 159
        }), "\n\t\t\t\t\t\t\t\t", Blaze.Each(function() {                                                          // 160
          return Spacebars.call(view.lookup("userInRole"));                                                        // 161
        }, function() {                                                                                            // 162
          return [ "\n\t\t\t\t\t\t\t\t\t", HTML.TR({                                                               // 163
            class: "user-info",                                                                                    // 164
            "data-id": function() {                                                                                // 165
              return Spacebars.mustache(view.lookup("_id"));                                                       // 166
            }                                                                                                      // 167
          }, "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD("\n\t\t\t\t\t\t\t\t\t\t\t", HTML.DIV({                              // 168
            class: function() {                                                                                    // 169
              return [ "user-image status-", Spacebars.mustache(view.lookup("status")) ];                          // 170
            }                                                                                                      // 171
          }, "\n\t\t\t\t\t\t\t\t\t\t\t\t", Blaze._TemplateWith(function() {                                        // 172
            return {                                                                                               // 173
              username: Spacebars.call(view.lookup("username"))                                                    // 174
            };                                                                                                     // 175
          }, function() {                                                                                          // 176
            return Spacebars.include(view.lookupTemplate("avatar"));                                               // 177
          }), "\n\t\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:name", function() {
            return Spacebars.mustache(view.lookup("name"));                                                        // 179
          })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:username", function() {                        // 180
            return Spacebars.mustache(view.lookup("username"));                                                    // 181
          })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD(Blaze.View("lookup:emailAddress", function() {                    // 182
            return Spacebars.mustache(view.lookup("emailAddress"));                                                // 183
          })), "\n\t\t\t\t\t\t\t\t\t\t", HTML.TD(HTML.A({                                                          // 184
            href: "#remove",                                                                                       // 185
            class: "remove-user"                                                                                   // 186
          }, HTML.I({                                                                                              // 187
            class: "icon-block"                                                                                    // 188
          }))), "\n\t\t\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t\t\t" ];                                                   // 189
        }), "\n\t\t\t\t\t\t\t"), "\n\t\t\t\t\t\t"), "\n\t\t\t\t\t\t", Blaze.If(function() {                        // 190
          return Spacebars.call(view.lookup("hasMore"));                                                           // 191
        }, function() {                                                                                            // 192
          return [ "\n\t\t\t\t\t\t\t", HTML.BUTTON({                                                               // 193
            class: function() {                                                                                    // 194
              return [ "button secondary load-more ", Spacebars.mustache(view.lookup("isLoading")) ];              // 195
            }                                                                                                      // 196
          }, Blaze.View("lookup:_", function() {                                                                   // 197
            return Spacebars.mustache(view.lookup("_"), "Load_more");                                              // 198
          })), "\n\t\t\t\t\t\t" ];                                                                                 // 199
        }), "\n\t\t\t\t\t"), "\n\t\t\t\t" ];                                                                       // 200
      }), "\n\t\t\t" ];                                                                                            // 201
    }), "\n\t\t" ];                                                                                                // 202
  }, function() {                                                                                                  // 203
    return [ "\n\t\t\t", Blaze.View("lookup:_", function() {                                                       // 204
      return Spacebars.mustache(view.lookup("_"), "Not_authorized");                                               // 205
    }), "\n\t\t" ];                                                                                                // 206
  }), "\n\t");                                                                                                     // 207
}));                                                                                                               // 208
                                                                                                                   // 209
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"permissionsRole.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/rocketchat_authorization/client/views/permissionsRole.js                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var toastr = void 0;                                                                                               // 1
module.watch(require("toastr"), {                                                                                  // 1
	"default": function (v) {                                                                                         // 1
		toastr = v;                                                                                                      // 1
	}                                                                                                                 // 1
}, 0);                                                                                                             // 1
Template.permissionsRole.helpers({                                                                                 // 3
	role: function () {                                                                                               // 4
		return RocketChat.models.Roles.findOne({                                                                         // 5
			_id: FlowRouter.getParam('name')                                                                                // 6
		}) || {};                                                                                                        // 5
	},                                                                                                                // 8
	userInRole: function () {                                                                                         // 10
		return Template.instance().usersInRole.get();                                                                    // 11
	},                                                                                                                // 12
	editing: function () {                                                                                            // 14
		return FlowRouter.getParam('name') != null;                                                                      // 15
	},                                                                                                                // 16
	emailAddress: function () {                                                                                       // 18
		if (this.emails && this.emails.length > 0) {                                                                     // 19
			return this.emails[0].address;                                                                                  // 20
		}                                                                                                                // 21
	},                                                                                                                // 22
	hasPermission: function () {                                                                                      // 24
		return RocketChat.authz.hasAllPermission('access-permissions');                                                  // 25
	},                                                                                                                // 26
	"protected": function () {                                                                                        // 3
		return this.protected;                                                                                           // 29
	},                                                                                                                // 30
	editable: function () {                                                                                           // 32
		return this._id && !this.protected;                                                                              // 33
	},                                                                                                                // 34
	hasUsers: function () {                                                                                           // 36
		return Template.instance().usersInRole.get() && Template.instance().usersInRole.get().count() > 0;               // 37
	},                                                                                                                // 38
	hasMore: function () {                                                                                            // 40
		var instance = Template.instance();                                                                              // 41
		return instance.limit && instance.limit.get() <= instance.usersInRole.get().count();                             // 42
	},                                                                                                                // 43
	isLoading: function () {                                                                                          // 45
		var instance = Template.instance();                                                                              // 46
                                                                                                                   //
		if (!instance.ready || !instance.ready.get()) {                                                                  // 47
			return 'btn-loading';                                                                                           // 48
		}                                                                                                                // 49
	},                                                                                                                // 50
	searchRoom: function () {                                                                                         // 52
		return Template.instance().searchRoom.get();                                                                     // 53
	},                                                                                                                // 54
	autocompleteChannelSettings: function () {                                                                        // 56
		return {                                                                                                         // 57
			limit: 10,                                                                                                      // 58
			rules: [{                                                                                                       // 59
				collection: 'CachedChannelList',                                                                               // 61
				subscription: 'channelAndPrivateAutocomplete',                                                                 // 62
				field: 'name',                                                                                                 // 63
				template: Template.roomSearch,                                                                                 // 64
				noMatchTemplate: Template.roomSearchEmpty,                                                                     // 65
				matchAll: true,                                                                                                // 66
				sort: 'name',                                                                                                  // 67
				selector: function (match) {                                                                                   // 68
					return {                                                                                                      // 69
						name: match                                                                                                  // 70
					};                                                                                                            // 69
				}                                                                                                              // 72
			}]                                                                                                              // 60
		};                                                                                                               // 57
	},                                                                                                                // 76
	autocompleteUsernameSettings: function () {                                                                       // 78
		var instance = Template.instance();                                                                              // 79
		return {                                                                                                         // 80
			limit: 10,                                                                                                      // 81
			rules: [{                                                                                                       // 82
				collection: 'CachedUserList',                                                                                  // 84
				subscription: 'userAutocomplete',                                                                              // 85
				field: 'username',                                                                                             // 86
				template: Template.userSearch,                                                                                 // 87
				noMatchTemplate: Template.userSearchEmpty,                                                                     // 88
				matchAll: true,                                                                                                // 89
				filter: {                                                                                                      // 90
					exceptions: instance.usersInRole.get() && instance.usersInRole.get().fetch()                                  // 91
				},                                                                                                             // 90
				selector: function (match) {                                                                                   // 93
					return {                                                                                                      // 94
						term: match                                                                                                  // 95
					};                                                                                                            // 94
				},                                                                                                             // 97
				sort: 'username'                                                                                               // 98
			}]                                                                                                              // 83
		};                                                                                                               // 80
	}                                                                                                                 // 102
});                                                                                                                // 3
Template.permissionsRole.events({                                                                                  // 105
	'click .remove-user': function (e, instance) {                                                                    // 106
		var _this = this;                                                                                                // 106
                                                                                                                   //
		e.preventDefault();                                                                                              // 107
		swal({                                                                                                           // 108
			title: t('Are_you_sure'),                                                                                       // 109
			type: 'warning',                                                                                                // 110
			showCancelButton: true,                                                                                         // 111
			confirmButtonColor: '#DD6B55',                                                                                  // 112
			confirmButtonText: t('Yes'),                                                                                    // 113
			cancelButtonText: t('Cancel'),                                                                                  // 114
			closeOnConfirm: false,                                                                                          // 115
			html: false                                                                                                     // 116
		}, function () {                                                                                                 // 108
			Meteor.call('authorization:removeUserFromRole', FlowRouter.getParam('name'), _this.username, instance.searchRoom.get(), function (error /*, result*/) {
				if (error) {                                                                                                   // 119
					return handleError(error);                                                                                    // 120
				}                                                                                                              // 121
                                                                                                                   //
				swal({                                                                                                         // 123
					title: t('Removed'),                                                                                          // 124
					text: t('User_removed'),                                                                                      // 125
					type: 'success',                                                                                              // 126
					timer: 1000,                                                                                                  // 127
					showConfirmButton: false                                                                                      // 128
				});                                                                                                            // 123
			});                                                                                                             // 130
		});                                                                                                              // 131
	},                                                                                                                // 132
	'submit #form-role': function (e /*, instance*/) {                                                                // 134
		var _this2 = this;                                                                                               // 134
                                                                                                                   //
		e.preventDefault();                                                                                              // 135
		var oldBtnValue = e.currentTarget.elements['save'].value;                                                        // 136
		e.currentTarget.elements['save'].value = t('Saving');                                                            // 137
		var roleData = {                                                                                                 // 138
			description: e.currentTarget.elements['description'].value,                                                     // 139
			scope: e.currentTarget.elements['scope'].value                                                                  // 140
		};                                                                                                               // 138
                                                                                                                   //
		if (this._id) {                                                                                                  // 143
			roleData.name = this._id;                                                                                       // 144
		} else {                                                                                                         // 145
			roleData.name = e.currentTarget.elements['name'].value;                                                         // 146
		}                                                                                                                // 147
                                                                                                                   //
		Meteor.call('authorization:saveRole', roleData, function (error /*, result*/) {                                  // 149
			e.currentTarget.elements['save'].value = oldBtnValue;                                                           // 150
                                                                                                                   //
			if (error) {                                                                                                    // 151
				return handleError(error);                                                                                     // 152
			}                                                                                                               // 153
                                                                                                                   //
			toastr.success(t('Saved'));                                                                                     // 155
                                                                                                                   //
			if (!_this2._id) {                                                                                              // 157
				return FlowRouter.go('admin-permissions-edit', {                                                               // 158
					name: roleData.name                                                                                           // 159
				});                                                                                                            // 158
			}                                                                                                               // 161
		});                                                                                                              // 162
	},                                                                                                                // 163
	'submit #form-users': function (e, instance) {                                                                    // 165
		e.preventDefault();                                                                                              // 166
                                                                                                                   //
		if (e.currentTarget.elements['username'].value.trim() === '') {                                                  // 167
			return toastr.error(t('Please_fill_a_username'));                                                               // 168
		}                                                                                                                // 169
                                                                                                                   //
		var oldBtnValue = e.currentTarget.elements['add'].value;                                                         // 170
		e.currentTarget.elements['add'].value = t('Saving');                                                             // 171
		Meteor.call('authorization:addUserToRole', FlowRouter.getParam('name'), e.currentTarget.elements['username'].value, instance.searchRoom.get(), function (error /*, result*/) {
			e.currentTarget.elements['add'].value = oldBtnValue;                                                            // 174
                                                                                                                   //
			if (error) {                                                                                                    // 175
				return handleError(error);                                                                                     // 176
			}                                                                                                               // 177
                                                                                                                   //
			instance.subscribe('usersInRole', FlowRouter.getParam('name'), instance.searchRoom.get());                      // 178
			toastr.success(t('User_added'));                                                                                // 179
			e.currentTarget.reset();                                                                                        // 180
		});                                                                                                              // 181
	},                                                                                                                // 182
	'submit #form-search-room': function (e) {                                                                        // 184
		return e.preventDefault();                                                                                       // 185
	},                                                                                                                // 186
	'click .delete-role': function (e /*, instance*/) {                                                               // 188
		e.preventDefault();                                                                                              // 189
                                                                                                                   //
		if (this.protected) {                                                                                            // 190
			return toastr.error(t('error-delete-protected-role'));                                                          // 191
		}                                                                                                                // 192
                                                                                                                   //
		Meteor.call('authorization:deleteRole', this._id, function (error /*, result*/) {                                // 194
			if (error) {                                                                                                    // 195
				return handleError(error);                                                                                     // 196
			}                                                                                                               // 197
                                                                                                                   //
			toastr.success(t('Role_removed'));                                                                              // 198
			FlowRouter.go('admin-permissions');                                                                             // 199
		});                                                                                                              // 200
	},                                                                                                                // 201
	'click .load-more': function (e, t) {                                                                             // 203
		e.preventDefault();                                                                                              // 204
		e.stopPropagation();                                                                                             // 205
		t.limit.set(t.limit.get() + 50);                                                                                 // 206
	},                                                                                                                // 207
	'autocompleteselect input[name=room]': function (event, template, doc) {                                          // 209
		template.searchRoom.set(doc._id);                                                                                // 210
	}                                                                                                                 // 211
});                                                                                                                // 105
Template.permissionsRole.onCreated(function () {                                                                   // 214
	var _this3 = this;                                                                                                // 214
                                                                                                                   //
	this.searchRoom = new ReactiveVar();                                                                              // 215
	this.searchUsername = new ReactiveVar();                                                                          // 216
	this.usersInRole = new ReactiveVar();                                                                             // 217
	this.limit = new ReactiveVar(50);                                                                                 // 218
	this.ready = new ReactiveVar(true);                                                                               // 219
	this.subscribe('roles', FlowRouter.getParam('name'));                                                             // 220
	this.autorun(function () {                                                                                        // 222
		if (_this3.searchRoom.get()) {                                                                                   // 223
			_this3.subscribe('roomSubscriptionsByRole', _this3.searchRoom.get(), FlowRouter.getParam('name'));              // 224
		}                                                                                                                // 225
                                                                                                                   //
		var limit = _this3.limit.get();                                                                                  // 227
                                                                                                                   //
		var subscription = _this3.subscribe('usersInRole', FlowRouter.getParam('name'), _this3.searchRoom.get(), limit);
                                                                                                                   //
		_this3.ready.set(subscription.ready());                                                                          // 230
                                                                                                                   //
		_this3.usersInRole.set(RocketChat.models.Roles.findUsersInRole(FlowRouter.getParam('name'), _this3.searchRoom.get(), {
			sort: {                                                                                                         // 233
				username: 1                                                                                                    // 234
			}                                                                                                               // 233
		}));                                                                                                             // 232
	});                                                                                                               // 237
});                                                                                                                // 238
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".less"
  ]
});
require("./node_modules/meteor/rocketchat:authorization/lib/rocketchat.js");
require("./node_modules/meteor/rocketchat:authorization/client/lib/ChatPermissions.js");
require("./node_modules/meteor/rocketchat:authorization/client/lib/models/Roles.js");
require("./node_modules/meteor/rocketchat:authorization/client/lib/models/Users.js");
require("./node_modules/meteor/rocketchat:authorization/client/lib/models/Subscriptions.js");
require("./node_modules/meteor/rocketchat:authorization/client/startup.js");
require("./node_modules/meteor/rocketchat:authorization/client/hasPermission.js");
require("./node_modules/meteor/rocketchat:authorization/client/hasRole.js");
require("./node_modules/meteor/rocketchat:authorization/client/template.requiresPermission.js");
require("./node_modules/meteor/rocketchat:authorization/client/route.js");
require("./node_modules/meteor/rocketchat:authorization/client/views/template.permissions.js");
require("./node_modules/meteor/rocketchat:authorization/client/views/permissions.js");
require("./node_modules/meteor/rocketchat:authorization/client/views/template.permissionsRole.js");
require("./node_modules/meteor/rocketchat:authorization/client/views/permissionsRole.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:authorization'] = {};

})();
