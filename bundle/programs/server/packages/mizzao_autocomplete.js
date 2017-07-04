(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

/* Package-scope variables */
var __coffeescriptShare, Autocomplete, AutocompleteTest;

var require = meteorInstall({"node_modules":{"meteor":{"mizzao:autocomplete":{"autocomplete-server.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
// packages/mizzao_autocomplete/autocomplete-server.coffee.js                             //
//                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////
                                                                                          //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Autocomplete = function () {                                                              // 1
  function Autocomplete() {}                                                              // 4
                                                                                          //
  Autocomplete.publishCursor = function (cursor, sub) {                                   // 2
    return Mongo.Collection._publishCursor(cursor, sub, "autocompleteRecords");           // 7
  };                                                                                      // 2
                                                                                          //
  return Autocomplete;                                                                    // 10
}();                                                                                      // 12
                                                                                          //
Meteor.publish('autocomplete-recordset', function (selector, options, collName) {         // 7
  var collection;                                                                         // 8
  collection = global[collName];                                                          // 8
                                                                                          //
  if (!collection) {                                                                      // 9
    throw new Error(collName + ' is not defined on the global namespace of the server.');
  }                                                                                       // 19
                                                                                          //
  if (!collection._isInsecure()) {                                                        // 14
    Meteor._debug(collName + ' is a secure collection, therefore no data was returned because the client could compromise security by subscribing to arbitrary server collections via the browser console. Please write your own publish function.');
                                                                                          //
    return [];                                                                            // 16
  }                                                                                       // 23
                                                                                          //
  if (options.limit) {                                                                    // 19
    options.limit = Math.min(50, Math.abs(options.limit));                                // 19
  }                                                                                       // 26
                                                                                          //
  Autocomplete.publishCursor(collection.find(selector, options), this);                   // 23
  return this.ready();                                                                    // 28
});                                                                                       // 7
////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});
require("./node_modules/meteor/mizzao:autocomplete/autocomplete-server.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:autocomplete'] = {}, {
  Autocomplete: Autocomplete,
  AutocompleteTest: AutocompleteTest
});

})();

//# sourceMappingURL=mizzao_autocomplete.js.map
