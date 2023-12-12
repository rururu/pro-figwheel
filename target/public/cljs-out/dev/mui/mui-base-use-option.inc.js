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
		module.exports = factory(require("react"), require("mui-utils"), require("mui-base-select-unstyled"));
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-option", [, , ], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-option"] = factory(require("react"), require("mui-utils"), require("mui-base-select-unstyled"));
	else
		root["MuiBaseUseOption"] = factory(root["React"], root["MuiUtils"], root["MuiBaseSelectUnstyled"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__mui_utils__, __WEBPACK_EXTERNAL_MODULE__SelectUnstyled_SelectUnstyledContext__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useOption/useOption.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/base/useOption/useOption.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useOption)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SelectUnstyled_SelectUnstyledContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SelectUnstyled/SelectUnstyledContext */ \"../SelectUnstyled/SelectUnstyledContext\");\n/* harmony import */ var _SelectUnstyled_SelectUnstyledContext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectUnstyled_SelectUnstyledContext__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_useForcedRerendering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForcedRerendering */ \"./node_modules/@mui/base/utils/useForcedRerendering.js\");\n\n\n\n\n\n\n/**\n *\n * API:\n *\n * - [useOption API](https://mui.com/base/api/use-option/)\n */\nfunction useOption(params) {\n  const {\n    value,\n    optionRef: optionRefParam\n  } = params;\n  const selectContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_SelectUnstyled_SelectUnstyledContext__WEBPACK_IMPORTED_MODULE_3__.SelectUnstyledContext);\n  if (!selectContext) {\n    throw new Error('Option must have access to the SelectUnstyledContext (i.e., be used inside a SelectUnstyled component).');\n  }\n  const {\n    getOptionProps,\n    getOptionState,\n    listboxRef,\n    registerHighlightChangeHandler,\n    registerSelectionChangeHandler\n  } = selectContext;\n  const optionState = getOptionState(value);\n  const {\n    selected,\n    highlighted\n  } = optionState;\n  const rerender = (0,_utils_useForcedRerendering__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    function updateSelectedState(selectedValues) {\n      if (!selected) {\n        if (Array.isArray(selectedValues)) {\n          if (selectedValues.includes(value)) {\n            rerender();\n          }\n        } else if (selectedValues === value) {\n          rerender();\n        }\n      } else if (Array.isArray(selectedValues)) {\n        if (!selectedValues.includes(value)) {\n          rerender();\n        }\n      } else if (selectedValues !== value) {\n        rerender();\n      }\n    }\n    return registerSelectionChangeHandler(updateSelectedState);\n  }, [registerSelectionChangeHandler, rerender, selected, value]);\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    function updateHighlightedState(highlightedValue) {\n      if (highlightedValue === value && !highlighted) {\n        rerender();\n      } else if (highlightedValue !== value && highlighted) {\n        rerender();\n      }\n    }\n    return registerHighlightChangeHandler(updateHighlightedState);\n  }, [registerHighlightChangeHandler, rerender, value, highlighted]);\n  const optionRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useForkRef)(optionRefParam, optionRef);\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    // Scroll to the currently highlighted option\n    if (highlighted) {\n      if (!listboxRef.current || !optionRef.current) {\n        return;\n      }\n      const listboxClientRect = listboxRef.current.getBoundingClientRect();\n      const optionClientRect = optionRef.current.getBoundingClientRect();\n      if (optionClientRect.top < listboxClientRect.top) {\n        listboxRef.current.scrollTop -= listboxClientRect.top - optionClientRect.top;\n      } else if (optionClientRect.bottom > listboxClientRect.bottom) {\n        listboxRef.current.scrollTop += optionClientRect.bottom - listboxClientRect.bottom;\n      }\n    }\n  }, [highlighted, listboxRef]);\n  return {\n    getRootProps: (otherHandlers = {}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, otherHandlers, getOptionProps(value, otherHandlers), {\n      ref: handleRef\n    }),\n    highlighted,\n    index: optionState.index,\n    selected\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZU9wdGlvbi91c2VPcHRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzNCO0FBQ2dDO0FBQ2lCO0FBQ2Y7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3Qiw2Q0FBZ0IsQ0FBQyx3RkFBcUI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLG1CQUFtQix1RUFBb0I7QUFDdkMsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0JBQW9CLHlDQUFZO0FBQ2hDLG9CQUFvQiwrREFBVTtBQUM5QixFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQ0FBcUMsS0FBSyw4RUFBUSxHQUFHO0FBQ3JEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlT3B0aW9uLy4vbm9kZV9tb2R1bGVzL0BtdWkvYmFzZS91c2VPcHRpb24vdXNlT3B0aW9uLmpzPzdmY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1bnN0YWJsZV91c2VGb3JrUmVmIGFzIHVzZUZvcmtSZWYgfSBmcm9tICdAbXVpL3V0aWxzJztcbmltcG9ydCB7IFNlbGVjdFVuc3R5bGVkQ29udGV4dCB9IGZyb20gJy4uL1NlbGVjdFVuc3R5bGVkL1NlbGVjdFVuc3R5bGVkQ29udGV4dCc7XG5pbXBvcnQgdXNlRm9yY2VkUmVyZW5kZXJpbmcgZnJvbSAnLi4vdXRpbHMvdXNlRm9yY2VkUmVyZW5kZXJpbmcnO1xuXG4vKipcbiAqXG4gKiBBUEk6XG4gKlxuICogLSBbdXNlT3B0aW9uIEFQSV0oaHR0cHM6Ly9tdWkuY29tL2Jhc2UvYXBpL3VzZS1vcHRpb24vKVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VPcHRpb24ocGFyYW1zKSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBvcHRpb25SZWY6IG9wdGlvblJlZlBhcmFtXG4gIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHNlbGVjdENvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFNlbGVjdFVuc3R5bGVkQ29udGV4dCk7XG4gIGlmICghc2VsZWN0Q29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignT3B0aW9uIG11c3QgaGF2ZSBhY2Nlc3MgdG8gdGhlIFNlbGVjdFVuc3R5bGVkQ29udGV4dCAoaS5lLiwgYmUgdXNlZCBpbnNpZGUgYSBTZWxlY3RVbnN0eWxlZCBjb21wb25lbnQpLicpO1xuICB9XG4gIGNvbnN0IHtcbiAgICBnZXRPcHRpb25Qcm9wcyxcbiAgICBnZXRPcHRpb25TdGF0ZSxcbiAgICBsaXN0Ym94UmVmLFxuICAgIHJlZ2lzdGVySGlnaGxpZ2h0Q2hhbmdlSGFuZGxlcixcbiAgICByZWdpc3RlclNlbGVjdGlvbkNoYW5nZUhhbmRsZXJcbiAgfSA9IHNlbGVjdENvbnRleHQ7XG4gIGNvbnN0IG9wdGlvblN0YXRlID0gZ2V0T3B0aW9uU3RhdGUodmFsdWUpO1xuICBjb25zdCB7XG4gICAgc2VsZWN0ZWQsXG4gICAgaGlnaGxpZ2h0ZWRcbiAgfSA9IG9wdGlvblN0YXRlO1xuICBjb25zdCByZXJlbmRlciA9IHVzZUZvcmNlZFJlcmVuZGVyaW5nKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRTdGF0ZShzZWxlY3RlZFZhbHVlcykge1xuICAgICAgaWYgKCFzZWxlY3RlZCkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RlZFZhbHVlcykpIHtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICByZXJlbmRlcigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlcyA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgcmVyZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFZhbHVlcyAhPT0gdmFsdWUpIHtcbiAgICAgICAgcmVyZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyU2VsZWN0aW9uQ2hhbmdlSGFuZGxlcih1cGRhdGVTZWxlY3RlZFN0YXRlKTtcbiAgfSwgW3JlZ2lzdGVyU2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgcmVyZW5kZXIsIHNlbGVjdGVkLCB2YWx1ZV0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUhpZ2hsaWdodGVkU3RhdGUoaGlnaGxpZ2h0ZWRWYWx1ZSkge1xuICAgICAgaWYgKGhpZ2hsaWdodGVkVmFsdWUgPT09IHZhbHVlICYmICFoaWdobGlnaHRlZCkge1xuICAgICAgICByZXJlbmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChoaWdobGlnaHRlZFZhbHVlICE9PSB2YWx1ZSAmJiBoaWdobGlnaHRlZCkge1xuICAgICAgICByZXJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVnaXN0ZXJIaWdobGlnaHRDaGFuZ2VIYW5kbGVyKHVwZGF0ZUhpZ2hsaWdodGVkU3RhdGUpO1xuICB9LCBbcmVnaXN0ZXJIaWdobGlnaHRDaGFuZ2VIYW5kbGVyLCByZXJlbmRlciwgdmFsdWUsIGhpZ2hsaWdodGVkXSk7XG4gIGNvbnN0IG9wdGlvblJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihvcHRpb25SZWZQYXJhbSwgb3B0aW9uUmVmKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBvcHRpb25cbiAgICBpZiAoaGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGlmICghbGlzdGJveFJlZi5jdXJyZW50IHx8ICFvcHRpb25SZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBsaXN0Ym94Q2xpZW50UmVjdCA9IGxpc3Rib3hSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IG9wdGlvbkNsaWVudFJlY3QgPSBvcHRpb25SZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmIChvcHRpb25DbGllbnRSZWN0LnRvcCA8IGxpc3Rib3hDbGllbnRSZWN0LnRvcCkge1xuICAgICAgICBsaXN0Ym94UmVmLmN1cnJlbnQuc2Nyb2xsVG9wIC09IGxpc3Rib3hDbGllbnRSZWN0LnRvcCAtIG9wdGlvbkNsaWVudFJlY3QudG9wO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25DbGllbnRSZWN0LmJvdHRvbSA+IGxpc3Rib3hDbGllbnRSZWN0LmJvdHRvbSkge1xuICAgICAgICBsaXN0Ym94UmVmLmN1cnJlbnQuc2Nyb2xsVG9wICs9IG9wdGlvbkNsaWVudFJlY3QuYm90dG9tIC0gbGlzdGJveENsaWVudFJlY3QuYm90dG9tO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2hpZ2hsaWdodGVkLCBsaXN0Ym94UmVmXSk7XG4gIHJldHVybiB7XG4gICAgZ2V0Um9vdFByb3BzOiAob3RoZXJIYW5kbGVycyA9IHt9KSA9PiBfZXh0ZW5kcyh7fSwgb3RoZXJIYW5kbGVycywgZ2V0T3B0aW9uUHJvcHModmFsdWUsIG90aGVySGFuZGxlcnMpLCB7XG4gICAgICByZWY6IGhhbmRsZVJlZlxuICAgIH0pLFxuICAgIGhpZ2hsaWdodGVkLFxuICAgIGluZGV4OiBvcHRpb25TdGF0ZS5pbmRleCxcbiAgICBzZWxlY3RlZFxuICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useOption/useOption.js\n");

/***/ }),

/***/ "./node_modules/@mui/base/utils/useForcedRerendering.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/base/utils/useForcedRerendering.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useForcedRerendering)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * @ignore - internal hook.\n */\nfunction useForcedRerendering() {\n  const [, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {\n    setState({});\n  }, []);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3V0aWxzL3VzZUZvcmNlZFJlcmVuZGVyaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDZTtBQUNmLHVCQUF1QiwyQ0FBYyxHQUFHO0FBQ3hDLFNBQVMsOENBQWlCO0FBQzFCLGVBQWU7QUFDZixHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlT3B0aW9uLy4vbm9kZV9tb2R1bGVzL0BtdWkvYmFzZS91dGlscy91c2VGb3JjZWRSZXJlbmRlcmluZy5qcz8yOGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGhvb2suXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUZvcmNlZFJlcmVuZGVyaW5nKCkge1xuICBjb25zdCBbLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XG4gIHJldHVybiBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U3RhdGUoe30pO1xuICB9LCBbXSk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/utils/useForcedRerendering.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-option.js":
/*!***************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-option.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useOption__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useOption */ \"./node_modules/@mui/base/useOption/useOption.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLW9wdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VPcHRpb24vLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLW9wdGlvbi5qcz8zMTRmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2Jhc2UvdXNlT3B0aW9uJ1xuZXhwb3J0ICogZnJvbSAnQG11aS9iYXNlL3VzZU9wdGlvbiciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-option.js\n");

/***/ }),

/***/ "../SelectUnstyled/SelectUnstyledContext":
/*!***************************************************************************************************************************************************************!*\
  !*** external {"root":"MuiBaseSelectUnstyled","commonjs":"mui-base-select-unstyled","commonjs2":"mui-base-select-unstyled","umd":"mui-base-select-unstyled"} ***!
  \***************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__SelectUnstyled_SelectUnstyledContext__;

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VPcHRpb24vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcz9jZmE3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-option.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});