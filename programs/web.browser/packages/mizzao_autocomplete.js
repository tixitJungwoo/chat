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
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Template = Package['templating-runtime'].Template;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var _ = Package.underscore._;
var Mongo = Package.mongo.Mongo;
var DDP = Package['ddp-client'].DDP;
var getCaretCoordinates = Package['dandv:caret-position'].getCaretCoordinates;
var HTML = Package.htmljs.HTML;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var Spacebars = Package.spacebars.Spacebars;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var __coffeescriptShare, AutocompleteTest;

var require = meteorInstall({"node_modules":{"meteor":{"mizzao:autocomplete":{"template.inputs.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao_autocomplete/template.inputs.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("inputAutocomplete");                                                                            // 2
Template["inputAutocomplete"] = new Template("Template.inputAutocomplete", (function() {                              // 3
  var view = this;                                                                                                    // 4
  return [ HTML.INPUT(HTML.Attrs({                                                                                    // 5
    type: "text"                                                                                                      // 6
  }, function() {                                                                                                     // 7
    return Spacebars.attrMustache(view.lookup("attributes"));                                                         // 8
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];                                   // 9
}));                                                                                                                  // 10
                                                                                                                      // 11
Template.__checkName("textareaAutocomplete");                                                                         // 12
Template["textareaAutocomplete"] = new Template("Template.textareaAutocomplete", (function() {                        // 13
  var view = this;                                                                                                    // 14
  return [ HTML.TEXTAREA(HTML.Attrs(function() {                                                                      // 15
    return Spacebars.attrMustache(view.lookup("attributes"));                                                         // 16
  }, {                                                                                                                // 17
    value: function() {                                                                                               // 18
      return Blaze._InOuterTemplateScope(view, function() {                                                           // 19
        return Spacebars.include(function() {                                                                         // 20
          return Spacebars.call(view.templateContentBlock);                                                           // 21
        });                                                                                                           // 22
      });                                                                                                             // 23
    }                                                                                                                 // 24
  })), "\n    ", Spacebars.include(view.lookupTemplate("autocompleteContainer")) ];                                   // 25
}));                                                                                                                  // 26
                                                                                                                      // 27
Template.__checkName("_autocompleteContainer");                                                                       // 28
Template["_autocompleteContainer"] = new Template("Template._autocompleteContainer", (function() {                    // 29
  var view = this;                                                                                                    // 30
  return Blaze.If(function() {                                                                                        // 31
    return Spacebars.call(view.lookup("isShowing"));                                                                  // 32
  }, function() {                                                                                                     // 33
    return [ "\n    ", HTML.DIV({                                                                                     // 34
      class: "-autocomplete-container"                                                                                // 35
    }, "\n        ", Blaze.If(function() {                                                                            // 36
      return Spacebars.call(view.lookup("isLoaded"));                                                                 // 37
    }, function() {                                                                                                   // 38
      return [ "\n            ", Blaze.Unless(function() {                                                            // 39
        return Spacebars.call(view.lookup("empty"));                                                                  // 40
      }, function() {                                                                                                 // 41
        return [ "\n            ", HTML.UL({                                                                          // 42
          class: "-autocomplete-list"                                                                                 // 43
        }, "\n                ", Blaze.Each(function() {                                                              // 44
          return Spacebars.call(view.lookup("filteredList"));                                                         // 45
        }, function() {                                                                                               // 46
          return [ "\n                ", HTML.LI({                                                                    // 47
            class: "-autocomplete-item"                                                                               // 48
          }, "\n                    ", Spacebars.With(function() {                                                    // 49
            return Spacebars.call(Spacebars.dot(view.lookup(".."), "currentTemplate"));                               // 50
          }, function() {                                                                                             // 51
            return [ "\n                        ", Spacebars.With(function() {                                        // 52
              return Spacebars.call(view.lookup(".."));                                                               // 53
            }, function() {                                                                                           // 54
              return [ "  \n                            ", Spacebars.include(view.lookupTemplate("..")), "  \n                        " ];
            }), "\n                    " ];                                                                           // 56
          }), "\n                "), "\n                " ];                                                          // 57
        }), "\n            "), "\n            " ];                                                                    // 58
      }, function() {                                                                                                 // 59
        return [ "\n                ", Spacebars.include(view.lookupTemplate("noMatchTemplate")), "\n            " ];
      }), "\n        " ];                                                                                             // 61
    }, function() {                                                                                                   // 62
      return [ "\n            ", Spacebars.include(view.lookupTemplate("loading")), "\n        " ];                   // 63
    }), "\n    "), "\n    " ];                                                                                        // 64
  });                                                                                                                 // 65
}));                                                                                                                  // 66
                                                                                                                      // 67
Template.__checkName("_noMatch");                                                                                     // 68
Template["_noMatch"] = new Template("Template._noMatch", (function() {                                                // 69
  var view = this;                                                                                                    // 70
  return HTML.Raw("(<i>no matches</i>)");                                                                             // 71
}));                                                                                                                  // 72
                                                                                                                      // 73
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"autocomplete-client.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao_autocomplete/autocomplete-client.coffee.js                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var AutoCompleteRecords,                                                                                              // 1
    getField,                                                                                                         // 1
    getFindParams,                                                                                                    // 1
    getRegExp,                                                                                                        // 1
    isServerSearch,                                                                                                   // 1
    isWholeField,                                                                                                     // 1
    validateRule,                                                                                                     // 1
    bind = function (fn, me) {                                                                                        // 1
  return function () {                                                                                                // 1
    return fn.apply(me, arguments);                                                                                   // 1
  };                                                                                                                  // 1
};                                                                                                                    // 1
                                                                                                                      //
AutoCompleteRecords = new Mongo.Collection("autocompleteRecords");                                                    // 1
                                                                                                                      //
isServerSearch = function (rule) {                                                                                    // 3
  return _.isString(rule.collection);                                                                                 // 7
};                                                                                                                    // 3
                                                                                                                      //
validateRule = function (rule) {                                                                                      // 5
  if (rule.subscription != null && !Match.test(rule.collection, String)) {                                            // 6
    throw new Error("Collection name must be specified as string for server-side search");                            // 7
  }                                                                                                                   // 13
                                                                                                                      //
  if (rule.callback != null) {                                                                                        // 10
    return console.warn("autocomplete no longer supports callbacks; use event listeners instead.");                   // 15
  }                                                                                                                   // 16
};                                                                                                                    // 5
                                                                                                                      //
isWholeField = function (rule) {                                                                                      // 13
  return !rule.token;                                                                                                 // 15
};                                                                                                                    // 13
                                                                                                                      //
getRegExp = function (rule) {                                                                                         // 17
  if (!isWholeField(rule)) {                                                                                          // 18
    return new RegExp('(^|\\b|\\s)' + rule.token + '([\\w.]*)$');                                                     // 25
  } else {                                                                                                            // 18
    return new RegExp('(^)(.*)$');                                                                                    // 27
  }                                                                                                                   // 28
};                                                                                                                    // 17
                                                                                                                      //
getFindParams = function (rule, filter, limit) {                                                                      // 25
  var options, selector, sortspec;                                                                                    // 28
  selector = _.extend({}, rule.filter || {});                                                                         // 28
  options = {                                                                                                         // 29
    limit: limit                                                                                                      // 29
  };                                                                                                                  // 29
                                                                                                                      //
  if (!filter) {                                                                                                      // 32
    return [selector, options];                                                                                       // 32
  }                                                                                                                   // 39
                                                                                                                      //
  if (rule.sort && rule.field) {                                                                                      // 34
    sortspec = {};                                                                                                    // 35
    sortspec[rule.field] = 1;                                                                                         // 37
    options.sort = sortspec;                                                                                          // 38
  }                                                                                                                   // 44
                                                                                                                      //
  if (_.isFunction(rule.selector)) {                                                                                  // 40
    _.extend(selector, rule.selector(filter));                                                                        // 42
  } else {                                                                                                            // 40
    selector[rule.field] = {                                                                                          // 44
      $regex: rule.matchAll ? filter : "^" + filter,                                                                  // 45
      $options: typeof rule.options === 'undefined' ? 'i' : rule.options                                              // 47
    };                                                                                                                // 44
  }                                                                                                                   // 52
                                                                                                                      //
  return [selector, options];                                                                                         // 50
};                                                                                                                    // 25
                                                                                                                      //
getField = function (obj, str) {                                                                                      // 52
  var j, key, len, ref;                                                                                               // 53
  ref = str.split(".");                                                                                               // 53
                                                                                                                      //
  for (j = 0, len = ref.length; j < len; j++) {                                                                       // 53
    key = ref[j];                                                                                                     // 60
    obj = obj[key];                                                                                                   // 53
  }                                                                                                                   // 53
                                                                                                                      //
  return obj;                                                                                                         // 54
};                                                                                                                    // 52
                                                                                                                      //
this.AutoComplete = function () {                                                                                     // 56
  AutoComplete.KEYS = [40, 38, 13, 27, 9];                                                                            // 58
                                                                                                                      //
  function AutoComplete(settings) {                                                                                   // 66
    this.onItemClick = bind(this.onItemClick, this);                                                                  // 70
    var j, len, ref, rule;                                                                                            // 67
    this.limit = settings.limit || 5;                                                                                 // 67
    this.position = settings.position || "bottom";                                                                    // 68
    this.rules = settings.rules;                                                                                      // 70
    ref = this.rules;                                                                                                 // 71
                                                                                                                      //
    for (j = 0, len = ref.length; j < len; j++) {                                                                     // 71
      rule = ref[j];                                                                                                  // 77
      validateRule(rule);                                                                                             // 71
    }                                                                                                                 // 71
                                                                                                                      //
    this.expressions = function () {                                                                                  // 73
      var k, len1, ref1, results;                                                                                     // 81
      ref1 = this.rules;                                                                                              // 73
      results = [];                                                                                                   // 73
                                                                                                                      //
      for (k = 0, len1 = ref1.length; k < len1; k++) {                                                                // 84
        rule = ref1[k];                                                                                               // 85
        results.push(getRegExp(rule));                                                                                // 86
      }                                                                                                               // 73
                                                                                                                      //
      return results;                                                                                                 // 88
    }.call(this);                                                                                                     // 89
                                                                                                                      //
    this.matched = -1;                                                                                                // 75
    this.loaded = true;                                                                                               // 76
    this.ruleDep = new Deps.Dependency();                                                                             // 79
    this.filterDep = new Deps.Dependency();                                                                           // 80
    this.loadingDep = new Deps.Dependency();                                                                          // 81
    this.sub = null;                                                                                                  // 85
    this.comp = Deps.autorun(function (_this) {                                                                       // 86
      return function () {                                                                                            // 97
        var filter, options, ref1, ref2, selector, subName;                                                           // 88
                                                                                                                      //
        if ((ref1 = _this.sub) != null) {                                                                             // 99
          ref1.stop();                                                                                                // 100
        }                                                                                                             // 101
                                                                                                                      //
        if (!((rule = _this.matchedRule()) && (filter = _this.getFilter()) !== null)) {                               // 90
          return;                                                                                                     // 90
        }                                                                                                             // 104
                                                                                                                      //
        if (!isServerSearch(rule)) {                                                                                  // 93
          _this.setLoaded(true);                                                                                      // 94
                                                                                                                      //
          return;                                                                                                     // 95
        }                                                                                                             // 108
                                                                                                                      //
        ref2 = getFindParams(rule, filter, _this.limit), selector = ref2[0], options = ref2[1];                       // 97
                                                                                                                      //
        _this.setLoaded(false);                                                                                       // 100
                                                                                                                      //
        subName = rule.subscription || "autocomplete-recordset";                                                      // 101
        return _this.sub = Meteor.subscribe(subName, selector, options, rule.collection, function () {                // 112
          return _this.setLoaded(true);                                                                               // 113
        });                                                                                                           // 102
      };                                                                                                              // 86
    }(this));                                                                                                         // 86
  }                                                                                                                   // 66
                                                                                                                      //
  AutoComplete.prototype.teardown = function () {                                                                     // 119
    return this.comp.stop();                                                                                          // 120
  };                                                                                                                  // 105
                                                                                                                      //
  AutoComplete.prototype.matchedRule = function () {                                                                  // 123
    this.ruleDep.depend();                                                                                            // 111
                                                                                                                      //
    if (this.matched >= 0) {                                                                                          // 112
      return this.rules[this.matched];                                                                                // 126
    } else {                                                                                                          // 112
      return null;                                                                                                    // 128
    }                                                                                                                 // 129
  };                                                                                                                  // 110
                                                                                                                      //
  AutoComplete.prototype.setMatchedRule = function (i) {                                                              // 132
    this.matched = i;                                                                                                 // 115
    return this.ruleDep.changed();                                                                                    // 134
  };                                                                                                                  // 114
                                                                                                                      //
  AutoComplete.prototype.getFilter = function () {                                                                    // 137
    this.filterDep.depend();                                                                                          // 119
    return this.filter;                                                                                               // 120
  };                                                                                                                  // 118
                                                                                                                      //
  AutoComplete.prototype.setFilter = function (x) {                                                                   // 142
    this.filter = x;                                                                                                  // 123
    this.filterDep.changed();                                                                                         // 124
    return this.filter;                                                                                               // 125
  };                                                                                                                  // 122
                                                                                                                      //
  AutoComplete.prototype.isLoaded = function () {                                                                     // 148
    this.loadingDep.depend();                                                                                         // 128
    return this.loaded;                                                                                               // 129
  };                                                                                                                  // 127
                                                                                                                      //
  AutoComplete.prototype.setLoaded = function (val) {                                                                 // 153
    if (val === this.loaded) {                                                                                        // 132
      return;                                                                                                         // 132
    }                                                                                                                 // 156
                                                                                                                      //
    this.loaded = val;                                                                                                // 133
    return this.loadingDep.changed();                                                                                 // 158
  };                                                                                                                  // 131
                                                                                                                      //
  AutoComplete.prototype.onKeyUp = function () {                                                                      // 161
    var breakLoop, i, matches, results, startpos, val;                                                                // 137
                                                                                                                      //
    if (!this.$element) {                                                                                             // 137
      return;                                                                                                         // 137
    }                                                                                                                 // 165
                                                                                                                      //
    startpos = this.element.selectionStart;                                                                           // 138
    val = this.getText().substring(0, startpos); /*                                                                   // 139
                                                   Matching on multiple expressions.                                  //
                                                   We always go from a matched state to an unmatched one              //
                                                   before going to a different matched one.                           //
                                                  */                                                                  //
    i = 0;                                                                                                            // 146
    breakLoop = false;                                                                                                // 147
    results = [];                                                                                                     // 148
                                                                                                                      //
    while (i < this.expressions.length) {                                                                             // 177
      matches = val.match(this.expressions[i]);                                                                       // 149
                                                                                                                      //
      if (!matches && this.matched === i) {                                                                           // 152
        this.setMatchedRule(-1);                                                                                      // 153
        breakLoop = true;                                                                                             // 154
      }                                                                                                               // 182
                                                                                                                      //
      if (matches && this.matched === -1) {                                                                           // 157
        this.setMatchedRule(i);                                                                                       // 158
        breakLoop = true;                                                                                             // 159
      }                                                                                                               // 186
                                                                                                                      //
      if (matches && this.filter !== matches[2]) {                                                                    // 162
        this.setFilter(matches[2]);                                                                                   // 163
        breakLoop = true;                                                                                             // 164
      }                                                                                                               // 190
                                                                                                                      //
      if (breakLoop) {                                                                                                // 166
        break;                                                                                                        // 166
      }                                                                                                               // 193
                                                                                                                      //
      results.push(i++);                                                                                              // 194
    }                                                                                                                 // 148
                                                                                                                      //
    return results;                                                                                                   // 196
  };                                                                                                                  // 136
                                                                                                                      //
  AutoComplete.prototype.onKeyDown = function (e) {                                                                   // 199
    if (this.matched === -1 || this.constructor.KEYS.indexOf(e.keyCode) < 0) {                                        // 170
      return;                                                                                                         // 170
    }                                                                                                                 // 202
                                                                                                                      //
    switch (e.keyCode) {                                                                                              // 172
      case 9:                                                                                                         // 172
      case 13:                                                                                                        // 172
        if (this.select()) {                                                                                          // 174
          e.preventDefault();                                                                                         // 175
          e.stopPropagation();                                                                                        // 176
        }                                                                                                             // 209
                                                                                                                      //
        break;                                                                                                        // 173
                                                                                                                      //
      case 40:                                                                                                        // 172
        e.preventDefault();                                                                                           // 179
        this.next();                                                                                                  // 180
        break;                                                                                                        // 178
                                                                                                                      //
      case 38:                                                                                                        // 172
        e.preventDefault();                                                                                           // 182
        this.prev();                                                                                                  // 183
        break;                                                                                                        // 181
                                                                                                                      //
      case 27:                                                                                                        // 172
        this.$element.blur();                                                                                         // 185
        this.hideList();                                                                                              // 186
    }                                                                                                                 // 172
  };                                                                                                                  // 169
                                                                                                                      //
  AutoComplete.prototype.onFocus = function () {                                                                      // 225
    return Meteor.defer(function (_this) {                                                                            // 226
      return function () {                                                                                            // 227
        return _this.onKeyUp();                                                                                       // 228
      };                                                                                                              // 193
    }(this));                                                                                                         // 193
  };                                                                                                                  // 190
                                                                                                                      //
  AutoComplete.prototype.onBlur = function () {                                                                       // 233
    return Meteor.setTimeout(function (_this) {                                                                       // 234
      return function () {                                                                                            // 235
        return _this.hideList();                                                                                      // 236
      };                                                                                                              // 198
    }(this), 500);                                                                                                    // 198
  };                                                                                                                  // 195
                                                                                                                      //
  AutoComplete.prototype.onItemClick = function (doc, e) {                                                            // 241
    return this.processSelection(doc, this.rules[this.matched]);                                                      // 242
  };                                                                                                                  // 202
                                                                                                                      //
  AutoComplete.prototype.onItemHover = function (doc, e) {                                                            // 245
    this.tmplInst.$(".-autocomplete-item").removeClass("selected");                                                   // 205
    return $(e.target).closest(".-autocomplete-item").addClass("selected");                                           // 247
  };                                                                                                                  // 204
                                                                                                                      //
  AutoComplete.prototype.filteredList = function () {                                                                 // 250
    var filter, options, ref, rule, selector;                                                                         // 210
    filter = this.getFilter();                                                                                        // 210
                                                                                                                      //
    if (this.matched === -1) {                                                                                        // 211
      return null;                                                                                                    // 211
    }                                                                                                                 // 255
                                                                                                                      //
    rule = this.rules[this.matched];                                                                                  // 213
                                                                                                                      //
    if (!(rule.token || filter)) {                                                                                    // 216
      return null;                                                                                                    // 216
    }                                                                                                                 // 259
                                                                                                                      //
    ref = getFindParams(rule, filter, this.limit), selector = ref[0], options = ref[1];                               // 218
    Meteor.defer(function (_this) {                                                                                   // 220
      return function () {                                                                                            // 262
        return _this.ensureSelection();                                                                               // 263
      };                                                                                                              // 220
    }(this));                                                                                                         // 220
                                                                                                                      //
    if (isServerSearch(rule)) {                                                                                       // 223
      return AutoCompleteRecords.find({}, options);                                                                   // 223
    }                                                                                                                 // 268
                                                                                                                      //
    return rule.collection.find(selector, options);                                                                   // 226
  };                                                                                                                  // 208
                                                                                                                      //
  AutoComplete.prototype.isShowing = function () {                                                                    // 272
    var rule, showing;                                                                                                // 229
    rule = this.matchedRule();                                                                                        // 229
    showing = rule != null && (rule.token || this.getFilter());                                                       // 231
                                                                                                                      //
    if (showing) {                                                                                                    // 234
      Meteor.defer(function (_this) {                                                                                 // 235
        return function () {                                                                                          // 278
          _this.positionContainer();                                                                                  // 236
                                                                                                                      //
          return _this.ensureSelection();                                                                             // 280
        };                                                                                                            // 235
      }(this));                                                                                                       // 235
    }                                                                                                                 // 283
                                                                                                                      //
    return showing;                                                                                                   // 239
  };                                                                                                                  // 228
                                                                                                                      //
  AutoComplete.prototype.select = function () {                                                                       // 287
    var doc, node;                                                                                                    // 243
    node = this.tmplInst.find(".-autocomplete-item.selected");                                                        // 243
                                                                                                                      //
    if (node == null) {                                                                                               // 244
      return false;                                                                                                   // 244
    }                                                                                                                 // 292
                                                                                                                      //
    doc = Blaze.getData(node);                                                                                        // 245
                                                                                                                      //
    if (!doc) {                                                                                                       // 246
      return false;                                                                                                   // 246
    }                                                                                                                 // 296
                                                                                                                      //
    this.processSelection(doc, this.rules[this.matched]);                                                             // 248
    return true;                                                                                                      // 249
  };                                                                                                                  // 242
                                                                                                                      //
  AutoComplete.prototype.processSelection = function (doc, rule) {                                                    // 301
    var replacement;                                                                                                  // 252
    replacement = getField(doc, rule.field);                                                                          // 252
                                                                                                                      //
    if (!isWholeField(rule)) {                                                                                        // 254
      this.replace(replacement, rule);                                                                                // 255
      this.hideList();                                                                                                // 256
    } else {                                                                                                          // 254
      this.setText(replacement);                                                                                      // 261
      this.onBlur();                                                                                                  // 266
    }                                                                                                                 // 310
                                                                                                                      //
    this.$element.trigger("autocompleteselect", doc);                                                                 // 268
  };                                                                                                                  // 251
                                                                                                                      //
  AutoComplete.prototype.replace = function (replacement) {                                                           // 314
    var finalFight, fullStuff, newPosition, posfix, separator, startpos, val;                                         // 273
    startpos = this.element.selectionStart;                                                                           // 273
    fullStuff = this.getText();                                                                                       // 274
    val = fullStuff.substring(0, startpos);                                                                           // 275
    val = val.replace(this.expressions[this.matched], "$1" + this.rules[this.matched].token + replacement);           // 276
    posfix = fullStuff.substring(startpos, fullStuff.length);                                                         // 277
    separator = posfix.match(/^\s/) ? "" : " ";                                                                       // 278
    finalFight = val + separator + posfix;                                                                            // 279
    this.setText(finalFight);                                                                                         // 280
    newPosition = val.length + 1;                                                                                     // 282
    this.element.setSelectionRange(newPosition, newPosition);                                                         // 283
  };                                                                                                                  // 272
                                                                                                                      //
  AutoComplete.prototype.hideList = function () {                                                                     // 328
    this.setMatchedRule(-1);                                                                                          // 287
    return this.setFilter(null);                                                                                      // 330
  };                                                                                                                  // 286
                                                                                                                      //
  AutoComplete.prototype.getText = function () {                                                                      // 333
    return this.$element.val() || this.$element.text();                                                               // 291
  };                                                                                                                  // 290
                                                                                                                      //
  AutoComplete.prototype.setText = function (text) {                                                                  // 337
    if (this.$element.is("input,textarea")) {                                                                         // 294
      return this.$element.val(text);                                                                                 // 339
    } else {                                                                                                          // 294
      return this.$element.html(text);                                                                                // 341
    }                                                                                                                 // 342
  }; /*                                                                                                               // 293
       Rendering functions                                                                                            //
      */                                                                                                              //
                                                                                                                      //
  AutoComplete.prototype.positionContainer = function () {                                                            // 350
    var offset, pos, position, rule;                                                                                  // 304
    position = this.$element.position();                                                                              // 304
    rule = this.matchedRule();                                                                                        // 306
    offset = getCaretCoordinates(this.element, this.element.selectionStart);                                          // 308
                                                                                                                      //
    if (rule != null && isWholeField(rule)) {                                                                         // 312
      pos = {                                                                                                         // 313
        left: position.left,                                                                                          // 314
        width: this.$element.outerWidth()                                                                             // 315
      };                                                                                                              // 314
    } else {                                                                                                          // 312
      pos = {                                                                                                         // 317
        left: position.left + offset.left                                                                             // 318
      };                                                                                                              // 318
    }                                                                                                                 // 364
                                                                                                                      //
    if (this.position === "top") {                                                                                    // 321
      pos.bottom = this.$element.offsetParent().height() - position.top - offset.top;                                 // 322
    } else {                                                                                                          // 321
      pos.top = position.top + offset.top + parseInt(this.$element.css('font-size'));                                 // 324
    }                                                                                                                 // 369
                                                                                                                      //
    return this.tmplInst.$(".-autocomplete-container").css(pos);                                                      // 370
  };                                                                                                                  // 302
                                                                                                                      //
  AutoComplete.prototype.ensureSelection = function () {                                                              // 373
    var selectedItem;                                                                                                 // 330
    selectedItem = this.tmplInst.$(".-autocomplete-item.selected");                                                   // 330
                                                                                                                      //
    if (!selectedItem.length) {                                                                                       // 332
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");                                 // 377
    }                                                                                                                 // 378
  };                                                                                                                  // 328
                                                                                                                      //
  AutoComplete.prototype.next = function () {                                                                         // 381
    var currentItem, next;                                                                                            // 338
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");                                                    // 338
                                                                                                                      //
    if (!currentItem.length) {                                                                                        // 339
      return;                                                                                                         // 339
    }                                                                                                                 // 386
                                                                                                                      //
    currentItem.removeClass("selected");                                                                              // 340
    next = currentItem.next();                                                                                        // 342
                                                                                                                      //
    if (next.length) {                                                                                                // 343
      return next.addClass("selected");                                                                               // 390
    } else {                                                                                                          // 343
      return this.tmplInst.$(".-autocomplete-item:first-child").addClass("selected");                                 // 392
    }                                                                                                                 // 393
  };                                                                                                                  // 337
                                                                                                                      //
  AutoComplete.prototype.prev = function () {                                                                         // 396
    var currentItem, prev;                                                                                            // 350
    currentItem = this.tmplInst.$(".-autocomplete-item.selected");                                                    // 350
                                                                                                                      //
    if (!currentItem.length) {                                                                                        // 351
      return;                                                                                                         // 351
    }                                                                                                                 // 401
                                                                                                                      //
    currentItem.removeClass("selected");                                                                              // 352
    prev = currentItem.prev();                                                                                        // 354
                                                                                                                      //
    if (prev.length) {                                                                                                // 355
      return prev.addClass("selected");                                                                               // 405
    } else {                                                                                                          // 355
      return this.tmplInst.$(".-autocomplete-item:last-child").addClass("selected");                                  // 407
    }                                                                                                                 // 408
  };                                                                                                                  // 349
                                                                                                                      //
  AutoComplete.prototype.currentTemplate = function () {                                                              // 411
    return this.rules[this.matched].template;                                                                         // 412
  };                                                                                                                  // 362
                                                                                                                      //
  return AutoComplete;                                                                                                // 415
}();                                                                                                                  // 417
                                                                                                                      //
AutocompleteTest = {                                                                                                  // 364
  records: AutoCompleteRecords,                                                                                       // 365
  getRegExp: getRegExp,                                                                                               // 366
  getFindParams: getFindParams                                                                                        // 367
};                                                                                                                    // 365
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"templates.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/mizzao_autocomplete/templates.coffee.js                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var acEvents, attributes, autocompleteHelpers;                                                                        // 2
acEvents = {                                                                                                          // 2
  "keydown": function (e, t) {                                                                                        // 3
    return t.ac.onKeyDown(e);                                                                                         // 5
  },                                                                                                                  // 3
  "keyup": function (e, t) {                                                                                          // 4
    return t.ac.onKeyUp(e);                                                                                           // 8
  },                                                                                                                  // 3
  "focus": function (e, t) {                                                                                          // 5
    return t.ac.onFocus(e);                                                                                           // 11
  },                                                                                                                  // 3
  "blur": function (e, t) {                                                                                           // 6
    return t.ac.onBlur(e);                                                                                            // 14
  }                                                                                                                   // 3
};                                                                                                                    // 3
Template.inputAutocomplete.events(acEvents);                                                                          // 8
Template.textareaAutocomplete.events(acEvents);                                                                       // 9
                                                                                                                      //
attributes = function () {                                                                                            // 11
  return _.omit(this, 'settings');                                                                                    // 23
};                                                                                                                    // 11
                                                                                                                      //
autocompleteHelpers = {                                                                                               // 13
  attributes: attributes,                                                                                             // 14
  autocompleteContainer: new Template('AutocompleteContainer', function () {                                          // 15
    var ac;                                                                                                           // 16
    ac = new AutoComplete(Blaze.getData().settings);                                                                  // 16
    this.parentView.templateInstance().ac = ac;                                                                       // 18
    this.onViewReady(function () {                                                                                    // 21
      ac.element = this.parentView.firstNode();                                                                       // 22
      return ac.$element = $(ac.element);                                                                             // 34
    });                                                                                                               // 21
    return Blaze.With(ac, function () {                                                                               // 25
      return Template._autocompleteContainer;                                                                         // 37
    });                                                                                                               // 25
  })                                                                                                                  // 15
};                                                                                                                    // 13
Template.inputAutocomplete.helpers(autocompleteHelpers);                                                              // 29
Template.textareaAutocomplete.helpers(autocompleteHelpers);                                                           // 30
                                                                                                                      //
Template._autocompleteContainer.rendered = function () {                                                              // 32
  return this.data.tmplInst = this;                                                                                   // 47
};                                                                                                                    // 32
                                                                                                                      //
Template._autocompleteContainer.destroyed = function () {                                                             // 35
  return this.data.teardown();                                                                                        // 51
}; /*                                                                                                                 // 35
     List rendering helpers                                                                                           //
    */                                                                                                                //
                                                                                                                      //
Template._autocompleteContainer.events({                                                                              // 43
  "click .-autocomplete-item": function (e, t) {                                                                      // 45
    return t.data.onItemClick(this, e);                                                                               // 61
  },                                                                                                                  // 45
  "mouseenter .-autocomplete-item": function (e, t) {                                                                 // 46
    return t.data.onItemHover(this, e);                                                                               // 64
  }                                                                                                                   // 45
});                                                                                                                   // 45
                                                                                                                      //
Template._autocompleteContainer.helpers({                                                                             // 48
  empty: function () {                                                                                                // 49
    return this.filteredList().count() === 0;                                                                         // 70
  },                                                                                                                  // 49
  noMatchTemplate: function () {                                                                                      // 50
    return this.matchedRule().noMatchTemplate || Template._noMatch;                                                   // 73
  }                                                                                                                   // 49
});                                                                                                                   // 49
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".css",
    ".html",
    ".coffee"
  ]
});
require("./node_modules/meteor/mizzao:autocomplete/template.inputs.js");
require("./node_modules/meteor/mizzao:autocomplete/autocomplete-client.coffee.js");
require("./node_modules/meteor/mizzao:autocomplete/templates.coffee.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['mizzao:autocomplete'] = {}, {
  AutocompleteTest: AutocompleteTest
});

})();
