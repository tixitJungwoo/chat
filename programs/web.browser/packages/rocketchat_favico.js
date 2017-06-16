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

(function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/rocketchat_favico/favico.js                                                                             //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
/**                                                                                                                 // 1
 * @license MIT                                                                                                     // 2
 * @fileOverview Favico animations                                                                                  // 3
 * @author Miroslav Magda, http://blog.ejci.net                                                                     // 4
 * @version 0.3.10                                                                                                  // 5
 */                                                                                                                 // 6
                                                                                                                    // 7
/**                                                                                                                 // 8
 * Create new favico instance                                                                                       // 9
 * @param {Object} Options                                                                                          // 10
 * @return {Object} Favico object                                                                                   // 11
 * @example                                                                                                         // 12
 * var favico = new Favico({                                                                                        // 13
 *    bgColor : '#d00',                                                                                             // 14
 *    textColor : '#fff',                                                                                           // 15
 *    fontFamily : 'sans-serif',                                                                                    // 16
 *    fontStyle : 'bold',                                                                                           // 17
 *    position : 'down',                                                                                            // 18
 *    type : 'circle',                                                                                              // 19
 *    animation : 'slide',                                                                                          // 20
 *    dataUrl: function(url){},                                                                                     // 21
 *    win: top                                                                                                      // 22
 * });                                                                                                              // 23
 */                                                                                                                 // 24
(function() {                                                                                                       // 25
                                                                                                                    // 26
	var Favico = (function(opt) {                                                                                      // 27
		'use strict';                                                                                                     // 28
		opt = (opt) ? opt : {};                                                                                           // 29
		var _def = {                                                                                                      // 30
			bgColor: '#d00',                                                                                                 // 31
			textColor: '#fff',                                                                                               // 32
			fontFamily: 'sans-serif', //Arial,Verdana,Times New Roman,serif,sans-serif,...                                   // 33
			fontStyle: 'bold', //normal,italic,oblique,bold,bolder,lighter,100,200,300,400,500,600,700,800,900               // 34
			type: 'circle',                                                                                                  // 35
			position: 'down', // down, up, left, leftup (upleft)                                                             // 36
			animation: 'slide',                                                                                              // 37
			elementId: false,                                                                                                // 38
			dataUrl: false,                                                                                                  // 39
			win: window                                                                                                      // 40
		};                                                                                                                // 41
		var _opt, _orig, _h, _w, _canvas, _context, _img, _ready, _lastBadge, _running, _readyCb, _stop, _browser, _animTimeout, _drawTimeout, _doc;
                                                                                                                    // 43
		_browser = {};                                                                                                    // 44
		_browser.ff = typeof InstallTrigger !== 'undefined';                                                              // 45
		_browser.chrome = !!window.chrome;                                                                                // 46
		_browser.opera = !!window.opera || navigator.userAgent.indexOf('Opera') >= 0;                                     // 47
		_browser.ie = /*@cc_on!@*/ false;                                                                                 // 48
		_browser.safari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;                  // 49
		_browser.supported = (_browser.chrome || _browser.ff || _browser.opera);                                          // 50
                                                                                                                    // 51
		var _queue = [];                                                                                                  // 52
		_readyCb = function() {};                                                                                         // 53
		_ready = _stop = false;                                                                                           // 54
		/**                                                                                                               // 55
		 * Initialize favico                                                                                              // 56
		 */                                                                                                               // 57
		var init = function() {                                                                                           // 58
			//merge initial options                                                                                          // 59
			_opt = merge(_def, opt);                                                                                         // 60
			_opt.bgColor = hexToRgb(_opt.bgColor);                                                                           // 61
			_opt.textColor = hexToRgb(_opt.textColor);                                                                       // 62
			_opt.position = _opt.position.toLowerCase();                                                                     // 63
			_opt.animation = (animation.types['' + _opt.animation]) ? _opt.animation : _def.animation;                       // 64
                                                                                                                    // 65
			_doc = _opt.win.document;                                                                                        // 66
                                                                                                                    // 67
			var isUp = _opt.position.indexOf('up') > -1;                                                                     // 68
			var isLeft = _opt.position.indexOf('left') > -1;                                                                 // 69
                                                                                                                    // 70
			//transform the animations                                                                                       // 71
			if (isUp || isLeft) {                                                                                            // 72
				for (var a in animation.types) {                                                                                // 73
					for (var i = 0; i < animation.types[a].length; i++) {                                                          // 74
						var step = animation.types[a][i];                                                                             // 75
                                                                                                                    // 76
						if (isUp) {                                                                                                   // 77
							if (step.y < 0.6) {                                                                                          // 78
								step.y = step.y - 0.4;                                                                                      // 79
							} else {                                                                                                     // 80
								step.y = step.y - 2 * step.y + (1 - step.w);                                                                // 81
							}                                                                                                            // 82
						}                                                                                                             // 83
                                                                                                                    // 84
						if (isLeft) {                                                                                                 // 85
							if (step.x < 0.6) {                                                                                          // 86
								step.x = step.x - 0.4;                                                                                      // 87
							} else {                                                                                                     // 88
								step.x = step.x - 2 * step.x + (1 - step.h);                                                                // 89
							}                                                                                                            // 90
						}                                                                                                             // 91
                                                                                                                    // 92
						animation.types[a][i] = step;                                                                                 // 93
					}                                                                                                              // 94
				}                                                                                                               // 95
			}                                                                                                                // 96
			_opt.type = (type['' + _opt.type]) ? _opt.type : _def.type;                                                      // 97
                                                                                                                    // 98
			_orig = link.getIcons();                                                                                         // 99
			//create temp canvas                                                                                             // 100
			_canvas = document.createElement('canvas');                                                                      // 101
			//create temp image                                                                                              // 102
			_img = document.createElement('img');                                                                            // 103
			var lastIcon = _orig[_orig.length - 1];                                                                          // 104
			if (lastIcon.hasAttribute('href')) {                                                                             // 105
				_img.setAttribute('crossOrigin', 'anonymous');                                                                  // 106
				//get width/height                                                                                              // 107
				_img.onload = function() {                                                                                      // 108
					_h = (_img.height > 0) ? _img.height : 32;                                                                     // 109
					_w = (_img.width > 0) ? _img.width : 32;                                                                       // 110
					_canvas.height = _h;                                                                                           // 111
					_canvas.width = _w;                                                                                            // 112
					_context = _canvas.getContext('2d');                                                                           // 113
					icon.ready();                                                                                                  // 114
				};                                                                                                              // 115
				_img.setAttribute('src', lastIcon.getAttribute('href'));                                                        // 116
			} else {                                                                                                         // 117
				_img.onload = function() {                                                                                      // 118
					_h = 32;                                                                                                       // 119
					_w = 32;                                                                                                       // 120
					_img.height = _h;                                                                                              // 121
					_img.width = _w;                                                                                               // 122
					_canvas.height = _h;                                                                                           // 123
					_canvas.width = _w;                                                                                            // 124
					_context = _canvas.getContext('2d');                                                                           // 125
					icon.ready();                                                                                                  // 126
				};                                                                                                              // 127
				_img.setAttribute('src', '');                                                                                   // 128
			}                                                                                                                // 129
                                                                                                                    // 130
		};                                                                                                                // 131
		/**                                                                                                               // 132
		 * Icon namespace                                                                                                 // 133
		 */                                                                                                               // 134
		var icon = {};                                                                                                    // 135
		/**                                                                                                               // 136
		 * Icon is ready (reset icon) and start animation (if ther is any)                                                // 137
		 */                                                                                                               // 138
		icon.ready = function() {                                                                                         // 139
			_ready = true;                                                                                                   // 140
			icon.reset();                                                                                                    // 141
			_readyCb();                                                                                                      // 142
		};                                                                                                                // 143
		/**                                                                                                               // 144
		 * Reset icon to default state                                                                                    // 145
		 */                                                                                                               // 146
		icon.reset = function() {                                                                                         // 147
			//reset                                                                                                          // 148
			if (!_ready) {                                                                                                   // 149
				return;                                                                                                         // 150
			}                                                                                                                // 151
			_queue = [];                                                                                                     // 152
			_lastBadge = false;                                                                                              // 153
			_running = false;                                                                                                // 154
			_context.clearRect(0, 0, _w, _h);                                                                                // 155
			_context.drawImage(_img, 0, 0, _w, _h);                                                                          // 156
			//_stop=true;                                                                                                    // 157
			link.setIcon(_canvas);                                                                                           // 158
			//webcam('stop');                                                                                                // 159
			//video('stop');                                                                                                 // 160
			window.clearTimeout(_animTimeout);                                                                               // 161
			window.clearTimeout(_drawTimeout);                                                                               // 162
		};                                                                                                                // 163
		/**                                                                                                               // 164
		 * Start animation                                                                                                // 165
		 */                                                                                                               // 166
		icon.start = function() {                                                                                         // 167
			if (!_ready || _running) {                                                                                       // 168
				return;                                                                                                         // 169
			}                                                                                                                // 170
			var finished = function() {                                                                                      // 171
				_lastBadge = _queue[0];                                                                                         // 172
				_running = false;                                                                                               // 173
				if (_queue.length > 0) {                                                                                        // 174
					_queue.shift();                                                                                                // 175
					icon.start();                                                                                                  // 176
				}                                                                                                               // 177
			};                                                                                                               // 178
			if (_queue.length > 0) {                                                                                         // 179
				_running = true;                                                                                                // 180
				var run = function() {                                                                                          // 181
					// apply options for this animation                                                                            // 182
					['type', 'animation', 'bgColor', 'textColor', 'fontFamily', 'fontStyle'].forEach(function(a) {                 // 183
						if (a in _queue[0].options) {                                                                                 // 184
							_opt[a] = _queue[0].options[a];                                                                              // 185
						}                                                                                                             // 186
					});                                                                                                            // 187
					animation.run(_queue[0].options, function() {                                                                  // 188
						finished();                                                                                                   // 189
					}, false);                                                                                                     // 190
				};                                                                                                              // 191
				if (_lastBadge) {                                                                                               // 192
					animation.run(_lastBadge.options, function() {                                                                 // 193
						run();                                                                                                        // 194
					}, true);                                                                                                      // 195
				} else {                                                                                                        // 196
					run();                                                                                                         // 197
				}                                                                                                               // 198
			}                                                                                                                // 199
		};                                                                                                                // 200
                                                                                                                    // 201
		/**                                                                                                               // 202
		 * Badge types                                                                                                    // 203
		 */                                                                                                               // 204
		var type = {};                                                                                                    // 205
		var options = function(opt) {                                                                                     // 206
			opt.n = ((typeof opt.n) === 'number') ? Math.abs(opt.n | 0) : opt.n;                                             // 207
			opt.x = _w * opt.x;                                                                                              // 208
			opt.y = _h * opt.y;                                                                                              // 209
			opt.w = _w * opt.w;                                                                                              // 210
			opt.h = _h * opt.h;                                                                                              // 211
			opt.len = ('' + opt.n).length;                                                                                   // 212
			return opt;                                                                                                      // 213
		};                                                                                                                // 214
		/**                                                                                                               // 215
		 * Generate circle                                                                                                // 216
		 * @param {Object} opt Badge options                                                                              // 217
		 */                                                                                                               // 218
		type.circle = function(opt) {                                                                                     // 219
			opt = options(opt);                                                                                              // 220
			var more = false;                                                                                                // 221
			if (opt.len === 2) {                                                                                             // 222
				opt.x = opt.x - opt.w * 0.4;                                                                                    // 223
				opt.w = opt.w * 1.4;                                                                                            // 224
				more = true;                                                                                                    // 225
			} else if (opt.len >= 3) {                                                                                       // 226
				opt.x = opt.x - opt.w * 0.65;                                                                                   // 227
				opt.w = opt.w * 1.65;                                                                                           // 228
				more = true;                                                                                                    // 229
			}                                                                                                                // 230
			_context.clearRect(0, 0, _w, _h);                                                                                // 231
			_context.drawImage(_img, 0, 0, _w, _h);                                                                          // 232
			_context.beginPath();                                                                                            // 233
			_context.font = _opt.fontStyle + ' ' + Math.floor(opt.h * (opt.n > 99 ? 0.85 : 1)) + 'px ' + _opt.fontFamily;    // 234
			_context.textAlign = 'center';                                                                                   // 235
			if (more) {                                                                                                      // 236
				_context.moveTo(opt.x + opt.w / 2, opt.y);                                                                      // 237
				_context.lineTo(opt.x + opt.w - opt.h / 2, opt.y);                                                              // 238
				_context.quadraticCurveTo(opt.x + opt.w, opt.y, opt.x + opt.w, opt.y + opt.h / 2);                              // 239
				_context.lineTo(opt.x + opt.w, opt.y + opt.h - opt.h / 2);                                                      // 240
				_context.quadraticCurveTo(opt.x + opt.w, opt.y + opt.h, opt.x + opt.w - opt.h / 2, opt.y + opt.h);              // 241
				_context.lineTo(opt.x + opt.h / 2, opt.y + opt.h);                                                              // 242
				_context.quadraticCurveTo(opt.x, opt.y + opt.h, opt.x, opt.y + opt.h - opt.h / 2);                              // 243
				_context.lineTo(opt.x, opt.y + opt.h / 2);                                                                      // 244
				_context.quadraticCurveTo(opt.x, opt.y, opt.x + opt.h / 2, opt.y);                                              // 245
			} else {                                                                                                         // 246
				_context.arc(opt.x + opt.w / 2, opt.y + opt.h / 2, opt.h / 2, 0, 2 * Math.PI);                                  // 247
			}                                                                                                                // 248
			_context.fillStyle = 'rgba(' + _opt.bgColor.r + ',' + _opt.bgColor.g + ',' + _opt.bgColor.b + ',' + opt.o + ')';
			_context.fill();                                                                                                 // 250
			_context.closePath();                                                                                            // 251
			_context.beginPath();                                                                                            // 252
			_context.stroke();                                                                                               // 253
			_context.fillStyle = 'rgba(' + _opt.textColor.r + ',' + _opt.textColor.g + ',' + _opt.textColor.b + ',' + opt.o + ')';
			//_context.fillText((more) ? '9+' : opt.n, Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.15));
			if ((typeof opt.n) === 'number' && opt.n > 999) {                                                                // 256
				_context.fillText(((opt.n > 9999) ? 9 : Math.floor(opt.n / 1000)) + 'k+', Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.2));
			} else {                                                                                                         // 258
				_context.fillText(opt.n, Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.15));              // 259
			}                                                                                                                // 260
			_context.closePath();                                                                                            // 261
		};                                                                                                                // 262
		/**                                                                                                               // 263
		 * Generate rectangle                                                                                             // 264
		 * @param {Object} opt Badge options                                                                              // 265
		 */                                                                                                               // 266
		type.rectangle = function(opt) {                                                                                  // 267
			opt = options(opt);                                                                                              // 268
			var more = false;                                                                                                // 269
			if (opt.len === 2) {                                                                                             // 270
				opt.x = opt.x - opt.w * 0.4;                                                                                    // 271
				opt.w = opt.w * 1.4;                                                                                            // 272
				more = true;                                                                                                    // 273
			} else if (opt.len >= 3) {                                                                                       // 274
				opt.x = opt.x - opt.w * 0.65;                                                                                   // 275
				opt.w = opt.w * 1.65;                                                                                           // 276
				more = true;                                                                                                    // 277
			}                                                                                                                // 278
			_context.clearRect(0, 0, _w, _h);                                                                                // 279
			_context.drawImage(_img, 0, 0, _w, _h);                                                                          // 280
			_context.beginPath();                                                                                            // 281
			_context.font = _opt.fontStyle + ' ' + Math.floor(opt.h * (opt.n > 99 ? 0.9 : 1)) + 'px ' + _opt.fontFamily;     // 282
			_context.textAlign = 'center';                                                                                   // 283
			_context.fillStyle = 'rgba(' + _opt.bgColor.r + ',' + _opt.bgColor.g + ',' + _opt.bgColor.b + ',' + opt.o + ')';
			_context.fillRect(opt.x, opt.y, opt.w, opt.h);                                                                   // 285
			_context.fillStyle = 'rgba(' + _opt.textColor.r + ',' + _opt.textColor.g + ',' + _opt.textColor.b + ',' + opt.o + ')';
			//_context.fillText((more) ? '9+' : opt.n, Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.15));
			if ((typeof opt.n) === 'number' && opt.n > 999) {                                                                // 288
				_context.fillText(((opt.n > 9999) ? 9 : Math.floor(opt.n / 1000)) + 'k+', Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.2));
			} else {                                                                                                         // 290
				_context.fillText(opt.n, Math.floor(opt.x + opt.w / 2), Math.floor(opt.y + opt.h - opt.h * 0.15));              // 291
			}                                                                                                                // 292
			_context.closePath();                                                                                            // 293
		};                                                                                                                // 294
                                                                                                                    // 295
		/**                                                                                                               // 296
		 * Set badge                                                                                                      // 297
		 */                                                                                                               // 298
		var badge = function(number, opts) {                                                                              // 299
			opts = ((typeof opts) === 'string' ? {                                                                           // 300
				animation: opts                                                                                                 // 301
			} : opts) || {};                                                                                                 // 302
			_readyCb = function() {                                                                                          // 303
				try {                                                                                                           // 304
					if (typeof(number) === 'number' ? (number > 0) : (number !== '')) {                                            // 305
						var q = {                                                                                                     // 306
							type: 'badge',                                                                                               // 307
							options: {                                                                                                   // 308
								n: number                                                                                                   // 309
							}                                                                                                            // 310
						};                                                                                                            // 311
						if ('animation' in opts && animation.types['' + opts.animation]) {                                            // 312
							q.options.animation = '' + opts.animation;                                                                   // 313
						}                                                                                                             // 314
						if ('type' in opts && type['' + opts.type]) {                                                                 // 315
							q.options.type = '' + opts.type;                                                                             // 316
						}                                                                                                             // 317
						['bgColor', 'textColor'].forEach(function(o) {                                                                // 318
							if (o in opts) {                                                                                             // 319
								q.options[o] = hexToRgb(opts[o]);                                                                           // 320
							}                                                                                                            // 321
						});                                                                                                           // 322
						['fontStyle', 'fontFamily'].forEach(function(o) {                                                             // 323
							if (o in opts) {                                                                                             // 324
								q.options[o] = opts[o];                                                                                     // 325
							}                                                                                                            // 326
						});                                                                                                           // 327
						_queue.push(q);                                                                                               // 328
						if (_queue.length > 100) {                                                                                    // 329
							throw new Error('Too many badges requests in queue.');                                                       // 330
						}                                                                                                             // 331
						icon.start();                                                                                                 // 332
					} else {                                                                                                       // 333
						icon.reset();                                                                                                 // 334
					}                                                                                                              // 335
				} catch (e) {                                                                                                   // 336
					throw new Error('Error setting badge. Message: ' + e.message);                                                 // 337
				}                                                                                                               // 338
			};                                                                                                               // 339
			if (_ready) {                                                                                                    // 340
				_readyCb();                                                                                                     // 341
			}                                                                                                                // 342
		};                                                                                                                // 343
                                                                                                                    // 344
		/**                                                                                                               // 345
		 * Set image as icon                                                                                              // 346
		 */                                                                                                               // 347
		var image = function(imageElement) {                                                                              // 348
			_readyCb = function() {                                                                                          // 349
				try {                                                                                                           // 350
					var w = imageElement.width;                                                                                    // 351
					var h = imageElement.height;                                                                                   // 352
					var newImg = document.createElement('img');                                                                    // 353
					var ratio = (w / _w < h / _h) ? (w / _w) : (h / _h);                                                           // 354
					newImg.setAttribute('crossOrigin', 'anonymous');                                                               // 355
					newImg.onload = function() {                                                                                   // 356
						_context.clearRect(0, 0, _w, _h);                                                                             // 357
						_context.drawImage(newImg, 0, 0, _w, _h);                                                                     // 358
						link.setIcon(_canvas);                                                                                        // 359
					};                                                                                                             // 360
					newImg.setAttribute('src', imageElement.getAttribute('src'));                                                  // 361
					newImg.height = (h / ratio);                                                                                   // 362
					newImg.width = (w / ratio);                                                                                    // 363
				} catch (e) {                                                                                                   // 364
					throw new Error('Error setting image. Message: ' + e.message);                                                 // 365
				}                                                                                                               // 366
			};                                                                                                               // 367
			if (_ready) {                                                                                                    // 368
				_readyCb();                                                                                                     // 369
			}                                                                                                                // 370
		};                                                                                                                // 371
		/**                                                                                                               // 372
		 * Set video as icon                                                                                              // 373
		 */                                                                                                               // 374
		var video = function(videoElement) {                                                                              // 375
			_readyCb = function() {                                                                                          // 376
				try {                                                                                                           // 377
					if (videoElement === 'stop') {                                                                                 // 378
						_stop = true;                                                                                                 // 379
						icon.reset();                                                                                                 // 380
						_stop = false;                                                                                                // 381
						return;                                                                                                       // 382
					}                                                                                                              // 383
					//var w = videoElement.width;                                                                                  // 384
					//var h = videoElement.height;                                                                                 // 385
					//var ratio = (w / _w < h / _h) ? (w / _w) : (h / _h);                                                         // 386
					videoElement.addEventListener('play', function() {                                                             // 387
						drawVideo(this);                                                                                              // 388
					}, false);                                                                                                     // 389
                                                                                                                    // 390
				} catch (e) {                                                                                                   // 391
					throw new Error('Error setting video. Message: ' + e.message);                                                 // 392
				}                                                                                                               // 393
			};                                                                                                               // 394
			if (_ready) {                                                                                                    // 395
				_readyCb();                                                                                                     // 396
			}                                                                                                                // 397
		};                                                                                                                // 398
		/**                                                                                                               // 399
		 * Set video as icon                                                                                              // 400
		 */                                                                                                               // 401
		var webcam = function(action) {                                                                                   // 402
			//UR                                                                                                             // 403
			if (!window.URL || !window.URL.createObjectURL) {                                                                // 404
				window.URL = window.URL || {};                                                                                  // 405
				window.URL.createObjectURL = function(obj) {                                                                    // 406
					return obj;                                                                                                    // 407
				};                                                                                                              // 408
			}                                                                                                                // 409
			if (_browser.supported) {                                                                                        // 410
				var newVideo = false;                                                                                           // 411
				navigator.getUserMedia = navigator.getUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
				_readyCb = function() {                                                                                         // 413
					try {                                                                                                          // 414
						if (action === 'stop') {                                                                                      // 415
							_stop = true;                                                                                                // 416
							icon.reset();                                                                                                // 417
							_stop = false;                                                                                               // 418
							return;                                                                                                      // 419
						}                                                                                                             // 420
						newVideo = document.createElement('video');                                                                   // 421
						newVideo.width = _w;                                                                                          // 422
						newVideo.height = _h;                                                                                         // 423
						navigator.getUserMedia({                                                                                      // 424
							video: true,                                                                                                 // 425
							audio: false                                                                                                 // 426
						}, function(stream) {                                                                                         // 427
							newVideo.src = URL.createObjectURL(stream);                                                                  // 428
							newVideo.play();                                                                                             // 429
							drawVideo(newVideo);                                                                                         // 430
						}, function() {});                                                                                            // 431
					} catch (e) {                                                                                                  // 432
						throw new Error('Error setting webcam. Message: ' + e.message);                                               // 433
					}                                                                                                              // 434
				};                                                                                                              // 435
				if (_ready) {                                                                                                   // 436
					_readyCb();                                                                                                    // 437
				}                                                                                                               // 438
			}                                                                                                                // 439
                                                                                                                    // 440
		};                                                                                                                // 441
                                                                                                                    // 442
		/**                                                                                                               // 443
		 * Draw video to context and repeat :)                                                                            // 444
		 */                                                                                                               // 445
		function drawVideo(video) {                                                                                       // 446
			if (video.paused || video.ended || _stop) {                                                                      // 447
				return false;                                                                                                   // 448
			}                                                                                                                // 449
			//nasty hack for FF webcam (Thanks to Julian Ćwirko, kontakt@redsunmedia.pl)                                     // 450
			try {                                                                                                            // 451
				_context.clearRect(0, 0, _w, _h);                                                                               // 452
				_context.drawImage(video, 0, 0, _w, _h);                                                                        // 453
			} catch (e) {                                                                                                    // 454
                                                                                                                    // 455
			}                                                                                                                // 456
			_drawTimeout = setTimeout(function() {                                                                           // 457
				drawVideo(video);                                                                                               // 458
			}, animation.duration);                                                                                          // 459
			link.setIcon(_canvas);                                                                                           // 460
		}                                                                                                                 // 461
                                                                                                                    // 462
		var link = {};                                                                                                    // 463
		/**                                                                                                               // 464
		 * Get icons from HEAD tag or create a new <link> element                                                         // 465
		 */                                                                                                               // 466
		link.getIcons = function() {                                                                                      // 467
			var elms = [];                                                                                                   // 468
			//get link element                                                                                               // 469
			var getLinks = function() {                                                                                      // 470
				var icons = [];                                                                                                 // 471
				var links = _doc.getElementsByTagName('head')[0].getElementsByTagName('link');                                  // 472
				for (var i = 0; i < links.length; i++) {                                                                        // 473
					if ((/(^|\s)icon(\s|$)/i).test(links[i].getAttribute('rel'))) {                                                // 474
						icons.push(links[i]);                                                                                         // 475
					}                                                                                                              // 476
				}                                                                                                               // 477
				return icons;                                                                                                   // 478
			};                                                                                                               // 479
			if (_opt.element) {                                                                                              // 480
				elms = [_opt.element];                                                                                          // 481
			} else if (_opt.elementId) {                                                                                     // 482
				//if img element identified by elementId                                                                        // 483
				elms = [_doc.getElementById(_opt.elementId)];                                                                   // 484
				elms[0].setAttribute('href', elms[0].getAttribute('src'));                                                      // 485
			} else {                                                                                                         // 486
				//if link element                                                                                               // 487
				elms = getLinks();                                                                                              // 488
				if (elms.length === 0) {                                                                                        // 489
					elms = [_doc.createElement('link')];                                                                           // 490
					elms[0].setAttribute('rel', 'icon');                                                                           // 491
					_doc.getElementsByTagName('head')[0].appendChild(elms[0]);                                                     // 492
				}                                                                                                               // 493
			}                                                                                                                // 494
			elms.forEach(function(item) {                                                                                    // 495
				item.setAttribute('type', 'image/png');                                                                         // 496
			});                                                                                                              // 497
			return elms;                                                                                                     // 498
		};                                                                                                                // 499
		link.setIcon = function(canvas) {                                                                                 // 500
			var url = canvas.toDataURL('image/png');                                                                         // 501
			if (_opt.dataUrl) {                                                                                              // 502
				//if using custom exporter                                                                                      // 503
				_opt.dataUrl(url);                                                                                              // 504
			}                                                                                                                // 505
			if (_opt.element) {                                                                                              // 506
				_opt.element.setAttribute('href', url);                                                                         // 507
				_opt.element.setAttribute('src', url);                                                                          // 508
			} else if (_opt.elementId) {                                                                                     // 509
				//if is attached to element (image)                                                                             // 510
				var elm = _doc.getElementById(_opt.elementId);                                                                  // 511
				elm.setAttribute('href', url);                                                                                  // 512
				elm.setAttribute('src', url);                                                                                   // 513
			} else {                                                                                                         // 514
				//if is attached to fav icon                                                                                    // 515
				if (_browser.ff || _browser.opera) {                                                                            // 516
					//for FF we need to "recreate" element, atach to dom and remove old <link>                                     // 517
					//var originalType = _orig.getAttribute('rel');                                                                // 518
					var old = _orig[_orig.length - 1];                                                                             // 519
					var newIcon = _doc.createElement('link');                                                                      // 520
					_orig = [newIcon];                                                                                             // 521
					//_orig.setAttribute('rel', originalType);                                                                     // 522
					if (_browser.opera) {                                                                                          // 523
						newIcon.setAttribute('rel', 'icon');                                                                          // 524
					}                                                                                                              // 525
					newIcon.setAttribute('rel', 'icon');                                                                           // 526
					newIcon.setAttribute('type', 'image/png');                                                                     // 527
					_doc.getElementsByTagName('head')[0].appendChild(newIcon);                                                     // 528
					newIcon.setAttribute('href', url);                                                                             // 529
					if (old.parentNode) {                                                                                          // 530
						old.parentNode.removeChild(old);                                                                              // 531
					}                                                                                                              // 532
				} else {                                                                                                        // 533
					_orig.forEach(function(icon) {                                                                                 // 534
						icon.setAttribute('href', url);                                                                               // 535
					});                                                                                                            // 536
				}                                                                                                               // 537
			}                                                                                                                // 538
		};                                                                                                                // 539
                                                                                                                    // 540
		//http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb#answer-5624139                             // 541
		//HEX to RGB convertor                                                                                            // 542
		function hexToRgb(hex) {                                                                                          // 543
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;                                                         // 544
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {                                                         // 545
				return r + r + g + g + b + b;                                                                                   // 546
			});                                                                                                              // 547
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);                                              // 548
			return result ? {                                                                                                // 549
				r: parseInt(result[1], 16),                                                                                     // 550
				g: parseInt(result[2], 16),                                                                                     // 551
				b: parseInt(result[3], 16)                                                                                      // 552
			} : false;                                                                                                       // 553
		}                                                                                                                 // 554
                                                                                                                    // 555
		/**                                                                                                               // 556
		 * Merge options                                                                                                  // 557
		 */                                                                                                               // 558
		function merge(def, opt) {                                                                                        // 559
			var mergedOpt = {};                                                                                              // 560
			var attrname;                                                                                                    // 561
			for (attrname in def) {                                                                                          // 562
				mergedOpt[attrname] = def[attrname];                                                                            // 563
			}                                                                                                                // 564
			for (attrname in opt) {                                                                                          // 565
				mergedOpt[attrname] = opt[attrname];                                                                            // 566
			}                                                                                                                // 567
			return mergedOpt;                                                                                                // 568
		}                                                                                                                 // 569
                                                                                                                    // 570
		/**                                                                                                               // 571
		 * Cross-browser page visibility shim                                                                             // 572
		 * http://stackoverflow.com/questions/12536562/detect-whether-a-window-is-visible                                 // 573
		 */                                                                                                               // 574
		function isPageHidden() {                                                                                         // 575
			return _doc.hidden || _doc.msHidden || _doc.webkitHidden || _doc.mozHidden;                                      // 576
		}                                                                                                                 // 577
                                                                                                                    // 578
		/**                                                                                                               // 579
		 * @namespace animation                                                                                           // 580
		 */                                                                                                               // 581
		var animation = {};                                                                                               // 582
		/**                                                                                                               // 583
		 * Animation "frame" duration                                                                                     // 584
		 */                                                                                                               // 585
		animation.duration = 40;                                                                                          // 586
		/**                                                                                                               // 587
		 * Animation types (none,fade,pop,slide)                                                                          // 588
		 */                                                                                                               // 589
		animation.types = {};                                                                                             // 590
		animation.types.fade = [{                                                                                         // 591
			x: 0.4,                                                                                                          // 592
			y: 0.4,                                                                                                          // 593
			w: 0.6,                                                                                                          // 594
			h: 0.6,                                                                                                          // 595
			o: 0.0                                                                                                           // 596
		}, {                                                                                                              // 597
			x: 0.4,                                                                                                          // 598
			y: 0.4,                                                                                                          // 599
			w: 0.6,                                                                                                          // 600
			h: 0.6,                                                                                                          // 601
			o: 0.1                                                                                                           // 602
		}, {                                                                                                              // 603
			x: 0.4,                                                                                                          // 604
			y: 0.4,                                                                                                          // 605
			w: 0.6,                                                                                                          // 606
			h: 0.6,                                                                                                          // 607
			o: 0.2                                                                                                           // 608
		}, {                                                                                                              // 609
			x: 0.4,                                                                                                          // 610
			y: 0.4,                                                                                                          // 611
			w: 0.6,                                                                                                          // 612
			h: 0.6,                                                                                                          // 613
			o: 0.3                                                                                                           // 614
		}, {                                                                                                              // 615
			x: 0.4,                                                                                                          // 616
			y: 0.4,                                                                                                          // 617
			w: 0.6,                                                                                                          // 618
			h: 0.6,                                                                                                          // 619
			o: 0.4                                                                                                           // 620
		}, {                                                                                                              // 621
			x: 0.4,                                                                                                          // 622
			y: 0.4,                                                                                                          // 623
			w: 0.6,                                                                                                          // 624
			h: 0.6,                                                                                                          // 625
			o: 0.5                                                                                                           // 626
		}, {                                                                                                              // 627
			x: 0.4,                                                                                                          // 628
			y: 0.4,                                                                                                          // 629
			w: 0.6,                                                                                                          // 630
			h: 0.6,                                                                                                          // 631
			o: 0.6                                                                                                           // 632
		}, {                                                                                                              // 633
			x: 0.4,                                                                                                          // 634
			y: 0.4,                                                                                                          // 635
			w: 0.6,                                                                                                          // 636
			h: 0.6,                                                                                                          // 637
			o: 0.7                                                                                                           // 638
		}, {                                                                                                              // 639
			x: 0.4,                                                                                                          // 640
			y: 0.4,                                                                                                          // 641
			w: 0.6,                                                                                                          // 642
			h: 0.6,                                                                                                          // 643
			o: 0.8                                                                                                           // 644
		}, {                                                                                                              // 645
			x: 0.4,                                                                                                          // 646
			y: 0.4,                                                                                                          // 647
			w: 0.6,                                                                                                          // 648
			h: 0.6,                                                                                                          // 649
			o: 0.9                                                                                                           // 650
		}, {                                                                                                              // 651
			x: 0.4,                                                                                                          // 652
			y: 0.4,                                                                                                          // 653
			w: 0.6,                                                                                                          // 654
			h: 0.6,                                                                                                          // 655
			o: 1.0                                                                                                           // 656
		}];                                                                                                               // 657
		animation.types.none = [{                                                                                         // 658
			x: 0.4,                                                                                                          // 659
			y: 0.4,                                                                                                          // 660
			w: 0.6,                                                                                                          // 661
			h: 0.6,                                                                                                          // 662
			o: 1                                                                                                             // 663
		}];                                                                                                               // 664
		animation.types.pop = [{                                                                                          // 665
			x: 1,                                                                                                            // 666
			y: 1,                                                                                                            // 667
			w: 0,                                                                                                            // 668
			h: 0,                                                                                                            // 669
			o: 1                                                                                                             // 670
		}, {                                                                                                              // 671
			x: 0.9,                                                                                                          // 672
			y: 0.9,                                                                                                          // 673
			w: 0.1,                                                                                                          // 674
			h: 0.1,                                                                                                          // 675
			o: 1                                                                                                             // 676
		}, {                                                                                                              // 677
			x: 0.8,                                                                                                          // 678
			y: 0.8,                                                                                                          // 679
			w: 0.2,                                                                                                          // 680
			h: 0.2,                                                                                                          // 681
			o: 1                                                                                                             // 682
		}, {                                                                                                              // 683
			x: 0.7,                                                                                                          // 684
			y: 0.7,                                                                                                          // 685
			w: 0.3,                                                                                                          // 686
			h: 0.3,                                                                                                          // 687
			o: 1                                                                                                             // 688
		}, {                                                                                                              // 689
			x: 0.6,                                                                                                          // 690
			y: 0.6,                                                                                                          // 691
			w: 0.4,                                                                                                          // 692
			h: 0.4,                                                                                                          // 693
			o: 1                                                                                                             // 694
		}, {                                                                                                              // 695
			x: 0.5,                                                                                                          // 696
			y: 0.5,                                                                                                          // 697
			w: 0.5,                                                                                                          // 698
			h: 0.5,                                                                                                          // 699
			o: 1                                                                                                             // 700
		}, {                                                                                                              // 701
			x: 0.4,                                                                                                          // 702
			y: 0.4,                                                                                                          // 703
			w: 0.6,                                                                                                          // 704
			h: 0.6,                                                                                                          // 705
			o: 1                                                                                                             // 706
		}];                                                                                                               // 707
		animation.types.popFade = [{                                                                                      // 708
			x: 0.75,                                                                                                         // 709
			y: 0.75,                                                                                                         // 710
			w: 0,                                                                                                            // 711
			h: 0,                                                                                                            // 712
			o: 0                                                                                                             // 713
		}, {                                                                                                              // 714
			x: 0.65,                                                                                                         // 715
			y: 0.65,                                                                                                         // 716
			w: 0.1,                                                                                                          // 717
			h: 0.1,                                                                                                          // 718
			o: 0.2                                                                                                           // 719
		}, {                                                                                                              // 720
			x: 0.6,                                                                                                          // 721
			y: 0.6,                                                                                                          // 722
			w: 0.2,                                                                                                          // 723
			h: 0.2,                                                                                                          // 724
			o: 0.4                                                                                                           // 725
		}, {                                                                                                              // 726
			x: 0.55,                                                                                                         // 727
			y: 0.55,                                                                                                         // 728
			w: 0.3,                                                                                                          // 729
			h: 0.3,                                                                                                          // 730
			o: 0.6                                                                                                           // 731
		}, {                                                                                                              // 732
			x: 0.50,                                                                                                         // 733
			y: 0.50,                                                                                                         // 734
			w: 0.4,                                                                                                          // 735
			h: 0.4,                                                                                                          // 736
			o: 0.8                                                                                                           // 737
		}, {                                                                                                              // 738
			x: 0.45,                                                                                                         // 739
			y: 0.45,                                                                                                         // 740
			w: 0.5,                                                                                                          // 741
			h: 0.5,                                                                                                          // 742
			o: 0.9                                                                                                           // 743
		}, {                                                                                                              // 744
			x: 0.4,                                                                                                          // 745
			y: 0.4,                                                                                                          // 746
			w: 0.6,                                                                                                          // 747
			h: 0.6,                                                                                                          // 748
			o: 1                                                                                                             // 749
		}];                                                                                                               // 750
		animation.types.slide = [{                                                                                        // 751
			x: 0.4,                                                                                                          // 752
			y: 1,                                                                                                            // 753
			w: 0.6,                                                                                                          // 754
			h: 0.6,                                                                                                          // 755
			o: 1                                                                                                             // 756
		}, {                                                                                                              // 757
			x: 0.4,                                                                                                          // 758
			y: 0.9,                                                                                                          // 759
			w: 0.6,                                                                                                          // 760
			h: 0.6,                                                                                                          // 761
			o: 1                                                                                                             // 762
		}, {                                                                                                              // 763
			x: 0.4,                                                                                                          // 764
			y: 0.9,                                                                                                          // 765
			w: 0.6,                                                                                                          // 766
			h: 0.6,                                                                                                          // 767
			o: 1                                                                                                             // 768
		}, {                                                                                                              // 769
			x: 0.4,                                                                                                          // 770
			y: 0.8,                                                                                                          // 771
			w: 0.6,                                                                                                          // 772
			h: 0.6,                                                                                                          // 773
			o: 1                                                                                                             // 774
		}, {                                                                                                              // 775
			x: 0.4,                                                                                                          // 776
			y: 0.7,                                                                                                          // 777
			w: 0.6,                                                                                                          // 778
			h: 0.6,                                                                                                          // 779
			o: 1                                                                                                             // 780
		}, {                                                                                                              // 781
			x: 0.4,                                                                                                          // 782
			y: 0.6,                                                                                                          // 783
			w: 0.6,                                                                                                          // 784
			h: 0.6,                                                                                                          // 785
			o: 1                                                                                                             // 786
		}, {                                                                                                              // 787
			x: 0.4,                                                                                                          // 788
			y: 0.5,                                                                                                          // 789
			w: 0.6,                                                                                                          // 790
			h: 0.6,                                                                                                          // 791
			o: 1                                                                                                             // 792
		}, {                                                                                                              // 793
			x: 0.4,                                                                                                          // 794
			y: 0.4,                                                                                                          // 795
			w: 0.6,                                                                                                          // 796
			h: 0.6,                                                                                                          // 797
			o: 1                                                                                                             // 798
		}];                                                                                                               // 799
		/**                                                                                                               // 800
		 * Run animation                                                                                                  // 801
		 * @param {Object} opt Animation options                                                                          // 802
		 * @param {Object} cb Callabak after all steps are done                                                           // 803
		 * @param {Object} revert Reverse order? true|false                                                               // 804
		 * @param {Object} step Optional step number (frame bumber)                                                       // 805
		 */                                                                                                               // 806
		animation.run = function(opt, cb, revert, step) {                                                                 // 807
			var animationType = animation.types[isPageHidden() ? 'none' : _opt.animation];                                   // 808
			if (revert === true) {                                                                                           // 809
				step = (typeof step !== 'undefined') ? step : animationType.length - 1;                                         // 810
			} else {                                                                                                         // 811
				step = (typeof step !== 'undefined') ? step : 0;                                                                // 812
			}                                                                                                                // 813
			cb = (cb) ? cb : function() {};                                                                                  // 814
			if ((step < animationType.length) && (step >= 0)) {                                                              // 815
				type[_opt.type](merge(opt, animationType[step]));                                                               // 816
				_animTimeout = setTimeout(function() {                                                                          // 817
					if (revert) {                                                                                                  // 818
						step = step - 1;                                                                                              // 819
					} else {                                                                                                       // 820
						step = step + 1;                                                                                              // 821
					}                                                                                                              // 822
					animation.run(opt, cb, revert, step);                                                                          // 823
				}, animation.duration);                                                                                         // 824
                                                                                                                    // 825
				link.setIcon(_canvas);                                                                                          // 826
			} else {                                                                                                         // 827
				cb();                                                                                                           // 828
				return;                                                                                                         // 829
			}                                                                                                                // 830
		};                                                                                                                // 831
		//auto init                                                                                                       // 832
		init();                                                                                                           // 833
		return {                                                                                                          // 834
			badge: badge,                                                                                                    // 835
			video: video,                                                                                                    // 836
			image: image,                                                                                                    // 837
			webcam: webcam,                                                                                                  // 838
			reset: icon.reset,                                                                                               // 839
			browser: {                                                                                                       // 840
				supported: _browser.supported                                                                                   // 841
			}                                                                                                                // 842
		};                                                                                                                // 843
	});                                                                                                                // 844
                                                                                                                    // 845
	// AMD / RequireJS                                                                                                 // 846
	if (typeof define !== 'undefined' && define.amd) {                                                                 // 847
		define([], function() {                                                                                           // 848
			return Favico;                                                                                                   // 849
		});                                                                                                               // 850
	}                                                                                                                  // 851
	// CommonJS                                                                                                        // 852
	else if (typeof module !== 'undefined' && module.exports) {                                                        // 853
		module.exports = Favico;                                                                                          // 854
	}                                                                                                                  // 855
	// included directly via <script> tag                                                                              // 856
	else {                                                                                                             // 857
		this.Favico = Favico;                                                                                             // 858
	}                                                                                                                  // 859
                                                                                                                    // 860
})();                                                                                                               // 861
                                                                                                                    // 862
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['rocketchat:favico'] = {};

})();
