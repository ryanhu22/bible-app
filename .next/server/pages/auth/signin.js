"use strict";
(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ auth_signin),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-icons/hi"
const hi_namespaceObject = require("react-icons/hi");
;// CONCATENATED MODULE: external "react-icons/ri"
const ri_namespaceObject = require("react-icons/ri");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(649);
;// CONCATENATED MODULE: ./pages/auth/signin.js






// Browser
function signin({ providers  }) {
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const handleSubmit = (e)=>{
        e.preventDefault();
    // Your sign-in logic here
    };
    const handleGoogleSignIn = ()=>{
    // Your Google sign-in logic here
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex items-center justify-center bg-gray-50 fixed top-0 left-0 w-screen h-screen m-0 p-0",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-md w-full space-y-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mt-6 text-center text-3xl font-extrabold text-gray-900",
                                children: "Sign in to your account"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "mt-2 text-center text-sm text-gray-600",
                                children: [
                                    "Or",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        className: "font-medium text-indigo-600 hover:text-indigo-500",
                                        children: "create an account"
                                    })
                                ]
                            })
                        ]
                    }),
                    Object.values(providers).map((provider)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                    onClick: ()=>(0,react_.signIn)(provider.id, {
                                            callbackUrl: "/"
                                        }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z",
                                                fillRule: "evenodd",
                                                clipRule: "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                "Sign in with ",
                                                provider.name
                                            ]
                                        })
                                    ]
                                })
                            })
                        }, provider.name)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        className: "mt-8 space-y-6",
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rounded-md shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "email-address",
                                                className: "sr-only",
                                                children: "Email address"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative rounded-md shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(hi_namespaceObject.HiOutlineMail, {
                                                            className: "h-5 w-5 text-gray-400",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "email-address",
                                                        name: "email",
                                                        type: "email",
                                                        autoComplete: "email",
                                                        required: true,
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md",
                                                        placeholder: "Email address"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "password",
                                                className: "sr-only",
                                                children: "Password"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "relative rounded-md shadow-sm",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ri_namespaceObject.RiLockPasswordFill, {
                                                            className: "h-5 w-5 text-gray-400",
                                                            "aria-hidden": "true"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        id: "password",
                                                        name: "password",
                                                        type: "password",
                                                        autoComplete: "current-password",
                                                        required: true,
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md",
                                                        placeholder: "Password"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            id: "remember-me",
                                            name: "remember-me",
                                            type: "checkbox",
                                            className: "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: " ml-2 text-center text-sm text-gray-600",
                                            children: "Remember me"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
//Server (server-side render)
async function getServerSideProps() {
    const providers = await (0,react_.getProviders)();
    return {
        props: {
            providers
        }
    };
}
/* harmony default export */ const auth_signin = (signin);


/***/ }),

/***/ 649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(341));
module.exports = __webpack_exports__;

})();