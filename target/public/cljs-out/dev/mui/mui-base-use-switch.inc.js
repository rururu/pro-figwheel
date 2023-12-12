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
		define("mui-base-use-switch", [, ], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-switch"] = factory(require("react"), require("mui-utils"));
	else
		root["MuiBaseUseSwitch"] = factory(root["React"], root["MuiUtils"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__mui_utils__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useSwitch/useSwitch.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/base/useSwitch/useSwitch.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useSwitch)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/**\n * The basic building block for creating custom switches.\n *\n * Demos:\n *\n * - [Unstyled Switch](https://mui.com/base/react-switch/#hook)\n *\n * API:\n *\n * - [useSwitch API](https://mui.com/base/api/use-switch/)\n */\nfunction useSwitch(props) {\n  const {\n    checked: checkedProp,\n    defaultChecked,\n    disabled,\n    onBlur,\n    onChange,\n    onFocus,\n    onFocusVisible,\n    readOnly,\n    required\n  } = props;\n  const [checked, setCheckedState] = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useControlled)({\n    controlled: checkedProp,\n    default: Boolean(defaultChecked),\n    name: 'Switch',\n    state: 'checked'\n  });\n  const createHandleInputChange = otherProps => event => {\n    var _otherProps$onChange;\n    // Workaround for https://github.com/facebook/react/issues/9023\n    if (event.nativeEvent.defaultPrevented) {\n      return;\n    }\n    setCheckedState(event.target.checked);\n    onChange == null ? void 0 : onChange(event);\n    (_otherProps$onChange = otherProps.onChange) == null ? void 0 : _otherProps$onChange.call(otherProps, event);\n  };\n  const {\n    isFocusVisibleRef,\n    onBlur: handleBlurVisible,\n    onFocus: handleFocusVisible,\n    ref: focusVisibleRef\n  } = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useIsFocusVisible)();\n  const [focusVisible, setFocusVisible] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n  if (disabled && focusVisible) {\n    setFocusVisible(false);\n  }\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    isFocusVisibleRef.current = focusVisible;\n  }, [focusVisible, isFocusVisibleRef]);\n  const inputRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n  const createHandleFocus = otherProps => event => {\n    var _otherProps$onFocus;\n    // Fix for https://github.com/facebook/react/issues/7769\n    if (!inputRef.current) {\n      inputRef.current = event.currentTarget;\n    }\n    handleFocusVisible(event);\n    if (isFocusVisibleRef.current === true) {\n      setFocusVisible(true);\n      onFocusVisible == null ? void 0 : onFocusVisible(event);\n    }\n    onFocus == null ? void 0 : onFocus(event);\n    (_otherProps$onFocus = otherProps.onFocus) == null ? void 0 : _otherProps$onFocus.call(otherProps, event);\n  };\n  const createHandleBlur = otherProps => event => {\n    var _otherProps$onBlur;\n    handleBlurVisible(event);\n    if (isFocusVisibleRef.current === false) {\n      setFocusVisible(false);\n    }\n    onBlur == null ? void 0 : onBlur(event);\n    (_otherProps$onBlur = otherProps.onBlur) == null ? void 0 : _otherProps$onBlur.call(otherProps, event);\n  };\n  const handleRefChange = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useForkRef)(focusVisibleRef, inputRef);\n  const getInputProps = (otherProps = {}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    checked: checkedProp,\n    defaultChecked,\n    disabled,\n    readOnly,\n    ref: handleRefChange,\n    required,\n    type: 'checkbox'\n  }, otherProps, {\n    onChange: createHandleInputChange(otherProps),\n    onFocus: createHandleFocus(otherProps),\n    onBlur: createHandleBlur(otherProps)\n  });\n  return {\n    checked,\n    disabled: Boolean(disabled),\n    focusVisible,\n    getInputProps,\n    readOnly: Boolean(readOnly)\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZVN3aXRjaC91c2VTd2l0Y2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBEO0FBQzNCO0FBQzBIO0FBQ3pKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHFDQUFxQyxrRUFBYTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsc0VBQWlCO0FBQ3ZCLDBDQUEwQywyQ0FBYztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0EsR0FBRztBQUNILG1CQUFtQix5Q0FBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtEQUFVO0FBQ3BDLHdDQUF3QyxLQUFLLDhFQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQmFzZVVzZVN3aXRjaC8uL25vZGVfbW9kdWxlcy9AbXVpL2Jhc2UvdXNlU3dpdGNoL3VzZVN3aXRjaC5qcz84NmE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdW5zdGFibGVfdXNlQ29udHJvbGxlZCBhcyB1c2VDb250cm9sbGVkLCB1bnN0YWJsZV91c2VGb3JrUmVmIGFzIHVzZUZvcmtSZWYsIHVuc3RhYmxlX3VzZUlzRm9jdXNWaXNpYmxlIGFzIHVzZUlzRm9jdXNWaXNpYmxlIH0gZnJvbSAnQG11aS91dGlscyc7XG4vKipcbiAqIFRoZSBiYXNpYyBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgY3VzdG9tIHN3aXRjaGVzLlxuICpcbiAqIERlbW9zOlxuICpcbiAqIC0gW1Vuc3R5bGVkIFN3aXRjaF0oaHR0cHM6Ly9tdWkuY29tL2Jhc2UvcmVhY3Qtc3dpdGNoLyNob29rKVxuICpcbiAqIEFQSTpcbiAqXG4gKiAtIFt1c2VTd2l0Y2ggQVBJXShodHRwczovL211aS5jb20vYmFzZS9hcGkvdXNlLXN3aXRjaC8pXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN3aXRjaChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hlY2tlZDogY2hlY2tlZFByb3AsXG4gICAgZGVmYXVsdENoZWNrZWQsXG4gICAgZGlzYWJsZWQsXG4gICAgb25CbHVyLFxuICAgIG9uQ2hhbmdlLFxuICAgIG9uRm9jdXMsXG4gICAgb25Gb2N1c1Zpc2libGUsXG4gICAgcmVhZE9ubHksXG4gICAgcmVxdWlyZWRcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZFN0YXRlXSA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IGNoZWNrZWRQcm9wLFxuICAgIGRlZmF1bHQ6IEJvb2xlYW4oZGVmYXVsdENoZWNrZWQpLFxuICAgIG5hbWU6ICdTd2l0Y2gnLFxuICAgIHN0YXRlOiAnY2hlY2tlZCdcbiAgfSk7XG4gIGNvbnN0IGNyZWF0ZUhhbmRsZUlucHV0Q2hhbmdlID0gb3RoZXJQcm9wcyA9PiBldmVudCA9PiB7XG4gICAgdmFyIF9vdGhlclByb3BzJG9uQ2hhbmdlO1xuICAgIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvOTAyM1xuICAgIGlmIChldmVudC5uYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldENoZWNrZWRTdGF0ZShldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gICAgb25DaGFuZ2UgPT0gbnVsbCA/IHZvaWQgMCA6IG9uQ2hhbmdlKGV2ZW50KTtcbiAgICAoX290aGVyUHJvcHMkb25DaGFuZ2UgPSBvdGhlclByb3BzLm9uQ2hhbmdlKSA9PSBudWxsID8gdm9pZCAwIDogX290aGVyUHJvcHMkb25DaGFuZ2UuY2FsbChvdGhlclByb3BzLCBldmVudCk7XG4gIH07XG4gIGNvbnN0IHtcbiAgICBpc0ZvY3VzVmlzaWJsZVJlZixcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXJWaXNpYmxlLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzVmlzaWJsZSxcbiAgICByZWY6IGZvY3VzVmlzaWJsZVJlZlxuICB9ID0gdXNlSXNGb2N1c1Zpc2libGUoKTtcbiAgY29uc3QgW2ZvY3VzVmlzaWJsZSwgc2V0Rm9jdXNWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgaWYgKGRpc2FibGVkICYmIGZvY3VzVmlzaWJsZSkge1xuICAgIHNldEZvY3VzVmlzaWJsZShmYWxzZSk7XG4gIH1cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0ZvY3VzVmlzaWJsZVJlZi5jdXJyZW50ID0gZm9jdXNWaXNpYmxlO1xuICB9LCBbZm9jdXNWaXNpYmxlLCBpc0ZvY3VzVmlzaWJsZVJlZl0pO1xuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgY29uc3QgY3JlYXRlSGFuZGxlRm9jdXMgPSBvdGhlclByb3BzID0+IGV2ZW50ID0+IHtcbiAgICB2YXIgX290aGVyUHJvcHMkb25Gb2N1cztcbiAgICAvLyBGaXggZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvNzc2OVxuICAgIGlmICghaW5wdXRSZWYuY3VycmVudCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgfVxuICAgIGhhbmRsZUZvY3VzVmlzaWJsZShldmVudCk7XG4gICAgaWYgKGlzRm9jdXNWaXNpYmxlUmVmLmN1cnJlbnQgPT09IHRydWUpIHtcbiAgICAgIHNldEZvY3VzVmlzaWJsZSh0cnVlKTtcbiAgICAgIG9uRm9jdXNWaXNpYmxlID09IG51bGwgPyB2b2lkIDAgOiBvbkZvY3VzVmlzaWJsZShldmVudCk7XG4gICAgfVxuICAgIG9uRm9jdXMgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRm9jdXMoZXZlbnQpO1xuICAgIChfb3RoZXJQcm9wcyRvbkZvY3VzID0gb3RoZXJQcm9wcy5vbkZvY3VzKSA9PSBudWxsID8gdm9pZCAwIDogX290aGVyUHJvcHMkb25Gb2N1cy5jYWxsKG90aGVyUHJvcHMsIGV2ZW50KTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlSGFuZGxlQmx1ciA9IG90aGVyUHJvcHMgPT4gZXZlbnQgPT4ge1xuICAgIHZhciBfb3RoZXJQcm9wcyRvbkJsdXI7XG4gICAgaGFuZGxlQmx1clZpc2libGUoZXZlbnQpO1xuICAgIGlmIChpc0ZvY3VzVmlzaWJsZVJlZi5jdXJyZW50ID09PSBmYWxzZSkge1xuICAgICAgc2V0Rm9jdXNWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgb25CbHVyID09IG51bGwgPyB2b2lkIDAgOiBvbkJsdXIoZXZlbnQpO1xuICAgIChfb3RoZXJQcm9wcyRvbkJsdXIgPSBvdGhlclByb3BzLm9uQmx1cikgPT0gbnVsbCA/IHZvaWQgMCA6IF9vdGhlclByb3BzJG9uQmx1ci5jYWxsKG90aGVyUHJvcHMsIGV2ZW50KTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlUmVmQ2hhbmdlID0gdXNlRm9ya1JlZihmb2N1c1Zpc2libGVSZWYsIGlucHV0UmVmKTtcbiAgY29uc3QgZ2V0SW5wdXRQcm9wcyA9IChvdGhlclByb3BzID0ge30pID0+IF9leHRlbmRzKHtcbiAgICBjaGVja2VkOiBjaGVja2VkUHJvcCxcbiAgICBkZWZhdWx0Q2hlY2tlZCxcbiAgICBkaXNhYmxlZCxcbiAgICByZWFkT25seSxcbiAgICByZWY6IGhhbmRsZVJlZkNoYW5nZSxcbiAgICByZXF1aXJlZCxcbiAgICB0eXBlOiAnY2hlY2tib3gnXG4gIH0sIG90aGVyUHJvcHMsIHtcbiAgICBvbkNoYW5nZTogY3JlYXRlSGFuZGxlSW5wdXRDaGFuZ2Uob3RoZXJQcm9wcyksXG4gICAgb25Gb2N1czogY3JlYXRlSGFuZGxlRm9jdXMob3RoZXJQcm9wcyksXG4gICAgb25CbHVyOiBjcmVhdGVIYW5kbGVCbHVyKG90aGVyUHJvcHMpXG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGNoZWNrZWQsXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4oZGlzYWJsZWQpLFxuICAgIGZvY3VzVmlzaWJsZSxcbiAgICBnZXRJbnB1dFByb3BzLFxuICAgIHJlYWRPbmx5OiBCb29sZWFuKHJlYWRPbmx5KVxuICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useSwitch/useSwitch.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-switch.js":
/*!***************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-switch.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useSwitch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useSwitch */ \"./node_modules/@mui/base/useSwitch/useSwitch.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLXN3aXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VTd2l0Y2gvLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLXN3aXRjaC5qcz9mNjdmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2Jhc2UvdXNlU3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnQG11aS9iYXNlL3VzZVN3aXRjaCciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-switch.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VTd2l0Y2gvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcz9jZmE3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-switch.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});