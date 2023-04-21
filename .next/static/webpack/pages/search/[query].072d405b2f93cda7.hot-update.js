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

/***/ "./components/ChatWindow.js":
/*!**********************************!*\
  !*** ./components/ChatWindow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ChatOther__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatOther */ \"./components/ChatOther.js\");\n/* harmony import */ var _ChatMe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatMe */ \"./components/ChatMe.js\");\n/* harmony import */ var _ChatWaiting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChatWaiting */ \"./components/ChatWaiting.js\");\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_type_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-type-animation */ \"./node_modules/react-type-animation/dist/esm/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ChatWindow() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            from: \"me\",\n            text: \"Hello, it's me\"\n        },\n        {\n            from: \"them\",\n            text: \"Hello, it's a computer\"\n        }\n    ]);\n    const [userInput, setUserInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [responseWaiting, setResponseWaiting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleUserInputChange = (e)=>{\n        const newUserInput = e.target.value;\n        setUserInput(newUserInput);\n    };\n    // API call to ChatGPT\n    async function gpt_api(e, request) {\n        e.preventDefault();\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    request: request\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            return data.result;\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    const addMessage = (newMessage)=>{\n        setMessages((oldMessages)=>{\n            return [\n                ...oldMessages,\n                newMessage\n            ];\n        });\n    };\n    const sendMessage = async (e)=>{\n        e.preventDefault();\n        const userInputCopy = userInput;\n        const newMessage = {\n            from: \"me\",\n            text: userInput\n        };\n        setUserInput(\"\");\n        inputRef.current.value = \"\";\n        addMessage(newMessage);\n        setResponseWaiting(true);\n        // await ChatGPT response\n        const response = await gpt_api(e, userInputCopy);\n        setResponseWaiting(false);\n        // Comment this for a real message\n        var responseMessage = \"\";\n        responseMessage = {\n            from: \"other\",\n            text: response\n        };\n        // Comment this for a fake message\n        await sleep(1500);\n        responseMessage = {\n            from: \"other\",\n            text: \"I'm a mock response\"\n        };\n        addMessage(responseMessage);\n        setResponseWaiting(false);\n    };\n    const scrollToBottom = ()=>{\n        messagesEndRef.current?.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    function sleep(ms) {\n        return new Promise((resolve)=>setTimeout(resolve, ms));\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col flex-grow h-0 p-4 overflow-auto bg-gray-50 scrollbar scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300\",\n                children: [\n                    messages.map((message)=>{\n                        if (message.from === \"me\") {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatMe__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                message: message.text\n                            }, message.id, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                                lineNumber: 110,\n                                columnNumber: 20\n                            }, this);\n                        } else {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatOther__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                message: message.text\n                            }, message.id, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                                lineNumber: 112,\n                                columnNumber: 20\n                            }, this);\n                        }\n                    }),\n                    responseWaiting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatWaiting__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                        lineNumber: 115,\n                        columnNumber: 28\n                    }, this) : null,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4 border-t-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Example: Who is Jesus?\",\n                            className: \"border-none flex-1 focus:ring-0 outline-none text-s\",\n                            onChange: (e)=>handleUserInputChange(e),\n                            ref: inputRef\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"font-semibold text-blue-400\",\n                            onClick: (e)=>sendMessage(e),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__.PaperAirplaneIcon, {\n                                className: \"h-8 text-gray-700 -rotate-45 hover:text-gray-400\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                                lineNumber: 132,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryanhu/Desktop/bible/bible-frontend/components/ChatWindow.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatWindow, \"eNvucFVfm2dIGFCZbuUTN6WgGzo=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = ChatWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatWindow);\nvar _c;\n$RefreshReg$(_c, \"ChatWindow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYXRXaW5kb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBb0Q7QUFDaEI7QUFDTjtBQUNVO0FBQ3dCO0FBQ25CO0FBQ0M7QUFFOUMsU0FBU1MsYUFBYTs7SUFDcEIsTUFBTSxFQUFFQyxNQUFNQyxRQUFPLEVBQUUsR0FBR0osMkRBQVVBO0lBQ3BDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHYiwrQ0FBUUEsQ0FBQztRQUN2QztZQUFFYyxNQUFNO1lBQU1DLE1BQU07UUFBaUI7UUFDckM7WUFBRUQsTUFBTTtZQUFRQyxNQUFNO1FBQXlCO0tBQ2hEO0lBQ0QsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNa0IsV0FBV2hCLDZDQUFNQTtJQUN2QixNQUFNaUIsaUJBQWlCakIsNkNBQU1BLENBQUMsSUFBSTtJQUNsQyxNQUFNLENBQUNrQixpQkFBaUJDLG1CQUFtQixHQUFHckIsK0NBQVFBLENBQUMsS0FBSztJQUU1RCxNQUFNc0Isd0JBQXdCLENBQUNDLElBQU07UUFDbkMsTUFBTUMsZUFBZUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQ25DVCxhQUFhTztJQUNmO0lBRUEsc0JBQXNCO0lBQ3RCLGVBQWVHLFFBQVFKLENBQUMsRUFBRUssT0FBTyxFQUFFO1FBQ2pDTCxFQUFFTSxjQUFjO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO2dCQUM1Q0MsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVSLFNBQVNBO2dCQUFRO1lBQzFDO1lBRUEsTUFBTWxCLE9BQU8sTUFBTW9CLFNBQVNPLElBQUk7WUFDaEMsSUFBSVAsU0FBU1EsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLE1BQ0U1QixLQUFLNkIsS0FBSyxJQUNWLElBQUlDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRVYsU0FBU1EsTUFBTSxDQUFDLENBQUMsRUFDekQ7WUFDSixDQUFDO1lBQ0QsT0FBTzVCLEtBQUsrQixNQUFNO1FBQ3BCLEVBQUUsT0FBT0YsT0FBTztZQUNkLDJEQUEyRDtZQUMzREcsUUFBUUgsS0FBSyxDQUFDQTtZQUNkSSxNQUFNSixNQUFNSyxPQUFPO1FBQ3JCO0lBQ0Y7SUFFQSxNQUFNQyxhQUFhLENBQUNDLGFBQWU7UUFDakNqQyxZQUFZLENBQUNrQyxjQUFnQjtZQUMzQixPQUFPO21CQUFJQTtnQkFBYUQ7YUFBVztRQUNyQztJQUNGO0lBRUEsTUFBTUUsY0FBYyxPQUFPekIsSUFBTTtRQUMvQkEsRUFBRU0sY0FBYztRQUNoQixNQUFNb0IsZ0JBQWdCakM7UUFDdEIsTUFBTThCLGFBQWE7WUFDakJoQyxNQUFNO1lBQ05DLE1BQU1DO1FBQ1I7UUFDQUMsYUFBYTtRQUNiQyxTQUFTZ0MsT0FBTyxDQUFDeEIsS0FBSyxHQUFHO1FBQ3pCbUIsV0FBV0M7UUFDWHpCLG1CQUFtQixJQUFJO1FBRXZCLHlCQUF5QjtRQUN6QixNQUFNUyxXQUFXLE1BQU1ILFFBQVFKLEdBQUcwQjtRQUNsQzVCLG1CQUFtQixLQUFLO1FBRXhCLGtDQUFrQztRQUNsQyxJQUFJOEIsa0JBQWtCO1FBR3RCQSxrQkFBa0I7WUFDaEJyQyxNQUFNO1lBQ05DLE1BQU1lO1FBQ1I7UUFFQSxrQ0FBa0M7UUFDbEMsTUFBTXNCLE1BQU07UUFDWkQsa0JBQWtCO1lBQ2hCckMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFFQThCLFdBQVdNO1FBQ1g5QixtQkFBbUIsS0FBSztJQUMxQjtJQUNBLE1BQU1nQyxpQkFBaUIsSUFBTTtRQUMzQmxDLGVBQWUrQixPQUFPLEVBQUVJLGVBQWU7WUFBRUMsVUFBVTtRQUFTO0lBQzlEO0lBRUEsU0FBU0gsTUFBTUksRUFBRSxFQUFFO1FBQ2pCLE9BQU8sSUFBSUMsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTRjtJQUN0RDtJQUVBdkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkb0Q7SUFDRixHQUFHO1FBQUN6QztLQUFTO0lBRWIscUJBQ0UsOERBQUNnRDtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNaakQsU0FBU2tELEdBQUcsQ0FBQyxDQUFDbEIsVUFBWTt3QkFDekIsSUFBSUEsUUFBUTlCLElBQUksS0FBSyxNQUFNOzRCQUN6QixxQkFBTyw4REFBQ1YsK0NBQU1BO2dDQUFrQndDLFNBQVNBLFFBQVE3QixJQUFJOytCQUFqQzZCLFFBQVFtQixFQUFFOzs7Ozt3QkFDaEMsT0FBTzs0QkFDTCxxQkFBTyw4REFBQzVELGtEQUFTQTtnQ0FBa0J5QyxTQUFTQSxRQUFRN0IsSUFBSTsrQkFBakM2QixRQUFRbUIsRUFBRTs7Ozs7d0JBQ25DLENBQUM7b0JBQ0g7b0JBQ0MzQyxnQ0FBa0IsOERBQUNmLG9EQUFXQTs7OzsrQkFBTSxJQUFJO2tDQUN6Qyw4REFBQ3VEO3dCQUFJSSxLQUFLN0M7Ozs7Ozs7Ozs7OzswQkFFWiw4REFBQ3lDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSTtvQkFBS0osV0FBVTs7c0NBQ2QsOERBQUNLOzRCQUNDQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaUCxXQUFVOzRCQUNWUSxVQUFVLENBQUM5QyxJQUFNRCxzQkFBc0JDOzRCQUN2Q3lDLEtBQUs5Qzs7Ozs7O3NDQUVQLDhEQUFDb0Q7NEJBQ0NILE1BQUs7NEJBQ0xOLFdBQVU7NEJBQ1ZVLFNBQVMsQ0FBQ2hELElBQU15QixZQUFZekI7c0NBRTVCLDRFQUFDakIsMEVBQWlCQTtnQ0FBQ3VELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0FqSVNwRDs7UUFDbUJGLHVEQUFVQTs7O0tBRDdCRTtBQW1JVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYXRXaW5kb3cuanM/MDZlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaGF0T3RoZXIgZnJvbSBcIi4vQ2hhdE90aGVyXCI7XG5pbXBvcnQgQ2hhdE1lIGZyb20gXCIuL0NoYXRNZVwiO1xuaW1wb3J0IENoYXRXYWl0aW5nIGZyb20gXCIuL0NoYXRXYWl0aW5nXCI7XG5pbXBvcnQgeyBQYXBlckFpcnBsYW5lSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBUeXBpbmcgfSBmcm9tIFwicmVhY3QtdHlwZS1hbmltYXRpb25cIjtcblxuZnVuY3Rpb24gQ2hhdFdpbmRvdygpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgIHsgZnJvbTogXCJtZVwiLCB0ZXh0OiBcIkhlbGxvLCBpdCdzIG1lXCIgfSxcbiAgICB7IGZyb206IFwidGhlbVwiLCB0ZXh0OiBcIkhlbGxvLCBpdCdzIGEgY29tcHV0ZXJcIiB9LFxuICBdKTtcbiAgY29uc3QgW3VzZXJJbnB1dCwgc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW3Jlc3BvbnNlV2FpdGluZywgc2V0UmVzcG9uc2VXYWl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVVc2VySW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld1VzZXJJbnB1dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFVzZXJJbnB1dChuZXdVc2VySW5wdXQpO1xuICB9O1xuXG4gIC8vIEFQSSBjYWxsIHRvIENoYXRHUFRcbiAgYXN5bmMgZnVuY3Rpb24gZ3B0X2FwaShlLCByZXF1ZXN0KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyByZXF1ZXN0OiByZXF1ZXN0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgdGhyb3cgKFxuICAgICAgICAgIGRhdGEuZXJyb3IgfHxcbiAgICAgICAgICBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIENvbnNpZGVyIGltcGxlbWVudGluZyB5b3VyIG93biBlcnJvciBoYW5kbGluZyBsb2dpYyBoZXJlXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAobmV3TWVzc2FnZSkgPT4ge1xuICAgIHNldE1lc3NhZ2VzKChvbGRNZXNzYWdlcykgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5vbGRNZXNzYWdlcywgbmV3TWVzc2FnZV07XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1c2VySW5wdXRDb3B5ID0gdXNlcklucHV0O1xuICAgIGNvbnN0IG5ld01lc3NhZ2UgPSB7XG4gICAgICBmcm9tOiBcIm1lXCIsXG4gICAgICB0ZXh0OiB1c2VySW5wdXQsXG4gICAgfTtcbiAgICBzZXRVc2VySW5wdXQoXCJcIik7XG4gICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkTWVzc2FnZShuZXdNZXNzYWdlKTtcbiAgICBzZXRSZXNwb25zZVdhaXRpbmcodHJ1ZSk7XG5cbiAgICAvLyBhd2FpdCBDaGF0R1BUIHJlc3BvbnNlXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBncHRfYXBpKGUsIHVzZXJJbnB1dENvcHkpO1xuICAgIHNldFJlc3BvbnNlV2FpdGluZyhmYWxzZSk7XG5cbiAgICAvLyBDb21tZW50IHRoaXMgZm9yIGEgcmVhbCBtZXNzYWdlXG4gICAgdmFyIHJlc3BvbnNlTWVzc2FnZSA9IFwiXCI7XG5cbiAgICBcbiAgICByZXNwb25zZU1lc3NhZ2UgPSB7XG4gICAgICBmcm9tOiBcIm90aGVyXCIsXG4gICAgICB0ZXh0OiByZXNwb25zZSxcbiAgICB9O1xuXG4gICAgLy8gQ29tbWVudCB0aGlzIGZvciBhIGZha2UgbWVzc2FnZVxuICAgIGF3YWl0IHNsZWVwKDE1MDApO1xuICAgIHJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIGZyb206IFwib3RoZXJcIixcbiAgICAgIHRleHQ6IFwiSSdtIGEgbW9jayByZXNwb25zZVwiLFxuICAgIH07XG5cbiAgICBhZGRNZXNzYWdlKHJlc3BvbnNlTWVzc2FnZSk7XG4gICAgc2V0UmVzcG9uc2VXYWl0aW5nKGZhbHNlKTtcbiAgfTtcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBzbGVlcChtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzY3JvbGxUb0JvdHRvbSgpO1xuICB9LCBbbWVzc2FnZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBmbGV4LWdyb3cgdy1mdWxsIGJnLXdoaXRlIHNoYWRvdy14bCByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGZsZXgtZ3JvdyBoLTAgcC00IG92ZXJmbG93LWF1dG8gYmctZ3JheS01MCBzY3JvbGxiYXIgc2Nyb2xsYmFyLXRoaW4gc2Nyb2xsYmFyLXRodW1iLWdyYXktNTAwIHNjcm9sbGJhci10cmFjay1ncmF5LTMwMFwiPlxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuZnJvbSA9PT0gXCJtZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gPENoYXRNZSBrZXk9e21lc3NhZ2UuaWR9IG1lc3NhZ2U9e21lc3NhZ2UudGV4dH0gLz47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8Q2hhdE90aGVyIGtleT17bWVzc2FnZS5pZH0gbWVzc2FnZT17bWVzc2FnZS50ZXh0fSAvPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuICAgICAgICB7cmVzcG9uc2VXYWl0aW5nID8gPENoYXRXYWl0aW5nIC8+IDogbnVsbH1cbiAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBib3JkZXItdC0yXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4YW1wbGU6IFdobyBpcyBKZXN1cz9cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLW5vbmUgZmxleC0xIGZvY3VzOnJpbmctMCBvdXRsaW5lLW5vbmUgdGV4dC1zXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVXNlcklucHV0Q2hhbmdlKGUpfVxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWJsdWUtNDAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZW5kTWVzc2FnZShlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGFwZXJBaXJwbGFuZUljb24gY2xhc3NOYW1lPVwiaC04IHRleHQtZ3JheS03MDAgLXJvdGF0ZS00NSBob3Zlcjp0ZXh0LWdyYXktNDAwXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRXaW5kb3c7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDaGF0T3RoZXIiLCJDaGF0TWUiLCJDaGF0V2FpdGluZyIsIlBhcGVyQWlycGxhbmVJY29uIiwidXNlU2Vzc2lvbiIsIlR5cGluZyIsIkNoYXRXaW5kb3ciLCJkYXRhIiwic2Vzc2lvbiIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJmcm9tIiwidGV4dCIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImlucHV0UmVmIiwibWVzc2FnZXNFbmRSZWYiLCJyZXNwb25zZVdhaXRpbmciLCJzZXRSZXNwb25zZVdhaXRpbmciLCJoYW5kbGVVc2VySW5wdXRDaGFuZ2UiLCJlIiwibmV3VXNlcklucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJncHRfYXBpIiwicmVxdWVzdCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwicmVzdWx0IiwiY29uc29sZSIsImFsZXJ0IiwibWVzc2FnZSIsImFkZE1lc3NhZ2UiLCJuZXdNZXNzYWdlIiwib2xkTWVzc2FnZXMiLCJzZW5kTWVzc2FnZSIsInVzZXJJbnB1dENvcHkiLCJjdXJyZW50IiwicmVzcG9uc2VNZXNzYWdlIiwic2xlZXAiLCJzY3JvbGxUb0JvdHRvbSIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImlkIiwicmVmIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ChatWindow.js\n"));

/***/ })

});