/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "./node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.keys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/discord.js/webpack/discord.min.js":
/*!********************************************************!*\
  !*** ./node_modules/discord.js/webpack/discord.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=97)}([function(e,t,i){"use strict";(function(e){const s=t.Package=i(58),{Error:n,RangeError:r}=i(3),o=t.browser="undefined"!=typeof window;t.DefaultOptions={shardCount:1,messageCacheMaxSize:200,messageCacheLifetime:0,messageSweepInterval:0,fetchAllMembers:!1,disableMentions:"none",partials:[],restWsBridgeTimeout:5e3,restRequestTimeout:15e3,retryLimit:1,restTimeOffset:500,restSweepInterval:60,presence:{},ws:{large_threshold:250,compress:!1,properties:{$os:o?"browser":e.platform,$browser:"discord.js",$device:"discord.js"},version:6},http:{version:7,api:"https://discordapp.com/api",cdn:"https://cdn.discordapp.com",invite:"https://discord.gg"}},t.UserAgent=o?null:`DiscordBot (${s.homepage.split("#")[0]}, ${s.version}) Node.js/${e.version}`,t.WSCodes={1e3:"WS_CLOSE_REQUESTED",4004:"TOKEN_INVALID",4010:"SHARDING_INVALID",4011:"SHARDING_REQUIRED",4013:"INVALID_INTENTS",4014:"DISALLOWED_INTENTS"};const a=["webp","png","jpg","jpeg","gif"],c=Array.from({length:9},(e,t)=>2**(t+4));function l(e,{format:t="webp",size:i}={}){if(t&&!a.includes(t))throw new n("IMAGE_FORMAT",t);if(i&&!c.includes(i))throw new r("IMAGE_SIZE",i);return`${e}.${t}${i?`?size=${i}`:""}`}function h(e){let t=Object.create(null);for(const i of e)t[i]=i;return t}t.Endpoints={CDN:e=>({Emoji:(t,i="png")=>`${e}/emojis/${t}.${i}`,Asset:t=>`${e}/assets/${t}`,DefaultAvatar:t=>`${e}/embed/avatars/${t}.png`,Avatar:(t,i,s="webp",n,r=!1)=>(r&&(s=i.startsWith("a_")?"gif":s),l(`${e}/avatars/${t}/${i}`,{format:s,size:n})),Banner:(t,i,s="webp",n)=>l(`${e}/banners/${t}/${i}`,{format:s,size:n}),Icon:(t,i,s="webp",n,r=!1)=>(r&&(s=i.startsWith("a_")?"gif":s),l(`${e}/icons/${t}/${i}`,{format:s,size:n})),AppIcon:(t,i,{format:s="webp",size:n}={})=>l(`${e}/app-icons/${t}/${i}`,{size:n,format:s}),AppAsset:(t,i,{format:s="webp",size:n}={})=>l(`${e}/app-assets/${t}/${i}`,{size:n,format:s}),GDMIcon:(t,i,s="webp",n)=>l(`${e}/channel-icons/${t}/${i}`,{size:n,format:s}),Splash:(t,i,s="webp",n)=>l(`${e}/splashes/${t}/${i}`,{size:n,format:s}),DiscoverySplash:(t,i,s="webp",n)=>l(`${e}/discovery-splashes/${t}/${i}`,{size:n,format:s}),TeamIcon:(t,i,{format:s="webp",size:n}={})=>l(`${e}/team-icons/${t}/${i}`,{size:n,format:s})}),invite:(e,t)=>`${e}/${t}`,botGateway:"/gateway/bot"},t.Status={READY:0,CONNECTING:1,RECONNECTING:2,IDLE:3,NEARLY:4,DISCONNECTED:5,WAITING_FOR_GUILDS:6,IDENTIFYING:7,RESUMING:8},t.VoiceStatus={CONNECTED:0,CONNECTING:1,AUTHENTICATING:2,RECONNECTING:3,DISCONNECTED:4},t.OPCodes={DISPATCH:0,HEARTBEAT:1,IDENTIFY:2,STATUS_UPDATE:3,VOICE_STATE_UPDATE:4,VOICE_GUILD_PING:5,RESUME:6,RECONNECT:7,REQUEST_GUILD_MEMBERS:8,INVALID_SESSION:9,HELLO:10,HEARTBEAT_ACK:11},t.VoiceOPCodes={IDENTIFY:0,SELECT_PROTOCOL:1,READY:2,HEARTBEAT:3,SESSION_DESCRIPTION:4,SPEAKING:5,HELLO:8,CLIENT_CONNECT:12,CLIENT_DISCONNECT:13},t.Events={RATE_LIMIT:"rateLimit",CLIENT_READY:"ready",GUILD_CREATE:"guildCreate",GUILD_DELETE:"guildDelete",GUILD_UPDATE:"guildUpdate",GUILD_UNAVAILABLE:"guildUnavailable",GUILD_AVAILABLE:"guildAvailable",GUILD_MEMBER_ADD:"guildMemberAdd",GUILD_MEMBER_REMOVE:"guildMemberRemove",GUILD_MEMBER_UPDATE:"guildMemberUpdate",GUILD_MEMBER_AVAILABLE:"guildMemberAvailable",GUILD_MEMBER_SPEAKING:"guildMemberSpeaking",GUILD_MEMBERS_CHUNK:"guildMembersChunk",GUILD_INTEGRATIONS_UPDATE:"guildIntegrationsUpdate",GUILD_ROLE_CREATE:"roleCreate",GUILD_ROLE_DELETE:"roleDelete",INVITE_CREATE:"inviteCreate",INVITE_DELETE:"inviteDelete",GUILD_ROLE_UPDATE:"roleUpdate",GUILD_EMOJI_CREATE:"emojiCreate",GUILD_EMOJI_DELETE:"emojiDelete",GUILD_EMOJI_UPDATE:"emojiUpdate",GUILD_BAN_ADD:"guildBanAdd",GUILD_BAN_REMOVE:"guildBanRemove",CHANNEL_CREATE:"channelCreate",CHANNEL_DELETE:"channelDelete",CHANNEL_UPDATE:"channelUpdate",CHANNEL_PINS_UPDATE:"channelPinsUpdate",MESSAGE_CREATE:"message",MESSAGE_DELETE:"messageDelete",MESSAGE_UPDATE:"messageUpdate",MESSAGE_BULK_DELETE:"messageDeleteBulk",MESSAGE_REACTION_ADD:"messageReactionAdd",MESSAGE_REACTION_REMOVE:"messageReactionRemove",MESSAGE_REACTION_REMOVE_ALL:"messageReactionRemoveAll",MESSAGE_REACTION_REMOVE_EMOJI:"messageReactionRemoveEmoji",USER_UPDATE:"userUpdate",PRESENCE_UPDATE:"presenceUpdate",VOICE_SERVER_UPDATE:"voiceServerUpdate",VOICE_STATE_UPDATE:"voiceStateUpdate",VOICE_BROADCAST_SUBSCRIBE:"subscribe",VOICE_BROADCAST_UNSUBSCRIBE:"unsubscribe",TYPING_START:"typingStart",TYPING_STOP:"typingStop",WEBHOOKS_UPDATE:"webhookUpdate",ERROR:"error",WARN:"warn",DEBUG:"debug",SHARD_DISCONNECT:"shardDisconnect",SHARD_ERROR:"shardError",SHARD_RECONNECTING:"shardReconnecting",SHARD_READY:"shardReady",SHARD_RESUME:"shardResume",INVALIDATED:"invalidated",RAW:"raw"},t.ShardEvents={CLOSE:"close",DESTROYED:"destroyed",INVALID_SESSION:"invalidSession",READY:"ready",RESUMED:"resumed",ALL_READY:"allReady"},t.PartialTypes=h(["USER","CHANNEL","GUILD_MEMBER","MESSAGE","REACTION"]),t.WSEvents=h(["READY","RESUMED","GUILD_CREATE","GUILD_DELETE","GUILD_UPDATE","INVITE_CREATE","INVITE_DELETE","GUILD_MEMBER_ADD","GUILD_MEMBER_REMOVE","GUILD_MEMBER_UPDATE","GUILD_MEMBERS_CHUNK","GUILD_INTEGRATIONS_UPDATE","GUILD_ROLE_CREATE","GUILD_ROLE_DELETE","GUILD_ROLE_UPDATE","GUILD_BAN_ADD","GUILD_BAN_REMOVE","GUILD_EMOJIS_UPDATE","CHANNEL_CREATE","CHANNEL_DELETE","CHANNEL_UPDATE","CHANNEL_PINS_UPDATE","MESSAGE_CREATE","MESSAGE_DELETE","MESSAGE_UPDATE","MESSAGE_DELETE_BULK","MESSAGE_REACTION_ADD","MESSAGE_REACTION_REMOVE","MESSAGE_REACTION_REMOVE_ALL","MESSAGE_REACTION_REMOVE_EMOJI","USER_UPDATE","PRESENCE_UPDATE","TYPING_START","VOICE_STATE_UPDATE","VOICE_SERVER_UPDATE","WEBHOOKS_UPDATE"]),t.MessageTypes=["DEFAULT","RECIPIENT_ADD","RECIPIENT_REMOVE","CALL","CHANNEL_NAME_CHANGE","CHANNEL_ICON_CHANGE","PINS_ADD","GUILD_MEMBER_JOIN","USER_PREMIUM_GUILD_SUBSCRIPTION","USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1","USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2","USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3","CHANNEL_FOLLOW_ADD",null,"GUILD_DISCOVERY_DISQUALIFIED","GUILD_DISCOVERY_REQUALIFIED"],t.ActivityTypes=["PLAYING","STREAMING","LISTENING","WATCHING","CUSTOM_STATUS"],t.ChannelTypes={TEXT:0,DM:1,VOICE:2,GROUP:3,CATEGORY:4,NEWS:5,STORE:6},t.ClientApplicationAssetTypes={SMALL:1,BIG:2},t.Colors={DEFAULT:0,WHITE:16777215,AQUA:1752220,GREEN:3066993,BLUE:3447003,YELLOW:16776960,PURPLE:10181046,LUMINOUS_VIVID_PINK:15277667,GOLD:15844367,ORANGE:15105570,RED:15158332,GREY:9807270,NAVY:3426654,DARK_AQUA:1146986,DARK_GREEN:2067276,DARK_BLUE:2123412,DARK_PURPLE:7419530,DARK_VIVID_PINK:11342935,DARK_GOLD:12745742,DARK_ORANGE:11027200,DARK_RED:10038562,DARK_GREY:9936031,DARKER_GREY:8359053,LIGHT_GREY:12370112,DARK_NAVY:2899536,BLURPLE:7506394,GREYPLE:10070709,DARK_BUT_NOT_BLACK:2895667,NOT_QUITE_BLACK:2303786},t.ExplicitContentFilterLevels=["DISABLED","MEMBERS_WITHOUT_ROLES","ALL_MEMBERS"],t.VerificationLevels=["NONE","LOW","MEDIUM","HIGH","VERY_HIGH"],t.APIErrors={UNKNOWN_ACCOUNT:10001,UNKNOWN_APPLICATION:10002,UNKNOWN_CHANNEL:10003,UNKNOWN_GUILD:10004,UNKNOWN_INTEGRATION:10005,UNKNOWN_INVITE:10006,UNKNOWN_MEMBER:10007,UNKNOWN_MESSAGE:10008,UNKNOWN_OVERWRITE:10009,UNKNOWN_PROVIDER:10010,UNKNOWN_ROLE:10011,UNKNOWN_TOKEN:10012,UNKNOWN_USER:10013,UNKNOWN_EMOJI:10014,UNKNOWN_WEBHOOK:10015,BOT_PROHIBITED_ENDPOINT:20001,BOT_ONLY_ENDPOINT:20002,MAXIMUM_GUILDS:30001,MAXIMUM_FRIENDS:30002,MAXIMUM_PINS:30003,MAXIMUM_ROLES:30005,MAXIMUM_REACTIONS:30010,MAXIMUM_CHANNELS:30013,MAXIMUM_INVITES:30016,UNAUTHORIZED:40001,USER_BANNED:40007,MISSING_ACCESS:50001,INVALID_ACCOUNT_TYPE:50002,CANNOT_EXECUTE_ON_DM:50003,EMBED_DISABLED:50004,CANNOT_EDIT_MESSAGE_BY_OTHER:50005,CANNOT_SEND_EMPTY_MESSAGE:50006,CANNOT_MESSAGE_USER:50007,CANNOT_SEND_MESSAGES_IN_VOICE_CHANNEL:50008,CHANNEL_VERIFICATION_LEVEL_TOO_HIGH:50009,OAUTH2_APPLICATION_BOT_ABSENT:50010,MAXIMUM_OAUTH2_APPLICATIONS:50011,INVALID_OAUTH_STATE:50012,MISSING_PERMISSIONS:50013,INVALID_AUTHENTICATION_TOKEN:50014,NOTE_TOO_LONG:50015,INVALID_BULK_DELETE_QUANTITY:50016,CANNOT_PIN_MESSAGE_IN_OTHER_CHANNEL:50019,INVALID_OR_TAKEN_INVITE_CODE:50020,CANNOT_EXECUTE_ON_SYSTEM_MESSAGE:50021,INVALID_OAUTH_TOKEN:50025,BULK_DELETE_MESSAGE_TOO_OLD:50034,INVALID_FORM_BODY:50035,INVITE_ACCEPTED_TO_GUILD_NOT_CONTAINING_BOT:50036,INVALID_API_VERSION:50041,REACTION_BLOCKED:90001,RESOURCE_OVERLOADED:13e4},t.DefaultMessageNotifications=["ALL","MENTIONS"],t.MembershipStates=[null,"INVITED","ACCEPTED"],t.WebhookTypes=[null,"Incoming","Channel Follower"]}).call(this,i(14))},function(e,t,i){"use strict";const{PartialTypes:s}=i(0);e.exports=class GenericAction{constructor(e){this.client=e}handle(e){return e}getPayload(e,t,i,s,n){const r=t.cache.get(i);return!r&&this.client.options.partials.includes(s)?t.add(e,n):r}getChannel(e){const t=e.channel_id||e.id;return e.channel||this.getPayload({id:t,guild_id:e.guild_id,recipients:[e.author||{id:e.user_id}]},this.client.channels,t,s.CHANNEL)}getMessage(e,t,i){const n=e.message_id||e.id;return e.message||this.getPayload({id:n,channel_id:t.id,guild_id:e.guild_id||(t.guild?t.guild.id:null)},t.messages,n,s.MESSAGE,i)}getReaction(e,t,i){const n=e.emoji.id||decodeURIComponent(e.emoji.name);return this.getPayload({emoji:e.emoji,count:t.partial?null:0,me:!!i&&i.id===this.client.user.id},t.reactions,n,s.REACTION)}getMember(e,t){const i=e.user.id;return this.getPayload({user:{id:i}},t.members,i,s.GUILD_MEMBER)}getUser(e){const t=e.user_id;return e.user||this.getPayload({id:t},this.client.users,t,s.USER)}}},function(e,t,i){"use strict";const s=i(99),n=i(4);e.exports=class Collection extends s{toJSON(){return this.map(e=>"function"==typeof e.toJSON?e.toJSON():n.flatten(e))}}},function(e,t,i){"use strict";e.exports=i(59),e.exports.Messages=i(98)},function(e,t,i){"use strict";const{parse:s}=i(35),n=i(36),{Colors:r,DefaultOptions:o,Endpoints:a}=i(0),{Error:c,RangeError:l,TypeError:h}=i(3),u=e=>"object"==typeof e&&null!==e;class Util{constructor(){throw new Error(`The ${this.constructor.name} class may not be instantiated.`)}static flatten(e,...t){if(!u(e))return e;t=Object.assign(...Object.keys(e).filter(e=>!e.startsWith("_")).map(e=>({[e]:!0})),...t);const s={};for(let[n,r]of Object.entries(t)){if(!r)continue;r=!0===r?n:r;const t=e[n],o=u(t),a=o&&"function"==typeof t.valueOf?t.valueOf():null;t instanceof i(2)?s[r]=Array.from(t.keys()):a instanceof i(2)?s[r]=Array.from(a.keys()):Array.isArray(t)?s[r]=t.map(e=>Util.flatten(e)):"object"!=typeof a?s[r]=a:o||(s[r]=t)}return s}static splitMessage(e,{maxLength:t=2e3,char:i="\n",prepend:s="",append:n=""}={}){if((e=Util.resolveString(e)).length<=t)return[e];const r=e.split(i);if(r.some(e=>e.length>t))throw new l("SPLIT_MAX_LEN");const o=[];let a="";for(const e of r)a&&(a+i+e+n).length>t&&(o.push(a+n),a=s),a+=(a&&a!==s?i:"")+e;return o.concat(a).filter(e=>e)}static escapeMarkdown(e,{codeBlock:t=!0,inlineCode:i=!0,bold:s=!0,italic:n=!0,underline:r=!0,strikethrough:o=!0,spoiler:a=!0,codeBlockContent:c=!0,inlineCodeContent:l=!0}={}){return c?l?(i&&(e=Util.escapeInlineCode(e)),t&&(e=Util.escapeCodeBlock(e)),n&&(e=Util.escapeItalic(e)),s&&(e=Util.escapeBold(e)),r&&(e=Util.escapeUnderline(e)),o&&(e=Util.escapeStrikethrough(e)),a&&(e=Util.escapeSpoiler(e)),e):e.split(/(?<=^|[^`])`(?=[^`]|$)/g).map((e,i,c)=>i%2&&i!==c.length-1?e:Util.escapeMarkdown(e,{codeBlock:t,bold:s,italic:n,underline:r,strikethrough:o,spoiler:a})).join(i?"\\`":"`"):e.split("```").map((e,t,c)=>t%2&&t!==c.length-1?e:Util.escapeMarkdown(e,{inlineCode:i,bold:s,italic:n,underline:r,strikethrough:o,spoiler:a,inlineCodeContent:l})).join(t?"\\`\\`\\`":"```")}static escapeCodeBlock(e){return e.replace(/```/g,"\\`\\`\\`")}static escapeInlineCode(e){return e.replace(/(?<=^|[^`])`(?=[^`]|$)/g,"\\`")}static escapeItalic(e){let t=0;return e=e.replace(/(?<=^|[^*])\*([^*]|\*\*|$)/g,(e,i)=>"**"===i?++t%2?`\\*${i}`:`${i}\\*`:`\\*${i}`),t=0,e.replace(/(?<=^|[^_])_([^_]|__|$)/g,(e,i)=>"__"===i?++t%2?`\\_${i}`:`${i}\\_`:`\\_${i}`)}static escapeBold(e){let t=0;return e.replace(/\*\*(\*)?/g,(e,i)=>i?++t%2?`${i}\\*\\*`:`\\*\\*${i}`:"\\*\\*")}static escapeUnderline(e){let t=0;return e.replace(/__(_)?/g,(e,i)=>i?++t%2?`${i}\\_\\_`:`\\_\\_${i}`:"\\_\\_")}static escapeStrikethrough(e){return e.replace(/~~/g,"\\~\\~")}static escapeSpoiler(e){return e.replace(/\|\|/g,"\\|\\|")}static fetchRecommendedShards(e,t=1e3){if(!e)throw new c("TOKEN_MISSING");return n(`${o.http.api}/v${o.http.version}${a.botGateway}`,{method:"GET",headers:{Authorization:`Bot ${e.replace(/^Bot\s*/i,"")}`}}).then(e=>{if(e.ok)return e.json();throw e}).then(e=>e.shards*(1e3/t))}static parseEmoji(e){if(e.includes("%")&&(e=decodeURIComponent(e)),!e.includes(":"))return{animated:!1,name:e,id:null};const t=e.match(/<?(?:(a):)?(\w{2,32}):(\d{17,19})?>?/);return t?{animated:Boolean(t[1]),name:t[2],id:t[3]||null}:null}static cloneObject(e){return Object.assign(Object.create(e),e)}static mergeDefault(e,t){if(!t)return e;for(const n in e)i=t,s=n,Object.prototype.hasOwnProperty.call(i,s)&&void 0!==t[n]?t[n]===Object(t[n])&&(t[n]=Util.mergeDefault(e[n],t[n])):t[n]=e[n];var i,s;return t}static convertToBuffer(e){return"string"==typeof e&&(e=Util.str2ab(e)),Buffer.from(e)}static str2ab(e){const t=new ArrayBuffer(2*e.length),i=new Uint16Array(t);for(var s=0,n=e.length;s<n;s++)i[s]=e.charCodeAt(s);return t}static makeError(e){const t=new Error(e.message);return t.name=e.name,t.stack=e.stack,t}static makePlainError(e){return{name:e.name,message:e.message,stack:e.stack}}static moveElementInArray(e,t,i,s=!1){const n=e.indexOf(t);if((i=(s?n:0)+i)>-1&&i<e.length){const t=e.splice(n,1)[0];e.splice(i,0,t)}return e.indexOf(t)}static resolveString(e){return"string"==typeof e?e:Array.isArray(e)?e.join("\n"):String(e)}static resolveColor(e){if("string"==typeof e){if("RANDOM"===e)return Math.floor(16777216*Math.random());if("DEFAULT"===e)return 0;e=r[e]||parseInt(e.replace("#",""),16)}else Array.isArray(e)&&(e=(e[0]<<16)+(e[1]<<8)+e[2]);if(e<0||e>16777215)throw new l("COLOR_RANGE");if(e&&isNaN(e))throw new h("COLOR_CONVERT");return e}static discordSort(e){return e.sorted((e,t)=>e.rawPosition-t.rawPosition||parseInt(t.id.slice(0,-10))-parseInt(e.id.slice(0,-10))||parseInt(t.id.slice(10))-parseInt(e.id.slice(10)))}static setPosition(e,t,i,s,n,r){let o=s.array();return Util.moveElementInArray(o,e,t,i),o=o.map((e,t)=>({id:e.id,position:t})),n.patch({data:o,reason:r}).then(()=>o)}static basename(e,t){let i=s(e);return t&&i.ext.startsWith(t)?i.name:i.base.split("?")[0]}static idToBinary(e){let t="",i=parseInt(e.slice(0,-10))||0,s=parseInt(e.slice(-10));for(;s>0||i>0;)t=String(1&s)+t,s=Math.floor(s/2),i>0&&(s+=i%2*5e9,i=Math.floor(i/2));return t}static binaryToID(e){let t="";for(;e.length>50;){const i=parseInt(e.slice(0,-32),2),s=parseInt((i%10).toString(2)+e.slice(-32),2);t=(s%10).toString()+t,e=Math.floor(i/10).toString(2)+Math.floor(s/10).toString(2).padStart(32,"0")}for(e=parseInt(e,2);e>0;)t=(e%10).toString()+t,e=Math.floor(e/10);return t}static removeMentions(e){return e.replace(/@/g,"@​")}static cleanContent(e,t){return e=e.replace(/<@!?[0-9]+>/g,e=>{const i=e.replace(/<|!|>|@/g,"");if("dm"===t.channel.type){const s=t.client.users.cache.get(i);return s?`@${s.username}`:e}const s=t.channel.guild.members.cache.get(i);if(s)return`@${s.displayName}`;{const s=t.client.users.cache.get(i);return s?`@${s.username}`:e}}).replace(/<#[0-9]+>/g,e=>{const i=t.client.channels.cache.get(e.replace(/<|#|>/g,""));return i?`#${i.name}`:e}).replace(/<@&[0-9]+>/g,e=>{if("dm"===t.channel.type)return e;const i=t.guild.roles.cache.get(e.replace(/<|@|>|&/g,""));return i?`@${i.name}`:e}),"everyone"===t.client.options.disableMentions&&(e=e.replace(/@([^<>@ ]*)/gmus,(e,t)=>t.match(/^[&!]?\d+$/)?`@${t}`:`@​${t}`)),"all"===t.client.options.disableMentions?Util.removeMentions(e):e}static cleanCodeBlockContent(e){return e.replace(/```/g,"`​``")}static delayFor(e){return new Promise(t=>{setTimeout(t,e)})}}e.exports=Util},function(e,t,i){"use strict";const s=i(4);e.exports=class Base{constructor(e){Object.defineProperty(this,"client",{value:e})}_clone(){return Object.assign(Object.create(this),this)}_patch(e){return e}_update(e){const t=this._clone();return this._patch(e),t}toJSON(...e){return s.flatten(this,...e)}valueOf(){return this.id}}},function(e,t,i){"use strict";const s=i(2);let n;e.exports=class BaseManager{constructor(e,t,r,o=s,...a){if(n||(n=i(23)),Object.defineProperty(this,"holds",{value:n.get(r.name)||r}),Object.defineProperty(this,"client",{value:e}),this.cacheType=o,this.cache=new o(...a),t)for(const e of t)this.add(e)}add(e,t=!0,{id:i,extras:s=[]}={}){const n=this.cache.get(i||e.id);if(n&&n._patch&&t&&n._patch(e),n)return n;const r=this.holds?new this.holds(this.client,e,...s):e;return t&&this.cache.set(i||r.id,r),r}resolve(e){return e instanceof this.holds?e:"string"==typeof e&&this.cache.get(e)||null}resolveID(e){return e instanceof this.holds?e.id:"string"==typeof e?e:null}valueOf(){return this.cache}}},function(e,t,i){"use strict";const s=i(4);let n=0;e.exports=class SnowflakeUtil{constructor(){throw new Error(`The ${this.constructor.name} class may not be instantiated.`)}static generate(e=Date.now()){if(e instanceof Date&&(e=e.getTime()),"number"!=typeof e||isNaN(e))throw new TypeError(`"timestamp" argument must be a number (received ${isNaN(e)?"NaN":typeof e})`);n>=4095&&(n=0);const t=`${(e-14200704e5).toString(2).padStart(42,"0")}0000100000${(n++).toString(2).padStart(12,"0")}`;return s.binaryToID(t)}static deconstruct(e){const t=s.idToBinary(e).toString(2).padStart(64,"0"),i={timestamp:parseInt(t.substring(0,42),2)+14200704e5,workerID:parseInt(t.substring(42,47),2),processID:parseInt(t.substring(47,52),2),increment:parseInt(t.substring(52,64),2),binary:t};return Object.defineProperty(i,"date",{get:function(){return new Date(this.timestamp)},enumerable:!0}),i}}},function(e,t,i){"use strict";const s=i(11);class Permissions extends s{any(e,t=!0){return t&&super.has(this.constructor.FLAGS.ADMINISTRATOR)||super.any(e)}has(e,t=!0){return t&&super.has(this.constructor.FLAGS.ADMINISTRATOR)||super.has(e)}}Permissions.FLAGS={CREATE_INSTANT_INVITE:1,KICK_MEMBERS:2,BAN_MEMBERS:4,ADMINISTRATOR:8,MANAGE_CHANNELS:16,MANAGE_GUILD:32,ADD_REACTIONS:64,VIEW_AUDIT_LOG:128,PRIORITY_SPEAKER:256,STREAM:512,VIEW_CHANNEL:1024,SEND_MESSAGES:2048,SEND_TTS_MESSAGES:4096,MANAGE_MESSAGES:8192,EMBED_LINKS:16384,ATTACH_FILES:32768,READ_MESSAGE_HISTORY:65536,MENTION_EVERYONE:1<<17,USE_EXTERNAL_EMOJIS:1<<18,VIEW_GUILD_INSIGHTS:1<<19,CONNECT:1<<20,SPEAK:1<<21,MUTE_MEMBERS:1<<22,DEAFEN_MEMBERS:1<<23,MOVE_MEMBERS:1<<24,USE_VAD:1<<25,CHANGE_NICKNAME:1<<26,MANAGE_NICKNAMES:1<<27,MANAGE_ROLES:1<<28,MANAGE_WEBHOOKS:1<<29,MANAGE_EMOJIS:1<<30},Permissions.ALL=Object.values(Permissions.FLAGS).reduce((e,t)=>e|t,0),Permissions.DEFAULT=104324673,e.exports=Permissions},function(e,t,i){"use strict";const s=i(35),n=i(35),r=i(119),o=i(36),{Error:a,TypeError:c}=i(3),{browser:l}=i(0),h=i(4);class DataResolver{constructor(){throw new Error(`The ${this.constructor.name} class may not be instantiated.`)}static resolveInviteCode(e){const t=/discord(?:app\.com\/invite|\.gg(?:\/invite)?)\/([\w-]{2,255})/i.exec(e);return t&&t[1]?t[1]:e}static async resolveImage(e){if(!e)return null;if("string"==typeof e&&e.startsWith("data:"))return e;const t=await this.resolveFileAsBuffer(e);return DataResolver.resolveBase64(t)}static resolveBase64(e){return Buffer.isBuffer(e)?`data:image/jpg;base64,${e.toString("base64")}`:e}static async resolveFile(e){if(!l&&Buffer.isBuffer(e))return e;if(l&&e instanceof ArrayBuffer)return h.convertToBuffer(e);if(e instanceof r.Readable)return e;if("string"==typeof e){if(/^https?:\/\//.test(e)){const t=await o(e);return l?t.blob():t.body}if(!l)return new Promise((t,i)=>{const r=n.resolve(e);s.stat(r,(e,n)=>e?i(e):n.isFile()?t(s.createReadStream(r)):i(new a("FILE_NOT_FOUND",r)))})}throw new c("REQ_RESOURCE_TYPE")}static async resolveFileAsBuffer(e){const t=await this.resolveFile(e);if(Buffer.isBuffer(t))return t;const i=[];for await(const e of t)i.push(e);return Buffer.concat(i)}}e.exports=DataResolver},function(e,t,i){"use strict";const s=i(5),{Presence:n}=i(13),r=i(19),o=i(27),a=i(33),{Error:c}=i(3),l=i(72),h=i(8);class GuildMember extends s{constructor(e,t,i){super(e),this.guild=i,t.user&&(this.user=e.users.add(t.user,!0)),this.joinedTimestamp=null,this.lastMessageID=null,this.lastMessageChannelID=null,this.premiumSinceTimestamp=null,this.deleted=!1,this._roles=[],t&&this._patch(t)}_patch(e){void 0!==e.nick&&(this.nickname=e.nick),e.joined_at&&(this.joinedTimestamp=new Date(e.joined_at).getTime()),e.premium_since&&(this.premiumSinceTimestamp=new Date(e.premium_since).getTime()),e.user&&(this.user=this.guild.client.users.add(e.user)),e.roles&&(this._roles=e.roles)}_clone(){const e=super._clone();return e._roles=this._roles.slice(),e}get partial(){return!this.joinedTimestamp}get roles(){return new l(this)}get lastMessage(){const e=this.guild.channels.cache.get(this.lastMessageChannelID);return e&&e.messages.cache.get(this.lastMessageID)||null}get voice(){return this.guild.voiceStates.cache.get(this.id)||new o(this.guild,{user_id:this.id})}get joinedAt(){return this.joinedTimestamp?new Date(this.joinedTimestamp):null}get premiumSince(){return this.premiumSinceTimestamp?new Date(this.premiumSinceTimestamp):null}get presence(){return this.guild.presences.cache.get(this.id)||new n(this.client,{user:{id:this.id},guild:this.guild})}get displayColor(){const e=this.roles.color;return e&&e.color||0}get displayHexColor(){const e=this.roles.color;return e&&e.hexColor||"#000000"}get id(){return this.user.id}get displayName(){return this.nickname||this.user.username}get permissions(){return this.user.id===this.guild.ownerID?new h(h.ALL).freeze():new h(this.roles.cache.map(e=>e.permissions)).freeze()}get manageable(){if(this.user.id===this.guild.ownerID)return!1;if(this.user.id===this.client.user.id)return!1;if(this.client.user.id===this.guild.ownerID)return!0;if(!this.guild.me)throw new c("GUILD_UNCACHED_ME");return this.guild.me.roles.highest.comparePositionTo(this.roles.highest)>0}get kickable(){return this.manageable&&this.guild.me.permissions.has(h.FLAGS.KICK_MEMBERS)}get bannable(){return this.manageable&&this.guild.me.permissions.has(h.FLAGS.BAN_MEMBERS)}permissionsIn(e){if(!(e=this.guild.channels.resolve(e)))throw new c("GUILD_CHANNEL_RESOLVE");return e.memberPermissions(this)}hasPermission(e,{checkAdmin:t=!0,checkOwner:i=!0}={}){return!(!i||this.user.id!==this.guild.ownerID)||this.roles.cache.some(i=>i.permissions.has(e,t))}async edit(e,t){if(e.channel){if(e.channel=this.guild.channels.resolve(e.channel),!e.channel||"voice"!==e.channel.type)throw new c("GUILD_VOICE_CHANNEL_RESOLVE");e.channel_id=e.channel.id,e.channel=void 0}else null===e.channel&&(e.channel_id=null,e.channel=void 0);e.roles&&(e.roles=e.roles.map(e=>e instanceof r?e.id:e));let i=this.client.api.guilds(this.guild.id);if(this.user.id===this.client.user.id){const t=Object.keys(e);i=1===t.length&&"nick"===t[0]?i.members("@me").nick:i.members(this.id)}else i=i.members(this.id);await i.patch({data:e,reason:t});const s=this._clone();return e.user=this.user,s._patch(e),s}setNickname(e,t){return this.edit({nick:e},t)}createDM(){return this.user.createDM()}deleteDM(){return this.user.deleteDM()}kick(e){return this.client.api.guilds(this.guild.id).members(this.user.id).delete({reason:e}).then(()=>this)}ban(e){return this.guild.members.ban(this,e)}fetch(){return this.guild.members.fetch(this.id,!0)}toString(){return`<@${this.nickname?"!":""}${this.user.id}>`}toJSON(){return super.toJSON({guild:"guildID",user:"userID",displayName:!0,speaking:!1,lastMessage:!1,lastMessageID:!1,roles:!0})}send(){}}a.applyToClass(GuildMember),e.exports=GuildMember},function(e,t,i){"use strict";const{RangeError:s}=i(3);class BitField{constructor(e){this.bitfield=this.constructor.resolve(e)}any(e){return 0!=(this.bitfield&this.constructor.resolve(e))}equals(e){return this.bitfield===this.constructor.resolve(e)}has(e){return Array.isArray(e)?e.every(e=>this.has(e)):(e=this.constructor.resolve(e),(this.bitfield&e)===e)}missing(e,...t){return Array.isArray(e)||(e=new this.constructor(e).toArray(!1)),e.filter(e=>!this.has(e,...t))}freeze(){return Object.freeze(this)}add(...e){let t=0;for(const i of e)t|=this.constructor.resolve(i);return Object.isFrozen(this)?new this.constructor(this.bitfield|t):(this.bitfield|=t,this)}remove(...e){let t=0;for(const i of e)t|=this.constructor.resolve(i);return Object.isFrozen(this)?new this.constructor(this.bitfield&~t):(this.bitfield&=~t,this)}serialize(...e){const t={};for(const[i,s]of Object.entries(this.constructor.FLAGS))t[i]=this.has(s,...e);return t}toArray(...e){return Object.keys(this.constructor.FLAGS).filter(t=>this.has(t,...e))}toJSON(){return this.bitfield}valueOf(){return this.bitfield}*[Symbol.iterator](){yield*this.toArray()}static resolve(e=0){if("number"==typeof e&&e>=0)return e;if(e instanceof BitField)return e.bitfield;if(Array.isArray(e))return e.map(e=>this.resolve(e)).reduce((e,t)=>e|t,0);if("string"==typeof e&&void 0!==this.FLAGS[e])return this.FLAGS[e];throw new s("BITFIELD_INVALID")}}BitField.FLAGS={},e.exports=BitField},function(e,t,i){"use strict";const s=i(30),n=i(16),{WebhookTypes:r}=i(0),o=i(9),a=i(7);class Webhook{constructor(e,t){Object.defineProperty(this,"client",{value:e}),t&&this._patch(t)}_patch(e){this.name=e.name,Object.defineProperty(this,"token",{value:e.token||null,writable:!0,configurable:!0}),this.avatar=e.avatar,this.id=e.id,this.type=r[e.type],this.guildID=e.guild_id,this.channelID=e.channel_id,e.user?this.owner=this.client.users?this.client.users.cache.get(e.user.id):e.user:this.owner=null}async send(e,t){let i;if(e instanceof s)i=e.resolveData();else if(i=s.create(this,e,t).resolveData(),Array.isArray(i.data.content))return Promise.all(i.split().map(this.send.bind(this)));const{data:n,files:r}=await i.resolveFiles();return this.client.api.webhooks(this.id,this.token).post({data:n,files:r,query:{wait:!0},auth:!1}).then(e=>{const t=this.client.channels?this.client.channels.cache.get(e.channel_id):void 0;return t?t.messages.add(e,!1):e})}sendSlackMessage(e){return this.client.api.webhooks(this.id,this.token).slack.post({query:{wait:!0},auth:!1,data:e}).then(e=>"ok"===e.toString())}async edit({name:e=this.name,avatar:t,channel:i},s){t&&"string"==typeof t&&!t.startsWith("data:")&&(t=await o.resolveImage(t)),i&&(i=i instanceof n?i.id:i);const r=await this.client.api.webhooks(this.id,i?void 0:this.token).patch({data:{name:e,avatar:t,channel_id:i},reason:s});return this.name=r.name,this.avatar=r.avatar,this.channelID=r.channel_id,this}delete(e){return this.client.api.webhooks(this.id,this.token).delete({reason:e})}get createdTimestamp(){return a.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}get url(){return this.client.options.http.api+this.client.api.webhooks(this.id,this.token)}avatarURL({format:e,size:t}={}){return this.avatar?this.client.rest.cdn.Avatar(this.id,this.avatar,e,t):null}static applyToClass(e){for(const t of["send","sendSlackMessage","edit","delete","createdTimestamp","createdAt","url"])Object.defineProperty(e.prototype,t,Object.getOwnPropertyDescriptor(Webhook.prototype,t))}}e.exports=Webhook},function(e,t,i){"use strict";const s=i(29),n=i(70),{ActivityTypes:r}=i(0),o=i(4);class Activity{constructor(e,t){Object.defineProperty(this,"presence",{value:e}),this.name=t.name,this.type=r[t.type],this.url=t.url||null,this.details=t.details||null,this.state=t.state||null,this.applicationID=t.application_id||null,this.timestamps=t.timestamps?{start:t.timestamps.start?new Date(Number(t.timestamps.start)):null,end:t.timestamps.end?new Date(Number(t.timestamps.end)):null}:null,this.party=t.party||null,this.assets=t.assets?new RichPresenceAssets(this,t.assets):null,this.syncID=t.sync_id,this.flags=new n(t.flags).freeze(),this.emoji=t.emoji?new s(e.client,t.emoji):null,this.createdTimestamp=new Date(t.created_at).getTime()}equals(e){return this===e||e&&this.name===e.name&&this.type===e.type&&this.url===e.url}get createdAt(){return new Date(this.createdTimestamp)}toString(){return this.name}_clone(){return Object.assign(Object.create(this),this)}}class RichPresenceAssets{constructor(e,t){Object.defineProperty(this,"activity",{value:e}),this.largeText=t.large_text||null,this.smallText=t.small_text||null,this.largeImage=t.large_image||null,this.smallImage=t.small_image||null}smallImageURL({format:e,size:t}={}){return this.smallImage?this.activity.presence.client.rest.cdn.AppAsset(this.activity.applicationID,this.smallImage,{format:e,size:t}):null}largeImageURL({format:e,size:t}={}){return this.largeImage?/^spotify:/.test(this.largeImage)?`https://i.scdn.co/image/${this.largeImage.slice(8)}`:/^twitch:/.test(this.largeImage)?`https://static-cdn.jtvnw.net/previews-ttv/live_user_${this.largeImage.slice(7)}.png`:this.activity.presence.client.rest.cdn.AppAsset(this.activity.applicationID,this.largeImage,{format:e,size:t}):null}}t.Presence=class Presence{constructor(e,t={}){Object.defineProperty(this,"client",{value:e}),this.userID=t.user.id,this.guild=t.guild||null,this.patch(t)}get user(){return this.client.users.cache.get(this.userID)||null}get member(){return this.guild.members.cache.get(this.userID)||null}patch(e){return this.status=e.status||this.status||"offline",e.activities?this.activities=e.activities.map(e=>new Activity(this,e)):e.activity||e.game?this.activities=[new Activity(this,e.game||e.activity)]:this.activities=[],this.clientStatus=e.client_status||null,this}_clone(){const e=Object.assign(Object.create(this),this);return this.activities&&(e.activities=this.activities.map(e=>e._clone())),e}equals(e){return this===e||e&&this.status===e.status&&this.activities.length===e.activities.length&&this.activities.every((t,i)=>t.equals(e.activities[i]))&&this.clientStatus.web===e.clientStatus.web&&this.clientStatus.mobile===e.clientStatus.mobile&&this.clientStatus.desktop===e.clientStatus.desktop}toJSON(){return o.flatten(this)}},t.Activity=Activity,t.RichPresenceAssets=RichPresenceAssets},function(e,t){var i,s,n=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:r}catch(e){i=r}try{s="function"==typeof clearTimeout?clearTimeout:o}catch(e){s=o}}();var c,l=[],h=!1,u=-1;function d(){h&&c&&(h=!1,c.length?l=c.concat(l):u=-1,l.length&&p())}function p(){if(!h){var e=a(d);h=!0;for(var t=l.length;t;){for(c=l,l=[];++u<t;)c&&c[u].run();u=-1,t=l.length}c=null,h=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===o||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new f(e,t)),1!==l.length||h||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,i){"use strict";var s,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};s=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var c=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function h(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function u(e,t,i,s){var n,r,o,a;if(l(i),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),r=e._events),o=r[t]),void 0===o)o=r[t]=i,++e._eventsCount;else if("function"==typeof o?o=r[t]=s?[i,o]:[o,i]:s?o.unshift(i):o.push(i),(n=h(e))>0&&o.length>n&&!o.warned){o.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=o.length,a=c,console&&console.warn&&console.warn(a)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function p(e,t,i){var s={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},n=d.bind(s);return n.listener=i,s.wrapFn=n,n}function f(e,t,i){var s=e._events;if(void 0===s)return[];var n=s[t];return void 0===n?[]:"function"==typeof n?i?[n.listener||n]:[n]:i?function(e){for(var t=new Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(n):g(n,n.length)}function m(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function g(e,t){for(var i=new Array(t),s=0;s<t;++s)i[s]=e[s];return i}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return h(this)},a.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var s="error"===e,n=this._events;if(void 0!==n)s=s&&void 0===n.error;else if(!s)return!1;if(s){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=n[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else{var l=c.length,h=g(c,l);for(i=0;i<l;++i)r(h[i],this,t)}return!0},a.prototype.addListener=function(e,t){return u(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return u(this,e,t,!0)},a.prototype.once=function(e,t){return l(t),this.on(e,p(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,p(this,e,t)),this},a.prototype.removeListener=function(e,t){var i,s,n,r,o;if(l(t),void 0===(s=this._events))return this;if(void 0===(i=s[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(n=-1,r=i.length-1;r>=0;r--)if(i[r]===t||i[r].listener===t){o=i[r].listener,n=r;break}if(n<0)return this;0===n?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,n),1===i.length&&(s[e]=i[0]),void 0!==s.removeListener&&this.emit("removeListener",e,o||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,i,s;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0===arguments.length){var n,r=Object.keys(i);for(s=0;s<r.length;++s)"removeListener"!==(n=r[s])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(s=t.length-1;s>=0;s--)this.removeListener(e,t[s]);return this},a.prototype.listeners=function(e){return f(this,e,!0)},a.prototype.rawListeners=function(e){return f(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},a.prototype.listenerCount=m,a.prototype.eventNames=function(){return this._eventsCount>0?s(this._events):[]}},function(e,t,i){"use strict";const s=i(5),{ChannelTypes:n}=i(0),r=i(7);e.exports=class Channel extends s{constructor(e,t){super(e);const i=Object.keys(n)[t.type];this.type=i?i.toLowerCase():"unknown",this.deleted=!1,t&&this._patch(t)}_patch(e){this.id=e.id}get createdTimestamp(){return r.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}toString(){return`<#${this.id}>`}delete(){return this.client.api.channels(this.id).delete().then(()=>this)}fetch(){return this.client.channels.fetch(this.id,!0)}static create(e,t,s){const r=i(23);let o;if(t.guild_id||s){if(s=s||e.guilds.cache.get(t.guild_id)){switch(t.type){case n.TEXT:o=new(r.get("TextChannel"))(s,t);break;case n.VOICE:o=new(r.get("VoiceChannel"))(s,t);break;case n.CATEGORY:o=new(r.get("CategoryChannel"))(s,t);break;case n.NEWS:o=new(r.get("NewsChannel"))(s,t);break;case n.STORE:o=new(r.get("StoreChannel"))(s,t);break}o&&s.channels.cache.set(o.id,o)}}else if(t.recipients&&t.type!==n.GROUP||t.type===n.DM){o=new(r.get("DMChannel"))(e,t)}else if(t.type===n.GROUP){o=new(i(136))(e,t)}return o}toJSON(...e){return super.toJSON({createdTimestamp:!0},...e)}}},function(e,t,i){"use strict";const s=i(16),n=i(18),r=i(42),o=i(19),{Error:a,TypeError:c}=i(3),l=i(2),h=i(8),u=i(4);e.exports=class GuildChannel extends s{constructor(e,t){super(e.client,t),this.guild=e}_patch(e){if(super._patch(e),this.name=e.name,this.rawPosition=e.position,this.parentID=e.parent_id,this.permissionOverwrites=new l,e.permission_overwrites)for(const t of e.permission_overwrites)this.permissionOverwrites.set(t.id,new r(this,t))}get parent(){return this.guild.channels.cache.get(this.parentID)||null}get permissionsLocked(){return this.parent?this.permissionOverwrites.size===this.parent.permissionOverwrites.size&&this.permissionOverwrites.every((e,t)=>{const i=this.parent.permissionOverwrites.get(t);return void 0!==i&&i.deny.bitfield===e.deny.bitfield&&i.allow.bitfield===e.allow.bitfield}):null}get position(){const e=this.guild._sortedChannels(this);return e.array().indexOf(e.get(this.id))}permissionsFor(e){const t=this.guild.members.resolve(e);if(t)return this.memberPermissions(t);const i=this.guild.roles.resolve(e);return i?this.rolePermissions(i):null}overwritesFor(e,t=!1,i=null){if(t||(e=this.guild.members.resolve(e)),!e)return[];i=i||e.roles.cache;const s=[];let n,r;for(const t of this.permissionOverwrites.values())t.id===this.guild.id?r=t:i.has(t.id)?s.push(t):t.id===e.id&&(n=t);return{everyone:r,roles:s,member:n}}memberPermissions(e){if(e.id===this.guild.ownerID)return new h(h.ALL).freeze();const t=e.roles.cache,i=new h(t.map(e=>e.permissions));if(i.has(h.FLAGS.ADMINISTRATOR))return new h(h.ALL).freeze();const s=this.overwritesFor(e,!0,t);return i.remove(s.everyone?s.everyone.deny:0).add(s.everyone?s.everyone.allow:0).remove(s.roles.length>0?s.roles.map(e=>e.deny):0).add(s.roles.length>0?s.roles.map(e=>e.allow):0).remove(s.member?s.member.deny:0).add(s.member?s.member.allow:0).freeze()}rolePermissions(e){if(e.permissions.has(h.FLAGS.ADMINISTRATOR))return new h(h.ALL).freeze();const t=this.permissionOverwrites.get(this.guild.id),i=this.permissionOverwrites.get(e.id);return e.permissions.remove(t?t.deny:0).add(t?t.allow:0).remove(i?i.deny:0).add(i?i.allow:0).freeze()}overwritePermissions(e,t){return Array.isArray(e)||e instanceof l?this.edit({permissionOverwrites:e,reason:t}).then(()=>this):Promise.reject(new c("INVALID_TYPE","overwrites","Array or Collection of Permission Overwrites",!0))}updateOverwrite(e,t,i){if(!(e=this.guild.roles.resolve(e)||this.client.users.resolve(e)))return Promise.reject(new c("INVALID_TYPE","parameter","User nor a Role",!0));const s=this.permissionOverwrites.get(e.id);return s?s.update(t,i).then(()=>this):this.createOverwrite(e,t,i)}createOverwrite(e,t,i){if(!(e=this.guild.roles.resolve(e)||this.client.users.resolve(e)))return Promise.reject(new c("INVALID_TYPE","parameter","User nor a Role",!0));const s=e instanceof o?"role":"member",{allow:n,deny:a}=r.resolveOverwriteOptions(t);return this.client.api.channels(this.id).permissions[e.id].put({data:{id:e.id,type:s,allow:n.bitfield,deny:a.bitfield},reason:i}).then(()=>this)}lockPermissions(){if(!this.parent)return Promise.reject(new a("GUILD_CHANNEL_ORPHAN"));const e=this.parent.permissionOverwrites.map(e=>e.toJSON());return this.edit({permissionOverwrites:e})}get members(){const e=new l;for(const t of this.guild.members.cache.values())this.permissionsFor(t).has("VIEW_CHANNEL",!1)&&e.set(t.id,t);return e}async edit(e,t){void 0!==e.position&&await u.setPosition(this,e.position,!1,this.guild._sortedChannels(this),this.client.api.guilds(this.guild.id).channels,t).then(e=>{this.client.actions.GuildChannelsPositionUpdate.handle({guild_id:this.guild.id,channels:e})});const i=e.permissionOverwrites&&e.permissionOverwrites.map(e=>r.resolve(e,this.guild)),s=await this.client.api.channels(this.id).patch({data:{name:(e.name||this.name).trim(),topic:e.topic,nsfw:e.nsfw,bitrate:e.bitrate||this.bitrate,user_limit:void 0!==e.userLimit?e.userLimit:this.userLimit,parent_id:e.parentID,lock_permissions:e.lockPermissions,rate_limit_per_user:e.rateLimitPerUser,permission_overwrites:i},reason:t}),n=this._clone();return n._patch(s),n}setName(e,t){return this.edit({name:e},t)}setParent(e,{lockPermissions:t=!0,reason:i}={}){return this.edit({parentID:null!==e?e.hasOwnProperty("id")?e.id:e:null,lockPermissions:t},i)}setTopic(e,t){return this.edit({topic:e},t)}setPosition(e,{relative:t,reason:i}={}){return u.setPosition(this,e,t,this.guild._sortedChannels(this),this.client.api.guilds(this.guild.id).channels,i).then(e=>(this.client.actions.GuildChannelsPositionUpdate.handle({guild_id:this.guild.id,channels:e}),this))}createInvite({temporary:e=!1,maxAge:t=86400,maxUses:i=0,unique:s,reason:r}={}){return this.client.api.channels(this.id).invites.post({data:{temporary:e,max_age:t,max_uses:i,unique:s},reason:r}).then(e=>new n(this.client,e))}async fetchInvites(){const e=await this.client.api.channels(this.id).invites.get(),t=new l;for(const i of e){const e=new n(this.client,i);t.set(e.code,e)}return t}clone(e={}){return u.mergeDefault({name:this.name,permissionOverwrites:this.permissionOverwrites,topic:this.topic,type:this.type,nsfw:this.nsfw,parent:this.parent,bitrate:this.bitrate,userLimit:this.userLimit,rateLimitPerUser:this.rateLimitPerUser,reason:null},e),this.guild.channels.create(e.name,e)}equals(e){let t=e&&this.id===e.id&&this.type===e.type&&this.topic===e.topic&&this.position===e.position&&this.name===e.name;return t&&(t=this.permissionOverwrites&&e.permissionOverwrites?this.permissionOverwrites.equals(e.permissionOverwrites):!this.permissionOverwrites&&!e.permissionOverwrites),t}get deletable(){return this.permissionsFor(this.client.user).has(h.FLAGS.MANAGE_CHANNELS,!1)}get manageable(){if(this.client.user.id===this.guild.ownerID)return!0;if("voice"===this.type){if(!this.permissionsFor(this.client.user).has(h.FLAGS.CONNECT,!1))return!1}else if(!this.viewable)return!1;return this.permissionsFor(this.client.user).has(h.FLAGS.MANAGE_CHANNELS,!1)}get viewable(){if(this.client.user.id===this.guild.ownerID)return!0;const e=this.permissionsFor(this.client.user);return!!e&&e.has(h.FLAGS.VIEW_CHANNEL,!1)}delete(e){return this.client.api.channels(this.id).delete({reason:e}).then(()=>this)}}},function(e,t,i){"use strict";const s=i(5),{Endpoints:n}=i(0),r=i(8);e.exports=class Invite extends s{constructor(e,t){super(e),this._patch(t)}_patch(e){this.guild=e.guild?this.client.guilds.add(e.guild,!1):null,this.code=e.code,this.presenceCount="approximate_presence_count"in e?e.approximate_presence_count:null,this.memberCount="approximate_member_count"in e?e.approximate_member_count:null,this.temporary="temporary"in e?e.temporary:null,this.maxAge="max_age"in e?e.max_age:null,this.uses="uses"in e?e.uses:null,this.maxUses="max_uses"in e?e.max_uses:null,this.inviter=e.inviter?this.client.users.add(e.inviter):null,this.targetUser=e.target_user?this.client.users.add(e.target_user):null,this.targetUserType="number"==typeof e.target_user_type?e.target_user_type:null,this.channel=this.client.channels.add(e.channel,this.guild,!1),this.createdTimestamp="created_at"in e?new Date(e.created_at).getTime():null}get createdAt(){return this.createdTimestamp?new Date(this.createdTimestamp):null}get deletable(){const e=this.guild;if(!e||!this.client.guilds.cache.has(e.id))return!1;if(!e.me)throw new Error("GUILD_UNCACHED_ME");return this.channel.permissionsFor(this.client.user).has(r.FLAGS.MANAGE_CHANNELS,!1)||e.me.permissions.has(r.FLAGS.MANAGE_GUILD)}get expiresTimestamp(){return this.createdTimestamp&&this.maxAge?this.createdTimestamp+1e3*this.maxAge:null}get expiresAt(){const{expiresTimestamp:e}=this;return e?new Date(e):null}get url(){return n.invite(this.client.options.http.invite,this.code)}delete(e){return this.client.api.invites[this.code].delete({reason:e}).then(()=>this)}toString(){return this.url}toJSON(){return super.toJSON({url:!0,expiresTimestamp:!0,presenceCount:!1,memberCount:!1,uses:!1,channel:"channelID",inviter:"inviterID",guild:"guildID"})}valueOf(){return this.code}}},function(e,t,i){"use strict";const s=i(5),{Error:n,TypeError:r}=i(3),o=i(8),a=i(7),c=i(4);e.exports=class Role extends s{constructor(e,t,i){super(e),this.guild=i,t&&this._patch(t)}_patch(e){this.id=e.id,this.name=e.name,this.color=e.color,this.hoist=e.hoist,this.rawPosition=e.position,this.permissions=new o(e.permissions).freeze(),this.managed=e.managed,this.mentionable=e.mentionable,this.deleted=!1}get createdTimestamp(){return a.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}get hexColor(){return`#${this.color.toString(16).padStart(6,"0")}`}get members(){return this.guild.members.cache.filter(e=>e.roles.cache.has(this.id))}get editable(){if(this.managed)return!1;const e=this.guild.member(this.client.user);return!!e.permissions.has(o.FLAGS.MANAGE_ROLES)&&e.roles.highest.comparePositionTo(this)>0}get position(){const e=this.guild._sortedRoles();return e.array().indexOf(e.get(this.id))}comparePositionTo(e){if(!(e=this.guild.roles.resolve(e)))throw new r("INVALID_TYPE","role","Role nor a Snowflake");return this.constructor.comparePositions(this,e)}async edit(e,t){return void 0!==e.permissions?e.permissions=o.resolve(e.permissions):e.permissions=this.permissions.bitfield,void 0!==e.position&&await c.setPosition(this,e.position,!1,this.guild._sortedRoles(),this.client.api.guilds(this.guild.id).roles,t).then(e=>{this.client.actions.GuildRolesPositionUpdate.handle({guild_id:this.guild.id,roles:e})}),this.client.api.guilds[this.guild.id].roles[this.id].patch({data:{name:e.name||this.name,color:null!==e.color?c.resolveColor(e.color||this.color):null,hoist:void 0!==e.hoist?e.hoist:this.hoist,permissions:e.permissions,mentionable:void 0!==e.mentionable?e.mentionable:this.mentionable},reason:t}).then(e=>{const t=this._clone();return t._patch(e),t})}permissionsIn(e){if(!(e=this.guild.channels.resolve(e)))throw new n("GUILD_CHANNEL_RESOLVE");return e.rolePermissions(this)}setName(e,t){return this.edit({name:e},t)}setColor(e,t){return this.edit({color:e},t)}setHoist(e,t){return this.edit({hoist:e},t)}setPermissions(e,t){return this.edit({permissions:e},t)}setMentionable(e,t){return this.edit({mentionable:e},t)}setPosition(e,{relative:t,reason:i}={}){return c.setPosition(this,e,t,this.guild._sortedRoles(),this.client.api.guilds(this.guild.id).roles,i).then(e=>(this.client.actions.GuildRolesPositionUpdate.handle({guild_id:this.guild.id,roles:e}),this))}delete(e){return this.client.api.guilds[this.guild.id].roles[this.id].delete({reason:e}).then(()=>(this.client.actions.GuildRoleDelete.handle({guild_id:this.guild.id,role_id:this.id}),this))}equals(e){return e&&this.id===e.id&&this.name===e.name&&this.color===e.color&&this.hoist===e.hoist&&this.position===e.position&&this.permissions.bitfield===e.permissions.bitfield&&this.managed===e.managed}toString(){return this.id===this.guild.id?"@everyone":`<@&${this.id}>`}toJSON(){return super.toJSON({createdTimestamp:!0})}static comparePositions(e,t){return e.position===t.position?t.id-e.id:e.position-t.position}}},function(e,t,i){"use strict";var s=i(31),n=Object.keys||function(e){var t=[];for(var i in e)t.push(i);return t};e.exports=u;var r=Object.create(i(25));r.inherits=i(22);var o=i(64),a=i(46);r.inherits(u,o);for(var c=n(a.prototype),l=0;l<c.length;l++){var h=c[l];u.prototype[h]||(u.prototype[h]=a.prototype[h])}function u(e){if(!(this instanceof u))return new u(e);o.call(this,e),a.call(this,e),e&&!1===e.readable&&(this.readable=!1),e&&!1===e.writable&&(this.writable=!1),this.allowHalfOpen=!0,e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",d)}function d(){this.allowHalfOpen||this._writableState.ended||s.nextTick(p,this)}function p(e){e.end()}Object.defineProperty(u.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(u.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(e){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=e,this._writableState.destroyed=e)}}),u.prototype._destroy=function(e,t){this.push(null),this.end(),s.nextTick(t,e)}},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}}},function(e,t,i){"use strict";const s={GuildEmoji:i(24),DMChannel:i(39),TextChannel:i(41),VoiceChannel:i(79),CategoryChannel:i(80),NewsChannel:i(81),StoreChannel:i(82),GuildMember:i(10),Guild:i(53),Message:i(28),MessageReaction:i(51),Presence:i(13).Presence,ClientPresence:i(89),VoiceState:i(27),Role:i(19),User:i(26)};e.exports=class Structures{constructor(){throw new Error(`The ${this.constructor.name} class may not be instantiated.`)}static get(e){if("string"==typeof e)return s[e];throw new TypeError(`"structure" argument must be a string (received ${typeof e})`)}static extend(e,t){if(!s[e])throw new RangeError(`"${e}" is not a valid extensible structure.`);if("function"!=typeof t){throw new TypeError(`"extender" argument must be a function that returns the extended structure class/prototype ${`(received ${typeof t})`}.`)}const i=t(s[e]);if("function"!=typeof i){throw new TypeError(`The extender function must return the extended structure class/prototype ${`(received ${typeof i})`}.`)}if(!(i.prototype instanceof s[e])){const t=Object.getPrototypeOf(i),n=`${i.name||"unnamed"}${t.name?` extends ${t.name}`:""}`;throw new Error("The class/prototype returned from the extender function must extend the existing structure class/prototype"+` (received function ${n}; expected extension of ${s[e].name}).`)}return s[e]=i,i}}},function(e,t,i){"use strict";const s=i(40),{Error:n}=i(3),r=i(63),o=i(8);class GuildEmoji extends s{_clone(){const e=super._clone();return e._roles=this._roles.slice(),e}get deletable(){if(!this.guild.me)throw new n("GUILD_UNCACHED_ME");return!this.managed&&this.guild.me.hasPermission(o.FLAGS.MANAGE_EMOJIS)}get roles(){return new r(this)}fetchAuthor(){return this.managed?Promise.reject(new n("EMOJI_MANAGED")):this.guild.me?this.guild.me.permissions.has(o.FLAGS.MANAGE_EMOJIS)?this.client.api.guilds(this.guild.id).emojis(this.id).get().then(e=>this.client.users.add(e.user)):Promise.reject(new n("MISSING_MANAGE_EMOJIS_PERMISSION",this.guild)):Promise.reject(new n("GUILD_UNCACHED_ME"))}edit(e,t){const i=e.roles?e.roles.map(e=>e.id||e):void 0;return this.client.api.guilds(this.guild.id).emojis(this.id).patch({data:{name:e.name,roles:i},reason:t}).then(e=>{const t=this._clone();return t._patch(e),t})}setName(e,t){return this.edit({name:e},t)}delete(e){return this.client.api.guilds(this.guild.id).emojis(this.id).delete({reason:e}).then(()=>this)}equals(e){return e instanceof GuildEmoji?e.id===this.id&&e.name===this.name&&e.managed===this.managed&&e.requiresColons===this.requiresColons&&e.roles.cache.size===this.roles.cache.size&&e.roles.cache.every(e=>this.roles.cache.has(e.id)):e.id===this.id&&e.name===this.name&&e.roles.length===this.roles.cache.size&&e.roles.every(e=>this.roles.cache.has(e))}}e.exports=GuildEmoji},function(e,t){function i(e){return Object.prototype.toString.call(e)}t.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===i(e)},t.isBoolean=function(e){return"boolean"==typeof e},t.isNull=function(e){return null===e},t.isNullOrUndefined=function(e){return null==e},t.isNumber=function(e){return"number"==typeof e},t.isString=function(e){return"string"==typeof e},t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=function(e){return void 0===e},t.isRegExp=function(e){return"[object RegExp]"===i(e)},t.isObject=function(e){return"object"==typeof e&&null!==e},t.isDate=function(e){return"[object Date]"===i(e)},t.isError=function(e){return"[object Error]"===i(e)||e instanceof Error},t.isFunction=function(e){return"function"==typeof e},t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=Buffer.isBuffer},function(e,t,i){"use strict";const s=i(5),{Presence:n}=i(13),r=i(33),{Error:o}=i(3),a=i(7),c=i(78);class User extends s{constructor(e,t){super(e),this.id=t.id,this.bot=Boolean(t.bot),this._patch(t)}_patch(e){e.username&&(this.username=e.username),e.discriminator&&(this.discriminator=e.discriminator),void 0!==e.avatar&&(this.avatar=e.avatar),void 0!==e.bot&&(this.bot=Boolean(e.bot)),void 0!==e.system&&(this.system=Boolean(e.system)),e.locale&&(this.locale=e.locale),void 0!==e.public_flags&&(this.flags=new c(e.public_flags)),this.lastMessageID=null,this.lastMessageChannelID=null}get partial(){return"string"!=typeof this.username}get createdTimestamp(){return a.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}get lastMessage(){const e=this.client.channels.cache.get(this.lastMessageChannelID);return e&&e.messages.cache.get(this.lastMessageID)||null}get presence(){for(const e of this.client.guilds.cache.values())if(e.presences.cache.has(this.id))return e.presences.cache.get(this.id);return new n(this.client,{user:{id:this.id}})}avatarURL({format:e,size:t,dynamic:i}={}){return this.avatar?this.client.rest.cdn.Avatar(this.id,this.avatar,e,t,i):null}get defaultAvatarURL(){return this.client.rest.cdn.DefaultAvatar(this.discriminator%5)}displayAvatarURL(e){return this.avatarURL(e)||this.defaultAvatarURL}get tag(){return"string"==typeof this.username?`${this.username}#${this.discriminator}`:null}typingIn(e){return(e=this.client.channels.resolve(e))._typing.has(this.id)}typingSinceIn(e){return(e=this.client.channels.resolve(e))._typing.has(this.id)?new Date(e._typing.get(this.id).since):null}typingDurationIn(e){return(e=this.client.channels.resolve(e))._typing.has(this.id)?e._typing.get(this.id).elapsedTime:-1}get dmChannel(){return this.client.channels.cache.find(e=>"dm"===e.type&&e.recipient.id===this.id)||null}async createDM(){const{dmChannel:e}=this;if(e&&!e.partial)return e;const t=await this.client.api.users(this.client.user.id).channels.post({data:{recipient_id:this.id}});return this.client.actions.ChannelCreate.handle(t).channel}async deleteDM(){const{dmChannel:e}=this;if(!e)throw new o("USER_NO_DMCHANNEL");const t=await this.client.api.channels(e.id).delete();return this.client.actions.ChannelDelete.handle(t).channel}equals(e){return e&&this.id===e.id&&this.username===e.username&&this.discriminator===e.discriminator&&this.avatar===e.avatar}async fetchFlags(){if(this.flags)return this.flags;const e=await this.client.api.users(this.id).get();return this._patch(e),this.flags}fetch(){return this.client.users.fetch(this.id,!0)}toString(){return`<@${this.id}>`}toJSON(...e){const t=super.toJSON({createdTimestamp:!0,defaultAvatarURL:!0,tag:!0,lastMessage:!1,lastMessageID:!1},...e);return t.avatarURL=this.avatarURL(),t.displayAvatarURL=this.displayAvatarURL(),t}send(){}}r.applyToClass(User),e.exports=User},function(e,t,i){"use strict";const s=i(5),{Error:n,TypeError:r}=i(3),{browser:o}=i(0);e.exports=class VoiceState extends s{constructor(e,t){super(e.client),this.guild=e,this.id=t.user_id,this._patch(t)}_patch(e){return this.serverDeaf=e.deaf,this.serverMute=e.mute,this.selfDeaf=e.self_deaf,this.selfMute=e.self_mute,this.sessionID=e.session_id,this.streaming=e.self_stream||!1,this.channelID=e.channel_id,this}get member(){return this.guild.members.cache.get(this.id)||null}get channel(){return this.guild.channels.cache.get(this.channelID)||null}get connection(){return o||this.id!==this.client.user.id?null:this.client.voice.connections.get(this.guild.id)||null}get deaf(){return this.serverDeaf||this.selfDeaf}get mute(){return this.serverMute||this.selfMute}get speaking(){return this.channel&&this.channel.connection?Boolean(this.channel.connection._speaking.get(this.id)):null}setMute(e,t){return this.member?this.member.edit({mute:e},t):Promise.reject(new n("VOICE_STATE_UNCACHED_MEMBER"))}setDeaf(e,t){return this.member?this.member.edit({deaf:e},t):Promise.reject(new n("VOICE_STATE_UNCACHED_MEMBER"))}kick(e){return this.setChannel(null,e)}setChannel(e,t){return this.member?this.member.edit({channel:e},t):Promise.reject(new n("VOICE_STATE_UNCACHED_MEMBER"))}async setSelfMute(e){if(this.id!==this.client.user.id)throw new n("VOICE_STATE_NOT_OWN");if("boolean"!=typeof e)throw new r("VOICE_STATE_INVALID_TYPE","mute");return!!this.connection&&(this.selfMute=e,await this.connection.sendVoiceStateUpdate(),!0)}async setSelfDeaf(e){return this.id!==this.client.user.id?new n("VOICE_STATE_NOT_OWN"):"boolean"!=typeof e?new r("VOICE_STATE_INVALID_TYPE","deaf"):!!this.connection&&(this.selfDeaf=e,await this.connection.sendVoiceStateUpdate(),!0)}toJSON(){return super.toJSON({id:!0,serverDeaf:!0,serverMute:!0,selfDeaf:!0,selfMute:!0,sessionID:!0,channelID:"channel"})}}},function(e,t,i){"use strict";const s=i(30),n=i(5),r=i(50),o=i(43),a=i(44),c=i(75),l=i(76),{Error:h,TypeError:u}=i(3),d=i(132),p=i(2),{MessageTypes:f}=i(0),m=i(47),g=i(8),E=i(4);e.exports=class Message extends n{constructor(e,t,i){super(e),this.channel=i,this.deleted=!1,t&&this._patch(t)}_patch(e){if(this.id=e.id,this.type=f[e.type],this.content=e.content,this.author=e.author?this.client.users.add(e.author,!e.webhook_id):null,this.pinned=e.pinned,this.tts=e.tts,this.nonce=e.nonce,this.system=0!==e.type,this.embeds=(e.embeds||[]).map(e=>new a(e,!0)),this.attachments=new p,e.attachments)for(const t of e.attachments)this.attachments.set(t.id,new o(t.url,t.filename,t));if(this.createdTimestamp=new Date(e.timestamp).getTime(),this.editedTimestamp=e.edited_timestamp?new Date(e.edited_timestamp).getTime():null,this.reactions=new d(this),e.reactions&&e.reactions.length>0)for(const t of e.reactions)this.reactions.add(t);this.mentions=new c(this,e.mentions,e.mention_roles,e.mention_everyone,e.mention_channels),this.webhookID=e.webhook_id||null,this.application=e.application?new r(this.client,e.application):null,this.activity=e.activity?{partyID:e.activity.party_id,type:e.activity.type}:null,this._edits=[],this.member&&e.member?this.member._patch(e.member):e.member&&this.guild&&this.author&&this.guild.members.add(Object.assign(e.member,{user:this.author})),this.flags=new m(e.flags).freeze(),this.reference=e.message_reference?{channelID:e.message_reference.channel_id,guildID:e.message_reference.guild_id,messageID:e.message_reference.message_id}:null}get partial(){return"string"!=typeof this.content||!this.author}patch(e){const t=this._clone();if(this._edits.unshift(t),"edited_timestamp"in e&&(this.editedTimestamp=new Date(e.edited_timestamp).getTime()),"content"in e&&(this.content=e.content),"pinned"in e&&(this.pinned=e.pinned),"tts"in e&&(this.tts=e.tts),this.embeds="embeds"in e?e.embeds.map(e=>new a(e,!0)):this.embeds.slice(),"attachments"in e){this.attachments=new p;for(const t of e.attachments)this.attachments.set(t.id,new o(t.url,t.filename,t))}else this.attachments=new p(this.attachments);this.mentions=new c(this,"mentions"in e?e.mentions:this.mentions.users,"mention_roles"in e?e.mention_roles:this.mentions.roles,"mention_everyone"in e?e.mention_everyone:this.mentions.everyone,"mention_channels"in e?e.mention_channels:this.mentions.crosspostedChannels),this.flags=new m("flags"in e?e.flags:0).freeze()}get member(){return this.guild&&this.guild.member(this.author)||null}get createdAt(){return new Date(this.createdTimestamp)}get editedAt(){return this.editedTimestamp?new Date(this.editedTimestamp):null}get guild(){return this.channel.guild||null}get url(){return`https://discordapp.com/channels/${this.guild?this.guild.id:"@me"}/${this.channel.id}/${this.id}`}get cleanContent(){return null!=this.content?E.cleanContent(this.content,this):null}createReactionCollector(e,t={}){return new l(this,e,t)}awaitReactions(e,t={}){return new Promise((i,s)=>{this.createReactionCollector(e,t).once("end",(e,n)=>{t.errors&&t.errors.includes(n)?s(e):i(e)})})}get edits(){const e=this._edits.slice();return e.unshift(this),e}get editable(){return this.author.id===this.client.user.id}get deletable(){return!this.deleted&&(this.author.id===this.client.user.id||this.guild&&this.channel.permissionsFor(this.client.user).has(g.FLAGS.MANAGE_MESSAGES,!1))}get pinnable(){return"DEFAULT"===this.type&&(!this.guild||this.channel.permissionsFor(this.client.user).has(g.FLAGS.MANAGE_MESSAGES,!1))}edit(e,t){const{data:i}=e instanceof s?e.resolveData():s.create(this,e,t).resolveData();return this.client.api.channels[this.channel.id].messages[this.id].patch({data:i}).then(e=>{const t=this._clone();return t._patch(e),t})}pin(){return this.client.api.channels(this.channel.id).pins(this.id).put().then(()=>this)}unpin(){return this.client.api.channels(this.channel.id).pins(this.id).delete().then(()=>this)}react(e){if(!(e=this.client.emojis.resolveIdentifier(e)))throw new u("EMOJI_TYPE");return this.client.api.channels(this.channel.id).messages(this.id).reactions(e,"@me").put().then(()=>this.client.actions.MessageReactionAdd.handle({user:this.client.user,channel:this.channel,message:this,emoji:E.parseEmoji(e)}).reaction)}delete(e={}){if("object"!=typeof e)throw new u("INVALID_TYPE","options","object",!0);const{timeout:t=0,reason:i}=e;return t<=0?this.channel.messages.delete(this.id,i).then(()=>this):new Promise(e=>{this.client.setTimeout(()=>{e(this.delete({reason:i}))},t)})}reply(e,t){return this.channel.send(e instanceof s?e:s.transformOptions(e,t,{reply:this.member||this.author}))}fetch(){return this.channel.messages.fetch(this.id,!0)}fetchWebhook(){return this.webhookID?this.client.fetchWebhook(this.webhookID):Promise.reject(new h("WEBHOOK_MESSAGE"))}suppressEmbeds(e=!0){const t=new m(this.flags.bitfield);return e?t.add(m.FLAGS.SUPPRESS_EMBEDS):t.remove(m.FLAGS.SUPPRESS_EMBEDS),this.edit({flags:t})}equals(e,t){if(!e)return!1;if(!e.author&&!e.attachments)return this.id===e.id&&this.embeds.length===e.embeds.length;let i=this.id===e.id&&this.author.id===e.author.id&&this.content===e.content&&this.tts===e.tts&&this.nonce===e.nonce&&this.embeds.length===e.embeds.length&&this.attachments.length===e.attachments.length;return i&&t&&(i=this.mentions.everyone===e.mentions.everyone&&this.createdTimestamp===new Date(t.timestamp).getTime()&&this.editedTimestamp===new Date(t.edited_timestamp).getTime()),i}toString(){return this.content}toJSON(){return super.toJSON({channel:"channelID",author:"authorID",application:"applicationID",guild:"guildID",cleanContent:!0,member:!1,reactions:!1})}}},function(e,t,i){"use strict";const s=i(5),n=i(7);e.exports=class Emoji extends s{constructor(e,t){super(e),this.animated=t.animated,this.name=t.name,this.id=t.id,this.deleted=!1}get identifier(){return this.id?`${this.animated?"a:":""}${this.name}:${this.id}`:encodeURIComponent(this.name)}get url(){return this.id?this.client.rest.cdn.Emoji(this.id,this.animated?"gif":"png"):null}get createdTimestamp(){return this.id?n.deconstruct(this.id).timestamp:null}get createdAt(){return this.id?new Date(this.createdTimestamp):null}toString(){return this.id?`<${this.animated?"a":""}:${this.name}:${this.id}>`:this.name}toJSON(){return super.toJSON({guild:"guildID",createdTimestamp:!0,url:!0,identifier:!0})}}},function(e,t,i){"use strict";const s=i(43),n=i(44),{RangeError:r}=i(3),{browser:o}=i(0),a=i(9),c=i(47),l=i(4);class APIMessage{constructor(e,t){this.target=e,this.options=t,this.data=null,this.files=null}get isWebhook(){const e=i(12),t=i(48);return this.target instanceof e||this.target instanceof t}get isUser(){const e=i(26),t=i(10);return this.target instanceof e||this.target instanceof t}get isMessage(){const e=i(28);return this.target instanceof e}makeContent(){const e=i(10);let t;null===this.options.content?t="":void 0!==this.options.content&&(t=l.resolveString(this.options.content));const s=void 0===this.options.disableMentions?this.target.client.options.disableMentions:this.options.disableMentions;"all"===s?t=l.removeMentions(t||""):"everyone"===s&&(t=(t||"").replace(/@([^<>@ ]*)/gmus,(e,t)=>t.match(/^[&!]?\d+$/)?`@${t}`:`@​${t}`));const n=void 0!==this.options.split&&!1!==this.options.split,r=void 0!==this.options.code&&!1!==this.options.code,o=n?{...this.options.split}:void 0;let a="";if(this.options.reply&&!this.isUser&&"dm"!==this.target.type){const t=this.target.client.users.resolveID(this.options.reply);a=`<@${this.options.reply instanceof e&&this.options.reply.nickname?"!":""}${t}>, `,n&&(o.prepend=`${a}${o.prepend||""}`)}if(t||a){if(r){const e="string"==typeof this.options.code?this.options.code:"";t=`${a}\`\`\`${e}\n${l.cleanCodeBlockContent(t||"")}\n\`\`\``,n&&(o.prepend=`${o.prepend||""}\`\`\`${e}\n`,o.append=`\n\`\`\`${o.append||""}`)}else a&&(t=`${a}${t||""}`);n&&(t=l.splitMessage(t||"",o))}return t}resolveData(){if(this.data)return this;const e=this.makeContent(),t=Boolean(this.options.tts);let i;if(void 0!==this.options.nonce&&(i=parseInt(this.options.nonce),isNaN(i)||i<0))throw new r("MESSAGE_NONCE_TYPE");const s=[];this.isWebhook?this.options.embeds&&s.push(...this.options.embeds):this.options.embed&&s.push(this.options.embed);const o=s.map(e=>new n(e).toJSON());let a,l,h;this.isWebhook&&(a=this.options.username||this.target.name,this.options.avatarURL&&(l=this.options.avatarURL)),this.isMessage&&(h=null!=this.options.flags?new c(this.options.flags).bitfield:this.target.flags.bitfield);const u=void 0===this.options.allowedMentions?this.target.client.options.allowedMentions:this.options.allowedMentions;return this.data={content:e,tts:t,nonce:i,embed:null===this.options.embed?null:o[0],embeds:o,username:a,avatar_url:l,allowed_mentions:u,flags:h},this}async resolveFiles(){if(this.files)return this;const e=[];this.isWebhook?this.options.embeds&&e.push(...this.options.embeds):this.options.embed&&e.push(this.options.embed);const t=[];this.options.files&&t.push(...this.options.files);for(const i of e)i.files&&t.push(...i.files);return this.files=await Promise.all(t.map(e=>this.constructor.resolveFile(e))),this}split(){if(this.data||this.resolveData(),!Array.isArray(this.data.content))return[this];const e=[];for(let t=0;t<this.data.content.length;t++){let i,s;t===this.data.content.length-1?(i={...this.data,content:this.data.content[t]},s={...this.options,content:this.data.content[t]}):(i={content:this.data.content[t],tts:this.data.tts},s={content:this.data.content[t],tts:this.data.tts});const n=new APIMessage(this.target,s);n.data=i,e.push(n)}return e}static async resolveFile(e){let t,i;const s=e=>"string"==typeof e?l.basename(e):e.path?l.basename(e.path):"file.jpg";return"string"==typeof e||e instanceof(o?ArrayBuffer:Buffer)||"function"==typeof e.pipe?(t=e,i=s(t)):(t=e.attachment,i=e.name||s(t)),{attachment:t,name:i,file:await a.resolveFile(t)}}static partitionMessageAdditions(e){const t=[],i=[];for(const r of e)r instanceof n?t.push(r):r instanceof s&&i.push(r);return[t,i]}static transformOptions(e,t,i={},r=!1){if(t||"object"!=typeof e||Array.isArray(e)||(t=e,e=void 0),t){if(t instanceof n)return r?{content:e,embeds:[t],...i}:{content:e,embed:t,...i};if(t instanceof s)return{content:e,files:[t],...i}}else t={};if(Array.isArray(t)){const[s,n]=this.partitionMessageAdditions(t);return r?{content:e,embeds:s,files:n,...i}:{content:e,embed:s[0],files:n,...i}}if(Array.isArray(e)){const[t,s]=this.partitionMessageAdditions(e);if(t.length||s.length)return r?{embeds:t,files:s,...i}:{embed:t[0],files:s,...i}}return{content:e,...t,...i}}static create(e,t,s,n={}){const r=i(12),o=i(48),a=e instanceof r||e instanceof o;return new this(e,this.transformOptions(t,s,n,a))}}e.exports=APIMessage},function(e,t,i){"use strict";(function(t){void 0===t||!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports={nextTick:function(e,i,s,n){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function');var r,o,a=arguments.length;switch(a){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick((function(){e.call(null,i)}));case 3:return t.nextTick((function(){e.call(null,i,s)}));case 4:return t.nextTick((function(){e.call(null,i,s,n)}));default:for(r=new Array(a-1),o=0;o<r.length;)r[o++]=arguments[o];return t.nextTick((function(){e.apply(null,r)}))}}}:e.exports=t}).call(this,i(14))},function(e,t,i){var s=i(120),n=s.Buffer;function r(e,t){for(var i in e)t[i]=e[i]}function o(e,t,i){return n(e,t,i)}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=s:(r(s,t),t.Buffer=o),r(n,o),o.from=function(e,t,i){if("number"==typeof e)throw new TypeError("Argument must not be a number");return n(e,t,i)},o.alloc=function(e,t,i){if("number"!=typeof e)throw new TypeError("Argument must be a number");var s=n(e);return void 0!==t?"string"==typeof i?s.fill(t,i):s.fill(t):s.fill(0),s},o.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return n(e)},o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number");return s.SlowBuffer(e)}},function(e,t,i){"use strict";const s=i(71),n=i(30),r=i(7),o=i(2),{RangeError:a,TypeError:c}=i(3);class TextBasedChannel{constructor(){this.messages=new l(this),this.lastMessageID=null,this.lastPinTimestamp=null}get lastMessage(){return this.messages.cache.get(this.lastMessageID)||null}get lastPinAt(){return this.lastPinTimestamp?new Date(this.lastPinTimestamp):null}async send(e,t){const s=i(26),r=i(10);if(this instanceof s||this instanceof r)return this.createDM().then(i=>i.send(e,t));let o;if(e instanceof n)o=e.resolveData();else if(o=n.create(this,e,t).resolveData(),Array.isArray(o.data.content))return Promise.all(o.split().map(this.send.bind(this)));const{data:a,files:c}=await o.resolveFiles();return this.client.api.channels[this.id].messages.post({data:a,files:c}).then(e=>this.client.actions.MessageCreate.handle(e).message)}startTyping(e){if(void 0!==e&&e<1)throw new a("TYPING_COUNT");if(this.client.user._typing.has(this.id)){const t=this.client.user._typing.get(this.id);return t.count=e||t.count+1,t.promise}const t={};return t.promise=new Promise((i,s)=>{const n=this.client.api.channels[this.id].typing;Object.assign(t,{count:e||1,interval:this.client.setInterval(()=>{n.post().catch(e=>{this.client.clearInterval(t.interval),this.client.user._typing.delete(this.id),s(e)})},9e3),resolve:i}),n.post().catch(e=>{this.client.clearInterval(t.interval),this.client.user._typing.delete(this.id),s(e)}),this.client.user._typing.set(this.id,t)}),t.promise}stopTyping(e=!1){if(this.client.user._typing.has(this.id)){const t=this.client.user._typing.get(this.id);t.count--,(t.count<=0||e)&&(this.client.clearInterval(t.interval),this.client.user._typing.delete(this.id),t.resolve())}}get typing(){return this.client.user._typing.has(this.id)}get typingCount(){return this.client.user._typing.has(this.id)?this.client.user._typing.get(this.id).count:0}createMessageCollector(e,t={}){return new s(this,e,t)}awaitMessages(e,t={}){return new Promise((i,s)=>{this.createMessageCollector(e,t).once("end",(e,n)=>{t.errors&&t.errors.includes(n)?s(e):i(e)})})}async bulkDelete(e,t=!1){if(Array.isArray(e)||e instanceof o){let i=e instanceof o?e.keyArray():e.map(e=>e.id||e);if(t&&(i=i.filter(e=>Date.now()-r.deconstruct(e).date.getTime()<12096e5)),0===i.length)return new o;if(1===i.length){await this.client.api.channels(this.id).messages(i[0]).delete();const e=this.client.actions.MessageDelete.getMessage({message_id:i[0]},this);return e?new o([[e.id,e]]):new o}return await this.client.api.channels[this.id].messages["bulk-delete"].post({data:{messages:i}}),i.reduce((e,t)=>e.set(t,this.client.actions.MessageDeleteBulk.getMessage({message_id:t},this)),new o)}if(!isNaN(e)){const i=await this.messages.fetch({limit:e});return this.bulkDelete(i,t)}throw new c("MESSAGE_BULK_DELETE_TYPE")}static applyToClass(e,t=!1,i=[]){const s=["send"];t&&s.push("lastMessage","lastPinAt","bulkDelete","startTyping","stopTyping","typing","typingCount","createMessageCollector","awaitMessages");for(const t of s)i.includes(t)||Object.defineProperty(e.prototype,t,Object.getOwnPropertyDescriptor(TextBasedChannel.prototype,t))}}e.exports=TextBasedChannel;const l=i(34)},function(e,t,i){"use strict";const s=i(6),n=i(28),r=i(2),o=i(133);e.exports=class MessageManager extends s{constructor(e,t){super(e.client,t,n,o,e.client.options.messageCacheMaxSize),this.channel=e}add(e,t){return super.add(e,t,{extras:[this.channel]})}fetch(e,t=!0){return"string"==typeof e?this._fetchId(e,t):this._fetchMany(e,t)}fetchPinned(e=!0){return this.client.api.channels[this.channel.id].pins.get().then(t=>{const i=new r;for(const s of t)i.set(s.id,this.add(s,e));return i})}async delete(e,t){(e=this.resolveID(e))&&await this.client.api.channels(this.channel.id).messages(e).delete({reason:t})}async _fetchId(e,t){const i=this.cache.get(e);if(i&&!i.partial)return i;const s=await this.client.api.channels[this.channel.id].messages[e].get();return this.add(s,t)}async _fetchMany(e={},t){const i=await this.client.api.channels[this.channel.id].messages.get({query:e}),s=new r;for(const e of i)s.set(e.id,this.add(e,t));return s}}},function(e,t){},function(e,t,i){"use strict";var s=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("unable to locate global object")}();e.exports=t=s.fetch,t.default=s.fetch.bind(s),t.Headers=s.Headers,t.Request=s.Request,t.Response=s.Response},function(e,t,i){"use strict";(function(t,s){i(60);const n=i(15),r=i(100),{DefaultOptions:o}=i(0),a=i(4);e.exports=class BaseClient extends n{constructor(e={}){super(),this._timeouts=new Set,this._intervals=new Set,this._immediates=new Set,this.options=a.mergeDefault(o,e),this.rest=new r(this,e._tokenType)}get api(){return this.rest.api}destroy(){for(const e of this._timeouts)this.clearTimeout(e);for(const e of this._intervals)this.clearInterval(e);for(const e of this._immediates)this.clearImmediate(e);this._timeouts.clear(),this._intervals.clear(),this._immediates.clear()}setTimeout(e,t,...i){const s=setTimeout(()=>{e(...i),this._timeouts.delete(s)},t);return this._timeouts.add(s),s}clearTimeout(e){clearTimeout(e),this._timeouts.delete(e)}setInterval(e,t,...i){const s=setInterval(e,t,...i);return this._intervals.add(s),s}clearInterval(e){clearInterval(e),this._intervals.delete(e)}setImmediate(e,...i){const s=t(e,...i);return this._immediates.add(s),s}clearImmediate(e){s(e),this._immediates.delete(e)}toJSON(...e){return a.flatten(this,{domain:!1},...e)}}}).call(this,i(38).setImmediate,i(38).clearImmediate)},function(e,t,i){(function(e){var s=void 0!==e&&e||"undefined"!=typeof self&&self||window,n=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(n.call(setTimeout,s,arguments),clearTimeout)},t.setInterval=function(){return new r(n.call(setInterval,s,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(s,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},i(60),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,i(21))},function(e,t,i){"use strict";const s=i(16),n=i(33),r=i(34);class DMChannel extends s{constructor(e,t){super(e,t),this.type="dm",this.messages=new r(this),this._typing=new Map}_patch(e){super._patch(e),e.recipients&&(this.recipient=this.client.users.add(e.recipients[0])),this.lastMessageID=e.last_message_id,this.lastPinTimestamp=e.last_pin_timestamp?new Date(e.last_pin_timestamp).getTime():null}get partial(){return void 0===this.lastMessageID}fetch(){return this.recipient.createDM()}toString(){return this.recipient.toString()}get lastMessage(){}get lastPinAt(){}send(){}startTyping(){}stopTyping(){}get typing(){}get typingCount(){}createMessageCollector(){}awaitMessages(){}}n.applyToClass(DMChannel,!0,["bulkDelete"]),e.exports=DMChannel},function(e,t,i){"use strict";const s=i(29);e.exports=class BaseGuildEmoji extends s{constructor(e,t,i){super(e,t),this.guild=i,Object.defineProperty(this,"_roles",{value:[],writable:!0}),this._patch(t)}_patch(e){e.name&&(this.name=e.name),void 0!==e.require_colons&&(this.requiresColons=e.require_colons),void 0!==e.managed&&(this.managed=e.managed),void 0!==e.available&&(this.available=e.available),e.roles&&(this._roles=e.roles)}}},function(e,t,i){"use strict";const s=i(17),n=i(12),r=i(33),o=i(34),a=i(2),c=i(9);class TextChannel extends s{constructor(e,t){super(e,t),this.messages=new o(this),this._typing=new Map}_patch(e){if(super._patch(e),this.topic=e.topic,this.nsfw=e.nsfw,this.lastMessageID=e.last_message_id,this.rateLimitPerUser=e.rate_limit_per_user||0,this.lastPinTimestamp=e.last_pin_timestamp?new Date(e.last_pin_timestamp).getTime():null,e.messages)for(const t of e.messages)this.messages.add(t)}setRateLimitPerUser(e,t){return this.edit({rateLimitPerUser:e},t)}setNSFW(e,t){return this.edit({nsfw:e},t)}fetchWebhooks(){return this.client.api.channels[this.id].webhooks.get().then(e=>{const t=new a;for(const i of e)t.set(i.id,new n(this.client,i));return t})}async createWebhook(e,{avatar:t,reason:i}={}){return"string"!=typeof t||t.startsWith("data:")||(t=await c.resolveImage(t)),this.client.api.channels[this.id].webhooks.post({data:{name:e,avatar:t},reason:i}).then(e=>new n(this.client,e))}get lastMessage(){}get lastPinAt(){}send(){}startTyping(){}stopTyping(){}get typing(){}get typingCount(){}createMessageCollector(){}awaitMessages(){}bulkDelete(){}}r.applyToClass(TextChannel,!0),e.exports=TextChannel},function(e,t,i){"use strict";const s=i(19),{TypeError:n}=i(3),r=i(8),o=i(4);e.exports=class PermissionOverwrites{constructor(e,t){Object.defineProperty(this,"channel",{value:e}),t&&this._patch(t)}_patch(e){this.id=e.id,this.type=e.type,this.deny=new r(e.deny).freeze(),this.allow=new r(e.allow).freeze()}update(e,t){const{allow:i,deny:s}=this.constructor.resolveOverwriteOptions(e,this);return this.channel.client.api.channels(this.channel.id).permissions[this.id].put({data:{id:this.id,type:this.type,allow:i.bitfield,deny:s.bitfield},reason:t}).then(()=>this)}delete(e){return this.channel.client.api.channels[this.channel.id].permissions[this.id].delete({reason:e}).then(()=>this)}toJSON(){return o.flatten(this)}static resolveOverwriteOptions(e,{allow:t,deny:i}={}){t=new r(t),i=new r(i);for(const[s,n]of Object.entries(e))!0===n?(t.add(r.FLAGS[s]),i.remove(r.FLAGS[s])):!1===n?(t.remove(r.FLAGS[s]),i.add(r.FLAGS[s])):null===n&&(t.remove(r.FLAGS[s]),i.remove(r.FLAGS[s]));return{allow:t,deny:i}}static resolve(e,t){if(e instanceof this)return e.toJSON();if("string"==typeof e.id&&["role","member"].includes(e.type))return{...e,allow:r.resolve(e.allow),deny:r.resolve(e.deny)};const i=t.roles.resolve(e.id)||t.client.users.resolve(e.id);if(!i)throw new n("INVALID_TYPE","parameter","User nor a Role",!0);const o=i instanceof s?"role":"member";return{id:i.id,type:o,allow:r.resolve(e.allow),deny:r.resolve(e.deny)}}}},function(e,t,i){"use strict";const s=i(4);e.exports=class MessageAttachment{constructor(e,t=null,i){this.attachment=e,this.name=t,i&&this._patch(i)}setFile(e,t=null){return this.attachment=e,this.name=t,this}setName(e){return this.name=e,this}_patch(e){this.id=e.id,this.size=e.size,this.url=e.url,this.proxyURL=e.proxy_url,this.height=void 0!==e.height?e.height:null,this.width=void 0!==e.width?e.width:null}get spoiler(){return s.basename(this.url).startsWith("SPOILER_")}toJSON(){return s.flatten(this)}}},function(e,t,i){"use strict";const{RangeError:s}=i(3),n=i(4);e.exports=class MessageEmbed{constructor(e={},t=!1){this.setup(e,t)}setup(e,t){this.type=e.type,this.title=e.title,this.description=e.description,this.url=e.url,this.color=n.resolveColor(e.color),this.timestamp=e.timestamp?new Date(e.timestamp).getTime():null,this.fields=[],e.fields&&(this.fields=t?e.fields.map(n.cloneObject):this.constructor.normalizeFields(e.fields)),this.thumbnail=e.thumbnail?{url:e.thumbnail.url,proxyURL:e.thumbnail.proxyURL||e.thumbnail.proxy_url,height:e.thumbnail.height,width:e.thumbnail.width}:null,this.image=e.image?{url:e.image.url,proxyURL:e.image.proxyURL||e.image.proxy_url,height:e.image.height,width:e.image.width}:null,this.video=e.video?{url:e.video.url,proxyURL:e.video.proxyURL||e.video.proxy_url,height:e.video.height,width:e.video.width}:null,this.author=e.author?{name:e.author.name,url:e.author.url,iconURL:e.author.iconURL||e.author.icon_url,proxyIconURL:e.author.proxyIconURL||e.author.proxy_icon_url}:null,this.provider=e.provider?{name:e.provider.name,url:e.provider.name}:null,this.footer=e.footer?{text:e.footer.text,iconURL:e.footer.iconURL||e.footer.icon_url,proxyIconURL:e.footer.proxyIconURL||e.footer.proxy_icon_url}:null,this.files=e.files||[]}get createdAt(){return this.timestamp?new Date(this.timestamp):null}get hexColor(){return this.color?`#${this.color.toString(16).padStart(6,"0")}`:null}get length(){return(this.title?this.title.length:0)+(this.description?this.description.length:0)+(this.fields.length>=1?this.fields.reduce((e,t)=>e+t.name.length+t.value.length,0):0)+(this.footer?this.footer.text.length:0)}addField(e,t,i){return this.addFields({name:e,value:t,inline:i})}addFields(...e){return this.fields.push(...this.constructor.normalizeFields(e)),this}spliceFields(e,t,...i){return this.fields.splice(e,t,...this.constructor.normalizeFields(...i)),this}attachFiles(e){return this.files=this.files.concat(e),this}setAuthor(e,t,i){return this.author={name:n.resolveString(e),iconURL:t,url:i},this}setColor(e){return this.color=n.resolveColor(e),this}setDescription(e){return e=n.resolveString(e),this.description=e,this}setFooter(e,t){return e=n.resolveString(e),this.footer={text:e,iconURL:t},this}setImage(e){return this.image={url:e},this}setThumbnail(e){return this.thumbnail={url:e},this}setTimestamp(e=Date.now()){return e instanceof Date&&(e=e.getTime()),this.timestamp=e,this}setTitle(e){return e=n.resolveString(e),this.title=e,this}setURL(e){return this.url=e,this}toJSON(){return{title:this.title,type:"rich",description:this.description,url:this.url,timestamp:this.timestamp?new Date(this.timestamp):null,color:this.color,fields:this.fields,thumbnail:this.thumbnail,image:this.image,author:this.author?{name:this.author.name,url:this.author.url,icon_url:this.author.iconURL}:null,footer:this.footer?{text:this.footer.text,icon_url:this.footer.iconURL}:null}}static normalizeField(e,t,i=!1){if(!(e=n.resolveString(e)))throw new s("EMBED_FIELD_NAME");if(!(t=n.resolveString(t)))throw new s("EMBED_FIELD_VALUE");return{name:e,value:t,inline:i}}static normalizeFields(...e){return e.flat(2).map(e=>this.normalizeField(e&&e.name,e&&e.value,!(!e||"boolean"!=typeof e.inline)&&e.inline))}}},function(e,t,i){(t=e.exports=i(64)).Stream=t,t.Readable=t,t.Writable=i(46),t.Duplex=i(20),t.Transform=i(69),t.PassThrough=i(127)},function(e,t,i){"use strict";(function(t,s,n){var r=i(31);function o(e){var t=this;this.next=null,this.entry=null,this.finish=function(){!function(e,t,i){var s=e.entry;e.entry=null;for(;s;){var n=s.callback;t.pendingcb--,n(i),s=s.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}e.exports=_;var a,c=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?s:r.nextTick;_.WritableState=E;var l=Object.create(i(25));l.inherits=i(22);var h={deprecate:i(126)},u=i(66),d=i(32).Buffer,p=n.Uint8Array||function(){};var f,m=i(67);function g(){}function E(e,t){a=a||i(20),e=e||{};var s=t instanceof a;this.objectMode=!!e.objectMode,s&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var n=e.highWaterMark,l=e.writableHighWaterMark,h=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:s&&(l||0===l)?l:h,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var u=!1===e.decodeStrings;this.decodeStrings=!u,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(e){!function(e,t){var i=e._writableState,s=i.sync,n=i.writecb;if(function(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}(i),t)!function(e,t,i,s,n){--t.pendingcb,i?(r.nextTick(n,s),r.nextTick(S,e,t),e._writableState.errorEmitted=!0,e.emit("error",s)):(n(s),e._writableState.errorEmitted=!0,e.emit("error",s),S(e,t))}(e,i,s,t,n);else{var o=w(i);o||i.corked||i.bufferProcessing||!i.bufferedRequest||v(e,i),s?c(b,e,i,o,n):b(e,i,o,n)}}(t,e)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new o(this)}function _(e){if(a=a||i(20),!(f.call(_,this)||this instanceof a))return new _(e);this._writableState=new E(e,this),this.writable=!0,e&&("function"==typeof e.write&&(this._write=e.write),"function"==typeof e.writev&&(this._writev=e.writev),"function"==typeof e.destroy&&(this._destroy=e.destroy),"function"==typeof e.final&&(this._final=e.final)),u.call(this)}function y(e,t,i,s,n,r,o){t.writelen=s,t.writecb=o,t.writing=!0,t.sync=!0,i?e._writev(n,t.onwrite):e._write(n,r,t.onwrite),t.sync=!1}function b(e,t,i,s){i||function(e,t){0===t.length&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}(e,t),t.pendingcb--,s(),S(e,t)}function v(e,t){t.bufferProcessing=!0;var i=t.bufferedRequest;if(e._writev&&i&&i.next){var s=t.bufferedRequestCount,n=new Array(s),r=t.corkedRequestsFree;r.entry=i;for(var a=0,c=!0;i;)n[a]=i,i.isBuf||(c=!1),i=i.next,a+=1;n.allBuffers=c,y(e,t,!0,t.length,n,"",r.finish),t.pendingcb++,t.lastBufferedRequest=null,r.next?(t.corkedRequestsFree=r.next,r.next=null):t.corkedRequestsFree=new o(t),t.bufferedRequestCount=0}else{for(;i;){var l=i.chunk,h=i.encoding,u=i.callback;if(y(e,t,!1,t.objectMode?1:l.length,l,h,u),i=i.next,t.bufferedRequestCount--,t.writing)break}null===i&&(t.lastBufferedRequest=null)}t.bufferedRequest=i,t.bufferProcessing=!1}function w(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function A(e,t){e._final((function(i){t.pendingcb--,i&&e.emit("error",i),t.prefinished=!0,e.emit("prefinish"),S(e,t)}))}function S(e,t){var i=w(t);return i&&(!function(e,t){t.prefinished||t.finalCalled||("function"==typeof e._final?(t.pendingcb++,t.finalCalled=!0,r.nextTick(A,e,t)):(t.prefinished=!0,e.emit("prefinish")))}(e,t),0===t.pendingcb&&(t.finished=!0,e.emit("finish"))),i}l.inherits(_,u),E.prototype.getBuffer=function(){for(var e=this.bufferedRequest,t=[];e;)t.push(e),e=e.next;return t},function(){try{Object.defineProperty(E.prototype,"buffer",{get:h.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(f=Function.prototype[Symbol.hasInstance],Object.defineProperty(_,Symbol.hasInstance,{value:function(e){return!!f.call(this,e)||this===_&&(e&&e._writableState instanceof E)}})):f=function(e){return e instanceof this},_.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},_.prototype.write=function(e,t,i){var s,n=this._writableState,o=!1,a=!n.objectMode&&(s=e,d.isBuffer(s)||s instanceof p);return a&&!d.isBuffer(e)&&(e=function(e){return d.from(e)}(e)),"function"==typeof t&&(i=t,t=null),a?t="buffer":t||(t=n.defaultEncoding),"function"!=typeof i&&(i=g),n.ended?function(e,t){var i=new Error("write after end");e.emit("error",i),r.nextTick(t,i)}(this,i):(a||function(e,t,i,s){var n=!0,o=!1;return null===i?o=new TypeError("May not write null values to stream"):"string"==typeof i||void 0===i||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk")),o&&(e.emit("error",o),r.nextTick(s,o),n=!1),n}(this,n,e,i))&&(n.pendingcb++,o=function(e,t,i,s,n,r){if(!i){var o=function(e,t,i){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=d.from(t,i));return t}(t,s,n);s!==o&&(i=!0,n="buffer",s=o)}var a=t.objectMode?1:s.length;t.length+=a;var c=t.length<t.highWaterMark;c||(t.needDrain=!0);if(t.writing||t.corked){var l=t.lastBufferedRequest;t.lastBufferedRequest={chunk:s,encoding:n,isBuf:i,callback:r,next:null},l?l.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else y(e,t,!1,a,s,n,r);return c}(this,n,a,e,t,i)),o},_.prototype.cork=function(){this._writableState.corked++},_.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||v(this,e))},_.prototype.setDefaultEncoding=function(e){if("string"==typeof e&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e);return this._writableState.defaultEncoding=e,this},Object.defineProperty(_.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),_.prototype._write=function(e,t,i){i(new Error("_write() is not implemented"))},_.prototype._writev=null,_.prototype.end=function(e,t,i){var s=this._writableState;"function"==typeof e?(i=e,e=null,t=null):"function"==typeof t&&(i=t,t=null),null!=e&&this.write(e,t),s.corked&&(s.corked=1,this.uncork()),s.ending||s.finished||function(e,t,i){t.ending=!0,S(e,t),i&&(t.finished?r.nextTick(i):e.once("finish",i));t.ended=!0,e.writable=!1}(this,s,i)},Object.defineProperty(_.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}}),_.prototype.destroy=m.destroy,_.prototype._undestroy=m.undestroy,_.prototype._destroy=function(e,t){this.end(),t(e)}}).call(this,i(14),i(38).setImmediate,i(21))},function(e,t,i){"use strict";const s=i(11);class MessageFlags extends s{}MessageFlags.FLAGS={CROSSPOSTED:1,IS_CROSSPOST:2,SUPPRESS_EMBEDS:4,SOURCE_MESSAGE_DELETED:8,URGENT:16},e.exports=MessageFlags},function(e,t,i){"use strict";const s=i(37);class WebhookClient extends s{constructor(e,t,i){super(i),Object.defineProperty(this,"client",{value:this}),this.id=e,Object.defineProperty(this,"token",{value:t,writable:!0,configurable:!0})}}i(12).applyToClass(WebhookClient),e.exports=WebhookClient},function(e,t,i){"use strict";const s=i(15),n=i(2),r=i(4);e.exports=class Collector extends s{constructor(e,t,i={}){super(),Object.defineProperty(this,"client",{value:e}),this.filter=t,this.options=i,this.collected=new n,this.ended=!1,this._timeout=null,this._idletimeout=null,this.handleCollect=this.handleCollect.bind(this),this.handleDispose=this.handleDispose.bind(this),i.time&&(this._timeout=this.client.setTimeout(()=>this.stop("time"),i.time)),i.idle&&(this._idletimeout=this.client.setTimeout(()=>this.stop("idle"),i.idle))}handleCollect(...e){const t=this.collect(...e);t&&this.filter(...e,this.collected)&&(this.collected.set(t,e[0]),this.emit("collect",...e),this._idletimeout&&(this.client.clearTimeout(this._idletimeout),this._idletimeout=this.client.setTimeout(()=>this.stop("idle"),this.options.idle))),this.checkEnd()}handleDispose(...e){if(!this.options.dispose)return;const t=this.dispose(...e);t&&this.filter(...e)&&this.collected.has(t)&&(this.collected.delete(t),this.emit("dispose",...e),this.checkEnd())}get next(){return new Promise((e,t)=>{if(this.ended)return void t(this.collected);const i=()=>{this.removeListener("collect",s),this.removeListener("end",n)},s=t=>{i(),e(t)},n=()=>{i(),t(this.collected)};this.on("collect",s),this.on("end",n)})}stop(e="user"){this.ended||(this._timeout&&(this.client.clearTimeout(this._timeout),this._timeout=null),this._idletimeout&&(this.client.clearTimeout(this._idletimeout),this._idletimeout=null),this.ended=!0,this.emit("end",this.collected,e))}resetTimer({time:e,idle:t}={}){this._timeout&&(this.client.clearTimeout(this._timeout),this._timeout=this.client.setTimeout(()=>this.stop("time"),e||this.options.time)),this._idletimeout&&(this.client.clearTimeout(this._idletimeout),this._idletimeout=this.client.setTimeout(()=>this.stop("idle"),t||this.options.idle))}checkEnd(){const e=this.endReason();e&&this.stop(e)}async*[Symbol.asyncIterator](){const e=[],t=t=>e.push(t);this.on("collect",t);try{for(;e.length||!this.ended;)e.length?yield e.shift():await new Promise(e=>{const t=()=>(this.removeListener("collect",t),this.removeListener("end",t),e());this.on("collect",t),this.on("end",t)})}finally{this.removeListener("collect",t)}}toJSON(){return r.flatten(this)}collect(){}dispose(){}endReason(){}}},function(e,t,i){"use strict";const s=i(5),n=i(73),{ClientApplicationAssetTypes:r,Endpoints:o}=i(0),a=i(7),c=Object.keys(r);e.exports=class ClientApplication extends s{constructor(e,t){super(e),this._patch(t)}_patch(e){this.id=e.id,this.name=e.name,this.description=e.description,this.icon=e.icon,this.cover=e.cover_image||null,this.rpcOrigins=e.rpc_origins||[],this.botRequireCodeGrant=void 0!==e.bot_require_code_grant?e.bot_require_code_grant:null,this.botPublic=void 0!==e.bot_public?e.bot_public:null,this.owner=e.team?new n(this.client,e.team):e.owner?this.client.users.add(e.owner):null}get createdTimestamp(){return a.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}iconURL({format:e,size:t}={}){return this.icon?this.client.rest.cdn.AppIcon(this.id,this.icon,{format:e,size:t}):null}coverImage({format:e,size:t}={}){return this.cover?o.CDN(this.client.options.http.cdn).AppIcon(this.id,this.cover,{format:e,size:t}):null}fetchAssets(){return this.client.api.oauth2.applications(this.id).assets.get().then(e=>e.map(e=>({id:e.id,name:e.name,type:c[e.type-1]})))}toString(){return this.name}toJSON(){return super.toJSON({createdTimestamp:!0})}}},function(e,t,i){"use strict";const s=i(24),n=i(52),r=i(77),o=i(4);e.exports=class MessageReaction{constructor(e,t,i){Object.defineProperty(this,"client",{value:e}),this.message=i,this.me=t.me,this.users=new r(e,void 0,this),this._emoji=new n(this,t.emoji),this._patch(t)}_patch(e){null==this.count&&(this.count=e.count)}async remove(){return await this.client.api.channels(this.message.channel.id).messages(this.message.id).reactions(this._emoji.identifier).delete(),this}get emoji(){if(this._emoji instanceof s)return this._emoji;if(this._emoji.id){const e=this.message.client.emojis.cache;if(e.has(this._emoji.id)){const t=e.get(this._emoji.id);return this._emoji=t,t}}return this._emoji}get partial(){return null===this.count}async fetch(){const e=(await this.message.fetch()).reactions.cache.get(this.emoji.id||this.emoji.name);return this._patch(e||{count:0}),this}toJSON(){return o.flatten(this,{emoji:"emojiID",message:"messageID"})}_add(e){this.partial||(this.users.cache.set(e.id,e),this.me&&e.id===this.message.client.user.id&&0!==this.count||this.count++,this.me||(this.me=e.id===this.message.client.user.id))}_remove(e){this.partial||(this.users.cache.delete(e.id),this.me&&e.id===this.message.client.user.id||this.count--,e.id===this.message.client.user.id&&(this.me=!1),this.count<=0&&0===this.users.cache.size&&this.message.reactions.cache.delete(this.emoji.id||this.emoji.name))}}},function(e,t,i){"use strict";const s=i(29),n=i(4);e.exports=class ReactionEmoji extends s{constructor(e,t){super(e.message.client,t),this.reaction=e}toJSON(){return n.flatten(this,{identifier:!0})}valueOf(){return this.id}}},function(e,t,i){"use strict";const s=i(5),n=i(83),r=i(55),o=i(54),a=i(18),c=i(56),l=i(12),h=i(84),u=i(57),d=i(85),p=i(86),f=i(87),m=i(135),g=i(2),{ChannelTypes:E,DefaultMessageNotifications:_,PartialTypes:y,VerificationLevels:b,ExplicitContentFilterLevels:v}=i(0),w=i(9),A=i(7),S=i(88),I=i(4);e.exports=class Guild extends s{constructor(e,t){super(e),this.members=new d(this),this.channels=new h(this),this.roles=new f(this),this.presences=new p(this.client),this.voiceStates=new m(this),this.deleted=!1,t&&(t.unavailable?(this.available=!1,this.id=t.id):(this._patch(t),t.channels||(this.available=!1)),this.shardID=t.shardID)}get shard(){return this.client.ws.shards.get(this.shardID)}_patch(e){if(this.name=e.name,this.icon=e.icon,this.splash=e.splash,this.region=e.region,this.memberCount=e.member_count||this.memberCount,this.large=Boolean("large"in e?e.large:this.large),this.features=e.features,this.applicationID=e.application_id,this.afkTimeout=e.afk_timeout,this.afkChannelID=e.afk_channel_id,this.systemChannelID=e.system_channel_id,this.embedEnabled=e.embed_enabled,this.premiumTier=e.premium_tier,void 0!==e.premium_subscription_count&&(this.premiumSubscriptionCount=e.premium_subscription_count),void 0!==e.widget_enabled&&(this.widgetEnabled=e.widget_enabled),void 0!==e.widget_channel_id&&(this.widgetChannelID=e.widget_channel_id),void 0!==e.embed_channel_id&&(this.embedChannelID=e.embed_channel_id),this.verificationLevel=b[e.verification_level],this.explicitContentFilter=v[e.explicit_content_filter],this.mfaLevel=e.mfa_level,this.joinedTimestamp=e.joined_at?new Date(e.joined_at).getTime():this.joinedTimestamp,this.defaultMessageNotifications=_[e.default_message_notifications]||e.default_message_notifications,this.systemChannelFlags=new S(e.system_channel_flags).freeze(),void 0!==e.max_members&&(this.maximumMembers=e.max_members||25e4),void 0!==e.max_presences&&(this.maximumPresences=e.max_presences||25e3),this.vanityURLCode=e.vanity_url_code,this.description=e.description,this.banner=e.banner,this.id=e.id,this.available=!e.unavailable,this.features=e.features||this.features||[],this.rulesChannelID=e.rules_channel_id,this.publicUpdatesChannelID=e.public_updates_channel_id,e.channels){this.channels.cache.clear();for(const t of e.channels)this.client.channels.add(t,this)}if(e.roles){this.roles.cache.clear();for(const t of e.roles)this.roles.add(t)}if(e.members){this.members.cache.clear();for(const t of e.members)this.members.add(t)}if(e.owner_id&&(this.ownerID=e.owner_id),e.presences)for(const t of e.presences)this.presences.add(Object.assign(t,{guild:this}));if(e.voice_states){this.voiceStates.cache.clear();for(const t of e.voice_states)this.voiceStates.add(t)}if(this.emojis)e.emojis&&this.client.actions.GuildEmojisUpdate.handle({guild_id:this.id,emojis:e.emojis});else if(this.emojis=new u(this),e.emojis)for(const t of e.emojis)this.emojis.add(t)}bannerURL({format:e,size:t}={}){return this.banner?this.client.rest.cdn.Banner(this.id,this.banner,e,t):null}get createdTimestamp(){return A.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}get joinedAt(){return new Date(this.joinedTimestamp)}get partnered(){return this.features.includes("PARTNERED")}get verified(){return this.features.includes("VERIFIED")}iconURL({format:e,size:t,dynamic:i}={}){return this.icon?this.client.rest.cdn.Icon(this.id,this.icon,e,t,i):null}get nameAcronym(){return this.name.replace(/\w+/g,e=>e[0]).replace(/\s/g,"")}splashURL({format:e,size:t}={}){return this.splash?this.client.rest.cdn.Splash(this.id,this.splash,e,t):null}get owner(){return this.members.cache.get(this.ownerID)||(this.client.options.partials.includes(y.GUILD_MEMBER)?this.members.add({user:{id:this.ownerID}},!0):null)}get afkChannel(){return this.client.channels.cache.get(this.afkChannelID)||null}get systemChannel(){return this.client.channels.cache.get(this.systemChannelID)||null}get widgetChannel(){return this.client.channels.cache.get(this.widgetChannelID)||null}get embedChannel(){return this.client.channels.cache.get(this.embedChannelID)||null}get rulesChannel(){return this.client.channels.cache.get(this.rulesChannelID)||null}get publicUpdatesChannel(){return this.client.channels.cache.get(this.publicUpdatesChannelID)||null}get me(){return this.members.cache.get(this.client.user.id)||(this.client.options.partials.includes(y.GUILD_MEMBER)?this.members.add({user:{id:this.client.user.id}},!0):null)}get voice(){return this.voiceStates.cache.get(this.client.user.id)}member(e){return this.members.resolve(e)}fetch(){return this.client.api.guilds(this.id).get().then(e=>(this._patch(e),this))}fetchBan(e){const t=this.client.users.resolveID(e);if(!t)throw new Error("FETCH_BAN_RESOLVE_ID");return this.client.api.guilds(this.id).bans(t).get().then(e=>({reason:e.reason,user:this.client.users.add(e.user)}))}fetchBans(){return this.client.api.guilds(this.id).bans.get().then(e=>e.reduce((e,t)=>(e.set(t.user.id,{reason:t.reason,user:this.client.users.add(t.user)}),e),new g))}fetchIntegrations(){return this.client.api.guilds(this.id).integrations.get().then(e=>e.reduce((e,t)=>e.set(t.id,new o(this.client,t,this)),new g))}createIntegration(e,t){return this.client.api.guilds(this.id).integrations.post({data:e,reason:t}).then(()=>this)}fetchInvites(){return this.client.api.guilds(this.id).invites.get().then(e=>{const t=new g;for(const i of e){const e=new a(this.client,i);t.set(e.code,e)}return t})}fetchPreview(){return this.client.api.guilds(this.id).preview.get().then(e=>new r(this.client,e))}fetchVanityCode(){return this.features.includes("VANITY_URL")?this.client.api.guilds(this.id,"vanity-url").get().then(e=>e.code):Promise.reject(new Error("VANITY_URL"))}fetchWebhooks(){return this.client.api.guilds(this.id).webhooks.get().then(e=>{const t=new g;for(const i of e)t.set(i.id,new l(this.client,i));return t})}fetchVoiceRegions(){return this.client.api.guilds(this.id).regions.get().then(e=>{const t=new g;for(const i of e)t.set(i.id,new c(i));return t})}fetchEmbed(){return this.client.api.guilds(this.id).embed.get().then(e=>({enabled:e.enabled,channel:e.channel_id?this.channels.cache.get(e.channel_id):null}))}fetchAuditLogs(e={}){return e.before&&e.before instanceof n.Entry&&(e.before=e.before.id),"string"==typeof e.type&&(e.type=n.Actions[e.type]),this.client.api.guilds(this.id)["audit-logs"].get({query:{before:e.before,limit:e.limit,user_id:this.client.users.resolveID(e.user),action_type:e.type}}).then(e=>n.build(this,e))}addMember(e,t){if(!(e=this.client.users.resolveID(e)))return Promise.reject(new TypeError("INVALID_TYPE","user","UserResolvable"));if(this.members.cache.has(e))return Promise.resolve(this.members.cache.get(e));if(t.access_token=t.accessToken,t.roles){const e=[];for(let i of t.roles instanceof g?t.roles.values():t.roles){if(i=this.roles.resolve(i),!i)return Promise.reject(new TypeError("INVALID_TYPE","options.roles","Array or Collection of Roles or Snowflakes",!0));e.push(i.id)}t.roles=e}return this.client.api.guilds(this.id).members(e).put({data:t}).then(e=>this.members.add(e))}edit(e,t){const i={};return e.name&&(i.name=e.name),e.region&&(i.region=e.region),void 0!==e.verificationLevel&&(i.verification_level="number"==typeof e.verificationLevel?Number(e.verificationLevel):b.indexOf(e.verificationLevel)),void 0!==e.afkChannel&&(i.afk_channel_id=this.client.channels.resolveID(e.afkChannel)),void 0!==e.systemChannel&&(i.system_channel_id=this.client.channels.resolveID(e.systemChannel)),e.afkTimeout&&(i.afk_timeout=Number(e.afkTimeout)),void 0!==e.icon&&(i.icon=e.icon),e.owner&&(i.owner_id=this.client.users.resolveID(e.owner)),e.splash&&(i.splash=e.splash),e.banner&&(i.banner=e.banner),void 0!==e.explicitContentFilter&&(i.explicit_content_filter="number"==typeof e.explicitContentFilter?e.explicitContentFilter:v.indexOf(e.explicitContentFilter)),void 0!==e.defaultMessageNotifications&&(i.default_message_notifications="string"==typeof e.defaultMessageNotifications?_.indexOf(e.defaultMessageNotifications):e.defaultMessageNotifications),void 0!==e.systemChannelFlags&&(i.system_channel_flags=S.resolve(e.systemChannelFlags)),this.client.api.guilds(this.id).patch({data:i,reason:t}).then(e=>this.client.actions.GuildUpdate.handle(e).updated)}setExplicitContentFilter(e,t){return this.edit({explicitContentFilter:e},t)}setDefaultMessageNotifications(e,t){return this.edit({defaultMessageNotifications:e},t)}setSystemChannelFlags(e,t){return this.edit({systemChannelFlags:e},t)}setName(e,t){return this.edit({name:e},t)}setRegion(e,t){return this.edit({region:e},t)}setVerificationLevel(e,t){return this.edit({verificationLevel:e},t)}setAFKChannel(e,t){return this.edit({afkChannel:e},t)}setSystemChannel(e,t){return this.edit({systemChannel:e},t)}setAFKTimeout(e,t){return this.edit({afkTimeout:e},t)}async setIcon(e,t){return this.edit({icon:await w.resolveImage(e),reason:t})}setOwner(e,t){return this.edit({owner:e},t)}async setSplash(e,t){return this.edit({splash:await w.resolveImage(e),reason:t})}async setBanner(e,t){return this.edit({banner:await w.resolveImage(e),reason:t})}setChannelPositions(e){const t=e.map(e=>({id:this.client.channels.resolveID(e.channel),position:e.position}));return this.client.api.guilds(this.id).channels.patch({data:t}).then(()=>this.client.actions.GuildChannelsPositionUpdate.handle({guild_id:this.id,channels:t}).guild)}setRolePositions(e){return e=e.map(e=>({id:this.roles.resolveID(e.role),position:e.position})),this.client.api.guilds(this.id).roles.patch({data:e}).then(()=>this.client.actions.GuildRolesPositionUpdate.handle({guild_id:this.id,roles:e}).guild)}setEmbed(e,t){return this.client.api.guilds(this.id).embed.patch({data:{enabled:e.enabled,channel_id:this.channels.resolveID(e.channel)},reason:t}).then(()=>this)}leave(){return this.ownerID===this.client.user.id?Promise.reject(new Error("GUILD_OWNED")):this.client.api.users("@me").guilds(this.id).delete().then(()=>this.client.actions.GuildDelete.handle({id:this.id}).guild)}delete(){return this.client.api.guilds(this.id).delete().then(()=>this.client.actions.GuildDelete.handle({id:this.id}).guild)}equals(e){let t=e&&e instanceof this.constructor&&this.id===e.id&&this.available===e.available&&this.splash===e.splash&&this.region===e.region&&this.name===e.name&&this.memberCount===e.memberCount&&this.large===e.large&&this.icon===e.icon&&this.ownerID===e.ownerID&&this.verificationLevel===e.verificationLevel&&this.embedEnabled===e.embedEnabled&&(this.features===e.features||this.features.length===e.features.length&&this.features.every((t,i)=>t===e.features[i]));return t&&(this.embedChannel?e.embedChannel&&this.embedChannel.id===e.embedChannel.id||(t=!1):e.embedChannel&&(t=!1)),t}toString(){return this.name}toJSON(){const e=super.toJSON({available:!1,createdTimestamp:!0,nameAcronym:!0,presences:!1,voiceStates:!1});return e.iconURL=this.iconURL(),e.splashURL=this.splashURL(),e.bannerURL=this.bannerURL(),e}_sortedRoles(){return I.discordSort(this.roles.cache)}_sortedChannels(e){const t=e.type===E.CATEGORY;return I.discordSort(this.channels.cache.filter(i=>(["text","news","store"].includes(e.type)?["text","news","store"].includes(i.type):i.type===e.type)&&(t||i.parent===e.parent)))}}},function(e,t,i){"use strict";const s=i(5);e.exports=class Integration extends s{constructor(e,t,i){super(e),this.guild=i,this.id=t.id,this.name=t.name,this.type=t.type,this.enabled=t.enabled,this.syncing=t.syncing,this.role=this.guild.roles.cache.get(t.role_id),this.user=this.client.users.add(t.user),this.account=t.account,this.syncedAt=t.synced_at,this._patch(t)}_patch(e){this.expireBehavior=e.expire_behavior,this.expireGracePeriod=e.expire_grace_period}sync(){return this.syncing=!0,this.client.api.guilds(this.guild.id).integrations(this.id).post().then(()=>(this.syncing=!1,this.syncedAt=Date.now(),this))}edit(e,t){return"expireBehavior"in e&&(e.expire_behavior=e.expireBehavior,e.expireBehavior=null),"expireGracePeriod"in e&&(e.expire_grace_period=e.expireGracePeriod,e.expireGracePeriod=null),this.client.api.guilds(this.guild.id).integrations(this.id).patch({data:e,reason:t}).then(()=>(this._patch(e),this))}delete(e){return this.client.api.guilds(this.guild.id).integrations(this.id).delete({reason:e}).then(()=>this)}toJSON(){return super.toJSON({role:"roleID",guild:"guildID",user:"userID"})}}},function(e,t,i){"use strict";const s=i(5),n=i(134),r=i(2);e.exports=class GuildPreview extends s{constructor(e,t){super(e),t&&this._patch(t)}_patch(e){this.id=e.id,this.name=e.name,this.icon=e.icon,this.splash=e.splash,this.discoverySplash=e.discovery_splash,this.features=e.features,this.approximateMemberCount=e.approximate_member_count,this.approximatePresenceCount=e.approximate_presence_count,this.description=e.description,this.emojis?this.emojis.clear():this.emojis=new r;for(const t of e.emojis)this.emojis.set(t.id,new n(this.client,t,this))}splashURL({format:e,size:t}={}){return this.splash?this.client.rest.cdn.Splash(this.id,this.splash,e,t):null}discoverySplashURL({format:e,size:t}={}){return this.discoverySplash?this.client.rest.cdn.DiscoverySplash(this.id,this.discoverySplash,e,t):null}iconURL({format:e,size:t,dynamic:i}={}){return this.icon?this.client.rest.cdn.Icon(this.id,this.icon,e,t,i):null}fetch(){return this.client.api.guilds(this.id).preview.get().then(e=>(this._patch(e),this))}toString(){return this.name}toJSON(){const e=super.toJSON();return e.iconURL=this.iconURL(),e.splashURL=this.splashURL(),e}}},function(e,t,i){"use strict";const s=i(4);e.exports=class VoiceRegion{constructor(e){this.id=e.id,this.name=e.name,this.vip=e.vip,this.deprecated=e.deprecated,this.optimal=e.optimal,this.custom=e.custom}toJSON(){return s.flatten(this)}}},function(e,t,i){"use strict";const s=i(6),{TypeError:n}=i(3),r=i(24),o=i(52),a=i(2),c=i(9);e.exports=class GuildEmojiManager extends s{constructor(e,t){super(e.client,t,r),this.guild=e}add(e,t){return super.add(e,t,{extras:[this.guild]})}async create(e,t,{roles:i,reason:s}={}){if(!(e=await c.resolveImage(e)))throw new n("REQ_RESOURCE_TYPE");const r={image:e,name:t};if(i){r.roles=[];for(let e of i instanceof a?i.values():i){if(e=this.guild.roles.resolve(e),!e)return Promise.reject(new n("INVALID_TYPE","options.roles","Array or Collection of Roles or Snowflakes",!0));r.roles.push(e.id)}}return this.client.api.guilds(this.guild.id).emojis.post({data:r,reason:s}).then(e=>this.client.actions.GuildEmojiCreate.handle(this.guild,e).emoji)}resolve(e){return e instanceof o?super.resolve(e.id):super.resolve(e)}resolveID(e){return e instanceof o?e.id:super.resolveID(e)}resolveIdentifier(e){const t=this.resolve(e);return t?t.identifier:e instanceof o?e.identifier:"string"==typeof e?e.includes("%")?e:encodeURIComponent(e):null}}},function(e,t){e.exports={version:"12.2.0",homepage:"https://github.com/discordjs/discord.js#readme"}},function(e,t,i){"use strict";const s=Symbol("code"),n=new Map;function r(e){return class DiscordjsError extends e{constructor(e,...t){super(function(e,t){if("string"!=typeof e)throw new Error("Error message key must be a string");const i=n.get(e);if(!i)throw new Error(`An invalid error message key was used: ${e}.`);return"function"==typeof i?i(...t):void 0===t||0===t.length?i:(t.unshift(i),String(...t))}(e,t)),this[s]=e,Error.captureStackTrace&&Error.captureStackTrace(this,DiscordjsError)}get name(){return`${super.name} [${this[s]}]`}get code(){return this[s]}}}e.exports={register:function(e,t){n.set(e,"function"==typeof t?t:String(t))},Error:r(Error),TypeError:r(TypeError),RangeError:r(RangeError)}},function(e,t,i){(function(e,t){!function(e,i){"use strict";if(!e.setImmediate){var s,n,r,o,a,c=1,l={},h=!1,u=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?s=function(e){t.nextTick((function(){f(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,i=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=i,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){f(e.data)},s=function(e){r.port2.postMessage(e)}):u&&"onreadystatechange"in u.createElement("script")?(n=u.documentElement,s=function(e){var t=u.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,n.removeChild(t),t=null},n.appendChild(t)}):s=function(e){setTimeout(f,0,e)}:(o="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&f(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),s=function(t){e.postMessage(o+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),i=0;i<t.length;i++)t[i]=arguments[i+1];var n={callback:e,args:t};return l[c]=n,s(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function f(e){if(h)setTimeout(f,0,e);else{var t=l[e];if(t){h=!0;try{!function(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(void 0,i)}}(t)}finally{p(e),h=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,i(21),i(14))},function(e,t,i){"use strict";class DiscordAPIError extends Error{constructor(e,t,i,s){super();const n=this.constructor.flattenErrors(t.errors||t).join("\n");this.name="DiscordAPIError",this.message=t.message&&n?`${t.message}\n${n}`:t.message||n,this.method=i,this.path=e,this.code=t.code,this.httpStatus=s}static flattenErrors(e,t=""){let i=[];for(const[s,n]of Object.entries(e)){if("message"===s)continue;const e=t?isNaN(s)?`${t}.${s}`:`${t}[${s}]`:s;n._errors?i.push(`${e}: ${n._errors.map(e=>e.message).join(" ")}`):n.code||n.message?i.push(`${n.code?`${n.code}: `:""}${n.message}`.trim()):"string"==typeof n?i.push(n):i=i.concat(this.flattenErrors(n,e))}return i}}e.exports=DiscordAPIError},function(e,t,i){"use strict";class HTTPError extends Error{constructor(e,t,i,s,n){super(e),this.name=t,this.code=i||500,this.method=s,this.path=n}}e.exports=HTTPError},function(e,t,i){"use strict";const{TypeError:s}=i(3),n=i(2);e.exports=class GuildEmojiRoleManager{constructor(e){this.emoji=e,this.guild=e.guild,Object.defineProperty(this,"client",{value:e.client})}get _roles(){return this.guild.roles.cache.filter(e=>this.emoji._roles.includes(e.id))}get cache(){return this._roles}add(e){if(e instanceof n)return this.add(e.keyArray());if(!Array.isArray(e))return this.add([e]);if((e=e.map(e=>this.guild.roles.resolve(e))).includes(null))return Promise.reject(new s("INVALID_TYPE","roles","Array or Collection of Roles or Snowflakes",!0));const t=[...new Set(e.concat(...this._roles.values()))];return this.set(t)}remove(e){if(e instanceof n)return this.remove(e.keyArray());if(!Array.isArray(e))return this.remove([e]);if((e=e.map(e=>this.guild.roles.resolveID(e))).includes(null))return Promise.reject(new s("INVALID_TYPE","roles","Array or Collection of Roles or Snowflakes",!0));const t=this._roles.keyArray().filter(t=>!e.includes(t));return this.set(t)}set(e){return this.emoji.edit({roles:e})}clone(){const e=new this.constructor(this.emoji);return e._patch(this._roles.keyArray().slice()),e}_patch(e){this.emoji._roles=e}}},function(e,t,i){"use strict";(function(t,s){var n=i(31);e.exports=y;var r,o=i(65);y.ReadableState=_;i(15).EventEmitter;var a=function(e,t){return e.listeners(t).length},c=i(66),l=i(32).Buffer,h=t.Uint8Array||function(){};var u=Object.create(i(25));u.inherits=i(22);var d=i(123),p=void 0;p=d&&d.debuglog?d.debuglog("stream"):function(){};var f,m=i(124),g=i(67);u.inherits(y,c);var E=["error","close","destroy","pause","resume"];function _(e,t){e=e||{};var s=t instanceof(r=r||i(20));this.objectMode=!!e.objectMode,s&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var n=e.highWaterMark,o=e.readableHighWaterMark,a=this.objectMode?16:16384;this.highWaterMark=n||0===n?n:s&&(o||0===o)?o:a,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new m,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(f||(f=i(68).StringDecoder),this.decoder=new f(e.encoding),this.encoding=e.encoding)}function y(e){if(r=r||i(20),!(this instanceof y))return new y(e);this._readableState=new _(e,this),this.readable=!0,e&&("function"==typeof e.read&&(this._read=e.read),"function"==typeof e.destroy&&(this._destroy=e.destroy)),c.call(this)}function b(e,t,i,s,n){var r,o=e._readableState;null===t?(o.reading=!1,function(e,t){if(t.ended)return;if(t.decoder){var i=t.decoder.end();i&&i.length&&(t.buffer.push(i),t.length+=t.objectMode?1:i.length)}t.ended=!0,A(e)}(e,o)):(n||(r=function(e,t){var i;s=t,l.isBuffer(s)||s instanceof h||"string"==typeof t||void 0===t||e.objectMode||(i=new TypeError("Invalid non-string/buffer chunk"));var s;return i}(o,t)),r?e.emit("error",r):o.objectMode||t&&t.length>0?("string"==typeof t||o.objectMode||Object.getPrototypeOf(t)===l.prototype||(t=function(e){return l.from(e)}(t)),s?o.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):v(e,o,t,!0):o.ended?e.emit("error",new Error("stream.push() after EOF")):(o.reading=!1,o.decoder&&!i?(t=o.decoder.write(t),o.objectMode||0!==t.length?v(e,o,t,!1):I(e,o)):v(e,o,t,!1))):s||(o.reading=!1));return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(o)}function v(e,t,i,s){t.flowing&&0===t.length&&!t.sync?(e.emit("data",i),e.read(0)):(t.length+=t.objectMode?1:i.length,s?t.buffer.unshift(i):t.buffer.push(i),t.needReadable&&A(e)),I(e,t)}Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}}),y.prototype.destroy=g.destroy,y.prototype._undestroy=g.undestroy,y.prototype._destroy=function(e,t){this.push(null),t(e)},y.prototype.push=function(e,t){var i,s=this._readableState;return s.objectMode?i=!0:"string"==typeof e&&((t=t||s.defaultEncoding)!==s.encoding&&(e=l.from(e,t),t=""),i=!0),b(this,e,t,!1,i)},y.prototype.unshift=function(e){return b(this,e,null,!0,!1)},y.prototype.isPaused=function(){return!1===this._readableState.flowing},y.prototype.setEncoding=function(e){return f||(f=i(68).StringDecoder),this._readableState.decoder=new f(e),this._readableState.encoding=e,this};function w(e,t){return e<=0||0===t.length&&t.ended?0:t.objectMode?1:e!=e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=function(e){return e>=8388608?e=8388608:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}function A(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(p("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?n.nextTick(S,e):S(e))}function S(e){p("emit readable"),e.emit("readable"),R(e)}function I(e,t){t.readingMore||(t.readingMore=!0,n.nextTick(T,e,t))}function T(e,t){for(var i=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(p("maybeReadMore read 0"),e.read(0),i!==t.length);)i=t.length;t.readingMore=!1}function D(e){p("readable nexttick read 0"),e.read(0)}function N(e,t){t.reading||(p("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),R(e),t.flowing&&!t.reading&&e.read(0)}function R(e){var t=e._readableState;for(p("flow",t.flowing);t.flowing&&null!==e.read(););}function O(e,t){return 0===t.length?null:(t.objectMode?i=t.buffer.shift():!e||e>=t.length?(i=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length),t.buffer.clear()):i=function(e,t,i){var s;e<t.head.data.length?(s=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):s=e===t.head.data.length?t.shift():i?function(e,t){var i=t.head,s=1,n=i.data;e-=n.length;for(;i=i.next;){var r=i.data,o=e>r.length?r.length:e;if(o===r.length?n+=r:n+=r.slice(0,e),0===(e-=o)){o===r.length?(++s,i.next?t.head=i.next:t.head=t.tail=null):(t.head=i,i.data=r.slice(o));break}++s}return t.length-=s,n}(e,t):function(e,t){var i=l.allocUnsafe(e),s=t.head,n=1;s.data.copy(i),e-=s.data.length;for(;s=s.next;){var r=s.data,o=e>r.length?r.length:e;if(r.copy(i,i.length-e,0,o),0===(e-=o)){o===r.length?(++n,s.next?t.head=s.next:t.head=t.tail=null):(t.head=s,s.data=r.slice(o));break}++n}return t.length-=n,i}(e,t);return s}(e,t.buffer,t.decoder),i);var i}function C(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,n.nextTick(L,t,e))}function L(e,t){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function M(e,t){for(var i=0,s=e.length;i<s;i++)if(e[i]===t)return i;return-1}y.prototype.read=function(e){p("read",e),e=parseInt(e,10);var t=this._readableState,i=e;if(0!==e&&(t.emittedReadable=!1),0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return p("read: emitReadable",t.length,t.ended),0===t.length&&t.ended?C(this):A(this),null;if(0===(e=w(e,t))&&t.ended)return 0===t.length&&C(this),null;var s,n=t.needReadable;return p("need readable",n),(0===t.length||t.length-e<t.highWaterMark)&&p("length less than watermark",n=!0),t.ended||t.reading?p("reading or ended",n=!1):n&&(p("do read"),t.reading=!0,t.sync=!0,0===t.length&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=w(i,t))),null===(s=e>0?O(e,t):null)?(t.needReadable=!0,e=0):t.length-=e,0===t.length&&(t.ended||(t.needReadable=!0),i!==e&&t.ended&&C(this)),null!==s&&this.emit("data",s),s},y.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))},y.prototype.pipe=function(e,t){var i=this,r=this._readableState;switch(r.pipesCount){case 0:r.pipes=e;break;case 1:r.pipes=[r.pipes,e];break;default:r.pipes.push(e)}r.pipesCount+=1,p("pipe count=%d opts=%j",r.pipesCount,t);var c=(!t||!1!==t.end)&&e!==s.stdout&&e!==s.stderr?h:y;function l(t,s){p("onunpipe"),t===i&&s&&!1===s.hasUnpiped&&(s.hasUnpiped=!0,p("cleanup"),e.removeListener("close",E),e.removeListener("finish",_),e.removeListener("drain",u),e.removeListener("error",g),e.removeListener("unpipe",l),i.removeListener("end",h),i.removeListener("end",y),i.removeListener("data",m),d=!0,!r.awaitDrain||e._writableState&&!e._writableState.needDrain||u())}function h(){p("onend"),e.end()}r.endEmitted?n.nextTick(c):i.once("end",c),e.on("unpipe",l);var u=function(e){return function(){var t=e._readableState;p("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&a(e,"data")&&(t.flowing=!0,R(e))}}(i);e.on("drain",u);var d=!1;var f=!1;function m(t){p("ondata"),f=!1,!1!==e.write(t)||f||((1===r.pipesCount&&r.pipes===e||r.pipesCount>1&&-1!==M(r.pipes,e))&&!d&&(p("false write response, pause",i._readableState.awaitDrain),i._readableState.awaitDrain++,f=!0),i.pause())}function g(t){p("onerror",t),y(),e.removeListener("error",g),0===a(e,"error")&&e.emit("error",t)}function E(){e.removeListener("finish",_),y()}function _(){p("onfinish"),e.removeListener("close",E),y()}function y(){p("unpipe"),i.unpipe(e)}return i.on("data",m),function(e,t,i){if("function"==typeof e.prependListener)return e.prependListener(t,i);e._events&&e._events[t]?o(e._events[t])?e._events[t].unshift(i):e._events[t]=[i,e._events[t]]:e.on(t,i)}(e,"error",g),e.once("close",E),e.once("finish",_),e.emit("pipe",i),r.flowing||(p("pipe resume"),i.resume()),e},y.prototype.unpipe=function(e){var t=this._readableState,i={hasUnpiped:!1};if(0===t.pipesCount)return this;if(1===t.pipesCount)return e&&e!==t.pipes||(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,i)),this;if(!e){var s=t.pipes,n=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var r=0;r<n;r++)s[r].emit("unpipe",this,i);return this}var o=M(t.pipes,e);return-1===o||(t.pipes.splice(o,1),t.pipesCount-=1,1===t.pipesCount&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,i)),this},y.prototype.on=function(e,t){var i=c.prototype.on.call(this,e,t);if("data"===e)!1!==this._readableState.flowing&&this.resume();else if("readable"===e){var s=this._readableState;s.endEmitted||s.readableListening||(s.readableListening=s.needReadable=!0,s.emittedReadable=!1,s.reading?s.length&&A(this):n.nextTick(D,this))}return i},y.prototype.addListener=y.prototype.on,y.prototype.resume=function(){var e=this._readableState;return e.flowing||(p("resume"),e.flowing=!0,function(e,t){t.resumeScheduled||(t.resumeScheduled=!0,n.nextTick(N,e,t))}(this,e)),this},y.prototype.pause=function(){return p("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(p("pause"),this._readableState.flowing=!1,this.emit("pause")),this},y.prototype.wrap=function(e){var t=this,i=this._readableState,s=!1;for(var n in e.on("end",(function(){if(p("wrapped end"),i.decoder&&!i.ended){var e=i.decoder.end();e&&e.length&&t.push(e)}t.push(null)})),e.on("data",(function(n){(p("wrapped data"),i.decoder&&(n=i.decoder.write(n)),i.objectMode&&null==n)||(i.objectMode||n&&n.length)&&(t.push(n)||(s=!0,e.pause()))})),e)void 0===this[n]&&"function"==typeof e[n]&&(this[n]=function(t){return function(){return e[t].apply(e,arguments)}}(n));for(var r=0;r<E.length;r++)e.on(E[r],this.emit.bind(this,E[r]));return this._read=function(t){p("wrapped _read",t),s&&(s=!1,e.resume())},this},Object.defineProperty(y.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),y._fromList=O}).call(this,i(21),i(14))},function(e,t){var i={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==i.call(e)}},function(e,t,i){e.exports=i(15).EventEmitter},function(e,t,i){"use strict";var s=i(31);function n(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var i=this,r=this._readableState&&this._readableState.destroyed,o=this._writableState&&this._writableState.destroyed;return r||o?(t?t(e):!e||this._writableState&&this._writableState.errorEmitted||s.nextTick(n,this,e),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,(function(e){!t&&e?(s.nextTick(n,i,e),i._writableState&&(i._writableState.errorEmitted=!0)):t&&t(e)})),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(e,t,i){"use strict";var s=i(32).Buffer,n=s.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function r(e){var t;switch(this.encoding=function(e){var t=function(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}(e);if("string"!=typeof t&&(s.isEncoding===n||!n(e)))throw new Error("Unknown encoding: "+e);return t||e}(e),this.encoding){case"utf16le":this.text=c,this.end=l,t=4;break;case"utf8":this.fillLast=a,t=4;break;case"base64":this.text=h,this.end=u,t=3;break;default:return this.write=d,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=s.allocUnsafe(t)}function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function a(e){var t=this.lastTotal-this.lastNeed,i=function(e,t,i){if(128!=(192&t[0]))return e.lastNeed=0,"�";if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1]))return e.lastNeed=1,"�";if(e.lastNeed>2&&t.length>2&&128!=(192&t[2]))return e.lastNeed=2,"�"}}(this,e);return void 0!==i?i:this.lastNeed<=e.length?(e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(e.copy(this.lastChar,t,0,e.length),void(this.lastNeed-=e.length))}function c(e,t){if((e.length-t)%2==0){var i=e.toString("utf16le",t);if(i){var s=i.charCodeAt(i.length-1);if(s>=55296&&s<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],i.slice(0,-1)}return i}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function l(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var i=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,i)}return t}function h(e,t){var i=(e.length-t)%3;return 0===i?e.toString("base64",t):(this.lastNeed=3-i,this.lastTotal=3,1===i?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-i))}function u(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function d(e){return e.toString(this.encoding)}function p(e){return e&&e.length?this.write(e):""}t.StringDecoder=r,r.prototype.write=function(e){if(0===e.length)return"";var t,i;if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return"";i=this.lastNeed,this.lastNeed=0}else i=0;return i<e.length?t?t+this.text(e,i):this.text(e,i):t||""},r.prototype.end=function(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"�":t},r.prototype.text=function(e,t){var i=function(e,t,i){var s=t.length-1;if(s<i)return 0;var n=o(t[s]);if(n>=0)return n>0&&(e.lastNeed=n-1),n;if(--s<i||-2===n)return 0;if((n=o(t[s]))>=0)return n>0&&(e.lastNeed=n-2),n;if(--s<i||-2===n)return 0;if((n=o(t[s]))>=0)return n>0&&(2===n?n=0:e.lastNeed=n-3),n;return 0}(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=i;var s=e.length-(i-this.lastNeed);return e.copy(this.lastChar,0,s),e.toString("utf8",t,s)},r.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length}},function(e,t,i){"use strict";e.exports=o;var s=i(20),n=Object.create(i(25));function r(e,t){var i=this._transformState;i.transforming=!1;var s=i.writecb;if(!s)return this.emit("error",new Error("write callback called multiple times"));i.writechunk=null,i.writecb=null,null!=t&&this.push(t),s(e);var n=this._readableState;n.reading=!1,(n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}function o(e){if(!(this instanceof o))return new o(e);s.call(this,e),this._transformState={afterTransform:r.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&("function"==typeof e.transform&&(this._transform=e.transform),"function"==typeof e.flush&&(this._flush=e.flush)),this.on("prefinish",a)}function a(){var e=this;"function"==typeof this._flush?this._flush((function(t,i){c(e,t,i)})):c(this,null,null)}function c(e,t,i){if(t)return e.emit("error",t);if(null!=i&&e.push(i),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}n.inherits=i(22),n.inherits(o,s),o.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},o.prototype._transform=function(e,t,i){throw new Error("_transform() is not implemented")},o.prototype._write=function(e,t,i){var s=this._transformState;if(s.writecb=i,s.writechunk=e,s.writeencoding=t,!s.transforming){var n=this._readableState;(s.needTransform||n.needReadable||n.length<n.highWaterMark)&&this._read(n.highWaterMark)}},o.prototype._read=function(e){var t=this._transformState;null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0},o.prototype._destroy=function(e,t){var i=this;s.prototype._destroy.call(this,e,(function(e){t(e),i.emit("close")}))}},function(e,t,i){"use strict";const s=i(11);class ActivityFlags extends s{}ActivityFlags.FLAGS={INSTANCE:1,JOIN:2,SPECTATE:4,JOIN_REQUEST:8,SYNC:16,PLAY:32},e.exports=ActivityFlags},function(e,t,i){"use strict";const s=i(49),{Events:n}=i(0);e.exports=class MessageCollector extends s{constructor(e,t,i={}){super(e.client,t,i),this.channel=e,this.received=0;const s=e=>{for(const t of e.values())this.handleDispose(t)};this._handleChannelDeletion=this._handleChannelDeletion.bind(this),this._handleGuildDeletion=this._handleGuildDeletion.bind(this),0!==this.client.getMaxListeners()&&this.client.setMaxListeners(this.client.getMaxListeners()+1),this.client.on(n.MESSAGE_CREATE,this.handleCollect),this.client.on(n.MESSAGE_DELETE,this.handleDispose),this.client.on(n.MESSAGE_BULK_DELETE,s),this.client.on(n.CHANNEL_DELETE,this._handleChannelDeletion),this.client.on(n.GUILD_DELETE,this._handleGuildDeletion),this.once("end",()=>{this.client.removeListener(n.MESSAGE_CREATE,this.handleCollect),this.client.removeListener(n.MESSAGE_DELETE,this.handleDispose),this.client.removeListener(n.MESSAGE_BULK_DELETE,s),this.client.removeListener(n.CHANNEL_DELETE,this._handleChannelDeletion),this.client.removeListener(n.GUILD_DELETE,this._handleGuildDeletion),0!==this.client.getMaxListeners()&&this.client.setMaxListeners(this.client.getMaxListeners()-1)})}collect(e){return e.channel.id!==this.channel.id?null:(this.received++,e.id)}dispose(e){return e.channel.id===this.channel.id?e.id:null}endReason(){return this.options.max&&this.collected.size>=this.options.max?"limit":this.options.maxProcessed&&this.received===this.options.maxProcessed?"processedLimit":null}_handleChannelDeletion(e){e.id===this.channel.id&&this.stop("channelDelete")}_handleGuildDeletion(e){this.channel.guild&&e.id===this.channel.guild.id&&this.stop("guildDelete")}}},function(e,t,i){"use strict";const{TypeError:s}=i(3),n=i(2);e.exports=class GuildMemberRoleManager{constructor(e){this.member=e,this.guild=e.guild,Object.defineProperty(this,"client",{value:e.client})}get _roles(){const e=this.guild.roles.everyone;return this.guild.roles.cache.filter(e=>this.member._roles.includes(e.id)).set(e.id,e)}get cache(){return this._roles}get hoist(){const e=this._roles.filter(e=>e.hoist);return e.size?e.reduce((e,t)=>!e||t.comparePositionTo(e)>0?t:e):null}get color(){const e=this._roles.filter(e=>e.color);return e.size?e.reduce((e,t)=>!e||t.comparePositionTo(e)>0?t:e):null}get highest(){return this._roles.reduce((e,t)=>t.comparePositionTo(e)>0?t:e,this._roles.first())}async add(e,t){if(e instanceof n||Array.isArray(e)){if((e=e.map(e=>this.guild.roles.resolve(e))).includes(null))throw new s("INVALID_TYPE","roles","Array or Collection of Roles or Snowflakes",!0);const i=[...new Set(e.concat(...this._roles.values()))];return this.set(i,t)}{if(null===(e=this.guild.roles.resolve(e)))throw new s("INVALID_TYPE","roles","Role, Snowflake or Array or Collection of Roles or Snowflakes",!0);await this.client.api.guilds[this.guild.id].members[this.member.id].roles[e.id].put({reason:t});const i=this.member._clone();return i._roles=[...this._roles.keys(),e.id],i}}async remove(e,t){if(e instanceof n||Array.isArray(e)){if((e=e.map(e=>this.guild.roles.resolve(e))).includes(null))throw new s("INVALID_TYPE","roles","Array or Collection of Roles or Snowflakes",!0);const i=this._roles.filter(t=>!e.includes(t));return this.set(i,t)}{if(null===(e=this.guild.roles.resolve(e)))throw new s("INVALID_TYPE","roles","Array or Collection of Roles or Snowflakes",!0);await this.client.api.guilds[this.guild.id].members[this.member.id].roles[e.id].delete({reason:t});const i=this.member._clone(),n=this._roles.filter(t=>t.id!==e.id);return i._roles=[...n.keys()],i}}set(e,t){return this.member.edit({roles:e},t)}clone(){const e=new this.constructor(this.member);return e.member._roles=[...this._roles.keyArray()],e}}},function(e,t,i){"use strict";const s=i(5),n=i(74),r=i(2),o=i(7);e.exports=class Team extends s{constructor(e,t){super(e),this._patch(t)}_patch(e){this.id=e.id,this.name=e.name,this.icon=e.icon||null,this.ownerID=e.owner_user_id||null,this.members=new r;for(const t of e.members){const e=new n(this,t);this.members.set(e.id,e)}}get owner(){return this.members.get(this.ownerID)||null}get createdTimestamp(){return o.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}iconURL({format:e,size:t}={}){return this.icon?this.client.rest.cdn.TeamIcon(this.id,this.icon,{format:e,size:t}):null}toString(){return this.name}toJSON(){return super.toJSON({createdTimestamp:!0})}}},function(e,t,i){"use strict";const s=i(5),{MembershipStates:n}=i(0);e.exports=class TeamMember extends s{constructor(e,t){super(e.client),this.team=e,this._patch(t)}_patch(e){this.permissions=e.permissions,this.membershipState=n[e.membership_state],this.user=this.client.users.add(e.user)}get id(){return this.user.id}toString(){return this.user.toString()}}},function(e,t,i){"use strict";const s=i(2),{ChannelTypes:n}=i(0),r=i(4);class MessageMentions{constructor(e,t,i,r,o){if(Object.defineProperty(this,"client",{value:e.client}),Object.defineProperty(this,"guild",{value:e.guild}),Object.defineProperty(this,"_content",{value:e.content}),this.everyone=Boolean(r),t)if(t instanceof s)this.users=new s(t);else{this.users=new s;for(const i of t){i.member&&e.guild&&e.guild.members.add(Object.assign(i.member,{user:i}));const t=e.client.users.add(i);this.users.set(t.id,t)}}else this.users=new s;if(i)if(i instanceof s)this.roles=new s(i);else{this.roles=new s;for(const t of i){const i=e.channel.guild.roles.cache.get(t);i&&this.roles.set(i.id,i)}}else this.roles=new s;if(this._members=null,this._channels=null,o)if(o instanceof s)this.crosspostedChannels=new s(o);else{this.crosspostedChannels=new s;const e=Object.keys(n);for(const t of o){const i=e[t.type];this.crosspostedChannels.set(t.id,{channelID:t.id,guildID:t.guild_id,type:i?i.toLowerCase():"unknown",name:t.name})}}else this.crosspostedChannels=new s}get members(){return this._members?this._members:this.guild?(this._members=new s,this.users.forEach(e=>{const t=this.guild.member(e);t&&this._members.set(t.user.id,t)}),this._members):null}get channels(){if(this._channels)return this._channels;let e;for(this._channels=new s;null!==(e=this.constructor.CHANNELS_PATTERN.exec(this._content));){const t=this.client.channels.cache.get(e[1]);t&&this._channels.set(t.id,t)}return this._channels}has(e,{ignoreDirect:t=!1,ignoreRoles:s=!1,ignoreEveryone:n=!1}={}){if(!n&&this.everyone)return!0;const r=i(10);if(!s&&e instanceof r)for(const t of this.roles.values())if(e.roles.cache.has(t.id))return!0;if(!t){const t=e.id||e;return this.users.has(t)||this.channels.has(t)||this.roles.has(t)}return!1}toJSON(){return r.flatten(this,{members:!0,channels:!0})}}MessageMentions.EVERYONE_PATTERN=/@(everyone|here)/g,MessageMentions.USERS_PATTERN=/<@!?(\d{17,19})>/g,MessageMentions.ROLES_PATTERN=/<@&(\d{17,19})>/g,MessageMentions.CHANNELS_PATTERN=/<#(\d{17,19})>/g,e.exports=MessageMentions},function(e,t,i){"use strict";const s=i(49),n=i(2),{Events:r}=i(0);class ReactionCollector extends s{constructor(e,t,i={}){super(e.client,t,i),this.message=e,this.users=new n,this.total=0,this.empty=this.empty.bind(this),this._handleChannelDeletion=this._handleChannelDeletion.bind(this),this._handleGuildDeletion=this._handleGuildDeletion.bind(this),this._handleMessageDeletion=this._handleMessageDeletion.bind(this),0!==this.client.getMaxListeners()&&this.client.setMaxListeners(this.client.getMaxListeners()+1),this.client.on(r.MESSAGE_REACTION_ADD,this.handleCollect),this.client.on(r.MESSAGE_REACTION_REMOVE,this.handleDispose),this.client.on(r.MESSAGE_REACTION_REMOVE_ALL,this.empty),this.client.on(r.MESSAGE_DELETE,this._handleMessageDeletion),this.client.on(r.CHANNEL_DELETE,this._handleChannelDeletion),this.client.on(r.GUILD_DELETE,this._handleGuildDeletion),this.once("end",()=>{this.client.removeListener(r.MESSAGE_REACTION_ADD,this.handleCollect),this.client.removeListener(r.MESSAGE_REACTION_REMOVE,this.handleDispose),this.client.removeListener(r.MESSAGE_REACTION_REMOVE_ALL,this.empty),this.client.removeListener(r.MESSAGE_DELETE,this._handleMessageDeletion),this.client.removeListener(r.CHANNEL_DELETE,this._handleChannelDeletion),this.client.removeListener(r.GUILD_DELETE,this._handleGuildDeletion),0!==this.client.getMaxListeners()&&this.client.setMaxListeners(this.client.getMaxListeners()-1)}),this.on("collect",(e,t)=>{this.total++,this.users.set(t.id,t)}),this.on("remove",(e,t)=>{this.total--,this.collected.some(e=>e.users.cache.has(t.id))||this.users.delete(t.id)})}collect(e){return e.message.id!==this.message.id?null:ReactionCollector.key(e)}dispose(e,t){return e.message.id!==this.message.id?null:(this.collected.has(ReactionCollector.key(e))&&this.users.has(t.id)&&this.emit("remove",e,t),e.count?null:ReactionCollector.key(e))}empty(){this.total=0,this.collected.clear(),this.users.clear(),this.checkEnd()}endReason(){return this.options.max&&this.total>=this.options.max?"limit":this.options.maxEmojis&&this.collected.size>=this.options.maxEmojis?"emojiLimit":this.options.maxUsers&&this.users.size>=this.options.maxUsers?"userLimit":null}_handleMessageDeletion(e){e.id===this.message.id&&this.stop("messageDelete")}_handleChannelDeletion(e){e.id===this.message.channel.id&&this.stop("channelDelete")}_handleGuildDeletion(e){this.message.guild&&e.id===this.message.guild.id&&this.stop("guildDelete")}static key(e){return e.emoji.id||e.emoji.name}}e.exports=ReactionCollector},function(e,t,i){"use strict";const s=i(6),{Error:n}=i(3),r=i(2);e.exports=class ReactionUserManager extends s{constructor(e,t,i){super(e,t,{name:"User"}),this.reaction=i}async fetch({limit:e=100,after:t,before:i}={}){const s=this.reaction.message,n=await this.client.api.channels[s.channel.id].messages[s.id].reactions[this.reaction.emoji.identifier].get({query:{limit:e,before:i,after:t}}),o=new r;for(const e of n){const t=this.client.users.add(e);this.cache.set(t.id,t),o.set(t.id,t)}return o}remove(e=this.reaction.message.client.user){const t=this.reaction.message,i=t.client.users.resolveID(e);return i?t.client.api.channels[t.channel.id].messages[t.id].reactions[this.reaction.emoji.identifier][i===t.client.user.id?"@me":i].delete().then(()=>this.reaction):Promise.reject(new n("REACTION_RESOLVE_USER"))}}},function(e,t,i){"use strict";const s=i(11);class UserFlags extends s{}UserFlags.FLAGS={DISCORD_EMPLOYEE:1,DISCORD_PARTNER:2,HYPESQUAD_EVENTS:4,BUGHUNTER_LEVEL_1:8,HOUSE_BRAVERY:64,HOUSE_BRILLIANCE:128,HOUSE_BALANCE:256,EARLY_SUPPORTER:512,TEAM_USER:1024,SYSTEM:4096,BUGHUNTER_LEVEL_2:16384,VERIFIED_BOT:65536,VERIFIED_DEVELOPER:1<<17},e.exports=UserFlags},function(e,t,i){"use strict";const s=i(17),{Error:n}=i(3),r=i(2),{browser:o}=i(0),a=i(8);e.exports=class VoiceChannel extends s{_patch(e){super._patch(e),this.bitrate=e.bitrate,this.userLimit=e.user_limit}get members(){const e=new r;for(const t of this.guild.voiceStates.cache.values())t.channelID===this.id&&t.member&&e.set(t.id,t.member);return e}get full(){return this.userLimit>0&&this.members.size>=this.userLimit}get deletable(){return super.deletable&&this.permissionsFor(this.client.user).has(a.FLAGS.CONNECT,!1)}get editable(){return this.manageable&&this.permissionsFor(this.client.user).has(a.FLAGS.CONNECT,!1)}get joinable(){return!o&&(!!this.viewable&&(!!this.permissionsFor(this.client.user).has(a.FLAGS.CONNECT,!1)&&!(this.full&&!this.permissionsFor(this.client.user).has(a.FLAGS.MOVE_MEMBERS,!1))))}get speakable(){return this.permissionsFor(this.client.user).has(a.FLAGS.SPEAK,!1)}setBitrate(e,t){return this.edit({bitrate:e},t)}setUserLimit(e,t){return this.edit({userLimit:e},t)}join(){return o?Promise.reject(new n("VOICE_NO_BROWSER")):this.client.voice.joinChannel(this)}leave(){if(o)return;const e=this.client.voice.connections.get(this.guild.id);e&&e.channel.id===this.id&&e.disconnect()}}},function(e,t,i){"use strict";const s=i(17);e.exports=class CategoryChannel extends s{get children(){return this.guild.channels.cache.filter(e=>e.parentID===this.id)}}},function(e,t,i){"use strict";const s=i(41);e.exports=class NewsChannel extends s{_patch(e){super._patch(e),this.rateLimitPerUser=void 0}}},function(e,t,i){"use strict";const s=i(17);e.exports=class StoreChannel extends s{_patch(e){super._patch(e),this.nsfw=e.nsfw}}},function(e,t,i){"use strict";const s=i(54),n=i(12),r=i(2),{PartialTypes:o}=i(0),a=i(7),c=i(4),l={ALL:"ALL",GUILD:"GUILD",CHANNEL:"CHANNEL",USER:"USER",ROLE:"ROLE",INVITE:"INVITE",WEBHOOK:"WEBHOOK",EMOJI:"EMOJI",MESSAGE:"MESSAGE",INTEGRATION:"INTEGRATION",UNKNOWN:"UNKNOWN"},h={ALL:null,GUILD_UPDATE:1,CHANNEL_CREATE:10,CHANNEL_UPDATE:11,CHANNEL_DELETE:12,CHANNEL_OVERWRITE_CREATE:13,CHANNEL_OVERWRITE_UPDATE:14,CHANNEL_OVERWRITE_DELETE:15,MEMBER_KICK:20,MEMBER_PRUNE:21,MEMBER_BAN_ADD:22,MEMBER_BAN_REMOVE:23,MEMBER_UPDATE:24,MEMBER_ROLE_UPDATE:25,MEMBER_MOVE:26,MEMBER_DISCONNECT:27,BOT_ADD:28,ROLE_CREATE:30,ROLE_UPDATE:31,ROLE_DELETE:32,INVITE_CREATE:40,INVITE_UPDATE:41,INVITE_DELETE:42,WEBHOOK_CREATE:50,WEBHOOK_UPDATE:51,WEBHOOK_DELETE:52,EMOJI_CREATE:60,EMOJI_UPDATE:61,EMOJI_DELETE:62,MESSAGE_DELETE:72,MESSAGE_BULK_DELETE:73,MESSAGE_PIN:74,MESSAGE_UNPIN:75,INTEGRATION_CREATE:80,INTEGRATION_UPDATE:81,INTEGRATION_DELETE:82};class GuildAuditLogs{constructor(e,t){if(t.users)for(const i of t.users)e.client.users.add(i);if(this.webhooks=new r,t.webhooks)for(const i of t.webhooks)this.webhooks.set(i.id,new n(e.client,i));if(this.integrations=new r,t.integrations)for(const i of t.integrations)this.integrations.set(i.id,new s(e.client,i,e));this.entries=new r;for(const i of t.audit_log_entries){const t=new GuildAuditLogsEntry(this,e,i);this.entries.set(t.id,t)}}static build(...e){const t=new GuildAuditLogs(...e);return Promise.all(t.entries.map(e=>e.target)).then(()=>t)}static targetType(e){return e<10?l.GUILD:e<20?l.CHANNEL:e<30?l.USER:e<40?l.ROLE:e<50?l.INVITE:e<60?l.WEBHOOK:e<70?l.EMOJI:e<80?l.MESSAGE:e<90?l.INTEGRATION:l.UNKNOWN}static actionType(e){return[h.CHANNEL_CREATE,h.CHANNEL_OVERWRITE_CREATE,h.MEMBER_BAN_REMOVE,h.BOT_ADD,h.ROLE_CREATE,h.INVITE_CREATE,h.WEBHOOK_CREATE,h.EMOJI_CREATE,h.MESSAGE_PIN,h.INTEGRATION_CREATE].includes(e)?"CREATE":[h.CHANNEL_DELETE,h.CHANNEL_OVERWRITE_DELETE,h.MEMBER_KICK,h.MEMBER_PRUNE,h.MEMBER_BAN_ADD,h.MEMBER_DISCONNECT,h.ROLE_DELETE,h.INVITE_DELETE,h.WEBHOOK_DELETE,h.EMOJI_DELETE,h.MESSAGE_DELETE,h.MESSAGE_BULK_DELETE,h.MESSAGE_UNPIN,h.INTEGRATION_DELETE].includes(e)?"DELETE":[h.GUILD_UPDATE,h.CHANNEL_UPDATE,h.CHANNEL_OVERWRITE_UPDATE,h.MEMBER_UPDATE,h.MEMBER_ROLE_UPDATE,h.MEMBER_MOVE,h.ROLE_UPDATE,h.INVITE_UPDATE,h.WEBHOOK_UPDATE,h.EMOJI_UPDATE,h.INTEGRATION_UPDATE].includes(e)?"UPDATE":"ALL"}toJSON(){return c.flatten(this)}}class GuildAuditLogsEntry{constructor(e,t,i){const r=GuildAuditLogs.targetType(i.action_type);switch(this.targetType=r,this.actionType=GuildAuditLogs.actionType(i.action_type),this.action=Object.keys(h).find(e=>h[e]===i.action_type),this.reason=i.reason||null,this.executor=t.client.options.partials.includes(o.USER)?t.client.users.add({id:i.user_id}):t.client.users.cache.get(i.user_id),this.changes=i.changes?i.changes.map(e=>({key:e.key,old:e.old_value,new:e.new_value})):null,this.id=i.id,this.extra=null,i.action_type){case h.MEMBER_PRUNE:this.extra={removed:Number(i.options.members_removed),days:Number(i.options.delete_member_days)};break;case h.MEMBER_MOVE:case h.MESSAGE_DELETE:case h.MESSAGE_BULK_DELETE:this.extra={channel:t.channels.cache.get(i.options.channel_id)||{id:i.options.channel_id},count:Number(i.options.count)};break;case h.MESSAGE_PIN:case h.MESSAGE_UNPIN:this.extra={channel:t.client.channels.cache.get(i.options.channel_id)||{id:i.options.channel_id},messageID:i.options.message_id};break;case h.MEMBER_DISCONNECT:this.extra={count:Number(i.options.count)};break;case h.CHANNEL_OVERWRITE_CREATE:case h.CHANNEL_OVERWRITE_UPDATE:case h.CHANNEL_OVERWRITE_DELETE:switch(i.options.type){case"member":this.extra=t.members.cache.get(i.options.id)||{id:i.options.id,type:"member"};break;case"role":this.extra=t.roles.cache.get(i.options.id)||{id:i.options.id,name:i.options.role_name,type:"role"}}}this.target=null,r===l.UNKNOWN?(this.target=this.changes.reduce((e,t)=>(e[t.key]=t.new||t.old,e),{}),this.target.id=i.target_id):r===l.USER&&i.target_id?this.target=t.client.options.partials.includes(o.USER)?t.client.users.add({id:i.target_id}):t.client.users.cache.get(i.target_id):r===l.GUILD?this.target=t.client.guilds.cache.get(i.target_id):r===l.WEBHOOK?this.target=e.webhooks.get(i.target_id)||new n(t.client,this.changes.reduce((e,t)=>(e[t.key]=t.new||t.old,e),{id:i.target_id,guild_id:t.id})):r===l.INVITE?this.target=t.members.fetch(t.client.user.id).then(e=>{if(e.permissions.has("MANAGE_GUILD")){const e=this.changes.find(e=>"code"===e.key);return t.fetchInvites().then(t=>{this.target=t.find(t=>t.code===(e.new||e.old))})}return this.target=this.changes.reduce((e,t)=>(e[t.key]=t.new||t.old,e),{}),this.target}):r===l.MESSAGE?this.target=i.action_type===h.MESSAGE_BULK_DELETE?t.channels.cache.get(i.target_id)||{id:i.target_id}:t.client.users.cache.get(i.target_id):r===l.INTEGRATION?this.target=e.integrations.get(i.target_id)||new s(t.client,this.changes.reduce((e,t)=>(e[t.key]=t.new||t.old,e),{id:i.target_id}),t):i.target_id&&(this.target=t[`${r.toLowerCase()}s`].cache.get(i.target_id)||{id:i.target_id})}get createdTimestamp(){return a.deconstruct(this.id).timestamp}get createdAt(){return new Date(this.createdTimestamp)}toJSON(){return c.flatten(this,{createdTimestamp:!0})}}GuildAuditLogs.Actions=h,GuildAuditLogs.Targets=l,GuildAuditLogs.Entry=GuildAuditLogsEntry,e.exports=GuildAuditLogs},function(e,t,i){"use strict";const s=i(6),n=i(17),r=i(42),{ChannelTypes:o}=i(0);e.exports=class GuildChannelManager extends s{constructor(e,t){super(e.client,t,n),this.guild=e}add(e){const t=this.cache.get(e.id);return t||(this.cache.set(e.id,e),e)}async create(e,t={}){let{type:i,topic:s,nsfw:n,bitrate:a,userLimit:c,parent:l,permissionOverwrites:h,position:u,rateLimitPerUser:d,reason:p}=t;l&&(l=this.client.channels.resolveID(l)),h&&(h=h.map(e=>r.resolve(e,this.guild)));const f=await this.client.api.guilds(this.guild.id).channels.post({data:{name:e,topic:s,type:i?o[i.toUpperCase()]:o.TEXT,nsfw:n,bitrate:a,user_limit:c,parent_id:l,position:u,permission_overwrites:h,rate_limit_per_user:d},reason:p});return this.client.actions.ChannelCreate.handle(f).channel}}},function(e,t,i){"use strict";const s=i(6),{Error:n,TypeError:r}=i(3),o=i(10),a=i(2),{Events:c,OPCodes:l}=i(0);e.exports=class GuildMemberManager extends s{constructor(e,t){super(e.client,t,o),this.guild=e}add(e,t=!0){return super.add(e,t,{id:e.user.id,extras:[this.guild]})}resolve(e){const t=super.resolve(e);if(t)return t;const i=this.client.users.resolveID(e);return i?super.resolve(i):null}resolveID(e){const t=super.resolveID(e);if(t)return t;const i=this.client.users.resolveID(e);return this.cache.has(i)?i:null}fetch(e){if(!e)return this._fetchMany();const t=this.client.users.resolveID(e);if(t)return this._fetchSingle({user:t,cache:!0});if(e.user){if(Array.isArray(e.user))return e.user=e.user.map(e=>this.client.users.resolveID(e)),this._fetchMany(e);if(e.user=this.client.users.resolveID(e.user),!e.limit&&!e.withPresences)return this._fetchSingle(e)}return this._fetchMany(e)}prune({days:e=7,dry:t=!1,count:i=!0,reason:s}={}){if("number"!=typeof e)throw new r("PRUNE_DAYS_TYPE");return this.client.api.guilds(this.guild.id).prune[t?"get":"post"]({query:{days:e,compute_prune_count:i},reason:s}).then(e=>e.pruned)}ban(e,t={days:0}){t.days&&(t["delete-message-days"]=t.days);const i=this.client.users.resolveID(e);return i?this.client.api.guilds(this.guild.id).bans[i].put({query:t}).then(()=>{if(e instanceof o)return e;const t=this.client.users.resolve(i);if(t){return this.resolve(t)||t}return i}):Promise.reject(new n("BAN_RESOLVE_ID",!0))}unban(e,t){const i=this.client.users.resolveID(e);return i?this.client.api.guilds(this.guild.id).bans[i].delete({reason:t}).then(()=>this.client.users.resolve(e)):Promise.reject(new n("BAN_RESOLVE_ID"))}_fetchSingle({user:e,cache:t}){const i=this.cache.get(e);return i&&!i.partial?Promise.resolve(i):this.client.api.guilds(this.guild.id).members(e).get().then(e=>this.add(e,t))}_fetchMany({limit:e=0,withPresences:t=!1,user:i,query:s,time:r=12e4}={}){return new Promise((o,h)=>{if(!(this.guild.memberCount!==this.cache.size||s||e||t||i))return void o(this.cache);s||i||(s=""),this.guild.shard.send({op:l.REQUEST_GUILD_MEMBERS,d:{guild_id:this.guild.id,presences:t,user_ids:i,query:s,limit:e}});const u=new a,d=s||e||t||i,p=(t,s)=>{if(s.id===this.guild.id){f.refresh();for(const e of t.values())d&&u.set(e.id,e);if(this.guild.memberCount<=this.cache.size||d&&t.size<1e3||e&&u.size>=e){this.guild.client.removeListener(c.GUILD_MEMBERS_CHUNK,p);let e=d?u:this.cache;i&&!Array.isArray(i)&&e.size&&(e=e.first()),o(e)}}},f=this.guild.client.setTimeout(()=>{this.guild.client.removeListener(c.GUILD_MEMBERS_CHUNK,p),h(new n("GUILD_MEMBERS_TIMEOUT"))},r);this.guild.client.on(c.GUILD_MEMBERS_CHUNK,p)})}}},function(e,t,i){"use strict";const s=i(6),{Presence:n}=i(13);e.exports=class PresenceManager extends s{constructor(e,t){super(e,t,n)}add(e,t){const i=this.cache.get(e.user.id);return i?i.patch(e):super.add(e,t,{id:e.user.id})}resolve(e){const t=super.resolve(e);if(t)return t;const i=this.client.users.resolveID(e);return super.resolve(i)||null}resolveID(e){const t=super.resolveID(e);if(t)return t;const i=this.client.users.resolveID(e);return this.cache.has(i)?i:null}}},function(e,t,i){"use strict";const s=i(6),n=i(19),r=i(8),{resolveColor:o}=i(4);e.exports=class RoleManager extends s{constructor(e,t){super(e.client,t,n),this.guild=e}add(e,t){return super.add(e,t,{extras:[this.guild]})}async fetch(e,t=!0){if(e){const t=this.cache.get(e);if(t)return t}const i=await this.client.api.guilds(this.guild.id).roles.get();for(const e of i)this.add(e,t);return e?this.cache.get(e)||null:this}create({data:e={},reason:t}={}){return e.color&&(e.color=o(e.color)),e.permissions&&(e.permissions=r.resolve(e.permissions)),this.guild.client.api.guilds(this.guild.id).roles.post({data:e,reason:t}).then(i=>{const{role:s}=this.client.actions.GuildRoleCreate.handle({guild_id:this.guild.id,role:i});return e.position?s.setPosition(e.position,t):s})}get everyone(){return this.cache.get(this.guild.id)}get highest(){return this.cache.reduce((e,t)=>t.comparePositionTo(e)>0?t:e,this.cache.first())}}},function(e,t,i){"use strict";const s=i(11);class SystemChannelFlags extends s{}SystemChannelFlags.FLAGS={WELCOME_MESSAGE_DISABLED:1,BOOST_MESSAGE_DISABLED:2},e.exports=SystemChannelFlags},function(e,t,i){"use strict";const{Presence:s}=i(13),{TypeError:n}=i(3),r=i(2),{ActivityTypes:o,OPCodes:a}=i(0);e.exports=class ClientPresence extends s{constructor(e,t={}){super(e,Object.assign(t,{status:"online",user:{id:null}}))}async set(e){const t=await this._parse(e);if(this.patch(t),void 0===e.shardID)this.client.ws.broadcast({op:a.STATUS_UPDATE,d:t});else if(Array.isArray(e.shardID))for(const i of e.shardID)this.client.ws.shards.get(i).send({op:a.STATUS_UPDATE,d:t});else this.client.ws.shards.get(e.shardID).send({op:a.STATUS_UPDATE,d:t});return this}async _parse({status:e,since:t,afk:i,activity:s}){const a=s&&(s.application?s.application.id||s.application:null);let c=new r;if(s){if("string"!=typeof s.name)throw new n("INVALID_TYPE","name","string");if(s.type||(s.type=0),s.assets&&a)try{const e=await this.client.api.oauth2.applications(a).assets.get();for(const t of e)c.set(t.name,t.id)}catch{}}const l={afk:null!=i&&i,since:null!=t?t:null,status:e||this.status,game:s?{type:s.type,name:s.name,url:s.url,details:s.details||void 0,state:s.state||void 0,assets:s.assets?{large_text:s.assets.largeText||void 0,small_text:s.assets.smallText||void 0,large_image:c.get(s.assets.largeImage)||s.assets.largeImage,small_image:c.get(s.assets.smallImage)||s.assets.smallImage}:void 0,timestamps:s.timestamps||void 0,party:s.party||void 0,application_id:a||void 0,secrets:s.secrets||void 0,instance:s.instance||void 0}:null};return(e||i||t)&&!s&&(l.game=this.activities[0]||null),l.game&&(l.game.type="number"==typeof l.game.type?l.game.type:o.indexOf(l.game.type)),l}}},function(e,t,i){"use strict";const{browser:s}=i(0);let n,r;try{n=i(161),n.pack||(n=null)}catch{}s?(r=window.TextDecoder,t.WebSocket=window.WebSocket):(r=i(162).TextDecoder,t.WebSocket=i(165));const o=new r;t.encoding=n?"etf":"json",t.pack=n?n.pack:JSON.stringify,t.unpack=(e,i)=>"json"===t.encoding||"json"===i?("string"!=typeof e&&(e=o.decode(e)),JSON.parse(e)):(Buffer.isBuffer(e)||(e=Buffer.from(new Uint8Array(e))),n.unpack(e)),t.create=(e,i={},...n)=>{const[r,o]=e.split("?");i.encoding=t.encoding,i=new URLSearchParams(i),o&&new URLSearchParams(o).forEach((e,t)=>i.set(t,e));const a=new t.WebSocket(`${r}?${i}`,...n);return s&&(a.binaryType="arraybuffer"),a};for(const e of["CONNECTING","OPEN","CLOSING","CLOSED"])t[e]=t.WebSocket[e]},function(e,t,i){"use strict";const{WSEvents:s}=i(0),n={};for(const e of Object.keys(s))try{n[e]=i(167)(`./${e}.js`)}catch{}e.exports=n},function(e,t,i){"use strict";const s=i(9),n=i(23);class ClientUser extends(n.get("User")){constructor(e,t){super(e,t),this._typing=new Map}_patch(e){super._patch(e),"verified"in e&&(this.verified=e.verified),"mfa_enabled"in e?this.mfaEnabled="boolean"==typeof e.mfa_enabled?e.mfa_enabled:null:void 0===this.mfaEnabled&&(this.mfaEnabled=null),e.token&&(this.client.token=e.token)}get presence(){return this.client.presence}edit(e){return this.client.api.users("@me").patch({data:e}).then(e=>{this.client.token=e.token;const{updated:t}=this.client.actions.UserUpdate.handle(e);return t||this})}setUsername(e){return this.edit({username:e})}async setAvatar(e){return this.edit({avatar:await s.resolveImage(e)})}setPresence(e){return this.client.presence.set(e)}setStatus(e,t){return this.setPresence({status:e,shardID:t})}setActivity(e,t={}){if(!e)return this.setPresence({activity:null,shardID:t.shardID});const i=Object.assign({},t,"object"==typeof e?e:{name:e});return this.setPresence({activity:i,shardID:i.shardID})}setAFK(e){return this.setPresence({afk:e})}}e.exports=ClientUser},function(e,t,i){"use strict";const s=i(6),n=i(16),{Events:r}=i(0);e.exports=class ChannelManager extends s{constructor(e,t){super(e,t,n)}add(e,t,i=!0){const s=this.cache.get(e.id);if(s)return s._patch&&i&&s._patch(e),t&&t.channels.add(s),s;const o=n.create(this.client,e,t);return o?(i&&this.cache.set(o.id,o),o):(this.client.emit(r.DEBUG,`Failed to find guild, or unknown type for channel ${e.id} ${e.type}`),null)}remove(e){const t=this.cache.get(e);t.guild&&t.guild.channels.cache.delete(e),this.cache.delete(e)}async fetch(e,t=!0){const i=this.cache.get(e);if(i&&!i.partial)return i;const s=await this.client.api.channels(e).get();return this.add(s,null,t)}}},function(e,t,i){"use strict";const s=i(6),n=i(53),r=i(17),o=i(24),a=i(10),c=i(18),l=i(19),{Events:h,VerificationLevels:u,DefaultMessageNotifications:d,ExplicitContentFilterLevels:p}=i(0),f=i(9),m=i(8),{resolveColor:g}=i(4);e.exports=class GuildManager extends s{constructor(e,t){super(e,t,n)}resolve(e){return e instanceof r||e instanceof a||e instanceof o||e instanceof l||e instanceof c&&e.guild?super.resolve(e.guild):super.resolve(e)}resolveID(e){return e instanceof r||e instanceof a||e instanceof o||e instanceof l||e instanceof c&&e.guild?super.resolveID(e.guild.id):super.resolveID(e)}async create(e,{channels:t=[],defaultMessageNotifications:i,explicitContentFilter:s,icon:n=null,region:r,roles:o=[],verificationLevel:a}={}){n=await f.resolveImage(n),void 0!==a&&"number"!=typeof a&&(a=u.indexOf(a)),void 0!==i&&"number"!=typeof i&&(i=d.indexOf(i)),void 0!==s&&"number"!=typeof s&&(s=p.indexOf(s));for(const e of t)if(e.parent_id=e.parentID,delete e.parentID,e.permissionOverwrites){for(const t of e.permissionOverwrites)t.allow&&(t.allow=m.resolve(t.allow)),t.deny&&(t.deny=m.resolve(t.deny));e.permission_overwrites=e.permissionOverwrites,delete e.permissionOverwrites}for(const e of o)e.color&&(e.color=g(e.color)),e.permissions&&(e.permissions=m.resolve(e.permissions));return new Promise((c,l)=>this.client.api.guilds.post({data:{name:e,region:r,icon:n,verification_level:a,default_message_notifications:i,explicit_content_filter:s,channels:t,roles:o}}).then(e=>{if(this.client.guilds.cache.has(e.id))return c(this.client.guilds.cache.get(e.id));const t=s=>{s.id===e.id&&(this.client.removeListener(h.GUILD_CREATE,t),this.client.clearTimeout(i),c(s))};this.client.on(h.GUILD_CREATE,t);const i=this.client.setTimeout(()=>{this.client.removeListener(h.GUILD_CREATE,t),c(this.client.guilds.add(e))},1e4)},l))}}},function(e,t,i){"use strict";const s=i(6),n=i(10),r=i(28),o=i(26);e.exports=class UserManager extends s{constructor(e,t){super(e,t,o)}resolve(e){return e instanceof n?e.user:e instanceof r?e.author:super.resolve(e)}resolveID(e){return e instanceof n?e.user.id:e instanceof r?e.author.id:super.resolveID(e)}async fetch(e,t=!0){const i=this.cache.get(e);if(i&&!i.partial)return i;const s=await this.client.api.users(e).get();return this.add(s,t)}}},function(e,t,i){"use strict";const s=i(11);class Intents extends s{}Intents.FLAGS={GUILDS:1,GUILD_MEMBERS:2,GUILD_BANS:4,GUILD_EMOJIS:8,GUILD_INTEGRATIONS:16,GUILD_WEBHOOKS:32,GUILD_INVITES:64,GUILD_VOICE_STATES:128,GUILD_PRESENCES:256,GUILD_MESSAGES:512,GUILD_MESSAGE_REACTIONS:1024,GUILD_MESSAGE_TYPING:2048,DIRECT_MESSAGES:4096,DIRECT_MESSAGE_REACTIONS:8192,DIRECT_MESSAGE_TYPING:16384},Intents.PRIVILEGED=Intents.FLAGS.GUILD_MEMBERS|Intents.FLAGS.GUILD_PRESENCES,Intents.ALL=Object.values(Intents.FLAGS).reduce((e,t)=>e|t,0),Intents.NON_PRIVILEGED=Intents.ALL&~Intents.PRIVILEGED,e.exports=Intents},function(e,t,i){"use strict";const s=i(4);e.exports={BaseClient:i(37),Client:i(107),Shard:i(206),ShardClientUtil:i(207),ShardingManager:i(208),WebhookClient:i(48),ActivityFlags:i(70),BitField:i(11),Collection:i(2),Constants:i(0),DataResolver:i(9),BaseManager:i(6),DiscordAPIError:i(61),HTTPError:i(62),MessageFlags:i(47),Intents:i(96),Permissions:i(8),Speaking:i(209),Snowflake:i(7),SnowflakeUtil:i(7),Structures:i(23),SystemChannelFlags:i(88),UserFlags:i(78),Util:s,version:i(58).version,ChannelManager:i(93),GuildChannelManager:i(84),GuildEmojiManager:i(57),GuildEmojiRoleManager:i(63),GuildMemberManager:i(85),GuildMemberRoleManager:i(72),GuildManager:i(94),ReactionUserManager:i(77),MessageManager:i(34),PresenceManager:i(86),RoleManager:i(87),UserManager:i(95),discordSort:s.discordSort,escapeMarkdown:s.escapeMarkdown,fetchRecommendedShards:s.fetchRecommendedShards,resolveColor:s.resolveColor,resolveString:s.resolveString,splitMessage:s.splitMessage,Base:i(5),Activity:i(13).Activity,APIMessage:i(30),BaseGuildEmoji:i(40),CategoryChannel:i(80),Channel:i(16),ClientApplication:i(50),get ClientUser(){return i(92)},Collector:i(49),DMChannel:i(39),Emoji:i(29),Guild:i(53),GuildAuditLogs:i(83),GuildChannel:i(17),GuildEmoji:i(24),GuildMember:i(10),GuildPreview:i(55),Integration:i(54),Invite:i(18),Message:i(28),MessageAttachment:i(43),MessageCollector:i(71),MessageEmbed:i(44),MessageMentions:i(75),MessageReaction:i(51),NewsChannel:i(81),PermissionOverwrites:i(42),Presence:i(13).Presence,ClientPresence:i(89),ReactionCollector:i(76),ReactionEmoji:i(52),RichPresenceAssets:i(13).RichPresenceAssets,Role:i(19),StoreChannel:i(82),Team:i(73),TeamMember:i(74),TextChannel:i(41),User:i(26),VoiceChannel:i(79),VoiceRegion:i(56),VoiceState:i(27),Webhook:i(12),WebSocket:i(90)}},function(e,t,i){"use strict";const{register:s}=i(59),n={CLIENT_INVALID_OPTION:(e,t)=>`The ${e} option must be ${t}`,CLIENT_INVALID_PROVIDED_SHARDS:"None of the provided shards were valid.",TOKEN_INVALID:"An invalid token was provided.",TOKEN_MISSING:"Request to use token, but token was unavailable to the client.",WS_CLOSE_REQUESTED:"WebSocket closed due to user request.",WS_CONNECTION_EXISTS:"There is already an existing WebSocket connection.",WS_NOT_OPEN:(e="data")=>`Websocket not open to send ${e}`,BITFIELD_INVALID:"Invalid bitfield flag or number.",SHARDING_INVALID:"Invalid shard settings were provided.",SHARDING_REQUIRED:"This session would have handled too many guilds - Sharding is required.",INVALID_INTENTS:"Invalid intent provided for WebSocket intents.",DISALLOWED_INTENTS:"Privileged intent provided is not enabled or whitelisted.",SHARDING_NO_SHARDS:"No shards have been spawned.",SHARDING_IN_PROCESS:"Shards are still being spawned.",SHARDING_ALREADY_SPAWNED:e=>`Already spawned ${e} shards.`,SHARDING_PROCESS_EXISTS:e=>`Shard ${e} already has an active process.`,SHARDING_READY_TIMEOUT:e=>`Shard ${e}'s Client took too long to become ready.`,SHARDING_READY_DISCONNECTED:e=>`Shard ${e}'s Client disconnected before becoming ready.`,SHARDING_READY_DIED:e=>`Shard ${e}'s process exited before its Client became ready.`,COLOR_RANGE:"Color must be within the range 0 - 16777215 (0xFFFFFF).",COLOR_CONVERT:"Unable to convert color to a number.",EMBED_FIELD_NAME:"MessageEmbed field names may not be empty.",EMBED_FIELD_VALUE:"MessageEmbed field values may not be empty.",FILE_NOT_FOUND:e=>`File could not be found: ${e}`,USER_NO_DMCHANNEL:"No DM Channel exists!",VOICE_INVALID_HEARTBEAT:"Tried to set voice heartbeat but no valid interval was specified.",VOICE_USER_MISSING:"Couldn't resolve the user to create stream.",VOICE_JOIN_CHANNEL:(e=!1)=>`You do not have permission to join this voice channel${e?"; it is full.":"."}`,VOICE_CONNECTION_TIMEOUT:"Connection not established within 15 seconds.",VOICE_TOKEN_ABSENT:"Token not provided from voice server packet.",VOICE_SESSION_ABSENT:"Session ID not supplied.",VOICE_INVALID_ENDPOINT:"Invalid endpoint received.",VOICE_NO_BROWSER:"Voice connections are not available in browsers.",VOICE_CONNECTION_ATTEMPTS_EXCEEDED:e=>`Too many connection attempts (${e}).`,VOICE_JOIN_SOCKET_CLOSED:"Tried to send join packet, but the WebSocket is not open.",VOICE_PLAY_INTERFACE_NO_BROADCAST:"A broadcast cannot be played in this context.",VOICE_PLAY_INTERFACE_BAD_TYPE:"Unknown stream type",VOICE_PRISM_DEMUXERS_NEED_STREAM:"To play a webm/ogg stream, you need to pass a ReadableStream.",VOICE_STATE_UNCACHED_MEMBER:"The member of this voice state is uncached.",VOICE_STATE_NOT_OWN:"You cannot self-deafen/mute on VoiceStates that do not belong to the ClientUser.",VOICE_STATE_INVALID_TYPE:e=>`${e} must be a boolean.`,UDP_SEND_FAIL:"Tried to send a UDP packet, but there is no socket available.",UDP_ADDRESS_MALFORMED:"Malformed UDP address or port.",UDP_CONNECTION_EXISTS:"There is already an existing UDP connection.",REQ_RESOURCE_TYPE:"The resource must be a string, Buffer or a valid file stream.",IMAGE_FORMAT:e=>`Invalid image format: ${e}`,IMAGE_SIZE:e=>`Invalid image size: ${e}`,MESSAGE_BULK_DELETE_TYPE:"The messages must be an Array, Collection, or number.",MESSAGE_NONCE_TYPE:"Message nonce must fit in an unsigned 64-bit integer.",TYPING_COUNT:"Count must be at least 1",SPLIT_MAX_LEN:"Chunk exceeds the max length and contains no split characters.",BAN_RESOLVE_ID:(e=!1)=>`Couldn't resolve the user ID to ${e?"ban":"unban"}.`,FETCH_BAN_RESOLVE_ID:"Couldn't resolve the user ID to fetch the ban.",PRUNE_DAYS_TYPE:"Days must be a number",GUILD_CHANNEL_RESOLVE:"Could not resolve channel to a guild channel.",GUILD_VOICE_CHANNEL_RESOLVE:"Could not resolve channel to a guild voice channel.",GUILD_CHANNEL_ORPHAN:"Could not find a parent to this guild channel.",GUILD_OWNED:"Guild is owned by the client.",GUILD_MEMBERS_TIMEOUT:"Members didn't arrive in time.",GUILD_UNCACHED_ME:"The client user as a member of this guild is uncached.",INVALID_TYPE:(e,t,i=!1)=>`Supplied ${e} is not a${i?"n":""} ${t}.`,WEBHOOK_MESSAGE:"The message was not sent by a webhook.",EMOJI_TYPE:"Emoji must be a string or GuildEmoji/ReactionEmoji",EMOJI_MANAGED:"Emoji is managed and has no Author.",MISSING_MANAGE_EMOJIS_PERMISSION:e=>`Client must have Manage Emoji permission in guild ${e} to see emoji authors.`,REACTION_RESOLVE_USER:"Couldn't resolve the user ID to remove from the reaction.",VANITY_URL:"This guild does not have the VANITY_URL feature enabled.",DELETE_GROUP_DM_CHANNEL:"Bots don't have access to Group DM Channels and cannot delete them",FETCH_GROUP_DM_CHANNEL:"Bots don't have access to Group DM Channels and cannot fetch them"};for(const[e,t]of Object.entries(n))s(e,t)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class Collection extends Map{constructor(e){super(e),Object.defineProperty(this,"_array",{value:null,writable:!0,configurable:!0}),Object.defineProperty(this,"_keyArray",{value:null,writable:!0,configurable:!0})}get(e){return super.get(e)}set(e,t){return this._array=null,this._keyArray=null,super.set(e,t)}has(e){return super.has(e)}delete(e){return this._array=null,this._keyArray=null,super.delete(e)}clear(){return super.clear()}array(){return this._array&&this._array.length===this.size||(this._array=[...this.values()]),this._array}keyArray(){return this._keyArray&&this._keyArray.length===this.size||(this._keyArray=[...this.keys()]),this._keyArray}first(e){if(void 0===e)return this.values().next().value;if(e<0)return this.last(-1*e);e=Math.min(this.size,e);const t=this.values();return Array.from({length:e},()=>t.next().value)}firstKey(e){if(void 0===e)return this.keys().next().value;if(e<0)return this.lastKey(-1*e);e=Math.min(this.size,e);const t=this.keys();return Array.from({length:e},()=>t.next().value)}last(e){const t=this.array();return void 0===e?t[t.length-1]:e<0?this.first(-1*e):e?t.slice(-e):[]}lastKey(e){const t=this.keyArray();return void 0===e?t[t.length-1]:e<0?this.firstKey(-1*e):e?t.slice(-e):[]}random(e){let t=this.array();return void 0===e?t[Math.floor(Math.random()*t.length)]:0!==t.length&&e?(t=t.slice(),Array.from({length:e},()=>t.splice(Math.floor(Math.random()*t.length),1)[0])):[]}randomKey(e){let t=this.keyArray();return void 0===e?t[Math.floor(Math.random()*t.length)]:0!==t.length&&e?(t=t.slice(),Array.from({length:e},()=>t.splice(Math.floor(Math.random()*t.length),1)[0])):[]}find(e,t){void 0!==t&&(e=e.bind(t));for(const[t,i]of this)if(e(i,t,this))return i}findKey(e,t){void 0!==t&&(e=e.bind(t));for(const[t,i]of this)if(e(i,t,this))return t}sweep(e,t){void 0!==t&&(e=e.bind(t));const i=this.size;for(const[t,i]of this)e(i,t,this)&&this.delete(t);return i-this.size}filter(e,t){void 0!==t&&(e=e.bind(t));const i=new this.constructor[Symbol.species];for(const[t,s]of this)e(s,t,this)&&i.set(t,s);return i}partition(e,t){void 0!==t&&(e=e.bind(t));const i=[new this.constructor[Symbol.species],new this.constructor[Symbol.species]];for(const[t,s]of this)e(s,t,this)?i[0].set(t,s):i[1].set(t,s);return i}flatMap(e,t){const i=this.map(e,t);return(new this.constructor[Symbol.species]).concat(...i)}map(e,t){void 0!==t&&(e=e.bind(t));const i=this.entries();return Array.from({length:this.size},()=>{const[t,s]=i.next().value;return e(s,t,this)})}mapValues(e,t){void 0!==t&&(e=e.bind(t));const i=new this.constructor[Symbol.species];for(const[t,s]of this)i.set(t,e(s,t,this));return i}some(e,t){void 0!==t&&(e=e.bind(t));for(const[t,i]of this)if(e(i,t,this))return!0;return!1}every(e,t){void 0!==t&&(e=e.bind(t));for(const[t,i]of this)if(!e(i,t,this))return!1;return!0}reduce(e,t){let i;if(void 0!==t){i=t;for(const[t,s]of this)i=e(i,s,t,this);return i}let s=!0;for(const[t,n]of this)s?(i=n,s=!1):i=e(i,n,t,this);if(s)throw new TypeError("Reduce of empty collection with no initial value");return i}each(e,t){return this.forEach(e,t),this}tap(e,t){return void 0!==t&&(e=e.bind(t)),e(this),this}clone(){return new this.constructor[Symbol.species](this)}concat(...e){const t=this.clone();for(const i of e)for(const[e,s]of i)t.set(e,s);return t}equals(e){if(!e)return!1;if(this===e)return!0;if(this.size!==e.size)return!1;for(const[t,i]of this)if(!e.has(t)||i!==e.get(t))return!1;return!0}sort(e=((e,t)=>Number(e>t)||Number(e===t)-1)){const t=[...this.entries()];t.sort((t,i)=>e(t[1],i[1],t[0],i[0])),super.clear(),this._array=null,this._keyArray=null;for(const[e,i]of t)super.set(e,i);return this}intersect(e){return e.filter((e,t)=>this.has(t))}difference(e){return e.filter((e,t)=>!this.has(t)).concat(this.filter((t,i)=>!e.has(i)))}sorted(e=((e,t)=>Number(e>t)||Number(e===t)-1)){return new this.constructor[Symbol.species]([...this.entries()]).sort((t,i,s,n)=>e(t,i,s,n))}}t.Collection=Collection,Collection.default=Collection,t.default=Collection,e.exports=Collection},function(e,t,i){"use strict";const s=i(101),n=i(105),r=i(106),{Error:o}=i(3),a=i(2),{Endpoints:c}=i(0);e.exports=class RESTManager{constructor(e,t="Bot"){this.client=e,this.handlers=new a,this.tokenPrefix=t,this.versioned=!0,this.globalTimeout=null,e.options.restSweepInterval>0&&e.setInterval(()=>{this.handlers.sweep(e=>e._inactive)},1e3*e.options.restSweepInterval)}get api(){return n(this)}getAuth(){const e=this.client.token||this.client.accessToken;if(e)return`${this.tokenPrefix} ${e}`;throw new o("TOKEN_MISSING")}get cdn(){return c.CDN(this.client.options.http.cdn)}push(e,t){return new Promise((i,s)=>{e.push({request:t,resolve:i,reject:s,retries:0}).catch(s)})}request(e,t,i={}){const n=new s(this,e,t,i);let o=this.handlers.get(n.route);return o||(o=new r(this),this.handlers.set(n.route,o)),this.push(o,n)}set endpoint(e){this.client.options.http.api=e}}},function(e,t,i){"use strict";const s=i(102),n=i(103),r=i(104),o=i(36),{browser:a,UserAgent:c}=i(0);if(s.Agent)var l=new s.Agent({keepAlive:!0});e.exports=class APIRequest{constructor(e,t,i,s){this.rest=e,this.client=e.client,this.method=t,this.route=s.route,this.options=s;let n="";if(s.query){const e=Object.entries(s.query).filter(([,e])=>null!=e);n=new URLSearchParams(e).toString()}this.path=`${i}${n&&`?${n}`}`}make(){const e=(!1===this.options.versioned?this.client.options.http.api:`${this.client.options.http.api}/v${this.client.options.http.version}`)+this.path;let t,i={};if(!1!==this.options.auth&&(i.Authorization=this.rest.getAuth()),this.options.reason&&(i["X-Audit-Log-Reason"]=encodeURIComponent(this.options.reason)),a||(i["User-Agent"]=c),this.options.headers&&(i=Object.assign(i,this.options.headers)),this.options.files&&this.options.files.length){t=new n;for(const e of this.options.files)e&&e.file&&t.append(e.name,e.file,e.name);void 0!==this.options.data&&t.append("payload_json",JSON.stringify(this.options.data)),a||(i=Object.assign(i,t.getHeaders()))}else null!=this.options.data&&(t=JSON.stringify(this.options.data),i["Content-Type"]="application/json");const s=new r,h=this.client.setTimeout(()=>s.abort(),this.client.options.restRequestTimeout);return o(e,{method:this.method,headers:i,agent:l,body:t,signal:s.signal}).finally(()=>this.client.clearTimeout(h))}}},function(e,t){},function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},function(e,t,i){"use strict";const{AbortController:s,AbortSignal:n}="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0;e.exports=s,e.exports.AbortSignal=n,e.exports.default=s},function(e,t,i){"use strict";const s=()=>{},n=["get","post","delete","patch","put"],r=["toString","valueOf","inspect","constructor",Symbol.toPrimitive,Symbol.for("nodejs.util.inspect.custom")];e.exports=function(e){const t=[""],i={get(o,a){if(r.includes(a))return()=>t.join("/");if(n.includes(a)){const i=[];for(let e=0;e<t.length&&"reactions"!==t[e-1];e++)/\d{16,19}/g.test(t[e])&&!/channels|guilds/.test(t[e-1])?i.push(":id"):i.push(t[e]);return s=>e.request(a,t.join("/"),Object.assign({versioned:e.versioned,route:i.join("/")},s))}return t.push(a),new Proxy(s,i)},apply:(e,n,r)=>(t.push(...r.filter(e=>null!=e)),new Proxy(s,i))};return new Proxy(s,i)}},function(e,t,i){"use strict";const s=i(61),n=i(62),{Events:{RATE_LIMIT:r},browser:o}=i(0),a=i(4);function c(e){return e.headers.get("content-type").startsWith("application/json")?e.json():o?e.blob():e.buffer()}function l(e){return new Date(e).getTime()-Date.now()}e.exports=class RequestHandler{constructor(e){this.manager=e,this.busy=!1,this.queue=[],this.reset=-1,this.remaining=-1,this.limit=-1,this.retryAfter=-1}push(e){return this.busy?(this.queue.push(e),this.run()):this.execute(e)}run(){return 0===this.queue.length?Promise.resolve():this.execute(this.queue.shift())}get limited(){return Boolean(this.manager.globalTimeout)||this.remaining<=0&&Date.now()<this.reset}get _inactive(){return 0===this.queue.length&&!this.limited&&!0!==this.busy}async execute(e){if(this.busy)return this.queue.unshift(e),null;this.busy=!0;const{reject:t,request:i,resolve:o}=e;if(this.limited){const e=this.reset+this.manager.client.options.restTimeOffset-Date.now();this.manager.client.listenerCount(r)&&this.manager.client.emit(r,{timeout:e,limit:this.limit,method:i.method,path:i.path,route:i.route}),this.manager.globalTimeout?await this.manager.globalTimeout:await a.delayFor(e)}let h;try{h=await i.make()}catch(e){return this.busy=!1,t(new n(e.message,e.constructor.name,e.status,i.method,i.path))}if(h&&h.headers){const t=h.headers.get("date"),i=h.headers.get("x-ratelimit-limit"),s=h.headers.get("x-ratelimit-remaining"),n=h.headers.get("x-ratelimit-reset"),r=h.headers.get("retry-after");this.limit=i?Number(i):1/0,this.remaining=s?Number(s):1,this.reset=n?function(e,t){return new Date(1e3*Number(e)).getTime()-l(t)}(n,t):Date.now(),this.retryAfter=r?Number(r):-1,e.request.route.includes("reactions")&&(this.reset=new Date(t).getTime()-l(t)+250),h.headers.get("x-ratelimit-global")&&(this.manager.globalTimeout=a.delayFor(this.retryAfter),await this.manager.globalTimeout,this.manager.globalTimeout=null)}if(this.busy=!1,h.ok){return o(await c(h)),this.run()}if(429===h.status)return this.queue.unshift(e),this.manager.client.emit("debug",`429 hit on route ${e.request.route}`),await a.delayFor(this.retryAfter),this.run();if(h.status>=500&&h.status<600)return e.retries===this.manager.client.options.retryLimit?t(new n(h.statusText,h.constructor.name,h.status,e.request.method,i.path)):(e.retries++,this.queue.unshift(e),this.run());try{const e=await c(h);return h.status>=400&&h.status<500?t(new s(i.path,e,i.method,h.status)):null}catch(e){return t(new n(e.message,e.constructor.name,e.status,i.method,i.path))}}}},function(module,exports,__webpack_require__){"use strict";(function(process){const BaseClient=__webpack_require__(37),ActionsManager=__webpack_require__(108),ClientVoiceManager=__webpack_require__(158),WebSocketManager=__webpack_require__(159),{Error:Error,TypeError:TypeError,RangeError:RangeError}=__webpack_require__(3),ChannelManager=__webpack_require__(93),GuildEmojiManager=__webpack_require__(57),GuildManager=__webpack_require__(94),UserManager=__webpack_require__(95),ShardClientUtil=__webpack_require__(204),ClientApplication=__webpack_require__(50),GuildPreview=__webpack_require__(55),Invite=__webpack_require__(18),VoiceRegion=__webpack_require__(56),Webhook=__webpack_require__(12),Collection=__webpack_require__(2),{Events:Events,browser:browser,DefaultOptions:DefaultOptions}=__webpack_require__(0),DataResolver=__webpack_require__(9),Intents=__webpack_require__(96),Permissions=__webpack_require__(8),Structures=__webpack_require__(23);class Client extends BaseClient{constructor(e={}){super(Object.assign({_tokenType:"Bot"},e));let t=process.env;try{t=__webpack_require__(205).workerData||t}catch{}this.options.shards===DefaultOptions.shards&&"SHARDS"in t&&(this.options.shards=JSON.parse(t.SHARDS)),this.options.shardCount===DefaultOptions.shardCount&&("SHARD_COUNT"in t?this.options.shardCount=Number(t.SHARD_COUNT):Array.isArray(this.options.shards)&&(this.options.shardCount=this.options.shards.length));const i=typeof this.options.shards;"undefined"===i&&"number"==typeof this.options.shardCount&&(this.options.shards=Array.from({length:this.options.shardCount},(e,t)=>t)),"number"===i&&(this.options.shards=[this.options.shards]),Array.isArray(this.options.shards)&&(this.options.shards=[...new Set(this.options.shards.filter(e=>!isNaN(e)&&e>=0&&e<1/0&&e===(0|e)))]),this._validateOptions(),this.ws=new WebSocketManager(this),this.actions=new ActionsManager(this),this.voice=browser?null:new ClientVoiceManager(this),this.shard=!browser&&process.env.SHARDING_MANAGER?ShardClientUtil.singleton(this,process.env.SHARDING_MANAGER_MODE):null,this.users=new UserManager(this),this.guilds=new GuildManager(this),this.channels=new ChannelManager(this);const s=Structures.get("ClientPresence");this.presence=new s(this),Object.defineProperty(this,"token",{writable:!0}),browser||this.token||!("DISCORD_TOKEN"in process.env)?this.token=null:this.token=process.env.DISCORD_TOKEN,this.user=null,this.readyAt=null,this.options.messageSweepInterval>0&&this.setInterval(this.sweepMessages.bind(this),1e3*this.options.messageSweepInterval)}get emojis(){const e=new GuildEmojiManager({client:this});for(const t of this.guilds.cache.values())if(t.available)for(const i of t.emojis.cache.values())e.cache.set(i.id,i);return e}get readyTimestamp(){return this.readyAt?this.readyAt.getTime():null}get uptime(){return this.readyAt?Date.now()-this.readyAt:null}async login(e=this.token){if(!e||"string"!=typeof e)throw new Error("TOKEN_INVALID");this.token=e=e.replace(/^(Bot|Bearer)\s*/i,""),this.emit(Events.DEBUG,`Provided token: ${e.split(".").map((e,t)=>t>1?e.replace(/./g,"*"):e).join(".")}`),this.options.presence&&(this.options.ws.presence=await this.presence._parse(this.options.presence)),this.emit(Events.DEBUG,"Preparing to connect to the gateway...");try{return await this.ws.connect(),this.token}catch(e){throw this.destroy(),e}}destroy(){super.destroy(),this.ws.destroy(),this.token=null}fetchInvite(e){const t=DataResolver.resolveInviteCode(e);return this.api.invites(t).get({query:{with_counts:!0}}).then(e=>new Invite(this,e))}fetchWebhook(e,t){return this.api.webhooks(e,t).get().then(e=>new Webhook(this,e))}fetchVoiceRegions(){return this.api.voice.regions.get().then(e=>{const t=new Collection;for(const i of e)t.set(i.id,new VoiceRegion(i));return t})}sweepMessages(e=this.options.messageCacheLifetime){if("number"!=typeof e||isNaN(e))throw new TypeError("INVALID_TYPE","lifetime","number");if(e<=0)return this.emit(Events.DEBUG,"Didn't sweep messages - lifetime is unlimited"),-1;const t=1e3*e,i=Date.now();let s=0,n=0;for(const e of this.channels.cache.values())e.messages&&(s++,n+=e.messages.cache.sweep(e=>i-(e.editedTimestamp||e.createdTimestamp)>t));return this.emit(Events.DEBUG,`Swept ${n} messages older than ${e} seconds in ${s} text-based channels`),n}fetchApplication(){return this.api.oauth2.applications("@me").get().then(e=>new ClientApplication(this,e))}fetchGuildPreview(e){const t=this.guilds.resolveID(e);if(!t)throw new TypeError("INVALID_TYPE","guild","GuildResolvable");return this.api.guilds(t).preview.get().then(e=>new GuildPreview(this,e))}async generateInvite(e){e=Permissions.resolve(e);const t=await this.fetchApplication(),i=new URLSearchParams({client_id:t.id,permissions:e,scope:"bot"});return`${this.options.http.api}${this.api.oauth2.authorize}?${i}`}toJSON(){return super.toJSON({readyAt:!1,presences:!1})}_eval(script){return eval(script)}_validateOptions(e=this.options){if(void 0!==e.ws.intents&&(e.ws.intents=Intents.resolve(e.ws.intents)),"number"!=typeof e.shardCount||isNaN(e.shardCount)||e.shardCount<1)throw new TypeError("CLIENT_INVALID_OPTION","shardCount","a number greater than or equal to 1");if(e.shards&&"auto"!==e.shards&&!Array.isArray(e.shards))throw new TypeError("CLIENT_INVALID_OPTION","shards","'auto', a number or array of numbers");if(e.shards&&!e.shards.length)throw new RangeError("CLIENT_INVALID_PROVIDED_SHARDS");if("number"!=typeof e.messageCacheMaxSize||isNaN(e.messageCacheMaxSize))throw new TypeError("CLIENT_INVALID_OPTION","messageCacheMaxSize","a number");if("number"!=typeof e.messageCacheLifetime||isNaN(e.messageCacheLifetime))throw new TypeError("CLIENT_INVALID_OPTION","The messageCacheLifetime","a number");if("number"!=typeof e.messageSweepInterval||isNaN(e.messageSweepInterval))throw new TypeError("CLIENT_INVALID_OPTION","messageSweepInterval","a number");if("boolean"!=typeof e.fetchAllMembers)throw new TypeError("CLIENT_INVALID_OPTION","fetchAllMembers","a boolean");if("string"!=typeof e.disableMentions)throw new TypeError("CLIENT_INVALID_OPTION","disableMentions","a string");if(!Array.isArray(e.partials))throw new TypeError("CLIENT_INVALID_OPTION","partials","an Array");if("number"!=typeof e.restWsBridgeTimeout||isNaN(e.restWsBridgeTimeout))throw new TypeError("CLIENT_INVALID_OPTION","restWsBridgeTimeout","a number");if("number"!=typeof e.restRequestTimeout||isNaN(e.restRequestTimeout))throw new TypeError("CLIENT_INVALID_OPTION","restRequestTimeout","a number");if("number"!=typeof e.restSweepInterval||isNaN(e.restSweepInterval))throw new TypeError("CLIENT_INVALID_OPTION","restSweepInterval","a number");if("number"!=typeof e.retryLimit||isNaN(e.retryLimit))throw new TypeError("CLIENT_INVALID_OPTION","retryLimit","a number")}}module.exports=Client}).call(this,__webpack_require__(14))},function(e,t,i){"use strict";e.exports=class ActionsManager{constructor(e){this.client=e,this.register(i(109)),this.register(i(110)),this.register(i(111)),this.register(i(112)),this.register(i(113)),this.register(i(114)),this.register(i(115)),this.register(i(116)),this.register(i(117)),this.register(i(118)),this.register(i(137)),this.register(i(138)),this.register(i(139)),this.register(i(140)),this.register(i(141)),this.register(i(142)),this.register(i(143)),this.register(i(144)),this.register(i(145)),this.register(i(146)),this.register(i(147)),this.register(i(148)),this.register(i(149)),this.register(i(150)),this.register(i(151)),this.register(i(152)),this.register(i(153)),this.register(i(154)),this.register(i(155)),this.register(i(156)),this.register(i(157))}register(e){this[e.name.replace(/Action$/,"")]=new e(this.client)}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class MessageCreateAction extends s{handle(e){const t=this.client,i=t.channels.cache.get(e.channel_id);if(i){const s=i.messages.cache.get(e.id);if(s)return{message:s};const r=i.messages.add(e),o=r.author;let a=r.member;return i.lastMessageID=e.id,o&&(o.lastMessageID=e.id,o.lastMessageChannelID=i.id),a&&(a.lastMessageID=e.id,a.lastMessageChannelID=i.id),t.emit(n.MESSAGE_CREATE,r),{message:r}}return{}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class MessageDeleteAction extends s{handle(e){const t=this.client,i=this.getChannel(e);let s;return i&&(s=this.getMessage(e,i),s&&(i.messages.cache.delete(s.id),s.deleted=!0,t.emit(n.MESSAGE_DELETE,s))),{message:s}}}},function(e,t,i){"use strict";const s=i(1),n=i(2),{Events:r}=i(0);e.exports=class MessageDeleteBulkAction extends s{handle(e){const t=this.client,i=t.channels.cache.get(e.channel_id);if(i){const s=e.ids,o=new n;for(const t of s){const s=this.getMessage({id:t,guild_id:e.guild_id},i,!1);s&&(s.deleted=!0,o.set(s.id,s),i.messages.cache.delete(t))}return o.size>0&&t.emit(r.MESSAGE_BULK_DELETE,o),{messages:o}}return{}}}},function(e,t,i){"use strict";const s=i(1);e.exports=class MessageUpdateAction extends s{handle(e){const t=this.getChannel(e);if(t){const{id:i,channel_id:s,guild_id:n,author:r,timestamp:o,type:a}=e,c=this.getMessage({id:i,channel_id:s,guild_id:n,author:r,timestamp:o,type:a},t);if(c)return c.patch(e),{old:c._edits[0],updated:c}}return{}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0),{PartialTypes:r}=i(0);e.exports=class MessageReactionAdd extends s{handle(e){if(!e.emoji)return!1;const t=this.getUser(e);if(!t)return!1;const i=this.getChannel(e);if(!i||"voice"===i.type)return!1;const s=this.getMessage(e,i);if(!s)return!1;if(s.partial&&!this.client.options.partials.includes(r.REACTION))return!1;const o=s.reactions.add({emoji:e.emoji,count:s.partial?null:0,me:t.id===this.client.user.id});return!!o&&(o._add(t),this.client.emit(n.MESSAGE_REACTION_ADD,o,t),{message:s,reaction:o,user:t})}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class MessageReactionRemove extends s{handle(e){if(!e.emoji)return!1;const t=this.getUser(e);if(!t)return!1;const i=this.getChannel(e);if(!i||"voice"===i.type)return!1;const s=this.getMessage(e,i);if(!s)return!1;const r=this.getReaction(e,s,t);return!!r&&(r._remove(t),this.client.emit(n.MESSAGE_REACTION_REMOVE,r,t),{message:s,reaction:r,user:t})}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class MessageReactionRemoveAll extends s{handle(e){const t=this.getChannel(e);if(!t||"voice"===t.type)return!1;const i=this.getMessage(e,t);return!!i&&(i.reactions.cache.clear(),this.client.emit(n.MESSAGE_REACTION_REMOVE_ALL,i),{message:i})}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class MessageReactionRemoveEmoji extends s{handle(e){const t=this.getChannel(e);if(!t||"voice"===t.type)return!1;const i=this.getMessage(e,t);if(!i)return!1;const s=this.getReaction(e,i);return!!s&&(i.partial||i.reactions.cache.delete(s.emoji.id||s.emoji.name),this.client.emit(n.MESSAGE_REACTION_REMOVE_EMOJI,s),{reaction:s})}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class ChannelCreateAction extends s{handle(e){const t=this.client,i=t.channels.cache.has(e.id),s=t.channels.add(e);return!i&&s&&t.emit(n.CHANNEL_CREATE,s),{channel:s}}}},function(e,t,i){"use strict";const s=i(1),n=i(39),{Events:r}=i(0);e.exports=class ChannelDeleteAction extends s{constructor(e){super(e),this.deleted=new Map}handle(e){const t=this.client;let i=t.channels.cache.get(e.id);if(i){if(t.channels.remove(i.id),i.deleted=!0,i.messages&&!(i instanceof n))for(const e of i.messages.cache.values())e.deleted=!0;t.emit(r.CHANNEL_DELETE,i)}return{channel:i}}}},function(e,t,i){e.exports=n;var s=i(15).EventEmitter;function n(){s.call(this)}i(22)(n,s),n.Readable=i(45),n.Writable=i(128),n.Duplex=i(129),n.Transform=i(130),n.PassThrough=i(131),n.Stream=n,n.prototype.pipe=function(e,t){var i=this;function n(t){e.writable&&!1===e.write(t)&&i.pause&&i.pause()}function r(){i.readable&&i.resume&&i.resume()}i.on("data",n),e.on("drain",r),e._isStdio||t&&!1===t.end||(i.on("end",a),i.on("close",c));var o=!1;function a(){o||(o=!0,e.end())}function c(){o||(o=!0,"function"==typeof e.destroy&&e.destroy())}function l(e){if(h(),0===s.listenerCount(this,"error"))throw e}function h(){i.removeListener("data",n),e.removeListener("drain",r),i.removeListener("end",a),i.removeListener("close",c),i.removeListener("error",l),e.removeListener("error",l),i.removeListener("end",h),i.removeListener("close",h),e.removeListener("close",h)}return i.on("error",l),e.on("error",l),i.on("end",h),i.on("close",h),e.on("close",h),e.emit("pipe",i),e}},function(e,t,i){"use strict";(function(e){var s=i(121),n=i(122),r=i(65);function o(){return c.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(e,t){if(o()<t)throw new RangeError("Invalid typed array length");return c.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=c.prototype:(null===e&&(e=new c(t)),e.length=t),e}function c(e,t,i){if(!(c.TYPED_ARRAY_SUPPORT||this instanceof c))return new c(e,t,i);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return l(this,e,t,i)}function l(e,t,i,s){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,i,s){if(t.byteLength,i<0||t.byteLength<i)throw new RangeError("'offset' is out of bounds");if(t.byteLength<i+(s||0))throw new RangeError("'length' is out of bounds");t=void 0===i&&void 0===s?new Uint8Array(t):void 0===s?new Uint8Array(t,i):new Uint8Array(t,i,s);c.TYPED_ARRAY_SUPPORT?(e=t).__proto__=c.prototype:e=d(e,t);return e}(e,t,i,s):"string"==typeof t?function(e,t,i){"string"==typeof i&&""!==i||(i="utf8");if(!c.isEncoding(i))throw new TypeError('"encoding" must be a valid string encoding');var s=0|f(t,i),n=(e=a(e,s)).write(t,i);n!==s&&(e=e.slice(0,n));return e}(e,t,i):function(e,t){if(c.isBuffer(t)){var i=0|p(t.length);return 0===(e=a(e,i)).length||t.copy(e,0,0,i),e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(s=t.length)!=s?a(e,0):d(e,t);if("Buffer"===t.type&&r(t.data))return d(e,t.data)}var s;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function h(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(h(t),e=a(e,t<0?0:0|p(t)),!c.TYPED_ARRAY_SUPPORT)for(var i=0;i<t;++i)e[i]=0;return e}function d(e,t){var i=t.length<0?0:0|p(t.length);e=a(e,i);for(var s=0;s<i;s+=1)e[s]=255&t[s];return e}function p(e){if(e>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|e}function f(e,t){if(c.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var i=e.length;if(0===i)return 0;for(var s=!1;;)switch(t){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":case void 0:return B(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return V(e).length;default:if(s)return B(e).length;t=(""+t).toLowerCase(),s=!0}}function m(e,t,i){var s=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return R(this,t,i);case"utf8":case"utf-8":return T(this,t,i);case"ascii":return D(this,t,i);case"latin1":case"binary":return N(this,t,i);case"base64":return I(this,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,i);default:if(s)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function g(e,t,i){var s=e[t];e[t]=e[i],e[i]=s}function E(e,t,i,s,n){if(0===e.length)return-1;if("string"==typeof i?(s=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),i=+i,isNaN(i)&&(i=n?0:e.length-1),i<0&&(i=e.length+i),i>=e.length){if(n)return-1;i=e.length-1}else if(i<0){if(!n)return-1;i=0}if("string"==typeof t&&(t=c.from(t,s)),c.isBuffer(t))return 0===t.length?-1:_(e,t,i,s,n);if("number"==typeof t)return t&=255,c.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(e,t,i):Uint8Array.prototype.lastIndexOf.call(e,t,i):_(e,[t],i,s,n);throw new TypeError("val must be string, number or Buffer")}function _(e,t,i,s,n){var r,o=1,a=e.length,c=t.length;if(void 0!==s&&("ucs2"===(s=String(s).toLowerCase())||"ucs-2"===s||"utf16le"===s||"utf-16le"===s)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,i/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(n){var h=-1;for(r=i;r<a;r++)if(l(e,r)===l(t,-1===h?0:r-h)){if(-1===h&&(h=r),r-h+1===c)return h*o}else-1!==h&&(r-=r-h),h=-1}else for(i+c>a&&(i=a-c),r=i;r>=0;r--){for(var u=!0,d=0;d<c;d++)if(l(e,r+d)!==l(t,d)){u=!1;break}if(u)return r}return-1}function y(e,t,i,s){i=Number(i)||0;var n=e.length-i;s?(s=Number(s))>n&&(s=n):s=n;var r=t.length;if(r%2!=0)throw new TypeError("Invalid hex string");s>r/2&&(s=r/2);for(var o=0;o<s;++o){var a=parseInt(t.substr(2*o,2),16);if(isNaN(a))return o;e[i+o]=a}return o}function b(e,t,i,s){return H(B(t,e.length-i),e,i,s)}function v(e,t,i,s){return H(function(e){for(var t=[],i=0;i<e.length;++i)t.push(255&e.charCodeAt(i));return t}(t),e,i,s)}function w(e,t,i,s){return v(e,t,i,s)}function A(e,t,i,s){return H(V(t),e,i,s)}function S(e,t,i,s){return H(function(e,t){for(var i,s,n,r=[],o=0;o<e.length&&!((t-=2)<0);++o)i=e.charCodeAt(o),s=i>>8,n=i%256,r.push(n),r.push(s);return r}(t,e.length-i),e,i,s)}function I(e,t,i){return 0===t&&i===e.length?s.fromByteArray(e):s.fromByteArray(e.slice(t,i))}function T(e,t,i){i=Math.min(e.length,i);for(var s=[],n=t;n<i;){var r,o,a,c,l=e[n],h=null,u=l>239?4:l>223?3:l>191?2:1;if(n+u<=i)switch(u){case 1:l<128&&(h=l);break;case 2:128==(192&(r=e[n+1]))&&(c=(31&l)<<6|63&r)>127&&(h=c);break;case 3:r=e[n+1],o=e[n+2],128==(192&r)&&128==(192&o)&&(c=(15&l)<<12|(63&r)<<6|63&o)>2047&&(c<55296||c>57343)&&(h=c);break;case 4:r=e[n+1],o=e[n+2],a=e[n+3],128==(192&r)&&128==(192&o)&&128==(192&a)&&(c=(15&l)<<18|(63&r)<<12|(63&o)<<6|63&a)>65535&&c<1114112&&(h=c)}null===h?(h=65533,u=1):h>65535&&(h-=65536,s.push(h>>>10&1023|55296),h=56320|1023&h),s.push(h),n+=u}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);var i="",s=0;for(;s<t;)i+=String.fromCharCode.apply(String,e.slice(s,s+=4096));return i}(s)}t.Buffer=c,t.SlowBuffer=function(e){+e!=e&&(e=0);return c.alloc(+e)},t.INSPECT_MAX_BYTES=50,c.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=o(),c.poolSize=8192,c._augment=function(e){return e.__proto__=c.prototype,e},c.from=function(e,t,i){return l(null,e,t,i)},c.TYPED_ARRAY_SUPPORT&&(c.prototype.__proto__=Uint8Array.prototype,c.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&c[Symbol.species]===c&&Object.defineProperty(c,Symbol.species,{value:null,configurable:!0})),c.alloc=function(e,t,i){return function(e,t,i,s){return h(t),t<=0?a(e,t):void 0!==i?"string"==typeof s?a(e,t).fill(i,s):a(e,t).fill(i):a(e,t)}(null,e,t,i)},c.allocUnsafe=function(e){return u(null,e)},c.allocUnsafeSlow=function(e){return u(null,e)},c.isBuffer=function(e){return!(null==e||!e._isBuffer)},c.compare=function(e,t){if(!c.isBuffer(e)||!c.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var i=e.length,s=t.length,n=0,r=Math.min(i,s);n<r;++n)if(e[n]!==t[n]){i=e[n],s=t[n];break}return i<s?-1:s<i?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){if(!r(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);var i;if(void 0===t)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var s=c.allocUnsafe(t),n=0;for(i=0;i<e.length;++i){var o=e[i];if(!c.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(s,n),n+=o.length}return s},c.byteLength=f,c.prototype._isBuffer=!0,c.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)g(this,t,t+1);return this},c.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)g(this,t,t+3),g(this,t+1,t+2);return this},c.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)g(this,t,t+7),g(this,t+1,t+6),g(this,t+2,t+5),g(this,t+3,t+4);return this},c.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?T(this,0,e):m.apply(this,arguments)},c.prototype.equals=function(e){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){var e="",i=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,i).match(/.{2}/g).join(" "),this.length>i&&(e+=" ... ")),"<Buffer "+e+">"},c.prototype.compare=function(e,t,i,s,n){if(!c.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===i&&(i=e?e.length:0),void 0===s&&(s=0),void 0===n&&(n=this.length),t<0||i>e.length||s<0||n>this.length)throw new RangeError("out of range index");if(s>=n&&t>=i)return 0;if(s>=n)return-1;if(t>=i)return 1;if(this===e)return 0;for(var r=(n>>>=0)-(s>>>=0),o=(i>>>=0)-(t>>>=0),a=Math.min(r,o),l=this.slice(s,n),h=e.slice(t,i),u=0;u<a;++u)if(l[u]!==h[u]){r=l[u],o=h[u];break}return r<o?-1:o<r?1:0},c.prototype.includes=function(e,t,i){return-1!==this.indexOf(e,t,i)},c.prototype.indexOf=function(e,t,i){return E(this,e,t,i,!0)},c.prototype.lastIndexOf=function(e,t,i){return E(this,e,t,i,!1)},c.prototype.write=function(e,t,i,s){if(void 0===t)s="utf8",i=this.length,t=0;else if(void 0===i&&"string"==typeof t)s=t,i=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(i)?(i|=0,void 0===s&&(s="utf8")):(s=i,i=void 0)}var n=this.length-t;if((void 0===i||i>n)&&(i=n),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");s||(s="utf8");for(var r=!1;;)switch(s){case"hex":return y(this,e,t,i);case"utf8":case"utf-8":return b(this,e,t,i);case"ascii":return v(this,e,t,i);case"latin1":case"binary":return w(this,e,t,i);case"base64":return A(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,i);default:if(r)throw new TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),r=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function D(e,t,i){var s="";i=Math.min(e.length,i);for(var n=t;n<i;++n)s+=String.fromCharCode(127&e[n]);return s}function N(e,t,i){var s="";i=Math.min(e.length,i);for(var n=t;n<i;++n)s+=String.fromCharCode(e[n]);return s}function R(e,t,i){var s=e.length;(!t||t<0)&&(t=0),(!i||i<0||i>s)&&(i=s);for(var n="",r=t;r<i;++r)n+=j(e[r]);return n}function O(e,t,i){for(var s=e.slice(t,i),n="",r=0;r<s.length;r+=2)n+=String.fromCharCode(s[r]+256*s[r+1]);return n}function C(e,t,i){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>i)throw new RangeError("Trying to access beyond buffer length")}function L(e,t,i,s,n,r){if(!c.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>n||t<r)throw new RangeError('"value" argument is out of bounds');if(i+s>e.length)throw new RangeError("Index out of range")}function M(e,t,i,s){t<0&&(t=65535+t+1);for(var n=0,r=Math.min(e.length-i,2);n<r;++n)e[i+n]=(t&255<<8*(s?n:1-n))>>>8*(s?n:1-n)}function U(e,t,i,s){t<0&&(t=4294967295+t+1);for(var n=0,r=Math.min(e.length-i,4);n<r;++n)e[i+n]=t>>>8*(s?n:3-n)&255}function P(e,t,i,s,n,r){if(i+s>e.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function x(e,t,i,s,r){return r||P(e,0,i,4),n.write(e,t,i,s,23,4),i+4}function G(e,t,i,s,r){return r||P(e,0,i,8),n.write(e,t,i,s,52,8),i+8}c.prototype.slice=function(e,t){var i,s=this.length;if((e=~~e)<0?(e+=s)<0&&(e=0):e>s&&(e=s),(t=void 0===t?s:~~t)<0?(t+=s)<0&&(t=0):t>s&&(t=s),t<e&&(t=e),c.TYPED_ARRAY_SUPPORT)(i=this.subarray(e,t)).__proto__=c.prototype;else{var n=t-e;i=new c(n,void 0);for(var r=0;r<n;++r)i[r]=this[r+e]}return i},c.prototype.readUIntLE=function(e,t,i){e|=0,t|=0,i||C(e,t,this.length);for(var s=this[e],n=1,r=0;++r<t&&(n*=256);)s+=this[e+r]*n;return s},c.prototype.readUIntBE=function(e,t,i){e|=0,t|=0,i||C(e,t,this.length);for(var s=this[e+--t],n=1;t>0&&(n*=256);)s+=this[e+--t]*n;return s},c.prototype.readUInt8=function(e,t){return t||C(e,1,this.length),this[e]},c.prototype.readUInt16LE=function(e,t){return t||C(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUInt16BE=function(e,t){return t||C(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUInt32LE=function(e,t){return t||C(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUInt32BE=function(e,t){return t||C(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readIntLE=function(e,t,i){e|=0,t|=0,i||C(e,t,this.length);for(var s=this[e],n=1,r=0;++r<t&&(n*=256);)s+=this[e+r]*n;return s>=(n*=128)&&(s-=Math.pow(2,8*t)),s},c.prototype.readIntBE=function(e,t,i){e|=0,t|=0,i||C(e,t,this.length);for(var s=t,n=1,r=this[e+--s];s>0&&(n*=256);)r+=this[e+--s]*n;return r>=(n*=128)&&(r-=Math.pow(2,8*t)),r},c.prototype.readInt8=function(e,t){return t||C(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},c.prototype.readInt16LE=function(e,t){t||C(e,2,this.length);var i=this[e]|this[e+1]<<8;return 32768&i?4294901760|i:i},c.prototype.readInt16BE=function(e,t){t||C(e,2,this.length);var i=this[e+1]|this[e]<<8;return 32768&i?4294901760|i:i},c.prototype.readInt32LE=function(e,t){return t||C(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return t||C(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readFloatLE=function(e,t){return t||C(e,4,this.length),n.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return t||C(e,4,this.length),n.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return t||C(e,8,this.length),n.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return t||C(e,8,this.length),n.read(this,e,!1,52,8)},c.prototype.writeUIntLE=function(e,t,i,s){(e=+e,t|=0,i|=0,s)||L(this,e,t,i,Math.pow(2,8*i)-1,0);var n=1,r=0;for(this[t]=255&e;++r<i&&(n*=256);)this[t+r]=e/n&255;return t+i},c.prototype.writeUIntBE=function(e,t,i,s){(e=+e,t|=0,i|=0,s)||L(this,e,t,i,Math.pow(2,8*i)-1,0);var n=i-1,r=1;for(this[t+n]=255&e;--n>=0&&(r*=256);)this[t+n]=e/r&255;return t+i},c.prototype.writeUInt8=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,1,255,0),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},c.prototype.writeUInt16LE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},c.prototype.writeUInt16BE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,2,65535,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},c.prototype.writeUInt32LE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):U(this,e,t,!0),t+4},c.prototype.writeUInt32BE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,4,4294967295,0),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):U(this,e,t,!1),t+4},c.prototype.writeIntLE=function(e,t,i,s){if(e=+e,t|=0,!s){var n=Math.pow(2,8*i-1);L(this,e,t,i,n-1,-n)}var r=0,o=1,a=0;for(this[t]=255&e;++r<i&&(o*=256);)e<0&&0===a&&0!==this[t+r-1]&&(a=1),this[t+r]=(e/o>>0)-a&255;return t+i},c.prototype.writeIntBE=function(e,t,i,s){if(e=+e,t|=0,!s){var n=Math.pow(2,8*i-1);L(this,e,t,i,n-1,-n)}var r=i-1,o=1,a=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===a&&0!==this[t+r+1]&&(a=1),this[t+r]=(e/o>>0)-a&255;return t+i},c.prototype.writeInt8=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,1,127,-128),c.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):M(this,e,t,!0),t+2},c.prototype.writeInt16BE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,2,32767,-32768),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):M(this,e,t,!1),t+2},c.prototype.writeInt32LE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,4,2147483647,-2147483648),c.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):U(this,e,t,!0),t+4},c.prototype.writeInt32BE=function(e,t,i){return e=+e,t|=0,i||L(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),c.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):U(this,e,t,!1),t+4},c.prototype.writeFloatLE=function(e,t,i){return x(this,e,t,!0,i)},c.prototype.writeFloatBE=function(e,t,i){return x(this,e,t,!1,i)},c.prototype.writeDoubleLE=function(e,t,i){return G(this,e,t,!0,i)},c.prototype.writeDoubleBE=function(e,t,i){return G(this,e,t,!1,i)},c.prototype.copy=function(e,t,i,s){if(i||(i=0),s||0===s||(s=this.length),t>=e.length&&(t=e.length),t||(t=0),s>0&&s<i&&(s=i),s===i)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("sourceStart out of bounds");if(s<0)throw new RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-t<s-i&&(s=e.length-t+i);var n,r=s-i;if(this===e&&i<t&&t<s)for(n=r-1;n>=0;--n)e[n+t]=this[n+i];else if(r<1e3||!c.TYPED_ARRAY_SUPPORT)for(n=0;n<r;++n)e[n+t]=this[n+i];else Uint8Array.prototype.set.call(e,this.subarray(i,i+r),t);return r},c.prototype.fill=function(e,t,i,s){if("string"==typeof e){if("string"==typeof t?(s=t,t=0,i=this.length):"string"==typeof i&&(s=i,i=this.length),1===e.length){var n=e.charCodeAt(0);n<256&&(e=n)}if(void 0!==s&&"string"!=typeof s)throw new TypeError("encoding must be a string");if("string"==typeof s&&!c.isEncoding(s))throw new TypeError("Unknown encoding: "+s)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;var r;if(t>>>=0,i=void 0===i?this.length:i>>>0,e||(e=0),"number"==typeof e)for(r=t;r<i;++r)this[r]=e;else{var o=c.isBuffer(e)?e:B(new c(e,s).toString()),a=o.length;for(r=0;r<i-t;++r)this[r+t]=o[r%a]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function j(e){return e<16?"0"+e.toString(16):e.toString(16)}function B(e,t){var i;t=t||1/0;for(var s=e.length,n=null,r=[],o=0;o<s;++o){if((i=e.charCodeAt(o))>55295&&i<57344){if(!n){if(i>56319){(t-=3)>-1&&r.push(239,191,189);continue}if(o+1===s){(t-=3)>-1&&r.push(239,191,189);continue}n=i;continue}if(i<56320){(t-=3)>-1&&r.push(239,191,189),n=i;continue}i=65536+(n-55296<<10|i-56320)}else n&&(t-=3)>-1&&r.push(239,191,189);if(n=null,i<128){if((t-=1)<0)break;r.push(i)}else if(i<2048){if((t-=2)<0)break;r.push(i>>6|192,63&i|128)}else if(i<65536){if((t-=3)<0)break;r.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;r.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return r}function V(e){return s.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(k,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function H(e,t,i,s){for(var n=0;n<s&&!(n+i>=t.length||n>=e.length);++n)t[n+i]=e[n];return n}}).call(this,i(21))},function(e,t,i){"use strict";t.byteLength=function(e){var t=l(e),i=t[0],s=t[1];return 3*(i+s)/4-s},t.toByteArray=function(e){var t,i,s=l(e),o=s[0],a=s[1],c=new r(function(e,t,i){return 3*(t+i)/4-i}(0,o,a)),h=0,u=a>0?o-4:o;for(i=0;i<u;i+=4)t=n[e.charCodeAt(i)]<<18|n[e.charCodeAt(i+1)]<<12|n[e.charCodeAt(i+2)]<<6|n[e.charCodeAt(i+3)],c[h++]=t>>16&255,c[h++]=t>>8&255,c[h++]=255&t;2===a&&(t=n[e.charCodeAt(i)]<<2|n[e.charCodeAt(i+1)]>>4,c[h++]=255&t);1===a&&(t=n[e.charCodeAt(i)]<<10|n[e.charCodeAt(i+1)]<<4|n[e.charCodeAt(i+2)]>>2,c[h++]=t>>8&255,c[h++]=255&t);return c},t.fromByteArray=function(e){for(var t,i=e.length,n=i%3,r=[],o=0,a=i-n;o<a;o+=16383)r.push(h(e,o,o+16383>a?a:o+16383));1===n?(t=e[i-1],r.push(s[t>>2]+s[t<<4&63]+"==")):2===n&&(t=(e[i-2]<<8)+e[i-1],r.push(s[t>>10]+s[t>>4&63]+s[t<<2&63]+"="));return r.join("")};for(var s=[],n=[],r="undefined"!=typeof Uint8Array?Uint8Array:Array,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=o.length;a<c;++a)s[a]=o[a],n[o.charCodeAt(a)]=a;function l(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=e.indexOf("=");return-1===i&&(i=t),[i,i===t?0:4-i%4]}function h(e,t,i){for(var n,r,o=[],a=t;a<i;a+=3)n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),o.push(s[(r=n)>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]);return o.join("")}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},function(e,t){t.read=function(e,t,i,s,n){var r,o,a=8*n-s-1,c=(1<<a)-1,l=c>>1,h=-7,u=i?n-1:0,d=i?-1:1,p=e[t+u];for(u+=d,r=p&(1<<-h)-1,p>>=-h,h+=a;h>0;r=256*r+e[t+u],u+=d,h-=8);for(o=r&(1<<-h)-1,r>>=-h,h+=s;h>0;o=256*o+e[t+u],u+=d,h-=8);if(0===r)r=1-l;else{if(r===c)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,s),r-=l}return(p?-1:1)*o*Math.pow(2,r-s)},t.write=function(e,t,i,s,n,r){var o,a,c,l=8*r-n-1,h=(1<<l)-1,u=h>>1,d=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,p=s?0:r-1,f=s?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+u>=1?d/c:d*Math.pow(2,1-u))*c>=2&&(o++,c/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*c-1)*Math.pow(2,n),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,n),o=0));n>=8;e[i+p]=255&a,p+=f,a/=256,n-=8);for(o=o<<n|a,l+=n;l>0;e[i+p]=255&o,p+=f,o/=256,l-=8);e[i+p-f]|=128*m}},function(e,t){},function(e,t,i){"use strict";var s=i(32).Buffer,n=i(125);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(e){var t={data:e,next:null};this.length>0?this.tail.next=t:this.head=t,this.tail=t,++this.length},e.prototype.unshift=function(e){var t={data:e,next:this.head};0===this.length&&(this.tail=t),this.head=t,++this.length},e.prototype.shift=function(){if(0!==this.length){var e=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,e}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(e){if(0===this.length)return"";for(var t=this.head,i=""+t.data;t=t.next;)i+=e+t.data;return i},e.prototype.concat=function(e){if(0===this.length)return s.alloc(0);if(1===this.length)return this.head.data;for(var t,i,n,r=s.allocUnsafe(e>>>0),o=this.head,a=0;o;)t=o.data,i=r,n=a,t.copy(i,n),a+=o.data.length,o=o.next;return r},e}(),n&&n.inspect&&n.inspect.custom&&(e.exports.prototype[n.inspect.custom]=function(){var e=n.inspect({length:this.length});return this.constructor.name+" "+e})},function(e,t){},function(e,t,i){(function(t){function i(e){try{if(!t.localStorage)return!1}catch(e){return!1}var i=t.localStorage[e];return null!=i&&"true"===String(i).toLowerCase()}e.exports=function(e,t){if(i("noDeprecation"))return e;var s=!1;return function(){if(!s){if(i("throwDeprecation"))throw new Error(t);i("traceDeprecation")?console.trace(t):console.warn(t),s=!0}return e.apply(this,arguments)}}}).call(this,i(21))},function(e,t,i){"use strict";e.exports=r;var s=i(69),n=Object.create(i(25));function r(e){if(!(this instanceof r))return new r(e);s.call(this,e)}n.inherits=i(22),n.inherits(r,s),r.prototype._transform=function(e,t,i){i(null,e)}},function(e,t,i){e.exports=i(46)},function(e,t,i){e.exports=i(20)},function(e,t,i){e.exports=i(45).Transform},function(e,t,i){e.exports=i(45).PassThrough},function(e,t,i){"use strict";const s=i(6),n=i(51);e.exports=class ReactionManager extends s{constructor(e,t){super(e.client,t,n),this.message=e}add(e,t){return super.add(e,t,{id:e.emoji.id||e.emoji.name,extras:[this.message]})}removeAll(){return this.client.api.channels(this.message.channel.id).messages(this.message.id).reactions.delete().then(()=>this.message)}}},function(e,t,i){"use strict";const s=i(2);e.exports=class LimitedCollection extends s{constructor(e=0,t=null){super(t),this.maxSize=e}set(e,t){return 0===this.maxSize?this:(this.size>=this.maxSize&&!this.has(e)&&this.delete(this.firstKey()),super.set(e,t))}static get[Symbol.species](){return s}}},function(e,t,i){"use strict";const s=i(40);e.exports=class GuildPreviewEmoji extends s{get roles(){return new Set(this._roles)}}},function(e,t,i){"use strict";const s=i(6),n=i(27);e.exports=class VoiceStateManager extends s{constructor(e,t){super(e.client,t,n),this.guild=e}add(e,t=!0){const i=this.cache.get(e.user_id);if(i)return i._patch(e);const s=new n(this.guild,e);return t&&this.cache.set(e.user_id,s),s}}},function(e,t,i){"use strict";const s=i(16),{Error:n}=i(3);e.exports=class PartialGroupDMChannel extends s{constructor(e,t){super(e,t),this.name=t.name,this.icon=t.icon}iconURL({format:e,size:t}={}){return this.icon?this.client.rest.cdn.GDMIcon(this.id,this.icon,e,t):null}delete(){return Promise.reject(new n("DELETE_GROUP_DM_CHANNEL"))}fetch(){return Promise.reject(new n("FETCH_GROUP_DM_CHANNEL"))}}},function(e,t,i){"use strict";const s=i(1),n=i(16),{ChannelTypes:r}=i(0);e.exports=class ChannelUpdateAction extends s{handle(e){let t=this.client.channels.cache.get(e.id);if(t){const i=t._update(e);if(r[t.type.toUpperCase()]!==e.type){const i=n.create(this.client,e,t.guild);for(const[e,s]of t.messages.cache)i.messages.cache.set(e,s);i._typing=new Map(t._typing),t=i,this.client.channels.cache.set(t.id,t)}return{old:i,updated:t}}return{}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildDeleteAction extends s{constructor(e){super(e),this.deleted=new Map}handle(e){const t=this.client;let i=t.guilds.cache.get(e.id);if(i){for(const e of i.channels.cache.values())"text"===e.type&&e.stopTyping(!0);if(e.unavailable)return i.available=!1,t.emit(n.GUILD_UNAVAILABLE,i),{guild:null};for(const e of i.channels.cache.values())this.client.channels.remove(e.id);i.voice&&i.voice.connection&&i.voice.connection.disconnect(),t.guilds.cache.delete(i.id),i.deleted=!0,t.emit(n.GUILD_DELETE,i),this.deleted.set(i.id,i),this.scheduleForDeletion(i.id)}else i=this.deleted.get(e.id)||null;return{guild:i}}scheduleForDeletion(e){this.client.setTimeout(()=>this.deleted.delete(e),this.client.options.restWsBridgeTimeout)}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildUpdateAction extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.id);if(i){const s=i._update(e);return t.emit(n.GUILD_UPDATE,s,i),{old:s,updated:i}}return{old:null,updated:null}}}},function(e,t,i){"use strict";const s=i(1),n=i(18),{Events:r}=i(0);e.exports=class InviteCreateAction extends s{handle(e){const t=this.client,i=t.channels.cache.get(e.channel_id),s=t.guilds.cache.get(e.guild_id);if(!i&&!s)return!1;const o=Object.assign(e,{channel:i,guild:s}),a=new n(t,o);return t.emit(r.INVITE_CREATE,a),{invite:a}}}},function(e,t,i){"use strict";const s=i(1),n=i(18),{Events:r}=i(0);e.exports=class InviteDeleteAction extends s{handle(e){const t=this.client,i=t.channels.cache.get(e.channel_id),s=t.guilds.cache.get(e.guild_id);if(!i&&!s)return!1;const o=Object.assign(e,{channel:i,guild:s}),a=new n(t,o);return t.emit(r.INVITE_DELETE,a),{invite:a}}}},function(e,t,i){"use strict";const s=i(1),{Events:n,Status:r}=i(0);e.exports=class GuildMemberRemoveAction extends s{handle(e,t){const i=this.client,s=i.guilds.cache.get(e.guild_id);let o=null;return s&&(o=this.getMember(e,s),s.memberCount--,o&&(o.deleted=!0,s.members.cache.delete(o.id),t.status===r.READY&&i.emit(n.GUILD_MEMBER_REMOVE,o)),s.voiceStates.cache.delete(e.user.id)),{guild:s,member:o}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildBanRemove extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id),s=t.users.add(e.user);i&&s&&t.emit(n.GUILD_BAN_REMOVE,i,s)}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildRoleCreate extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id);let s;if(i){const r=i.roles.cache.has(e.role.id);s=i.roles.add(e.role),r||t.emit(n.GUILD_ROLE_CREATE,s)}return{role:s}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildRoleDeleteAction extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id);let s;return i&&(s=i.roles.cache.get(e.role_id),s&&(i.roles.cache.delete(e.role_id),s.deleted=!0,t.emit(n.GUILD_ROLE_DELETE,s))),{role:s}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildRoleUpdateAction extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id);if(i){let s=null;const r=i.roles.cache.get(e.role.id);return r&&(s=r._update(e.role),t.emit(n.GUILD_ROLE_UPDATE,s,r)),{old:s,updated:r}}return{old:null,updated:null}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class PresenceUpdateAction extends s{handle(e){let t=this.client.users.cache.get(e.user.id);if(!t&&e.user.username&&(t=this.client.users.add(e.user)),!t)return;e.user&&e.user.username&&(t.equals(e.user)||this.client.actions.UserUpdate.handle(e.user));const i=this.client.guilds.cache.get(e.guild_id);if(!i)return;let s=i.presences.cache.get(t.id);s&&(s=s._clone());let r=i.members.cache.get(t.id);r||"offline"===e.status||(r=i.members.add({user:t,roles:e.roles,deaf:!1,mute:!1}),this.client.emit(n.GUILD_MEMBER_AVAILABLE,r)),i.presences.add(Object.assign(e,{guild:i})),r&&this.client.listenerCount(n.PRESENCE_UPDATE)&&this.client.emit(n.PRESENCE_UPDATE,s,r.presence)}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class UserUpdateAction extends s{handle(e){const t=this.client,i=t.users.cache.get(e.id),s=i._update(e);return s.equals(i)?{old:null,updated:null}:(t.emit(n.USER_UPDATE,s,i),{old:s,updated:i})}}},function(e,t,i){"use strict";const s=i(1),n=i(27),{Events:r}=i(0);e.exports=class VoiceStateUpdate extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id);if(i){const s=i.voiceStates.cache.has(e.user_id)?i.voiceStates.cache.get(e.user_id)._clone():new n(i,{user_id:e.user_id}),o=i.voiceStates.add(e);let a=i.members.cache.get(e.user_id);a&&e.member?a._patch(e.member):e.member&&e.member.user&&e.member.joined_at&&(a=i.members.add(e.member)),a&&a.user.id===t.user.id&&(t.emit("debug",`[VOICE] received voice state update: ${JSON.stringify(e)}`),t.voice.onVoiceStateUpdate(e)),t.emit(r.VOICE_STATE_UPDATE,s,o)}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildEmojiCreateAction extends s{handle(e,t){const i=e.emojis.add(t);return this.client.emit(n.GUILD_EMOJI_CREATE,i),{emoji:i}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildEmojiDeleteAction extends s{handle(e){return e.guild.emojis.cache.delete(e.id),e.deleted=!0,this.client.emit(n.GUILD_EMOJI_DELETE,e),{emoji:e}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildEmojiUpdateAction extends s{handle(e,t){const i=e._update(t);return this.client.emit(n.GUILD_EMOJI_UPDATE,i,e),{emoji:e}}}},function(e,t,i){"use strict";const s=i(1);e.exports=class GuildEmojisUpdateAction extends s{handle(e){const t=this.client.guilds.cache.get(e.guild_id);if(!t||!t.emojis)return;const i=new Map(t.emojis.cache);for(const s of e.emojis){const e=t.emojis.cache.get(s.id);e?(i.delete(s.id),e.equals(s)||this.client.actions.GuildEmojiUpdate.handle(e,s)):this.client.actions.GuildEmojiCreate.handle(t,s)}for(const e of i.values())this.client.actions.GuildEmojiDelete.handle(e)}}},function(e,t,i){"use strict";const s=i(1);e.exports=class GuildRolesPositionUpdate extends s{handle(e){const t=this.client.guilds.cache.get(e.guild_id);if(t)for(const i of e.roles){const e=t.roles.cache.get(i.id);e&&(e.rawPosition=i.position)}return{guild:t}}}},function(e,t,i){"use strict";const s=i(1);e.exports=class GuildChannelsPositionUpdate extends s{handle(e){const t=this.client.guilds.cache.get(e.guild_id);if(t)for(const i of e.channels){const e=t.channels.cache.get(i.id);e&&(e.rawPosition=i.position)}return{guild:t}}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class GuildIntegrationsUpdate extends s{handle(e){const t=this.client,i=t.guilds.cache.get(e.guild_id);i&&t.emit(n.GUILD_INTEGRATIONS_UPDATE,i)}}},function(e,t,i){"use strict";const s=i(1),{Events:n}=i(0);e.exports=class WebhooksUpdate extends s{handle(e){const t=this.client,i=t.channels.cache.get(e.channel_id);i&&t.emit(n.WEBHOOKS_UPDATE,i)}}},function(e,t){},function(e,t,i){"use strict";const s=i(15),n=i(160),r=i(91),{Error:o}=i(3),a=i(2),{Events:c,ShardEvents:l,Status:h,WSCodes:u,WSEvents:d}=i(0),p=i(4),f=[d.READY,d.RESUMED,d.GUILD_CREATE,d.GUILD_DELETE,d.GUILD_MEMBERS_CHUNK,d.GUILD_MEMBER_ADD,d.GUILD_MEMBER_REMOVE],m=Object.keys(u).slice(1).map(Number),g=[1e3,4006,4007];e.exports=class WebSocketManager extends s{constructor(e){super(),Object.defineProperty(this,"client",{value:e}),this.gateway=void 0,this.totalShards=this.client.options.shards.length,this.shards=new a,Object.defineProperty(this,"shardQueue",{value:new Set,writable:!0}),Object.defineProperty(this,"packetQueue",{value:[]}),this.status=h.IDLE,this.destroyed=!1,this.reconnecting=!1,this.sessionStartLimit=void 0}get ping(){return this.shards.reduce((e,t)=>e+t.ping,0)/this.shards.size}debug(e,t){this.client.emit(c.DEBUG,`[WS => ${t?`Shard ${t.id}`:"Manager"}] ${e}`)}async connect(){const e=new o(u[4004]),{url:t,shards:i,session_start_limit:s}=await this.client.api.gateway.bot.get().catch(t=>{throw 401===t.httpStatus?e:t});this.sessionStartLimit=s;const{total:r,remaining:a,reset_after:c}=s;this.debug(`Fetched Gateway Information\n    URL: ${t}\n    Recommended Shards: ${i}`),this.debug(`Session Limit Information\n    Total: ${r}\n    Remaining: ${a}`),this.gateway=`${t}/`;let{shards:l}=this.client.options;return"auto"===l&&(this.debug(`Using the recommended shard count provided by Discord: ${i}`),this.totalShards=this.client.options.shardCount=i,l=this.client.options.shards=Array.from({length:i},(e,t)=>t)),this.totalShards=l.length,this.debug(`Spawning shards: ${l.join(", ")}`),this.shardQueue=new Set(l.map(e=>new n(this,e))),await this._handleSessionLimit(a,c),this.createShards()}async createShards(){if(!this.shardQueue.size)return!1;const[e]=this.shardQueue;this.shardQueue.delete(e),e.eventsAttached||(e.on(l.ALL_READY,t=>{this.client.emit(c.SHARD_READY,e.id,t),this.shardQueue.size||(this.reconnecting=!1),this.checkShardsReady()}),e.on(l.CLOSE,t=>{if(1e3===t.code?this.destroyed:m.includes(t.code))return this.client.emit(c.SHARD_DISCONNECT,t,e.id),void this.debug(u[t.code],e);g.includes(t.code)&&(e.sessionID=void 0),this.client.emit(c.SHARD_RECONNECTING,e.id),this.shardQueue.add(e),e.sessionID?(this.debug("Session ID is present, attempting an immediate reconnect...",e),this.reconnect(!0)):(e.destroy({reset:!0,emit:!1,log:!1}),this.reconnect())}),e.on(l.INVALID_SESSION,()=>{this.client.emit(c.SHARD_RECONNECTING,e.id)}),e.on(l.DESTROYED,()=>{this.debug("Shard was destroyed but no WebSocket connection was present! Reconnecting...",e),this.client.emit(c.SHARD_RECONNECTING,e.id),this.shardQueue.add(e),this.reconnect()}),e.eventsAttached=!0),this.shards.set(e.id,e);try{await e.connect()}catch(t){if(t&&t.code&&m.includes(t.code))throw new o(u[t.code]);if(t&&!t.code)throw t;this.debug("Failed to connect to the gateway, requeueing...",e),this.shardQueue.add(e)}return!this.shardQueue.size||(this.debug(`Shard Queue Size: ${this.shardQueue.size}; continuing in 5 seconds...`),await p.delayFor(5e3),await this._handleSessionLimit(),this.createShards())}async reconnect(e=!1){if(this.reconnecting||this.status!==h.READY)return!1;this.reconnecting=!0;try{e||await this._handleSessionLimit(),await this.createShards()}catch(e){if(this.debug(`Couldn't reconnect or fetch information about the gateway. ${e}`),401!==e.httpStatus)return this.debug("Possible network error occurred. Retrying in 5s..."),await p.delayFor(5e3),this.reconnecting=!1,this.reconnect();this.client.listenerCount(c.INVALIDATED)?(this.client.emit(c.INVALIDATED),this.destroy()):this.client.destroy()}finally{this.reconnecting=!1}return!0}broadcast(e){for(const t of this.shards.values())t.send(e)}destroy(){if(!this.destroyed){this.debug(`Manager was destroyed. Called by:\n${new Error("MANAGER_DESTROYED").stack}`),this.destroyed=!0,this.shardQueue.clear();for(const e of this.shards.values())e.destroy({closeCode:1e3,reset:!0,emit:!1,log:!1})}}async _handleSessionLimit(e,t){if(void 0===e&&void 0===t){const{session_start_limit:i}=await this.client.api.gateway.bot.get();this.sessionStartLimit=i,e=i.remaining,t=i.reset_after,this.debug(`Session Limit Information\n    Total: ${i.total}\n    Remaining: ${e}`)}e||(this.debug(`Exceeded identify threshold. Will attempt a connection in ${t}ms`),await p.delayFor(t))}handlePacket(e,t){if(e&&this.status!==h.READY&&!f.includes(e.t))return this.packetQueue.push({packet:e,shard:t}),!1;if(this.packetQueue.length){const e=this.packetQueue.shift();this.client.setImmediate(()=>{this.handlePacket(e.packet,e.shard)})}return e&&r[e.t]&&r[e.t](this.client,e,t),!0}async checkShardsReady(){if(this.status!==h.READY&&this.shards.size===this.totalShards&&!this.shards.some(e=>e.status!==h.READY)){if(this.status=h.NEARLY,this.client.options.fetchAllMembers)try{const e=this.client.guilds.cache.map(e=>e.available?e.members.fetch():Promise.resolve());await Promise.all(e)}catch(e){this.debug(`Failed to fetch all members before ready! ${e}\n${e.stack}`)}this.triggerClientReady()}}triggerClientReady(){this.status=h.READY,this.client.readyAt=new Date,this.client.emit(c.CLIENT_READY),this.handlePacket()}}},function(e,t,i){"use strict";const s=i(15),n=i(90),{browser:r,Status:o,Events:a,ShardEvents:c,OPCodes:l,WSEvents:h}=i(0),u=Object.keys(o),d=Object.keys(n.WebSocket);let p;if(!r)try{p=i(166)}catch{}e.exports=class WebSocketShard extends s{constructor(e,t){super(),this.manager=e,this.id=t,this.status=o.IDLE,this.sequence=-1,this.closeSequence=0,this.sessionID=void 0,this.ping=-1,this.lastPingTimestamp=-1,this.lastHeartbeatAcked=!0,Object.defineProperty(this,"ratelimit",{value:{queue:[],total:120,remaining:120,time:6e4,timer:null}}),Object.defineProperty(this,"connection",{value:null,writable:!0}),Object.defineProperty(this,"inflate",{value:null,writable:!0}),Object.defineProperty(this,"helloTimeout",{value:void 0,writable:!0}),Object.defineProperty(this,"eventsAttached",{value:!1,writable:!0}),Object.defineProperty(this,"expectedGuilds",{value:void 0,writable:!0}),Object.defineProperty(this,"readyTimeout",{value:void 0,writable:!0}),Object.defineProperty(this,"connectedAt",{value:0,writable:!0})}debug(e){this.manager.debug(e,this)}connect(){const{gateway:e,client:t}=this.manager;return this.connection&&this.connection.readyState===n.OPEN&&this.status===o.READY?Promise.resolve():new Promise((i,s)=>{const r=()=>{this.removeListener(c.CLOSE,h),this.removeListener(c.READY,a),this.removeListener(c.RESUMED,l),this.removeListener(c.INVALID_SESSION,u),this.removeListener(c.DESTROYED,u)},a=()=>{r(),i()},l=()=>{r(),i()},h=e=>{r(),s(e)},u=()=>{r(),s()};if(this.once(c.READY,a),this.once(c.RESUMED,l),this.once(c.CLOSE,h),this.once(c.INVALID_SESSION,u),this.once(c.DESTROYED,u),this.connection&&this.connection.readyState===n.OPEN)return this.debug("An open connection was found, attempting an immediate identify."),void this.identify();this.connection&&(this.debug(`A connection object was found. Cleaning up before continuing.\n    State: ${d[this.connection.readyState]}`),this.destroy({emit:!1}));const f={v:t.options.ws.version};p&&(this.inflate=new p.Inflate({chunkSize:65535,flush:p.Z_SYNC_FLUSH,to:"json"===n.encoding?"string":""}),f.compress="zlib-stream"),this.debug(`[CONNECT]\n    Gateway    : ${e}\n    Version    : ${t.options.ws.version}\n    Encoding   : ${n.encoding}\n    Compression: ${p?"zlib-stream":"none"}`),this.status=this.status===o.DISCONNECTED?o.RECONNECTING:o.CONNECTING,this.setHelloTimeout(),this.connectedAt=Date.now();const m=this.connection=n.create(e,f);m.onopen=this.onOpen.bind(this),m.onmessage=this.onMessage.bind(this),m.onerror=this.onError.bind(this),m.onclose=this.onClose.bind(this)})}onOpen(){this.debug(`[CONNECTED] ${this.connection.url} in ${Date.now()-this.connectedAt}ms`),this.status=o.NEARLY}onMessage({data:e}){let t,i;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),p){const i=e.length,s=i>=4&&0===e[i-4]&&0===e[i-3]&&255===e[i-2]&&255===e[i-1];if(this.inflate.push(e,s&&p.Z_SYNC_FLUSH),!s)return;t=this.inflate.result}else t=e;try{i=n.unpack(t),this.manager.client.emit(a.RAW,i,this.id),i.op===l.DISPATCH&&this.manager.emit(i.t,i.d,this.id)}catch(e){return void this.manager.client.emit(a.SHARD_ERROR,e,this.id)}this.onPacket(i)}onError(e){const t=e&&e.error?e.error:e;t&&this.manager.client.emit(a.SHARD_ERROR,t,this.id)}onClose(e){-1!==this.sequence&&(this.closeSequence=this.sequence),this.sequence=-1,this.debug(`[CLOSE]\n    Event Code: ${e.code}\n    Clean     : ${e.wasClean}\n    Reason    : ${e.reason||"No reason received"}`),this.setHeartbeatTimer(-1),this.setHelloTimeout(-1),this.connection&&this._cleanupConnection(),this.status=o.DISCONNECTED,this.emit(c.CLOSE,e)}onPacket(e){if(e){switch(e.t){case h.READY:this.emit(c.READY),this.sessionID=e.d.session_id,this.expectedGuilds=new Set(e.d.guilds.map(e=>e.id)),this.status=o.WAITING_FOR_GUILDS,this.debug(`[READY] Session ${this.sessionID}.`),this.lastHeartbeatAcked=!0,this.sendHeartbeat("ReadyHeartbeat");break;case h.RESUMED:{this.emit(c.RESUMED),this.status=o.READY;const t=e.s-this.closeSequence;this.debug(`[RESUMED] Session ${this.sessionID} | Replayed ${t} events.`),this.lastHeartbeatAcked=!0,this.sendHeartbeat("ResumeHeartbeat");break}}switch(e.s>this.sequence&&(this.sequence=e.s),e.op){case l.HELLO:this.setHelloTimeout(-1),this.setHeartbeatTimer(e.d.heartbeat_interval),this.identify();break;case l.RECONNECT:this.debug("[RECONNECT] Discord asked us to reconnect"),this.destroy({closeCode:4e3});break;case l.INVALID_SESSION:if(this.debug(`[INVALID SESSION] Resumable: ${e.d}.`),e.d)return void this.identifyResume();this.sequence=-1,this.sessionID=void 0,this.status=o.RECONNECTING,this.emit(c.INVALID_SESSION);break;case l.HEARTBEAT_ACK:this.ackHeartbeat();break;case l.HEARTBEAT:this.sendHeartbeat("HeartbeatRequest",!0);break;default:this.manager.handlePacket(e,this),this.status===o.WAITING_FOR_GUILDS&&e.t===h.GUILD_CREATE&&(this.expectedGuilds.delete(e.d.id),this.checkReady())}}else this.debug(`Received broken packet: '${e}'.`)}checkReady(){if(this.readyTimeout&&(this.manager.client.clearTimeout(this.readyTimeout),this.readyTimeout=void 0),!this.expectedGuilds.size)return this.debug("Shard received all its guilds. Marking as fully ready."),this.status=o.READY,void this.emit(c.ALL_READY);this.readyTimeout=this.manager.client.setTimeout(()=>{this.debug(`Shard did not receive any more guild packets in 15 seconds.\n  Unavailable guild count: ${this.expectedGuilds.size}`),this.readyTimeout=void 0,this.status=o.READY,this.emit(c.ALL_READY,this.expectedGuilds)},15e3)}setHelloTimeout(e){-1!==e?(this.debug("Setting a HELLO timeout for 20s."),this.helloTimeout=this.manager.client.setTimeout(()=>{this.debug("Did not receive HELLO in time. Destroying and connecting again."),this.destroy({reset:!0,closeCode:4009})},2e4)):this.helloTimeout&&(this.debug("Clearing the HELLO timeout."),this.manager.client.clearTimeout(this.helloTimeout),this.helloTimeout=void 0)}setHeartbeatTimer(e){-1!==e?(this.debug(`Setting a heartbeat interval for ${e}ms.`),this.heartbeatInterval&&this.manager.client.clearInterval(this.heartbeatInterval),this.heartbeatInterval=this.manager.client.setInterval(()=>this.sendHeartbeat(),e)):this.heartbeatInterval&&(this.debug("Clearing the heartbeat interval."),this.manager.client.clearInterval(this.heartbeatInterval),this.heartbeatInterval=void 0)}sendHeartbeat(e="HeartbeatTimer",t=[o.WAITING_FOR_GUILDS,o.IDENTIFYING,o.RESUMING].includes(this.status)){if(t&&!this.lastHeartbeatAcked)this.debug(`[${e}] Didn't process heartbeat ack yet but we are still connected. Sending one now.`);else if(!this.lastHeartbeatAcked)return this.debug(`[${e}] Didn't receive a heartbeat ack last time, assuming zombie connection. Destroying and reconnecting.\n    Status          : ${u[this.status]}\n    Sequence        : ${this.sequence}\n    Connection State: ${this.connection?d[this.connection.readyState]:"No Connection??"}`),void this.destroy({closeCode:4009,reset:!0});this.debug(`[${e}] Sending a heartbeat.`),this.lastHeartbeatAcked=!1,this.lastPingTimestamp=Date.now(),this.send({op:l.HEARTBEAT,d:this.sequence},!0)}ackHeartbeat(){this.lastHeartbeatAcked=!0;const e=Date.now()-this.lastPingTimestamp;this.debug(`Heartbeat acknowledged, latency of ${e}ms.`),this.ping=e}identify(){return this.sessionID?this.identifyResume():this.identifyNew()}identifyNew(){const{client:e}=this.manager;if(!e.token)return void this.debug("[IDENTIFY] No token available to identify a new session.");this.status=o.IDENTIFYING;const t={...e.options.ws,token:e.token,shard:[this.id,Number(e.options.shardCount)]};this.debug(`[IDENTIFY] Shard ${this.id}/${e.options.shardCount}`),this.send({op:l.IDENTIFY,d:t},!0)}identifyResume(){if(!this.sessionID)return this.debug("[RESUME] No session ID was present; identifying as a new session."),void this.identifyNew();this.status=o.RESUMING,this.debug(`[RESUME] Session ${this.sessionID}, sequence ${this.closeSequence}`);const e={token:this.manager.client.token,session_id:this.sessionID,seq:this.closeSequence};this.send({op:l.RESUME,d:e},!0)}send(e,t=!1){this.ratelimit.queue[t?"unshift":"push"](e),this.processQueue()}_send(e){if(!this.connection||this.connection.readyState!==n.OPEN)return this.debug(`Tried to send packet '${JSON.stringify(e)}' but no WebSocket is available!`),void this.destroy({close:4e3});this.connection.send(n.pack(e),e=>{e&&this.manager.client.emit(a.SHARD_ERROR,e,this.id)})}processQueue(){if(0!==this.ratelimit.remaining&&0!==this.ratelimit.queue.length)for(this.ratelimit.remaining===this.ratelimit.total&&(this.ratelimit.timer=this.manager.client.setTimeout(()=>{this.ratelimit.remaining=this.ratelimit.total,this.processQueue()},this.ratelimit.time));this.ratelimit.remaining>0;){const e=this.ratelimit.queue.shift();if(!e)return;this._send(e),this.ratelimit.remaining--}}destroy({closeCode:e=1e3,reset:t=!1,emit:i=!0,log:s=!0}={}){if(s&&this.debug(`[DESTROY]\n    Close Code    : ${e}\n    Reset         : ${t}\n    Emit DESTROYED: ${i}`),this.setHeartbeatTimer(-1),this.setHelloTimeout(-1),this.connection)if(this.connection.readyState===n.OPEN)this.connection.close(e);else{this.debug(`WS State: ${d[this.connection.readyState]}`),this._cleanupConnection();try{this.connection.close(e)}catch{}i&&this._emitDestroyed()}else i&&this._emitDestroyed();this.connection=null,this.status=o.DISCONNECTED,-1!==this.sequence&&(this.closeSequence=this.sequence),t&&(this.sequence=-1,this.sessionID=void 0),this.ratelimit.remaining=this.ratelimit.total,this.ratelimit.queue.length=0,this.ratelimit.timer&&(this.manager.client.clearTimeout(this.ratelimit.timer),this.ratelimit.timer=null)}_cleanupConnection(){this.connection.onopen=this.connection.onclose=this.connection.onerror=this.connection.onmessage=null}_emitDestroyed(){this.emit(c.DESTROYED)}}},function(e,t){},function(e,t,i){(function(e){var s=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),i={},s=0;s<t.length;s++)i[t[s]]=Object.getOwnPropertyDescriptor(e,t[s]);return i},n=/%[sdj%]/g;t.format=function(e){if(!E(e)){for(var t=[],i=0;i<arguments.length;i++)t.push(a(arguments[i]));return t.join(" ")}i=1;for(var s=arguments,r=s.length,o=String(e).replace(n,(function(e){if("%%"===e)return"%";if(i>=r)return e;switch(e){case"%s":return String(s[i++]);case"%d":return Number(s[i++]);case"%j":try{return JSON.stringify(s[i++])}catch(e){return"[Circular]"}default:return e}})),c=s[i];i<r;c=s[++i])m(c)||!b(c)?o+=" "+c:o+=" "+a(c);return o},t.deprecate=function(i,s){if(void 0!==e&&!0===e.noDeprecation)return i;if(void 0===e)return function(){return t.deprecate(i,s).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(s);e.traceDeprecation?console.trace(s):console.error(s),n=!0}return i.apply(this,arguments)}};var r,o={};function a(e,i){var s={seen:[],stylize:l};return arguments.length>=3&&(s.depth=arguments[2]),arguments.length>=4&&(s.colors=arguments[3]),f(i)?s.showHidden=i:i&&t._extend(s,i),_(s.showHidden)&&(s.showHidden=!1),_(s.depth)&&(s.depth=2),_(s.colors)&&(s.colors=!1),_(s.customInspect)&&(s.customInspect=!0),s.colors&&(s.stylize=c),h(s,e,s.depth)}function c(e,t){var i=a.styles[t];return i?"["+a.colors[i][0]+"m"+e+"["+a.colors[i][1]+"m":e}function l(e,t){return e}function h(e,i,s){if(e.customInspect&&i&&A(i.inspect)&&i.inspect!==t.inspect&&(!i.constructor||i.constructor.prototype!==i)){var n=i.inspect(s,e);return E(n)||(n=h(e,n,s)),n}var r=function(e,t){if(_(t))return e.stylize("undefined","undefined");if(E(t)){var i="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(i,"string")}if(g(t))return e.stylize(""+t,"number");if(f(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(e,i);if(r)return r;var o=Object.keys(i),a=function(e){var t={};return e.forEach((function(e,i){t[e]=!0})),t}(o);if(e.showHidden&&(o=Object.getOwnPropertyNames(i)),w(i)&&(o.indexOf("message")>=0||o.indexOf("description")>=0))return u(i);if(0===o.length){if(A(i)){var c=i.name?": "+i.name:"";return e.stylize("[Function"+c+"]","special")}if(y(i))return e.stylize(RegExp.prototype.toString.call(i),"regexp");if(v(i))return e.stylize(Date.prototype.toString.call(i),"date");if(w(i))return u(i)}var l,b="",S=!1,I=["{","}"];(p(i)&&(S=!0,I=["[","]"]),A(i))&&(b=" [Function"+(i.name?": "+i.name:"")+"]");return y(i)&&(b=" "+RegExp.prototype.toString.call(i)),v(i)&&(b=" "+Date.prototype.toUTCString.call(i)),w(i)&&(b=" "+u(i)),0!==o.length||S&&0!=i.length?s<0?y(i)?e.stylize(RegExp.prototype.toString.call(i),"regexp"):e.stylize("[Object]","special"):(e.seen.push(i),l=S?function(e,t,i,s,n){for(var r=[],o=0,a=t.length;o<a;++o)N(t,String(o))?r.push(d(e,t,i,s,String(o),!0)):r.push("");return n.forEach((function(n){n.match(/^\d+$/)||r.push(d(e,t,i,s,n,!0))})),r}(e,i,s,a,o):o.map((function(t){return d(e,i,s,a,t,S)})),e.seen.pop(),function(e,t,i){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return i[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+i[1];return i[0]+t+" "+e.join(", ")+" "+i[1]}(l,b,I)):I[0]+b+I[1]}function u(e){return"["+Error.prototype.toString.call(e)+"]"}function d(e,t,i,s,n,r){var o,a,c;if((c=Object.getOwnPropertyDescriptor(t,n)||{value:t[n]}).get?a=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(a=e.stylize("[Setter]","special")),N(s,n)||(o="["+n+"]"),a||(e.seen.indexOf(c.value)<0?(a=m(i)?h(e,c.value,null):h(e,c.value,i-1)).indexOf("\n")>-1&&(a=r?a.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+a.split("\n").map((function(e){return"   "+e})).join("\n")):a=e.stylize("[Circular]","special")),_(o)){if(r&&n.match(/^\d+$/))return a;(o=JSON.stringify(""+n)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(o=o.substr(1,o.length-2),o=e.stylize(o,"name")):(o=o.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),o=e.stylize(o,"string"))}return o+": "+a}function p(e){return Array.isArray(e)}function f(e){return"boolean"==typeof e}function m(e){return null===e}function g(e){return"number"==typeof e}function E(e){return"string"==typeof e}function _(e){return void 0===e}function y(e){return b(e)&&"[object RegExp]"===S(e)}function b(e){return"object"==typeof e&&null!==e}function v(e){return b(e)&&"[object Date]"===S(e)}function w(e){return b(e)&&("[object Error]"===S(e)||e instanceof Error)}function A(e){return"function"==typeof e}function S(e){return Object.prototype.toString.call(e)}function I(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(i){if(_(r)&&(r=e.env.NODE_DEBUG||""),i=i.toUpperCase(),!o[i])if(new RegExp("\\b"+i+"\\b","i").test(r)){var s=e.pid;o[i]=function(){var e=t.format.apply(t,arguments);console.error("%s %d: %s",i,s,e)}}else o[i]=function(){};return o[i]},t.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=p,t.isBoolean=f,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=E,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=_,t.isRegExp=y,t.isObject=b,t.isDate=v,t.isError=w,t.isFunction=A,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=i(163);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function D(){var e=new Date,t=[I(e.getHours()),I(e.getMinutes()),I(e.getSeconds())].join(":");return[e.getDate(),T[e.getMonth()],t].join(" ")}function N(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",D(),t.format.apply(t,arguments))},t.inherits=i(164),t._extend=function(e,t){if(!t||!b(t))return e;for(var i=Object.keys(t),s=i.length;s--;)e[i[s]]=t[i[s]];return e};var R="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function O(e,t){if(!e){var i=new Error("Promise was rejected with a falsy value");i.reason=e,e=i}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(R&&e[R]){var t;if("function"!=typeof(t=e[R]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(t,R,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,i,s=new Promise((function(e,s){t=e,i=s})),n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);n.push((function(e,s){e?i(e):t(s)}));try{e.apply(this,n)}catch(e){i(e)}return s}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),R&&Object.defineProperty(t,R,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,s(e))},t.promisify.custom=R,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');function i(){for(var i=[],s=0;s<arguments.length;s++)i.push(arguments[s]);var n=i.pop();if("function"!=typeof n)throw new TypeError("The last argument must be of type Function");var r=this,o=function(){return n.apply(r,arguments)};t.apply(this,i).then((function(t){e.nextTick(o,null,t)}),(function(t){e.nextTick(O,t,o)}))}return Object.setPrototypeOf(i,Object.getPrototypeOf(t)),Object.defineProperties(i,s(t)),i}}).call(this,i(14))},function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}},function(e,t){},function(e,t){},function(e,t,i){var s={"./CHANNEL_CREATE.js":168,"./CHANNEL_DELETE.js":169,"./CHANNEL_PINS_UPDATE.js":170,"./CHANNEL_UPDATE.js":171,"./GUILD_BAN_ADD.js":172,"./GUILD_BAN_REMOVE.js":173,"./GUILD_CREATE.js":174,"./GUILD_DELETE.js":175,"./GUILD_EMOJIS_UPDATE.js":176,"./GUILD_INTEGRATIONS_UPDATE.js":177,"./GUILD_MEMBERS_CHUNK.js":178,"./GUILD_MEMBER_ADD.js":179,"./GUILD_MEMBER_REMOVE.js":180,"./GUILD_MEMBER_UPDATE.js":181,"./GUILD_ROLE_CREATE.js":182,"./GUILD_ROLE_DELETE.js":183,"./GUILD_ROLE_UPDATE.js":184,"./GUILD_UPDATE.js":185,"./INVITE_CREATE.js":186,"./INVITE_DELETE.js":187,"./MESSAGE_CREATE.js":188,"./MESSAGE_DELETE.js":189,"./MESSAGE_DELETE_BULK.js":190,"./MESSAGE_REACTION_ADD.js":191,"./MESSAGE_REACTION_REMOVE.js":192,"./MESSAGE_REACTION_REMOVE_ALL.js":193,"./MESSAGE_REACTION_REMOVE_EMOJI.js":194,"./MESSAGE_UPDATE.js":195,"./PRESENCE_UPDATE.js":196,"./READY.js":197,"./RESUMED.js":198,"./TYPING_START.js":199,"./USER_UPDATE.js":200,"./VOICE_SERVER_UPDATE.js":201,"./VOICE_STATE_UPDATE.js":202,"./WEBHOOKS_UPDATE.js":203,"./index.js":91};function n(e){var t=r(e);return i(t)}function r(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id=167},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.ChannelCreate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.ChannelDelete.handle(t.d)}},function(e,t,i){"use strict";const{Events:s}=i(0);e.exports=(e,{d:t})=>{const i=e.channels.cache.get(t.channel_id),n=new Date(t.last_pin_timestamp);i&&!Number.isNaN(n.getTime())&&(i.lastPinTimestamp=n.getTime()||null,e.emit(s.CHANNEL_PINS_UPDATE,i,n))}},function(e,t,i){"use strict";const{Events:s}=i(0);e.exports=(e,t)=>{const{old:i,updated:n}=e.actions.ChannelUpdate.handle(t.d);i&&n&&e.emit(s.CHANNEL_UPDATE,i,n)}},function(e,t,i){"use strict";const{Events:s}=i(0);e.exports=(e,{d:t})=>{const i=e.guilds.cache.get(t.guild_id),n=e.users.add(t.user);i&&n&&e.emit(s.GUILD_BAN_ADD,i,n)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildBanRemove.handle(t.d)}},function(e,t,i){"use strict";const{Events:s,Status:n}=i(0);e.exports=async(e,{d:t},i)=>{let r=e.guilds.cache.get(t.id);r?r.available||t.unavailable||(r._patch(t),e.ws.status===n.READY&&e.options.fetchAllMembers&&await r.members.fetch().catch(t=>e.emit(s.DEBUG,`Failed to fetch all members: ${t}\n${t.stack}`))):(t.shardID=i.id,r=e.guilds.add(t),e.ws.status===n.READY&&(e.options.fetchAllMembers&&await r.members.fetch().catch(t=>e.emit(s.DEBUG,`Failed to fetch all members: ${t}\n${t.stack}`)),e.emit(s.GUILD_CREATE,r)))}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildDelete.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildEmojisUpdate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildIntegrationsUpdate.handle(t.d)}},function(e,t,i){"use strict";const s=i(2),{Events:n}=i(0);e.exports=(e,{d:t})=>{const i=e.guilds.cache.get(t.guild_id);if(!i)return;const r=new s;for(const e of t.members)r.set(e.user.id,i.members.add(e));if(t.presences)for(const e of t.presences)i.presences.cache.add(Object.assign(e,{guild:i}));e.emit(n.GUILD_MEMBERS_CHUNK,r,i)}},function(e,t,i){"use strict";const{Events:s,Status:n}=i(0);e.exports=(e,{d:t},i)=>{const r=e.guilds.cache.get(t.guild_id);if(r){r.memberCount++;const o=r.members.add(t);i.status===n.READY&&e.emit(s.GUILD_MEMBER_ADD,o)}}},function(e,t,i){"use strict";e.exports=(e,t,i)=>{e.actions.GuildMemberRemove.handle(t.d,i)}},function(e,t,i){"use strict";const{Status:s,Events:n}=i(0);e.exports=(e,{d:t},i)=>{const r=e.guilds.cache.get(t.guild_id);if(r){const o=r.members.cache.get(t.user.id);if(o){const r=o._update(t);i.status===s.READY&&e.emit(n.GUILD_MEMBER_UPDATE,r,o)}}}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildRoleCreate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildRoleDelete.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildRoleUpdate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.GuildUpdate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.InviteCreate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.InviteDelete.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageCreate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageDelete.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageDeleteBulk.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageReactionAdd.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageReactionRemove.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageReactionRemoveAll.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.MessageReactionRemoveEmoji.handle(t.d)}},function(e,t,i){"use strict";const{Events:s}=i(0);e.exports=(e,t)=>{const{old:i,updated:n}=e.actions.MessageUpdate.handle(t.d);i&&n&&e.emit(s.MESSAGE_UPDATE,i,n)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.PresenceUpdate.handle(t.d)}},function(e,t,i){"use strict";let s;e.exports=(e,{d:t},n)=>{if(e.user)e.user._patch(t.user);else{s||(s=i(92));const n=new s(e,t.user);e.user=n,e.users.cache.set(n.id,n)}for(const i of t.guilds)i.shardID=n.id,e.guilds.add(i);n.checkReady()}},function(e,t,i){"use strict";const{Events:s}=i(0);e.exports=(e,t,i)=>{const n=i.sequence-i.closeSequence;e.emit(s.SHARD_RESUME,i.id,n)}},function(e,t,i){"use strict";const{Events:s}=i(0);function n(e,t){return e.client.setTimeout(()=>{e._typing.delete(t.id)},1e4)}e.exports=(e,{d:t})=>{const i=e.channels.cache.get(t.channel_id),r=e.users.cache.get(t.user_id),o=new Date(1e3*t.timestamp);if(i&&r){if("voice"===i.type)return void e.emit(s.WARN,`Discord sent a typing packet to a voice channel ${i.id}`);if(i._typing.has(r.id)){const t=i._typing.get(r.id);t.lastTimestamp=o,t.elapsedTime=Date.now()-t.since,e.clearTimeout(t.timeout),t.timeout=n(i,r)}else{const t=new Date,o=new Date;i._typing.set(r.id,{user:r,since:t,lastTimestamp:o,elapsedTime:Date.now()-t,timeout:n(i,r)}),e.emit(s.TYPING_START,i,r)}}}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.UserUpdate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.emit("debug",`[VOICE] received voice server: ${JSON.stringify(t)}`),e.voice.onVoiceServer(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.VoiceStateUpdate.handle(t.d)}},function(e,t,i){"use strict";e.exports=(e,t)=>{e.actions.WebhooksUpdate.handle(t.d)}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,i){"use strict";const s=i(11);class Speaking extends s{}Speaking.FLAGS={SPEAKING:1,SOUNDSHARE:2,PRIORITY_SPEAKING:4},e.exports=Speaking}])}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
				const newValue = isArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url, hash] = splitOnFirst(input, '#');

	return Object.assign(
		{
			url: url.split('?')[0] || '',
			query: parse(extract(input), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (input, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(input.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(input.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, input.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(input.url);
	if (input.fragmentIdentifier) {
		hash = `#${encode(input.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryString = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
var Discord = __webpack_require__(/*! discord.js/webpack/discord.min */ "./node_modules/discord.js/webpack/discord.min.js");

var parsed = queryString.parse(location.search);
console.log(parsed);
var invites = {};

var bot = new Discord.Client({ fetchAllMembers: true });
bot.login(process.env.BOT_TOKEN);

var user_invite = {};
var ivao_user = {};
if (!parsed.IVAOTOKEN || parsed.IVAOTOKEN === "error") {
    window.location = 'https://login.ivao.aero/index.php?url=' + window.location;
} else {

    bot.on('ready', function () {
        console.log("Je suis connecté !");
        console.log(bot.guilds);
        bot.guilds.cache.each(function (g) {
            g.fetchInvites().then(function (guildInvites) {
                invites[g.id] = guildInvites;
                console.log(invites);
            });
        });
    });

    bot.on('guildMemberAdd', function (member) {

        member.guild.fetchInvites().then(function (guildInvites) {
            console.log("====MEMBER====");
            console.log(member);
            // This is the *existing* invites for the guild.
            var ei = invites[member.guild.id];
            // Update the cached invites for the guild.
            invites[member.guild.id] = guildInvites;
            // Look through the invites, find the one for which the uses went up.
            var invite = ei.find(function (i) {
                return i.code === user_invite.code;
            });
            var inviter = invite.inviter;
            console.log('USER INVITE');
            console.log(user_invite);
            console.log('VS');
            console.log(invite);
            console.log('INVITER');
            console.log(inviter);

            if (invite && (0, _keys2.default)(user_invite).length > 0 && bot.user.id === inviter.id && member.user.bot === false) {
                // This is just to simplify the message being sent below (inviter doesn't have a tag property)
                console.log(bot.users);
                console.log("=================");
                console.log(invite);
                console.log(inviter);
                var username = ivao_user.firstname + ' ' + ivao_user.lastname + ' - ' + ivao_user.vid;
                var formData = new FormData();
                formData.append('username', username);
                formData.append('member', (0, _stringify2.default)(member.toJSON()));
                fetch('http://localhost:8081/user', { method: 'POST', body: new URLSearchParams(formData) }).then(function (result) {});
                // Get the log channel (change to your liking)
                // const logChannel = member.guild.channels.cache.find(channel => channel.name === "join-logs");
                // A real basic message with the information we need.
                console.log(member.user.tag + ' joined using invite code ' + invite.code + ' from ' + inviter.tag + '. Invite was used ' + invite.uses + ' times since its creation.');
            } else {}
        });
    });
}

window.shootInvite = function () {
    var formData = new FormData();
    formData.append('token', parsed.IVAOTOKEN);
    fetch('http://localhost:8081/login', { method: 'POST', body: new URLSearchParams(formData) }).then(function (result) {
        result.json().then(function (response) {
            bot.guilds.cache.each(function (g) {
                g.fetchInvites().then(function (guildInvites) {
                    invites[g.id] = guildInvites;
                    console.log(response);
                    user_invite = response.invite;
                    ivao_user = response.ivao_user;
                    if (ivao_user.staff === "" || !ivao_user.staff) {
                        document.write("Error - you must be FR staff in order to join");
                    } else if (ivao_user.result === 0 && ivao_user.vid === null) {
                        document.write("Error");
                    } else {
                        var invite_btn = document.getElementById('invite-btn');
                        invite_btn.remove();
                        var link_wrapper = document.getElementById('link-holder');
                        link_wrapper.innerHTML = '<a href="' + user_invite.url + '" id="link-holder" target="_blank" class="md-button highlight">' + user_invite.url + '</a>';
                    }
                });
            });
        }).catch(function (error) {
            return document.write("Error");
        });
    });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/app.js */"./src/app.js");


/***/ })

/******/ });