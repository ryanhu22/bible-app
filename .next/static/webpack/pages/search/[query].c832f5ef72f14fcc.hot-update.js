"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[query]",{

/***/ "./components/BurgerMenu.js":
/*!**********************************!*\
  !*** ./components/BurgerMenu.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction BurgerMenu({ currentBook  }) {\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const booksOT = [\n        \"Genesis\",\n        \"Exodus\",\n        \"Leviticus\",\n        \"Numbers\",\n        \"Deuteronomy\",\n        \"Joshua\",\n        \"Judges\",\n        \"Ruth\",\n        \"1 Samuel\",\n        \"2 Samuel\",\n        \"1 Kings\",\n        \"2 Kings\",\n        \"1 Chronicles\",\n        \"2 Chronicles\",\n        \"Ezra\",\n        \"Nehemiah\",\n        \"Esther\",\n        \"Job\",\n        \"Psalms\",\n        \"Proverbs\",\n        \"Ecclesiastes\",\n        \"Song of Solomon\",\n        \"Isaiah\",\n        \"Jeremiah\",\n        \"Lamentations\",\n        \"Ezekiel\",\n        \"Daniel\",\n        \"Hosea\",\n        \"Joel\",\n        \"Amos\",\n        \"Obadiah\",\n        \"Jonah\",\n        \"Micah\",\n        \"Nahum\",\n        \"Habakkuk\",\n        \"Zephaniah\",\n        \"Haggai\",\n        \"Zechariah\",\n        \"Malachi\"\n    ];\n    const booksNT = [\n        \"Matthew\",\n        \"Mark\",\n        \"Luke\",\n        \"John\",\n        \"Acts\",\n        \"Romans\",\n        \"1 Corinthians\",\n        \"2 Corinthians\",\n        \"Galatians\",\n        \"Ephesians\",\n        \"Philippians\",\n        \"Colossians\",\n        \"1 Thessalonians\",\n        \"2 Thessalonians\",\n        \"1 Timothy\",\n        \"2 Timothy\",\n        \"Titus\",\n        \"Philemon\",\n        \"Hebrews\",\n        \"James\",\n        \"1 Peter\",\n        \"2 Peter\",\n        \"1 John\",\n        \"2 John\",\n        \"3 John\",\n        \"Jude\",\n        \"Revelation\"\n    ];\n    function handleButtonClick() {\n        setIsOpen((prevIsOpen)=>!prevIsOpen);\n    }\n    function handleClickOutside(event) {\n        if (menuRef.current && !menuRef.current.contains(event.target)) {\n            setIsOpen(false);\n        }\n    }\n    // Collapses the menu on outside click\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", handleClickOutside);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutside);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\",\n            ref: menuRef,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900\",\n                    onClick: handleButtonClick,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Bars3Icon, {\n                        className: \"h-6 w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                        lineNumber: 104,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, this),\n                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-0 bottom-2 right-0 overflow-auto left-2 mt-2 w-full md:w-3/4 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"block text-center px-4 py-2 text-sm text-gray-700 bg-gray-50 cursor-pointer disabled\",\n                                role: \"menuitem\",\n                                children: \"Old Testament\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2\",\n                                role: \"menu\",\n                                \"aria-orientation\": \"vertical\",\n                                \"aria-labelledby\": \"options-menu\",\n                                children: booksOT.map((book)=>book.toLowerCase().replace(/\\s/g, \"\") === currentBook ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/search/\" + book.toLowerCase().replace(/\\s/g, \"\") + \"-\" + \"1\",\n                                        className: \"block font-bold px-4 py-2 text-sm text-gray-700 bg-blue-100 hover:text-gray-900 cursor-pointer\",\n                                        role: \"menuitem\",\n                                        children: book\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/search/\" + book.toLowerCase().replace(/\\s/g, \"\") + \"-\" + \"1\",\n                                        className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900\",\n                                        role: \"menuitem\",\n                                        children: book\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                        lineNumber: 138,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"block text-center px-4 py-2 text-sm text-gray-700 bg-gray-50 cursor-pointer disabled\",\n                                role: \"menuitem\",\n                                children: \"New Testament\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2\",\n                                role: \"menu\",\n                                \"aria-orientation\": \"vertical\",\n                                \"aria-labelledby\": \"options-menu\",\n                                children: booksNT.map((book)=>book.toLowerCase().replace(/\\s/g, \"\") === currentBook ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/search/\" + book.toLowerCase().replace(/\\s/g, \"\") + \"-\" + \"1\",\n                                        className: \"block font-bold px-4 py-2 text-sm text-gray-700 bg-blue-100 hover:text-gray-900 cursor-pointer\",\n                                        role: \"menuitem\",\n                                        children: book\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                        lineNumber: 168,\n                                        columnNumber: 21\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: \"/search/\" + book.toLowerCase().replace(/\\s/g, \"\") + \"-\" + \"1\",\n                                        className: \"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900\",\n                                        role: \"menuitem\",\n                                        children: book\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                        lineNumber: 181,\n                                        columnNumber: 21\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                                lineNumber: 160,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n                    lineNumber: 108,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/BurgerMenu.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this);\n}\n_s(BurgerMenu, \"yIsVPXmGJnWJAXf4YKobPzEQ+oo=\");\n_c = BurgerMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BurgerMenu);\nvar _c;\n$RefreshReg$(_c, \"BurgerMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQUs7a0RBRUpJOzs7Ozs2REFHSCw4REFBQ0w7d0NBQ0NRLE1BQ0UsYUFDQUgsS0FBS0MsV0FBVyxHQUFHQyxPQUFPLENBQUMsT0FBTyxNQUNsQyxNQUNBO3dDQUVGWCxXQUFVO3dDQUNWSyxNQUFLO2tEQUVKSTs7Ozs7NENBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkI7R0F0TVMzQjtLQUFBQTtBQXdNVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1cmdlck1lbnUuanM/ZGJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhcnMzSWNvbiwgQmFyczNCb3R0b21MZWZ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcblxuZnVuY3Rpb24gQnVyZ2VyTWVudSh7IGN1cnJlbnRCb29rIH0pIHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgbWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgYm9va3NPVCA9IFtcbiAgICBcIkdlbmVzaXNcIixcbiAgICBcIkV4b2R1c1wiLFxuICAgIFwiTGV2aXRpY3VzXCIsXG4gICAgXCJOdW1iZXJzXCIsXG4gICAgXCJEZXV0ZXJvbm9teVwiLFxuICAgIFwiSm9zaHVhXCIsXG4gICAgXCJKdWRnZXNcIixcbiAgICBcIlJ1dGhcIixcbiAgICBcIjEgU2FtdWVsXCIsXG4gICAgXCIyIFNhbXVlbFwiLFxuICAgIFwiMSBLaW5nc1wiLFxuICAgIFwiMiBLaW5nc1wiLFxuICAgIFwiMSBDaHJvbmljbGVzXCIsXG4gICAgXCIyIENocm9uaWNsZXNcIixcbiAgICBcIkV6cmFcIixcbiAgICBcIk5laGVtaWFoXCIsXG4gICAgXCJFc3RoZXJcIixcbiAgICBcIkpvYlwiLFxuICAgIFwiUHNhbG1zXCIsXG4gICAgXCJQcm92ZXJic1wiLFxuICAgIFwiRWNjbGVzaWFzdGVzXCIsXG4gICAgXCJTb25nIG9mIFNvbG9tb25cIixcbiAgICBcIklzYWlhaFwiLFxuICAgIFwiSmVyZW1pYWhcIixcbiAgICBcIkxhbWVudGF0aW9uc1wiLFxuICAgIFwiRXpla2llbFwiLFxuICAgIFwiRGFuaWVsXCIsXG4gICAgXCJIb3NlYVwiLFxuICAgIFwiSm9lbFwiLFxuICAgIFwiQW1vc1wiLFxuICAgIFwiT2JhZGlhaFwiLFxuICAgIFwiSm9uYWhcIixcbiAgICBcIk1pY2FoXCIsXG4gICAgXCJOYWh1bVwiLFxuICAgIFwiSGFiYWtrdWtcIixcbiAgICBcIlplcGhhbmlhaFwiLFxuICAgIFwiSGFnZ2FpXCIsXG4gICAgXCJaZWNoYXJpYWhcIixcbiAgICBcIk1hbGFjaGlcIixcbiAgXTtcbiAgY29uc3QgYm9va3NOVCA9IFtcbiAgICBcIk1hdHRoZXdcIixcbiAgICBcIk1hcmtcIixcbiAgICBcIkx1a2VcIixcbiAgICBcIkpvaG5cIixcbiAgICBcIkFjdHNcIixcbiAgICBcIlJvbWFuc1wiLFxuICAgIFwiMSBDb3JpbnRoaWFuc1wiLFxuICAgIFwiMiBDb3JpbnRoaWFuc1wiLFxuICAgIFwiR2FsYXRpYW5zXCIsXG4gICAgXCJFcGhlc2lhbnNcIixcbiAgICBcIlBoaWxpcHBpYW5zXCIsXG4gICAgXCJDb2xvc3NpYW5zXCIsXG4gICAgXCIxIFRoZXNzYWxvbmlhbnNcIixcbiAgICBcIjIgVGhlc3NhbG9uaWFuc1wiLFxuICAgIFwiMSBUaW1vdGh5XCIsXG4gICAgXCIyIFRpbW90aHlcIixcbiAgICBcIlRpdHVzXCIsXG4gICAgXCJQaGlsZW1vblwiLFxuICAgIFwiSGVicmV3c1wiLFxuICAgIFwiSmFtZXNcIixcbiAgICBcIjEgUGV0ZXJcIixcbiAgICBcIjIgUGV0ZXJcIixcbiAgICBcIjEgSm9oblwiLFxuICAgIFwiMiBKb2huXCIsXG4gICAgXCIzIEpvaG5cIixcbiAgICBcIkp1ZGVcIixcbiAgICBcIlJldmVsYXRpb25cIixcbiAgXTtcblxuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25DbGljaygpIHtcbiAgICBzZXRJc09wZW4oKHByZXZJc09wZW4pID0+ICFwcmV2SXNPcGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudCkge1xuICAgIGlmIChtZW51UmVmLmN1cnJlbnQgJiYgIW1lbnVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbGxhcHNlcyB0aGUgbWVudSBvbiBvdXRzaWRlIGNsaWNrXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiByZWY9e21lbnVSZWZ9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0yIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1ncmF5LTkwMFwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQnV0dG9uQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICA8QmFyczNJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvdHRvbS0yIHJpZ2h0LTAgb3ZlcmZsb3ctYXV0byBsZWZ0LTIgbXQtMiB3LWZ1bGwgbWQ6dy0zLzQgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctd2hpdGUgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHsvKiBPbGQgVGVzdGFtZW50ICovfVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgYmctZ3JheS01MCBjdXJzb3ItcG9pbnRlciBkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE9sZCBUZXN0YW1lbnRcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBzbTpncmlkLWNvbHMtNCBtZDpncmlkLWNvbHMtNSBnYXAtMlwiXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgICAgIGFyaWEtb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwib3B0aW9ucy1tZW51XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtib29rc09ULm1hcCgoYm9vaykgPT5cbiAgICAgICAgICAgICAgICAgIGJvb2sudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIikgPT09IGN1cnJlbnRCb29rID8gKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvc2VhcmNoL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2sudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1ib2xkIHB4LTQgcHktMiB0ZXh0LXNtIHRleHQtZ3JheS03MDAgYmctYmx1ZS0xMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIvc2VhcmNoL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2sudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2t9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIE5ldyBUZXN0YW1lbnQgKi99XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBiZy1ncmF5LTUwIGN1cnNvci1wb2ludGVyIGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTmV3IFRlc3RhbWVudFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIHNtOmdyaWQtY29scy00IG1kOmdyaWQtY29scy01IGdhcC0yXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJvcHRpb25zLW1lbnVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2Jvb2tzTlQubWFwKChib29rKSA9PlxuICAgICAgICAgICAgICAgICAgYm9vay50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSA9PT0gY3VycmVudEJvb2sgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9zZWFyY2gvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vay50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmb250LWJvbGQgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBiZy1ibHVlLTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2t9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17XG4gICAgICAgICAgICAgICAgICAgICAgICBcIi9zZWFyY2gvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9vay50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCBcIlwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBweC00IHB5LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJtZW51aXRlbVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9va31cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVyZ2VyTWVudTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkJhcnMzSWNvbiIsIkJhcnMzQm90dG9tTGVmdEljb24iLCJCdXJnZXJNZW51IiwiY3VycmVudEJvb2siLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtZW51UmVmIiwiYm9va3NPVCIsImJvb2tzTlQiLCJoYW5kbGVCdXR0b25DbGljayIsInByZXZJc09wZW4iLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiYnV0dG9uIiwib25DbGljayIsImEiLCJyb2xlIiwiYXJpYS1vcmllbnRhdGlvbiIsImFyaWEtbGFiZWxsZWRieSIsIm1hcCIsImJvb2siLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BurgerMenu.js\n"));

/***/ })

});