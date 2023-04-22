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

/***/ "./pages/search/[query].js":
/*!*********************************!*\
  !*** ./pages/search/[query].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ChatButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ChatButton */ \"./components/ChatButton.js\");\n/* harmony import */ var _components_Passage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Passage */ \"./components/Passage.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Search */ \"./components/Search.js\");\n/* harmony import */ var _components_BurgerMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/BurgerMenu */ \"./components/BurgerMenu.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase */ \"./firebase.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction SearchPage() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { query  } = router.query;\n    const [book, setBook] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [chapter, setChapter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [bookInput, setBookInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [chapterInput, setChapterInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [passageHTML, setPassageHTML] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isSignOutOpen, setIsSignOutOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const signOutRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    // Fetch the query\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!query) {\n            return;\n        }\n        const splitQuery = query.trim().split(\"-\");\n        setChapter(splitQuery.pop());\n        setBook(splitQuery.join(\" \"));\n    }, [\n        query\n    ]);\n    // UseEffects ==================================\n    // Fetch book / chapter from query\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (book && chapter) {\n            search(null, book, chapter);\n        } else {}\n    }, [\n        book,\n        chapter\n    ]);\n    // Collapses the sign out menu on outside click\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"click\", handleClickOutsideSignOut);\n        return ()=>{\n            window.removeEventListener(\"click\", handleClickOutsideSignOut);\n        };\n    }, []);\n    // Functions ==================================\n    const handleBookInputChange = (e)=>{\n        setBookInput(e.target.value);\n    };\n    const handleChapterInputChange = (e)=>{\n        setChapterInput(e.target.value);\n    };\n    function handleSignOutPopupClick() {\n        setIsSignOutOpen((isSignOutOpen)=>!isSignOutOpen);\n    }\n    function handleClickOutsideSignOut(event) {\n        if (signOutRef.current && !signOutRef.current.contains(event.target)) {\n            setIsSignOutOpen(false);\n        }\n    }\n    function separateNumberAndCapitalize(inputString) {\n        if (inputString === \"songofsolomon\") {\n            return \"Song of Solomon\";\n        }\n        const regex = /(\\d+)([a-zA-Z]+)/g;\n        const match = regex.exec(inputString);\n        if (match) {\n            const number = match[1];\n            const word = match[2].toLowerCase().replace(/^\\w/, (c)=>c.toUpperCase());\n            return `${number} ${word}`;\n        } else {\n            return inputString.toLowerCase().replace(/^\\w/, (c)=>c.toUpperCase());\n        }\n    }\n    const search = async (e, book, chapter)=>{\n        if (e) {\n            e.preventDefault();\n        }\n        if (!chapter) {\n            chapter = 1;\n        }\n        const bookQuery = book.toLowerCase().replace(/\\s/g, \"\");\n        const chapterQuery = chapter.replace(/\\s/g, \"\");\n        var passage_text = await searchNoUser(bookQuery, chapterQuery);\n        setPassageHTML(passage_text);\n        setBook(book);\n        setChapter(chapter);\n        // See if there is a saved HTML\n        var override_passage_text = null;\n        if (session?.user) {\n            override_passage_text = await searchExistingUser(bookQuery, chapterQuery);\n            if (override_passage_text && override_passage_text !== passage_text) {\n                setPassageHTML(override_passage_text);\n            }\n        }\n        router.push(`/search/${bookQuery}-${chapterQuery}`);\n    };\n    const searchExistingUser = async (bookQuery, chapterQuery)=>{\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, \"Users\", session?.user.email, bookQuery, chapterQuery);\n        var docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const passage_text = docSnap.data()[\"html\"];\n            return passage_text;\n        } else {\n            return null;\n        }\n    };\n    const searchNoUser = async (bookQuery, chapterQuery)=>{\n        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_10__.db, bookQuery, chapterQuery);\n        var docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_9__.getDoc)(docRef);\n        if (docSnap.exists()) {\n            const passage_text = docSnap.data()[\"html\"];\n            return passage_text;\n        } else {\n            return null;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Bible Assistant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                        lineNumber: 145,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sticky top-0 z-50 bg-white\",\n                children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pb-3 z-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BurgerMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                currentBook: book\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                                lineNumber: 154,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                            lineNumber: 153,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: signOutRef,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    onClick: handleSignOutPopupClick,\n                                    src: session?.user?.image,\n                                    alt: \"profile picture\",\n                                    className: \"h-10 w-10 rounded-full cursor-pointer hover:scale-125 transition-all duration-150 ease-out\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                                    lineNumber: 157,\n                                    columnNumber: 15\n                                }, this),\n                                isSignOutOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute right-0 top-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"block text-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer disabled\",\n                                        role: \"menuitem\",\n                                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signOut,\n                                        children: \"Sign Out\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                                        lineNumber: 165,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                                    lineNumber: 164,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                            lineNumber: 156,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                    lineNumber: 152,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between w-full -y-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pb-3 z-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BurgerMenu__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                currentBook: book\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                                lineNumber: 179,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                            lineNumber: 178,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"py-2 px-4 bg-blue-300 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\",\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn,\n                            children: \"Sign in\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                            lineNumber: 181,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                    lineNumber: 177,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    bookInput: bookInput,\n                    handleBookInputChange: handleBookInputChange,\n                    chapterInput: chapterInput,\n                    handleChapterInputChange: handleChapterInputChange,\n                    searchFunc: search\n                }, void 0, false, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                    lineNumber: 192,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"grid py-4 border-b-2 place-items-center text-3xl font-bold uppercase tracking-wide text-black\",\n                children: [\n                    separateNumberAndCapitalize(book),\n                    \" \",\n                    chapter\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-3 xl:mx-16\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Passage__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    passageHTML: passageHTML,\n                    searchFunc: search,\n                    book: book,\n                    chapter: chapter\n                }, void 0, false, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                    lineNumber: 206,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ChatButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n                lineNumber: 214,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/pages/search/[query].js\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchPage, \"jSI0ZERqvPjD4p9VNdN8GZIbb3g=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchPage;\nvar _c;\n$RefreshReg$(_c, \"SearchPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNtRTtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3RFLDBEQUFNQTtvQkFDTGlCLFdBQVdBO29CQUNYbUIsdUJBQXVCQTtvQkFDdkJqQixjQUFjQTtvQkFDZHFCLDBCQUEwQkE7b0JBQzFCNEMsWUFBWXJEOzs7Ozs7Ozs7OzswQkFJaEIsOERBQUNzRDtnQkFBRWYsV0FBVTs7b0JBQ1Z6Qiw0QkFBNEJoQztvQkFBTTtvQkFBRUU7Ozs7Ozs7MEJBR3ZDLDhEQUFDc0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN2RSwyREFBT0E7b0JBQ05zQixhQUFhQTtvQkFDYitELFlBQVlyRDtvQkFDWmxCLE1BQU1BO29CQUNORSxTQUFTQTs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUNqQiw4REFBVUE7Ozs7Ozs7Ozs7O0FBR2pCLENBQUM7R0E3TXVCVTs7UUFDSUosdURBQVVBO1FBQ3JCVixrREFBU0E7OztLQUZGYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gvW3F1ZXJ5XS5qcz9hNzViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhdEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DaGF0QnV0dG9uXCI7XG5pbXBvcnQgUGFzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYXNzYWdlXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaFwiO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnVyZ2VyTWVudVwiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgZG9jLCBnZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQYWdlKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW2Jvb2ssIHNldEJvb2tdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFwdGVyLCBzZXRDaGFwdGVyXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYm9va0lucHV0LCBzZXRCb29rSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGFwdGVySW5wdXQsIHNldENoYXB0ZXJJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3NhZ2VIVE1MLCBzZXRQYXNzYWdlSFRNTF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU2lnbk91dE9wZW4sIHNldElzU2lnbk91dE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaWduT3V0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIC8vIEZldGNoIHRoZSBxdWVyeVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3BsaXRRdWVyeSA9IHF1ZXJ5LnRyaW0oKS5zcGxpdChcIi1cIik7XG4gICAgc2V0Q2hhcHRlcihzcGxpdFF1ZXJ5LnBvcCgpKTtcbiAgICBzZXRCb29rKHNwbGl0UXVlcnkuam9pbihcIiBcIikpO1xuICB9LCBbcXVlcnldKTtcblxuICAvLyBVc2VFZmZlY3RzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRmV0Y2ggYm9vayAvIGNoYXB0ZXIgZnJvbSBxdWVyeVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChib29rICYmIGNoYXB0ZXIpIHtcbiAgICAgIHNlYXJjaChudWxsLCBib29rLCBjaGFwdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfSwgW2Jvb2ssIGNoYXB0ZXJdKTtcblxuICAvLyBDb2xsYXBzZXMgdGhlIHNpZ24gb3V0IG1lbnUgb24gb3V0c2lkZSBjbGlja1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tPdXRzaWRlU2lnbk91dCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja091dHNpZGVTaWduT3V0KTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgLy8gRnVuY3Rpb25zID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgY29uc3QgaGFuZGxlQm9va0lucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRCb29rSW5wdXQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYXB0ZXJJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q2hhcHRlcklucHV0KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVTaWduT3V0UG9wdXBDbGljaygpIHtcbiAgICBzZXRJc1NpZ25PdXRPcGVuKChpc1NpZ25PdXRPcGVuKSA9PiAhaXNTaWduT3V0T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGVTaWduT3V0KGV2ZW50KSB7XG4gICAgaWYgKHNpZ25PdXRSZWYuY3VycmVudCAmJiAhc2lnbk91dFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHNldElzU2lnbk91dE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlcGFyYXRlTnVtYmVyQW5kQ2FwaXRhbGl6ZShpbnB1dFN0cmluZykge1xuICAgIGlmIChpbnB1dFN0cmluZyA9PT0gXCJzb25nb2Zzb2xvbW9uXCIpIHtcbiAgICAgIHJldHVybiBcIlNvbmcgb2YgU29sb21vblwiO1xuICAgIH1cbiAgICBjb25zdCByZWdleCA9IC8oXFxkKykoW2EtekEtWl0rKS9nO1xuICAgIGNvbnN0IG1hdGNoID0gcmVnZXguZXhlYyhpbnB1dFN0cmluZyk7XG5cbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIGNvbnN0IG51bWJlciA9IG1hdGNoWzFdO1xuICAgICAgY29uc3Qgd29yZCA9IG1hdGNoWzJdXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9eXFx3LywgKGMpID0+IGMudG9VcHBlckNhc2UoKSk7XG4gICAgICByZXR1cm4gYCR7bnVtYmVyfSAke3dvcmR9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlucHV0U3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXlxcdy8sIChjKSA9PiBjLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChlLCBib29rLCBjaGFwdGVyKSA9PiB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKCFjaGFwdGVyKSB7XG4gICAgICBjaGFwdGVyID0gMTtcbiAgICB9XG5cbiAgICBjb25zdCBib29rUXVlcnkgPSBib29rLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgIGNvbnN0IGNoYXB0ZXJRdWVyeSA9IGNoYXB0ZXIucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xuICAgIHZhciBwYXNzYWdlX3RleHQgPSBhd2FpdCBzZWFyY2hOb1VzZXIoYm9va1F1ZXJ5LCBjaGFwdGVyUXVlcnkpO1xuICAgIHNldFBhc3NhZ2VIVE1MKHBhc3NhZ2VfdGV4dCk7XG4gICAgc2V0Qm9vayhib29rKTtcbiAgICBzZXRDaGFwdGVyKGNoYXB0ZXIpO1xuICAgIC8vIFNlZSBpZiB0aGVyZSBpcyBhIHNhdmVkIEhUTUxcbiAgICB2YXIgb3ZlcnJpZGVfcGFzc2FnZV90ZXh0ID0gbnVsbDtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcikge1xuICAgICAgb3ZlcnJpZGVfcGFzc2FnZV90ZXh0ID0gYXdhaXQgc2VhcmNoRXhpc3RpbmdVc2VyKGJvb2tRdWVyeSwgY2hhcHRlclF1ZXJ5KTtcbiAgICAgIGlmIChvdmVycmlkZV9wYXNzYWdlX3RleHQgJiYgb3ZlcnJpZGVfcGFzc2FnZV90ZXh0ICE9PSBwYXNzYWdlX3RleHQpIHtcbiAgICAgICAgc2V0UGFzc2FnZUhUTUwob3ZlcnJpZGVfcGFzc2FnZV90ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2gvJHtib29rUXVlcnl9LSR7Y2hhcHRlclF1ZXJ5fWApO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaEV4aXN0aW5nVXNlciA9IGFzeW5jIChib29rUXVlcnksIGNoYXB0ZXJRdWVyeSkgPT4ge1xuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhcbiAgICAgIGRiLFxuICAgICAgXCJVc2Vyc1wiLFxuICAgICAgc2Vzc2lvbj8udXNlci5lbWFpbCxcbiAgICAgIGJvb2tRdWVyeSxcbiAgICAgIGNoYXB0ZXJRdWVyeVxuICAgICk7XG4gICAgdmFyIGRvY1NuYXAgPSBhd2FpdCBnZXREb2MoZG9jUmVmKTtcbiAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xuICAgICAgY29uc3QgcGFzc2FnZV90ZXh0ID0gZG9jU25hcC5kYXRhKClbXCJodG1sXCJdO1xuICAgICAgcmV0dXJuIHBhc3NhZ2VfdGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNlYXJjaE5vVXNlciA9IGFzeW5jIChib29rUXVlcnksIGNoYXB0ZXJRdWVyeSkgPT4ge1xuICAgIGNvbnN0IGRvY1JlZiA9IGRvYyhkYiwgYm9va1F1ZXJ5LCBjaGFwdGVyUXVlcnkpO1xuICAgIHZhciBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XG4gICAgaWYgKGRvY1NuYXAuZXhpc3RzKCkpIHtcbiAgICAgIGNvbnN0IHBhc3NhZ2VfdGV4dCA9IGRvY1NuYXAuZGF0YSgpW1wiaHRtbFwiXTtcbiAgICAgIHJldHVybiBwYXNzYWdlX3RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJpYmxlIEFzc2lzdGFudDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgey8qIFNpZ24gaW4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwIGJnLXdoaXRlXCI+XG4gICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zIHotMVwiPlxuICAgICAgICAgICAgICA8QnVyZ2VyTWVudSBjdXJyZW50Qm9vaz17Ym9va30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiByZWY9e3NpZ25PdXRSZWZ9PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbk91dFBvcHVwQ2xpY2t9XG4gICAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyPy5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy0xMCByb3VuZGVkLWZ1bGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTI1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MCBlYXNlLW91dFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpc1NpZ25PdXRPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLWZ1bGwgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctd2hpdGUgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTVcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1jZW50ZXIgcHgtNCBweS0yIHRleHQtc20gdGV4dC1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTUwIGN1cnNvci1wb2ludGVyIGRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIC15LWF1dG9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMyB6LTFcIj5cbiAgICAgICAgICAgICAgPEJ1cmdlck1lbnUgY3VycmVudEJvb2s9e2Jvb2t9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtMzAwIGhvdmVyOmJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25Jbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPFNlYXJjaFxuICAgICAgICAgIGJvb2tJbnB1dD17Ym9va0lucHV0fVxuICAgICAgICAgIGhhbmRsZUJvb2tJbnB1dENoYW5nZT17aGFuZGxlQm9va0lucHV0Q2hhbmdlfVxuICAgICAgICAgIGNoYXB0ZXJJbnB1dD17Y2hhcHRlcklucHV0fVxuICAgICAgICAgIGhhbmRsZUNoYXB0ZXJJbnB1dENoYW5nZT17aGFuZGxlQ2hhcHRlcklucHV0Q2hhbmdlfVxuICAgICAgICAgIHNlYXJjaEZ1bmM9e3NlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJncmlkIHB5LTQgYm9yZGVyLWItMiBwbGFjZS1pdGVtcy1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtYmxhY2tcIj5cbiAgICAgICAge3NlcGFyYXRlTnVtYmVyQW5kQ2FwaXRhbGl6ZShib29rKX0ge2NoYXB0ZXJ9XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMyB4bDpteC0xNlwiPlxuICAgICAgICA8UGFzc2FnZVxuICAgICAgICAgIHBhc3NhZ2VIVE1MPXtwYXNzYWdlSFRNTH1cbiAgICAgICAgICBzZWFyY2hGdW5jPXtzZWFyY2h9XG4gICAgICAgICAgYm9vaz17Ym9va31cbiAgICAgICAgICBjaGFwdGVyPXtjaGFwdGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxDaGF0QnV0dG9uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQ2hhdEJ1dHRvbiIsIlBhc3NhZ2UiLCJTZWFyY2giLCJCdXJnZXJNZW51Iiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJkb2MiLCJnZXREb2MiLCJkYiIsIlNlYXJjaFBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInJvdXRlciIsInF1ZXJ5IiwiYm9vayIsInNldEJvb2siLCJjaGFwdGVyIiwic2V0Q2hhcHRlciIsImJvb2tJbnB1dCIsInNldEJvb2tJbnB1dCIsImNoYXB0ZXJJbnB1dCIsInNldENoYXB0ZXJJbnB1dCIsInBhc3NhZ2VIVE1MIiwic2V0UGFzc2FnZUhUTUwiLCJpc1NpZ25PdXRPcGVuIiwic2V0SXNTaWduT3V0T3BlbiIsInNpZ25PdXRSZWYiLCJzcGxpdFF1ZXJ5IiwidHJpbSIsInNwbGl0IiwicG9wIiwiam9pbiIsInNlYXJjaCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGlja091dHNpZGVTaWduT3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUJvb2tJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYXB0ZXJJbnB1dENoYW5nZSIsImhhbmRsZVNpZ25PdXRQb3B1cENsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJzZXBhcmF0ZU51bWJlckFuZENhcGl0YWxpemUiLCJpbnB1dFN0cmluZyIsInJlZ2V4IiwibWF0Y2giLCJleGVjIiwibnVtYmVyIiwid29yZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImMiLCJ0b1VwcGVyQ2FzZSIsInByZXZlbnREZWZhdWx0IiwiYm9va1F1ZXJ5IiwiY2hhcHRlclF1ZXJ5IiwicGFzc2FnZV90ZXh0Iiwic2VhcmNoTm9Vc2VyIiwib3ZlcnJpZGVfcGFzc2FnZV90ZXh0IiwidXNlciIsInNlYXJjaEV4aXN0aW5nVXNlciIsInB1c2giLCJkb2NSZWYiLCJlbWFpbCIsImRvY1NuYXAiLCJleGlzdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3VycmVudEJvb2siLCJyZWYiLCJpbWciLCJvbkNsaWNrIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJidXR0b24iLCJyb2xlIiwic2VhcmNoRnVuYyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/[query].js\n"));

/***/ })

});