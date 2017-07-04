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
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var Symbol = Package['ecmascript-runtime-server'].Symbol;
var Map = Package['ecmascript-runtime-server'].Map;
var Set = Package['ecmascript-runtime-server'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"lily:ui-chart-point":{"server":{"models":{"PointHistory.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/lily_ui-chart-point/server/models/PointHistory.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require("babel-runtime/helpers/inherits");                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
/**                                                                                                                   // 1
 * Created by jungwoo on 2017. 7. 1..                                                                                 //
 */var PointHistory = function (_RocketChat$models$_L) {                                                              //
    (0, _inherits3.default)(PointHistory, _RocketChat$models$_L);                                                     //
                                                                                                                      //
    function PointHistory() {                                                                                         // 5
        (0, _classCallCheck3.default)(this, PointHistory);                                                            // 5
                                                                                                                      //
        var _this = (0, _possibleConstructorReturn3.default)(this, _RocketChat$models$_L.call(this, 'PointHistory'));
                                                                                                                      //
        _this.tryEnsureIndex({                                                                                        // 8
            'u._id': 1                                                                                                // 8
        });                                                                                                           // 8
                                                                                                                      //
        _this.tryEnsureIndex({                                                                                        // 9
            'ts': 1                                                                                                   // 9
        });                                                                                                           // 9
                                                                                                                      //
        return _this;                                                                                                 // 5
    }                                                                                                                 // 10
                                                                                                                      //
    PointHistory.prototype.insertLilyPointHistory = function () {                                                     //
        function insertLilyPointHistory(pointInfo) {                                                                  //
            console.log("insertLilyPointHistory");                                                                    // 13
            return this.insert(pointInfo);                                                                            // 14
        }                                                                                                             // 15
                                                                                                                      //
        return insertLilyPointHistory;                                                                                //
    }();                                                                                                              //
                                                                                                                      //
    PointHistory.prototype.findAllPointHistory = function () {                                                        //
        function findAllPointHistory() {}                                                                             //
                                                                                                                      //
        return findAllPointHistory;                                                                                   //
    }();                                                                                                              //
                                                                                                                      //
    PointHistory.prototype.findUserPointHistory = function () {                                                       //
        function findUserPointHistory() {}                                                                            //
                                                                                                                      //
        return findUserPointHistory;                                                                                  //
    }();                                                                                                              //
                                                                                                                      //
    return PointHistory;                                                                                              //
}(RocketChat.models._LilyBase);                                                                                       //
                                                                                                                      //
RocketChat.models.PointHistory = new PointHistory();                                                                  // 26
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pointManager.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/lily_ui-chart-point/server/pointManager.js                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
//Meteor.call('pointCharging', { _id: msg._id });                                                                     // 1
var defaultCreatePoint = 100;                                                                                         // 2
Meteor.methods({                                                                                                      // 4
    //포인트 충전                                                                                                          // 5
    /*                                                                                                                // 6
     chargingType : 충전 유형                                                                                             //
     NEW_USER 신규 회원,                                                                                                  //
     CASH : 결재 ,                                                                                                      //
     COUPON : 쿠폰 사용,                                                                                                  //
     PROMOTION : 프로모션                                                                                                 //
     */pointCharging: function (arguments) {                                                                          //
        console.log("##### LilyChat Point Charging Method Called #####");                                             // 14
        console.log("Parameter newUserId:" + arguments.userId);                                                       // 16
        console.log("Parameter chargingType:" + arguments.charginType); //현재 진행하는 이벤트를 확인                             // 17
                                                                                                                      //
        var event = {};                                                                                               // 21
        console.log("# Event Method Called."); //포인트 충전                                                               // 22
                                                                                                                      //
        console.log("# Point Charing.");                                                                              // 24
        var user = Meteor.user();                                                                                     // 26
        var point = {                                                                                                 // 27
            _id: Random.id(),                                                                                         // 28
            u: {                                                                                                      // 29
                _id: arguments._id,                                                                                   // 30
                username: arguments.username                                                                          // 31
            },                                                                                                        // 29
            chargingType: arguments.chargingType,                                                                     // 33
            point: defaultCreatePoint,                                                                                // 34
            ts: new Date(),                                                                                           // 35
            event: event                                                                                              // 36
        }; //let user = Accounts.findUserByUsername(arguments.userId)                                                 // 27
                                                                                                                      //
        console.log("# Point Data : " + point); // console.log("# Point Data : " + user._id);                         // 39
                                                                                                                      //
        RocketChat.models.PointHistory.insertLilyPointHistory(point); // RocketCat.callbacks.run('beforeSavePoint', point);
        // RocketCat.promises.run('onPointCharging', point).then(function (point) {                                   // 43
        //     Point.insert(point);                                                                                   // 44
        //     return RocketCat.callbacks.run('afterSaveCharging', message);                                          // 45
        // });                                                                                                        // 46
                                                                                                                      //
        console.log("##### LilyChat Point Charging Method END #####");                                                // 48
    },                                                                                                                // 49
    balance: function (callback) {},                                                                                  // 50
    //채널 입장 시 point 차감                                                                                                // 54
    newJoinRoom: function (roomId, store, file) {                                                                     // 55
        var msgData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};                         // 55
                                                                                                                      //
        if (!Meteor.userId()) {                                                                                       // 56
            throw new Meteor.Error('error-invalid-user', 'Invalid user', {                                            // 57
                method: 'sendFileMessage'                                                                             // 57
            });                                                                                                       // 57
        }                                                                                                             // 58
                                                                                                                      //
        var user = Meteor.user();                                                                                     // 60
    }                                                                                                                 // 61
});                                                                                                                   // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./node_modules/meteor/lily:ui-chart-point/server/models/PointHistory.js");
require("./node_modules/meteor/lily:ui-chart-point/server/pointManager.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['lily:ui-chart-point'] = {};

})();

//# sourceMappingURL=lily_ui-chart-point.js.map
