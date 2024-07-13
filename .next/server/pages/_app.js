(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_namespaceObject.RecoilRoot, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 649:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(872));
module.exports = __webpack_exports__;

})();