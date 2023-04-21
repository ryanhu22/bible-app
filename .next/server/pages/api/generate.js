"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const question = req.body.request || \"\";\n    if (question.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"No input was provided.\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createChatCompletion({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are a helpful assistant, who has wide and deep knowledge of the Christianity Bible, particularly of the English Standard Version\"\n                },\n                {\n                    role: \"user\",\n                    content: question\n                }\n            ]\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].message.content\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\",\n                    result: \"An error occured with API, probably my fault.\"\n                }\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUTtBQUNWO0FBQ0EsTUFBTUMsU0FBUyxJQUFJSCw2Q0FBU0EsQ0FBQ0M7QUFFN0IsNkJBQWUsMENBQWdCRyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN2QyxJQUFJLENBQUNKLGNBQWNDLE1BQU0sRUFBRTtRQUN6QkcsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNuQkMsT0FBTztnQkFDTEMsU0FDRTtZQUNKO1FBQ0Y7UUFDQTtJQUNGLENBQUM7SUFFRCxNQUFNQyxXQUFXTixJQUFJTyxJQUFJLENBQUNDLE9BQU8sSUFBSTtJQUNyQyxJQUFJRixTQUFTRyxJQUFJLEdBQUdDLE1BQU0sS0FBSyxHQUFHO1FBQ2hDVCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNTSxhQUFhLE1BQU1aLE9BQU9hLG9CQUFvQixDQUFDO1lBQ25EQyxPQUFPO1lBQ1BDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07b0JBQ05DLFNBQ0U7Z0JBQ0o7Z0JBQ0E7b0JBQUVELE1BQU07b0JBQVFDLFNBQVNWO2dCQUFTO2FBQ25DO1FBQ0g7UUFDQUwsSUFDR0MsTUFBTSxDQUFDLEtBQ1BDLElBQUksQ0FBQztZQUFFYyxRQUFRTixXQUFXTyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNkLE9BQU8sQ0FBQ1csT0FBTztRQUFDO0lBQy9ELEVBQUUsT0FBT1osT0FBTztRQUNkLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNZ0IsUUFBUSxFQUFFO1lBQ2xCQyxRQUFRakIsS0FBSyxDQUFDQSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFRSxNQUFNZ0IsUUFBUSxDQUFDRixJQUFJO1lBQ3hEakIsSUFBSUMsTUFBTSxDQUFDRSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1nQixRQUFRLENBQUNGLElBQUk7UUFDNUQsT0FBTztZQUNMRyxRQUFRakIsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztvQkFDVFksUUFBUTtnQkFDVjtZQUNGO1FBQ0YsQ0FBQztJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpYmxlLWZyb250ZW5kLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IFwic2stTXV3YkRUbUFSVTd1ZEpka1N1SlhUM0JsYmtGSklySmQ1aGU3ZGd1bXI5VWdYM3hvXCIsXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgcXVlc3Rpb24gPSByZXEuYm9keS5yZXF1ZXN0IHx8IFwiXCI7XG4gIGlmIChxdWVzdGlvbi50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTogXCJObyBpbnB1dCB3YXMgcHJvdmlkZWQuXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDaGF0Q29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgXCJZb3UgYXJlIGEgaGVscGZ1bCBhc3Npc3RhbnQsIHdobyBoYXMgd2lkZSBhbmQgZGVlcCBrbm93bGVkZ2Ugb2YgdGhlIENocmlzdGlhbml0eSBCaWJsZSwgcGFydGljdWxhcmx5IG9mIHRoZSBFbmdsaXNoIFN0YW5kYXJkIFZlcnNpb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogcXVlc3Rpb24gfSxcbiAgICAgIF0sXG4gICAgfSk7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDIwMClcbiAgICAgIC5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gQ29uc2lkZXIgYWRqdXN0aW5nIHRoZSBlcnJvciBoYW5kbGluZyBsb2dpYyBmb3IgeW91ciB1c2UgY2FzZVxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdpdGggT3BlbkFJIEFQSSByZXF1ZXN0OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LlwiLFxuICAgICAgICAgIHJlc3VsdDogXCJBbiBlcnJvciBvY2N1cmVkIHdpdGggQVBJLCBwcm9iYWJseSBteSBmYXVsdC5cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5Iiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsInF1ZXN0aW9uIiwiYm9keSIsInJlcXVlc3QiLCJ0cmltIiwibGVuZ3RoIiwiY29tcGxldGlvbiIsImNyZWF0ZUNoYXRDb21wbGV0aW9uIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJyZXNwb25zZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();