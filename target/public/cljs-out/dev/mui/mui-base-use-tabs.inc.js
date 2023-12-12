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
		module.exports = factory(require("react"), require("mui-utils"));
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-tabs", [, ], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-tabs"] = factory(require("react"), require("mui-utils"));
	else
		root["MuiBaseUseTabs"] = factory(root["React"], root["MuiUtils"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__mui_utils__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useTabs/useTabs.js":
/*!***************************************************!*\
  !*** ./node_modules/@mui/base/useTabs/useTabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n *\n * Demos:\n *\n * - [Unstyled Tabs](https://mui.com/base/react-tabs/#hooks)\n *\n * API:\n *\n * - [useTabs API](https://mui.com/base/api/use-tabs/)\n */\nfunction useTabs(parameters) {\n  const {\n    value: valueProp,\n    defaultValue,\n    onChange,\n    orientation,\n    direction,\n    selectionFollowsFocus\n  } = parameters;\n  const [value, setValue] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.unstable_useControlled)({\n    controlled: valueProp,\n    default: defaultValue,\n    name: 'Tabs',\n    state: 'value'\n  });\n  const idPrefix = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__.unstable_useId)();\n  const onSelected = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((e, newValue) => {\n    setValue(newValue);\n    if (onChange) {\n      onChange(e, newValue);\n    }\n  }, [onChange, setValue]);\n  const tabsContextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {\n    return {\n      idPrefix,\n      value,\n      onSelected,\n      orientation,\n      direction,\n      selectionFollowsFocus\n    };\n  }, [idPrefix, value, onSelected, orientation, direction, selectionFollowsFocus]);\n  return {\n    tabsContextValue\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTabs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZVRhYnMvdXNlVGFicy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUMrRDtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osNEJBQTRCLGtFQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG1CQUFtQiwwREFBSztBQUN4QixxQkFBcUIsOENBQWlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQiwwQ0FBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VUYWJzLy4vbm9kZV9tb2R1bGVzL0BtdWkvYmFzZS91c2VUYWJzL3VzZVRhYnMuanM/MjZkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1bnN0YWJsZV91c2VDb250cm9sbGVkIGFzIHVzZUNvbnRyb2xsZWQsIHVuc3RhYmxlX3VzZUlkIGFzIHVzZUlkIH0gZnJvbSAnQG11aS91dGlscyc7XG4vKipcbiAqXG4gKiBEZW1vczpcbiAqXG4gKiAtIFtVbnN0eWxlZCBUYWJzXShodHRwczovL211aS5jb20vYmFzZS9yZWFjdC10YWJzLyNob29rcylcbiAqXG4gKiBBUEk6XG4gKlxuICogLSBbdXNlVGFicyBBUEldKGh0dHBzOi8vbXVpLmNvbS9iYXNlL2FwaS91c2UtdGFicy8pXG4gKi9cbmZ1bmN0aW9uIHVzZVRhYnMocGFyYW1ldGVycykge1xuICBjb25zdCB7XG4gICAgdmFsdWU6IHZhbHVlUHJvcCxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgb25DaGFuZ2UsXG4gICAgb3JpZW50YXRpb24sXG4gICAgZGlyZWN0aW9uLFxuICAgIHNlbGVjdGlvbkZvbGxvd3NGb2N1c1xuICB9ID0gcGFyYW1ldGVycztcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VDb250cm9sbGVkKHtcbiAgICBjb250cm9sbGVkOiB2YWx1ZVByb3AsXG4gICAgZGVmYXVsdDogZGVmYXVsdFZhbHVlLFxuICAgIG5hbWU6ICdUYWJzJyxcbiAgICBzdGF0ZTogJ3ZhbHVlJ1xuICB9KTtcbiAgY29uc3QgaWRQcmVmaXggPSB1c2VJZCgpO1xuICBjb25zdCBvblNlbGVjdGVkID0gUmVhY3QudXNlQ2FsbGJhY2soKGUsIG5ld1ZhbHVlKSA9PiB7XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfSwgW29uQ2hhbmdlLCBzZXRWYWx1ZV0pO1xuICBjb25zdCB0YWJzQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkUHJlZml4LFxuICAgICAgdmFsdWUsXG4gICAgICBvblNlbGVjdGVkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzZWxlY3Rpb25Gb2xsb3dzRm9jdXNcbiAgICB9O1xuICB9LCBbaWRQcmVmaXgsIHZhbHVlLCBvblNlbGVjdGVkLCBvcmllbnRhdGlvbiwgZGlyZWN0aW9uLCBzZWxlY3Rpb25Gb2xsb3dzRm9jdXNdKTtcbiAgcmV0dXJuIHtcbiAgICB0YWJzQ29udGV4dFZhbHVlXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCB1c2VUYWJzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useTabs/useTabs.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-tabs.js":
/*!*************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-tabs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useTabs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useTabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useTabs */ \"./node_modules/@mui/base/useTabs/useTabs.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLXRhYnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlVGFicy8uL3JlYWdlbnQtbWF0ZXJpYWwtdWktanMvZW50cmllcy9tdWktYmFzZS11c2UtdGFicy5qcz82NjRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2Jhc2UvdXNlVGFicydcbmV4cG9ydCAqIGZyb20gJ0BtdWkvYmFzZS91c2VUYWJzJyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-tabs.js\n");

/***/ }),

/***/ "@mui/utils":
/*!*****************************************************************************************************!*\
  !*** external {"root":"MuiUtils","commonjs":"mui-utils","commonjs2":"mui-utils","umd":"mui-utils"} ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__mui_utils__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","umd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-tabs.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});