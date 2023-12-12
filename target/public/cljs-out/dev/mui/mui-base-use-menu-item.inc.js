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
		module.exports = factory(require("react"), require("mui-utils"), require("mui-base-menu-unstyled"), require("mui-base-use-button"));
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-menu-item", [, , , ], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-menu-item"] = factory(require("react"), require("mui-utils"), require("mui-base-menu-unstyled"), require("mui-base-use-button"));
	else
		root["MuiBaseUseMenuItem"] = factory(root["React"], root["MuiUtils"], root["MuiBaseMenuUnstyled"], root["MuiBaseUseButton"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__mui_utils__, __WEBPACK_EXTERNAL_MODULE__MenuUnstyled__, __WEBPACK_EXTERNAL_MODULE__useButton__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useMenuItem/useMenuItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/base/useMenuItem/useMenuItem.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMenuItem)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MenuUnstyled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuUnstyled */ \"../MenuUnstyled\");\n/* harmony import */ var _MenuUnstyled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MenuUnstyled__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _useButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useButton */ \"../useButton\");\n/* harmony import */ var _useButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_useButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_useForcedRerendering__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForcedRerendering */ \"./node_modules/@mui/base/utils/useForcedRerendering.js\");\n\n\n\n\n\n\n\n/**\n *\n * Demos:\n *\n * - [Unstyled Menu](https://mui.com/base/react-menu/#hooks)\n *\n * API:\n *\n * - [useMenuItem API](https://mui.com/base/api/use-menu-item/)\n */\nfunction useMenuItem(props) {\n  var _itemState$disabled;\n  const {\n    disabled = false,\n    ref,\n    label\n  } = props;\n  const id = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useId)();\n  const menuContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(_MenuUnstyled__WEBPACK_IMPORTED_MODULE_3__.MenuUnstyledContext);\n  const itemRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useForkRef)(itemRef, ref);\n  if (menuContext === null) {\n    throw new Error('MenuItemUnstyled must be used within a MenuUnstyled');\n  }\n  const {\n    registerItem,\n    unregisterItem,\n    open,\n    registerHighlightChangeHandler\n  } = menuContext;\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    if (id === undefined) {\n      return undefined;\n    }\n    registerItem(id, {\n      disabled,\n      id,\n      ref: itemRef,\n      label\n    });\n    return () => unregisterItem(id);\n  }, [id, registerItem, unregisterItem, disabled, ref, label]);\n  const {\n    getRootProps: getButtonProps,\n    focusVisible\n  } = _useButton__WEBPACK_IMPORTED_MODULE_4___default()({\n    disabled,\n    focusableWhenDisabled: true,\n    ref: handleRef\n  });\n\n  // Ensure the menu item is focused when highlighted\n  const [focusRequested, requestFocus] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);\n  const focusIfRequested = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {\n    if (focusRequested && itemRef.current != null) {\n      itemRef.current.focus();\n      requestFocus(false);\n    }\n  }, [focusRequested]);\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    focusIfRequested();\n  });\n  react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue({\n    id,\n    disabled,\n    label\n  });\n  const itemState = menuContext.getItemState(id != null ? id : '');\n  const {\n    highlighted\n  } = itemState != null ? itemState : {\n    highlighted: false\n  };\n  const rerender = (0,_utils_useForcedRerendering__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    function updateHighlightedState(highlightedItemId) {\n      if (highlightedItemId === id && !highlighted) {\n        rerender();\n      } else if (highlightedItemId !== id && highlighted) {\n        rerender();\n      }\n    }\n    return registerHighlightChangeHandler(updateHighlightedState);\n  });\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    // TODO: this should be handled by the MenuButton\n    requestFocus(highlighted && open);\n  }, [highlighted, open]);\n  if (id === undefined) {\n    return {\n      getRootProps: other => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, other, getButtonProps(other), {\n        role: 'menuitem'\n      }),\n      disabled: false,\n      focusVisible,\n      highlighted: false\n    };\n  }\n  return {\n    getRootProps: other => {\n      const optionProps = menuContext.getItemProps(id, other);\n      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, other, getButtonProps(other), {\n        tabIndex: optionProps.tabIndex,\n        id: optionProps.id,\n        role: 'menuitem'\n      });\n    },\n    disabled: (_itemState$disabled = itemState == null ? void 0 : itemState.disabled) != null ? _itemState$disabled : false,\n    focusVisible,\n    highlighted\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZU1lbnVJdGVtL3VzZU1lbnVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzNCO0FBQ3lEO0FBQ2xDO0FBQ2pCO0FBQzRCOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixhQUFhLDBEQUFLO0FBQ2xCLHNCQUFzQiw2Q0FBZ0IsQ0FBQyw4REFBbUI7QUFDMUQsa0JBQWtCLHlDQUFZO0FBQzlCLG9CQUFvQiwrREFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLEVBQUUsaURBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EseUNBQXlDLDJDQUFjO0FBQ3ZELDJCQUEyQiw4Q0FBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBLEdBQUc7QUFDSCxFQUFFLGdEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxtQkFBbUIsdUVBQW9CO0FBQ3ZDLEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsNkJBQTZCLDhFQUFRLEdBQUc7QUFDeEM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsOEVBQVEsR0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlTWVudUl0ZW0vLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZU1lbnVJdGVtL3VzZU1lbnVJdGVtLmpzPzUxZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1bnN0YWJsZV91c2VJZCBhcyB1c2VJZCwgdW5zdGFibGVfdXNlRm9ya1JlZiBhcyB1c2VGb3JrUmVmIH0gZnJvbSAnQG11aS91dGlscyc7XG5pbXBvcnQgeyBNZW51VW5zdHlsZWRDb250ZXh0IH0gZnJvbSAnLi4vTWVudVVuc3R5bGVkJztcbmltcG9ydCB1c2VCdXR0b24gZnJvbSAnLi4vdXNlQnV0dG9uJztcbmltcG9ydCB1c2VGb3JjZWRSZXJlbmRlcmluZyBmcm9tICcuLi91dGlscy91c2VGb3JjZWRSZXJlbmRlcmluZyc7XG5cbi8qKlxuICpcbiAqIERlbW9zOlxuICpcbiAqIC0gW1Vuc3R5bGVkIE1lbnVdKGh0dHBzOi8vbXVpLmNvbS9iYXNlL3JlYWN0LW1lbnUvI2hvb2tzKVxuICpcbiAqIEFQSTpcbiAqXG4gKiAtIFt1c2VNZW51SXRlbSBBUEldKGh0dHBzOi8vbXVpLmNvbS9iYXNlL2FwaS91c2UtbWVudS1pdGVtLylcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTWVudUl0ZW0ocHJvcHMpIHtcbiAgdmFyIF9pdGVtU3RhdGUkZGlzYWJsZWQ7XG4gIGNvbnN0IHtcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIHJlZixcbiAgICBsYWJlbFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGlkID0gdXNlSWQoKTtcbiAgY29uc3QgbWVudUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KE1lbnVVbnN0eWxlZENvbnRleHQpO1xuICBjb25zdCBpdGVtUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICBjb25zdCBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGl0ZW1SZWYsIHJlZik7XG4gIGlmIChtZW51Q29udGV4dCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWVudUl0ZW1VbnN0eWxlZCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgTWVudVVuc3R5bGVkJyk7XG4gIH1cbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVySXRlbSxcbiAgICB1bnJlZ2lzdGVySXRlbSxcbiAgICBvcGVuLFxuICAgIHJlZ2lzdGVySGlnaGxpZ2h0Q2hhbmdlSGFuZGxlclxuICB9ID0gbWVudUNvbnRleHQ7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJlZ2lzdGVySXRlbShpZCwge1xuICAgICAgZGlzYWJsZWQsXG4gICAgICBpZCxcbiAgICAgIHJlZjogaXRlbVJlZixcbiAgICAgIGxhYmVsXG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHVucmVnaXN0ZXJJdGVtKGlkKTtcbiAgfSwgW2lkLCByZWdpc3Rlckl0ZW0sIHVucmVnaXN0ZXJJdGVtLCBkaXNhYmxlZCwgcmVmLCBsYWJlbF0pO1xuICBjb25zdCB7XG4gICAgZ2V0Um9vdFByb3BzOiBnZXRCdXR0b25Qcm9wcyxcbiAgICBmb2N1c1Zpc2libGVcbiAgfSA9IHVzZUJ1dHRvbih7XG4gICAgZGlzYWJsZWQsXG4gICAgZm9jdXNhYmxlV2hlbkRpc2FibGVkOiB0cnVlLFxuICAgIHJlZjogaGFuZGxlUmVmXG4gIH0pO1xuXG4gIC8vIEVuc3VyZSB0aGUgbWVudSBpdGVtIGlzIGZvY3VzZWQgd2hlbiBoaWdobGlnaHRlZFxuICBjb25zdCBbZm9jdXNSZXF1ZXN0ZWQsIHJlcXVlc3RGb2N1c10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZvY3VzSWZSZXF1ZXN0ZWQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGZvY3VzUmVxdWVzdGVkICYmIGl0ZW1SZWYuY3VycmVudCAhPSBudWxsKSB7XG4gICAgICBpdGVtUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgIHJlcXVlc3RGb2N1cyhmYWxzZSk7XG4gICAgfVxuICB9LCBbZm9jdXNSZXF1ZXN0ZWRdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmb2N1c0lmUmVxdWVzdGVkKCk7XG4gIH0pO1xuICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHtcbiAgICBpZCxcbiAgICBkaXNhYmxlZCxcbiAgICBsYWJlbFxuICB9KTtcbiAgY29uc3QgaXRlbVN0YXRlID0gbWVudUNvbnRleHQuZ2V0SXRlbVN0YXRlKGlkICE9IG51bGwgPyBpZCA6ICcnKTtcbiAgY29uc3Qge1xuICAgIGhpZ2hsaWdodGVkXG4gIH0gPSBpdGVtU3RhdGUgIT0gbnVsbCA/IGl0ZW1TdGF0ZSA6IHtcbiAgICBoaWdobGlnaHRlZDogZmFsc2VcbiAgfTtcbiAgY29uc3QgcmVyZW5kZXIgPSB1c2VGb3JjZWRSZXJlbmRlcmluZygpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUhpZ2hsaWdodGVkU3RhdGUoaGlnaGxpZ2h0ZWRJdGVtSWQpIHtcbiAgICAgIGlmIChoaWdobGlnaHRlZEl0ZW1JZCA9PT0gaWQgJiYgIWhpZ2hsaWdodGVkKSB7XG4gICAgICAgIHJlcmVuZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGhpZ2hsaWdodGVkSXRlbUlkICE9PSBpZCAmJiBoaWdobGlnaHRlZCkge1xuICAgICAgICByZXJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVnaXN0ZXJIaWdobGlnaHRDaGFuZ2VIYW5kbGVyKHVwZGF0ZUhpZ2hsaWdodGVkU3RhdGUpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSBoYW5kbGVkIGJ5IHRoZSBNZW51QnV0dG9uXG4gICAgcmVxdWVzdEZvY3VzKGhpZ2hsaWdodGVkICYmIG9wZW4pO1xuICB9LCBbaGlnaGxpZ2h0ZWQsIG9wZW5dKTtcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0Um9vdFByb3BzOiBvdGhlciA9PiBfZXh0ZW5kcyh7fSwgb3RoZXIsIGdldEJ1dHRvblByb3BzKG90aGVyKSwge1xuICAgICAgICByb2xlOiAnbWVudWl0ZW0nXG4gICAgICB9KSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIGZvY3VzVmlzaWJsZSxcbiAgICAgIGhpZ2hsaWdodGVkOiBmYWxzZVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBnZXRSb290UHJvcHM6IG90aGVyID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvblByb3BzID0gbWVudUNvbnRleHQuZ2V0SXRlbVByb3BzKGlkLCBvdGhlcik7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIG90aGVyLCBnZXRCdXR0b25Qcm9wcyhvdGhlciksIHtcbiAgICAgICAgdGFiSW5kZXg6IG9wdGlvblByb3BzLnRhYkluZGV4LFxuICAgICAgICBpZDogb3B0aW9uUHJvcHMuaWQsXG4gICAgICAgIHJvbGU6ICdtZW51aXRlbSdcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IChfaXRlbVN0YXRlJGRpc2FibGVkID0gaXRlbVN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBpdGVtU3RhdGUuZGlzYWJsZWQpICE9IG51bGwgPyBfaXRlbVN0YXRlJGRpc2FibGVkIDogZmFsc2UsXG4gICAgZm9jdXNWaXNpYmxlLFxuICAgIGhpZ2hsaWdodGVkXG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useMenuItem/useMenuItem.js\n");

/***/ }),

/***/ "./node_modules/@mui/base/utils/useForcedRerendering.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mui/base/utils/useForcedRerendering.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useForcedRerendering)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * @ignore - internal hook.\n */\nfunction useForcedRerendering() {\n  const [, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});\n  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {\n    setState({});\n  }, []);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3V0aWxzL3VzZUZvcmNlZFJlcmVuZGVyaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDZTtBQUNmLHVCQUF1QiwyQ0FBYyxHQUFHO0FBQ3hDLFNBQVMsOENBQWlCO0FBQzFCLGVBQWU7QUFDZixHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NdWlCYXNlVXNlTWVudUl0ZW0vLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3V0aWxzL3VzZUZvcmNlZFJlcmVuZGVyaW5nLmpzPzI4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgaG9vay5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9yY2VkUmVyZW5kZXJpbmcoKSB7XG4gIGNvbnN0IFssIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcbiAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTdGF0ZSh7fSk7XG4gIH0sIFtdKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/utils/useForcedRerendering.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-menu-item.js":
/*!******************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-menu-item.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useMenuItem__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useMenuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useMenuItem */ \"./node_modules/@mui/base/useMenuItem/useMenuItem.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLW1lbnUtaXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErQyIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VNZW51SXRlbS8uL3JlYWdlbnQtbWF0ZXJpYWwtdWktanMvZW50cmllcy9tdWktYmFzZS11c2UtbWVudS1pdGVtLmpzPzI3ODciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJ0BtdWkvYmFzZS91c2VNZW51SXRlbSdcbmV4cG9ydCAqIGZyb20gJ0BtdWkvYmFzZS91c2VNZW51SXRlbSciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-menu-item.js\n");

/***/ }),

/***/ "../MenuUnstyled":
/*!*******************************************************************************************************************************************************!*\
  !*** external {"root":"MuiBaseMenuUnstyled","commonjs":"mui-base-menu-unstyled","commonjs2":"mui-base-menu-unstyled","umd":"mui-base-menu-unstyled"} ***!
  \*******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__MenuUnstyled__;

/***/ }),

/***/ "../useButton":
/*!*******************************************************************************************************************************************!*\
  !*** external {"root":"MuiBaseUseButton","commonjs":"mui-base-use-button","commonjs2":"mui-base-use-button","umd":"mui-base-use-button"} ***!
  \*******************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__useButton__;

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VNZW51SXRlbS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzP2NmYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-menu-item.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});