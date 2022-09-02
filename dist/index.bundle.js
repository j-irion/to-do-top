/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 fill=%27%238C98F2%27><polygon points=%270,0 100,0 50,50%27/></svg> */ "data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 fill=%27%238C98F2%27><polygon points=%270,0 100,0 50,50%27/></svg>"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  font-family: 'Biryani', sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  grid-template-columns: 300px 1fr;\n  min-height: 100vh;  \n}\n\nheader {\n  background-color: #A51822;\n  grid-column: 1 / -1;\n  display: flex;\n  align-items: center;\n  padding: 0 40px;\n  justify-content: end;\n}\n\n#btn-add-note {\n  padding: 7px 15px;\n  border-radius: 10px;\n  border: none;\n  background-color: white;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  background-color: rgb(240, 240, 240);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.projects {\n  color: rgb(124, 124, 124);\n}\n\n.project {\n  cursor: pointer;\n}\n\n#btn-add-project {\n  width: max-content;\n}\n\n#btn-add-project:hover {\n  cursor: pointer;\n}\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: 800px; \n  border-radius: 8px;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-content hr {\n  margin: 20px -20px;\n}\n\n.modal-content form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n}\n\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-element {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.form-btns {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\ninput,\ntextarea {\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n}\n\n#input-title,\n#input-date,\n#input-priority,\n#input-project,\n#input-project-title {\n  box-sizing: border-box;\n  height: 35px;\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n}\n\n#input-priority,\n#input-project {\n  padding-left: 5px;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-size: 12px;\n  background-position: calc(100% - 20px) center;\n  background-repeat: no-repeat;\n  background-color: white;\n}\n\n.modal-content button {\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  background-color: #A51822;\n  color: white;\n  font-size: 14px;\n}\n\n.modal-content button:hover {\n  background-color: #84131b;\n}\n\n.modal-content button:active {\n  transform: scale(0.97);\n}\n\n.project-modal-content {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n#input-project-title {\n  justify-self: stretch;\n  flex-grow: 1;\n}\n\n#modal-btn-add-project {\n  margin-left: auto;\n}\n\n.form-btns {\n  position: relative;\n  height: 45px;\n}\n\n#btn-note-submit {\n  display: block;\n  cursor: pointer;\n}\n\n#btn-note-edit {\n  position: absolute;\n  display: none;\n  cursor: pointer;\n}\n\n.content h2{\n  padding: 40px 40px 20px 40px;\n}\n\n.content > div {\n  padding: 10px 40px;\n  display: grid;\n  grid-template-columns: 1fr 1fr min-content;\n  gap: 10px;\n  align-items: center;\n}\n\n.content > div > button {\n  background-color: #A51822;\n  color: white;\n  font-size: 12px;\n  border: none;\n  border-radius: 8px;\n  padding: 6px 15px 4px 15px;\n}\n\n.content > div:nth-child(2n) {\n  background-color: rgb(240, 240, 240);\n}\n\n.content > div > span {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.content > div > button {\n  cursor: pointer;\n}\n\n.note-div-open {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n  border: 1px black solid;\n  border-radius: 8px;\n  padding: 20px;\n}\n\n.note-div-open-column > div {\n  display: flex;\n  gap: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&display=swap');\n\n* {\n  margin: 0;\n  font-family: 'Biryani', sans-serif;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 70px 1fr;\n  grid-template-columns: 300px 1fr;\n  min-height: 100vh;  \n}\n\nheader {\n  background-color: #A51822;\n  grid-column: 1 / -1;\n  display: flex;\n  align-items: center;\n  padding: 0 40px;\n  justify-content: end;\n}\n\n#btn-add-note {\n  padding: 7px 15px;\n  border-radius: 10px;\n  border: none;\n  background-color: white;\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.sidebar {\n  grid-column: 1 / 2;\n  background-color: rgb(240, 240, 240);\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.sidebar > div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n}\n\n.projects {\n  color: rgb(124, 124, 124);\n}\n\n.project {\n  cursor: pointer;\n}\n\n#btn-add-project {\n  width: max-content;\n}\n\n#btn-add-project:hover {\n  cursor: pointer;\n}\n\n.modal {\n  display: none; \n  position: fixed; \n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; \n  height: 100%; \n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); \n  background-color: rgba(0,0,0,0.4); \n}\n\n.modal-content {\n  background-color: #fefefe;\n  margin: 15% auto; \n  padding: 20px;\n  border: 1px solid #888;\n  width: 800px; \n  border-radius: 8px;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal-content hr {\n  margin: 20px -20px;\n}\n\n.modal-content form {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 40px;\n}\n\n.form-column {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.form-element {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.form-btns {\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: end;\n}\n\n.close {\n  color: #aaa;\n  font-size: 28px;\n  font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\ninput,\ntextarea {\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n}\n\n#input-title,\n#input-date,\n#input-priority,\n#input-project,\n#input-project-title {\n  box-sizing: border-box;\n  height: 35px;\n  border: 1px solid gainsboro;\n  border-radius: 3px;\n}\n\n#input-priority,\n#input-project {\n  padding-left: 5px;\n}\n\nselect {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%238C98F2'><polygon points='0,0 100,0 50,50'/></svg>\") no-repeat;\n  background-size: 12px;\n  background-position: calc(100% - 20px) center;\n  background-repeat: no-repeat;\n  background-color: white;\n}\n\n.modal-content button {\n  padding: 10px 20px;\n  border-radius: 8px;\n  border: none;\n  background-color: #A51822;\n  color: white;\n  font-size: 14px;\n}\n\n.modal-content button:hover {\n  background-color: #84131b;\n}\n\n.modal-content button:active {\n  transform: scale(0.97);\n}\n\n.project-modal-content {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n#input-project-title {\n  justify-self: stretch;\n  flex-grow: 1;\n}\n\n#modal-btn-add-project {\n  margin-left: auto;\n}\n\n.form-btns {\n  position: relative;\n  height: 45px;\n}\n\n#btn-note-submit {\n  display: block;\n  cursor: pointer;\n}\n\n#btn-note-edit {\n  position: absolute;\n  display: none;\n  cursor: pointer;\n}\n\n.content h2{\n  padding: 40px 40px 20px 40px;\n}\n\n.content > div {\n  padding: 10px 40px;\n  display: grid;\n  grid-template-columns: 1fr 1fr min-content;\n  gap: 10px;\n  align-items: center;\n}\n\n.content > div > button {\n  background-color: #A51822;\n  color: white;\n  font-size: 12px;\n  border: none;\n  border-radius: 8px;\n  padding: 6px 15px 4px 15px;\n}\n\n.content > div:nth-child(2n) {\n  background-color: rgb(240, 240, 240);\n}\n\n.content > div > span {\n  justify-self: end;\n  cursor: pointer;\n}\n\n.content > div > button {\n  cursor: pointer;\n}\n\n.note-div-open {\n  grid-row: 2;\n  grid-column: 1 / -1;\n  display: flex;\n  justify-content: center;\n  gap: 100px;\n  border: 1px black solid;\n  border-radius: 8px;\n  padding: 20px;\n}\n\n.note-div-open-column > div {\n  display: flex;\n  gap: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/json-cycle/cycle.js":
/*!******************************************!*\
  !*** ./node_modules/json-cycle/cycle.js ***!
  \******************************************/
/***/ ((module) => {



/*
 cycle.js
 2015-02-25

 Public Domain.

 NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

 This code should be minified before deployment.
 See http://javascript.crockford.com/jsmin.html

 USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
 NOT CONTROL.
 */

/*jslint eval, for */

/*property
 $ref, apply, call, decycle, hasOwnProperty, length, prototype, push,
 retrocycle, stringify, test, toString
 */

function decycle(object) {

  var objects = [],   // Keep a reference to each unique object or array
    paths = [];     // Keep the path to each unique object or array

  return (function derez(value, path) {

// The derez recurses through the object, producing the deep copy.

    var i,          // The loop counter
      name,       // Property name
      nu;         // The new object or array

    var _value = value && value.toJSON instanceof Function ? value.toJSON() : value;
// typeof null === 'object', so go on if this value is really an object but not
// one of the weird builtin objects.

    if (typeof _value === 'object' && _value !== null) {

// If the value is an object or array, look to see if we have already
// encountered it. If so, return a $ref/path object. This is a hard way,
// linear search that will get slower as the number of unique objects grows.

      for (i = 0; i < objects.length; i += 1) {
        if (objects[i] === _value) {
          return {$ref: paths[i]};
        }
      }

// Otherwise, accumulate the unique value and its path.

      objects.push(_value);
      paths.push(path);

// If it is an array, replicate the array.

      if (Object.prototype.toString.apply(_value) === '[object Array]') {
        nu = [];
        for (i = 0; i < _value.length; i += 1) {
          nu[i] = derez(_value[i], path + '[' + i + ']');
        }
      } else {

// If it is an object, replicate the object.

        nu = {};
        for (name in _value) {
          if (Object.prototype.hasOwnProperty.call(_value, name)) {
            nu[name] = derez(_value[name],
              path + '[' + JSON.stringify(name) + ']');
          }
        }
      }
      return nu;
    }
    return _value;
  }(object, '$'));
}

function retrocycle($) {

  var px = /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;

  (function rez(value) {

// The rez function walks recursively through the object looking for $ref
// properties. When it finds one that has a value that is a path, then it
// replaces the $ref object with a reference to the value that is found by
// the path.

    var i, item, name, path;

    if (value && typeof value === 'object') {
      if (Object.prototype.toString.apply(value) === '[object Array]') {
        for (i = 0; i < value.length; i += 1) {
          item = value[i];
          if (item && typeof item === 'object') {
            path = item.$ref;
            if (typeof path === 'string' && px.test(path)) {
              value[i] = eval(path);
            } else {
              rez(item);
            }
          }
        }
      } else {
        for (name in value) {
          if (typeof value[name] === 'object') {
            item = value[name];
            if (item) {
              path = item.$ref;
              if (typeof path === 'string' && px.test(path)) {
                value[name] = eval(path);
              } else {
                rez(item);
              }
            }
          }
        }
      }
    }
  }($));
  return $;
}

module.exports = {
  stringify: function stringifyJC(object, replacer, space) {
    return JSON.stringify(decycle(object), replacer, space)
  },

  parse: function parseJC($, reviver) {
    return retrocycle(JSON.parse($, reviver))
  },

  decycle: decycle,
  retrocycle: retrocycle,
};


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");

let jc = __webpack_require__(/*! json-cycle */ "./node_modules/json-cycle/cycle.js");

const app = (() => {
  let projects = [];
  let inbox = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.Project)("Inbox");
  projects.push(inbox);

  const getProject = (index) => {
    return projects[index];
  };

  const addProject = (proj) => {
    projects.push(proj);
  };

  const getProjectIndexOfNote = (note) => {
    for (let i = 1; i < projects.length; ++i) {
      if (projects[i].notes.some((element) => element === note)) return i;
    }
  };

  const getNoteBeingEdited = () => {
    for (let i = 0; i < projects.length; ++i) {
      let proj = projects[i];
      let note = proj.notes.find((note) => note.beingEdited === true);
      if (note !== undefined) {
        return note;
      }
    }
  };

  const saveToLocalStorage = () => {
    let projNames = projects.map((project) => project.name);
    localStorage.setItem("projNames", jc.stringify(projNames));
    for (let i = 0; i < projects.length; ++i) {
      let saveNotes = projects[i].notes;
      localStorage.setItem(`notes${i}`, jc.stringify(saveNotes));
    }
  };

  const loadFromLocalStorage = () => {
    let projNames = jc.parse(localStorage.getItem("projNames"));
    if (projNames === null) return;
    projects = [];
    for (let i = 0; i < projNames.length; ++i) {
      let createdProj = (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.Project)(projNames[i]);
      createdProj.notes = jc.parse(localStorage.getItem(`notes${i}`));
      projects.push(createdProj);
    }
  };

  return {
    getProject,
    addProject,
    getProjectIndexOfNote,
    getNoteBeingEdited,
    saveToLocalStorage,
    loadFromLocalStorage,
    get projects() {
      return projects;
    },
  };
})();




/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");




const content = (() => {
  let renderedProject = _app_js__WEBPACK_IMPORTED_MODULE_0__.app.projects[0];
  const renderProject = (project) => {
    renderedProject = project;
    let contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    let projectHeader = document.createElement("h2");
    projectHeader.textContent = project.name;
    contentDiv.appendChild(projectHeader);
    project.notes.forEach((note) => {
      let noteDiv = document.createElement("div");
      noteDiv.textContent = note.title;
      contentDiv.appendChild(noteDiv);
      noteDiv.addEventListener("click", () => {
        let noteDivOpen = noteDiv.querySelector(".note-div-open");
        if (noteDivOpen !== null)
          noteDivOpen.parentNode.removeChild(noteDivOpen);
        else renderNote(note, noteDiv);
      });
      let edit = document.createElement("span");
      edit.className = "material-symbols-rounded";
      edit.innerHTML = "edit";
      noteDiv.appendChild(edit);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      noteDiv.appendChild(deleteButton);
      deleteButton.addEventListener("click", () => {
        project.deleteNote(note);
        _app_js__WEBPACK_IMPORTED_MODULE_0__.app.saveToLocalStorage();
        renderProject(project);
      });
      edit.addEventListener("click", () => {
        note.beingEdited = true;
        (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.displayNoteEditor)(note);
      });
    });
  };

  const renderNote = (note, noteDiv) => {
    let noteDivOpen = document.createElement("div");
    noteDivOpen.className = "note-div-open";
    let noteDivOpenColumnOne = document.createElement("div");
    noteDivOpenColumnOne.className = "note-div-open-column";
    let noteDivOpenColumnTwo = document.createElement("div");
    noteDivOpenColumnTwo.className = "note-div-open-column";
    noteDivOpen.appendChild(noteDivOpenColumnOne);
    noteDivOpen.appendChild(noteDivOpenColumnTwo);
    let titleElement = document.createElement("div");
    let dateElement = document.createElement("div");
    noteDivOpenColumnOne.appendChild(titleElement);
    noteDivOpenColumnOne.appendChild(dateElement);
    let descElement = document.createElement("div");
    let prioElement = document.createElement("div");
    noteDivOpenColumnTwo.appendChild(descElement);
    noteDivOpenColumnTwo.appendChild(prioElement);
    let titleHeading = document.createElement("h4");
    titleHeading.textContent = "Title:";
    let title = document.createElement("span");
    title.textContent = note.title;
    titleElement.appendChild(titleHeading);
    titleElement.appendChild(title);
    let dateHeading = document.createElement("h4");
    dateHeading.textContent = "Date:";
    let date = document.createElement("span");
    date.textContent = note.dueDate;
    dateElement.appendChild(dateHeading);
    dateElement.appendChild(date);
    let descHeading = document.createElement("h4");
    descHeading.textContent = "Description:";
    let desc = document.createElement("span");
    desc.textContent = note.description;
    descElement.appendChild(descHeading);
    descElement.appendChild(desc);
    let prioHeading = document.createElement("h4");
    prioHeading.textContent = "Priority:";
    let prio = document.createElement("span");
    prio.textContent = note.priority;
    prioElement.appendChild(prioHeading);
    prioElement.appendChild(prio);
    noteDiv.appendChild(noteDivOpen);
  };

  const renderToday = () => {
    let todaysNotes = [];
    _app_js__WEBPACK_IMPORTED_MODULE_0__.app.projects.forEach((proj) =>
      proj.notes.forEach((note) => {
        if (isToday(new Date(note.dueDate))) todaysNotes.push(note);
      })
    );
    let project = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.Project)("Today");
    todaysNotes.forEach((note) => project.addNote(note));
    renderProject(project);
  };

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    );
  };

  return {
    renderProject,
    renderToday,
    get renderedProject() {
      return renderedProject;
    },
  };
})();




/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectsToCreator": () => (/* binding */ addProjectsToCreator),
/* harmony export */   "closeNoteCreator": () => (/* binding */ closeNoteCreator),
/* harmony export */   "closeProjectCreator": () => (/* binding */ closeProjectCreator),
/* harmony export */   "displayNoteCreator": () => (/* binding */ displayNoteCreator),
/* harmony export */   "displayNoteEditor": () => (/* binding */ displayNoteEditor),
/* harmony export */   "displayProjectCreator": () => (/* binding */ displayProjectCreator)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _notes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notes.js */ "./src/notes.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content */ "./src/content.js");







let btnNoteModalClose = document.getElementById("note-close");
btnNoteModalClose.onclick = closeNoteCreator;

let btnProjectModalClose = document.getElementById("project-close");
btnProjectModalClose.onclick = closeProjectCreator;

window.onclick = function (event) {
  if (event.target == document.getElementById("notesModal")) {
    closeNoteCreator();
  }
  if (event.target == document.getElementById("project-modal")) {
    closeProjectCreator();
  }
};

let noteCreationForm = document.getElementById("note-creation-form");
noteCreationForm.onsubmit = (e) => {
  if (document.getElementById("modal-heading").textContent === "New Note")
    submitNewNote(e);
  else submitEditNote(e);
};

function submitNewNote(e) {
  e.preventDefault();

  let name = document.getElementById("input-title").value;
  let priority = document.getElementById("input-priority").value;
  let dueDate = document.getElementById("input-date").value;
  let description = document.getElementById("input-description").value;
  let project = _app_js__WEBPACK_IMPORTED_MODULE_2__.app.getProject(
    document.getElementById("input-project").selectedIndex
  );

  let note = (0,_notes_js__WEBPACK_IMPORTED_MODULE_1__.Note)(
    name,
    priority,
    dueDate,
    description,
    false,
    document.getElementById("input-project").selectedIndex
  );
  project.addNote(note);

  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.saveToLocalStorage();
  closeNoteCreator();
  _sidebar_js__WEBPACK_IMPORTED_MODULE_4__.sidebar.render();
  _content__WEBPACK_IMPORTED_MODULE_5__.content.renderProject(_content__WEBPACK_IMPORTED_MODULE_5__.content.renderedProject);
}

function submitEditNote(e) {
  e.preventDefault();

  let note = _app_js__WEBPACK_IMPORTED_MODULE_2__.app.getNoteBeingEdited();

  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.getProject(note.project).deleteNote(note);

  note.title = document.getElementById("input-title").value;
  note.priority = document.getElementById("input-priority").value;
  note.dueDate = document.getElementById("input-date").value;
  note.description = document.getElementById("input-description").value;
  note.project = document.getElementById("input-project").selectedIndex;

  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.getProject(document.getElementById("input-project").selectedIndex)
    .addNote(note);
  note.beingEdited = false;
  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.saveToLocalStorage();
  closeNoteCreator();
  _sidebar_js__WEBPACK_IMPORTED_MODULE_4__.sidebar.render();
  _content__WEBPACK_IMPORTED_MODULE_5__.content.renderProject(_content__WEBPACK_IMPORTED_MODULE_5__.content.renderedProject);
}

let projectAddBtn = document.getElementById("modal-btn-add-project");
projectAddBtn.onclick = () => {
  let title = document.getElementById("input-project-title");
  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.addProject((0,_projects_js__WEBPACK_IMPORTED_MODULE_3__.Project)(title.value));
  title.value = "";
  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.saveToLocalStorage();
  closeProjectCreator();
  _sidebar_js__WEBPACK_IMPORTED_MODULE_4__.sidebar.render();
  addProjectsToCreator();
};

function addProjectsToCreator() {
  let inputProject = document.getElementById("input-project");
  inputProject.innerHTML = "";
  _app_js__WEBPACK_IMPORTED_MODULE_2__.app.projects.forEach((project) => {
    let projectOption = document.createElement("option");
    projectOption.value = project.name;
    projectOption.innerHTML = project.name;
    inputProject.appendChild(projectOption);
  });
}

function displayNoteEditor(note) {
  document.getElementById("input-title").value = note.title;
  document.getElementById("input-priority").value = note.priority;
  document.getElementById("input-date").value = note.dueDate;
  document.getElementById("input-description").value = note.description;
  document.getElementById("input-project").selectedIndex =
    _app_js__WEBPACK_IMPORTED_MODULE_2__.app.getProjectIndexOfNote(note);
  document.getElementById("modal-heading").textContent = "Edit Note";

  document.getElementById("btn-note-submit").style.display = "none";
  document.getElementById("btn-note-edit").style.display = "block";

  displayNoteCreator();
}

function displayNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "block";
}

function closeNoteCreator() {
  let modal = document.getElementById("notesModal");
  modal.style.display = "none";

  document.getElementById("btn-note-submit").style.display = "block";
  document.getElementById("btn-note-edit").style.display = "none";

  //clear form
  document.getElementById("modal-heading").textContent = "New Note";
  document.querySelectorAll("input").forEach((e) => (e.value = ""));
  document.querySelectorAll("select").forEach((e) => (e.selectedIndex = 0));
  document.querySelector("textarea").value = "";
}

function displayProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "block";
}

function closeProjectCreator() {
  let modal = document.getElementById("project-modal");
  modal.style.display = "none";
}




/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Note": () => (/* binding */ Note)
/* harmony export */ });
const Note = function (
  title,
  priority,
  dueDate,
  description,
  completed,
  project
) {
  let noteTitle = title;
  let notePrio = priority;
  let noteDueDate = dueDate;
  let noteDesc = description;
  let noteCompleted = completed;
  let beingEdited = false;
  let noteProject = project;

  const equals = (inputNote) => {
    if (noteTitle === inputNote.title) {
      return true;
    }
    return false;
  };

  return {
    equals,
    get title() {
      return noteTitle;
    },
    set title(title) {
      noteTitle = title;
    },
    get priority() {
      return notePrio;
    },
    set priority(priority) {
      notePrio = priority;
    },
    get dueDate() {
      return noteDueDate;
    },
    set dueDate(dueDate) {
      noteDueDate = dueDate;
    },
    get description() {
      return noteDesc;
    },
    set description(description) {
      noteDesc = description;
    },
    get completed() {
      return noteCompleted;
    },
    set completed(completed) {
      noteCompleted = completed;
    },
    get beingEdited() {
      return beingEdited;
    },
    set beingEdited(inEdit) {
      beingEdited = inEdit;
    },
    get project() {
      return noteProject;
    },
    set project(project) {
      noteProject = project;
    },
  };
};




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
const Project = function (name) {
  let projectName = name;
  let notes = [];
  const addNote = (note) => {
    notes.push(note);
  };

  const deleteNote = (inputNote) => {
    notes = notes.filter((note) => note !== inputNote);
  };

  return {
    get name() {
      return projectName;
    },
    set name(name) {
      projectName = name;
    },
    get notes() {
      return notes;
    },
    set notes(inputNotes) {
      notes = inputNotes;
    },
    addNote,
    deleteNote,
  };
};




/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebar": () => (/* binding */ sidebar)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/modal.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/content.js");




const sidebar = (() => {
  const render = () => {
    const projectsList = document.querySelector(".projects");
    projectsList.innerHTML = "";
    _app__WEBPACK_IMPORTED_MODULE_0__.app.projects.forEach((proj) => {
      let project = document.createElement("li");
      project.textContent = proj.name;
      project.className = "project";
      project.addEventListener("click", function () {
        _content__WEBPACK_IMPORTED_MODULE_2__.content.renderProject(proj);
      });
      projectsList.appendChild(project);
    });
    let plus = document.createElement("div");
    plus.id = "btn-add-project";
    plus.textContent = "+ Add Project";
    plus.addEventListener("click", () => {
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.displayProjectCreator)();
    });
    projectsList.appendChild(plus);
  };

  return {
    render,
  };
})();



let inbox = document.getElementById("inbox");
inbox.addEventListener("click", function () {
  _content__WEBPACK_IMPORTED_MODULE_2__.content.renderProject(_app__WEBPACK_IMPORTED_MODULE_0__.app.getProject(0));
});

let today = document.getElementById("today");
today.addEventListener("click", () => {
  _content__WEBPACK_IMPORTED_MODULE_2__.content.renderToday();
});


/***/ }),

/***/ "data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 fill=%27%238C98F2%27><polygon points=%270,0 100,0 50,50%27/></svg>":
/*!*******************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 fill=%27%238C98F2%27><polygon points=%270,0 100,0 50,50%27/></svg> ***!
  \*******************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27100%27 fill=%27%238C98F2%27><polygon points=%270,0 100,0 50,50%27/></svg>";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.js */ "./src/sidebar.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./src/content.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/modal.js");






_app_js__WEBPACK_IMPORTED_MODULE_3__.app.loadFromLocalStorage();

_sidebar_js__WEBPACK_IMPORTED_MODULE_1__.sidebar.render();

_content_js__WEBPACK_IMPORTED_MODULE_2__.content.renderProject(_app_js__WEBPACK_IMPORTED_MODULE_3__.app.projects[0]);

(0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.addProjectsToCreator)();

let btnAddNote = document.getElementById("btn-add-note");
btnAddNote.onclick = () => {
  document.getElementById("input-date").value = new Date()
    .toISOString()
    .substring(0, 10);
  (0,_modal_js__WEBPACK_IMPORTED_MODULE_4__.displayNoteCreator)();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsb0JBQW9CLFdBQVcsVUFBVSxVQUFVLFVBQVUsc0JBQXNCLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxTQUFTLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLGdH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ckMsK0RBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBa0I7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9ub2RlX21vZHVsZXMvanNvbi1jeWNsZS9jeWNsZS5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL3NyYy9jb250ZW50LmpzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL3NyYy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby10b3AvLi9zcmMvbm90ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLXRvcC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9JTI3aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmclMjcgd2lkdGg9JTI3MTAwJTI3IGhlaWdodD0lMjcxMDAlMjcgZmlsbD0lMjclMjM4Qzk4RjIlMjc+PHBvbHlnb24gcG9pbnRzPSUyNzAsMCAxMDAsMCA1MCw1MCUyNy8+PC9zdmc+XCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CaXJ5YW5pOndnaHRAMjAwOzMwMDs0MDA7NjAwOzcwMDs4MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmlyeWFuaScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTUxODIyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbiNidG4tYWRkLW5vdGUge1xcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgY29sb3I6IHJnYigxMjQsIDEyNCwgMTI0KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYnRuLWFkZC1wcm9qZWN0IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2J0bi1hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IFxcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IFxcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MDBweDsgXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGhyIHtcXG4gIG1hcmdpbjogMjBweCAtMjBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNpbnB1dC10aXRsZSxcXG4jaW5wdXQtZGF0ZSxcXG4jaW5wdXQtcHJpb3JpdHksXFxuI2lucHV0LXByb2plY3QsXFxuI2lucHV0LXByb2plY3QtdGl0bGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2lucHV0LXByaW9yaXR5LFxcbiNpbnB1dC1wcm9qZWN0IHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1MTgyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDEzMWI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2lucHV0LXByb2plY3QtdGl0bGUge1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jbW9kYWwtYnRuLWFkZC1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1idG5zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuI2J0bi1ub3RlLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2J0bi1ub3RlLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgaDJ7XFxuICBwYWRkaW5nOiA0MHB4IDQwcHggMjBweCA0MHB4O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1MTgyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDZweCAxNXB4IDRweCAxNXB4O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdjpudGgtY2hpbGQoMm4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBzcGFuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RlLWRpdi1vcGVuIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ub3RlLWRpdi1vcGVuLWNvbHVtbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Us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RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmlyeWFuaTp3Z2h0QDIwMDszMDA7NDAwOzYwMDs3MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnQmlyeWFuaScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAgXFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTUxODIyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMCA0MHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbiNidG4tYWRkLW5vdGUge1xcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuICBwYWRkaW5nOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5zaWRlYmFyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgY29sb3I6IHJnYigxMjQsIDEyNCwgMTI0KTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYnRuLWFkZC1wcm9qZWN0IHtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG59XFxuXFxuI2J0bi1hZGQtcHJvamVjdDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyBcXG4gIHBvc2l0aW9uOiBmaXhlZDsgXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IFxcbiAgaGVpZ2h0OiAxMDAlOyBcXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IFxcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgbWFyZ2luOiAxNSUgYXV0bzsgXFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA4MDBweDsgXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGhyIHtcXG4gIG1hcmdpbjogMjBweCAtMjBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG4uZm9ybS1jb2x1bW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWJ0bnMge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiAjYWFhO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBnYWluc2Jvcm87XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbiNpbnB1dC10aXRsZSxcXG4jaW5wdXQtZGF0ZSxcXG4jaW5wdXQtcHJpb3JpdHksXFxuI2lucHV0LXByb2plY3QsXFxuI2lucHV0LXByb2plY3QtdGl0bGUge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdhaW5zYm9ybztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuI2lucHV0LXByaW9yaXR5LFxcbiNpbnB1dC1wcm9qZWN0IHtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAnIGhlaWdodD0nMTAwJyBmaWxsPSclMjM4Qzk4RjInPjxwb2x5Z29uIHBvaW50cz0nMCwwIDEwMCwwIDUwLDUwJy8+PC9zdmc+XFxcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCBidXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1MTgyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NDEzMWI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcXG59XFxuXFxuLnByb2plY3QtbW9kYWwtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2lucHV0LXByb2plY3QtdGl0bGUge1xcbiAganVzdGlmeS1zZWxmOiBzdHJldGNoO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jbW9kYWwtYnRuLWFkZC1wcm9qZWN0IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZm9ybS1idG5zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuXFxuI2J0bi1ub3RlLXN1Ym1pdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2J0bi1ub3RlLWVkaXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgaDJ7XFxuICBwYWRkaW5nOiA0MHB4IDQwcHggMjBweCA0MHB4O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIG1pbi1jb250ZW50O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E1MTgyMjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDZweCAxNXB4IDRweCAxNXB4O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdjpudGgtY2hpbGQoMm4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBzcGFuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ub3RlLWRpdi1vcGVuIHtcXG4gIGdyaWQtcm93OiAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTAwcHg7XFxuICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ub3RlLWRpdi1vcGVuLWNvbHVtbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gY3ljbGUuanNcbiAyMDE1LTAyLTI1XG5cbiBQdWJsaWMgRG9tYWluLlxuXG4gTk8gV0FSUkFOVFkgRVhQUkVTU0VEIE9SIElNUExJRUQuIFVTRSBBVCBZT1VSIE9XTiBSSVNLLlxuXG4gVGhpcyBjb2RlIHNob3VsZCBiZSBtaW5pZmllZCBiZWZvcmUgZGVwbG95bWVudC5cbiBTZWUgaHR0cDovL2phdmFzY3JpcHQuY3JvY2tmb3JkLmNvbS9qc21pbi5odG1sXG5cbiBVU0UgWU9VUiBPV04gQ09QWS4gSVQgSVMgRVhUUkVNRUxZIFVOV0lTRSBUTyBMT0FEIENPREUgRlJPTSBTRVJWRVJTIFlPVSBET1xuIE5PVCBDT05UUk9MLlxuICovXG5cbi8qanNsaW50IGV2YWwsIGZvciAqL1xuXG4vKnByb3BlcnR5XG4gJHJlZiwgYXBwbHksIGNhbGwsIGRlY3ljbGUsIGhhc093blByb3BlcnR5LCBsZW5ndGgsIHByb3RvdHlwZSwgcHVzaCxcbiByZXRyb2N5Y2xlLCBzdHJpbmdpZnksIHRlc3QsIHRvU3RyaW5nXG4gKi9cblxuZnVuY3Rpb24gZGVjeWNsZShvYmplY3QpIHtcblxuICB2YXIgb2JqZWN0cyA9IFtdLCAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gZWFjaCB1bmlxdWUgb2JqZWN0IG9yIGFycmF5XG4gICAgcGF0aHMgPSBbXTsgICAgIC8vIEtlZXAgdGhlIHBhdGggdG8gZWFjaCB1bmlxdWUgb2JqZWN0IG9yIGFycmF5XG5cbiAgcmV0dXJuIChmdW5jdGlvbiBkZXJleih2YWx1ZSwgcGF0aCkge1xuXG4vLyBUaGUgZGVyZXogcmVjdXJzZXMgdGhyb3VnaCB0aGUgb2JqZWN0LCBwcm9kdWNpbmcgdGhlIGRlZXAgY29weS5cblxuICAgIHZhciBpLCAgICAgICAgICAvLyBUaGUgbG9vcCBjb3VudGVyXG4gICAgICBuYW1lLCAgICAgICAvLyBQcm9wZXJ0eSBuYW1lXG4gICAgICBudTsgICAgICAgICAvLyBUaGUgbmV3IG9iamVjdCBvciBhcnJheVxuXG4gICAgdmFyIF92YWx1ZSA9IHZhbHVlICYmIHZhbHVlLnRvSlNPTiBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUudG9KU09OKCkgOiB2YWx1ZTtcbi8vIHR5cGVvZiBudWxsID09PSAnb2JqZWN0Jywgc28gZ28gb24gaWYgdGhpcyB2YWx1ZSBpcyByZWFsbHkgYW4gb2JqZWN0IGJ1dCBub3Rcbi8vIG9uZSBvZiB0aGUgd2VpcmQgYnVpbHRpbiBvYmplY3RzLlxuXG4gICAgaWYgKHR5cGVvZiBfdmFsdWUgPT09ICdvYmplY3QnICYmIF92YWx1ZSAhPT0gbnVsbCkge1xuXG4vLyBJZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0IG9yIGFycmF5LCBsb29rIHRvIHNlZSBpZiB3ZSBoYXZlIGFscmVhZHlcbi8vIGVuY291bnRlcmVkIGl0LiBJZiBzbywgcmV0dXJuIGEgJHJlZi9wYXRoIG9iamVjdC4gVGhpcyBpcyBhIGhhcmQgd2F5LFxuLy8gbGluZWFyIHNlYXJjaCB0aGF0IHdpbGwgZ2V0IHNsb3dlciBhcyB0aGUgbnVtYmVyIG9mIHVuaXF1ZSBvYmplY3RzIGdyb3dzLlxuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSA9PT0gX3ZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHskcmVmOiBwYXRoc1tpXX07XG4gICAgICAgIH1cbiAgICAgIH1cblxuLy8gT3RoZXJ3aXNlLCBhY2N1bXVsYXRlIHRoZSB1bmlxdWUgdmFsdWUgYW5kIGl0cyBwYXRoLlxuXG4gICAgICBvYmplY3RzLnB1c2goX3ZhbHVlKTtcbiAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG5cbi8vIElmIGl0IGlzIGFuIGFycmF5LCByZXBsaWNhdGUgdGhlIGFycmF5LlxuXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShfdmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgIG51ID0gW107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBfdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBudVtpXSA9IGRlcmV6KF92YWx1ZVtpXSwgcGF0aCArICdbJyArIGkgKyAnXScpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuXG4vLyBJZiBpdCBpcyBhbiBvYmplY3QsIHJlcGxpY2F0ZSB0aGUgb2JqZWN0LlxuXG4gICAgICAgIG51ID0ge307XG4gICAgICAgIGZvciAobmFtZSBpbiBfdmFsdWUpIHtcbiAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF92YWx1ZSwgbmFtZSkpIHtcbiAgICAgICAgICAgIG51W25hbWVdID0gZGVyZXooX3ZhbHVlW25hbWVdLFxuICAgICAgICAgICAgICBwYXRoICsgJ1snICsgSlNPTi5zdHJpbmdpZnkobmFtZSkgKyAnXScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51O1xuICAgIH1cbiAgICByZXR1cm4gX3ZhbHVlO1xuICB9KG9iamVjdCwgJyQnKSk7XG59XG5cbmZ1bmN0aW9uIHJldHJvY3ljbGUoJCkge1xuXG4gIHZhciBweCA9IC9eXFwkKD86XFxbKD86XFxkK3xcXFwiKD86W15cXFxcXFxcIlxcdTAwMDAtXFx1MDAxZl18XFxcXChbXFxcXFxcXCJcXC9iZm5ydF18dVswLTlhLXpBLVpdezR9KSkqXFxcIilcXF0pKiQvO1xuXG4gIChmdW5jdGlvbiByZXoodmFsdWUpIHtcblxuLy8gVGhlIHJleiBmdW5jdGlvbiB3YWxrcyByZWN1cnNpdmVseSB0aHJvdWdoIHRoZSBvYmplY3QgbG9va2luZyBmb3IgJHJlZlxuLy8gcHJvcGVydGllcy4gV2hlbiBpdCBmaW5kcyBvbmUgdGhhdCBoYXMgYSB2YWx1ZSB0aGF0IGlzIGEgcGF0aCwgdGhlbiBpdFxuLy8gcmVwbGFjZXMgdGhlICRyZWYgb2JqZWN0IHdpdGggYSByZWZlcmVuY2UgdG8gdGhlIHZhbHVlIHRoYXQgaXMgZm91bmQgYnlcbi8vIHRoZSBwYXRoLlxuXG4gICAgdmFyIGksIGl0ZW0sIG5hbWUsIHBhdGg7XG5cbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtpXTtcbiAgICAgICAgICBpZiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhdGggPSBpdGVtLiRyZWY7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnICYmIHB4LnRlc3QocGF0aCkpIHtcbiAgICAgICAgICAgICAgdmFsdWVbaV0gPSBldmFsKHBhdGgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV6KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZVtuYW1lXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGl0ZW0gPSB2YWx1ZVtuYW1lXTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgIHBhdGggPSBpdGVtLiRyZWY7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgJiYgcHgudGVzdChwYXRoKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlW25hbWVdID0gZXZhbChwYXRoKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXooaXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0oJCkpO1xuICByZXR1cm4gJDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5SkMob2JqZWN0LCByZXBsYWNlciwgc3BhY2UpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGVjeWNsZShvYmplY3QpLCByZXBsYWNlciwgc3BhY2UpXG4gIH0sXG5cbiAgcGFyc2U6IGZ1bmN0aW9uIHBhcnNlSkMoJCwgcmV2aXZlcikge1xuICAgIHJldHVybiByZXRyb2N5Y2xlKEpTT04ucGFyc2UoJCwgcmV2aXZlcikpXG4gIH0sXG5cbiAgZGVjeWNsZTogZGVjeWNsZSxcbiAgcmV0cm9jeWNsZTogcmV0cm9jeWNsZSxcbn07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5sZXQgamMgPSByZXF1aXJlKFwianNvbi1jeWNsZVwiKTtcblxuY29uc3QgYXBwID0gKCgpID0+IHtcbiAgbGV0IHByb2plY3RzID0gW107XG4gIGxldCBpbmJveCA9IFByb2plY3QoXCJJbmJveFwiKTtcbiAgcHJvamVjdHMucHVzaChpbmJveCk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0c1tpbmRleF07XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qKSA9PiB7XG4gICAgcHJvamVjdHMucHVzaChwcm9qKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SW5kZXhPZk5vdGUgPSAobm90ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5ub3Rlcy5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBub3RlKSkgcmV0dXJuIGk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldE5vdGVCZWluZ0VkaXRlZCA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgcHJvaiA9IHByb2plY3RzW2ldO1xuICAgICAgbGV0IG5vdGUgPSBwcm9qLm5vdGVzLmZpbmQoKG5vdGUpID0+IG5vdGUuYmVpbmdFZGl0ZWQgPT09IHRydWUpO1xuICAgICAgaWYgKG5vdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbm90ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBwcm9qTmFtZXMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QubmFtZSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qTmFtZXNcIiwgamMuc3RyaW5naWZ5KHByb2pOYW1lcykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBzYXZlTm90ZXMgPSBwcm9qZWN0c1tpXS5ub3RlcztcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBub3RlcyR7aX1gLCBqYy5zdHJpbmdpZnkoc2F2ZU5vdGVzKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvYWRGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxldCBwcm9qTmFtZXMgPSBqYy5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2pOYW1lc1wiKSk7XG4gICAgaWYgKHByb2pOYW1lcyA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIHByb2plY3RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qTmFtZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxldCBjcmVhdGVkUHJvaiA9IFByb2plY3QocHJvak5hbWVzW2ldKTtcbiAgICAgIGNyZWF0ZWRQcm9qLm5vdGVzID0gamMucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYG5vdGVzJHtpfWApKTtcbiAgICAgIHByb2plY3RzLnB1c2goY3JlYXRlZFByb2opO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0SW5kZXhPZk5vdGUsXG4gICAgZ2V0Tm90ZUJlaW5nRWRpdGVkLFxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSxcbiAgICBsb2FkRnJvbUxvY2FsU3RvcmFnZSxcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgfSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGFwcCB9O1xuIiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Tm90ZUVkaXRvciB9IGZyb20gXCIuL21vZGFsLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcblxuY29uc3QgY29udGVudCA9ICgoKSA9PiB7XG4gIGxldCByZW5kZXJlZFByb2plY3QgPSBhcHAucHJvamVjdHNbMF07XG4gIGNvbnN0IHJlbmRlclByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIHJlbmRlcmVkUHJvamVjdCA9IHByb2plY3Q7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGxldCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBwcm9qZWN0Lm5vdGVzLmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGxldCBub3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vdGVEaXYudGV4dENvbnRlbnQgPSBub3RlLnRpdGxlO1xuICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChub3RlRGl2KTtcbiAgICAgIG5vdGVEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IG5vdGVEaXZPcGVuID0gbm90ZURpdi5xdWVyeVNlbGVjdG9yKFwiLm5vdGUtZGl2LW9wZW5cIik7XG4gICAgICAgIGlmIChub3RlRGl2T3BlbiAhPT0gbnVsbClcbiAgICAgICAgICBub3RlRGl2T3Blbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vdGVEaXZPcGVuKTtcbiAgICAgICAgZWxzZSByZW5kZXJOb3RlKG5vdGUsIG5vdGVEaXYpO1xuICAgICAgfSk7XG4gICAgICBsZXQgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgZWRpdC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiO1xuICAgICAgZWRpdC5pbm5lckhUTUwgPSBcImVkaXRcIjtcbiAgICAgIG5vdGVEaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICBub3RlRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVOb3RlKG5vdGUpO1xuICAgICAgICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gICAgICB9KTtcbiAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbm90ZS5iZWluZ0VkaXRlZCA9IHRydWU7XG4gICAgICAgIGRpc3BsYXlOb3RlRWRpdG9yKG5vdGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyTm90ZSA9IChub3RlLCBub3RlRGl2KSA9PiB7XG4gICAgbGV0IG5vdGVEaXZPcGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RlRGl2T3Blbi5jbGFzc05hbWUgPSBcIm5vdGUtZGl2LW9wZW5cIjtcbiAgICBsZXQgbm90ZURpdk9wZW5Db2x1bW5PbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVEaXZPcGVuQ29sdW1uT25lLmNsYXNzTmFtZSA9IFwibm90ZS1kaXYtb3Blbi1jb2x1bW5cIjtcbiAgICBsZXQgbm90ZURpdk9wZW5Db2x1bW5Ud28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVEaXZPcGVuQ29sdW1uVHdvLmNsYXNzTmFtZSA9IFwibm90ZS1kaXYtb3Blbi1jb2x1bW5cIjtcbiAgICBub3RlRGl2T3Blbi5hcHBlbmRDaGlsZChub3RlRGl2T3BlbkNvbHVtbk9uZSk7XG4gICAgbm90ZURpdk9wZW4uYXBwZW5kQ2hpbGQobm90ZURpdk9wZW5Db2x1bW5Ud28pO1xuICAgIGxldCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZURpdk9wZW5Db2x1bW5PbmUuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgICBub3RlRGl2T3BlbkNvbHVtbk9uZS5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG4gICAgbGV0IGRlc2NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgcHJpb0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5vdGVEaXZPcGVuQ29sdW1uVHdvLmFwcGVuZENoaWxkKGRlc2NFbGVtZW50KTtcbiAgICBub3RlRGl2T3BlbkNvbHVtblR3by5hcHBlbmRDaGlsZChwcmlvRWxlbWVudCk7XG4gICAgbGV0IHRpdGxlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICB0aXRsZUhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbm90ZS50aXRsZTtcbiAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVIZWFkaW5nKTtcbiAgICB0aXRsZUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGxldCBkYXRlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBkYXRlSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBub3RlLmR1ZURhdGU7XG4gICAgZGF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUhlYWRpbmcpO1xuICAgIGRhdGVFbGVtZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgIGxldCBkZXNjSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBkZXNjSGVhZGluZy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gbm90ZS5kZXNjcmlwdGlvbjtcbiAgICBkZXNjRWxlbWVudC5hcHBlbmRDaGlsZChkZXNjSGVhZGluZyk7XG4gICAgZGVzY0VsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgbGV0IHByaW9IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIHByaW9IZWFkaW5nLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgICBsZXQgcHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByaW8udGV4dENvbnRlbnQgPSBub3RlLnByaW9yaXR5O1xuICAgIHByaW9FbGVtZW50LmFwcGVuZENoaWxkKHByaW9IZWFkaW5nKTtcbiAgICBwcmlvRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvKTtcbiAgICBub3RlRGl2LmFwcGVuZENoaWxkKG5vdGVEaXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJUb2RheSA9ICgpID0+IHtcbiAgICBsZXQgdG9kYXlzTm90ZXMgPSBbXTtcbiAgICBhcHAucHJvamVjdHMuZm9yRWFjaCgocHJvaikgPT5cbiAgICAgIHByb2oubm90ZXMuZm9yRWFjaCgobm90ZSkgPT4ge1xuICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZShub3RlLmR1ZURhdGUpKSkgdG9kYXlzTm90ZXMucHVzaChub3RlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgICBsZXQgcHJvamVjdCA9IFByb2plY3QoXCJUb2RheVwiKTtcbiAgICB0b2RheXNOb3Rlcy5mb3JFYWNoKChub3RlKSA9PiBwcm9qZWN0LmFkZE5vdGUobm90ZSkpO1xuICAgIHJlbmRlclByb2plY3QocHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgaXNUb2RheSA9IChzb21lRGF0ZSkgPT4ge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgc29tZURhdGUuZ2V0RGF0ZSgpID09IHRvZGF5LmdldERhdGUoKSAmJlxuICAgICAgc29tZURhdGUuZ2V0TW9udGgoKSA9PSB0b2RheS5nZXRNb250aCgpICYmXG4gICAgICBzb21lRGF0ZS5nZXRGdWxsWWVhcigpID09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyUHJvamVjdCxcbiAgICByZW5kZXJUb2RheSxcbiAgICBnZXQgcmVuZGVyZWRQcm9qZWN0KCkge1xuICAgICAgcmV0dXJuIHJlbmRlcmVkUHJvamVjdDtcbiAgICB9LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgY29udGVudCB9O1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IE5vdGUgfSBmcm9tIFwiLi9ub3Rlcy5qc1wiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5sZXQgYnRuTm90ZU1vZGFsQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2xvc2VcIik7XG5idG5Ob3RlTW9kYWxDbG9zZS5vbmNsaWNrID0gY2xvc2VOb3RlQ3JlYXRvcjtcblxubGV0IGJ0blByb2plY3RNb2RhbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWNsb3NlXCIpO1xuYnRuUHJvamVjdE1vZGFsQ2xvc2Uub25jbGljayA9IGNsb3NlUHJvamVjdENyZWF0b3I7XG5cbndpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlc01vZGFsXCIpKSB7XG4gICAgY2xvc2VOb3RlQ3JlYXRvcigpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQgPT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpKSB7XG4gICAgY2xvc2VQcm9qZWN0Q3JlYXRvcigpO1xuICB9XG59O1xuXG5sZXQgbm90ZUNyZWF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jcmVhdGlvbi1mb3JtXCIpO1xubm90ZUNyZWF0aW9uRm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWhlYWRpbmdcIikudGV4dENvbnRlbnQgPT09IFwiTmV3IE5vdGVcIilcbiAgICBzdWJtaXROZXdOb3RlKGUpO1xuICBlbHNlIHN1Ym1pdEVkaXROb3RlKGUpO1xufTtcblxuZnVuY3Rpb24gc3VibWl0TmV3Tm90ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBsZXQgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHlcIikudmFsdWU7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kYXRlXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICBsZXQgcHJvamVjdCA9IGFwcC5nZXRQcm9qZWN0KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJvamVjdFwiKS5zZWxlY3RlZEluZGV4XG4gICk7XG5cbiAgbGV0IG5vdGUgPSBOb3RlKFxuICAgIG5hbWUsXG4gICAgcHJpb3JpdHksXG4gICAgZHVlRGF0ZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBmYWxzZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByb2plY3RcIikuc2VsZWN0ZWRJbmRleFxuICApO1xuICBwcm9qZWN0LmFkZE5vdGUobm90ZSk7XG5cbiAgYXBwLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBjbG9zZU5vdGVDcmVhdG9yKCk7XG4gIHNpZGViYXIucmVuZGVyKCk7XG4gIGNvbnRlbnQucmVuZGVyUHJvamVjdChjb250ZW50LnJlbmRlcmVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXROb3RlKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCBub3RlID0gYXBwLmdldE5vdGVCZWluZ0VkaXRlZCgpO1xuXG4gIGFwcC5nZXRQcm9qZWN0KG5vdGUucHJvamVjdCkuZGVsZXRlTm90ZShub3RlKTtcblxuICBub3RlLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZVwiKS52YWx1ZTtcbiAgbm90ZS5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHlcIikudmFsdWU7XG4gIG5vdGUuZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGF0ZVwiKS52YWx1ZTtcbiAgbm90ZS5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIG5vdGUucHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJvamVjdFwiKS5zZWxlY3RlZEluZGV4O1xuXG4gIGFwcFxuICAgIC5nZXRQcm9qZWN0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJvamVjdFwiKS5zZWxlY3RlZEluZGV4KVxuICAgIC5hZGROb3RlKG5vdGUpO1xuICBub3RlLmJlaW5nRWRpdGVkID0gZmFsc2U7XG4gIGFwcC5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgY2xvc2VOb3RlQ3JlYXRvcigpO1xuICBzaWRlYmFyLnJlbmRlcigpO1xuICBjb250ZW50LnJlbmRlclByb2plY3QoY29udGVudC5yZW5kZXJlZFByb2plY3QpO1xufVxuXG5sZXQgcHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtYnRuLWFkZC1wcm9qZWN0XCIpO1xucHJvamVjdEFkZEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByb2plY3QtdGl0bGVcIik7XG4gIGFwcC5hZGRQcm9qZWN0KFByb2plY3QodGl0bGUudmFsdWUpKTtcbiAgdGl0bGUudmFsdWUgPSBcIlwiO1xuICBhcHAuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIGNsb3NlUHJvamVjdENyZWF0b3IoKTtcbiAgc2lkZWJhci5yZW5kZXIoKTtcbiAgYWRkUHJvamVjdHNUb0NyZWF0b3IoKTtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RzVG9DcmVhdG9yKCkge1xuICBsZXQgaW5wdXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcm9qZWN0XCIpO1xuICBpbnB1dFByb2plY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBsZXQgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0T3B0aW9uLmlubmVySFRNTCA9IHByb2plY3QubmFtZTtcbiAgICBpbnB1dFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Tm90ZUVkaXRvcihub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWUgPSBub3RlLnRpdGxlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5XCIpLnZhbHVlID0gbm90ZS5wcmlvcml0eTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kYXRlXCIpLnZhbHVlID0gbm90ZS5kdWVEYXRlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uXCIpLnZhbHVlID0gbm90ZS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcm9qZWN0XCIpLnNlbGVjdGVkSW5kZXggPVxuICAgIGFwcC5nZXRQcm9qZWN0SW5kZXhPZk5vdGUobm90ZSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtaGVhZGluZ1wiKS50ZXh0Q29udGVudCA9IFwiRWRpdCBOb3RlXCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tbm90ZS1zdWJtaXRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ub3RlLWVkaXRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBkaXNwbGF5Tm90ZUNyZWF0b3IoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5vdGVDcmVhdG9yKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzTW9kYWxcIik7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTm90ZUNyZWF0b3IoKSB7XG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNNb2RhbFwiKTtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLW5vdGUtc3VibWl0XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLW5vdGUtZWRpdFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgLy9jbGVhciBmb3JtXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtaGVhZGluZ1wiKS50ZXh0Q29udGVudCA9IFwiTmV3IE5vdGVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpLmZvckVhY2goKGUpID0+IChlLnZhbHVlID0gXCJcIikpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpLmZvckVhY2goKGUpID0+IChlLnNlbGVjdGVkSW5kZXggPSAwKSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0Q3JlYXRvcigpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW1vZGFsXCIpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RDcmVhdG9yKCkge1xuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbW9kYWxcIik7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHtcbiAgZGlzcGxheU5vdGVDcmVhdG9yLFxuICBjbG9zZU5vdGVDcmVhdG9yLFxuICBkaXNwbGF5UHJvamVjdENyZWF0b3IsXG4gIGNsb3NlUHJvamVjdENyZWF0b3IsXG4gIGRpc3BsYXlOb3RlRWRpdG9yLFxuICBhZGRQcm9qZWN0c1RvQ3JlYXRvcixcbn07XG4iLCJjb25zdCBOb3RlID0gZnVuY3Rpb24gKFxuICB0aXRsZSxcbiAgcHJpb3JpdHksXG4gIGR1ZURhdGUsXG4gIGRlc2NyaXB0aW9uLFxuICBjb21wbGV0ZWQsXG4gIHByb2plY3Rcbikge1xuICBsZXQgbm90ZVRpdGxlID0gdGl0bGU7XG4gIGxldCBub3RlUHJpbyA9IHByaW9yaXR5O1xuICBsZXQgbm90ZUR1ZURhdGUgPSBkdWVEYXRlO1xuICBsZXQgbm90ZURlc2MgPSBkZXNjcmlwdGlvbjtcbiAgbGV0IG5vdGVDb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIGxldCBiZWluZ0VkaXRlZCA9IGZhbHNlO1xuICBsZXQgbm90ZVByb2plY3QgPSBwcm9qZWN0O1xuXG4gIGNvbnN0IGVxdWFscyA9IChpbnB1dE5vdGUpID0+IHtcbiAgICBpZiAobm90ZVRpdGxlID09PSBpbnB1dE5vdGUudGl0bGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBlcXVhbHMsXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIG5vdGVUaXRsZTtcbiAgICB9LFxuICAgIHNldCB0aXRsZSh0aXRsZSkge1xuICAgICAgbm90ZVRpdGxlID0gdGl0bGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gbm90ZVByaW87XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgIG5vdGVQcmlvID0gcHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiBub3RlRHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgIG5vdGVEdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBub3RlRGVzYztcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgbm90ZURlc2MgPSBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgICByZXR1cm4gbm90ZUNvbXBsZXRlZDtcbiAgICB9LFxuICAgIHNldCBjb21wbGV0ZWQoY29tcGxldGVkKSB7XG4gICAgICBub3RlQ29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH0sXG4gICAgZ2V0IGJlaW5nRWRpdGVkKCkge1xuICAgICAgcmV0dXJuIGJlaW5nRWRpdGVkO1xuICAgIH0sXG4gICAgc2V0IGJlaW5nRWRpdGVkKGluRWRpdCkge1xuICAgICAgYmVpbmdFZGl0ZWQgPSBpbkVkaXQ7XG4gICAgfSxcbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgIHJldHVybiBub3RlUHJvamVjdDtcbiAgICB9LFxuICAgIHNldCBwcm9qZWN0KHByb2plY3QpIHtcbiAgICAgIG5vdGVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IHsgTm90ZSB9O1xuIiwiY29uc3QgUHJvamVjdCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGxldCBwcm9qZWN0TmFtZSA9IG5hbWU7XG4gIGxldCBub3RlcyA9IFtdO1xuICBjb25zdCBhZGROb3RlID0gKG5vdGUpID0+IHtcbiAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSAoaW5wdXROb3RlKSA9PiB7XG4gICAgbm90ZXMgPSBub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUgIT09IGlucHV0Tm90ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5hbWUpIHtcbiAgICAgIHByb2plY3ROYW1lID0gbmFtZTtcbiAgICB9LFxuICAgIGdldCBub3RlcygpIHtcbiAgICAgIHJldHVybiBub3RlcztcbiAgICB9LFxuICAgIHNldCBub3RlcyhpbnB1dE5vdGVzKSB7XG4gICAgICBub3RlcyA9IGlucHV0Tm90ZXM7XG4gICAgfSxcbiAgICBhZGROb3RlLFxuICAgIGRlbGV0ZU5vdGUsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0Q3JlYXRvciB9IGZyb20gXCIuL21vZGFsXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vY29udGVudFwiO1xuXG5jb25zdCBzaWRlYmFyID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgYXBwLnByb2plY3RzLmZvckVhY2goKHByb2opID0+IHtcbiAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHByb2oubmFtZTtcbiAgICAgIHByb2plY3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQucmVuZGVyUHJvamVjdChwcm9qKTtcbiAgICAgIH0pO1xuICAgICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xuICAgIH0pO1xuICAgIGxldCBwbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwbHVzLmlkID0gXCJidG4tYWRkLXByb2plY3RcIjtcbiAgICBwbHVzLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCI7XG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGlzcGxheVByb2plY3RDcmVhdG9yKCk7XG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHBsdXMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgc2lkZWJhciB9O1xuXG5sZXQgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xuaW5ib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgY29udGVudC5yZW5kZXJQcm9qZWN0KGFwcC5nZXRQcm9qZWN0KDApKTtcbn0pO1xuXG5sZXQgdG9kYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5XCIpO1xudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29udGVudC5yZW5kZXJUb2RheSgpO1xufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyLmpzXCI7XG5pbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vY29udGVudC5qc1wiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0c1RvQ3JlYXRvciwgZGlzcGxheU5vdGVDcmVhdG9yIH0gZnJvbSBcIi4vbW9kYWwuanNcIjtcblxuYXBwLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbnNpZGViYXIucmVuZGVyKCk7XG5cbmNvbnRlbnQucmVuZGVyUHJvamVjdChhcHAucHJvamVjdHNbMF0pO1xuXG5hZGRQcm9qZWN0c1RvQ3JlYXRvcigpO1xuXG5sZXQgYnRuQWRkTm90ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1ub3RlXCIpO1xuYnRuQWRkTm90ZS5vbmNsaWNrID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRhdGVcIikudmFsdWUgPSBuZXcgRGF0ZSgpXG4gICAgLnRvSVNPU3RyaW5nKClcbiAgICAuc3Vic3RyaW5nKDAsIDEwKTtcbiAgZGlzcGxheU5vdGVDcmVhdG9yKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9