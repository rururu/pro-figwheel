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
		module.exports = factory(require("mui-base-tabs-unstyled"));
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-tab-panel", [], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-tab-panel"] = factory(require("mui-base-tabs-unstyled"));
	else
		root["MuiBaseUseTabPanel"] = factory(root["MuiBaseTabsUnstyled"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE__TabsUnstyled__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useTabPanel/useTabPanel.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/base/useTabPanel/useTabPanel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TabsUnstyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TabsUnstyled */ \"../TabsUnstyled\");\n/* harmony import */ var _TabsUnstyled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_TabsUnstyled__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n *\n * Demos:\n *\n * - [Unstyled Tabs](https://mui.com/base/react-tabs/#hooks)\n *\n * API:\n *\n * - [useTabPanel API](https://mui.com/base/api/use-tab-panel/)\n */\nfunction useTabPanel(parameters) {\n  const {\n    value\n  } = parameters;\n  const context = (0,_TabsUnstyled__WEBPACK_IMPORTED_MODULE_0__.useTabContext)();\n  if (context === null) {\n    throw new Error('No TabContext provided');\n  }\n  const hidden = value !== context.value;\n  const id = (0,_TabsUnstyled__WEBPACK_IMPORTED_MODULE_0__.getPanelId)(context, value);\n  const tabId = (0,_TabsUnstyled__WEBPACK_IMPORTED_MODULE_0__.getTabId)(context, value);\n  const getRootProps = () => {\n    return {\n      'aria-labelledby': tabId != null ? tabId : undefined,\n      hidden,\n      id: id != null ? id : undefined\n    };\n  };\n  return {\n    hidden,\n    getRootProps\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTabPanel);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZVRhYlBhbmVsL3VzZVRhYlBhbmVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixrQkFBa0IsNERBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUFVO0FBQ3ZCLGdCQUFnQix1REFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQmFzZVVzZVRhYlBhbmVsLy4vbm9kZV9tb2R1bGVzL0BtdWkvYmFzZS91c2VUYWJQYW5lbC91c2VUYWJQYW5lbC5qcz8zNmE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRhYkNvbnRleHQsIGdldFBhbmVsSWQsIGdldFRhYklkIH0gZnJvbSAnLi4vVGFic1Vuc3R5bGVkJztcbi8qKlxuICpcbiAqIERlbW9zOlxuICpcbiAqIC0gW1Vuc3R5bGVkIFRhYnNdKGh0dHBzOi8vbXVpLmNvbS9iYXNlL3JlYWN0LXRhYnMvI2hvb2tzKVxuICpcbiAqIEFQSTpcbiAqXG4gKiAtIFt1c2VUYWJQYW5lbCBBUEldKGh0dHBzOi8vbXVpLmNvbS9iYXNlL2FwaS91c2UtdGFiLXBhbmVsLylcbiAqL1xuZnVuY3Rpb24gdXNlVGFiUGFuZWwocGFyYW1ldGVycykge1xuICBjb25zdCB7XG4gICAgdmFsdWVcbiAgfSA9IHBhcmFtZXRlcnM7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VUYWJDb250ZXh0KCk7XG4gIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBUYWJDb250ZXh0IHByb3ZpZGVkJyk7XG4gIH1cbiAgY29uc3QgaGlkZGVuID0gdmFsdWUgIT09IGNvbnRleHQudmFsdWU7XG4gIGNvbnN0IGlkID0gZ2V0UGFuZWxJZChjb250ZXh0LCB2YWx1ZSk7XG4gIGNvbnN0IHRhYklkID0gZ2V0VGFiSWQoY29udGV4dCwgdmFsdWUpO1xuICBjb25zdCBnZXRSb290UHJvcHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0YWJJZCAhPSBudWxsID8gdGFiSWQgOiB1bmRlZmluZWQsXG4gICAgICBoaWRkZW4sXG4gICAgICBpZDogaWQgIT0gbnVsbCA/IGlkIDogdW5kZWZpbmVkXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBoaWRkZW4sXG4gICAgZ2V0Um9vdFByb3BzXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCB1c2VUYWJQYW5lbDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useTabPanel/useTabPanel.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-tab-panel.js":
/*!******************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-tab-panel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useTabPanel__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useTabPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useTabPanel */ \"./node_modules/@mui/base/useTabPanel/useTabPanel.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLXRhYi1wYW5lbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VUYWJQYW5lbC8uL3JlYWdlbnQtbWF0ZXJpYWwtdWktanMvZW50cmllcy9tdWktYmFzZS11c2UtdGFiLXBhbmVsLmpzPzNlZWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BtdWkvYmFzZS91c2VUYWJQYW5lbCdcbmV4cG9ydCAqIGZyb20gJ0BtdWkvYmFzZS91c2VUYWJQYW5lbCciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-tab-panel.js\n");

/***/ }),

/***/ "../TabsUnstyled":
/*!*******************************************************************************************************************************************************!*\
  !*** external {"root":"MuiBaseTabsUnstyled","commonjs":"mui-base-tabs-unstyled","commonjs2":"mui-base-tabs-unstyled","umd":"mui-base-tabs-unstyled"} ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__TabsUnstyled__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-tab-panel.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});