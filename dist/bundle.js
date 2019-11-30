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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/index.js */ \"./src/js/index.js\");\n/* harmony import */ var _js_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_index_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_base_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scss_typography_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/typography.scss */ \"./src/scss/typography.scss\");\n/* harmony import */ var _scss_typography_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_typography_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/_normalize.scss */ \"./src/scss/_normalize.scss\");\n/* harmony import */ var _scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_normalize_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let coll = document.getElementsByClassName(\"education--drop_down_heading-collapsible\");\n\nfor (let i = 0; i < coll.length; i++) {\n  coll[i].addEventListener(\"click\", function () {\n    this.classList.toggle(\"active\");\n    let content = this.nextElementSibling;\n\n    if (content.style.display === \"block\") {\n      content.style.display = \"none\";\n    } else {\n      content.style.display = \"block\";\n    }\n  });\n}\n\nlet items = document.querySelectorAll('.carousel--item');\nlet currentItem = 0;\nlet isEnabled = true;\n\nfunction changeCurrentItem(n) {\n  currentItem = (n + items.length) % items.length;\n}\n\nfunction hideItem(direction) {\n  isEnabled = false;\n  items[currentItem].classList.add(direction);\n  items[currentItem].addEventListener('animationend', function () {\n    this.classList.remove('active', direction);\n  });\n}\n\nfunction showItem(direction) {\n  items[currentItem].classList.add('next', direction);\n  items[currentItem].addEventListener('animationend', function () {\n    this.classList.remove('next', direction);\n    this.classList.add('active');\n    isEnabled = true;\n  });\n}\n\nfunction previousItem(n) {\n  hideItem('to-right');\n  changeCurrentItem(n - 1);\n  showItem('from-left');\n}\n\nfunction nextItem(n) {\n  hideItem('to-left');\n  changeCurrentItem(n + 1);\n  showItem('from-right');\n}\n\ndocument.querySelector('.control.left').addEventListener('click', function () {\n  if (isEnabled) {\n    previousItem(currentItem);\n  }\n});\ndocument.querySelector('.control.right').addEventListener('click', function () {\n  if (isEnabled) {\n    nextItem(currentItem);\n  }\n});\n\nconst swipeDetect = el => {\n  let surface = el;\n  let startX = 0;\n  let startY = 0;\n  let distX = 0;\n  let distY = 0;\n  let startTime = 0;\n  let elapsedTime = 0;\n  let threshold = 150;\n  let restraint = 100;\n  let allowedTime = 300;\n  surface.addEventListener('touchstart', function (e) {\n    if (e.target.classList.contains('arrow') || e.target.classList.contains('control')) {\n      if (e.target.classList.contains('left')) {\n        if (isEnabled) {\n          previousItem(currentItem);\n        }\n      } else if (e.target.classList.contains('right')) {\n        if (isEnabled) {\n          nextItem(currentItem);\n        }\n      }\n    }\n\n    let touchObj = e.changedTouches[0];\n    startX = touchObj.pageX;\n    startY = touchObj.pageY;\n    startTime = new Date().getTime();\n    e.preventDefault();\n  });\n  surface.addEventListener('touchmove', function (e) {\n    e.preventDefault();\n  });\n  surface.addEventListener('touchend', function (e) {\n    let touchObj = e.changedTouches[0];\n    distX = touchObj.pageX - startX;\n    distY = touchObj.pageY - startY;\n    elapsedTime = new Date().getTime() - startTime;\n\n    if (elapsedTime <= allowedTime) {\n      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {\n        if (distX > 0) {\n          if (isEnabled) {\n            previousItem(currentItem);\n          }\n        } else {\n          if (isEnabled) {\n            nextItem(currentItem);\n          }\n        }\n      }\n    }\n\n    e.preventDefault();\n  });\n};\n\nlet el = document.querySelector('.carousel');\nswipeDetect(el);\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/scss/_normalize.scss":
/*!**********************************!*\
  !*** ./src/scss/_normalize.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/_normalize.scss?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/typography.scss":
/*!**********************************!*\
  !*** ./src/scss/typography.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/typography.scss?");

/***/ })

/******/ });