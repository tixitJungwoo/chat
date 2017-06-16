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
var Logger = Package['rocketchat:logger'].Logger;
var SystemLogger = Package['rocketchat:logger'].SystemLogger;
var LoggerManager = Package['rocketchat:logger'].LoggerManager;
var _ = Package.underscore._;
var WebApp = Package.webapp.WebApp;
var WebAppHashing = Package['webapp-hashing'].WebAppHashing;
var Template = Package['templating-runtime'].Template;
var TAPi18next = Package['tap:i18n'].TAPi18next;
var TAPi18n = Package['tap:i18n'].TAPi18n;
var meteorInstall = Package.modules.meteorInstall;
var process = Package.modules.process;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:theme":{"client":{"vendor":{"jscolor.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/rocketchat_theme/client/vendor/jscolor.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * jscolor - JavaScript Color Picker                                                                                   //
 *                                                                                                                     //
 * @link    http://jscolor.com                                                                                         //
 * @license For open source use: GPLv3                                                                                 //
 *          For commercial use: JSColor Commercial License                                                             //
 * @author  Jan Odvarko                                                                                                //
 * @version 2.0.4                                                                                                      //
 *                                                                                                                     //
 * See usage examples at http://jscolor.com/examples/                                                                  //
 */"use strict";                                                                                                       //
                                                                                                                       //
if (!window.jscolor) {                                                                                                 // 17
	window.jscolor = function () {                                                                                        // 17
		var jsc = {                                                                                                          // 20
			register: function () {                                                                                             // 23
				jsc.attachDOMReadyEvent(jsc.init);                                                                                 // 24
				jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);                                                   // 25
				jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);                                                 // 26
				jsc.attachEvent(window, 'resize', jsc.onWindowResize);                                                             // 27
			},                                                                                                                  // 28
			init: function () {                                                                                                 // 31
				if (jsc.jscolor.lookupClass) {                                                                                     // 32
					jsc.jscolor.installByClassName(jsc.jscolor.lookupClass);                                                          // 33
				}                                                                                                                  // 34
			},                                                                                                                  // 35
			tryInstallOnElements: function (elms, className) {                                                                  // 38
				var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');                           // 39
                                                                                                                       //
				for (var i = 0; i < elms.length; i += 1) {                                                                         // 41
					if (elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {                                        // 42
						if (jsc.isColorAttrSupported) {                                                                                  // 43
							// skip inputs of type 'color' if supported by the browser                                                      // 44
							continue;                                                                                                       // 45
						}                                                                                                                // 46
					}                                                                                                                 // 47
                                                                                                                       //
					var m;                                                                                                            // 48
                                                                                                                       //
					if (!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {                         // 49
						var targetElm = elms[i];                                                                                         // 50
						var optsStr = null;                                                                                              // 51
						var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');                                                         // 53
                                                                                                                       //
						if (dataOptions !== null) {                                                                                      // 54
							optsStr = dataOptions;                                                                                          // 55
						} else if (m[4]) {                                                                                               // 56
							optsStr = m[4];                                                                                                 // 57
						}                                                                                                                // 58
                                                                                                                       //
						var opts = {};                                                                                                   // 60
                                                                                                                       //
						if (optsStr) {                                                                                                   // 61
							try {                                                                                                           // 62
								opts = new Function('return (' + optsStr + ')')();                                                             // 63
							} catch (eParseError) {                                                                                         // 64
								jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr);                                   // 65
							}                                                                                                               // 66
						}                                                                                                                // 67
                                                                                                                       //
						targetElm.jscolor = new jsc.jscolor(targetElm, opts);                                                            // 68
					}                                                                                                                 // 69
				}                                                                                                                  // 70
			},                                                                                                                  // 71
			isColorAttrSupported: function () {                                                                                 // 74
				var elm = document.createElement('input');                                                                         // 75
                                                                                                                       //
				if (elm.setAttribute) {                                                                                            // 76
					elm.setAttribute('type', 'color');                                                                                // 77
                                                                                                                       //
					if (elm.type.toLowerCase() == 'color') {                                                                          // 78
						return true;                                                                                                     // 79
					}                                                                                                                 // 80
				}                                                                                                                  // 81
                                                                                                                       //
				return false;                                                                                                      // 82
			}(),                                                                                                                // 83
			isCanvasSupported: function () {                                                                                    // 86
				var elm = document.createElement('canvas');                                                                        // 87
				return !!(elm.getContext && elm.getContext('2d'));                                                                 // 88
			}(),                                                                                                                // 89
			fetchElement: function (mixed) {                                                                                    // 92
				return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;                                         // 93
			},                                                                                                                  // 94
			isElementType: function (elm, type) {                                                                               // 97
				return elm.nodeName.toLowerCase() === type.toLowerCase();                                                          // 98
			},                                                                                                                  // 99
			getDataAttr: function (el, name) {                                                                                  // 102
				var attrName = 'data-' + name;                                                                                     // 103
				var attrValue = el.getAttribute(attrName);                                                                         // 104
                                                                                                                       //
				if (attrValue !== null) {                                                                                          // 105
					return attrValue;                                                                                                 // 106
				}                                                                                                                  // 107
                                                                                                                       //
				return null;                                                                                                       // 108
			},                                                                                                                  // 109
			attachEvent: function (el, evnt, func) {                                                                            // 112
				if (el.addEventListener) {                                                                                         // 113
					el.addEventListener(evnt, func, false);                                                                           // 114
				} else if (el.attachEvent) {                                                                                       // 115
					el.attachEvent('on' + evnt, func);                                                                                // 116
				}                                                                                                                  // 117
			},                                                                                                                  // 118
			detachEvent: function (el, evnt, func) {                                                                            // 121
				if (el.removeEventListener) {                                                                                      // 122
					el.removeEventListener(evnt, func, false);                                                                        // 123
				} else if (el.detachEvent) {                                                                                       // 124
					el.detachEvent('on' + evnt, func);                                                                                // 125
				}                                                                                                                  // 126
			},                                                                                                                  // 127
			_attachedGroupEvents: {},                                                                                           // 130
			attachGroupEvent: function (groupName, el, evnt, func) {                                                            // 133
				if (!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {                                                         // 134
					jsc._attachedGroupEvents[groupName] = [];                                                                         // 135
				}                                                                                                                  // 136
                                                                                                                       //
				jsc._attachedGroupEvents[groupName].push([el, evnt, func]);                                                        // 137
                                                                                                                       //
				jsc.attachEvent(el, evnt, func);                                                                                   // 138
			},                                                                                                                  // 139
			detachGroupEvents: function (groupName) {                                                                           // 142
				if (jsc._attachedGroupEvents.hasOwnProperty(groupName)) {                                                          // 143
					for (var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {                                         // 144
						var evt = jsc._attachedGroupEvents[groupName][i];                                                                // 145
						jsc.detachEvent(evt[0], evt[1], evt[2]);                                                                         // 146
					}                                                                                                                 // 147
                                                                                                                       //
					delete jsc._attachedGroupEvents[groupName];                                                                       // 148
				}                                                                                                                  // 149
			},                                                                                                                  // 150
			attachDOMReadyEvent: function (func) {                                                                              // 153
				var fired = false;                                                                                                 // 154
                                                                                                                       //
				var fireOnce = function () {                                                                                       // 155
					if (!fired) {                                                                                                     // 156
						fired = true;                                                                                                    // 157
						func();                                                                                                          // 158
					}                                                                                                                 // 159
				};                                                                                                                 // 160
                                                                                                                       //
				if (document.readyState === 'complete') {                                                                          // 162
					setTimeout(fireOnce, 1); // async                                                                                 // 163
                                                                                                                       //
					return;                                                                                                           // 164
				}                                                                                                                  // 165
                                                                                                                       //
				if (document.addEventListener) {                                                                                   // 167
					document.addEventListener('DOMContentLoaded', fireOnce, false); // Fallback                                       // 168
                                                                                                                       //
					window.addEventListener('load', fireOnce, false);                                                                 // 171
				} else if (document.attachEvent) {                                                                                 // 173
					// IE                                                                                                             // 174
					document.attachEvent('onreadystatechange', function () {                                                          // 175
						if (document.readyState === 'complete') {                                                                        // 176
							document.detachEvent('onreadystatechange', arguments.callee);                                                   // 177
							fireOnce();                                                                                                     // 178
						}                                                                                                                // 179
					}); // Fallback                                                                                                   // 180
                                                                                                                       //
					window.attachEvent('onload', fireOnce); // IE7/8                                                                  // 183
                                                                                                                       //
					if (document.documentElement.doScroll && window == window.top) {                                                  // 186
						var tryScroll = function () {                                                                                    // 187
							if (!document.body) {                                                                                           // 188
								return;                                                                                                        // 188
							}                                                                                                               // 188
                                                                                                                       //
							try {                                                                                                           // 189
								document.documentElement.doScroll('left');                                                                     // 190
								fireOnce();                                                                                                    // 191
							} catch (e) {                                                                                                   // 192
								setTimeout(tryScroll, 1);                                                                                      // 193
							}                                                                                                               // 194
						};                                                                                                               // 195
                                                                                                                       //
						tryScroll();                                                                                                     // 196
					}                                                                                                                 // 197
				}                                                                                                                  // 198
			},                                                                                                                  // 199
			warn: function (msg) {                                                                                              // 202
				if (window.console && window.console.warn) {                                                                       // 203
					window.console.warn(msg);                                                                                         // 204
				}                                                                                                                  // 205
			},                                                                                                                  // 206
			preventDefault: function (e) {                                                                                      // 209
				if (e.preventDefault) {                                                                                            // 210
					e.preventDefault();                                                                                               // 210
				}                                                                                                                  // 210
                                                                                                                       //
				e.returnValue = false;                                                                                             // 211
			},                                                                                                                  // 212
			captureTarget: function (target) {                                                                                  // 215
				// IE                                                                                                              // 216
				if (target.setCapture) {                                                                                           // 217
					jsc._capturedTarget = target;                                                                                     // 218
                                                                                                                       //
					jsc._capturedTarget.setCapture();                                                                                 // 219
				}                                                                                                                  // 220
			},                                                                                                                  // 221
			releaseTarget: function () {                                                                                        // 224
				// IE                                                                                                              // 225
				if (jsc._capturedTarget) {                                                                                         // 226
					jsc._capturedTarget.releaseCapture();                                                                             // 227
                                                                                                                       //
					jsc._capturedTarget = null;                                                                                       // 228
				}                                                                                                                  // 229
			},                                                                                                                  // 230
			fireEvent: function (el, evnt) {                                                                                    // 233
				if (!el) {                                                                                                         // 234
					return;                                                                                                           // 235
				}                                                                                                                  // 236
                                                                                                                       //
				if (document.createEvent) {                                                                                        // 237
					var ev = document.createEvent('HTMLEvents');                                                                      // 238
					ev.initEvent(evnt, true, true);                                                                                   // 239
					el.dispatchEvent(ev);                                                                                             // 240
				} else if (document.createEventObject) {                                                                           // 241
					var ev = document.createEventObject();                                                                            // 242
					el.fireEvent('on' + evnt, ev);                                                                                    // 243
				} else if (el['on' + evnt]) {                                                                                      // 244
					// alternatively use the traditional event model                                                                  // 244
					el['on' + evnt]();                                                                                                // 245
				}                                                                                                                  // 246
			},                                                                                                                  // 247
			classNameToList: function (className) {                                                                             // 250
				return className.replace(/^\s+|\s+$/g, '').split(/\s+/);                                                           // 251
			},                                                                                                                  // 252
			// The className parameter (str) can only contain a single class name                                               // 255
			hasClass: function (elm, className) {                                                                               // 256
				if (!className) {                                                                                                  // 257
					return false;                                                                                                     // 258
				}                                                                                                                  // 259
                                                                                                                       //
				return -1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ');                      // 260
			},                                                                                                                  // 261
			// The className parameter (str) can contain multiple class names separated by whitespace                           // 264
			setClass: function (elm, className) {                                                                               // 265
				var classList = jsc.classNameToList(className);                                                                    // 266
                                                                                                                       //
				for (var i = 0; i < classList.length; i += 1) {                                                                    // 267
					if (!jsc.hasClass(elm, classList[i])) {                                                                           // 268
						elm.className += (elm.className ? ' ' : '') + classList[i];                                                      // 269
					}                                                                                                                 // 270
				}                                                                                                                  // 271
			},                                                                                                                  // 272
			// The className parameter (str) can contain multiple class names separated by whitespace                           // 275
			unsetClass: function (elm, className) {                                                                             // 276
				var classList = jsc.classNameToList(className);                                                                    // 277
                                                                                                                       //
				for (var i = 0; i < classList.length; i += 1) {                                                                    // 278
					var repl = new RegExp('^\\s*' + classList[i] + '\\s*|' + '\\s*' + classList[i] + '\\s*$|' + '\\s+' + classList[i] + '(\\s+)', 'g');
					elm.className = elm.className.replace(repl, '$1');                                                                // 285
				}                                                                                                                  // 286
			},                                                                                                                  // 287
			getStyle: function (elm) {                                                                                          // 290
				return window.getComputedStyle ? window.getComputedStyle(elm) : elm.currentStyle;                                  // 291
			},                                                                                                                  // 292
			setStyle: function () {                                                                                             // 295
				var helper = document.createElement('div');                                                                        // 296
                                                                                                                       //
				var getSupportedProp = function (names) {                                                                          // 297
					for (var i = 0; i < names.length; i += 1) {                                                                       // 298
						if (names[i] in helper.style) {                                                                                  // 299
							return names[i];                                                                                                // 300
						}                                                                                                                // 301
					}                                                                                                                 // 302
				};                                                                                                                 // 303
                                                                                                                       //
				var props = {                                                                                                      // 304
					borderRadius: getSupportedProp(['borderRadius', 'MozBorderRadius', 'webkitBorderRadius']),                        // 305
					boxShadow: getSupportedProp(['boxShadow', 'MozBoxShadow', 'webkitBoxShadow'])                                     // 306
				};                                                                                                                 // 304
				return function (elm, prop, value) {                                                                               // 308
					switch (prop.toLowerCase()) {                                                                                     // 309
						case 'opacity':                                                                                                  // 310
							var alphaOpacity = Math.round(parseFloat(value) * 100);                                                         // 311
							elm.style.opacity = value;                                                                                      // 312
							elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';                                                       // 313
							break;                                                                                                          // 314
                                                                                                                       //
						default:                                                                                                         // 315
							elm.style[props[prop]] = value;                                                                                 // 316
							break;                                                                                                          // 317
					}                                                                                                                 // 309
				};                                                                                                                 // 319
			}(),                                                                                                                // 320
			setBorderRadius: function (elm, value) {                                                                            // 323
				jsc.setStyle(elm, 'borderRadius', value || '0');                                                                   // 324
			},                                                                                                                  // 325
			setBoxShadow: function (elm, value) {                                                                               // 328
				jsc.setStyle(elm, 'boxShadow', value || 'none');                                                                   // 329
			},                                                                                                                  // 330
			getElementPos: function (e, relativeToViewport) {                                                                   // 333
				var x = 0,                                                                                                         // 334
				    y = 0;                                                                                                         // 334
				var rect = e.getBoundingClientRect();                                                                              // 335
				x = rect.left;                                                                                                     // 336
				y = rect.top;                                                                                                      // 337
                                                                                                                       //
				if (!relativeToViewport) {                                                                                         // 338
					var viewPos = jsc.getViewPos();                                                                                   // 339
					x += viewPos[0];                                                                                                  // 340
					y += viewPos[1];                                                                                                  // 341
				}                                                                                                                  // 342
                                                                                                                       //
				return [x, y];                                                                                                     // 343
			},                                                                                                                  // 344
			getElementSize: function (e) {                                                                                      // 347
				return [e.offsetWidth, e.offsetHeight];                                                                            // 348
			},                                                                                                                  // 349
			// get pointer's X/Y coordinates relative to viewport                                                               // 352
			getAbsPointerPos: function (e) {                                                                                    // 353
				if (!e) {                                                                                                          // 354
					e = window.event;                                                                                                 // 354
				}                                                                                                                  // 354
                                                                                                                       //
				var x = 0,                                                                                                         // 355
				    y = 0;                                                                                                         // 355
                                                                                                                       //
				if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {                                          // 356
					// touch devices                                                                                                  // 357
					x = e.changedTouches[0].clientX;                                                                                  // 358
					y = e.changedTouches[0].clientY;                                                                                  // 359
				} else if (typeof e.clientX === 'number') {                                                                        // 360
					x = e.clientX;                                                                                                    // 361
					y = e.clientY;                                                                                                    // 362
				}                                                                                                                  // 363
                                                                                                                       //
				return {                                                                                                           // 364
					x: x,                                                                                                             // 364
					y: y                                                                                                              // 364
				};                                                                                                                 // 364
			},                                                                                                                  // 365
			// get pointer's X/Y coordinates relative to target element                                                         // 368
			getRelPointerPos: function (e) {                                                                                    // 369
				if (!e) {                                                                                                          // 370
					e = window.event;                                                                                                 // 370
				}                                                                                                                  // 370
                                                                                                                       //
				var target = e.target || e.srcElement;                                                                             // 371
				var targetRect = target.getBoundingClientRect();                                                                   // 372
				var x = 0,                                                                                                         // 374
				    y = 0;                                                                                                         // 374
				var clientX = 0,                                                                                                   // 376
				    clientY = 0;                                                                                                   // 376
                                                                                                                       //
				if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {                                          // 377
					// touch devices                                                                                                  // 378
					clientX = e.changedTouches[0].clientX;                                                                            // 379
					clientY = e.changedTouches[0].clientY;                                                                            // 380
				} else if (typeof e.clientX === 'number') {                                                                        // 381
					clientX = e.clientX;                                                                                              // 382
					clientY = e.clientY;                                                                                              // 383
				}                                                                                                                  // 384
                                                                                                                       //
				x = clientX - targetRect.left;                                                                                     // 386
				y = clientY - targetRect.top;                                                                                      // 387
				return {                                                                                                           // 388
					x: x,                                                                                                             // 388
					y: y                                                                                                              // 388
				};                                                                                                                 // 388
			},                                                                                                                  // 389
			getViewPos: function () {                                                                                           // 392
				var doc = document.documentElement;                                                                                // 393
				return [(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0), (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)];
			},                                                                                                                  // 398
			getViewSize: function () {                                                                                          // 401
				var doc = document.documentElement;                                                                                // 402
				return [window.innerWidth || doc.clientWidth, window.innerHeight || doc.clientHeight];                             // 403
			},                                                                                                                  // 407
			redrawPosition: function () {                                                                                       // 410
				if (jsc.picker && jsc.picker.owner) {                                                                              // 412
					var thisObj = jsc.picker.owner;                                                                                   // 413
					var tp, vp;                                                                                                       // 415
                                                                                                                       //
					if (thisObj.fixed) {                                                                                              // 417
						// Fixed elements are positioned relative to viewport,                                                           // 418
						// therefore we can ignore the scroll offset                                                                     // 419
						tp = jsc.getElementPos(thisObj.targetElement, true); // target pos                                               // 420
                                                                                                                       //
						vp = [0, 0]; // view pos                                                                                         // 421
					} else {                                                                                                          // 422
						tp = jsc.getElementPos(thisObj.targetElement); // target pos                                                     // 423
                                                                                                                       //
						vp = jsc.getViewPos(); // view pos                                                                               // 424
					}                                                                                                                 // 425
                                                                                                                       //
					var ts = jsc.getElementSize(thisObj.targetElement); // target size                                                // 427
                                                                                                                       //
					var vs = jsc.getViewSize(); // view size                                                                          // 428
                                                                                                                       //
					var ps = jsc.getPickerOuterDims(thisObj); // picker size                                                          // 429
                                                                                                                       //
					var a, b, c;                                                                                                      // 430
                                                                                                                       //
					switch (thisObj.position.toLowerCase()) {                                                                         // 431
						case 'left':                                                                                                     // 432
							a = 1;                                                                                                          // 432
							b = 0;                                                                                                          // 432
							c = -1;                                                                                                         // 432
							break;                                                                                                          // 432
                                                                                                                       //
						case 'right':                                                                                                    // 433
							a = 1;                                                                                                          // 433
							b = 0;                                                                                                          // 433
							c = 1;                                                                                                          // 433
							break;                                                                                                          // 433
                                                                                                                       //
						case 'top':                                                                                                      // 434
							a = 0;                                                                                                          // 434
							b = 1;                                                                                                          // 434
							c = -1;                                                                                                         // 434
							break;                                                                                                          // 434
                                                                                                                       //
						default:                                                                                                         // 435
							a = 0;                                                                                                          // 435
							b = 1;                                                                                                          // 435
							c = 1;                                                                                                          // 435
							break;                                                                                                          // 435
					}                                                                                                                 // 431
                                                                                                                       //
					var l = (ts[b] + ps[b]) / 2; // compute picker position                                                           // 437
                                                                                                                       //
					if (!thisObj.smartPosition) {                                                                                     // 440
						var pp = [tp[a], tp[b] + ts[b] - l + l * c];                                                                     // 441
					} else {                                                                                                          // 445
						var pp = [-vp[a] + tp[a] + ps[a] > vs[a] ? -vp[a] + tp[a] + ts[a] / 2 > vs[a] / 2 && tp[a] + ts[a] - ps[a] >= 0 ? tp[a] + ts[a] - ps[a] : tp[a] : tp[a], -vp[b] + tp[b] + ts[b] + ps[b] - l + l * c > vs[b] ? -vp[b] + tp[b] + ts[b] / 2 > vs[b] / 2 && tp[b] + ts[b] - l - l * c >= 0 ? tp[b] + ts[b] - l - l * c : tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l + l * c >= 0 ? tp[b] + ts[b] - l + l * c : tp[b] + ts[b] - l - l * c];
					}                                                                                                                 // 454
                                                                                                                       //
					var x = pp[a];                                                                                                    // 456
					var y = pp[b];                                                                                                    // 457
					var positionValue = thisObj.fixed ? 'fixed' : 'absolute';                                                         // 458
					var contractShadow = (pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) && pp[1] + ps[1] < tp[1] + ts[1];           // 459
                                                                                                                       //
					jsc._drawPosition(thisObj, x, y, positionValue, contractShadow);                                                  // 463
				}                                                                                                                  // 464
			},                                                                                                                  // 465
			_drawPosition: function (thisObj, x, y, positionValue, contractShadow) {                                            // 468
				var vShadow = contractShadow ? 0 : thisObj.shadowBlur; // px                                                       // 469
                                                                                                                       //
				jsc.picker.wrap.style.position = positionValue;                                                                    // 471
				jsc.picker.wrap.style.left = x + 'px';                                                                             // 472
				jsc.picker.wrap.style.top = y + 'px';                                                                              // 473
				jsc.setBoxShadow(jsc.picker.boxS, thisObj.shadow ? new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor) : null);
			},                                                                                                                  // 480
			getPickerDims: function (thisObj) {                                                                                 // 483
				var displaySlider = !!jsc.getSliderComponent(thisObj);                                                             // 484
				var dims = [2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width + (displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0), 2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height + (thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)];
				return dims;                                                                                                       // 491
			},                                                                                                                  // 492
			getPickerOuterDims: function (thisObj) {                                                                            // 495
				var dims = jsc.getPickerDims(thisObj);                                                                             // 496
				return [dims[0] + 2 * thisObj.borderWidth, dims[1] + 2 * thisObj.borderWidth];                                     // 497
			},                                                                                                                  // 501
			getPadToSliderPadding: function (thisObj) {                                                                         // 504
				return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness));               // 505
			},                                                                                                                  // 506
			getPadYComponent: function (thisObj) {                                                                              // 509
				switch (thisObj.mode.charAt(1).toLowerCase()) {                                                                    // 510
					case 'v':                                                                                                         // 511
						return 'v';                                                                                                      // 511
						break;                                                                                                           // 511
				}                                                                                                                  // 510
                                                                                                                       //
				return 's';                                                                                                        // 513
			},                                                                                                                  // 514
			getSliderComponent: function (thisObj) {                                                                            // 517
				if (thisObj.mode.length > 2) {                                                                                     // 518
					switch (thisObj.mode.charAt(2).toLowerCase()) {                                                                   // 519
						case 's':                                                                                                        // 520
							return 's';                                                                                                     // 520
							break;                                                                                                          // 520
                                                                                                                       //
						case 'v':                                                                                                        // 521
							return 'v';                                                                                                     // 521
							break;                                                                                                          // 521
					}                                                                                                                 // 519
				}                                                                                                                  // 523
                                                                                                                       //
				return null;                                                                                                       // 524
			},                                                                                                                  // 525
			onDocumentMouseDown: function (e) {                                                                                 // 528
				if (!e) {                                                                                                          // 529
					e = window.event;                                                                                                 // 529
				}                                                                                                                  // 529
                                                                                                                       //
				var target = e.target || e.srcElement;                                                                             // 530
                                                                                                                       //
				if (target._jscLinkedInstance) {                                                                                   // 532
					if (target._jscLinkedInstance.showOnClick) {                                                                      // 533
						target._jscLinkedInstance.show();                                                                                // 534
					}                                                                                                                 // 535
				} else if (target._jscControlName) {                                                                               // 536
					jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse');                                            // 537
				} else {                                                                                                           // 538
					// Mouse is outside the picker controls -> hide the color picker!                                                 // 539
					if (jsc.picker && jsc.picker.owner) {                                                                             // 540
						jsc.picker.owner.hide();                                                                                         // 541
					}                                                                                                                 // 542
				}                                                                                                                  // 543
			},                                                                                                                  // 544
			onDocumentTouchStart: function (e) {                                                                                // 547
				if (!e) {                                                                                                          // 548
					e = window.event;                                                                                                 // 548
				}                                                                                                                  // 548
                                                                                                                       //
				var target = e.target || e.srcElement;                                                                             // 549
                                                                                                                       //
				if (target._jscLinkedInstance) {                                                                                   // 551
					if (target._jscLinkedInstance.showOnClick) {                                                                      // 552
						target._jscLinkedInstance.show();                                                                                // 553
					}                                                                                                                 // 554
				} else if (target._jscControlName) {                                                                               // 555
					jsc.onControlPointerStart(e, target, target._jscControlName, 'touch');                                            // 556
				} else {                                                                                                           // 557
					if (jsc.picker && jsc.picker.owner) {                                                                             // 558
						jsc.picker.owner.hide();                                                                                         // 559
					}                                                                                                                 // 560
				}                                                                                                                  // 561
			},                                                                                                                  // 562
			onWindowResize: function (e) {                                                                                      // 565
				jsc.redrawPosition();                                                                                              // 566
			},                                                                                                                  // 567
			onParentScroll: function (e) {                                                                                      // 570
				// hide the picker when one of the parent elements is scrolled                                                     // 571
				if (jsc.picker && jsc.picker.owner) {                                                                              // 572
					jsc.picker.owner.hide();                                                                                          // 573
				}                                                                                                                  // 574
			},                                                                                                                  // 575
			_pointerMoveEvent: {                                                                                                // 578
				mouse: 'mousemove',                                                                                                // 579
				touch: 'touchmove'                                                                                                 // 580
			},                                                                                                                  // 578
			_pointerEndEvent: {                                                                                                 // 582
				mouse: 'mouseup',                                                                                                  // 583
				touch: 'touchend'                                                                                                  // 584
			},                                                                                                                  // 582
			_pointerOrigin: null,                                                                                               // 588
			_capturedTarget: null,                                                                                              // 589
			onControlPointerStart: function (e, target, controlName, pointerType) {                                             // 592
				var thisObj = target._jscInstance;                                                                                 // 593
				jsc.preventDefault(e);                                                                                             // 595
				jsc.captureTarget(target);                                                                                         // 596
                                                                                                                       //
				var registerDragEvents = function (doc, offset) {                                                                  // 598
					jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType], jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
					jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType], jsc.onDocumentPointerEnd(e, target, controlName, pointerType));
				};                                                                                                                 // 603
                                                                                                                       //
				registerDragEvents(document, [0, 0]);                                                                              // 605
                                                                                                                       //
				if (window.parent && window.frameElement) {                                                                        // 607
					var rect = window.frameElement.getBoundingClientRect();                                                           // 608
					var ofs = [-rect.left, -rect.top];                                                                                // 609
					registerDragEvents(window.parent.window.document, ofs);                                                           // 610
				}                                                                                                                  // 611
                                                                                                                       //
				var abs = jsc.getAbsPointerPos(e);                                                                                 // 613
				var rel = jsc.getRelPointerPos(e);                                                                                 // 614
				jsc._pointerOrigin = {                                                                                             // 615
					x: abs.x - rel.x,                                                                                                 // 616
					y: abs.y - rel.y                                                                                                  // 617
				};                                                                                                                 // 615
                                                                                                                       //
				switch (controlName) {                                                                                             // 620
					case 'pad':                                                                                                       // 621
						// if the slider is at the bottom, move it up                                                                    // 622
						switch (jsc.getSliderComponent(thisObj)) {                                                                       // 623
							case 's':                                                                                                       // 624
								if (thisObj.hsv[1] === 0) {                                                                                    // 624
									thisObj.fromHSV(null, 100, null);                                                                             // 624
								}                                                                                                              // 624
                                                                                                                       //
								;                                                                                                              // 624
								break;                                                                                                         // 624
                                                                                                                       //
							case 'v':                                                                                                       // 625
								if (thisObj.hsv[2] === 0) {                                                                                    // 625
									thisObj.fromHSV(null, null, 100);                                                                             // 625
								}                                                                                                              // 625
                                                                                                                       //
								;                                                                                                              // 625
								break;                                                                                                         // 625
						}                                                                                                                // 623
                                                                                                                       //
						jsc.setPad(thisObj, e, 0, 0);                                                                                    // 627
						break;                                                                                                           // 628
                                                                                                                       //
					case 'sld':                                                                                                       // 630
						jsc.setSld(thisObj, e, 0);                                                                                       // 631
						break;                                                                                                           // 632
				}                                                                                                                  // 620
                                                                                                                       //
				jsc.dispatchFineChange(thisObj);                                                                                   // 635
			},                                                                                                                  // 636
			onDocumentPointerMove: function (e, target, controlName, pointerType, offset) {                                     // 639
				return function (e) {                                                                                              // 640
					var thisObj = target._jscInstance;                                                                                // 641
                                                                                                                       //
					switch (controlName) {                                                                                            // 642
						case 'pad':                                                                                                      // 643
							if (!e) {                                                                                                       // 644
								e = window.event;                                                                                              // 644
							}                                                                                                               // 644
                                                                                                                       //
							jsc.setPad(thisObj, e, offset[0], offset[1]);                                                                   // 645
							jsc.dispatchFineChange(thisObj);                                                                                // 646
							break;                                                                                                          // 647
                                                                                                                       //
						case 'sld':                                                                                                      // 649
							if (!e) {                                                                                                       // 650
								e = window.event;                                                                                              // 650
							}                                                                                                               // 650
                                                                                                                       //
							jsc.setSld(thisObj, e, offset[1]);                                                                              // 651
							jsc.dispatchFineChange(thisObj);                                                                                // 652
							break;                                                                                                          // 653
					}                                                                                                                 // 642
				};                                                                                                                 // 655
			},                                                                                                                  // 656
			onDocumentPointerEnd: function (e, target, controlName, pointerType) {                                              // 659
				return function (e) {                                                                                              // 660
					var thisObj = target._jscInstance;                                                                                // 661
					jsc.detachGroupEvents('drag');                                                                                    // 662
					jsc.releaseTarget(); // Always dispatch changes after detaching outstanding mouse handlers,                       // 663
					// in case some user interaction will occur in user's onchange callback                                           // 665
					// that would intrude with current mouse events                                                                   // 666
                                                                                                                       //
					jsc.dispatchChange(thisObj);                                                                                      // 667
				};                                                                                                                 // 668
			},                                                                                                                  // 669
			dispatchChange: function (thisObj) {                                                                                // 672
				if (thisObj.valueElement) {                                                                                        // 673
					if (jsc.isElementType(thisObj.valueElement, 'input')) {                                                           // 674
						jsc.fireEvent(thisObj.valueElement, 'change');                                                                   // 675
					}                                                                                                                 // 676
				}                                                                                                                  // 677
			},                                                                                                                  // 678
			dispatchFineChange: function (thisObj) {                                                                            // 681
				if (thisObj.onFineChange) {                                                                                        // 682
					var callback;                                                                                                     // 683
                                                                                                                       //
					if (typeof thisObj.onFineChange === 'string') {                                                                   // 684
						callback = new Function(thisObj.onFineChange);                                                                   // 685
					} else {                                                                                                          // 686
						callback = thisObj.onFineChange;                                                                                 // 687
					}                                                                                                                 // 688
                                                                                                                       //
					callback.call(thisObj);                                                                                           // 689
				}                                                                                                                  // 690
			},                                                                                                                  // 691
			setPad: function (thisObj, e, ofsX, ofsY) {                                                                         // 694
				var pointerAbs = jsc.getAbsPointerPos(e);                                                                          // 695
				var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;                         // 696
				var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;                         // 697
				var xVal = x * (360 / (thisObj.width - 1));                                                                        // 699
				var yVal = 100 - y * (100 / (thisObj.height - 1));                                                                 // 700
                                                                                                                       //
				switch (jsc.getPadYComponent(thisObj)) {                                                                           // 702
					case 's':                                                                                                         // 703
						thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld);                                                                 // 703
						break;                                                                                                           // 703
                                                                                                                       //
					case 'v':                                                                                                         // 704
						thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld);                                                                 // 704
						break;                                                                                                           // 704
				}                                                                                                                  // 702
			},                                                                                                                  // 706
			setSld: function (thisObj, e, ofsY) {                                                                               // 709
				var pointerAbs = jsc.getAbsPointerPos(e);                                                                          // 710
				var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;                         // 711
				var yVal = 100 - y * (100 / (thisObj.height - 1));                                                                 // 713
                                                                                                                       //
				switch (jsc.getSliderComponent(thisObj)) {                                                                         // 715
					case 's':                                                                                                         // 716
						thisObj.fromHSV(null, yVal, null, jsc.leavePad);                                                                 // 716
						break;                                                                                                           // 716
                                                                                                                       //
					case 'v':                                                                                                         // 717
						thisObj.fromHSV(null, null, yVal, jsc.leavePad);                                                                 // 717
						break;                                                                                                           // 717
				}                                                                                                                  // 715
			},                                                                                                                  // 719
			_vmlNS: 'jsc_vml_',                                                                                                 // 722
			_vmlCSS: 'jsc_vml_css_',                                                                                            // 723
			_vmlReady: false,                                                                                                   // 724
			initVML: function () {                                                                                              // 727
				if (!jsc._vmlReady) {                                                                                              // 728
					// init VML namespace                                                                                             // 729
					var doc = document;                                                                                               // 730
                                                                                                                       //
					if (!doc.namespaces[jsc._vmlNS]) {                                                                                // 731
						doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml');                                                 // 732
					}                                                                                                                 // 733
                                                                                                                       //
					if (!doc.styleSheets[jsc._vmlCSS]) {                                                                              // 734
						var tags = ['shape', 'shapetype', 'group', 'background', 'path', 'formulas', 'handles', 'fill', 'stroke', 'shadow', 'textbox', 'textpath', 'imagedata', 'line', 'polyline', 'curve', 'rect', 'roundrect', 'oval', 'arc', 'image'];
						var ss = doc.createStyleSheet();                                                                                 // 736
						ss.owningElement.id = jsc._vmlCSS;                                                                               // 737
                                                                                                                       //
						for (var i = 0; i < tags.length; i += 1) {                                                                       // 738
							ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);');                                        // 739
						}                                                                                                                // 740
					}                                                                                                                 // 741
                                                                                                                       //
					jsc._vmlReady = true;                                                                                             // 742
				}                                                                                                                  // 743
			},                                                                                                                  // 744
			createPalette: function () {                                                                                        // 747
				var paletteObj = {                                                                                                 // 749
					elm: null,                                                                                                        // 750
					draw: null                                                                                                        // 751
				};                                                                                                                 // 749
                                                                                                                       //
				if (jsc.isCanvasSupported) {                                                                                       // 754
					// Canvas implementation for modern browsers                                                                      // 755
					var canvas = document.createElement('canvas');                                                                    // 757
					var ctx = canvas.getContext('2d');                                                                                // 758
                                                                                                                       //
					var drawFunc = function (width, height, type) {                                                                   // 760
						canvas.width = width;                                                                                            // 761
						canvas.height = height;                                                                                          // 762
						ctx.clearRect(0, 0, canvas.width, canvas.height);                                                                // 764
						var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);                                                     // 766
						hGrad.addColorStop(0 / 6, '#F00');                                                                               // 767
						hGrad.addColorStop(1 / 6, '#FF0');                                                                               // 768
						hGrad.addColorStop(2 / 6, '#0F0');                                                                               // 769
						hGrad.addColorStop(3 / 6, '#0FF');                                                                               // 770
						hGrad.addColorStop(4 / 6, '#00F');                                                                               // 771
						hGrad.addColorStop(5 / 6, '#F0F');                                                                               // 772
						hGrad.addColorStop(6 / 6, '#F00');                                                                               // 773
						ctx.fillStyle = hGrad;                                                                                           // 775
						ctx.fillRect(0, 0, canvas.width, canvas.height);                                                                 // 776
						var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);                                                    // 778
                                                                                                                       //
						switch (type.toLowerCase()) {                                                                                    // 779
							case 's':                                                                                                       // 780
								vGrad.addColorStop(0, 'rgba(255,255,255,0)');                                                                  // 781
								vGrad.addColorStop(1, 'rgba(255,255,255,1)');                                                                  // 782
								break;                                                                                                         // 783
                                                                                                                       //
							case 'v':                                                                                                       // 784
								vGrad.addColorStop(0, 'rgba(0,0,0,0)');                                                                        // 785
								vGrad.addColorStop(1, 'rgba(0,0,0,1)');                                                                        // 786
								break;                                                                                                         // 787
						}                                                                                                                // 779
                                                                                                                       //
						ctx.fillStyle = vGrad;                                                                                           // 789
						ctx.fillRect(0, 0, canvas.width, canvas.height);                                                                 // 790
					};                                                                                                                // 791
                                                                                                                       //
					paletteObj.elm = canvas;                                                                                          // 793
					paletteObj.draw = drawFunc;                                                                                       // 794
				} else {                                                                                                           // 796
					// VML fallback for IE 7 and 8                                                                                    // 797
					jsc.initVML();                                                                                                    // 799
					var vmlContainer = document.createElement('div');                                                                 // 801
					vmlContainer.style.position = 'relative';                                                                         // 802
					vmlContainer.style.overflow = 'hidden';                                                                           // 803
					var hGrad = document.createElement(jsc._vmlNS + ':fill');                                                         // 805
					hGrad.type = 'gradient';                                                                                          // 806
					hGrad.method = 'linear';                                                                                          // 807
					hGrad.angle = '90';                                                                                               // 808
					hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0';                                    // 809
					var hRect = document.createElement(jsc._vmlNS + ':rect');                                                         // 811
					hRect.style.position = 'absolute';                                                                                // 812
					hRect.style.left = -1 + 'px';                                                                                     // 813
					hRect.style.top = -1 + 'px';                                                                                      // 814
					hRect.stroked = false;                                                                                            // 815
					hRect.appendChild(hGrad);                                                                                         // 816
					vmlContainer.appendChild(hRect);                                                                                  // 817
					var vGrad = document.createElement(jsc._vmlNS + ':fill');                                                         // 819
					vGrad.type = 'gradient';                                                                                          // 820
					vGrad.method = 'linear';                                                                                          // 821
					vGrad.angle = '180';                                                                                              // 822
					vGrad.opacity = '0';                                                                                              // 823
					var vRect = document.createElement(jsc._vmlNS + ':rect');                                                         // 825
					vRect.style.position = 'absolute';                                                                                // 826
					vRect.style.left = -1 + 'px';                                                                                     // 827
					vRect.style.top = -1 + 'px';                                                                                      // 828
					vRect.stroked = false;                                                                                            // 829
					vRect.appendChild(vGrad);                                                                                         // 830
					vmlContainer.appendChild(vRect);                                                                                  // 831
                                                                                                                       //
					var drawFunc = function (width, height, type) {                                                                   // 833
						vmlContainer.style.width = width + 'px';                                                                         // 834
						vmlContainer.style.height = height + 'px';                                                                       // 835
						hRect.style.width = vRect.style.width = width + 1 + 'px';                                                        // 837
						hRect.style.height = vRect.style.height = height + 1 + 'px'; // Colors must be specified during every redraw, otherwise IE won't display
						// a full gradient during a subsequential redraw                                                                 // 845
                                                                                                                       //
						hGrad.color = '#F00';                                                                                            // 846
						hGrad.color2 = '#F00';                                                                                           // 847
                                                                                                                       //
						switch (type.toLowerCase()) {                                                                                    // 849
							case 's':                                                                                                       // 850
								vGrad.color = vGrad.color2 = '#FFF';                                                                           // 851
								break;                                                                                                         // 852
                                                                                                                       //
							case 'v':                                                                                                       // 853
								vGrad.color = vGrad.color2 = '#000';                                                                           // 854
								break;                                                                                                         // 855
						}                                                                                                                // 849
					};                                                                                                                // 857
                                                                                                                       //
					paletteObj.elm = vmlContainer;                                                                                    // 859
					paletteObj.draw = drawFunc;                                                                                       // 860
				}                                                                                                                  // 861
                                                                                                                       //
				return paletteObj;                                                                                                 // 863
			},                                                                                                                  // 864
			createSliderGradient: function () {                                                                                 // 867
				var sliderObj = {                                                                                                  // 869
					elm: null,                                                                                                        // 870
					draw: null                                                                                                        // 871
				};                                                                                                                 // 869
                                                                                                                       //
				if (jsc.isCanvasSupported) {                                                                                       // 874
					// Canvas implementation for modern browsers                                                                      // 875
					var canvas = document.createElement('canvas');                                                                    // 877
					var ctx = canvas.getContext('2d');                                                                                // 878
                                                                                                                       //
					var drawFunc = function (width, height, color1, color2) {                                                         // 880
						canvas.width = width;                                                                                            // 881
						canvas.height = height;                                                                                          // 882
						ctx.clearRect(0, 0, canvas.width, canvas.height);                                                                // 884
						var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);                                                     // 886
						grad.addColorStop(0, color1);                                                                                    // 887
						grad.addColorStop(1, color2);                                                                                    // 888
						ctx.fillStyle = grad;                                                                                            // 890
						ctx.fillRect(0, 0, canvas.width, canvas.height);                                                                 // 891
					};                                                                                                                // 892
                                                                                                                       //
					sliderObj.elm = canvas;                                                                                           // 894
					sliderObj.draw = drawFunc;                                                                                        // 895
				} else {                                                                                                           // 897
					// VML fallback for IE 7 and 8                                                                                    // 898
					jsc.initVML();                                                                                                    // 900
					var vmlContainer = document.createElement('div');                                                                 // 902
					vmlContainer.style.position = 'relative';                                                                         // 903
					vmlContainer.style.overflow = 'hidden';                                                                           // 904
					var grad = document.createElement(jsc._vmlNS + ':fill');                                                          // 906
					grad.type = 'gradient';                                                                                           // 907
					grad.method = 'linear';                                                                                           // 908
					grad.angle = '180';                                                                                               // 909
					var rect = document.createElement(jsc._vmlNS + ':rect');                                                          // 911
					rect.style.position = 'absolute';                                                                                 // 912
					rect.style.left = -1 + 'px';                                                                                      // 913
					rect.style.top = -1 + 'px';                                                                                       // 914
					rect.stroked = false;                                                                                             // 915
					rect.appendChild(grad);                                                                                           // 916
					vmlContainer.appendChild(rect);                                                                                   // 917
                                                                                                                       //
					var drawFunc = function (width, height, color1, color2) {                                                         // 919
						vmlContainer.style.width = width + 'px';                                                                         // 920
						vmlContainer.style.height = height + 'px';                                                                       // 921
						rect.style.width = width + 1 + 'px';                                                                             // 923
						rect.style.height = height + 1 + 'px';                                                                           // 924
						grad.color = color1;                                                                                             // 926
						grad.color2 = color2;                                                                                            // 927
					};                                                                                                                // 928
                                                                                                                       //
					sliderObj.elm = vmlContainer;                                                                                     // 930
					sliderObj.draw = drawFunc;                                                                                        // 931
				}                                                                                                                  // 932
                                                                                                                       //
				return sliderObj;                                                                                                  // 934
			},                                                                                                                  // 935
			leaveValue: 1 << 0,                                                                                                 // 938
			leaveStyle: 1 << 1,                                                                                                 // 939
			leavePad: 1 << 2,                                                                                                   // 940
			leaveSld: 1 << 3,                                                                                                   // 941
			BoxShadow: function () {                                                                                            // 944
				var BoxShadow = function (hShadow, vShadow, blur, spread, color, inset) {                                          // 945
					this.hShadow = hShadow;                                                                                           // 946
					this.vShadow = vShadow;                                                                                           // 947
					this.blur = blur;                                                                                                 // 948
					this.spread = spread;                                                                                             // 949
					this.color = color;                                                                                               // 950
					this.inset = !!inset;                                                                                             // 951
				};                                                                                                                 // 952
                                                                                                                       //
				BoxShadow.prototype.toString = function () {                                                                       // 954
					var vals = [Math.round(this.hShadow) + 'px', Math.round(this.vShadow) + 'px', Math.round(this.blur) + 'px', Math.round(this.spread) + 'px', this.color];
                                                                                                                       //
					if (this.inset) {                                                                                                 // 962
						vals.push('inset');                                                                                              // 963
					}                                                                                                                 // 964
                                                                                                                       //
					return vals.join(' ');                                                                                            // 965
				};                                                                                                                 // 966
                                                                                                                       //
				return BoxShadow;                                                                                                  // 968
			}(),                                                                                                                // 969
			//                                                                                                                  // 972
			// Usage:                                                                                                           // 973
			// var myColor = new jscolor(<targetElement> [, <options>])                                                         // 974
			//                                                                                                                  // 975
			jscolor: function (targetElement, options) {                                                                        // 977
				// General options                                                                                                 // 979
				//                                                                                                                 // 980
				this.value = null; // initial HEX color. To change it later, use methods fromString(), fromHSV() and fromRGB()     // 981
                                                                                                                       //
				this.valueElement = targetElement; // element that will be used to display and input the color code                // 982
                                                                                                                       //
				this.styleElement = targetElement; // element that will preview the picked color using CSS backgroundColor         // 983
                                                                                                                       //
				this.required = true; // whether the associated text <input> can be left empty                                     // 984
                                                                                                                       //
				this.refine = true; // whether to refine the entered color code (e.g. uppercase it and remove whitespace)          // 985
                                                                                                                       //
				this.hash = true; // whether to prefix the HEX color code with # symbol                                            // 986
                                                                                                                       //
				this.uppercase = true; // whether to uppercase the color code                                                      // 987
                                                                                                                       //
				this.onFineChange = null; // called instantly every time the color changes (value can be either a function or a string with javascript code)
                                                                                                                       //
				this.activeClass = 'jscolor-active'; // class to be set to the target element when a picker window is open on it   // 989
                                                                                                                       //
				this.minS = 0; // min allowed saturation (0 - 100)                                                                 // 990
                                                                                                                       //
				this.maxS = 100; // max allowed saturation (0 - 100)                                                               // 991
                                                                                                                       //
				this.minV = 0; // min allowed value (brightness) (0 - 100)                                                         // 992
                                                                                                                       //
				this.maxV = 100; // max allowed value (brightness) (0 - 100)                                                       // 993
				// Accessing the picked color                                                                                      // 995
				//                                                                                                                 // 996
                                                                                                                       //
				this.hsv = [0, 0, 100]; // read-only  [0-360, 0-100, 0-100]                                                        // 997
                                                                                                                       //
				this.rgb = [255, 255, 255]; // read-only  [0-255, 0-255, 0-255]                                                    // 998
				// Color Picker options                                                                                            // 1000
				//                                                                                                                 // 1001
                                                                                                                       //
				this.width = 181; // width of color palette (in px)                                                                // 1002
                                                                                                                       //
				this.height = 101; // height of color palette (in px)                                                              // 1003
                                                                                                                       //
				this.showOnClick = true; // whether to display the color picker when user clicks on its target element             // 1004
                                                                                                                       //
				this.mode = 'HSV'; // HSV | HVS | HS | HV - layout of the color picker controls                                    // 1005
                                                                                                                       //
				this.position = 'bottom'; // left | right | top | bottom - position relative to the target element                 // 1006
                                                                                                                       //
				this.smartPosition = true; // automatically change picker position when there is not enough space for it           // 1007
                                                                                                                       //
				this.sliderSize = 16; // px                                                                                        // 1008
                                                                                                                       //
				this.crossSize = 8; // px                                                                                          // 1009
                                                                                                                       //
				this.closable = false; // whether to display the Close button                                                      // 1010
                                                                                                                       //
				this.closeText = 'Close';                                                                                          // 1011
				this.buttonColor = '#000000'; // CSS color                                                                         // 1012
                                                                                                                       //
				this.buttonHeight = 18; // px                                                                                      // 1013
                                                                                                                       //
				this.padding = 8; // px                                                                                            // 1014
                                                                                                                       //
				this.backgroundColor = '#FFFFFF'; // CSS color                                                                     // 1015
                                                                                                                       //
				this.borderWidth = 1; // px                                                                                        // 1016
                                                                                                                       //
				this.borderColor = '#BBBBBB'; // CSS color                                                                         // 1017
                                                                                                                       //
				this.borderRadius = 4; // px                                                                                       // 1018
                                                                                                                       //
				this.insetWidth = 1; // px                                                                                         // 1019
                                                                                                                       //
				this.insetColor = '#BBBBBB'; // CSS color                                                                          // 1020
                                                                                                                       //
				this.shadow = false; // whether to display shadow                                                                  // 1021
                                                                                                                       //
				this.shadowBlur = 15; // px                                                                                        // 1022
                                                                                                                       //
				this.shadowColor = 'rgba(0,0,0,0.2)'; // CSS color                                                                 // 1023
                                                                                                                       //
				this.pointerColor = '#4C4C4C'; // px                                                                               // 1024
                                                                                                                       //
				this.pointerBorderColor = '#FFFFFF'; // px                                                                         // 1025
                                                                                                                       //
				this.pointerBorderWidth = 1; // px                                                                                 // 1026
                                                                                                                       //
				this.pointerThickness = 2; // px                                                                                   // 1027
                                                                                                                       //
				this.zIndex = 1000;                                                                                                // 1028
				this.container = null; // where to append the color picker (BODY element by default)                               // 1029
                                                                                                                       //
				for (var opt in meteorBabelHelpers.sanitizeForInObject(options)) {                                                 // 1032
					if (options.hasOwnProperty(opt)) {                                                                                // 1033
						this[opt] = options[opt];                                                                                        // 1034
					}                                                                                                                 // 1035
				}                                                                                                                  // 1036
                                                                                                                       //
				this.hide = function () {                                                                                          // 1039
					if (isPickerOwner()) {                                                                                            // 1040
						detachPicker();                                                                                                  // 1041
					}                                                                                                                 // 1042
				};                                                                                                                 // 1043
                                                                                                                       //
				this.show = function () {                                                                                          // 1046
					drawPicker();                                                                                                     // 1047
				};                                                                                                                 // 1048
                                                                                                                       //
				this.redraw = function () {                                                                                        // 1051
					if (isPickerOwner()) {                                                                                            // 1052
						drawPicker();                                                                                                    // 1053
					}                                                                                                                 // 1054
				};                                                                                                                 // 1055
                                                                                                                       //
				this.importColor = function () {                                                                                   // 1058
					if (!this.valueElement) {                                                                                         // 1059
						this.exportColor();                                                                                              // 1060
					} else {                                                                                                          // 1061
						if (jsc.isElementType(this.valueElement, 'input')) {                                                             // 1062
							if (!this.refine) {                                                                                             // 1063
								if (!this.fromString(this.valueElement.value, jsc.leaveValue)) {                                               // 1064
									if (this.styleElement) {                                                                                      // 1065
										this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;                   // 1066
										this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;                   // 1067
										this.styleElement.style.color = this.styleElement._jscOrigStyle.color;                                       // 1068
									}                                                                                                             // 1069
                                                                                                                       //
									this.exportColor(jsc.leaveValue | jsc.leaveStyle);                                                            // 1070
								}                                                                                                              // 1071
							} else if (!this.required && /^\s*$/.test(this.valueElement.value)) {                                           // 1072
								this.valueElement.value = '';                                                                                  // 1073
                                                                                                                       //
								if (this.styleElement) {                                                                                       // 1074
									this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;                    // 1075
									this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;                    // 1076
									this.styleElement.style.color = this.styleElement._jscOrigStyle.color;                                        // 1077
								}                                                                                                              // 1078
                                                                                                                       //
								this.exportColor(jsc.leaveValue | jsc.leaveStyle);                                                             // 1079
							} else if (this.fromString(this.valueElement.value)) {// managed to import color successfully from the value -> OK, don't do anything
							} else {                                                                                                        // 1083
								this.exportColor();                                                                                            // 1084
							}                                                                                                               // 1085
						} else {                                                                                                         // 1086
							// not an input element -> doesn't have any value                                                               // 1087
							this.exportColor();                                                                                             // 1088
						}                                                                                                                // 1089
					}                                                                                                                 // 1090
				};                                                                                                                 // 1091
                                                                                                                       //
				this.exportColor = function (flags) {                                                                              // 1094
					if (!(flags & jsc.leaveValue) && this.valueElement) {                                                             // 1095
						var value = this.toString();                                                                                     // 1096
                                                                                                                       //
						if (this.uppercase) {                                                                                            // 1097
							value = value.toUpperCase();                                                                                    // 1097
						}                                                                                                                // 1097
                                                                                                                       //
						if (this.hash) {                                                                                                 // 1098
							value = '#' + value;                                                                                            // 1098
						}                                                                                                                // 1098
                                                                                                                       //
						if (jsc.isElementType(this.valueElement, 'input')) {                                                             // 1100
							this.valueElement.value = value;                                                                                // 1101
						} else {                                                                                                         // 1102
							this.valueElement.innerHTML = value;                                                                            // 1103
						}                                                                                                                // 1104
					} // if (!(flags & jsc.leaveStyle)) {                                                                             // 1105
					// 	if (this.styleElement) {                                                                                      // 1107
					// 		this.styleElement.style.backgroundImage = 'none';                                                            // 1108
					// 		this.styleElement.style.backgroundColor = '#' + this.toString();                                             // 1109
					// 		this.styleElement.style.color = this.isLight() ? '#000' : '#FFF';                                            // 1110
					// 	}                                                                                                             // 1111
					// }                                                                                                              // 1112
                                                                                                                       //
                                                                                                                       //
					if (!(flags & jsc.leavePad) && isPickerOwner()) {                                                                 // 1113
						redrawPad();                                                                                                     // 1114
					}                                                                                                                 // 1115
                                                                                                                       //
					if (!(flags & jsc.leaveSld) && isPickerOwner()) {                                                                 // 1116
						redrawSld();                                                                                                     // 1117
					}                                                                                                                 // 1118
				}; // h: 0-360                                                                                                     // 1119
				// s: 0-100                                                                                                        // 1123
				// v: 0-100                                                                                                        // 1124
				//                                                                                                                 // 1125
                                                                                                                       //
                                                                                                                       //
				this.fromHSV = function (h, s, v, flags) {                                                                         // 1126
					// null = don't change                                                                                            // 1126
					if (h !== null) {                                                                                                 // 1127
						if (isNaN(h)) {                                                                                                  // 1128
							return false;                                                                                                   // 1128
						}                                                                                                                // 1128
                                                                                                                       //
						h = Math.max(0, Math.min(360, h));                                                                               // 1129
					}                                                                                                                 // 1130
                                                                                                                       //
					if (s !== null) {                                                                                                 // 1131
						if (isNaN(s)) {                                                                                                  // 1132
							return false;                                                                                                   // 1132
						}                                                                                                                // 1132
                                                                                                                       //
						s = Math.max(0, Math.min(100, this.maxS, s), this.minS);                                                         // 1133
					}                                                                                                                 // 1134
                                                                                                                       //
					if (v !== null) {                                                                                                 // 1135
						if (isNaN(v)) {                                                                                                  // 1136
							return false;                                                                                                   // 1136
						}                                                                                                                // 1136
                                                                                                                       //
						v = Math.max(0, Math.min(100, this.maxV, v), this.minV);                                                         // 1137
					}                                                                                                                 // 1138
                                                                                                                       //
					this.rgb = HSV_RGB(h === null ? this.hsv[0] : this.hsv[0] = h, s === null ? this.hsv[1] : this.hsv[1] = s, v === null ? this.hsv[2] : this.hsv[2] = v);
					this.exportColor(flags);                                                                                          // 1146
				}; // r: 0-255                                                                                                     // 1147
				// g: 0-255                                                                                                        // 1151
				// b: 0-255                                                                                                        // 1152
				//                                                                                                                 // 1153
                                                                                                                       //
                                                                                                                       //
				this.fromRGB = function (r, g, b, flags) {                                                                         // 1154
					// null = don't change                                                                                            // 1154
					if (r !== null) {                                                                                                 // 1155
						if (isNaN(r)) {                                                                                                  // 1156
							return false;                                                                                                   // 1156
						}                                                                                                                // 1156
                                                                                                                       //
						r = Math.max(0, Math.min(255, r));                                                                               // 1157
					}                                                                                                                 // 1158
                                                                                                                       //
					if (g !== null) {                                                                                                 // 1159
						if (isNaN(g)) {                                                                                                  // 1160
							return false;                                                                                                   // 1160
						}                                                                                                                // 1160
                                                                                                                       //
						g = Math.max(0, Math.min(255, g));                                                                               // 1161
					}                                                                                                                 // 1162
                                                                                                                       //
					if (b !== null) {                                                                                                 // 1163
						if (isNaN(b)) {                                                                                                  // 1164
							return false;                                                                                                   // 1164
						}                                                                                                                // 1164
                                                                                                                       //
						b = Math.max(0, Math.min(255, b));                                                                               // 1165
					}                                                                                                                 // 1166
                                                                                                                       //
					var hsv = RGB_HSV(r === null ? this.rgb[0] : r, g === null ? this.rgb[1] : g, b === null ? this.rgb[2] : b);      // 1168
                                                                                                                       //
					if (hsv[0] !== null) {                                                                                            // 1173
						this.hsv[0] = Math.max(0, Math.min(360, hsv[0]));                                                                // 1174
					}                                                                                                                 // 1175
                                                                                                                       //
					if (hsv[2] !== 0) {                                                                                               // 1176
						this.hsv[1] = hsv[1] === null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));                 // 1177
					}                                                                                                                 // 1178
                                                                                                                       //
					this.hsv[2] = hsv[2] === null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2])); // update RGB according to final HSV, as some values might be trimmed
                                                                                                                       //
					var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);                                                         // 1182
					this.rgb[0] = rgb[0];                                                                                             // 1183
					this.rgb[1] = rgb[1];                                                                                             // 1184
					this.rgb[2] = rgb[2];                                                                                             // 1185
					this.exportColor(flags);                                                                                          // 1187
				};                                                                                                                 // 1188
                                                                                                                       //
				this.fromString = function (str, flags) {                                                                          // 1191
					var m;                                                                                                            // 1192
                                                                                                                       //
					if (m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {                                                      // 1193
						// HEX notation                                                                                                  // 1194
						//                                                                                                               // 1195
						if (m[1].length === 6) {                                                                                         // 1197
							// 6-char notation                                                                                              // 1198
							this.fromRGB(parseInt(m[1].substr(0, 2), 16), parseInt(m[1].substr(2, 2), 16), parseInt(m[1].substr(4, 2), 16), flags);
						} else {                                                                                                         // 1205
							// 3-char notation                                                                                              // 1206
							this.fromRGB(parseInt(m[1].charAt(0) + m[1].charAt(0), 16), parseInt(m[1].charAt(1) + m[1].charAt(1), 16), parseInt(m[1].charAt(2) + m[1].charAt(2), 16), flags);
						}                                                                                                                // 1213
                                                                                                                       //
						return true;                                                                                                     // 1214
					} else if (m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {                                                          // 1216
						var params = m[1].split(',');                                                                                    // 1217
						var re = /^\s*(\d*)(\.\d+)?\s*$/;                                                                                // 1218
						var mR, mG, mB;                                                                                                  // 1219
                                                                                                                       //
						if (params.length >= 3 && (mR = params[0].match(re)) && (mG = params[1].match(re)) && (mB = params[2].match(re))) {
							var r = parseFloat((mR[1] || '0') + (mR[2] || ''));                                                             // 1226
							var g = parseFloat((mG[1] || '0') + (mG[2] || ''));                                                             // 1227
							var b = parseFloat((mB[1] || '0') + (mB[2] || ''));                                                             // 1228
							this.fromRGB(r, g, b, flags);                                                                                   // 1229
							return true;                                                                                                    // 1230
						}                                                                                                                // 1231
					}                                                                                                                 // 1232
                                                                                                                       //
					return false;                                                                                                     // 1233
				};                                                                                                                 // 1234
                                                                                                                       //
				this.toString = function () {                                                                                      // 1237
					return (0x100 | Math.round(this.rgb[0])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[1])).toString(16).substr(1) + (0x100 | Math.round(this.rgb[2])).toString(16).substr(1);
				};                                                                                                                 // 1243
                                                                                                                       //
				this.toHEXString = function () {                                                                                   // 1246
					return '#' + this.toString().toUpperCase();                                                                       // 1247
				};                                                                                                                 // 1248
                                                                                                                       //
				this.toRGBString = function () {                                                                                   // 1251
					return 'rgb(' + Math.round(this.rgb[0]) + ',' + Math.round(this.rgb[1]) + ',' + Math.round(this.rgb[2]) + ')';    // 1252
				};                                                                                                                 // 1257
                                                                                                                       //
				this.isLight = function () {                                                                                       // 1260
					return 0.213 * this.rgb[0] + 0.715 * this.rgb[1] + 0.072 * this.rgb[2] > 255 / 2;                                 // 1261
				};                                                                                                                 // 1267
                                                                                                                       //
				this._processParentElementsInDOM = function () {                                                                   // 1270
					if (this._linkedElementsProcessed) {                                                                              // 1271
						return;                                                                                                          // 1271
					}                                                                                                                 // 1271
                                                                                                                       //
					this._linkedElementsProcessed = true;                                                                             // 1272
					var elm = this.targetElement;                                                                                     // 1274
                                                                                                                       //
					do {                                                                                                              // 1275
						// If the target element or one of its parent nodes has fixed position,                                          // 1276
						// then use fixed positioning instead                                                                            // 1277
						//                                                                                                               // 1278
						// Note: In Firefox, getComputedStyle returns null in a hidden iframe,                                           // 1279
						// that's why we need to check if the returned style object is non-empty                                         // 1280
						var currStyle = jsc.getStyle(elm);                                                                               // 1281
                                                                                                                       //
						if (currStyle && currStyle.position.toLowerCase() === 'fixed') {                                                 // 1282
							this.fixed = true;                                                                                              // 1283
						}                                                                                                                // 1284
                                                                                                                       //
						if (elm !== this.targetElement) {                                                                                // 1286
							// Ensure to attach onParentScroll only once to each parent element                                             // 1287
							// (multiple targetElements can share the same parent nodes)                                                    // 1288
							//                                                                                                              // 1289
							// Note: It's not just offsetParents that can be scrollable,                                                    // 1290
							// that's why we loop through all parent nodes                                                                  // 1291
							if (!elm._jscEventsAttached) {                                                                                  // 1292
								jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);                                                            // 1293
								elm._jscEventsAttached = true;                                                                                 // 1294
							}                                                                                                               // 1295
						}                                                                                                                // 1296
					} while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'));                                              // 1297
				}; // r: 0-255                                                                                                     // 1298
				// g: 0-255                                                                                                        // 1302
				// b: 0-255                                                                                                        // 1303
				//                                                                                                                 // 1304
				// returns: [ 0-360, 0-100, 0-100 ]                                                                                // 1305
				//                                                                                                                 // 1306
                                                                                                                       //
                                                                                                                       //
				function RGB_HSV(r, g, b) {                                                                                        // 1307
					r /= 255;                                                                                                         // 1308
					g /= 255;                                                                                                         // 1309
					b /= 255;                                                                                                         // 1310
					var n = Math.min(Math.min(r, g), b);                                                                              // 1311
					var v = Math.max(Math.max(r, g), b);                                                                              // 1312
					var m = v - n;                                                                                                    // 1313
                                                                                                                       //
					if (m === 0) {                                                                                                    // 1314
						return [null, 0, 100 * v];                                                                                       // 1314
					}                                                                                                                 // 1314
                                                                                                                       //
					var h = r === n ? 3 + (b - g) / m : g === n ? 5 + (r - b) / m : 1 + (g - r) / m;                                  // 1315
					return [60 * (h === 6 ? 0 : h), 100 * (m / v), 100 * v];                                                          // 1316
				} // h: 0-360                                                                                                      // 1321
				// s: 0-100                                                                                                        // 1325
				// v: 0-100                                                                                                        // 1326
				//                                                                                                                 // 1327
				// returns: [ 0-255, 0-255, 0-255 ]                                                                                // 1328
				//                                                                                                                 // 1329
                                                                                                                       //
                                                                                                                       //
				function HSV_RGB(h, s, v) {                                                                                        // 1330
					var u = 255 * (v / 100);                                                                                          // 1331
                                                                                                                       //
					if (h === null) {                                                                                                 // 1333
						return [u, u, u];                                                                                                // 1334
					}                                                                                                                 // 1335
                                                                                                                       //
					h /= 60;                                                                                                          // 1337
					s /= 100;                                                                                                         // 1338
					var i = Math.floor(h);                                                                                            // 1340
					var f = i % 2 ? h - i : 1 - (h - i);                                                                              // 1341
					var m = u * (1 - s);                                                                                              // 1342
					var n = u * (1 - s * f);                                                                                          // 1343
                                                                                                                       //
					switch (i) {                                                                                                      // 1344
						case 6:                                                                                                          // 1345
						case 0:                                                                                                          // 1346
							return [u, n, m];                                                                                               // 1346
                                                                                                                       //
						case 1:                                                                                                          // 1347
							return [n, u, m];                                                                                               // 1347
                                                                                                                       //
						case 2:                                                                                                          // 1348
							return [m, u, n];                                                                                               // 1348
                                                                                                                       //
						case 3:                                                                                                          // 1349
							return [m, n, u];                                                                                               // 1349
                                                                                                                       //
						case 4:                                                                                                          // 1350
							return [n, m, u];                                                                                               // 1350
                                                                                                                       //
						case 5:                                                                                                          // 1351
							return [u, m, n];                                                                                               // 1351
					}                                                                                                                 // 1344
				}                                                                                                                  // 1353
                                                                                                                       //
				function detachPicker() {                                                                                          // 1356
					jsc.unsetClass(THIS.targetElement, THIS.activeClass);                                                             // 1357
					jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);                                                          // 1358
					delete jsc.picker.owner;                                                                                          // 1359
				}                                                                                                                  // 1360
                                                                                                                       //
				function drawPicker() {                                                                                            // 1363
					// At this point, when drawing the picker, we know what the parent elements are                                   // 1365
					// and we can do all related DOM operations, such as registering events on them                                   // 1366
					// or checking their positioning                                                                                  // 1367
					THIS._processParentElementsInDOM();                                                                               // 1368
                                                                                                                       //
					if (!jsc.picker) {                                                                                                // 1370
						jsc.picker = {                                                                                                   // 1371
							owner: null,                                                                                                    // 1372
							wrap: document.createElement('div'),                                                                            // 1373
							box: document.createElement('div'),                                                                             // 1374
							boxS: document.createElement('div'),                                                                            // 1375
							// shadow area                                                                                                  // 1375
							boxB: document.createElement('div'),                                                                            // 1376
							// border                                                                                                       // 1376
							pad: document.createElement('div'),                                                                             // 1377
							padB: document.createElement('div'),                                                                            // 1378
							// border                                                                                                       // 1378
							padM: document.createElement('div'),                                                                            // 1379
							// mouse/touch area                                                                                             // 1379
							padPal: jsc.createPalette(),                                                                                    // 1380
							cross: document.createElement('div'),                                                                           // 1381
							crossBY: document.createElement('div'),                                                                         // 1382
							// border Y                                                                                                     // 1382
							crossBX: document.createElement('div'),                                                                         // 1383
							// border X                                                                                                     // 1383
							crossLY: document.createElement('div'),                                                                         // 1384
							// line Y                                                                                                       // 1384
							crossLX: document.createElement('div'),                                                                         // 1385
							// line X                                                                                                       // 1385
							sld: document.createElement('div'),                                                                             // 1386
							sldB: document.createElement('div'),                                                                            // 1387
							// border                                                                                                       // 1387
							sldM: document.createElement('div'),                                                                            // 1388
							// mouse/touch area                                                                                             // 1388
							sldGrad: jsc.createSliderGradient(),                                                                            // 1389
							sldPtrS: document.createElement('div'),                                                                         // 1390
							// slider pointer spacer                                                                                        // 1390
							sldPtrIB: document.createElement('div'),                                                                        // 1391
							// slider pointer inner border                                                                                  // 1391
							sldPtrMB: document.createElement('div'),                                                                        // 1392
							// slider pointer middle border                                                                                 // 1392
							sldPtrOB: document.createElement('div'),                                                                        // 1393
							// slider pointer outer border                                                                                  // 1393
							btn: document.createElement('div'),                                                                             // 1394
							btnT: document.createElement('span') // text                                                                    // 1395
                                                                                                                       //
						};                                                                                                               // 1371
						jsc.picker.pad.appendChild(jsc.picker.padPal.elm);                                                               // 1398
						jsc.picker.padB.appendChild(jsc.picker.pad);                                                                     // 1399
						jsc.picker.cross.appendChild(jsc.picker.crossBY);                                                                // 1400
						jsc.picker.cross.appendChild(jsc.picker.crossBX);                                                                // 1401
						jsc.picker.cross.appendChild(jsc.picker.crossLY);                                                                // 1402
						jsc.picker.cross.appendChild(jsc.picker.crossLX);                                                                // 1403
						jsc.picker.padB.appendChild(jsc.picker.cross);                                                                   // 1404
						jsc.picker.box.appendChild(jsc.picker.padB);                                                                     // 1405
						jsc.picker.box.appendChild(jsc.picker.padM);                                                                     // 1406
						jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);                                                              // 1408
						jsc.picker.sldB.appendChild(jsc.picker.sld);                                                                     // 1409
						jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);                                                                // 1410
						jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);                                                            // 1411
						jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);                                                            // 1412
						jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);                                                             // 1413
						jsc.picker.box.appendChild(jsc.picker.sldB);                                                                     // 1414
						jsc.picker.box.appendChild(jsc.picker.sldM);                                                                     // 1415
						jsc.picker.btn.appendChild(jsc.picker.btnT);                                                                     // 1417
						jsc.picker.box.appendChild(jsc.picker.btn);                                                                      // 1418
						jsc.picker.boxB.appendChild(jsc.picker.box);                                                                     // 1420
						jsc.picker.wrap.appendChild(jsc.picker.boxS);                                                                    // 1421
						jsc.picker.wrap.appendChild(jsc.picker.boxB);                                                                    // 1422
					}                                                                                                                 // 1423
                                                                                                                       //
					var p = jsc.picker;                                                                                               // 1425
					var displaySlider = !!jsc.getSliderComponent(THIS);                                                               // 1427
					var dims = jsc.getPickerDims(THIS);                                                                               // 1428
					var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;                    // 1429
					var padToSliderPadding = jsc.getPadToSliderPadding(THIS);                                                         // 1430
					var borderRadius = Math.min(THIS.borderRadius, Math.round(THIS.padding * Math.PI)); // px                         // 1431
                                                                                                                       //
					var padCursor = 'crosshair'; // wrap                                                                              // 1434
                                                                                                                       //
					p.wrap.style.clear = 'both';                                                                                      // 1437
					p.wrap.style.width = dims[0] + 2 * THIS.borderWidth + 'px';                                                       // 1438
					p.wrap.style.height = dims[1] + 2 * THIS.borderWidth + 'px';                                                      // 1439
					p.wrap.style.zIndex = THIS.zIndex; // picker                                                                      // 1440
                                                                                                                       //
					p.box.style.width = dims[0] + 'px';                                                                               // 1443
					p.box.style.height = dims[1] + 'px';                                                                              // 1444
					p.boxS.style.position = 'absolute';                                                                               // 1446
					p.boxS.style.left = '0';                                                                                          // 1447
					p.boxS.style.top = '0';                                                                                           // 1448
					p.boxS.style.width = '100%';                                                                                      // 1449
					p.boxS.style.height = '100%';                                                                                     // 1450
					jsc.setBorderRadius(p.boxS, borderRadius + 'px'); // picker border                                                // 1451
                                                                                                                       //
					p.boxB.style.position = 'relative';                                                                               // 1454
					p.boxB.style.border = THIS.borderWidth + 'px solid';                                                              // 1455
					p.boxB.style.borderColor = THIS.borderColor;                                                                      // 1456
					p.boxB.style.background = THIS.backgroundColor;                                                                   // 1457
					jsc.setBorderRadius(p.boxB, borderRadius + 'px'); // IE hack:                                                     // 1458
					// If the element is transparent, IE will trigger the event on the elements under it,                             // 1461
					// e.g. on Canvas or on elements with border                                                                      // 1462
                                                                                                                       //
					p.padM.style.background = p.sldM.style.background = '#FFF';                                                       // 1463
					jsc.setStyle(p.padM, 'opacity', '0');                                                                             // 1466
					jsc.setStyle(p.sldM, 'opacity', '0'); // pad                                                                      // 1467
                                                                                                                       //
					p.pad.style.position = 'relative';                                                                                // 1470
					p.pad.style.width = THIS.width + 'px';                                                                            // 1471
					p.pad.style.height = THIS.height + 'px'; // pad palettes (HSV and HVS)                                            // 1472
                                                                                                                       //
					p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS)); // pad border                                 // 1475
                                                                                                                       //
					p.padB.style.position = 'absolute';                                                                               // 1478
					p.padB.style.left = THIS.padding + 'px';                                                                          // 1479
					p.padB.style.top = THIS.padding + 'px';                                                                           // 1480
					p.padB.style.border = THIS.insetWidth + 'px solid';                                                               // 1481
					p.padB.style.borderColor = THIS.insetColor; // pad mouse area                                                     // 1482
                                                                                                                       //
					p.padM._jscInstance = THIS;                                                                                       // 1485
					p.padM._jscControlName = 'pad';                                                                                   // 1486
					p.padM.style.position = 'absolute';                                                                               // 1487
					p.padM.style.left = '0';                                                                                          // 1488
					p.padM.style.top = '0';                                                                                           // 1489
					p.padM.style.width = THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2 + 'px';             // 1490
					p.padM.style.height = dims[1] + 'px';                                                                             // 1491
					p.padM.style.cursor = padCursor; // pad cross                                                                     // 1492
                                                                                                                       //
					p.cross.style.position = 'absolute';                                                                              // 1495
					p.cross.style.left = p.cross.style.top = '0';                                                                     // 1496
					p.cross.style.width = p.cross.style.height = crossOuterSize + 'px'; // pad cross border Y and X                   // 1499
                                                                                                                       //
					p.crossBY.style.position = p.crossBX.style.position = 'absolute';                                                 // 1504
					p.crossBY.style.background = p.crossBX.style.background = THIS.pointerBorderColor;                                // 1507
					p.crossBY.style.width = p.crossBX.style.height = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 'px';      // 1510
					p.crossBY.style.height = p.crossBX.style.width = crossOuterSize + 'px';                                           // 1513
					p.crossBY.style.left = p.crossBX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth + 'px';
					p.crossBY.style.top = p.crossBX.style.left = '0'; // pad cross line Y and X                                       // 1519
                                                                                                                       //
					p.crossLY.style.position = p.crossLX.style.position = 'absolute';                                                 // 1524
					p.crossLY.style.background = p.crossLX.style.background = THIS.pointerColor;                                      // 1527
					p.crossLY.style.height = p.crossLX.style.width = crossOuterSize - 2 * THIS.pointerBorderWidth + 'px';             // 1530
					p.crossLY.style.width = p.crossLX.style.height = THIS.pointerThickness + 'px';                                    // 1533
					p.crossLY.style.left = p.crossLX.style.top = Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) + 'px';
					p.crossLY.style.top = p.crossLX.style.left = THIS.pointerBorderWidth + 'px'; // slider                            // 1539
                                                                                                                       //
					p.sld.style.overflow = 'hidden';                                                                                  // 1544
					p.sld.style.width = THIS.sliderSize + 'px';                                                                       // 1545
					p.sld.style.height = THIS.height + 'px'; // slider gradient                                                       // 1546
                                                                                                                       //
					p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000'); // slider border                                    // 1549
                                                                                                                       //
					p.sldB.style.display = displaySlider ? 'block' : 'none';                                                          // 1552
					p.sldB.style.position = 'absolute';                                                                               // 1553
					p.sldB.style.right = THIS.padding + 'px';                                                                         // 1554
					p.sldB.style.top = THIS.padding + 'px';                                                                           // 1555
					p.sldB.style.border = THIS.insetWidth + 'px solid';                                                               // 1556
					p.sldB.style.borderColor = THIS.insetColor; // slider mouse area                                                  // 1557
                                                                                                                       //
					p.sldM._jscInstance = THIS;                                                                                       // 1560
					p.sldM._jscControlName = 'sld';                                                                                   // 1561
					p.sldM.style.display = displaySlider ? 'block' : 'none';                                                          // 1562
					p.sldM.style.position = 'absolute';                                                                               // 1563
					p.sldM.style.right = '0';                                                                                         // 1564
					p.sldM.style.top = '0';                                                                                           // 1565
					p.sldM.style.width = THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth + 'px';        // 1566
					p.sldM.style.height = dims[1] + 'px';                                                                             // 1567
					p.sldM.style.cursor = 'default'; // slider pointer inner and outer border                                         // 1568
                                                                                                                       //
					p.sldPtrIB.style.border = p.sldPtrOB.style.border = THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor; // slider pointer outer border
                                                                                                                       //
					p.sldPtrOB.style.position = 'absolute';                                                                           // 1576
					p.sldPtrOB.style.left = -(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';                            // 1577
					p.sldPtrOB.style.top = '0'; // slider pointer middle border                                                       // 1578
                                                                                                                       //
					p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor; // slider pointer spacer       // 1581
                                                                                                                       //
					p.sldPtrS.style.width = THIS.sliderSize + 'px';                                                                   // 1584
					p.sldPtrS.style.height = sliderPtrSpace + 'px'; // the Close button                                               // 1585
                                                                                                                       //
					function setBtnBorder() {                                                                                         // 1588
						var insetColors = THIS.insetColor.split(/\s+/);                                                                  // 1589
						var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
						p.btn.style.borderColor = outsetColor;                                                                           // 1591
					}                                                                                                                 // 1592
                                                                                                                       //
					p.btn.style.display = THIS.closable ? 'block' : 'none';                                                           // 1593
					p.btn.style.position = 'absolute';                                                                                // 1594
					p.btn.style.left = THIS.padding + 'px';                                                                           // 1595
					p.btn.style.bottom = THIS.padding + 'px';                                                                         // 1596
					p.btn.style.padding = '0 15px';                                                                                   // 1597
					p.btn.style.height = THIS.buttonHeight + 'px';                                                                    // 1598
					p.btn.style.border = THIS.insetWidth + 'px solid';                                                                // 1599
					setBtnBorder();                                                                                                   // 1600
					p.btn.style.color = THIS.buttonColor;                                                                             // 1601
					p.btn.style.font = '12px sans-serif';                                                                             // 1602
					p.btn.style.textAlign = 'center';                                                                                 // 1603
                                                                                                                       //
					try {                                                                                                             // 1604
						p.btn.style.cursor = 'pointer';                                                                                  // 1605
					} catch (eOldIE) {                                                                                                // 1606
						p.btn.style.cursor = 'hand';                                                                                     // 1607
					}                                                                                                                 // 1608
                                                                                                                       //
					p.btn.onmousedown = function () {                                                                                 // 1609
						THIS.hide();                                                                                                     // 1610
					};                                                                                                                // 1611
                                                                                                                       //
					p.btnT.style.lineHeight = THIS.buttonHeight + 'px';                                                               // 1612
					p.btnT.innerHTML = '';                                                                                            // 1613
					p.btnT.appendChild(document.createTextNode(THIS.closeText)); // place pointers                                    // 1614
                                                                                                                       //
					redrawPad();                                                                                                      // 1617
					redrawSld(); // If we are changing the owner without first closing the picker,                                    // 1618
					// make sure to first deal with the old owner                                                                     // 1621
                                                                                                                       //
					if (jsc.picker.owner && jsc.picker.owner !== THIS) {                                                              // 1622
						jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass);                                                // 1623
					} // Set the new picker owner                                                                                     // 1624
                                                                                                                       //
                                                                                                                       //
					jsc.picker.owner = THIS; // The redrawPosition() method needs picker.owner to be set, that's why we call it here,
					// after setting the owner                                                                                        // 1630
                                                                                                                       //
					if (jsc.isElementType(container, 'body')) {                                                                       // 1631
						jsc.redrawPosition();                                                                                            // 1632
					} else {                                                                                                          // 1633
						jsc._drawPosition(THIS, 0, 0, 'relative', false);                                                                // 1634
					}                                                                                                                 // 1635
                                                                                                                       //
					if (p.wrap.parentNode != container) {                                                                             // 1637
						container.appendChild(p.wrap);                                                                                   // 1638
					}                                                                                                                 // 1639
                                                                                                                       //
					jsc.setClass(THIS.targetElement, THIS.activeClass);                                                               // 1641
				}                                                                                                                  // 1642
                                                                                                                       //
				function redrawPad() {                                                                                             // 1645
					// redraw the pad pointer                                                                                         // 1646
					switch (jsc.getPadYComponent(THIS)) {                                                                             // 1647
						case 's':                                                                                                        // 1648
							var yComponent = 1;                                                                                             // 1648
							break;                                                                                                          // 1648
                                                                                                                       //
						case 'v':                                                                                                        // 1649
							var yComponent = 2;                                                                                             // 1649
							break;                                                                                                          // 1649
					}                                                                                                                 // 1647
                                                                                                                       //
					var x = Math.round(THIS.hsv[0] / 360 * (THIS.width - 1));                                                         // 1651
					var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));                                         // 1652
					var crossOuterSize = 2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize;                    // 1653
					var ofs = -Math.floor(crossOuterSize / 2);                                                                        // 1654
					jsc.picker.cross.style.left = x + ofs + 'px';                                                                     // 1655
					jsc.picker.cross.style.top = y + ofs + 'px'; // redraw the slider                                                 // 1656
                                                                                                                       //
					switch (jsc.getSliderComponent(THIS)) {                                                                           // 1659
						case 's':                                                                                                        // 1660
							var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);                                                              // 1661
							var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);                                                                // 1662
							var color1 = 'rgb(' + Math.round(rgb1[0]) + ',' + Math.round(rgb1[1]) + ',' + Math.round(rgb1[2]) + ')';        // 1663
							var color2 = 'rgb(' + Math.round(rgb2[0]) + ',' + Math.round(rgb2[1]) + ',' + Math.round(rgb2[2]) + ')';        // 1667
							jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);                                          // 1671
							break;                                                                                                          // 1672
                                                                                                                       //
						case 'v':                                                                                                        // 1673
							var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);                                                               // 1674
							var color1 = 'rgb(' + Math.round(rgb[0]) + ',' + Math.round(rgb[1]) + ',' + Math.round(rgb[2]) + ')';           // 1675
							var color2 = '#000';                                                                                            // 1679
							jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);                                          // 1680
							break;                                                                                                          // 1681
					}                                                                                                                 // 1659
				}                                                                                                                  // 1683
                                                                                                                       //
				function redrawSld() {                                                                                             // 1686
					var sldComponent = jsc.getSliderComponent(THIS);                                                                  // 1687
                                                                                                                       //
					if (sldComponent) {                                                                                               // 1688
						// redraw the slider pointer                                                                                     // 1689
						switch (sldComponent) {                                                                                          // 1690
							case 's':                                                                                                       // 1691
								var yComponent = 1;                                                                                            // 1691
								break;                                                                                                         // 1691
                                                                                                                       //
							case 'v':                                                                                                       // 1692
								var yComponent = 2;                                                                                            // 1692
								break;                                                                                                         // 1692
						}                                                                                                                // 1690
                                                                                                                       //
						var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));                                        // 1694
						jsc.picker.sldPtrOB.style.top = y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2) + 'px';
					}                                                                                                                 // 1696
				}                                                                                                                  // 1697
                                                                                                                       //
				function isPickerOwner() {                                                                                         // 1700
					return jsc.picker && jsc.picker.owner === THIS;                                                                   // 1701
				}                                                                                                                  // 1702
                                                                                                                       //
				function blurValue() {                                                                                             // 1705
					THIS.importColor();                                                                                               // 1706
				} // Find the target element                                                                                       // 1707
                                                                                                                       //
                                                                                                                       //
				if (typeof targetElement === 'string') {                                                                           // 1711
					var id = targetElement;                                                                                           // 1712
					var elm = document.getElementById(id);                                                                            // 1713
                                                                                                                       //
					if (elm) {                                                                                                        // 1714
						this.targetElement = elm;                                                                                        // 1715
					} else {                                                                                                          // 1716
						jsc.warn('Could not find target element with ID \'' + id + '\'');                                                // 1717
					}                                                                                                                 // 1718
				} else if (targetElement) {                                                                                        // 1719
					this.targetElement = targetElement;                                                                               // 1720
				} else {                                                                                                           // 1721
					jsc.warn('Invalid target element: \'' + targetElement + '\'');                                                    // 1722
				}                                                                                                                  // 1723
                                                                                                                       //
				if (this.targetElement._jscLinkedInstance) {                                                                       // 1725
					jsc.warn('Cannot link jscolor twice to the same element. Skipping.');                                             // 1726
					return;                                                                                                           // 1727
				}                                                                                                                  // 1728
                                                                                                                       //
				this.targetElement._jscLinkedInstance = this; // Find the value element                                            // 1729
                                                                                                                       //
				this.valueElement = jsc.fetchElement(this.valueElement); // Find the style element                                 // 1732
                                                                                                                       //
				this.styleElement = jsc.fetchElement(this.styleElement);                                                           // 1734
				var THIS = this;                                                                                                   // 1736
				var container = this.container ? jsc.fetchElement(this.container) : document.getElementsByTagName('body')[0];      // 1737
				var sliderPtrSpace = 3; // px                                                                                      // 1741
				// For BUTTON elements it's important to stop them from sending the form when clicked                              // 1743
				// (e.g. in Safari)                                                                                                // 1744
                                                                                                                       //
				if (jsc.isElementType(this.targetElement, 'button')) {                                                             // 1745
					if (this.targetElement.onclick) {                                                                                 // 1746
						var origCallback = this.targetElement.onclick;                                                                   // 1747
                                                                                                                       //
						this.targetElement.onclick = function (evt) {                                                                    // 1748
							origCallback.call(this, evt);                                                                                   // 1749
							return false;                                                                                                   // 1750
						};                                                                                                               // 1751
					} else {                                                                                                          // 1752
						this.targetElement.onclick = function () {                                                                       // 1753
							return false;                                                                                                   // 1753
						};                                                                                                               // 1753
					}                                                                                                                 // 1754
				} /*                                                                                                               // 1755
      var elm = this.targetElement;                                                                                    //
      do {                                                                                                             //
      	// If the target element or one of its offsetParents has fixed position,                                        //
      	// then use fixed positioning instead                                                                           //
      	//                                                                                                              //
      	// Note: In Firefox, getComputedStyle returns null in a hidden iframe,                                          //
      	// that's why we need to check if the returned style object is non-empty                                        //
      	var currStyle = jsc.getStyle(elm);                                                                              //
      	if (currStyle && currStyle.position.toLowerCase() === 'fixed') {                                                //
      		this.fixed = true;                                                                                             //
      	}                                                                                                               //
      		if (elm !== this.targetElement) {                                                                              //
      		// attach onParentScroll so that we can recompute the picker position                                          //
      		// when one of the offsetParents is scrolled                                                                   //
      		if (!elm._jscEventsAttached) {                                                                                 //
      			jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);                                                           //
      			elm._jscEventsAttached = true;                                                                                //
      		}                                                                                                              //
      	}                                                                                                               //
      } while ((elm = elm.offsetParent) && !jsc.isElementType(elm, 'body'));                                           //
      */ // valueElement                                                                                               //
                                                                                                                       //
                                                                                                                       //
				if (this.valueElement) {                                                                                           // 1782
					if (jsc.isElementType(this.valueElement, 'input')) {                                                              // 1783
						var updateField = function () {                                                                                  // 1784
							THIS.fromString(THIS.valueElement.value, jsc.leaveValue);                                                       // 1785
							jsc.dispatchFineChange(THIS);                                                                                   // 1786
						};                                                                                                               // 1787
                                                                                                                       //
						jsc.attachEvent(this.valueElement, 'keyup', updateField);                                                        // 1788
						jsc.attachEvent(this.valueElement, 'input', updateField);                                                        // 1789
						jsc.attachEvent(this.valueElement, 'blur', blurValue);                                                           // 1790
						this.valueElement.setAttribute('autocomplete', 'off');                                                           // 1791
					}                                                                                                                 // 1792
				} // styleElement                                                                                                  // 1793
                                                                                                                       //
                                                                                                                       //
				if (this.styleElement) {                                                                                           // 1796
					this.styleElement._jscOrigStyle = {                                                                               // 1797
						backgroundImage: this.styleElement.style.backgroundImage,                                                        // 1798
						backgroundColor: this.styleElement.style.backgroundColor,                                                        // 1799
						color: this.styleElement.style.color                                                                             // 1800
					};                                                                                                                // 1797
				}                                                                                                                  // 1802
                                                                                                                       //
				if (this.value) {                                                                                                  // 1804
					// Try to set the color from the .value option and if unsuccessful,                                               // 1805
					// export the current color                                                                                       // 1806
					this.fromString(this.value) || this.exportColor();                                                                // 1807
				} else {                                                                                                           // 1808
					this.importColor();                                                                                               // 1809
				}                                                                                                                  // 1810
			}                                                                                                                   // 1811
		}; //================================                                                                                // 20
		// Public properties and methods                                                                                     // 1817
		//================================                                                                                   // 1818
		// By default, search for all elements with class="jscolor" and install a color picker on them.                      // 1821
		//                                                                                                                   // 1822
		// You can change what class name will be looked for by setting the property jscolor.lookupClass                     // 1823
		// anywhere in your HTML document. To completely disable the automatic lookup, set it to null.                       // 1824
		//                                                                                                                   // 1825
                                                                                                                       //
		jsc.jscolor.lookupClass = 'jscolor';                                                                                 // 1826
                                                                                                                       //
		jsc.jscolor.installByClassName = function (className) {                                                              // 1829
			var inputElms = document.getElementsByTagName('input');                                                             // 1830
			var buttonElms = document.getElementsByTagName('button');                                                           // 1831
			jsc.tryInstallOnElements(inputElms, className);                                                                     // 1833
			jsc.tryInstallOnElements(buttonElms, className);                                                                    // 1834
		};                                                                                                                   // 1835
                                                                                                                       //
		jsc.register();                                                                                                      // 1838
		return jsc.jscolor;                                                                                                  // 1841
	}();                                                                                                                  // 1844
}                                                                                                                      // 1844
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".less",
    ".css",
    ".html"
  ]
});
require("./node_modules/meteor/rocketchat:theme/client/vendor/jscolor.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:theme'] = {};

})();
