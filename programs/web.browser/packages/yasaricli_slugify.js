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
var Template = Package['templating-runtime'].Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var CHAR_MAP, slugify;

(function(){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/yasaricli_slugify/packages/yasaricli_slugify.js                           //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
(function () {                                                                        // 1
                                                                                      // 2
//////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                              //    // 4
// packages/yasaricli:slugify/chars.js                                          //    // 5
//                                                                              //    // 6
//////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                //    // 8
CHAR_MAP = {                                                                    // 1  // 9
    // latin                                                                    // 2  // 10
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',      // 3  // 11
    'Ç': 'C', 'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E', 'Ì': 'I', 'Í': 'I',       // 4  // 12
    'Î': 'I', 'Ï': 'I', 'Ð': 'D', 'Ñ': 'N', 'Ò': 'O', 'Ó': 'O', 'Ô': 'O',       // 5  // 13
    'Õ': 'O', 'Ö': 'O', 'Ő': 'O', 'Ø': 'O', 'Ù': 'U', 'Ú': 'U', 'Û': 'U',       // 6  // 14
    'Ü': 'U', 'Ű': 'U', 'Ý': 'Y', 'Þ': 'TH', 'ß': 'ss', 'à':'a', 'á':'a',       // 7  // 15
    'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c', 'è': 'e',      // 8  // 16
    'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',       // 9  // 17
    'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',       // 10
    'ő': 'o', 'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u',       // 11
    'ý': 'y', 'þ': 'th', 'ÿ': 'y', 'ẞ': 'SS',                                   // 12
    // greek                                                                    // 13
    'α':'a', 'β':'b', 'γ':'g', 'δ':'d', 'ε':'e', 'ζ':'z', 'η':'h', 'θ':'8',     // 14
    'ι':'i', 'κ':'k', 'λ':'l', 'μ':'m', 'ν':'n', 'ξ':'3', 'ο':'o', 'π':'p',     // 15
    'ρ':'r', 'σ':'s', 'τ':'t', 'υ':'y', 'φ':'f', 'χ':'x', 'ψ':'ps', 'ω':'w',    // 16
    'ά':'a', 'έ':'e', 'ί':'i', 'ό':'o', 'ύ':'y', 'ή':'h', 'ώ':'w', 'ς':'s',     // 17
    'ϊ':'i', 'ΰ':'y', 'ϋ':'y', 'ΐ':'i',                                         // 18
    'Α':'A', 'Β':'B', 'Γ':'G', 'Δ':'D', 'Ε':'E', 'Ζ':'Z', 'Η':'H', 'Θ':'8',     // 19
    'Ι':'I', 'Κ':'K', 'Λ':'L', 'Μ':'M', 'Ν':'N', 'Ξ':'3', 'Ο':'O', 'Π':'P',     // 20
    'Ρ':'R', 'Σ':'S', 'Τ':'T', 'Υ':'Y', 'Φ':'F', 'Χ':'X', 'Ψ':'PS', 'Ω':'W',    // 21
    'Ά':'A', 'Έ':'E', 'Ί':'I', 'Ό':'O', 'Ύ':'Y', 'Ή':'H', 'Ώ':'W', 'Ϊ':'I',     // 22
    'Ϋ':'Y',                                                                    // 23
    //turkish                                                                   // 24
    'ş':'s', 'Ş':'S', 'ı':'i', 'İ':'I', 'ç':'c', 'Ç':'C', 'ü':'u', 'Ü':'U',     // 25
    'ö':'o', 'Ö':'O', 'ğ':'g', 'Ğ':'G',                                         // 26
    // russian                                                                  // 27
    'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'yo', 'ж':'zh',   // 28
    'з':'z', 'и':'i', 'й':'j', 'к':'k', 'л':'l', 'м':'m', 'н':'n', 'о':'o',     // 29
    'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c',     // 30
    'ч':'ch', 'ш':'sh', 'щ':'sh', 'ъ':'u', 'ы':'y', 'ь':'', 'э':'e', 'ю':'yu',  // 31
    'я':'ya',                                                                   // 32
    'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'Yo', 'Ж':'Zh',   // 33
    'З':'Z', 'И':'I', 'Й':'J', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O',     // 34
    'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C',     // 35
    'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sh', 'Ъ':'U', 'Ы':'Y', 'Ь':'', 'Э':'E', 'Ю':'Yu',  // 36
    'Я':'Ya',                                                                   // 37
    // ukranian                                                                 // 38
    'Є':'Ye', 'І':'I', 'Ї':'Yi', 'Ґ':'G', 'є':'ye', 'і':'i', 'ї':'yi', 'ґ':'g', // 39
    // czech                                                                    // 40
    'č':'c', 'ď':'d', 'ě':'e', 'ň': 'n', 'ř':'r', 'š':'s', 'ť':'t', 'ů':'u',    // 41
    'ž':'z', 'Č':'C', 'Ď':'D', 'Ě':'E', 'Ň': 'N', 'Ř':'R', 'Š':'S', 'Ť':'T',    // 42
    'Ů':'U', 'Ž':'Z',                                                           // 43
    // polish                                                                   // 44
    'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z',     // 45
    'ż':'z', 'Ą':'A', 'Ć':'C', 'Ę':'e', 'Ł':'L', 'Ń':'N', 'Ś':'S',              // 46
    'Ź':'Z', 'Ż':'Z',                                                           // 47
    // latvian                                                                  // 48
    'ā':'a', 'č':'c', 'ē':'e', 'ģ':'g', 'ī':'i', 'ķ':'k', 'ļ':'l', 'ņ':'n',     // 49
    'š':'s', 'ū':'u', 'ž':'z', 'Ā':'A', 'Č':'C', 'Ē':'E', 'Ģ':'G', 'Ī':'i',     // 50
    'Ķ':'k', 'Ļ':'L', 'Ņ':'N', 'Š':'S', 'Ū':'u', 'Ž':'Z',                       // 51
    // currency                                                                 // 52
    '€': 'euro', '₢': 'cruzeiro', '₣': 'french franc', '£': 'pound',            // 53
    '₤': 'lira', '₥': 'mill', '₦': 'naira', '₧': 'peseta', '₨': 'rupee',        // 54
    '₩': 'won', '₪': 'new shequel', '₫': 'dong', '₭': 'kip', '₮': 'tugrik',     // 55
    '₯': 'drachma', '₰': 'penny', '₱': 'peso', '₲': 'guarani', '₳': 'austral',  // 56
    '₴': 'hryvnia', '₵': 'cedi', '¢': 'cent', '¥': 'yen', '元': 'yuan',          // 57
    '円': 'yen', '﷼': 'rial', '₠': 'ecu', '¤': 'currency', '฿': 'baht',          // 58
    "$": 'dollar',                                                              // 59
    // symbols                                                                  // 60
    '©':'(c)', 'œ': 'oe', 'Œ': 'OE', '∑': 'sum', '®': '(r)', '†': '+',          // 61
    '“': '"', '”': '"', '‘': "'", '’': "'", '∂': 'd', 'ƒ': 'f', '™': 'tm',      // 62
    '℠': 'sm', '…': '...', '˚': 'o', 'º': 'o', 'ª': 'a', '•': '*',              // 63
    '∆': 'delta', '∞': 'infinity', '♥': 'love', '&': 'and', '|': 'or',          // 64
    '<': 'less', '>': 'greater', '°': '0', '¹': '1', '²' : '2', '³': '3',       // 65
    '@': 'at'                                                                   // 66
};                                                                              // 67
                                                                                // 68
//////////////////////////////////////////////////////////////////////////////////    // 77
                                                                                      // 78
}).call(this);                                                                        // 79
                                                                                      // 80
                                                                                      // 81
                                                                                      // 82
                                                                                      // 83
                                                                                      // 84
                                                                                      // 85
(function () {                                                                        // 86
                                                                                      // 87
//////////////////////////////////////////////////////////////////////////////////    // 88
//                                                                              //    // 89
// packages/yasaricli:slugify/slugify.js                                        //    // 90
//                                                                              //    // 91
//////////////////////////////////////////////////////////////////////////////////    // 92
                                                                                //    // 93
var defaultReplacement = function(replacement) {                                // 1  // 94
  return replacement == '' ? '' : replacement || '-';                           // 2  // 95
};                                                                              // 3  // 96
                                                                                // 4  // 97
slugify = function(string, replacement) {                                       // 5  // 98
  var replacement = defaultReplacement(replacement),                            // 6  // 99
      out = '';                                                                 // 7  // 100
                                                                                // 8  // 101
  if (!_.isString(string)) {                                                    // 9  // 102
    return '';                                                                  // 10
  }                                                                             // 11
                                                                                // 12
  _.forEach(string.split(''), function(ch) {                                    // 13
                                                                                // 14
    if (_.has(CHAR_MAP, ch)) {                                                  // 15
      ch = CHAR_MAP[ch];                                                        // 16
    }                                                                           // 17
                                                                                // 18
    ch = ch.replace(/[^\w\s$\*\_\+~\.\(\)\-]/g, ''); // allowed                 // 19
    out += ch;                                                                  // 20
  });                                                                           // 21
                                                                                // 22
  out = out.replace(/^\s+|\s+$/g, ''); // trim leading/trailing spaces          // 23
  out = out.replace(/[-\s]+/g, replacement); // convert spaces                  // 24
  out.replace("#{replacement}$", ''); // remove trailing separator              // 25
  return out.toLowerCase();                                                     // 26
};                                                                              // 27
                                                                                // 28
if (Meteor.isClient) {                                                          // 29
  Template.registerHelper('slugify', function(string, replacement) {            // 30
    var replacement = defaultReplacement(replacement);                          // 31
    return slugify(string, replacement);                                        // 32
  });                                                                           // 33
}                                                                               // 34
                                                                                // 35
//////////////////////////////////////////////////////////////////////////////////    // 129
                                                                                      // 130
}).call(this);                                                                        // 131
                                                                                      // 132
////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['yasaricli:slugify'] = {}, {
  slugify: slugify
});

})();
