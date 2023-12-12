/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mui-utils"));
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-badge", [], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-badge"] = factory(require("mui-utils"));
	else
		root["MuiBaseUseBadge"] = factory(root["MuiUtils"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE__mui_utils__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useBadge/useBadge.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/base/useBadge/useBadge.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useBadge)\n/* harmony export */ });\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n *\n * Demos:\n *\n * - [Unstyled badge](https://mui.com/base/react-badge/#hook)\n *\n * API:\n *\n * - [useBadge API](https://mui.com/base/api/use-badge/)\n */\nfunction useBadge(parameters) {\n  const {\n    badgeContent: badgeContentProp,\n    invisible: invisibleProp = false,\n    max: maxProp = 99,\n    showZero = false\n  } = parameters;\n  const prevProps = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_0__.usePreviousProps)({\n    badgeContent: badgeContentProp,\n    max: maxProp\n  });\n  let invisible = invisibleProp;\n  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {\n    invisible = true;\n  }\n  const {\n    badgeContent,\n    max = maxProp\n  } = invisible ? prevProps : parameters;\n  const displayValue = badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;\n  return {\n    badgeContent,\n    invisible,\n    max,\n    displayValue\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZUJhZGdlL3VzZUJhZGdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0IsNERBQWdCO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osdUVBQXVFLElBQUk7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlQmFkZ2UvLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZUJhZGdlL3VzZUJhZGdlLmpzP2ViYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUHJldmlvdXNQcm9wcyB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuLyoqXG4gKlxuICogRGVtb3M6XG4gKlxuICogLSBbVW5zdHlsZWQgYmFkZ2VdKGh0dHBzOi8vbXVpLmNvbS9iYXNlL3JlYWN0LWJhZGdlLyNob29rKVxuICpcbiAqIEFQSTpcbiAqXG4gKiAtIFt1c2VCYWRnZSBBUEldKGh0dHBzOi8vbXVpLmNvbS9iYXNlL2FwaS91c2UtYmFkZ2UvKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VCYWRnZShwYXJhbWV0ZXJzKSB7XG4gIGNvbnN0IHtcbiAgICBiYWRnZUNvbnRlbnQ6IGJhZGdlQ29udGVudFByb3AsXG4gICAgaW52aXNpYmxlOiBpbnZpc2libGVQcm9wID0gZmFsc2UsXG4gICAgbWF4OiBtYXhQcm9wID0gOTksXG4gICAgc2hvd1plcm8gPSBmYWxzZVxuICB9ID0gcGFyYW1ldGVycztcbiAgY29uc3QgcHJldlByb3BzID0gdXNlUHJldmlvdXNQcm9wcyh7XG4gICAgYmFkZ2VDb250ZW50OiBiYWRnZUNvbnRlbnRQcm9wLFxuICAgIG1heDogbWF4UHJvcFxuICB9KTtcbiAgbGV0IGludmlzaWJsZSA9IGludmlzaWJsZVByb3A7XG4gIGlmIChpbnZpc2libGVQcm9wID09PSBmYWxzZSAmJiBiYWRnZUNvbnRlbnRQcm9wID09PSAwICYmICFzaG93WmVybykge1xuICAgIGludmlzaWJsZSA9IHRydWU7XG4gIH1cbiAgY29uc3Qge1xuICAgIGJhZGdlQ29udGVudCxcbiAgICBtYXggPSBtYXhQcm9wXG4gIH0gPSBpbnZpc2libGUgPyBwcmV2UHJvcHMgOiBwYXJhbWV0ZXJzO1xuICBjb25zdCBkaXNwbGF5VmFsdWUgPSBiYWRnZUNvbnRlbnQgJiYgTnVtYmVyKGJhZGdlQ29udGVudCkgPiBtYXggPyBgJHttYXh9K2AgOiBiYWRnZUNvbnRlbnQ7XG4gIHJldHVybiB7XG4gICAgYmFkZ2VDb250ZW50LFxuICAgIGludmlzaWJsZSxcbiAgICBtYXgsXG4gICAgZGlzcGxheVZhbHVlXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useBadge/useBadge.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-badge.js":
/*!**************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-badge.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useBadge__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useBadge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useBadge */ \"./node_modules/@mui/base/useBadge/useBadge.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLWJhZGdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQmFzZVVzZUJhZGdlLy4vcmVhZ2VudC1tYXRlcmlhbC11aS1qcy9lbnRyaWVzL211aS1iYXNlLXVzZS1iYWRnZS5qcz9iMzNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2Jhc2UvdXNlQmFkZ2UnXG5leHBvcnQgKiBmcm9tICdAbXVpL2Jhc2UvdXNlQmFkZ2UnIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-badge.js\n");

/***/ }),

/***/ "@mui/utils":
/*!*****************************************************************************************************!*\
  !*** external {"root":"MuiUtils","commonjs":"mui-utils","commonjs2":"mui-utils","umd":"mui-utils"} ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__mui_utils__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-badge.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});