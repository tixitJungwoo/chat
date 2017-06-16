(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var WebApp = Package.webapp.WebApp;
var main = Package.webapp.main;
var WebAppInternals = Package.webapp.WebAppInternals;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var ECMAScript = Package.ecmascript.ECMAScript;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var OAuth2Server = Package['rocketchat:oauth2-server'].OAuth2Server;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var __coffeescriptShare;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:oauth2-server-config":{"server":{"models":{"OAuthApps.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/server/models/OAuthApps.coffee.js                           //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var extend = function (child, parent) {                                                                 // 1
  for (var key in meteorBabelHelpers.sanitizeForInObject(parent)) {                                     // 1
    if (hasProp.call(parent, key)) child[key] = parent[key];                                            // 1
  }                                                                                                     // 1
                                                                                                        //
  function ctor() {                                                                                     // 1
    this.constructor = child;                                                                           // 1
  }                                                                                                     // 1
                                                                                                        //
  ctor.prototype = parent.prototype;                                                                    // 1
  child.prototype = new ctor();                                                                         // 1
  child.__super__ = parent.prototype;                                                                   // 1
  return child;                                                                                         // 1
},                                                                                                      // 1
    hasProp = {}.hasOwnProperty;                                                                        // 1
                                                                                                        //
RocketChat.models.OAuthApps = new (function (superClass) {                                              // 1
  extend(_Class, superClass);                                                                           // 5
                                                                                                        //
  function _Class() {                                                                                   // 2
    _Class.__super__.constructor.call(this, 'oauth_apps');                                              // 3
  }                                                                                                     // 2
                                                                                                        //
  return _Class;                                                                                        // 11
}(RocketChat.models._Base))();                                                                          // 13
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"oauth":{"server":{"oauth2-server.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/oauth/server/oauth2-server.coffee.js                        //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var oauth2server;                                                                                       // 1
oauth2server = new OAuth2Server({                                                                       // 1
  accessTokensCollectionName: 'rocketchat_oauth_access_tokens',                                         // 2
  refreshTokensCollectionName: 'rocketchat_oauth_refresh_tokens',                                       // 3
  authCodesCollectionName: 'rocketchat_oauth_auth_codes',                                               // 4
  clientsCollection: RocketChat.models.OAuthApps.model,                                                 // 5
  debug: true                                                                                           // 6
});                                                                                                     // 2
WebApp.connectHandlers.use(oauth2server.app);                                                           // 9
oauth2server.routes.get('/oauth/userinfo', function (req, res, next) {                                  // 11
  var accessToken, token, user;                                                                         // 12
                                                                                                        //
  if (req.headers.authorization == null) {                                                              // 12
    return res.sendStatus(401).send('No token');                                                        // 13
  }                                                                                                     // 17
                                                                                                        //
  accessToken = req.headers.authorization.replace('Bearer ', '');                                       // 15
  token = oauth2server.oauth.model.AccessTokens.findOne({                                               // 17
    accessToken: accessToken                                                                            // 17
  });                                                                                                   // 17
                                                                                                        //
  if (token == null) {                                                                                  // 19
    return res.sendStatus(401).send('Invalid Token');                                                   // 20
  }                                                                                                     // 24
                                                                                                        //
  user = RocketChat.models.Users.findOneById(token.userId);                                             // 22
                                                                                                        //
  if (user == null) {                                                                                   // 24
    return res.sendStatus(401).send('Invalid Token');                                                   // 25
  }                                                                                                     // 28
                                                                                                        //
  return res.send({                                                                                     // 29
    sub: user._id,                                                                                      // 28
    name: user.name,                                                                                    // 29
    email: user.emails[0].address,                                                                      // 30
    email_verified: user.emails[0].verified,                                                            // 31
    department: "",                                                                                     // 32
    birthdate: "",                                                                                      // 33
    preffered_username: user.username,                                                                  // 34
    updated_at: user._updatedAt,                                                                        // 35
    picture: Meteor.absoluteUrl() + "avatar/" + user.username                                           // 36
  });                                                                                                   // 28
});                                                                                                     // 11
Meteor.publish('oauthClient', function (clientId) {                                                     // 39
  if (!this.userId) {                                                                                   // 40
    return this.ready();                                                                                // 41
  }                                                                                                     // 45
                                                                                                        //
  return RocketChat.models.OAuthApps.find({                                                             // 43
    clientId: clientId,                                                                                 // 43
    active: true                                                                                        // 43
  }, {                                                                                                  // 43
    fields: {                                                                                           // 44
      name: 1                                                                                           // 45
    }                                                                                                   // 45
  });                                                                                                   // 44
});                                                                                                     // 39
RocketChat.API.v1.addAuthMethod(function () {                                                           // 48
  var accessToken, bearerToken, getAccessToken, getToken, headerToken, matches, user;                   // 49
  headerToken = this.request.headers['authorization'];                                                  // 49
  getToken = this.request.query.access_token;                                                           // 50
                                                                                                        //
  if (headerToken != null) {                                                                            // 52
    if (matches = headerToken.match(/Bearer\s(\S+)/)) {                                                 // 53
      headerToken = matches[1];                                                                         // 54
    } else {                                                                                            // 53
      headerToken = void 0;                                                                             // 56
    }                                                                                                   // 52
  }                                                                                                     // 66
                                                                                                        //
  bearerToken = headerToken || getToken;                                                                // 58
                                                                                                        //
  if (bearerToken == null) {                                                                            // 60
    return;                                                                                             // 62
  }                                                                                                     // 70
                                                                                                        //
  getAccessToken = Meteor.wrapAsync(oauth2server.oauth.model.getAccessToken, oauth2server.oauth.model);
  accessToken = getAccessToken(bearerToken);                                                            // 67
                                                                                                        //
  if (accessToken == null) {                                                                            // 69
    return;                                                                                             // 71
  }                                                                                                     // 75
                                                                                                        //
  if (accessToken.expires != null && accessToken.expires !== 0 && accessToken.expires < new Date()) {   // 73
    return;                                                                                             // 75
  }                                                                                                     // 78
                                                                                                        //
  user = RocketChat.models.Users.findOne(accessToken.userId);                                           // 77
                                                                                                        //
  if (user == null) {                                                                                   // 78
    return;                                                                                             // 80
  }                                                                                                     // 82
                                                                                                        //
  return {                                                                                              // 82
    user: _.omit(user, '$loki')                                                                         // 82
  };                                                                                                    // 82
});                                                                                                     // 48
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"default-services.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/oauth/server/default-services.coffee.js                     //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (!RocketChat.models.OAuthApps.findOne('zapier')) {                                                   // 1
  RocketChat.models.OAuthApps.insert({                                                                  // 2
    _id: 'zapier',                                                                                      // 3
    name: 'Zapier',                                                                                     // 4
    active: true,                                                                                       // 5
    clientId: 'zapier',                                                                                 // 6
    clientSecret: 'RTK6TlndaCIolhQhZ7_KHIGOKj41RnlaOq_o-7JKwLr',                                        // 7
    redirectUri: 'https://zapier.com/dashboard/auth/oauth/return/App32270API/',                         // 8
    _createdAt: new Date(),                                                                             // 9
    _createdBy: {                                                                                       // 10
      _id: 'system',                                                                                    // 11
      username: 'system'                                                                                // 12
    }                                                                                                   // 11
  });                                                                                                   // 3
}                                                                                                       // 15
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"admin":{"server":{"publications":{"oauthApps.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/admin/server/publications/oauthApps.coffee.js               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('oauthApps', function () {                                                               // 1
  if (!this.userId) {                                                                                   // 2
    return this.ready();                                                                                // 3
  }                                                                                                     // 4
                                                                                                        //
  if (!RocketChat.authz.hasPermission(this.userId, 'manage-oauth-apps')) {                              // 5
    this.error(Meteor.Error("error-not-allowed", "Not allowed", {                                       // 6
      publish: 'oauthApps'                                                                              // 6
    }));                                                                                                // 6
  }                                                                                                     // 9
                                                                                                        //
  return RocketChat.models.OAuthApps.find();                                                            // 8
});                                                                                                     // 1
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"methods":{"addOAuthApp.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/admin/server/methods/addOAuthApp.coffee.js                  //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                        // 1
  addOAuthApp: function (application) {                                                                 // 2
    if (!RocketChat.authz.hasPermission(this.userId, 'manage-oauth-apps')) {                            // 3
      throw new Meteor.Error('error-not-allowed', 'Not allowed', {                                      // 4
        method: 'addOAuthApp'                                                                           // 4
      });                                                                                               // 4
    }                                                                                                   // 7
                                                                                                        //
    if (!_.isString(application.name) || application.name.trim() === '') {                              // 6
      throw new Meteor.Error('error-invalid-name', 'Invalid name', {                                    // 7
        method: 'addOAuthApp'                                                                           // 7
      });                                                                                               // 7
    }                                                                                                   // 12
                                                                                                        //
    if (!_.isString(application.redirectUri) || application.redirectUri.trim() === '') {                // 9
      throw new Meteor.Error('error-invalid-redirectUri', 'Invalid redirectUri', {                      // 10
        method: 'addOAuthApp'                                                                           // 10
      });                                                                                               // 10
    }                                                                                                   // 17
                                                                                                        //
    if (!_.isBoolean(application.active)) {                                                             // 12
      throw new Meteor.Error('error-invalid-arguments', 'Invalid arguments', {                          // 13
        method: 'addOAuthApp'                                                                           // 13
      });                                                                                               // 13
    }                                                                                                   // 22
                                                                                                        //
    application.clientId = Random.id();                                                                 // 15
    application.clientSecret = Random.secret();                                                         // 16
    application._createdAt = new Date();                                                                // 17
    application._createdBy = RocketChat.models.Users.findOne(this.userId, {                             // 18
      fields: {                                                                                         // 18
        username: 1                                                                                     // 18
      }                                                                                                 // 18
    });                                                                                                 // 18
    application._id = RocketChat.models.OAuthApps.insert(application);                                  // 20
    return application;                                                                                 // 22
  }                                                                                                     // 2
});                                                                                                     // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"updateOAuthApp.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/admin/server/methods/updateOAuthApp.coffee.js               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                        // 1
  updateOAuthApp: function (applicationId, application) {                                               // 2
    var currentApplication;                                                                             // 3
                                                                                                        //
    if (!RocketChat.authz.hasPermission(this.userId, 'manage-oauth-apps')) {                            // 3
      throw new Meteor.Error('error-not-allowed', 'Not allowed', {                                      // 4
        method: 'updateOAuthApp'                                                                        // 4
      });                                                                                               // 4
    }                                                                                                   // 8
                                                                                                        //
    if (!_.isString(application.name) || application.name.trim() === '') {                              // 6
      throw new Meteor.Error('error-invalid-name', 'Invalid name', {                                    // 7
        method: 'updateOAuthApp'                                                                        // 7
      });                                                                                               // 7
    }                                                                                                   // 13
                                                                                                        //
    if (!_.isString(application.redirectUri) || application.redirectUri.trim() === '') {                // 9
      throw new Meteor.Error('error-invalid-redirectUri', 'Invalid redirectUri', {                      // 10
        method: 'updateOAuthApp'                                                                        // 10
      });                                                                                               // 10
    }                                                                                                   // 18
                                                                                                        //
    if (!_.isBoolean(application.active)) {                                                             // 12
      throw new Meteor.Error('error-invalid-arguments', 'Invalid arguments', {                          // 13
        method: 'updateOAuthApp'                                                                        // 13
      });                                                                                               // 13
    }                                                                                                   // 23
                                                                                                        //
    currentApplication = RocketChat.models.OAuthApps.findOne(applicationId);                            // 15
                                                                                                        //
    if (currentApplication == null) {                                                                   // 16
      throw new Meteor.Error('error-application-not-found', 'Application not found', {                  // 17
        method: 'updateOAuthApp'                                                                        // 17
      });                                                                                               // 17
    }                                                                                                   // 29
                                                                                                        //
    RocketChat.models.OAuthApps.update(applicationId, {                                                 // 19
      $set: {                                                                                           // 20
        name: application.name,                                                                         // 21
        active: application.active,                                                                     // 22
        redirectUri: application.redirectUri,                                                           // 23
        _updatedAt: new Date(),                                                                         // 24
        _updatedBy: RocketChat.models.Users.findOne(this.userId, {                                      // 25
          fields: {                                                                                     // 25
            username: 1                                                                                 // 25
          }                                                                                             // 25
        })                                                                                              // 25
      }                                                                                                 // 21
    });                                                                                                 // 20
    return RocketChat.models.OAuthApps.findOne(applicationId);                                          // 27
  }                                                                                                     // 2
});                                                                                                     // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

},"deleteOAuthApp.coffee.js":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
// packages/rocketchat_oauth2-server-config/admin/server/methods/deleteOAuthApp.coffee.js               //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                        //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                        // 1
  deleteOAuthApp: function (applicationId) {                                                            // 2
    var application;                                                                                    // 3
                                                                                                        //
    if (!RocketChat.authz.hasPermission(this.userId, 'manage-oauth-apps')) {                            // 3
      throw new Meteor.Error('error-not-allowed', 'Not allowed', {                                      // 4
        method: 'deleteOAuthApp'                                                                        // 4
      });                                                                                               // 4
    }                                                                                                   // 8
                                                                                                        //
    application = RocketChat.models.OAuthApps.findOne(applicationId);                                   // 6
                                                                                                        //
    if (application == null) {                                                                          // 8
      throw new Meteor.Error('error-application-not-found', 'Application not found', {                  // 9
        method: 'deleteOAuthApp'                                                                        // 9
      });                                                                                               // 9
    }                                                                                                   // 14
                                                                                                        //
    RocketChat.models.OAuthApps.remove({                                                                // 12
      _id: applicationId                                                                                // 12
    });                                                                                                 // 12
    return true;                                                                                        // 14
  }                                                                                                     // 2
});                                                                                                     // 2
//////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/rocketchat:oauth2-server-config/server/models/OAuthApps.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/oauth/server/oauth2-server.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/oauth/server/default-services.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/server/publications/oauthApps.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/server/methods/addOAuthApp.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/server/methods/updateOAuthApp.coffee.js");
require("./node_modules/meteor/rocketchat:oauth2-server-config/admin/server/methods/deleteOAuthApp.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:oauth2-server-config'] = {};

})();

//# sourceMappingURL=rocketchat_oauth2-server-config.js.map
