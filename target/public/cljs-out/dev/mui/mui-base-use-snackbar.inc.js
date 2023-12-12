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
		module.exports = factory(require("react"), require("mui-utils"), require("mui-base-utils")["extractEventHandlers"]);
	else if(typeof define === 'function' && define.amd)
		define("mui-base-use-snackbar", [, , ], factory);
	else if(typeof exports === 'object')
		exports["mui-base-use-snackbar"] = factory(require("react"), require("mui-utils"), require("mui-base-utils")["extractEventHandlers"]);
	else
		root["MuiBaseUseSnackbar"] = factory(root["React"], root["MuiUtils"], root["MuiBaseUtils"]["extractEventHandlers"]);
})((typeof self !== 'undefined' ? self : global), (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__mui_utils__, __WEBPACK_EXTERNAL_MODULE__utils_extractEventHandlers__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mui/base/useSnackbar/useSnackbar.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/base/useSnackbar/useSnackbar.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useSnackbar)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/utils */ \"@mui/utils\");\n/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/extractEventHandlers */ \"../utils/extractEventHandlers\");\n/* harmony import */ var _utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/**\n * The basic building block for creating custom snackbar.\n *\n * Demos:\n *\n * - [Unstyled Snackbar](https://mui.com/base/react-snackbar/#hook)\n *\n * API:\n *\n * - [useSnackbar API](https://mui.com/base/api/use-snackbar/)\n */\nfunction useSnackbar(parameters) {\n  const {\n    autoHideDuration = null,\n    disableWindowBlurListener = false,\n    onClose,\n    open,\n    ref,\n    resumeHideDuration\n  } = parameters;\n  const timerAutoHide = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    if (!open) {\n      return undefined;\n    }\n\n    /**\n     * @param {KeyboardEvent} nativeEvent\n     */\n    function handleKeyDown(nativeEvent) {\n      if (!nativeEvent.defaultPrevented) {\n        // IE11, Edge (prior to using Blink?) use 'Esc'\n        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {\n          // not calling `preventDefault` since we don't know if people may ignore this event e.g. a permanently open snackbar\n          onClose == null ? void 0 : onClose(nativeEvent, 'escapeKeyDown');\n        }\n      }\n    }\n    document.addEventListener('keydown', handleKeyDown);\n    return () => {\n      document.removeEventListener('keydown', handleKeyDown);\n    };\n  }, [open, onClose]);\n  const handleClose = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useEventCallback)((event, reason) => {\n    onClose == null ? void 0 : onClose(event, reason);\n  });\n  const setAutoHideTimer = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.unstable_useEventCallback)(autoHideDurationParam => {\n    if (!onClose || autoHideDurationParam == null) {\n      return;\n    }\n    clearTimeout(timerAutoHide.current);\n    timerAutoHide.current = setTimeout(() => {\n      handleClose(null, 'timeout');\n    }, autoHideDurationParam);\n  });\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    if (open) {\n      setAutoHideTimer(autoHideDuration);\n    }\n    return () => {\n      clearTimeout(timerAutoHide.current);\n    };\n  }, [open, autoHideDuration, setAutoHideTimer]);\n  const handleClickAway = event => {\n    onClose == null ? void 0 : onClose(event, 'clickaway');\n  };\n\n  // Pause the timer when the user is interacting with the Snackbar\n  // or when the user hide the window.\n  const handlePause = () => {\n    clearTimeout(timerAutoHide.current);\n  };\n\n  // Restart the timer when the user is no longer interacting with the Snackbar\n  // or when the window is shown back.\n  const handleResume = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {\n    if (autoHideDuration != null) {\n      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);\n    }\n  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);\n  const createHandleBlur = otherHandlers => event => {\n    const onBlurCallback = otherHandlers.onBlur;\n    onBlurCallback == null ? void 0 : onBlurCallback(event);\n    handleResume();\n  };\n  const createHandleFocus = otherHandlers => event => {\n    const onFocusCallback = otherHandlers.onFocus;\n    onFocusCallback == null ? void 0 : onFocusCallback(event);\n    handlePause();\n  };\n  const createMouseEnter = otherHandlers => event => {\n    const onMouseEnterCallback = otherHandlers.onMouseEnter;\n    onMouseEnterCallback == null ? void 0 : onMouseEnterCallback(event);\n    handlePause();\n  };\n  const createMouseLeave = otherHandlers => event => {\n    const onMouseLeaveCallback = otherHandlers.onMouseLeave;\n    onMouseLeaveCallback == null ? void 0 : onMouseLeaveCallback(event);\n    handleResume();\n  };\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {\n    // TODO: window global should be refactored here\n    if (!disableWindowBlurListener && open) {\n      window.addEventListener('focus', handleResume);\n      window.addEventListener('blur', handlePause);\n      return () => {\n        window.removeEventListener('focus', handleResume);\n        window.removeEventListener('blur', handlePause);\n      };\n    }\n    return undefined;\n  }, [disableWindowBlurListener, handleResume, open]);\n  const getRootProps = (otherHandlers = {}) => {\n    const propsEventHandlers = _utils_extractEventHandlers__WEBPACK_IMPORTED_MODULE_3___default()(parameters);\n    const externalEventHandlers = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, propsEventHandlers, otherHandlers);\n    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      ref,\n      // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.\n      // See https://github.com/mui/material-ui/issues/29080\n      role: 'presentation'\n    }, externalEventHandlers, {\n      onBlur: createHandleBlur(externalEventHandlers),\n      onFocus: createHandleFocus(externalEventHandlers),\n      onMouseEnter: createMouseEnter(externalEventHandlers),\n      onMouseLeave: createMouseLeave(externalEventHandlers)\n    });\n  };\n  return {\n    getRootProps,\n    onClickAway: handleClickAway\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG11aS9iYXNlL3VzZVNuYWNrYmFyL3VzZVNuYWNrYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBEO0FBQzNCO0FBQzRDO0FBQ1Y7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHdCQUF3Qix5Q0FBWTtBQUNwQyxFQUFFLDRDQUFlO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQixxRUFBZ0I7QUFDdEM7QUFDQSxHQUFHO0FBQ0gsMkJBQTJCLHFFQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILEVBQUUsNENBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0Q0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCwwQ0FBMEM7QUFDMUMsK0JBQStCLGtFQUFvQjtBQUNuRCxrQ0FBa0MsOEVBQVEsR0FBRztBQUM3QyxXQUFXLDhFQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VTbmFja2Jhci8uL25vZGVfbW9kdWxlcy9AbXVpL2Jhc2UvdXNlU25hY2tiYXIvdXNlU25hY2tiYXIuanM/ZTgwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVuc3RhYmxlX3VzZUV2ZW50Q2FsbGJhY2sgYXMgdXNlRXZlbnRDYWxsYmFjayB9IGZyb20gJ0BtdWkvdXRpbHMnO1xuaW1wb3J0IGV4dHJhY3RFdmVudEhhbmRsZXJzIGZyb20gJy4uL3V0aWxzL2V4dHJhY3RFdmVudEhhbmRsZXJzJztcblxuLyoqXG4gKiBUaGUgYmFzaWMgYnVpbGRpbmcgYmxvY2sgZm9yIGNyZWF0aW5nIGN1c3RvbSBzbmFja2Jhci5cbiAqXG4gKiBEZW1vczpcbiAqXG4gKiAtIFtVbnN0eWxlZCBTbmFja2Jhcl0oaHR0cHM6Ly9tdWkuY29tL2Jhc2UvcmVhY3Qtc25hY2tiYXIvI2hvb2spXG4gKlxuICogQVBJOlxuICpcbiAqIC0gW3VzZVNuYWNrYmFyIEFQSV0oaHR0cHM6Ly9tdWkuY29tL2Jhc2UvYXBpL3VzZS1zbmFja2Jhci8pXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNuYWNrYmFyKHBhcmFtZXRlcnMpIHtcbiAgY29uc3Qge1xuICAgIGF1dG9IaWRlRHVyYXRpb24gPSBudWxsLFxuICAgIGRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXIgPSBmYWxzZSxcbiAgICBvbkNsb3NlLFxuICAgIG9wZW4sXG4gICAgcmVmLFxuICAgIHJlc3VtZUhpZGVEdXJhdGlvblxuICB9ID0gcGFyYW1ldGVycztcbiAgY29uc3QgdGltZXJBdXRvSGlkZSA9IFJlYWN0LnVzZVJlZigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghb3Blbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IG5hdGl2ZUV2ZW50XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihuYXRpdmVFdmVudCkge1xuICAgICAgaWYgKCFuYXRpdmVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIC8vIElFMTEsIEVkZ2UgKHByaW9yIHRvIHVzaW5nIEJsaW5rPykgdXNlICdFc2MnXG4gICAgICAgIGlmIChuYXRpdmVFdmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IG5hdGl2ZUV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICAgICAgICAvLyBub3QgY2FsbGluZyBgcHJldmVudERlZmF1bHRgIHNpbmNlIHdlIGRvbid0IGtub3cgaWYgcGVvcGxlIG1heSBpZ25vcmUgdGhpcyBldmVudCBlLmcuIGEgcGVybWFuZW50bHkgb3BlbiBzbmFja2JhclxuICAgICAgICAgIG9uQ2xvc2UgPT0gbnVsbCA/IHZvaWQgMCA6IG9uQ2xvc2UobmF0aXZlRXZlbnQsICdlc2NhcGVLZXlEb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW29wZW4sIG9uQ2xvc2VdKTtcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VFdmVudENhbGxiYWNrKChldmVudCwgcmVhc29uKSA9PiB7XG4gICAgb25DbG9zZSA9PSBudWxsID8gdm9pZCAwIDogb25DbG9zZShldmVudCwgcmVhc29uKTtcbiAgfSk7XG4gIGNvbnN0IHNldEF1dG9IaWRlVGltZXIgPSB1c2VFdmVudENhbGxiYWNrKGF1dG9IaWRlRHVyYXRpb25QYXJhbSA9PiB7XG4gICAgaWYgKCFvbkNsb3NlIHx8IGF1dG9IaWRlRHVyYXRpb25QYXJhbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aW1lckF1dG9IaWRlLmN1cnJlbnQpO1xuICAgIHRpbWVyQXV0b0hpZGUuY3VycmVudCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaGFuZGxlQ2xvc2UobnVsbCwgJ3RpbWVvdXQnKTtcbiAgICB9LCBhdXRvSGlkZUR1cmF0aW9uUGFyYW0pO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3Blbikge1xuICAgICAgc2V0QXV0b0hpZGVUaW1lcihhdXRvSGlkZUR1cmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lckF1dG9IaWRlLmN1cnJlbnQpO1xuICAgIH07XG4gIH0sIFtvcGVuLCBhdXRvSGlkZUR1cmF0aW9uLCBzZXRBdXRvSGlkZVRpbWVyXSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrQXdheSA9IGV2ZW50ID0+IHtcbiAgICBvbkNsb3NlID09IG51bGwgPyB2b2lkIDAgOiBvbkNsb3NlKGV2ZW50LCAnY2xpY2thd2F5Jyk7XG4gIH07XG5cbiAgLy8gUGF1c2UgdGhlIHRpbWVyIHdoZW4gdGhlIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgU25hY2tiYXJcbiAgLy8gb3Igd2hlbiB0aGUgdXNlciBoaWRlIHRoZSB3aW5kb3cuXG4gIGNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lckF1dG9IaWRlLmN1cnJlbnQpO1xuICB9O1xuXG4gIC8vIFJlc3RhcnQgdGhlIHRpbWVyIHdoZW4gdGhlIHVzZXIgaXMgbm8gbG9uZ2VyIGludGVyYWN0aW5nIHdpdGggdGhlIFNuYWNrYmFyXG4gIC8vIG9yIHdoZW4gdGhlIHdpbmRvdyBpcyBzaG93biBiYWNrLlxuICBjb25zdCBoYW5kbGVSZXN1bWUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGF1dG9IaWRlRHVyYXRpb24gIT0gbnVsbCkge1xuICAgICAgc2V0QXV0b0hpZGVUaW1lcihyZXN1bWVIaWRlRHVyYXRpb24gIT0gbnVsbCA/IHJlc3VtZUhpZGVEdXJhdGlvbiA6IGF1dG9IaWRlRHVyYXRpb24gKiAwLjUpO1xuICAgIH1cbiAgfSwgW2F1dG9IaWRlRHVyYXRpb24sIHJlc3VtZUhpZGVEdXJhdGlvbiwgc2V0QXV0b0hpZGVUaW1lcl0pO1xuICBjb25zdCBjcmVhdGVIYW5kbGVCbHVyID0gb3RoZXJIYW5kbGVycyA9PiBldmVudCA9PiB7XG4gICAgY29uc3Qgb25CbHVyQ2FsbGJhY2sgPSBvdGhlckhhbmRsZXJzLm9uQmx1cjtcbiAgICBvbkJsdXJDYWxsYmFjayA9PSBudWxsID8gdm9pZCAwIDogb25CbHVyQ2FsbGJhY2soZXZlbnQpO1xuICAgIGhhbmRsZVJlc3VtZSgpO1xuICB9O1xuICBjb25zdCBjcmVhdGVIYW5kbGVGb2N1cyA9IG90aGVySGFuZGxlcnMgPT4gZXZlbnQgPT4ge1xuICAgIGNvbnN0IG9uRm9jdXNDYWxsYmFjayA9IG90aGVySGFuZGxlcnMub25Gb2N1cztcbiAgICBvbkZvY3VzQ2FsbGJhY2sgPT0gbnVsbCA/IHZvaWQgMCA6IG9uRm9jdXNDYWxsYmFjayhldmVudCk7XG4gICAgaGFuZGxlUGF1c2UoKTtcbiAgfTtcbiAgY29uc3QgY3JlYXRlTW91c2VFbnRlciA9IG90aGVySGFuZGxlcnMgPT4gZXZlbnQgPT4ge1xuICAgIGNvbnN0IG9uTW91c2VFbnRlckNhbGxiYWNrID0gb3RoZXJIYW5kbGVycy5vbk1vdXNlRW50ZXI7XG4gICAgb25Nb3VzZUVudGVyQ2FsbGJhY2sgPT0gbnVsbCA/IHZvaWQgMCA6IG9uTW91c2VFbnRlckNhbGxiYWNrKGV2ZW50KTtcbiAgICBoYW5kbGVQYXVzZSgpO1xuICB9O1xuICBjb25zdCBjcmVhdGVNb3VzZUxlYXZlID0gb3RoZXJIYW5kbGVycyA9PiBldmVudCA9PiB7XG4gICAgY29uc3Qgb25Nb3VzZUxlYXZlQ2FsbGJhY2sgPSBvdGhlckhhbmRsZXJzLm9uTW91c2VMZWF2ZTtcbiAgICBvbk1vdXNlTGVhdmVDYWxsYmFjayA9PSBudWxsID8gdm9pZCAwIDogb25Nb3VzZUxlYXZlQ2FsbGJhY2soZXZlbnQpO1xuICAgIGhhbmRsZVJlc3VtZSgpO1xuICB9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFRPRE86IHdpbmRvdyBnbG9iYWwgc2hvdWxkIGJlIHJlZmFjdG9yZWQgaGVyZVxuICAgIGlmICghZGlzYWJsZVdpbmRvd0JsdXJMaXN0ZW5lciAmJiBvcGVuKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVSZXN1bWUpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBoYW5kbGVQYXVzZSk7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBoYW5kbGVSZXN1bWUpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZVBhdXNlKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0sIFtkaXNhYmxlV2luZG93Qmx1ckxpc3RlbmVyLCBoYW5kbGVSZXN1bWUsIG9wZW5dKTtcbiAgY29uc3QgZ2V0Um9vdFByb3BzID0gKG90aGVySGFuZGxlcnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHByb3BzRXZlbnRIYW5kbGVycyA9IGV4dHJhY3RFdmVudEhhbmRsZXJzKHBhcmFtZXRlcnMpO1xuICAgIGNvbnN0IGV4dGVybmFsRXZlbnRIYW5kbGVycyA9IF9leHRlbmRzKHt9LCBwcm9wc0V2ZW50SGFuZGxlcnMsIG90aGVySGFuZGxlcnMpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICByZWYsXG4gICAgICAvLyBDbGlja0F3YXlMaXN0ZW5lciBhZGRzIGFuIGBvbkNsaWNrYCBwcm9wIHdoaWNoIHJlc3VsdHMgaW4gdGhlIGFsZXJ0IG5vdCBiZWluZyBhbm5vdW5jZWQuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL211aS9tYXRlcmlhbC11aS9pc3N1ZXMvMjkwODBcbiAgICAgIHJvbGU6ICdwcmVzZW50YXRpb24nXG4gICAgfSwgZXh0ZXJuYWxFdmVudEhhbmRsZXJzLCB7XG4gICAgICBvbkJsdXI6IGNyZWF0ZUhhbmRsZUJsdXIoZXh0ZXJuYWxFdmVudEhhbmRsZXJzKSxcbiAgICAgIG9uRm9jdXM6IGNyZWF0ZUhhbmRsZUZvY3VzKGV4dGVybmFsRXZlbnRIYW5kbGVycyksXG4gICAgICBvbk1vdXNlRW50ZXI6IGNyZWF0ZU1vdXNlRW50ZXIoZXh0ZXJuYWxFdmVudEhhbmRsZXJzKSxcbiAgICAgIG9uTW91c2VMZWF2ZTogY3JlYXRlTW91c2VMZWF2ZShleHRlcm5hbEV2ZW50SGFuZGxlcnMpXG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0Um9vdFByb3BzLFxuICAgIG9uQ2xpY2tBd2F5OiBoYW5kbGVDbGlja0F3YXlcbiAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@mui/base/useSnackbar/useSnackbar.js\n");

/***/ }),

/***/ "./reagent-material-ui-js/entries/mui-base-use-snackbar.js":
/*!*****************************************************************!*\
  !*** ./reagent-material-ui-js/entries/mui-base-use-snackbar.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _mui_base_useSnackbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _mui_base_useSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base/useSnackbar */ \"./node_modules/@mui/base/useSnackbar/useSnackbar.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWFnZW50LW1hdGVyaWFsLXVpLWpzL2VudHJpZXMvbXVpLWJhc2UtdXNlLXNuYWNrYmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXVpQmFzZVVzZVNuYWNrYmFyLy4vcmVhZ2VudC1tYXRlcmlhbC11aS1qcy9lbnRyaWVzL211aS1iYXNlLXVzZS1zbmFja2Jhci5qcz83MmZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICdAbXVpL2Jhc2UvdXNlU25hY2tiYXInXG5leHBvcnQgKiBmcm9tICdAbXVpL2Jhc2UvdXNlU25hY2tiYXInIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reagent-material-ui-js/entries/mui-base-use-snackbar.js\n");

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

/***/ "../utils/extractEventHandlers":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** external {"root":["MuiBaseUtils","extractEventHandlers"],"commonjs":["mui-base-utils","extractEventHandlers"],"commonjs2":["mui-base-utils","extractEventHandlers"],"umd":["mui-base-utils","extractEventHandlers"]} ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__utils_extractEventHandlers__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _extends)\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL011aUJhc2VVc2VTbmFja2Jhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzP2NmYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./reagent-material-ui-js/entries/mui-base-use-snackbar.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});