"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/CartModal.jsx":
/*!**********************************!*\
  !*** ./components/CartModal.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_appContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/appContext */ \"./context/appContext.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar scaleVariants = {\n    animate: {\n        y: [\n            -100,\n            0\n        ],\n        // scale: [0, 1],\n        opacity: [\n            0,\n            1\n        ],\n        transition: {\n            duration: 5,\n            ease: \"easeInOut\"\n        }\n    }\n};\nvar Backdrop = function() {\n    _s();\n    var ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_appContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"backdrop\",\n        onClick: function() {\n            return ctx.setShowCart();\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, _this);\n};\n_s(Backdrop, \"/dMy7t63NXD4eYACoT93CePwGrg=\");\n_c = Backdrop;\nvar ModalOverlay = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = ModalOverlay;\nvar CartModal = function(param) {\n    var children = param.children;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: scaleVariants,\n        animate: scaleVariants.animate,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Backdrop, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModalOverlay, {\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Desktop\\\\ecommerceMERN\\\\ecommerce\\\\components\\\\CartModal.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_c2 = CartModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartModal);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Backdrop\");\n$RefreshReg$(_c1, \"ModalOverlay\");\n$RefreshReg$(_c2, \"CartModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRNb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUEwQztBQUNLO0FBQ1I7O0FBRXZDLElBQU1JLGFBQWEsR0FBRztJQUNwQkMsT0FBTyxFQUFFO1FBQ1BDLENBQUMsRUFBRTtZQUFDLENBQUMsR0FBRztBQUFFLGFBQUM7U0FBQztRQUNaLGlCQUFpQjtRQUNqQkMsT0FBTyxFQUFFO0FBQUMsYUFBQztBQUFFLGFBQUM7U0FBQztRQUNmQyxVQUFVLEVBQUU7WUFDVkMsUUFBUSxFQUFFLENBQUM7WUFDWEMsSUFBSSxFQUFFLFdBQVc7U0FDbEI7S0FDRjtDQUNGO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQU1DLEdBQUcsR0FBR1gsaURBQVUsQ0FBQ0MsMkRBQVUsQ0FBQztJQUVsQyxxQkFBTyw4REFBQ1csS0FBRztRQUFDQyxTQUFTLEVBQUMsVUFBVTtRQUFDQyxPQUFPLEVBQUU7bUJBQU1ILEdBQUcsQ0FBQ0ksV0FBVyxFQUFFO1NBQUE7Ozs7O2FBQVEsQ0FBQztDQUMzRTtHQUpLTCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFNZCxJQUFNTSxZQUFZLEdBQUcsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTtJQUM5QixxQkFDRSw4REFBQ0wsS0FBRztRQUFDQyxTQUFTLEVBQUMsT0FBTztrQkFDcEIsNEVBQUNELEtBQUc7c0JBQUVLLFFBQVE7Ozs7O2lCQUFPOzs7OzthQUNqQixDQUNOO0NBQ0g7QUFOS0QsTUFBQUEsWUFBWTtBQVFsQixJQUFNRSxTQUFTLEdBQUcsZ0JBQWtCO1FBQWZELFFBQVEsU0FBUkEsUUFBUTtJQUMzQixxQkFDRSw4REFBQ2YscURBQVU7UUFDVGlCLFFBQVEsRUFBRWhCLGFBQWE7UUFDdkJDLE9BQU8sRUFBRUQsYUFBYSxDQUFDQyxPQUFPOzswQkFFOUIsOERBQUNNLFFBQVE7Ozs7cUJBQUc7MEJBQ1osOERBQUNNLFlBQVk7MEJBQUVDLFFBQVE7Ozs7O3FCQUFnQjs7Ozs7O2FBQzVCLENBQ2I7Q0FDSDtBQVZLQyxNQUFBQSxTQUFTO0FBWWYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhcnRNb2RhbC5qc3g/YTNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9hcHBDb250ZXh0XCI7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5jb25zdCBzY2FsZVZhcmlhbnRzID0ge1xyXG4gIGFuaW1hdGU6IHtcclxuICAgIHk6IFstMTAwLCAwXSxcclxuICAgIC8vIHNjYWxlOiBbMCwgMV0sXHJcbiAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgIGR1cmF0aW9uOiA1LFxyXG4gICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQmFja2Ryb3AgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3R4ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBvbkNsaWNrPXsoKSA9PiBjdHguc2V0U2hvd0NhcnQoKX0+PC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgTW9kYWxPdmVybGF5ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENhcnRNb2RhbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgdmFyaWFudHM9e3NjYWxlVmFyaWFudHN9XHJcbiAgICAgIGFuaW1hdGU9e3NjYWxlVmFyaWFudHMuYW5pbWF0ZX1cclxuICAgID5cclxuICAgICAgPEJhY2tkcm9wIC8+XHJcbiAgICAgIDxNb2RhbE92ZXJsYXk+e2NoaWxkcmVufTwvTW9kYWxPdmVybGF5PlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0TW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwibW90aW9uIiwic2NhbGVWYXJpYW50cyIsImFuaW1hdGUiLCJ5Iiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJCYWNrZHJvcCIsImN0eCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzZXRTaG93Q2FydCIsIk1vZGFsT3ZlcmxheSIsImNoaWxkcmVuIiwiQ2FydE1vZGFsIiwidmFyaWFudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CartModal.jsx\n");

/***/ })

});