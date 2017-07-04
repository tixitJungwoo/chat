(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var RocketChat = Package['rocketchat:lib'].RocketChat;
var RocketChatTabBar = Package['rocketchat:lib'].RocketChatTabBar;
var Restivus = Package['nimble:restivus'].Restivus;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"lily:lib":{"server":{"models":{"_LilyBase.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/lily_lib/server/models/_LilyBase.js                                                          //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                  //
                                                                                                         //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                         //
                                                                                                         //
var _createClass2 = require("babel-runtime/helpers/createClass");                                        //
                                                                                                         //
var _createClass3 = _interopRequireDefault(_createClass2);                                               //
                                                                                                         //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }        //
                                                                                                         //
var ModelsBaseDb = void 0;                                                                               // 1
module.watch(require("./_LilyBaseDb"), {                                                                 // 1
    "default": function (v) {                                                                            // 1
        ModelsBaseDb = v;                                                                                // 1
    }                                                                                                    // 1
}, 0);                                                                                                   // 1
RocketChat.models._CacheControl = new Meteor.EnvironmentVariable();                                      // 3
                                                                                                         //
var ModelsLilyBase = function () {                                                                       //
    function ModelsLilyBase(nameOrModel, useCache) {                                                     // 6
        (0, _classCallCheck3.default)(this, ModelsLilyBase);                                             // 6
        this._db = new ModelsBaseDb(nameOrModel, this);                                                  // 7
        this.model = this._db.model;                                                                     // 8
        this.collectionName = this._db.collectionName;                                                   // 9
        this.name = this._db.name;                                                                       // 10
        this._useCache = false;                                                                          // 12
        this.db = this;                                                                                  // 14
    }                                                                                                    // 15
                                                                                                         //
    ModelsLilyBase.prototype.arrayToCursor = function () {                                               //
        function arrayToCursor(data) {                                                                   //
            return {                                                                                     // 26
                fetch: function () {                                                                     // 27
                    return data;                                                                         // 28
                },                                                                                       // 29
                count: function () {                                                                     // 30
                    return data.length;                                                                  // 31
                },                                                                                       // 32
                forEach: function (fn) {                                                                 // 33
                    return data.forEach(fn);                                                             // 34
                }                                                                                        // 35
            };                                                                                           // 26
        }                                                                                                // 37
                                                                                                         //
        return arrayToCursor;                                                                            //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.setUpdatedAt = function () {                                                //
        function setUpdatedAt() /*record, checkQuery, query*/{                                           //
            var _db;                                                                                     // 39
                                                                                                         //
            return (_db = this._db).setUpdatedAt.apply(_db, arguments);                                  // 40
        }                                                                                                // 41
                                                                                                         //
        return setUpdatedAt;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.find = function () {                                                        //
        function find() {                                                                                //
            try {                                                                                        // 44
                var _origin;                                                                             // 44
                                                                                                         //
                return (_origin = this[this.origin]).find.apply(_origin, arguments);                     // 45
            } catch (e) {                                                                                // 46
                var _console;                                                                            // 46
                                                                                                         //
                (_console = console).error.apply(_console, ['Exception on find', e].concat(Array.prototype.slice.call(arguments)));
            }                                                                                            // 48
        }                                                                                                // 49
                                                                                                         //
        return find;                                                                                     //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.findOne = function () {                                                     //
        function findOne() {                                                                             //
            try {                                                                                        // 52
                var _origin2;                                                                            // 52
                                                                                                         //
                return (_origin2 = this[this.origin]).findOne.apply(_origin2, arguments);                // 53
            } catch (e) {                                                                                // 54
                var _console2;                                                                           // 54
                                                                                                         //
                (_console2 = console).error.apply(_console2, ['Exception on find', e].concat(Array.prototype.slice.call(arguments)));
            }                                                                                            // 56
        }                                                                                                // 57
                                                                                                         //
        return findOne;                                                                                  //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.findOneById = function () {                                                 //
        function findOneById() {                                                                         //
            try {                                                                                        // 60
                var _origin3;                                                                            // 60
                                                                                                         //
                return (_origin3 = this[this.origin]).findOneById.apply(_origin3, arguments);            // 61
            } catch (e) {                                                                                // 62
                var _console3;                                                                           // 62
                                                                                                         //
                (_console3 = console).error.apply(_console3, ['Exception on find', e].concat(Array.prototype.slice.call(arguments)));
            }                                                                                            // 64
        }                                                                                                // 65
                                                                                                         //
        return findOneById;                                                                              //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.findOneByIds = function () {                                                //
        function findOneByIds(ids, options) {                                                            //
            check(ids, [String]);                                                                        // 68
                                                                                                         //
            try {                                                                                        // 70
                return this[this.origin].findOneByIds(ids, options);                                     // 71
            } catch (e) {                                                                                // 72
                var _console4;                                                                           // 72
                                                                                                         //
                (_console4 = console).error.apply(_console4, ['Exception on find', e].concat(Array.prototype.slice.call(arguments)));
            }                                                                                            // 74
        }                                                                                                // 75
                                                                                                         //
        return findOneByIds;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.insert = function () {                                                      //
        function insert() /*record*/{                                                                    //
            var _db2;                                                                                    // 77
                                                                                                         //
            return (_db2 = this._db).insert.apply(_db2, arguments);                                      // 78
        }                                                                                                // 79
                                                                                                         //
        return insert;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.update = function () {                                                      //
        function update() /*query, update, options*/{                                                    //
            var _db3;                                                                                    // 81
                                                                                                         //
            return (_db3 = this._db).update.apply(_db3, arguments);                                      // 82
        }                                                                                                // 83
                                                                                                         //
        return update;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.upsert = function () {                                                      //
        function upsert() /*query, update*/{                                                             //
            var _db4;                                                                                    // 85
                                                                                                         //
            return (_db4 = this._db).upsert.apply(_db4, arguments);                                      // 86
        }                                                                                                // 87
                                                                                                         //
        return upsert;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.remove = function () {                                                      //
        function remove() /*query*/{                                                                     //
            var _db5;                                                                                    // 89
                                                                                                         //
            return (_db5 = this._db).remove.apply(_db5, arguments);                                      // 90
        }                                                                                                // 91
                                                                                                         //
        return remove;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.insertOrUpsert = function () {                                              //
        function insertOrUpsert() {                                                                      //
            var _db6;                                                                                    // 93
                                                                                                         //
            return (_db6 = this._db).insertOrUpsert.apply(_db6, arguments);                              // 94
        }                                                                                                // 95
                                                                                                         //
        return insertOrUpsert;                                                                           //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.allow = function () {                                                       //
        function allow() {                                                                               //
            var _db7;                                                                                    // 97
                                                                                                         //
            return (_db7 = this._db).allow.apply(_db7, arguments);                                       // 98
        }                                                                                                // 99
                                                                                                         //
        return allow;                                                                                    //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.deny = function () {                                                        //
        function deny() {                                                                                //
            var _db8;                                                                                    // 101
                                                                                                         //
            return (_db8 = this._db).deny.apply(_db8, arguments);                                        // 102
        }                                                                                                // 103
                                                                                                         //
        return deny;                                                                                     //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.ensureIndex = function () {                                                 //
        function ensureIndex() {                                                                         //
            var _db9;                                                                                    // 105
                                                                                                         //
            return (_db9 = this._db).ensureIndex.apply(_db9, arguments);                                 // 106
        }                                                                                                // 107
                                                                                                         //
        return ensureIndex;                                                                              //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.dropIndex = function () {                                                   //
        function dropIndex() {                                                                           //
            var _db10;                                                                                   // 109
                                                                                                         //
            return (_db10 = this._db).dropIndex.apply(_db10, arguments);                                 // 110
        }                                                                                                // 111
                                                                                                         //
        return dropIndex;                                                                                //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.tryEnsureIndex = function () {                                              //
        function tryEnsureIndex() {                                                                      //
            var _db11;                                                                                   // 113
                                                                                                         //
            return (_db11 = this._db).tryEnsureIndex.apply(_db11, arguments);                            // 114
        }                                                                                                // 115
                                                                                                         //
        return tryEnsureIndex;                                                                           //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.tryDropIndex = function () {                                                //
        function tryDropIndex() {                                                                        //
            var _db12;                                                                                   // 117
                                                                                                         //
            return (_db12 = this._db).tryDropIndex.apply(_db12, arguments);                              // 118
        }                                                                                                // 119
                                                                                                         //
        return tryDropIndex;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.trashFind = function () {                                                   //
        function trashFind() /*query, options*/{                                                         //
            var _db13;                                                                                   // 121
                                                                                                         //
            return (_db13 = this._db).trashFind.apply(_db13, arguments);                                 // 122
        }                                                                                                // 123
                                                                                                         //
        return trashFind;                                                                                //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBase.prototype.trashFindDeletedAfter = function () {                                       //
        function trashFindDeletedAfter() /*deletedAt, query, options*/{                                  //
            var _db14;                                                                                   // 125
                                                                                                         //
            return (_db14 = this._db).trashFindDeletedAfter.apply(_db14, arguments);                     // 126
        }                                                                                                // 127
                                                                                                         //
        return trashFindDeletedAfter;                                                                    //
    }();                                                                                                 //
                                                                                                         //
    (0, _createClass3.default)(ModelsLilyBase, [{                                                        //
        key: "useCache",                                                                                 //
        get: function () {                                                                               //
            return false;                                                                                // 18
        }                                                                                                // 19
    }, {                                                                                                 //
        key: "origin",                                                                                   //
        get: function () {                                                                               //
            return '_db';                                                                                // 22
        }                                                                                                // 23
    }]);                                                                                                 //
    return ModelsLilyBase;                                                                               //
}();                                                                                                     //
                                                                                                         //
RocketChat.models._LilyBase = ModelsLilyBase;                                                            // 130
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_LilyBaseDb.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// packages/lily_lib/server/models/_LilyBaseDb.js                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                  //
                                                                                                         //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                         //
                                                                                                         //
var _createClass2 = require("babel-runtime/helpers/createClass");                                        //
                                                                                                         //
var _createClass3 = _interopRequireDefault(_createClass2);                                               //
                                                                                                         //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");            //
                                                                                                         //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                   //
                                                                                                         //
var _inherits2 = require("babel-runtime/helpers/inherits");                                              //
                                                                                                         //
var _inherits3 = _interopRequireDefault(_inherits2);                                                     //
                                                                                                         //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }        //
                                                                                                         //
var EventEmitter = void 0;                                                                               // 1
module.watch(require("events"), {                                                                        // 1
    EventEmitter: function (v) {                                                                         // 1
        EventEmitter = v;                                                                                // 1
    }                                                                                                    // 1
}, 0);                                                                                                   // 1
/* globals MongoInternals */var baseName = 'lily_';                                                      // 1
var isOplogAvailable = MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle && !!MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle.onOplogEntry;
var isOplogEnabled = isOplogAvailable;                                                                   // 7
RocketChat.settings.get('Force_Disable_OpLog_For_Cache', function (key, value) {                         // 8
    isOplogEnabled = isOplogAvailable && value === false;                                                // 9
});                                                                                                      // 10
                                                                                                         //
var ModelsLilyBaseDb = function (_EventEmitter) {                                                        //
    (0, _inherits3.default)(ModelsLilyBaseDb, _EventEmitter);                                            //
                                                                                                         //
    function ModelsLilyBaseDb(model, baseModel) {                                                        // 13
        (0, _classCallCheck3.default)(this, ModelsLilyBaseDb);                                           // 13
                                                                                                         //
        var _this = (0, _possibleConstructorReturn3.default)(this, _EventEmitter.call(this));            // 13
                                                                                                         //
        _this.name = model;                                                                              // 16
        _this.collectionName = _this.baseName + _this.name;                                              // 17
        _this.model = new Mongo.Collection(_this.collectionName);                                        // 18
        _this.baseModel = baseModel; // this.wrapModel();                                                // 20
        // When someone start listening for changes we start oplog if available                          // 24
                                                                                                         //
        _this.once('newListener', function (event /*, listener*/) {                                      // 25
            if (event === 'change') {                                                                    // 26
                if (isOplogEnabled) {                                                                    // 27
                    var query = {                                                                        // 28
                        collection: _this.collectionName                                                 // 29
                    };                                                                                   // 28
                                                                                                         //
                    MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle.onOplogEntry(query, _this.processOplogRecord.bind(_this));
                                                                                                         //
                    MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle._defineTooFarBehind(Number.MAX_SAFE_INTEGER);
                }                                                                                        // 34
            }                                                                                            // 35
        });                                                                                              // 36
                                                                                                         //
        _this.tryEnsureIndex({                                                                           // 38
            '_updatedAt': 1                                                                              // 38
        });                                                                                              // 38
                                                                                                         //
        return _this;                                                                                    // 13
    }                                                                                                    // 39
                                                                                                         //
    ModelsLilyBaseDb.prototype.setUpdatedAt = function () {                                              //
        function setUpdatedAt() {                                                                        //
            var record = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};         // 45
                                                                                                         //
            if (/(^|,)\$/.test(Object.keys(record).join(','))) {                                         // 46
                record.$set = record.$set || {};                                                         // 47
                record.$set._updatedAt = new Date();                                                     // 48
            } else {                                                                                     // 49
                record._updatedAt = new Date();                                                          // 50
            }                                                                                            // 51
                                                                                                         //
            return record;                                                                               // 53
        }                                                                                                // 54
                                                                                                         //
        return setUpdatedAt;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.wrapModel = function () {                                                 //
        function wrapModel() {                                                                           //
            // this.originals = {                                                                        // 57
            //     insert: this.model.insert.bind(this.model),                                           // 58
            //     update: this.model.update.bind(this.model),                                           // 59
            //     remove: this.model.remove.bind(this.model)                                            // 60
            // };                                                                                        // 61
            var self = this;                                                                             // 62
                                                                                                         //
            this.model.insert = function () {                                                            // 64
                return self.insert.apply(self, arguments);                                               // 65
            };                                                                                           // 66
                                                                                                         //
            this.model.update = function () {                                                            // 68
                return self.update.apply(self, arguments);                                               // 69
            };                                                                                           // 70
                                                                                                         //
            this.model.remove = function () {                                                            // 72
                return self.remove.apply(self, arguments);                                               // 73
            };                                                                                           // 74
        }                                                                                                // 75
                                                                                                         //
        return wrapModel;                                                                                //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.find = function () {                                                      //
        function find() {                                                                                //
            var _model;                                                                                  // 77
                                                                                                         //
            return (_model = this.model).find.apply(_model, arguments);                                  // 78
        }                                                                                                // 79
                                                                                                         //
        return find;                                                                                     //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.findOne = function () {                                                   //
        function findOne() {                                                                             //
            var _model2;                                                                                 // 81
                                                                                                         //
            return (_model2 = this.model).findOne.apply(_model2, arguments);                             // 82
        }                                                                                                // 83
                                                                                                         //
        return findOne;                                                                                  //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.findOneById = function () {                                               //
        function findOneById(_id, options) {                                                             //
            return this.model.findOne({                                                                  // 86
                _id: _id                                                                                 // 86
            }, options);                                                                                 // 86
        }                                                                                                // 87
                                                                                                         //
        return findOneById;                                                                              //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.findOneByIds = function () {                                              //
        function findOneByIds(ids, options) {                                                            //
            return this.model.findOne({                                                                  // 90
                _id: {                                                                                   // 90
                    $in: ids                                                                             // 90
                }                                                                                        // 90
            }, options);                                                                                 // 90
        }                                                                                                // 91
                                                                                                         //
        return findOneByIds;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.defineSyncStrategy = function () {                                        //
        function defineSyncStrategy(query, modifier, options) {                                          //
            if (this.baseModel.useCache === false) {                                                     // 94
                return 'db';                                                                             // 95
            }                                                                                            // 96
                                                                                                         //
            if (options.upsert === true) {                                                               // 98
                return 'db';                                                                             // 99
            } // const dbModifiers = [                                                                   // 100
            // 	'$currentDate',                                                                          // 103
            // 	'$bit',                                                                                  // 104
            // 	'$pull',                                                                                 // 105
            // 	'$pushAll',                                                                              // 106
            // 	'$push',                                                                                 // 107
            // 	'$setOnInsert'                                                                           // 108
            // ];                                                                                        // 109
                                                                                                         //
                                                                                                         //
            var cacheAllowedModifiers = ['$set', '$unset', '$min', '$max', '$inc', '$mul', '$rename', '$pullAll', '$pop', '$addToSet'];
            var notAllowedModifiers = Object.keys(modifier).filter(function (i) {                        // 124
                return i.startsWith('$') && cacheAllowedModifiers.includes(i) === false;                 // 124
            });                                                                                          // 124
                                                                                                         //
            if (notAllowedModifiers.length > 0) {                                                        // 126
                return 'db';                                                                             // 127
            }                                                                                            // 128
                                                                                                         //
            var placeholderFields = Object.keys(query).filter(function (item) {                          // 130
                return item.indexOf('$') > -1;                                                           // 130
            });                                                                                          // 130
                                                                                                         //
            if (placeholderFields.length > 0) {                                                          // 131
                return 'db';                                                                             // 132
            }                                                                                            // 133
                                                                                                         //
            return 'cache';                                                                              // 135
        }                                                                                                // 136
                                                                                                         //
        return defineSyncStrategy;                                                                       //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.updateHasPositionalOperator = function () {                               //
        function updateHasPositionalOperator(update) {                                                   //
            for (var key in meteorBabelHelpers.sanitizeForInObject(update)) {                            // 139
                if (key.includes('.$')) {                                                                // 140
                    return true;                                                                         // 141
                }                                                                                        // 142
                                                                                                         //
                var value = update[key];                                                                 // 144
                                                                                                         //
                if (Match.test(value, Object)) {                                                         // 146
                    if (this.updateHasPositionalOperator(value) === true) {                              // 147
                        return true;                                                                     // 148
                    }                                                                                    // 149
                }                                                                                        // 150
            }                                                                                            // 151
                                                                                                         //
            return false;                                                                                // 153
        }                                                                                                // 154
                                                                                                         //
        return updateHasPositionalOperator;                                                              //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.processOplogRecord = function () {                                        //
        function processOplogRecord(action) {                                                            //
            if (isOplogEnabled === false) {                                                              // 157
                return;                                                                                  // 158
            }                                                                                            // 159
                                                                                                         //
            if (action.op.op === 'i') {                                                                  // 161
                this.emit('change', {                                                                    // 162
                    action: 'insert',                                                                    // 163
                    id: action.op.o._id,                                                                 // 164
                    data: action.op.o,                                                                   // 165
                    oplog: true                                                                          // 166
                });                                                                                      // 162
                return;                                                                                  // 168
            }                                                                                            // 169
                                                                                                         //
            if (action.op.op === 'u') {                                                                  // 171
                if (!action.op.o.$set && !action.op.o.$unset) {                                          // 172
                    this.emit('change', {                                                                // 173
                        action: 'update:record',                                                         // 174
                        id: action.id,                                                                   // 175
                        data: action.op.o,                                                               // 176
                        oplog: true                                                                      // 177
                    });                                                                                  // 173
                    return;                                                                              // 179
                }                                                                                        // 180
                                                                                                         //
                var diff = {};                                                                           // 182
                                                                                                         //
                if (action.op.o.$set) {                                                                  // 183
                    for (var key in meteorBabelHelpers.sanitizeForInObject(action.op.o.$set)) {          // 184
                        if (action.op.o.$set.hasOwnProperty(key)) {                                      // 185
                            diff[key] = action.op.o.$set[key];                                           // 186
                        }                                                                                // 187
                    }                                                                                    // 188
                }                                                                                        // 189
                                                                                                         //
                if (action.op.o.$unset) {                                                                // 191
                    for (var _key in meteorBabelHelpers.sanitizeForInObject(action.op.o.$unset)) {       // 192
                        if (action.op.o.$unset.hasOwnProperty(_key)) {                                   // 193
                            diff[_key] = undefined;                                                      // 194
                        }                                                                                // 195
                    }                                                                                    // 196
                }                                                                                        // 197
                                                                                                         //
                this.emit('change', {                                                                    // 199
                    action: 'update:diff',                                                               // 200
                    id: action.id,                                                                       // 201
                    data: diff,                                                                          // 202
                    oplog: true                                                                          // 203
                });                                                                                      // 199
                return;                                                                                  // 205
            }                                                                                            // 206
                                                                                                         //
            if (action.op.op === 'd') {                                                                  // 208
                this.emit('change', {                                                                    // 209
                    action: 'remove',                                                                    // 210
                    id: action.id,                                                                       // 211
                    oplog: true                                                                          // 212
                });                                                                                      // 209
                return;                                                                                  // 214
            }                                                                                            // 215
        }                                                                                                // 216
                                                                                                         //
        return processOplogRecord;                                                                       //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.insert = function () {                                                    //
        function insert(record) {                                                                        //
            var _originals;                                                                              // 218
                                                                                                         //
            this.setUpdatedAt(record);                                                                   // 219
                                                                                                         //
            var result = (_originals = this.originals).insert.apply(_originals, arguments);              // 221
                                                                                                         //
            if (!isOplogEnabled && this.listenerCount('change') > 0) {                                   // 222
                this.emit('change', {                                                                    // 223
                    action: 'insert',                                                                    // 224
                    id: result,                                                                          // 225
                    data: _.extend({}, record),                                                          // 226
                    oplog: false                                                                         // 227
                });                                                                                      // 223
            }                                                                                            // 229
                                                                                                         //
            record._id = result;                                                                         // 231
            return result;                                                                               // 233
        }                                                                                                // 234
                                                                                                         //
        return insert;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.update = function () {                                                    //
        function update(query, _update) {                                                                //
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};        // 236
            this.setUpdatedAt(_update, true, query);                                                     // 237
            var strategy = this.defineSyncStrategy(query, _update, options);                             // 239
            var ids = [];                                                                                // 240
                                                                                                         //
            if (!isOplogEnabled && this.listenerCount('change') > 0 && strategy === 'db') {              // 241
                var findOptions = {                                                                      // 242
                    fields: {                                                                            // 242
                        _id: 1                                                                           // 242
                    }                                                                                    // 242
                };                                                                                       // 242
                var records = options.multi ? this.find(query, findOptions).fetch() : this.findOne(query, findOptions) || [];
                                                                                                         //
                if (!Array.isArray(records)) {                                                           // 244
                    records = [records];                                                                 // 245
                }                                                                                        // 246
                                                                                                         //
                ids = records.map(function (item) {                                                      // 248
                    return item._id;                                                                     // 248
                });                                                                                      // 248
                                                                                                         //
                if (options.upsert !== true && this.updateHasPositionalOperator(_update) === false) {    // 249
                    query = {                                                                            // 250
                        _id: {                                                                           // 251
                            $in: ids                                                                     // 252
                        }                                                                                // 251
                    };                                                                                   // 250
                }                                                                                        // 255
            }                                                                                            // 256
                                                                                                         //
            var result = this.originals.update(query, _update, options);                                 // 258
                                                                                                         //
            if (!isOplogEnabled && this.listenerCount('change') > 0) {                                   // 260
                if (strategy === 'db') {                                                                 // 261
                    if (options.upsert === true) {                                                       // 262
                        if (result.insertedId) {                                                         // 263
                            this.emit('change', {                                                        // 264
                                action: 'insert',                                                        // 265
                                id: result.insertedId,                                                   // 266
                                data: this.findOne({                                                     // 267
                                    _id: result.insertedId                                               // 267
                                }),                                                                      // 267
                                oplog: false                                                             // 268
                            });                                                                          // 264
                            return;                                                                      // 270
                        }                                                                                // 271
                                                                                                         //
                        query = {                                                                        // 273
                            _id: {                                                                       // 274
                                $in: ids                                                                 // 275
                            }                                                                            // 274
                        };                                                                               // 273
                    }                                                                                    // 278
                                                                                                         //
                    var _records = options.multi ? this.find(query).fetch() : this.findOne(query) || [];
                                                                                                         //
                    if (!Array.isArray(_records)) {                                                      // 281
                        _records = [_records];                                                           // 282
                    }                                                                                    // 283
                                                                                                         //
                    for (var _iterator = _records, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                        var _ref;                                                                        // 284
                                                                                                         //
                        if (_isArray) {                                                                  // 284
                            if (_i >= _iterator.length) break;                                           // 284
                            _ref = _iterator[_i++];                                                      // 284
                        } else {                                                                         // 284
                            _i = _iterator.next();                                                       // 284
                            if (_i.done) break;                                                          // 284
                            _ref = _i.value;                                                             // 284
                        }                                                                                // 284
                                                                                                         //
                        var record = _ref;                                                               // 284
                        this.emit('change', {                                                            // 285
                            action: 'update:record',                                                     // 286
                            id: record._id,                                                              // 287
                            data: record,                                                                // 288
                            oplog: false                                                                 // 289
                        });                                                                              // 285
                    }                                                                                    // 291
                } else {                                                                                 // 292
                    this.emit('change', {                                                                // 293
                        action: 'update:query',                                                          // 294
                        id: undefined,                                                                   // 295
                        data: {                                                                          // 296
                            query: query,                                                                // 297
                            update: _update,                                                             // 298
                            options: options                                                             // 299
                        },                                                                               // 296
                        oplog: false                                                                     // 301
                    });                                                                                  // 293
                }                                                                                        // 303
            }                                                                                            // 304
                                                                                                         //
            return result;                                                                               // 305
        }                                                                                                // 306
                                                                                                         //
        return update;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.upsert = function () {                                                    //
        function upsert(query, update) {                                                                 //
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};        // 308
            options.upsert = true;                                                                       // 309
            options._returnObject = true;                                                                // 310
            return this.update(query, update, options);                                                  // 311
        }                                                                                                // 312
                                                                                                         //
        return upsert;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.remove = function () {                                                    //
        function remove(query) {                                                                         //
            var records = this.model.find(query).fetch();                                                // 315
            var ids = [];                                                                                // 317
                                                                                                         //
            for (var _iterator2 = records, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                var _ref2;                                                                               // 318
                                                                                                         //
                if (_isArray2) {                                                                         // 318
                    if (_i2 >= _iterator2.length) break;                                                 // 318
                    _ref2 = _iterator2[_i2++];                                                           // 318
                } else {                                                                                 // 318
                    _i2 = _iterator2.next();                                                             // 318
                    if (_i2.done) break;                                                                 // 318
                    _ref2 = _i2.value;                                                                   // 318
                }                                                                                        // 318
                                                                                                         //
                var record = _ref2;                                                                      // 318
                ids.push(record._id);                                                                    // 319
                record._deletedAt = new Date();                                                          // 321
                record.__collection__ = this.name;                                                       // 322
                trash.upsert({                                                                           // 324
                    _id: record._id                                                                      // 324
                }, _.omit(record, '_id'));                                                               // 324
            }                                                                                            // 325
                                                                                                         //
            query = {                                                                                    // 327
                _id: {                                                                                   // 327
                    $in: ids                                                                             // 327
                }                                                                                        // 327
            };                                                                                           // 327
            var result = this.originals.remove(query);                                                   // 329
                                                                                                         //
            if (!isOplogEnabled && this.listenerCount('change') > 0) {                                   // 331
                for (var _iterator3 = records, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                    var _ref3;                                                                           // 332
                                                                                                         //
                    if (_isArray3) {                                                                     // 332
                        if (_i3 >= _iterator3.length) break;                                             // 332
                        _ref3 = _iterator3[_i3++];                                                       // 332
                    } else {                                                                             // 332
                        _i3 = _iterator3.next();                                                         // 332
                        if (_i3.done) break;                                                             // 332
                        _ref3 = _i3.value;                                                               // 332
                    }                                                                                    // 332
                                                                                                         //
                    var _record = _ref3;                                                                 // 332
                    this.emit('change', {                                                                // 333
                        action: 'remove',                                                                // 334
                        id: _record._id,                                                                 // 335
                        data: _.extend({}, _record),                                                     // 336
                        oplog: false                                                                     // 337
                    });                                                                                  // 333
                }                                                                                        // 339
            }                                                                                            // 340
                                                                                                         //
            return result;                                                                               // 342
        }                                                                                                // 343
                                                                                                         //
        return remove;                                                                                   //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.insertOrUpsert = function () {                                            //
        function insertOrUpsert() {                                                                      //
            for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {    // 345
                args[_key2] = arguments[_key2];                                                          // 345
            }                                                                                            // 345
                                                                                                         //
            if (args[0] && args[0]._id) {                                                                // 346
                var _id = args[0]._id;                                                                   // 347
                delete args[0]._id;                                                                      // 348
                args.unshift({                                                                           // 349
                    _id: _id                                                                             // 350
                });                                                                                      // 349
                this.upsert.apply(this, args);                                                           // 353
                return _id;                                                                              // 354
            } else {                                                                                     // 355
                return this.insert.apply(this, args);                                                    // 356
            }                                                                                            // 357
        }                                                                                                // 358
                                                                                                         //
        return insertOrUpsert;                                                                           //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.allow = function () {                                                     //
        function allow() {                                                                               //
            var _model3;                                                                                 // 360
                                                                                                         //
            return (_model3 = this.model).allow.apply(_model3, arguments);                               // 361
        }                                                                                                // 362
                                                                                                         //
        return allow;                                                                                    //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.deny = function () {                                                      //
        function deny() {                                                                                //
            var _model4;                                                                                 // 364
                                                                                                         //
            return (_model4 = this.model).deny.apply(_model4, arguments);                                // 365
        }                                                                                                // 366
                                                                                                         //
        return deny;                                                                                     //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.ensureIndex = function () {                                               //
        function ensureIndex() {                                                                         //
            var _model5;                                                                                 // 368
                                                                                                         //
            return (_model5 = this.model)._ensureIndex.apply(_model5, arguments);                        // 369
        }                                                                                                // 370
                                                                                                         //
        return ensureIndex;                                                                              //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.dropIndex = function () {                                                 //
        function dropIndex() {                                                                           //
            var _model6;                                                                                 // 372
                                                                                                         //
            return (_model6 = this.model)._dropIndex.apply(_model6, arguments);                          // 373
        }                                                                                                // 374
                                                                                                         //
        return dropIndex;                                                                                //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.tryEnsureIndex = function () {                                            //
        function tryEnsureIndex() {                                                                      //
            try {                                                                                        // 377
                return this.ensureIndex.apply(this, arguments);                                          // 378
            } catch (e) {                                                                                // 379
                var _console;                                                                            // 379
                                                                                                         //
                (_console = console).error.apply(_console, ['Error creating index:', this.name, '->'].concat(Array.prototype.slice.call(arguments), [e]));
            }                                                                                            // 381
        }                                                                                                // 382
                                                                                                         //
        return tryEnsureIndex;                                                                           //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.tryDropIndex = function () {                                              //
        function tryDropIndex() {                                                                        //
            try {                                                                                        // 385
                return this.dropIndex.apply(this, arguments);                                            // 386
            } catch (e) {                                                                                // 387
                var _console2;                                                                           // 387
                                                                                                         //
                (_console2 = console).error.apply(_console2, ['Error dropping index:', this.name, '->'].concat(Array.prototype.slice.call(arguments), [e]));
            }                                                                                            // 389
        }                                                                                                // 390
                                                                                                         //
        return tryDropIndex;                                                                             //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.trashFind = function () {                                                 //
        function trashFind(query, options) {                                                             //
            query.__collection__ = this.name;                                                            // 393
            return trash.find(query, options);                                                           // 395
        }                                                                                                // 396
                                                                                                         //
        return trashFind;                                                                                //
    }();                                                                                                 //
                                                                                                         //
    ModelsLilyBaseDb.prototype.trashFindDeletedAfter = function () {                                     //
        function trashFindDeletedAfter(deletedAt) {                                                      //
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};          // 398
            var options = arguments[2];                                                                  // 398
            query.__collection__ = this.name;                                                            // 399
            query._deletedAt = {                                                                         // 400
                $gt: deletedAt                                                                           // 401
            };                                                                                           // 400
            return trash.find(query, options);                                                           // 404
        }                                                                                                // 405
                                                                                                         //
        return trashFindDeletedAfter;                                                                    //
    }();                                                                                                 //
                                                                                                         //
    (0, _createClass3.default)(ModelsLilyBaseDb, [{                                                      //
        key: "baseName",                                                                                 //
        get: function () {                                                                               //
            return baseName;                                                                             // 42
        }                                                                                                // 43
    }]);                                                                                                 //
    return ModelsLilyBaseDb;                                                                             //
}(EventEmitter);                                                                                         //
                                                                                                         //
module.exportDefault(ModelsLilyBaseDb);                                                                  // 1
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/lily:lib/server/models/_LilyBase.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['lily:lib'] = {};

})();

//# sourceMappingURL=lily_lib.js.map
