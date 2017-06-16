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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

(function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/deepwell_bootstrap-datepicker2/packages/deepwell_bootstrap-datepicker2.js                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
(function () {                                                                                                        // 1
                                                                                                                      // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 3
//                                                                                                            //      // 4
// packages/deepwell:bootstrap-datepicker2/lib/js/bootstrap-datepicker.js                                     //      // 5
//                                                                                                            //      // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 7
                                                                                                              //      // 8
/* =========================================================                                                  // 1    // 9
 * bootstrap-datepicker.js                                                                                    // 2    // 10
 * Repo: https://github.com/eternicode/bootstrap-datepicker/                                                  // 3    // 11
 * Demo: http://eternicode.github.io/bootstrap-datepicker/                                                    // 4    // 12
 * Docs: http://bootstrap-datepicker.readthedocs.org/                                                         // 5    // 13
 * Forked from http://www.eyecon.ro/bootstrap-datepicker                                                      // 6    // 14
 * =========================================================                                                  // 7    // 15
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors                                       // 8    // 16
 *                                                                                                            // 9    // 17
 * Licensed under the Apache License, Version 2.0 (the "License");                                            // 10   // 18
 * you may not use this file except in compliance with the License.                                           // 11   // 19
 * You may obtain a copy of the License at                                                                    // 12   // 20
 *                                                                                                            // 13   // 21
 * http://www.apache.org/licenses/LICENSE-2.0                                                                 // 14   // 22
 *                                                                                                            // 15   // 23
 * Unless required by applicable law or agreed to in writing, software                                        // 16   // 24
 * distributed under the License is distributed on an "AS IS" BASIS,                                          // 17   // 25
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                   // 18   // 26
 * See the License for the specific language governing permissions and                                        // 19   // 27
 * limitations under the License.                                                                             // 20   // 28
 * ========================================================= */                                               // 21   // 29
                                                                                                              // 22   // 30
(function($, undefined){                                                                                      // 23   // 31
                                                                                                              // 24   // 32
	var $window = $(window);                                                                                     // 25   // 33
                                                                                                              // 26   // 34
	function UTCDate(){                                                                                          // 27   // 35
		return new Date(Date.UTC.apply(Date, arguments));                                                           // 28   // 36
	}                                                                                                            // 29   // 37
	function UTCToday(){                                                                                         // 30   // 38
		var today = new Date();                                                                                     // 31   // 39
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());                                     // 32   // 40
	}                                                                                                            // 33   // 41
	function alias(method){                                                                                      // 34   // 42
		return function(){                                                                                          // 35   // 43
			return this[method].apply(this, arguments);                                                                // 36   // 44
		};                                                                                                          // 37   // 45
	}                                                                                                            // 38   // 46
                                                                                                              // 39   // 47
	var DateArray = (function(){                                                                                 // 40   // 48
		var extras = {                                                                                              // 41   // 49
			get: function(i){                                                                                          // 42   // 50
				return this.slice(i)[0];                                                                                  // 43   // 51
			},                                                                                                         // 44   // 52
			contains: function(d){                                                                                     // 45   // 53
				// Array.indexOf is not cross-browser;                                                                    // 46   // 54
				// $.inArray doesn't work with Dates                                                                      // 47   // 55
				var val = d && d.valueOf();                                                                               // 48   // 56
				for (var i=0, l=this.length; i < l; i++)                                                                  // 49   // 57
					if (this[i].valueOf() === val)                                                                           // 50   // 58
						return i;                                                                                               // 51   // 59
				return -1;                                                                                                // 52   // 60
			},                                                                                                         // 53   // 61
			remove: function(i){                                                                                       // 54   // 62
				this.splice(i,1);                                                                                         // 55   // 63
			},                                                                                                         // 56   // 64
			replace: function(new_array){                                                                              // 57   // 65
				if (!new_array)                                                                                           // 58   // 66
					return;                                                                                                  // 59   // 67
				if (!$.isArray(new_array))                                                                                // 60   // 68
					new_array = [new_array];                                                                                 // 61   // 69
				this.clear();                                                                                             // 62   // 70
				this.push.apply(this, new_array);                                                                         // 63   // 71
			},                                                                                                         // 64   // 72
			clear: function(){                                                                                         // 65   // 73
				this.splice(0);                                                                                           // 66   // 74
			},                                                                                                         // 67   // 75
			copy: function(){                                                                                          // 68   // 76
				var a = new DateArray();                                                                                  // 69   // 77
				a.replace(this);                                                                                          // 70   // 78
				return a;                                                                                                 // 71   // 79
			}                                                                                                          // 72   // 80
		};                                                                                                          // 73   // 81
                                                                                                              // 74   // 82
		return function(){                                                                                          // 75   // 83
			var a = [];                                                                                                // 76   // 84
			a.push.apply(a, arguments);                                                                                // 77   // 85
			$.extend(a, extras);                                                                                       // 78   // 86
			return a;                                                                                                  // 79   // 87
		};                                                                                                          // 80   // 88
	})();                                                                                                        // 81   // 89
                                                                                                              // 82   // 90
                                                                                                              // 83   // 91
	// Picker object                                                                                             // 84   // 92
                                                                                                              // 85   // 93
	var Datepicker = function(element, options){                                                                 // 86   // 94
		this.dates = new DateArray();                                                                               // 87   // 95
		this.viewDate = UTCToday();                                                                                 // 88   // 96
		this.focusDate = null;                                                                                      // 89   // 97
                                                                                                              // 90   // 98
		this._process_options(options);                                                                             // 91   // 99
                                                                                                              // 92   // 100
		this.element = $(element);                                                                                  // 93   // 101
		this.isInline = false;                                                                                      // 94   // 102
		this.isInput = this.element.is('input');                                                                    // 95   // 103
		this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false; // 96   // 104
		this.hasInput = this.component && this.element.find('input').length;                                        // 97   // 105
		if (this.component && this.component.length === 0)                                                          // 98   // 106
			this.component = false;                                                                                    // 99   // 107
                                                                                                              // 100  // 108
		this.picker = $(DPGlobal.template);                                                                         // 101  // 109
		this._buildEvents();                                                                                        // 102  // 110
		this._attachEvents();                                                                                       // 103  // 111
                                                                                                              // 104  // 112
		if (this.isInline){                                                                                         // 105  // 113
			this.picker.addClass('datepicker-inline').appendTo(this.element);                                          // 106  // 114
		}                                                                                                           // 107  // 115
		else {                                                                                                      // 108  // 116
			this.picker.addClass('datepicker-dropdown dropdown-menu');                                                 // 109  // 117
		}                                                                                                           // 110  // 118
                                                                                                              // 111  // 119
		if (this.o.rtl){                                                                                            // 112  // 120
			this.picker.addClass('datepicker-rtl');                                                                    // 113  // 121
		}                                                                                                           // 114  // 122
                                                                                                              // 115  // 123
		this.viewMode = this.o.startView;                                                                           // 116  // 124
                                                                                                              // 117  // 125
		if (this.o.calendarWeeks)                                                                                   // 118  // 126
			this.picker.find('tfoot th.today')                                                                         // 119  // 127
						.attr('colspan', function(i, val){                                                                      // 120  // 128
							return parseInt(val) + 1;                                                                              // 121  // 129
						});                                                                                                     // 122  // 130
                                                                                                              // 123  // 131
		this._allow_update = false;                                                                                 // 124  // 132
                                                                                                              // 125  // 133
		this.setStartDate(this._o.startDate);                                                                       // 126  // 134
		this.setEndDate(this._o.endDate);                                                                           // 127  // 135
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);                                                      // 128  // 136
                                                                                                              // 129  // 137
		this.fillDow();                                                                                             // 130  // 138
		this.fillMonths();                                                                                          // 131  // 139
                                                                                                              // 132  // 140
		this._allow_update = true;                                                                                  // 133  // 141
                                                                                                              // 134  // 142
		this.update();                                                                                              // 135  // 143
		this.showMode();                                                                                            // 136  // 144
                                                                                                              // 137  // 145
		if (this.isInline){                                                                                         // 138  // 146
			this.show();                                                                                               // 139  // 147
		}                                                                                                           // 140  // 148
	};                                                                                                           // 141  // 149
                                                                                                              // 142  // 150
	Datepicker.prototype = {                                                                                     // 143  // 151
		constructor: Datepicker,                                                                                    // 144  // 152
                                                                                                              // 145  // 153
		_process_options: function(opts){                                                                           // 146  // 154
			// Store raw options for reference                                                                         // 147  // 155
			this._o = $.extend({}, this._o, opts);                                                                     // 148  // 156
			// Processed options                                                                                       // 149  // 157
			var o = this.o = $.extend({}, this._o);                                                                    // 150  // 158
                                                                                                              // 151  // 159
			// Check if "de-DE" style date is available, if not language should                                        // 152  // 160
			// fallback to 2 letter code eg "de"                                                                       // 153  // 161
			var lang = o.language;                                                                                     // 154  // 162
			if (!dates[lang]){                                                                                         // 155  // 163
				lang = lang.split('-')[0];                                                                                // 156  // 164
				if (!dates[lang])                                                                                         // 157  // 165
					lang = defaults.language;                                                                                // 158  // 166
			}                                                                                                          // 159  // 167
			o.language = lang;                                                                                         // 160  // 168
                                                                                                              // 161  // 169
			switch (o.startView){                                                                                      // 162  // 170
				case 2:                                                                                                   // 163  // 171
				case 'decade':                                                                                            // 164  // 172
					o.startView = 2;                                                                                         // 165  // 173
					break;                                                                                                   // 166  // 174
				case 1:                                                                                                   // 167  // 175
				case 'year':                                                                                              // 168  // 176
					o.startView = 1;                                                                                         // 169  // 177
					break;                                                                                                   // 170  // 178
				default:                                                                                                  // 171  // 179
					o.startView = 0;                                                                                         // 172  // 180
			}                                                                                                          // 173  // 181
                                                                                                              // 174  // 182
			switch (o.minViewMode){                                                                                    // 175  // 183
				case 1:                                                                                                   // 176  // 184
				case 'months':                                                                                            // 177  // 185
					o.minViewMode = 1;                                                                                       // 178  // 186
					break;                                                                                                   // 179  // 187
				case 2:                                                                                                   // 180  // 188
				case 'years':                                                                                             // 181  // 189
					o.minViewMode = 2;                                                                                       // 182  // 190
					break;                                                                                                   // 183  // 191
				default:                                                                                                  // 184  // 192
					o.minViewMode = 0;                                                                                       // 185  // 193
			}                                                                                                          // 186  // 194
                                                                                                              // 187  // 195
			o.startView = Math.max(o.startView, o.minViewMode);                                                        // 188  // 196
                                                                                                              // 189  // 197
			// true, false, or Number > 0                                                                              // 190  // 198
			if (o.multidate !== true){                                                                                 // 191  // 199
				o.multidate = Number(o.multidate) || false;                                                               // 192  // 200
				if (o.multidate !== false)                                                                                // 193  // 201
					o.multidate = Math.max(0, o.multidate);                                                                  // 194  // 202
				else                                                                                                      // 195  // 203
					o.multidate = 1;                                                                                         // 196  // 204
			}                                                                                                          // 197  // 205
			o.multidateSeparator = String(o.multidateSeparator);                                                       // 198  // 206
                                                                                                              // 199  // 207
			o.weekStart %= 7;                                                                                          // 200  // 208
			o.weekEnd = ((o.weekStart + 6) % 7);                                                                       // 201  // 209
                                                                                                              // 202  // 210
			var format = DPGlobal.parseFormat(o.format);                                                               // 203  // 211
			if (o.startDate !== -Infinity){                                                                            // 204  // 212
				if (!!o.startDate){                                                                                       // 205  // 213
					if (o.startDate instanceof Date)                                                                         // 206  // 214
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));                                         // 207  // 215
					else                                                                                                     // 208  // 216
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);                                      // 209  // 217
				}                                                                                                         // 210  // 218
				else {                                                                                                    // 211  // 219
					o.startDate = -Infinity;                                                                                 // 212  // 220
				}                                                                                                         // 213  // 221
			}                                                                                                          // 214  // 222
			if (o.endDate !== Infinity){                                                                               // 215  // 223
				if (!!o.endDate){                                                                                         // 216  // 224
					if (o.endDate instanceof Date)                                                                           // 217  // 225
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));                                             // 218  // 226
					else                                                                                                     // 219  // 227
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);                                          // 220  // 228
				}                                                                                                         // 221  // 229
				else {                                                                                                    // 222  // 230
					o.endDate = Infinity;                                                                                    // 223  // 231
				}                                                                                                         // 224  // 232
			}                                                                                                          // 225  // 233
                                                                                                              // 226  // 234
			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];                                                           // 227  // 235
			if (!$.isArray(o.daysOfWeekDisabled))                                                                      // 228  // 236
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);                                              // 229  // 237
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){                                            // 230  // 238
				return parseInt(d, 10);                                                                                   // 231  // 239
			});                                                                                                        // 232  // 240
                                                                                                              // 233  // 241
			var plc = String(o.orientation).toLowerCase().split(/\s+/g),                                               // 234  // 242
				_plc = o.orientation.toLowerCase();                                                                       // 235  // 243
			plc = $.grep(plc, function(word){                                                                          // 236  // 244
				return (/^auto|left|right|top|bottom$/).test(word);                                                       // 237  // 245
			});                                                                                                        // 238  // 246
			o.orientation = {x: 'auto', y: 'auto'};                                                                    // 239  // 247
			if (!_plc || _plc === 'auto')                                                                              // 240  // 248
				; // no action                                                                                            // 241  // 249
			else if (plc.length === 1){                                                                                // 242  // 250
				switch (plc[0]){                                                                                          // 243  // 251
					case 'top':                                                                                              // 244  // 252
					case 'bottom':                                                                                           // 245  // 253
						o.orientation.y = plc[0];                                                                               // 246  // 254
						break;                                                                                                  // 247  // 255
					case 'left':                                                                                             // 248  // 256
					case 'right':                                                                                            // 249  // 257
						o.orientation.x = plc[0];                                                                               // 250  // 258
						break;                                                                                                  // 251  // 259
				}                                                                                                         // 252  // 260
			}                                                                                                          // 253  // 261
			else {                                                                                                     // 254  // 262
				_plc = $.grep(plc, function(word){                                                                        // 255  // 263
					return (/^left|right$/).test(word);                                                                      // 256  // 264
				});                                                                                                       // 257  // 265
				o.orientation.x = _plc[0] || 'auto';                                                                      // 258  // 266
                                                                                                              // 259  // 267
				_plc = $.grep(plc, function(word){                                                                        // 260  // 268
					return (/^top|bottom$/).test(word);                                                                      // 261  // 269
				});                                                                                                       // 262  // 270
				o.orientation.y = _plc[0] || 'auto';                                                                      // 263  // 271
			}                                                                                                          // 264  // 272
		},                                                                                                          // 265  // 273
		_events: [],                                                                                                // 266  // 274
		_secondaryEvents: [],                                                                                       // 267  // 275
		_applyEvents: function(evs){                                                                                // 268  // 276
			for (var i=0, el, ch, ev; i < evs.length; i++){                                                            // 269  // 277
				el = evs[i][0];                                                                                           // 270  // 278
				if (evs[i].length === 2){                                                                                 // 271  // 279
					ch = undefined;                                                                                          // 272  // 280
					ev = evs[i][1];                                                                                          // 273  // 281
				}                                                                                                         // 274  // 282
				else if (evs[i].length === 3){                                                                            // 275  // 283
					ch = evs[i][1];                                                                                          // 276  // 284
					ev = evs[i][2];                                                                                          // 277  // 285
				}                                                                                                         // 278  // 286
				el.on(ev, ch);                                                                                            // 279  // 287
			}                                                                                                          // 280  // 288
		},                                                                                                          // 281  // 289
		_unapplyEvents: function(evs){                                                                              // 282  // 290
			for (var i=0, el, ev, ch; i < evs.length; i++){                                                            // 283  // 291
				el = evs[i][0];                                                                                           // 284  // 292
				if (evs[i].length === 2){                                                                                 // 285  // 293
					ch = undefined;                                                                                          // 286  // 294
					ev = evs[i][1];                                                                                          // 287  // 295
				}                                                                                                         // 288  // 296
				else if (evs[i].length === 3){                                                                            // 289  // 297
					ch = evs[i][1];                                                                                          // 290  // 298
					ev = evs[i][2];                                                                                          // 291  // 299
				}                                                                                                         // 292  // 300
				el.off(ev, ch);                                                                                           // 293  // 301
			}                                                                                                          // 294  // 302
		},                                                                                                          // 295  // 303
		_buildEvents: function(){                                                                                   // 296  // 304
			if (this.isInput){ // single input                                                                         // 297  // 305
				this._events = [                                                                                          // 298  // 306
					[this.element, {                                                                                         // 299  // 307
						focus: $.proxy(this.show, this),                                                                        // 300  // 308
						keyup: $.proxy(function(e){                                                                             // 301  // 309
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)                                             // 302  // 310
								this.update();                                                                                        // 303  // 311
						}, this),                                                                                               // 304  // 312
						keydown: $.proxy(this.keydown, this)                                                                    // 305  // 313
					}]                                                                                                       // 306  // 314
				];                                                                                                        // 307  // 315
			}                                                                                                          // 308  // 316
			else if (this.component && this.hasInput){ // component: input + button                                    // 309  // 317
				this._events = [                                                                                          // 310  // 318
					// For components that are not readonly, allow keyboard nav                                              // 311  // 319
					[this.element.find('input'), {                                                                           // 312  // 320
						focus: $.proxy(this.show, this),                                                                        // 313  // 321
						keyup: $.proxy(function(e){                                                                             // 314  // 322
							if ($.inArray(e.keyCode, [27,37,39,38,40,32,13,9]) === -1)                                             // 315  // 323
								this.update();                                                                                        // 316  // 324
						}, this),                                                                                               // 317  // 325
						keydown: $.proxy(this.keydown, this)                                                                    // 318  // 326
					}],                                                                                                      // 319  // 327
					[this.component, {                                                                                       // 320  // 328
						click: $.proxy(this.show, this)                                                                         // 321  // 329
					}]                                                                                                       // 322  // 330
				];                                                                                                        // 323  // 331
			}                                                                                                          // 324  // 332
			else if (this.element.is('div')){  // inline datepicker                                                    // 325  // 333
				this.isInline = true;                                                                                     // 326  // 334
			}                                                                                                          // 327  // 335
			else {                                                                                                     // 328  // 336
				this._events = [                                                                                          // 329  // 337
					[this.element, {                                                                                         // 330  // 338
						click: $.proxy(this.show, this)                                                                         // 331  // 339
					}]                                                                                                       // 332  // 340
				];                                                                                                        // 333  // 341
			}                                                                                                          // 334  // 342
			this._events.push(                                                                                         // 335  // 343
				// Component: listen for blur on element descendants                                                      // 336  // 344
				[this.element, '*', {                                                                                     // 337  // 345
					blur: $.proxy(function(e){                                                                               // 338  // 346
						this._focused_from = e.target;                                                                          // 339  // 347
					}, this)                                                                                                 // 340  // 348
				}],                                                                                                       // 341  // 349
				// Input: listen for blur on element                                                                      // 342  // 350
				[this.element, {                                                                                          // 343  // 351
					blur: $.proxy(function(e){                                                                               // 344  // 352
						this._focused_from = e.target;                                                                          // 345  // 353
					}, this)                                                                                                 // 346  // 354
				}]                                                                                                        // 347  // 355
			);                                                                                                         // 348  // 356
                                                                                                              // 349  // 357
			this._secondaryEvents = [                                                                                  // 350  // 358
				[this.picker, {                                                                                           // 351  // 359
					click: $.proxy(this.click, this)                                                                         // 352  // 360
				}],                                                                                                       // 353  // 361
				[$(window), {                                                                                             // 354  // 362
					resize: $.proxy(this.place, this)                                                                        // 355  // 363
				}],                                                                                                       // 356  // 364
				[$(document), {                                                                                           // 357  // 365
					'mousedown touchstart': $.proxy(function(e){                                                             // 358  // 366
						// Clicked outside the datepicker, hide it                                                              // 359  // 367
						if (!(                                                                                                  // 360  // 368
							this.element.is(e.target) ||                                                                           // 361  // 369
							this.element.find(e.target).length ||                                                                  // 362  // 370
							this.picker.is(e.target) ||                                                                            // 363  // 371
							this.picker.find(e.target).length                                                                      // 364  // 372
						)){                                                                                                     // 365  // 373
							this.hide();                                                                                           // 366  // 374
						}                                                                                                       // 367  // 375
					}, this)                                                                                                 // 368  // 376
				}]                                                                                                        // 369  // 377
			];                                                                                                         // 370  // 378
		},                                                                                                          // 371  // 379
		_attachEvents: function(){                                                                                  // 372  // 380
			this._detachEvents();                                                                                      // 373  // 381
			this._applyEvents(this._events);                                                                           // 374  // 382
		},                                                                                                          // 375  // 383
		_detachEvents: function(){                                                                                  // 376  // 384
			this._unapplyEvents(this._events);                                                                         // 377  // 385
		},                                                                                                          // 378  // 386
		_attachSecondaryEvents: function(){                                                                         // 379  // 387
			this._detachSecondaryEvents();                                                                             // 380  // 388
			this._applyEvents(this._secondaryEvents);                                                                  // 381  // 389
		},                                                                                                          // 382  // 390
		_detachSecondaryEvents: function(){                                                                         // 383  // 391
			this._unapplyEvents(this._secondaryEvents);                                                                // 384  // 392
		},                                                                                                          // 385  // 393
		_trigger: function(event, altdate){                                                                         // 386  // 394
			var date = altdate || this.dates.get(-1),                                                                  // 387  // 395
				local_date = this._utc_to_local(date);                                                                    // 388  // 396
                                                                                                              // 389  // 397
			this.element.trigger({                                                                                     // 390  // 398
				type: event,                                                                                              // 391  // 399
				date: local_date,                                                                                         // 392  // 400
				dates: $.map(this.dates, this._utc_to_local),                                                             // 393  // 401
				format: $.proxy(function(ix, format){                                                                     // 394  // 402
					if (arguments.length === 0){                                                                             // 395  // 403
						ix = this.dates.length - 1;                                                                             // 396  // 404
						format = this.o.format;                                                                                 // 397  // 405
					}                                                                                                        // 398  // 406
					else if (typeof ix === 'string'){                                                                        // 399  // 407
						format = ix;                                                                                            // 400  // 408
						ix = this.dates.length - 1;                                                                             // 401  // 409
					}                                                                                                        // 402  // 410
					format = format || this.o.format;                                                                        // 403  // 411
					var date = this.dates.get(ix);                                                                           // 404  // 412
					return DPGlobal.formatDate(date, format, this.o.language);                                               // 405  // 413
				}, this)                                                                                                  // 406  // 414
			});                                                                                                        // 407  // 415
		},                                                                                                          // 408  // 416
                                                                                                              // 409  // 417
		show: function(){                                                                                           // 410  // 418
			if (!this.isInline)                                                                                        // 411  // 419
				this.picker.appendTo('body');                                                                             // 412  // 420
			this.picker.show();                                                                                        // 413  // 421
			this.place();                                                                                              // 414  // 422
			this._attachSecondaryEvents();                                                                             // 415  // 423
			this._trigger('show');                                                                                     // 416  // 424
		},                                                                                                          // 417  // 425
                                                                                                              // 418  // 426
		hide: function(){                                                                                           // 419  // 427
			if (this.isInline)                                                                                         // 420  // 428
				return;                                                                                                   // 421  // 429
			if (!this.picker.is(':visible'))                                                                           // 422  // 430
				return;                                                                                                   // 423  // 431
			this.focusDate = null;                                                                                     // 424  // 432
			this.picker.hide().detach();                                                                               // 425  // 433
			this._detachSecondaryEvents();                                                                             // 426  // 434
			this.viewMode = this.o.startView;                                                                          // 427  // 435
			this.showMode();                                                                                           // 428  // 436
                                                                                                              // 429  // 437
			if (                                                                                                       // 430  // 438
				this.o.forceParse &&                                                                                      // 431  // 439
				(                                                                                                         // 432  // 440
					this.isInput && this.element.val() ||                                                                    // 433  // 441
					this.hasInput && this.element.find('input').val()                                                        // 434  // 442
				)                                                                                                         // 435  // 443
			)                                                                                                          // 436  // 444
				this.setValue();                                                                                          // 437  // 445
			this._trigger('hide');                                                                                     // 438  // 446
		},                                                                                                          // 439  // 447
                                                                                                              // 440  // 448
		remove: function(){                                                                                         // 441  // 449
			this.hide();                                                                                               // 442  // 450
			this._detachEvents();                                                                                      // 443  // 451
			this._detachSecondaryEvents();                                                                             // 444  // 452
			this.picker.remove();                                                                                      // 445  // 453
			delete this.element.data().datepicker;                                                                     // 446  // 454
			if (!this.isInput){                                                                                        // 447  // 455
				delete this.element.data().date;                                                                          // 448  // 456
			}                                                                                                          // 449  // 457
		},                                                                                                          // 450  // 458
                                                                                                              // 451  // 459
		_utc_to_local: function(utc){                                                                               // 452  // 460
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));                                   // 453  // 461
		},                                                                                                          // 454  // 462
		_local_to_utc: function(local){                                                                             // 455  // 463
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));                             // 456  // 464
		},                                                                                                          // 457  // 465
		_zero_time: function(local){                                                                                // 458  // 466
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());                          // 459  // 467
		},                                                                                                          // 460  // 468
		_zero_utc_time: function(utc){                                                                              // 461  // 469
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));               // 462  // 470
		},                                                                                                          // 463  // 471
                                                                                                              // 464  // 472
		getDates: function(){                                                                                       // 465  // 473
			return $.map(this.dates, this._utc_to_local);                                                              // 466  // 474
		},                                                                                                          // 467  // 475
                                                                                                              // 468  // 476
		getUTCDates: function(){                                                                                    // 469  // 477
			return $.map(this.dates, function(d){                                                                      // 470  // 478
				return new Date(d);                                                                                       // 471  // 479
			});                                                                                                        // 472  // 480
		},                                                                                                          // 473  // 481
                                                                                                              // 474  // 482
		getDate: function(){                                                                                        // 475  // 483
			return this._utc_to_local(this.getUTCDate());                                                              // 476  // 484
		},                                                                                                          // 477  // 485
                                                                                                              // 478  // 486
		getUTCDate: function(){                                                                                     // 479  // 487
			return new Date(this.dates.get(-1));                                                                       // 480  // 488
		},                                                                                                          // 481  // 489
                                                                                                              // 482  // 490
		setDates: function(){                                                                                       // 483  // 491
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                             // 484  // 492
			this.update.apply(this, args);                                                                             // 485  // 493
			this._trigger('changeDate');                                                                               // 486  // 494
			this.setValue();                                                                                           // 487  // 495
		},                                                                                                          // 488  // 496
                                                                                                              // 489  // 497
		setUTCDates: function(){                                                                                    // 490  // 498
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;                                             // 491  // 499
			this.update.apply(this, $.map(args, this._utc_to_local));                                                  // 492  // 500
			this._trigger('changeDate');                                                                               // 493  // 501
			this.setValue();                                                                                           // 494  // 502
		},                                                                                                          // 495  // 503
                                                                                                              // 496  // 504
		setDate: alias('setDates'),                                                                                 // 497  // 505
		setUTCDate: alias('setUTCDates'),                                                                           // 498  // 506
                                                                                                              // 499  // 507
		setValue: function(){                                                                                       // 500  // 508
			var formatted = this.getFormattedDate();                                                                   // 501  // 509
			if (!this.isInput){                                                                                        // 502  // 510
				if (this.component){                                                                                      // 503  // 511
					this.element.find('input').val(formatted).change();                                                      // 504  // 512
				}                                                                                                         // 505  // 513
			}                                                                                                          // 506  // 514
			else {                                                                                                     // 507  // 515
				this.element.val(formatted).change();                                                                     // 508  // 516
			}                                                                                                          // 509  // 517
		},                                                                                                          // 510  // 518
                                                                                                              // 511  // 519
		getFormattedDate: function(format){                                                                         // 512  // 520
			if (format === undefined)                                                                                  // 513  // 521
				format = this.o.format;                                                                                   // 514  // 522
                                                                                                              // 515  // 523
			var lang = this.o.language;                                                                                // 516  // 524
			return $.map(this.dates, function(d){                                                                      // 517  // 525
				return DPGlobal.formatDate(d, format, lang);                                                              // 518  // 526
			}).join(this.o.multidateSeparator);                                                                        // 519  // 527
		},                                                                                                          // 520  // 528
                                                                                                              // 521  // 529
		setStartDate: function(startDate){                                                                          // 522  // 530
			this._process_options({startDate: startDate});                                                             // 523  // 531
			this.update();                                                                                             // 524  // 532
			this.updateNavArrows();                                                                                    // 525  // 533
		},                                                                                                          // 526  // 534
                                                                                                              // 527  // 535
		setEndDate: function(endDate){                                                                              // 528  // 536
			this._process_options({endDate: endDate});                                                                 // 529  // 537
			this.update();                                                                                             // 530  // 538
			this.updateNavArrows();                                                                                    // 531  // 539
		},                                                                                                          // 532  // 540
                                                                                                              // 533  // 541
		setDaysOfWeekDisabled: function(daysOfWeekDisabled){                                                        // 534  // 542
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});                                           // 535  // 543
			this.update();                                                                                             // 536  // 544
			this.updateNavArrows();                                                                                    // 537  // 545
		},                                                                                                          // 538  // 546
                                                                                                              // 539  // 547
		place: function(){                                                                                          // 540  // 548
			if (this.isInline)                                                                                         // 541  // 549
				return;                                                                                                   // 542  // 550
			var calendarWidth = this.picker.outerWidth(),                                                              // 543  // 551
				calendarHeight = this.picker.outerHeight(),                                                               // 544  // 552
				visualPadding = 10,                                                                                       // 545  // 553
				windowWidth = $window.width(),                                                                            // 546  // 554
				windowHeight = $window.height(),                                                                          // 547  // 555
				scrollTop = $window.scrollTop();                                                                          // 548  // 556
                                                                                                              // 549  // 557
			var zIndex = parseInt(this.element.parents().filter(function(){                                            // 550  // 558
					return $(this).css('z-index') !== 'auto';                                                                // 551  // 559
				}).first().css('z-index'))+10;                                                                            // 552  // 560
			var offset = this.component ? this.component.parent().offset() : this.element.offset();                    // 553  // 561
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);          // 554  // 562
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);             // 555  // 563
			var left = offset.left,                                                                                    // 556  // 564
				top = offset.top;                                                                                         // 557  // 565
                                                                                                              // 558  // 566
			this.picker.removeClass(                                                                                   // 559  // 567
				'datepicker-orient-top datepicker-orient-bottom '+                                                        // 560  // 568
				'datepicker-orient-right datepicker-orient-left'                                                          // 561  // 569
			);                                                                                                         // 562  // 570
                                                                                                              // 563  // 571
			if (this.o.orientation.x !== 'auto'){                                                                      // 564  // 572
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);                                        // 565  // 573
				if (this.o.orientation.x === 'right')                                                                     // 566  // 574
					left -= calendarWidth - width;                                                                           // 567  // 575
			}                                                                                                          // 568  // 576
			// auto x orientation is best-placement: if it crosses a window                                            // 569  // 577
			// edge, fudge it sideways                                                                                 // 570  // 578
			else {                                                                                                     // 571  // 579
				// Default to left                                                                                        // 572  // 580
				this.picker.addClass('datepicker-orient-left');                                                           // 573  // 581
				if (offset.left < 0)                                                                                      // 574  // 582
					left -= offset.left - visualPadding;                                                                     // 575  // 583
				else if (offset.left + calendarWidth > windowWidth)                                                       // 576  // 584
					left = windowWidth - calendarWidth - visualPadding;                                                      // 577  // 585
			}                                                                                                          // 578  // 586
                                                                                                              // 579  // 587
			// auto y orientation is best-situation: top or bottom, no fudging,                                        // 580  // 588
			// decision based on which shows more of the calendar                                                      // 581  // 589
			var yorient = this.o.orientation.y,                                                                        // 582  // 590
				top_overflow, bottom_overflow;                                                                            // 583  // 591
			if (yorient === 'auto'){                                                                                   // 584  // 592
				top_overflow = -scrollTop + offset.top - calendarHeight;                                                  // 585  // 593
				bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);                      // 586  // 594
				if (Math.max(top_overflow, bottom_overflow) === bottom_overflow)                                          // 587  // 595
					yorient = 'top';                                                                                         // 588  // 596
				else                                                                                                      // 589  // 597
					yorient = 'bottom';                                                                                      // 590  // 598
			}                                                                                                          // 591  // 599
			this.picker.addClass('datepicker-orient-' + yorient);                                                      // 592  // 600
			if (yorient === 'top')                                                                                     // 593  // 601
				top += height;                                                                                            // 594  // 602
			else                                                                                                       // 595  // 603
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));                                         // 596  // 604
                                                                                                              // 597  // 605
			this.picker.css({                                                                                          // 598  // 606
				top: top,                                                                                                 // 599  // 607
				left: left,                                                                                               // 600  // 608
				zIndex: zIndex                                                                                            // 601  // 609
			});                                                                                                        // 602  // 610
		},                                                                                                          // 603  // 611
                                                                                                              // 604  // 612
		_allow_update: true,                                                                                        // 605  // 613
		update: function(){                                                                                         // 606  // 614
			if (!this._allow_update)                                                                                   // 607  // 615
				return;                                                                                                   // 608  // 616
                                                                                                              // 609  // 617
			var oldDates = this.dates.copy(),                                                                          // 610  // 618
				dates = [],                                                                                               // 611  // 619
				fromArgs = false;                                                                                         // 612  // 620
			if (arguments.length){                                                                                     // 613  // 621
				$.each(arguments, $.proxy(function(i, date){                                                              // 614  // 622
					if (date instanceof Date)                                                                                // 615  // 623
						date = this._local_to_utc(date);                                                                        // 616  // 624
					dates.push(date);                                                                                        // 617  // 625
				}, this));                                                                                                // 618  // 626
				fromArgs = true;                                                                                          // 619  // 627
			}                                                                                                          // 620  // 628
			else {                                                                                                     // 621  // 629
				dates = this.isInput                                                                                      // 622  // 630
						? this.element.val()                                                                                    // 623  // 631
						: this.element.data('date') || this.element.find('input').val();                                        // 624  // 632
				if (dates && this.o.multidate)                                                                            // 625  // 633
					dates = dates.split(this.o.multidateSeparator);                                                          // 626  // 634
				else                                                                                                      // 627  // 635
					dates = [dates];                                                                                         // 628  // 636
				delete this.element.data().date;                                                                          // 629  // 637
			}                                                                                                          // 630  // 638
                                                                                                              // 631  // 639
			dates = $.map(dates, $.proxy(function(date){                                                               // 632  // 640
				return DPGlobal.parseDate(date, this.o.format, this.o.language);                                          // 633  // 641
			}, this));                                                                                                 // 634  // 642
			dates = $.grep(dates, $.proxy(function(date){                                                              // 635  // 643
				return (                                                                                                  // 636  // 644
					date < this.o.startDate ||                                                                               // 637  // 645
					date > this.o.endDate ||                                                                                 // 638  // 646
					!date                                                                                                    // 639  // 647
				);                                                                                                        // 640  // 648
			}, this), true);                                                                                           // 641  // 649
			this.dates.replace(dates);                                                                                 // 642  // 650
                                                                                                              // 643  // 651
			if (this.dates.length)                                                                                     // 644  // 652
				this.viewDate = new Date(this.dates.get(-1));                                                             // 645  // 653
			else if (this.viewDate < this.o.startDate)                                                                 // 646  // 654
				this.viewDate = new Date(this.o.startDate);                                                               // 647  // 655
			else if (this.viewDate > this.o.endDate)                                                                   // 648  // 656
				this.viewDate = new Date(this.o.endDate);                                                                 // 649  // 657
                                                                                                              // 650  // 658
			if (fromArgs){                                                                                             // 651  // 659
				// setting date by clicking                                                                               // 652  // 660
				this.setValue();                                                                                          // 653  // 661
			}                                                                                                          // 654  // 662
			else if (dates.length){                                                                                    // 655  // 663
				// setting date by typing                                                                                 // 656  // 664
				if (String(oldDates) !== String(this.dates))                                                              // 657  // 665
					this._trigger('changeDate');                                                                             // 658  // 666
			}                                                                                                          // 659  // 667
			if (!this.dates.length && oldDates.length)                                                                 // 660  // 668
				this._trigger('clearDate');                                                                               // 661  // 669
                                                                                                              // 662  // 670
			this.fill();                                                                                               // 663  // 671
		},                                                                                                          // 664  // 672
                                                                                                              // 665  // 673
		fillDow: function(){                                                                                        // 666  // 674
			var dowCnt = this.o.weekStart,                                                                             // 667  // 675
				html = '<tr>';                                                                                            // 668  // 676
			if (this.o.calendarWeeks){                                                                                 // 669  // 677
				var cell = '<th class="cw">&nbsp;</th>';                                                                  // 670  // 678
				html += cell;                                                                                             // 671  // 679
				this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);                                  // 672  // 680
			}                                                                                                          // 673  // 681
			while (dowCnt < this.o.weekStart + 7){                                                                     // 674  // 682
				html += '<th class="dow">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';                          // 675  // 683
			}                                                                                                          // 676  // 684
			html += '</tr>';                                                                                           // 677  // 685
			this.picker.find('.datepicker-days thead').append(html);                                                   // 678  // 686
		},                                                                                                          // 679  // 687
                                                                                                              // 680  // 688
		fillMonths: function(){                                                                                     // 681  // 689
			var html = '',                                                                                             // 682  // 690
			i = 0;                                                                                                     // 683  // 691
			while (i < 12){                                                                                            // 684  // 692
				html += '<span class="month">'+dates[this.o.language].monthsShort[i++]+'</span>';                         // 685  // 693
			}                                                                                                          // 686  // 694
			this.picker.find('.datepicker-months td').html(html);                                                      // 687  // 695
		},                                                                                                          // 688  // 696
                                                                                                              // 689  // 697
		setRange: function(range){                                                                                  // 690  // 698
			if (!range || !range.length)                                                                               // 691  // 699
				delete this.range;                                                                                        // 692  // 700
			else                                                                                                       // 693  // 701
				this.range = $.map(range, function(d){                                                                    // 694  // 702
					return d.valueOf();                                                                                      // 695  // 703
				});                                                                                                       // 696  // 704
			this.fill();                                                                                               // 697  // 705
		},                                                                                                          // 698  // 706
                                                                                                              // 699  // 707
		getClassNames: function(date){                                                                              // 700  // 708
			var cls = [],                                                                                              // 701  // 709
				year = this.viewDate.getUTCFullYear(),                                                                    // 702  // 710
				month = this.viewDate.getUTCMonth(),                                                                      // 703  // 711
				today = new Date();                                                                                       // 704  // 712
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){       // 705  // 713
				cls.push('old');                                                                                          // 706  // 714
			}                                                                                                          // 707  // 715
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){  // 708  // 716
				cls.push('new');                                                                                          // 709  // 717
			}                                                                                                          // 710  // 718
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())                                         // 711  // 719
				cls.push('focused');                                                                                      // 712  // 720
			// Compare internal UTC date with local today, not UTC today                                               // 713  // 721
			if (this.o.todayHighlight &&                                                                               // 714  // 722
				date.getUTCFullYear() === today.getFullYear() &&                                                          // 715  // 723
				date.getUTCMonth() === today.getMonth() &&                                                                // 716  // 724
				date.getUTCDate() === today.getDate()){                                                                   // 717  // 725
				cls.push('today');                                                                                        // 718  // 726
			}                                                                                                          // 719  // 727
			if (this.dates.contains(date) !== -1)                                                                      // 720  // 728
				cls.push('active');                                                                                       // 721  // 729
			if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate ||                                // 722  // 730
				$.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1){                                           // 723  // 731
				cls.push('disabled');                                                                                     // 724  // 732
			}                                                                                                          // 725  // 733
			if (this.range){                                                                                           // 726  // 734
				if (date > this.range[0] && date < this.range[this.range.length-1]){                                      // 727  // 735
					cls.push('range');                                                                                       // 728  // 736
				}                                                                                                         // 729  // 737
				if ($.inArray(date.valueOf(), this.range) !== -1){                                                        // 730  // 738
					cls.push('selected');                                                                                    // 731  // 739
				}                                                                                                         // 732  // 740
			}                                                                                                          // 733  // 741
			return cls;                                                                                                // 734  // 742
		},                                                                                                          // 735  // 743
                                                                                                              // 736  // 744
		fill: function(){                                                                                           // 737  // 745
			var d = new Date(this.viewDate),                                                                           // 738  // 746
				year = d.getUTCFullYear(),                                                                                // 739  // 747
				month = d.getUTCMonth(),                                                                                  // 740  // 748
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,               // 741  // 749
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,                 // 742  // 750
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,                       // 743  // 751
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,                         // 744  // 752
				todaytxt = dates[this.o.language].today || dates['en'].today || '',                                       // 745  // 753
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',                                       // 746  // 754
				tooltip;                                                                                                  // 747  // 755
			this.picker.find('.datepicker-days thead th.datepicker-switch')                                            // 748  // 756
						.text(dates[this.o.language].months[month]+' '+year);                                                   // 749  // 757
			this.picker.find('tfoot th.today')                                                                         // 750  // 758
						.text(todaytxt)                                                                                         // 751  // 759
						.toggle(this.o.todayBtn !== false);                                                                     // 752  // 760
			this.picker.find('tfoot th.clear')                                                                         // 753  // 761
						.text(cleartxt)                                                                                         // 754  // 762
						.toggle(this.o.clearBtn !== false);                                                                     // 755  // 763
			this.updateNavArrows();                                                                                    // 756  // 764
			this.fillMonths();                                                                                         // 757  // 765
			var prevMonth = UTCDate(year, month-1, 28),                                                                // 758  // 766
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());                       // 759  // 767
			prevMonth.setUTCDate(day);                                                                                 // 760  // 768
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);                              // 761  // 769
			var nextMonth = new Date(prevMonth);                                                                       // 762  // 770
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);                                                         // 763  // 771
			nextMonth = nextMonth.valueOf();                                                                           // 764  // 772
			var html = [];                                                                                             // 765  // 773
			var clsName;                                                                                               // 766  // 774
			while (prevMonth.valueOf() < nextMonth){                                                                   // 767  // 775
				if (prevMonth.getUTCDay() === this.o.weekStart){                                                          // 768  // 776
					html.push('<tr>');                                                                                       // 769  // 777
					if (this.o.calendarWeeks){                                                                               // 770  // 778
						// ISO 8601: First week contains first thursday.                                                        // 771  // 779
						// ISO also states week starts on Monday, but we can be more abstract here.                             // 772  // 780
						var                                                                                                     // 773  // 781
							// Start of current week: based on weekstart/current date                                              // 774  // 782
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),                // 775  // 783
							// Thursday of this week                                                                               // 776  // 784
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),                                      // 777  // 785
							// First Thursday of year, year from thursday                                                          // 778  // 786
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),  // 779  // 787
							// Calendar week: ms between thursdays, div ms per day, div 7 days                                     // 780  // 788
							calWeek =  (th - yth) / 864e5 / 7 + 1;                                                                 // 781  // 789
						html.push('<td class="cw">'+ calWeek +'</td>');                                                         // 782  // 790
                                                                                                              // 783  // 791
					}                                                                                                        // 784  // 792
				}                                                                                                         // 785  // 793
				clsName = this.getClassNames(prevMonth);                                                                  // 786  // 794
				clsName.push('day');                                                                                      // 787  // 795
                                                                                                              // 788  // 796
				if (this.o.beforeShowDay !== $.noop){                                                                     // 789  // 797
					var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));                                        // 790  // 798
					if (before === undefined)                                                                                // 791  // 799
						before = {};                                                                                            // 792  // 800
					else if (typeof(before) === 'boolean')                                                                   // 793  // 801
						before = {enabled: before};                                                                             // 794  // 802
					else if (typeof(before) === 'string')                                                                    // 795  // 803
						before = {classes: before};                                                                             // 796  // 804
					if (before.enabled === false)                                                                            // 797  // 805
						clsName.push('disabled');                                                                               // 798  // 806
					if (before.classes)                                                                                      // 799  // 807
						clsName = clsName.concat(before.classes.split(/\s+/));                                                  // 800  // 808
					if (before.tooltip)                                                                                      // 801  // 809
						tooltip = before.tooltip;                                                                               // 802  // 810
				}                                                                                                         // 803  // 811
                                                                                                              // 804  // 812
				clsName = $.unique(clsName);                                                                              // 805  // 813
				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				if (prevMonth.getUTCDay() === this.o.weekEnd){                                                            // 807  // 815
					html.push('</tr>');                                                                                      // 808  // 816
				}                                                                                                         // 809  // 817
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);                                                           // 810  // 818
			}                                                                                                          // 811  // 819
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));                                  // 812  // 820
                                                                                                              // 813  // 821
			var months = this.picker.find('.datepicker-months')                                                        // 814  // 822
						.find('th:eq(1)')                                                                                       // 815  // 823
							.text(year)                                                                                            // 816  // 824
							.end()                                                                                                 // 817  // 825
						.find('span').removeClass('active');                                                                    // 818  // 826
                                                                                                              // 819  // 827
			$.each(this.dates, function(i, d){                                                                         // 820  // 828
				if (d.getUTCFullYear() === year)                                                                          // 821  // 829
					months.eq(d.getUTCMonth()).addClass('active');                                                           // 822  // 830
			});                                                                                                        // 823  // 831
                                                                                                              // 824  // 832
			if (year < startYear || year > endYear){                                                                   // 825  // 833
				months.addClass('disabled');                                                                              // 826  // 834
			}                                                                                                          // 827  // 835
			if (year === startYear){                                                                                   // 828  // 836
				months.slice(0, startMonth).addClass('disabled');                                                         // 829  // 837
			}                                                                                                          // 830  // 838
			if (year === endYear){                                                                                     // 831  // 839
				months.slice(endMonth+1).addClass('disabled');                                                            // 832  // 840
			}                                                                                                          // 833  // 841
                                                                                                              // 834  // 842
			html = '';                                                                                                 // 835  // 843
			year = parseInt(year/10, 10) * 10;                                                                         // 836  // 844
			var yearCont = this.picker.find('.datepicker-years')                                                       // 837  // 845
								.find('th:eq(1)')                                                                                     // 838  // 846
									.text(year + '-' + (year + 9))                                                                       // 839  // 847
									.end()                                                                                               // 840  // 848
								.find('td');                                                                                          // 841  // 849
			year -= 1;                                                                                                 // 842  // 850
			var years = $.map(this.dates, function(d){                                                                 // 843  // 851
					return d.getUTCFullYear();                                                                               // 844  // 852
				}),                                                                                                       // 845  // 853
				classes;                                                                                                  // 846  // 854
			for (var i = -1; i < 11; i++){                                                                             // 847  // 855
				classes = ['year'];                                                                                       // 848  // 856
				if (i === -1)                                                                                             // 849  // 857
					classes.push('old');                                                                                     // 850  // 858
				else if (i === 10)                                                                                        // 851  // 859
					classes.push('new');                                                                                     // 852  // 860
				if ($.inArray(year, years) !== -1)                                                                        // 853  // 861
					classes.push('active');                                                                                  // 854  // 862
				if (year < startYear || year > endYear)                                                                   // 855  // 863
					classes.push('disabled');                                                                                // 856  // 864
				html += '<span class="' + classes.join(' ') + '">'+year+'</span>';                                        // 857  // 865
				year += 1;                                                                                                // 858  // 866
			}                                                                                                          // 859  // 867
			yearCont.html(html);                                                                                       // 860  // 868
		},                                                                                                          // 861  // 869
                                                                                                              // 862  // 870
		updateNavArrows: function(){                                                                                // 863  // 871
			if (!this._allow_update)                                                                                   // 864  // 872
				return;                                                                                                   // 865  // 873
                                                                                                              // 866  // 874
			var d = new Date(this.viewDate),                                                                           // 867  // 875
				year = d.getUTCFullYear(),                                                                                // 868  // 876
				month = d.getUTCMonth();                                                                                  // 869  // 877
			switch (this.viewMode){                                                                                    // 870  // 878
				case 0:                                                                                                   // 871  // 879
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});                                                  // 873  // 881
					}                                                                                                        // 874  // 882
					else {                                                                                                   // 875  // 883
						this.picker.find('.prev').css({visibility: 'visible'});                                                 // 876  // 884
					}                                                                                                        // 877  // 885
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});                                                  // 879  // 887
					}                                                                                                        // 880  // 888
					else {                                                                                                   // 881  // 889
						this.picker.find('.next').css({visibility: 'visible'});                                                 // 882  // 890
					}                                                                                                        // 883  // 891
					break;                                                                                                   // 884  // 892
				case 1:                                                                                                   // 885  // 893
				case 2:                                                                                                   // 886  // 894
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()){                        // 887  // 895
						this.picker.find('.prev').css({visibility: 'hidden'});                                                  // 888  // 896
					}                                                                                                        // 889  // 897
					else {                                                                                                   // 890  // 898
						this.picker.find('.prev').css({visibility: 'visible'});                                                 // 891  // 899
					}                                                                                                        // 892  // 900
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()){                             // 893  // 901
						this.picker.find('.next').css({visibility: 'hidden'});                                                  // 894  // 902
					}                                                                                                        // 895  // 903
					else {                                                                                                   // 896  // 904
						this.picker.find('.next').css({visibility: 'visible'});                                                 // 897  // 905
					}                                                                                                        // 898  // 906
					break;                                                                                                   // 899  // 907
			}                                                                                                          // 900  // 908
		},                                                                                                          // 901  // 909
                                                                                                              // 902  // 910
		click: function(e){                                                                                         // 903  // 911
			e.preventDefault();                                                                                        // 904  // 912
			var target = $(e.target).closest('span, td, th'),                                                          // 905  // 913
				year, month, day;                                                                                         // 906  // 914
			if (target.length === 1){                                                                                  // 907  // 915
				switch (target[0].nodeName.toLowerCase()){                                                                // 908  // 916
					case 'th':                                                                                               // 909  // 917
						switch (target[0].className){                                                                           // 910  // 918
							case 'datepicker-switch':                                                                              // 911  // 919
								this.showMode(1);                                                                                     // 912  // 920
								break;                                                                                                // 913  // 921
							case 'prev':                                                                                           // 914  // 922
							case 'next':                                                                                           // 915  // 923
								var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);          // 916  // 924
								switch (this.viewMode){                                                                               // 917  // 925
									case 0:                                                                                              // 918  // 926
										this.viewDate = this.moveMonth(this.viewDate, dir);                                                 // 919  // 927
										this._trigger('changeMonth', this.viewDate);                                                        // 920  // 928
										break;                                                                                              // 921  // 929
									case 1:                                                                                              // 922  // 930
									case 2:                                                                                              // 923  // 931
										this.viewDate = this.moveYear(this.viewDate, dir);                                                  // 924  // 932
										if (this.viewMode === 1)                                                                            // 925  // 933
											this._trigger('changeYear', this.viewDate);                                                        // 926  // 934
										break;                                                                                              // 927  // 935
								}                                                                                                     // 928  // 936
								this.fill();                                                                                          // 929  // 937
								break;                                                                                                // 930  // 938
							case 'today':                                                                                          // 931  // 939
								var date = new Date();                                                                                // 932  // 940
								date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);                         // 933  // 941
                                                                                                              // 934  // 942
								this.showMode(-2);                                                                                    // 935  // 943
								var which = this.o.todayBtn === 'linked' ? null : 'view';                                             // 936  // 944
								this._setDate(date, which);                                                                           // 937  // 945
								break;                                                                                                // 938  // 946
							case 'clear':                                                                                          // 939  // 947
								var element;                                                                                          // 940  // 948
								if (this.isInput)                                                                                     // 941  // 949
									element = this.element;                                                                              // 942  // 950
								else if (this.component)                                                                              // 943  // 951
									element = this.element.find('input');                                                                // 944  // 952
								if (element)                                                                                          // 945  // 953
									element.val("").change();                                                                            // 946  // 954
								this.update();                                                                                        // 947  // 955
								this._trigger('changeDate');                                                                          // 948  // 956
								if (this.o.autoclose)                                                                                 // 949  // 957
									this.hide();                                                                                         // 950  // 958
								break;                                                                                                // 951  // 959
						}                                                                                                       // 952  // 960
						break;                                                                                                  // 953  // 961
					case 'span':                                                                                             // 954  // 962
						if (!target.is('.disabled')){                                                                           // 955  // 963
							this.viewDate.setUTCDate(1);                                                                           // 956  // 964
							if (target.is('.month')){                                                                              // 957  // 965
								day = 1;                                                                                              // 958  // 966
								month = target.parent().find('span').index(target);                                                   // 959  // 967
								year = this.viewDate.getUTCFullYear();                                                                // 960  // 968
								this.viewDate.setUTCMonth(month);                                                                     // 961  // 969
								this._trigger('changeMonth', this.viewDate);                                                          // 962  // 970
								if (this.o.minViewMode === 1){                                                                        // 963  // 971
									this._setDate(UTCDate(year, month, day));                                                            // 964  // 972
								}                                                                                                     // 965  // 973
							}                                                                                                      // 966  // 974
							else {                                                                                                 // 967  // 975
								day = 1;                                                                                              // 968  // 976
								month = 0;                                                                                            // 969  // 977
								year = parseInt(target.text(), 10)||0;                                                                // 970  // 978
								this.viewDate.setUTCFullYear(year);                                                                   // 971  // 979
								this._trigger('changeYear', this.viewDate);                                                           // 972  // 980
								if (this.o.minViewMode === 2){                                                                        // 973  // 981
									this._setDate(UTCDate(year, month, day));                                                            // 974  // 982
								}                                                                                                     // 975  // 983
							}                                                                                                      // 976  // 984
							this.showMode(-1);                                                                                     // 977  // 985
							this.fill();                                                                                           // 978  // 986
						}                                                                                                       // 979  // 987
						break;                                                                                                  // 980  // 988
					case 'td':                                                                                               // 981  // 989
						if (target.is('.day') && !target.is('.disabled')){                                                      // 982  // 990
							day = parseInt(target.text(), 10)||1;                                                                  // 983  // 991
							year = this.viewDate.getUTCFullYear();                                                                 // 984  // 992
							month = this.viewDate.getUTCMonth();                                                                   // 985  // 993
							if (target.is('.old')){                                                                                // 986  // 994
								if (month === 0){                                                                                     // 987  // 995
									month = 11;                                                                                          // 988  // 996
									year -= 1;                                                                                           // 989  // 997
								}                                                                                                     // 990  // 998
								else {                                                                                                // 991  // 999
									month -= 1;                                                                                          // 992  // 1000
								}                                                                                                     // 993  // 1001
							}                                                                                                      // 994  // 1002
							else if (target.is('.new')){                                                                           // 995  // 1003
								if (month === 11){                                                                                    // 996  // 1004
									month = 0;                                                                                           // 997  // 1005
									year += 1;                                                                                           // 998  // 1006
								}                                                                                                     // 999  // 1007
								else {                                                                                                // 1000
									month += 1;                                                                                          // 1001
								}                                                                                                     // 1002
							}                                                                                                      // 1003
							this._setDate(UTCDate(year, month, day));                                                              // 1004
						}                                                                                                       // 1005
						break;                                                                                                  // 1006
				}                                                                                                         // 1007
			}                                                                                                          // 1008
			if (this.picker.is(':visible') && this._focused_from){                                                     // 1009
				$(this._focused_from).focus();                                                                            // 1010
			}                                                                                                          // 1011
			delete this._focused_from;                                                                                 // 1012
		},                                                                                                          // 1013
                                                                                                              // 1014
		_toggle_multidate: function(date){                                                                          // 1015
			var ix = this.dates.contains(date);                                                                        // 1016
			if (!date){                                                                                                // 1017
				this.dates.clear();                                                                                       // 1018
			}                                                                                                          // 1019
			else if (ix !== -1){                                                                                       // 1020
				this.dates.remove(ix);                                                                                    // 1021
			}                                                                                                          // 1022
			else {                                                                                                     // 1023
				this.dates.push(date);                                                                                    // 1024
			}                                                                                                          // 1025
			if (typeof this.o.multidate === 'number')                                                                  // 1026
				while (this.dates.length > this.o.multidate)                                                              // 1027
					this.dates.remove(0);                                                                                    // 1028
		},                                                                                                          // 1029
                                                                                                              // 1030
		_setDate: function(date, which){                                                                            // 1031
			if (!which || which === 'date')                                                                            // 1032
				this._toggle_multidate(date && new Date(date));                                                           // 1033
			if (!which || which  === 'view')                                                                           // 1034
				this.viewDate = date && new Date(date);                                                                   // 1035
                                                                                                              // 1036
			this.fill();                                                                                               // 1037
			this.setValue();                                                                                           // 1038
			this._trigger('changeDate');                                                                               // 1039
			var element;                                                                                               // 1040
			if (this.isInput){                                                                                         // 1041
				element = this.element;                                                                                   // 1042
			}                                                                                                          // 1043
			else if (this.component){                                                                                  // 1044
				element = this.element.find('input');                                                                     // 1045
			}                                                                                                          // 1046
			if (element){                                                                                              // 1047
				element.change();                                                                                         // 1048
			}                                                                                                          // 1049
			if (this.o.autoclose && (!which || which === 'date')){                                                     // 1050
				this.hide();                                                                                              // 1051
			}                                                                                                          // 1052
		},                                                                                                          // 1053
                                                                                                              // 1054
		moveMonth: function(date, dir){                                                                             // 1055
			if (!date)                                                                                                 // 1056
				return undefined;                                                                                         // 1057
			if (!dir)                                                                                                  // 1058
				return date;                                                                                              // 1059
			var new_date = new Date(date.valueOf()),                                                                   // 1060
				day = new_date.getUTCDate(),                                                                              // 1061
				month = new_date.getUTCMonth(),                                                                           // 1062
				mag = Math.abs(dir),                                                                                      // 1063
				new_month, test;                                                                                          // 1064
			dir = dir > 0 ? 1 : -1;                                                                                    // 1065
			if (mag === 1){                                                                                            // 1066
				test = dir === -1                                                                                         // 1067
					// If going back one month, make sure month is not current month                                         // 1068
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)                                                          // 1069
					? function(){                                                                                            // 1070
						return new_date.getUTCMonth() === month;                                                                // 1071
					}                                                                                                        // 1072
					// If going forward one month, make sure month is as expected                                            // 1073
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)                                                          // 1074
					: function(){                                                                                            // 1075
						return new_date.getUTCMonth() !== new_month;                                                            // 1076
					};                                                                                                       // 1077
				new_month = month + dir;                                                                                  // 1078
				new_date.setUTCMonth(new_month);                                                                          // 1079
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11                                      // 1080
				if (new_month < 0 || new_month > 11)                                                                      // 1081
					new_month = (new_month + 12) % 12;                                                                       // 1082
			}                                                                                                          // 1083
			else {                                                                                                     // 1084
				// For magnitudes >1, move one month at a time...                                                         // 1085
				for (var i=0; i < mag; i++)                                                                               // 1086
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...                                        // 1087
					new_date = this.moveMonth(new_date, dir);                                                                // 1088
				// ...then reset the day, keeping it in the new month                                                     // 1089
				new_month = new_date.getUTCMonth();                                                                       // 1090
				new_date.setUTCDate(day);                                                                                 // 1091
				test = function(){                                                                                        // 1092
					return new_month !== new_date.getUTCMonth();                                                             // 1093
				};                                                                                                        // 1094
			}                                                                                                          // 1095
			// Common date-resetting loop -- if date is beyond end of month, make it                                   // 1096
			// end of month                                                                                            // 1097
			while (test()){                                                                                            // 1098
				new_date.setUTCDate(--day);                                                                               // 1099
				new_date.setUTCMonth(new_month);                                                                          // 1100
			}                                                                                                          // 1101
			return new_date;                                                                                           // 1102
		},                                                                                                          // 1103
                                                                                                              // 1104
		moveYear: function(date, dir){                                                                              // 1105
			return this.moveMonth(date, dir*12);                                                                       // 1106
		},                                                                                                          // 1107
                                                                                                              // 1108
		dateWithinRange: function(date){                                                                            // 1109
			return date >= this.o.startDate && date <= this.o.endDate;                                                 // 1110
		},                                                                                                          // 1111
                                                                                                              // 1112
		keydown: function(e){                                                                                       // 1113
			if (this.picker.is(':not(:visible)')){                                                                     // 1114
				if (e.keyCode === 27) // allow escape to hide and re-show picker                                          // 1115
					this.show();                                                                                             // 1116
				return;                                                                                                   // 1117
			}                                                                                                          // 1118
			var dateChanged = false,                                                                                   // 1119
				dir, newDate, newViewDate,                                                                                // 1120
				focusDate = this.focusDate || this.viewDate;                                                              // 1121
			switch (e.keyCode){                                                                                        // 1122
				case 27: // escape                                                                                        // 1123
					if (this.focusDate){                                                                                     // 1124
						this.focusDate = null;                                                                                  // 1125
						this.viewDate = this.dates.get(-1) || this.viewDate;                                                    // 1126
						this.fill();                                                                                            // 1127
					}                                                                                                        // 1128
					else                                                                                                     // 1129
						this.hide();                                                                                            // 1130
					e.preventDefault();                                                                                      // 1131
					break;                                                                                                   // 1132
				case 37: // left                                                                                          // 1133
				case 39: // right                                                                                         // 1134
					if (!this.o.keyboardNavigation)                                                                          // 1135
						break;                                                                                                  // 1136
					dir = e.keyCode === 37 ? -1 : 1;                                                                         // 1137
					if (e.ctrlKey){                                                                                          // 1138
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);                                         // 1139
						newViewDate = this.moveYear(focusDate, dir);                                                            // 1140
						this._trigger('changeYear', this.viewDate);                                                             // 1141
					}                                                                                                        // 1142
					else if (e.shiftKey){                                                                                    // 1143
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);                                        // 1144
						newViewDate = this.moveMonth(focusDate, dir);                                                           // 1145
						this._trigger('changeMonth', this.viewDate);                                                            // 1146
					}                                                                                                        // 1147
					else {                                                                                                   // 1148
						newDate = new Date(this.dates.get(-1) || UTCToday());                                                   // 1149
						newDate.setUTCDate(newDate.getUTCDate() + dir);                                                         // 1150
						newViewDate = new Date(focusDate);                                                                      // 1151
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir);                                                   // 1152
					}                                                                                                        // 1153
					if (this.dateWithinRange(newDate)){                                                                      // 1154
						this.focusDate = this.viewDate = newViewDate;                                                           // 1155
						this.setValue();                                                                                        // 1156
						this.fill();                                                                                            // 1157
						e.preventDefault();                                                                                     // 1158
					}                                                                                                        // 1159
					break;                                                                                                   // 1160
				case 38: // up                                                                                            // 1161
				case 40: // down                                                                                          // 1162
					if (!this.o.keyboardNavigation)                                                                          // 1163
						break;                                                                                                  // 1164
					dir = e.keyCode === 38 ? -1 : 1;                                                                         // 1165
					if (e.ctrlKey){                                                                                          // 1166
						newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);                                         // 1167
						newViewDate = this.moveYear(focusDate, dir);                                                            // 1168
						this._trigger('changeYear', this.viewDate);                                                             // 1169
					}                                                                                                        // 1170
					else if (e.shiftKey){                                                                                    // 1171
						newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);                                        // 1172
						newViewDate = this.moveMonth(focusDate, dir);                                                           // 1173
						this._trigger('changeMonth', this.viewDate);                                                            // 1174
					}                                                                                                        // 1175
					else {                                                                                                   // 1176
						newDate = new Date(this.dates.get(-1) || UTCToday());                                                   // 1177
						newDate.setUTCDate(newDate.getUTCDate() + dir * 7);                                                     // 1178
						newViewDate = new Date(focusDate);                                                                      // 1179
						newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);                                               // 1180
					}                                                                                                        // 1181
					if (this.dateWithinRange(newDate)){                                                                      // 1182
						this.focusDate = this.viewDate = newViewDate;                                                           // 1183
						this.setValue();                                                                                        // 1184
						this.fill();                                                                                            // 1185
						e.preventDefault();                                                                                     // 1186
					}                                                                                                        // 1187
					break;                                                                                                   // 1188
				case 32: // spacebar                                                                                      // 1189
					// Spacebar is used in manually typing dates in some formats.                                            // 1190
					// As such, its behavior should not be hijacked.                                                         // 1191
					break;                                                                                                   // 1192
				case 13: // enter                                                                                         // 1193
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;                                       // 1194
					this._toggle_multidate(focusDate);                                                                       // 1195
					dateChanged = true;                                                                                      // 1196
					this.focusDate = null;                                                                                   // 1197
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                     // 1198
					this.setValue();                                                                                         // 1199
					this.fill();                                                                                             // 1200
					if (this.picker.is(':visible')){                                                                         // 1201
						e.preventDefault();                                                                                     // 1202
						if (this.o.autoclose)                                                                                   // 1203
							this.hide();                                                                                           // 1204
					}                                                                                                        // 1205
					break;                                                                                                   // 1206
				case 9: // tab                                                                                            // 1207
					this.focusDate = null;                                                                                   // 1208
					this.viewDate = this.dates.get(-1) || this.viewDate;                                                     // 1209
					this.fill();                                                                                             // 1210
					this.hide();                                                                                             // 1211
					break;                                                                                                   // 1212
			}                                                                                                          // 1213
			if (dateChanged){                                                                                          // 1214
				if (this.dates.length)                                                                                    // 1215
					this._trigger('changeDate');                                                                             // 1216
				else                                                                                                      // 1217
					this._trigger('clearDate');                                                                              // 1218
				var element;                                                                                              // 1219
				if (this.isInput){                                                                                        // 1220
					element = this.element;                                                                                  // 1221
				}                                                                                                         // 1222
				else if (this.component){                                                                                 // 1223
					element = this.element.find('input');                                                                    // 1224
				}                                                                                                         // 1225
				if (element){                                                                                             // 1226
					element.change();                                                                                        // 1227
				}                                                                                                         // 1228
			}                                                                                                          // 1229
		},                                                                                                          // 1230
                                                                                                              // 1231
		showMode: function(dir){                                                                                    // 1232
			if (dir){                                                                                                  // 1233
				this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));                           // 1234
			}                                                                                                          // 1235
			this.picker                                                                                                // 1236
				.find('>div')                                                                                             // 1237
				.hide()                                                                                                   // 1238
				.filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName)                                             // 1239
					.css('display', 'block');                                                                                // 1240
			this.updateNavArrows();                                                                                    // 1241
		}                                                                                                           // 1242
	};                                                                                                           // 1243
                                                                                                              // 1244
	var DateRangePicker = function(element, options){                                                            // 1245
		this.element = $(element);                                                                                  // 1246
		this.inputs = $.map(options.inputs, function(i){                                                            // 1247
			return i.jquery ? i[0] : i;                                                                                // 1248
		});                                                                                                         // 1249
		delete options.inputs;                                                                                      // 1250
                                                                                                              // 1251
		$(this.inputs)                                                                                              // 1252
			.datepicker(options)                                                                                       // 1253
			.bind('changeDate', $.proxy(this.dateUpdated, this));                                                      // 1254
                                                                                                              // 1255
		this.pickers = $.map(this.inputs, function(i){                                                              // 1256
			return $(i).data('datepicker');                                                                            // 1257
		});                                                                                                         // 1258
		this.updateDates();                                                                                         // 1259
	};                                                                                                           // 1260
	DateRangePicker.prototype = {                                                                                // 1261
		updateDates: function(){                                                                                    // 1262
			this.dates = $.map(this.pickers, function(i){                                                              // 1263
				return i.getUTCDate();                                                                                    // 1264
			});                                                                                                        // 1265
			this.updateRanges();                                                                                       // 1266
		},                                                                                                          // 1267
		updateRanges: function(){                                                                                   // 1268
			var range = $.map(this.dates, function(d){                                                                 // 1269
				return d.valueOf();                                                                                       // 1270
			});                                                                                                        // 1271
			$.each(this.pickers, function(i, p){                                                                       // 1272
				p.setRange(range);                                                                                        // 1273
			});                                                                                                        // 1274
		},                                                                                                          // 1275
		dateUpdated: function(e){                                                                                   // 1276
			// `this.updating` is a workaround for preventing infinite recursion                                       // 1277
			// between `changeDate` triggering and `setUTCDate` calling.  Until                                        // 1278
			// there is a better mechanism.                                                                            // 1279
			if (this.updating)                                                                                         // 1280
				return;                                                                                                   // 1281
			this.updating = true;                                                                                      // 1282
                                                                                                              // 1283
			var dp = $(e.target).data('datepicker'),                                                                   // 1284
				new_date = dp.getUTCDate(),                                                                               // 1285
				i = $.inArray(e.target, this.inputs),                                                                     // 1286
				l = this.inputs.length;                                                                                   // 1287
			if (i === -1)                                                                                              // 1288
				return;                                                                                                   // 1289
                                                                                                              // 1290
			$.each(this.pickers, function(i, p){                                                                       // 1291
				if (!p.getUTCDate())                                                                                      // 1292
					p.setUTCDate(new_date);                                                                                  // 1293
			});                                                                                                        // 1294
                                                                                                              // 1295
			if (new_date < this.dates[i]){                                                                             // 1296
				// Date being moved earlier/left                                                                          // 1297
				while (i >= 0 && new_date < this.dates[i]){                                                               // 1298
					this.pickers[i--].setUTCDate(new_date);                                                                  // 1299
				}                                                                                                         // 1300
			}                                                                                                          // 1301
			else if (new_date > this.dates[i]){                                                                        // 1302
				// Date being moved later/right                                                                           // 1303
				while (i < l && new_date > this.dates[i]){                                                                // 1304
					this.pickers[i++].setUTCDate(new_date);                                                                  // 1305
				}                                                                                                         // 1306
			}                                                                                                          // 1307
			this.updateDates();                                                                                        // 1308
                                                                                                              // 1309
			delete this.updating;                                                                                      // 1310
		},                                                                                                          // 1311
		remove: function(){                                                                                         // 1312
			$.map(this.pickers, function(p){ p.remove(); });                                                           // 1313
			delete this.element.data().datepicker;                                                                     // 1314
		}                                                                                                           // 1315
	};                                                                                                           // 1316
                                                                                                              // 1317
	function opts_from_el(el, prefix){                                                                           // 1318
		// Derive options from element data-attrs                                                                   // 1319
		var data = $(el).data(),                                                                                    // 1320
			out = {}, inkey,                                                                                           // 1321
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');                                              // 1322
		prefix = new RegExp('^' + prefix.toLowerCase());                                                            // 1323
		function re_lower(_,a){                                                                                     // 1324
			return a.toLowerCase();                                                                                    // 1325
		}                                                                                                           // 1326
		for (var key in data)                                                                                       // 1327
			if (prefix.test(key)){                                                                                     // 1328
				inkey = key.replace(replace, re_lower);                                                                   // 1329
				out[inkey] = data[key];                                                                                   // 1330
			}                                                                                                          // 1331
		return out;                                                                                                 // 1332
	}                                                                                                            // 1333
                                                                                                              // 1334
	function opts_from_locale(lang){                                                                             // 1335
		// Derive options from locale plugins                                                                       // 1336
		var out = {};                                                                                               // 1337
		// Check if "de-DE" style date is available, if not language should                                         // 1338
		// fallback to 2 letter code eg "de"                                                                        // 1339
		if (!dates[lang]){                                                                                          // 1340
			lang = lang.split('-')[0];                                                                                 // 1341
			if (!dates[lang])                                                                                          // 1342
				return;                                                                                                   // 1343
		}                                                                                                           // 1344
		var d = dates[lang];                                                                                        // 1345
		$.each(locale_opts, function(i,k){                                                                          // 1346
			if (k in d)                                                                                                // 1347
				out[k] = d[k];                                                                                            // 1348
		});                                                                                                         // 1349
		return out;                                                                                                 // 1350
	}                                                                                                            // 1351
                                                                                                              // 1352
	var old = $.fn.datepicker;                                                                                   // 1353
	$.fn.datepicker = function(option){                                                                          // 1354
		var args = Array.apply(null, arguments);                                                                    // 1355
		args.shift();                                                                                               // 1356
		var internal_return;                                                                                        // 1357
		this.each(function(){                                                                                       // 1358
			var $this = $(this),                                                                                       // 1359
				data = $this.data('datepicker'),                                                                          // 1360
				options = typeof option === 'object' && option;                                                           // 1361
			if (!data){                                                                                                // 1362
				var elopts = opts_from_el(this, 'date'),                                                                  // 1363
					// Preliminary otions                                                                                    // 1364
					xopts = $.extend({}, defaults, elopts, options),                                                         // 1365
					locopts = opts_from_locale(xopts.language),                                                              // 1366
					// Options priority: js args, data-attrs, locales, defaults                                              // 1367
					opts = $.extend({}, defaults, locopts, elopts, options);                                                 // 1368
				if ($this.is('.input-daterange') || opts.inputs){                                                         // 1369
					var ropts = {                                                                                            // 1370
						inputs: opts.inputs || $this.find('input').toArray()                                                    // 1371
					};                                                                                                       // 1372
					$this.data('datepicker', (data = new DateRangePicker(this, $.extend(opts, ropts))));                     // 1373
				}                                                                                                         // 1374
				else {                                                                                                    // 1375
					$this.data('datepicker', (data = new Datepicker(this, opts)));                                           // 1376
				}                                                                                                         // 1377
			}                                                                                                          // 1378
			if (typeof option === 'string' && typeof data[option] === 'function'){                                     // 1379
				internal_return = data[option].apply(data, args);                                                         // 1380
				if (internal_return !== undefined)                                                                        // 1381
					return false;                                                                                            // 1382
			}                                                                                                          // 1383
		});                                                                                                         // 1384
		if (internal_return !== undefined)                                                                          // 1385
			return internal_return;                                                                                    // 1386
		else                                                                                                        // 1387
			return this;                                                                                               // 1388
	};                                                                                                           // 1389
                                                                                                              // 1390
	var defaults = $.fn.datepicker.defaults = {                                                                  // 1391
		autoclose: false,                                                                                           // 1392
		beforeShowDay: $.noop,                                                                                      // 1393
		calendarWeeks: false,                                                                                       // 1394
		clearBtn: false,                                                                                            // 1395
		daysOfWeekDisabled: [],                                                                                     // 1396
		endDate: Infinity,                                                                                          // 1397
		forceParse: true,                                                                                           // 1398
		format: 'mm/dd/yyyy',                                                                                       // 1399
		keyboardNavigation: true,                                                                                   // 1400
		language: 'en',                                                                                             // 1401
		minViewMode: 0,                                                                                             // 1402
		multidate: false,                                                                                           // 1403
		multidateSeparator: ',',                                                                                    // 1404
		orientation: "auto",                                                                                        // 1405
		rtl: false,                                                                                                 // 1406
		startDate: -Infinity,                                                                                       // 1407
		startView: 0,                                                                                               // 1408
		todayBtn: false,                                                                                            // 1409
		todayHighlight: false,                                                                                      // 1410
		weekStart: 0                                                                                                // 1411
	};                                                                                                           // 1412
	var locale_opts = $.fn.datepicker.locale_opts = [                                                            // 1413
		'format',                                                                                                   // 1414
		'rtl',                                                                                                      // 1415
		'weekStart'                                                                                                 // 1416
	];                                                                                                           // 1417
	$.fn.datepicker.Constructor = Datepicker;                                                                    // 1418
	var dates = $.fn.datepicker.dates = {                                                                        // 1419
		en: {                                                                                                       // 1420
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],            // 1421
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],                                       // 1422
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],                                                 // 1423
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],         // 1425
			today: "Today",                                                                                            // 1426
			clear: "Clear"                                                                                             // 1427
		}                                                                                                           // 1428
	};                                                                                                           // 1429
                                                                                                              // 1430
	var DPGlobal = {                                                                                             // 1431
		modes: [                                                                                                    // 1432
			{                                                                                                          // 1433
				clsName: 'days',                                                                                          // 1434
				navFnc: 'Month',                                                                                          // 1435
				navStep: 1                                                                                                // 1436
			},                                                                                                         // 1437
			{                                                                                                          // 1438
				clsName: 'months',                                                                                        // 1439
				navFnc: 'FullYear',                                                                                       // 1440
				navStep: 1                                                                                                // 1441
			},                                                                                                         // 1442
			{                                                                                                          // 1443
				clsName: 'years',                                                                                         // 1444
				navFnc: 'FullYear',                                                                                       // 1445
				navStep: 10                                                                                               // 1446
		}],                                                                                                         // 1447
		isLeapYear: function(year){                                                                                 // 1448
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));                                   // 1449
		},                                                                                                          // 1450
		getDaysInMonth: function(year, month){                                                                      // 1451
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];         // 1452
		},                                                                                                          // 1453
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,                                                                   // 1454
		nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,                                                   // 1455
		parseFormat: function(format){                                                                              // 1456
			// IE treats \0 as a string end in inputs (truncating the value),                                          // 1457
			// so it's a bad format delimiter, anyway                                                                  // 1458
			var separators = format.replace(this.validParts, '\0').split('\0'),                                        // 1459
				parts = format.match(this.validParts);                                                                    // 1460
			if (!separators || !separators.length || !parts || parts.length === 0){                                    // 1461
				throw new Error("Invalid date format.");                                                                  // 1462
			}                                                                                                          // 1463
			return {separators: separators, parts: parts};                                                             // 1464
		},                                                                                                          // 1465
		parseDate: function(date, format, language){                                                                // 1466
			if (!date)                                                                                                 // 1467
				return undefined;                                                                                         // 1468
			if (date instanceof Date)                                                                                  // 1469
				return date;                                                                                              // 1470
			if (typeof format === 'string')                                                                            // 1471
				format = DPGlobal.parseFormat(format);                                                                    // 1472
			var part_re = /([\-+]\d+)([dmwy])/,                                                                        // 1473
				parts = date.match(/([\-+]\d+)([dmwy])/g),                                                                // 1474
				part, dir, i;                                                                                             // 1475
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){                                                 // 1476
				date = new Date();                                                                                        // 1477
				for (i=0; i < parts.length; i++){                                                                         // 1478
					part = part_re.exec(parts[i]);                                                                           // 1479
					dir = parseInt(part[1]);                                                                                 // 1480
					switch (part[2]){                                                                                        // 1481
						case 'd':                                                                                               // 1482
							date.setUTCDate(date.getUTCDate() + dir);                                                              // 1483
							break;                                                                                                 // 1484
						case 'm':                                                                                               // 1485
							date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);                           // 1486
							break;                                                                                                 // 1487
						case 'w':                                                                                               // 1488
							date.setUTCDate(date.getUTCDate() + dir * 7);                                                          // 1489
							break;                                                                                                 // 1490
						case 'y':                                                                                               // 1491
							date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);                            // 1492
							break;                                                                                                 // 1493
					}                                                                                                        // 1494
				}                                                                                                         // 1495
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);                    // 1496
			}                                                                                                          // 1497
			parts = date && date.match(this.nonpunctuation) || [];                                                     // 1498
			date = new Date();                                                                                         // 1499
			var parsed = {},                                                                                           // 1500
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],                                          // 1501
				setters_map = {                                                                                           // 1502
					yyyy: function(d,v){                                                                                     // 1503
						return d.setUTCFullYear(v);                                                                             // 1504
					},                                                                                                       // 1505
					yy: function(d,v){                                                                                       // 1506
						return d.setUTCFullYear(2000+v);                                                                        // 1507
					},                                                                                                       // 1508
					m: function(d,v){                                                                                        // 1509
						if (isNaN(d))                                                                                           // 1510
							return d;                                                                                              // 1511
						v -= 1;                                                                                                 // 1512
						while (v < 0) v += 12;                                                                                  // 1513
						v %= 12;                                                                                                // 1514
						d.setUTCMonth(v);                                                                                       // 1515
						while (d.getUTCMonth() !== v)                                                                           // 1516
							d.setUTCDate(d.getUTCDate()-1);                                                                        // 1517
						return d;                                                                                               // 1518
					},                                                                                                       // 1519
					d: function(d,v){                                                                                        // 1520
						return d.setUTCDate(v);                                                                                 // 1521
					}                                                                                                        // 1522
				},                                                                                                        // 1523
				val, filtered;                                                                                            // 1524
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];                               // 1525
			setters_map['dd'] = setters_map['d'];                                                                      // 1526
			date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);                              // 1527
			var fparts = format.parts.slice();                                                                         // 1528
			// Remove noop parts                                                                                       // 1529
			if (parts.length !== fparts.length){                                                                       // 1530
				fparts = $(fparts).filter(function(i,p){                                                                  // 1531
					return $.inArray(p, setters_order) !== -1;                                                               // 1532
				}).toArray();                                                                                             // 1533
			}                                                                                                          // 1534
			// Process remainder                                                                                       // 1535
			function match_part(){                                                                                     // 1536
				var m = this.slice(0, parts[i].length),                                                                   // 1537
					p = parts[i].slice(0, m.length);                                                                         // 1538
				return m === p;                                                                                           // 1539
			}                                                                                                          // 1540
			if (parts.length === fparts.length){                                                                       // 1541
				var cnt;                                                                                                  // 1542
				for (i=0, cnt = fparts.length; i < cnt; i++){                                                             // 1543
					val = parseInt(parts[i], 10);                                                                            // 1544
					part = fparts[i];                                                                                        // 1545
					if (isNaN(val)){                                                                                         // 1546
						switch (part){                                                                                          // 1547
							case 'MM':                                                                                             // 1548
								filtered = $(dates[language].months).filter(match_part);                                              // 1549
								val = $.inArray(filtered[0], dates[language].months) + 1;                                             // 1550
								break;                                                                                                // 1551
							case 'M':                                                                                              // 1552
								filtered = $(dates[language].monthsShort).filter(match_part);                                         // 1553
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;                                        // 1554
								break;                                                                                                // 1555
						}                                                                                                       // 1556
					}                                                                                                        // 1557
					parsed[part] = val;                                                                                      // 1558
				}                                                                                                         // 1559
				var _date, s;                                                                                             // 1560
				for (i=0; i < setters_order.length; i++){                                                                 // 1561
					s = setters_order[i];                                                                                    // 1562
					if (s in parsed && !isNaN(parsed[s])){                                                                   // 1563
						_date = new Date(date);                                                                                 // 1564
						setters_map[s](_date, parsed[s]);                                                                       // 1565
						if (!isNaN(_date))                                                                                      // 1566
							date = _date;                                                                                          // 1567
					}                                                                                                        // 1568
				}                                                                                                         // 1569
			}                                                                                                          // 1570
			return date;                                                                                               // 1571
		},                                                                                                          // 1572
		formatDate: function(date, format, language){                                                               // 1573
			if (!date)                                                                                                 // 1574
				return '';                                                                                                // 1575
			if (typeof format === 'string')                                                                            // 1576
				format = DPGlobal.parseFormat(format);                                                                    // 1577
			var val = {                                                                                                // 1578
				d: date.getUTCDate(),                                                                                     // 1579
				D: dates[language].daysShort[date.getUTCDay()],                                                           // 1580
				DD: dates[language].days[date.getUTCDay()],                                                               // 1581
				m: date.getUTCMonth() + 1,                                                                                // 1582
				M: dates[language].monthsShort[date.getUTCMonth()],                                                       // 1583
				MM: dates[language].months[date.getUTCMonth()],                                                           // 1584
				yy: date.getUTCFullYear().toString().substring(2),                                                        // 1585
				yyyy: date.getUTCFullYear()                                                                               // 1586
			};                                                                                                         // 1587
			val.dd = (val.d < 10 ? '0' : '') + val.d;                                                                  // 1588
			val.mm = (val.m < 10 ? '0' : '') + val.m;                                                                  // 1589
			date = [];                                                                                                 // 1590
			var seps = $.extend([], format.separators);                                                                // 1591
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){                                                   // 1592
				if (seps.length)                                                                                          // 1593
					date.push(seps.shift());                                                                                 // 1594
				date.push(val[format.parts[i]]);                                                                          // 1595
			}                                                                                                          // 1596
			return date.join('');                                                                                      // 1597
		},                                                                                                          // 1598
		headTemplate: '<thead>'+                                                                                    // 1599
							'<tr>'+                                                                                                // 1600
								'<th class="prev">&laquo;</th>'+                                                                      // 1601
								'<th colspan="5" class="datepicker-switch"></th>'+                                                    // 1602
								'<th class="next">&raquo;</th>'+                                                                      // 1603
							'</tr>'+                                                                                               // 1604
						'</thead>',                                                                                             // 1605
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',                                              // 1606
		footTemplate: '<tfoot>'+                                                                                    // 1607
							'<tr>'+                                                                                                // 1608
								'<th colspan="7" class="today"></th>'+                                                                // 1609
							'</tr>'+                                                                                               // 1610
							'<tr>'+                                                                                                // 1611
								'<th colspan="7" class="clear"></th>'+                                                                // 1612
							'</tr>'+                                                                                               // 1613
						'</tfoot>'                                                                                              // 1614
	};                                                                                                           // 1615
	DPGlobal.template = '<div class="datepicker">'+                                                              // 1616
							'<div class="datepicker-days">'+                                                                       // 1617
								'<table class=" table-condensed">'+                                                                   // 1618
									DPGlobal.headTemplate+                                                                               // 1619
									'<tbody></tbody>'+                                                                                   // 1620
									DPGlobal.footTemplate+                                                                               // 1621
								'</table>'+                                                                                           // 1622
							'</div>'+                                                                                              // 1623
							'<div class="datepicker-months">'+                                                                     // 1624
								'<table class="table-condensed">'+                                                                    // 1625
									DPGlobal.headTemplate+                                                                               // 1626
									DPGlobal.contTemplate+                                                                               // 1627
									DPGlobal.footTemplate+                                                                               // 1628
								'</table>'+                                                                                           // 1629
							'</div>'+                                                                                              // 1630
							'<div class="datepicker-years">'+                                                                      // 1631
								'<table class="table-condensed">'+                                                                    // 1632
									DPGlobal.headTemplate+                                                                               // 1633
									DPGlobal.contTemplate+                                                                               // 1634
									DPGlobal.footTemplate+                                                                               // 1635
								'</table>'+                                                                                           // 1636
							'</div>'+                                                                                              // 1637
						'</div>';                                                                                               // 1638
                                                                                                              // 1639
	$.fn.datepicker.DPGlobal = DPGlobal;                                                                         // 1640
                                                                                                              // 1641
                                                                                                              // 1642
	/* DATEPICKER NO CONFLICT                                                                                    // 1643
	* =================== */                                                                                     // 1644
                                                                                                              // 1645
	$.fn.datepicker.noConflict = function(){                                                                     // 1646
		$.fn.datepicker = old;                                                                                      // 1647
		return this;                                                                                                // 1648
	};                                                                                                           // 1649
                                                                                                              // 1650
                                                                                                              // 1651
	/* DATEPICKER DATA-API                                                                                       // 1652
	* ================== */                                                                                      // 1653
                                                                                                              // 1654
	$(document).on(                                                                                              // 1655
		'focus.datepicker.data-api click.datepicker.data-api',                                                      // 1656
		'[data-provide="datepicker"]',                                                                              // 1657
		function(e){                                                                                                // 1658
			var $this = $(this);                                                                                       // 1659
			if ($this.data('datepicker'))                                                                              // 1660
				return;                                                                                                   // 1661
			e.preventDefault();                                                                                        // 1662
			// component click requires us to explicitly show it                                                       // 1663
			$this.datepicker('show');                                                                                  // 1664
		}                                                                                                           // 1665
	);                                                                                                           // 1666
	$(function(){                                                                                                // 1667
		$('[data-provide="datepicker-inline"]').datepicker();                                                       // 1668
	});                                                                                                          // 1669
                                                                                                              // 1670
}(window.jQuery));                                                                                            // 1671
                                                                                                              // 1672
////////////////////////////////////////////////////////////////////////////////////////////////////////////////      // 1681
                                                                                                                      // 1682
}).call(this);                                                                                                        // 1683
                                                                                                                      // 1684
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['deepwell:bootstrap-datepicker2'] = {};

})();
