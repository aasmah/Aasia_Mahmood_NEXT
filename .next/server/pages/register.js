module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth.js":
/*!****************************!*\
  !*** ./components/auth.js ***!
  \****************************/
/*! exports provided: registerUser, login, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\auth.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* /lib/auth.js */




const API_URL = "https://urchin-app-hi2hs.ondigitalocean.app"; // const API_URL =  process.env.NEXT_PUBLIC_API_URL || "https://urchin-app-hi2hs.ondigitalocean.app";//
//register a new user

const registerUser = (username, email, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/register`, {
      username,
      email,
      password
    }).then(res => {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("username", username); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const login = (identifier, password) => {
  //prevent function from being ran on the server
  if (true) {
    return;
  }

  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${API_URL}/auth/local/`, {
      identifier,
      password
    }).then(res => {
      //set token response from Strapi for server validation
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", res.data.jwt);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("username", identifier); //resolve the promise to set loading to false in SignUp form

      resolve(res); //redirect back to home page for restaurance selection

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
    }).catch(error => {
      //reject the promise and pass the error object back to the form
      reject(error);
    });
  });
};
const logout = () => {
  //remove token and user cookie
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("token");
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove("username");
  delete window.__user; // sync logout between multiple windows

  window.localStorage.setItem("logout", Date.now()); //redirect to the home page

  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");
}; //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
// THIS IS NOT USED in the tutorial, only provided if you wanted to implement

const withAuthSync = Component => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === "logout") {
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/login");
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);
    return __jsx(Component, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 12
      }
    }));
  };

  if (Component.getInitialProps) {
    Wrapper.getInitialProps = Component.getInitialProps;
  }

  return Wrapper;
};

/***/ }),

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* /context/AppContext.js */

const AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: true,
  cart: {
    items: [],
    total: 0
  },
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  // Add this function to clear the cart
  user: false,
  setUser: () => {}
});
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/auth */ "./components/auth.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\pages\\register.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Register = () => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: "",
    username: "",
    password: ""
  });
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const appContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_4__["default"]);
  return __jsx("div", {
    id: "background",
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: {
      size: 5,
      offset: 3
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2728427278" + " " + "paper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-2728427278" + " " + "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "https://urchin-app-hi2hs.ondigitalocean.app/uploads/e98c2d51d2b24d08a390bd71822f86f3.jpg",
    width: 90,
    height: 90,
    alt: "Logo",
    className: "jsx-2728427278" + " " + "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }), __jsx("h2", {
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "Register")), __jsx("section", {
    className: "jsx-2728427278" + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, Object.entries(error).length !== 0 && error.constructor === Object && error.message.map(error => {
    return __jsx("div", {
      key: error.messages[0].id,
      style: {
        marginBottom: 10
      },
      className: "jsx-2728427278",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("small", {
      style: {
        color: "red"
      },
      className: "jsx-2728427278",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 23
      }
    }, error.messages[0].message));
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx("fieldset", {
    disabled: loading,
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, "Username:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    disabled: loading,
    onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
      username: e.target.value
    })),
    value: data.username,
    type: "text",
    name: "username",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Email:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
      email: e.target.value
    })),
    value: data.email,
    type: "email",
    name: "email",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    style: {
      marginBottom: 30
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, "Password:"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: e => setData(_objectSpread(_objectSpread({}, data), {}, {
      password: e.target.value
    })),
    value: data.password,
    type: "password",
    name: "password",
    style: {
      height: 50,
      fontSize: "1.2em"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 23
    }
  }, __jsx("small", {
    className: "jsx-2728427278",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "Forgot Password?"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      float: "right",
      width: 120
    },
    color: "dark grey",
    disabled: loading,
    onClick: () => {
      setLoading(true);
      Object(_components_auth__WEBPACK_IMPORTED_MODULE_3__["registerUser"])(data.username, data.email, data.password).then(res => {
        appContext.setUser(res.data.user);
        setLoading(false);
        console.log(`registered user: ${JSON.stringify(res.data)}`);
      }).catch(error => {
        console.log(`error in register: ${error}`);
        setLoading(false);
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, loading ? "Loading.." : "Submit"))))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2728427278",
    __self: undefined
  }, "#background.jsx-2728427278{background-image:url(\"https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg\");background-size:cover;background-repeat:no-repeat;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px;}.paper.jsx-2728427278{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);border-radius:6px 6px 0 0;margin-top:90px;background-color:#f8f8f8;}.notification.jsx-2728427278{color:#ab003c;}.header.jsx-2728427278{width:100%;height:120px;background-color:grey;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;border-top-left-radius:6px;border-top-right-radius:6px;}h2.jsx-2728427278{color:white;}.wrapper.jsx-2728427278{padding:20px;}a.jsx-2728427278{color:blue !important;}.logo.jsx-2728427278{margin:15px 10px 10px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xccmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdTLEFBSWtJLEFBVTFGLEFBU2IsQUFHSCxBQVdDLEFBR0MsQUFHUyxBQUdLLFdBbkJkLENBV2YsQ0FHQSxDQWpCQSxRQW9CQSxFQWhCd0IsR0FYZ0IsQUE4QnhDLG1CQWxCZSxtRUF4QmEsT0F5QlAsZUF4QmEsSUFZTix3QkFYTCxFQVlMLGVBWEMsQ0FZUSx5QkFDM0IsT0FVZ0MseUNBdEJILDBFQXVCWixlQUNZLFVBdkJKLGlCQXdCSyw0QkFDOUIsZ0RBeEJtQixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xccmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2U5OGMyZDUxZDJiMjRkMDhhMzkwYmQ3MTgyMmY4NmYzLmpwZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezkwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17OTB9XG4gICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlVzZXJuYW1lOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YSh7IC4uLmRhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGEoeyAuLi5kYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRhKHsgLi4uZGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogMTIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrIGdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclVzZXIoZGF0YS51c2VybmFtZSwgZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJlZCB1c2VyOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBpbiByZWdpc3RlcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi5cIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcblxuICAgICAgICAgICAgICAgI2JhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDsgLyogUm91bmRlZCB0b3AgY29ybmVycyAqL1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IC8qIEJlaWdlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDEwcHggMTBweCAxMHB4OyAvKiBBZGp1c3RlZCBtYXJnaW4gKi9cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\register.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkFQSV9VUkwiLCJyZWdpc3RlclVzZXIiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJDb29raWUiLCJzZXQiLCJkYXRhIiwiand0IiwiUm91dGVyIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJsb2dpbiIsImlkZW50aWZpZXIiLCJsb2dvdXQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJfX3VzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIkNvbXBvbmVudCIsIldyYXBwZXIiLCJwcm9wcyIsInN5bmNMb2dvdXQiLCJldmVudCIsImtleSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlSXRlbSIsImdldEluaXRpYWxQcm9wcyIsIkFwcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsImFkZEl0ZW0iLCJjbGVhckNhcnQiLCJ1c2VyIiwic2V0VXNlciIsIlJlZ2lzdGVyIiwic2V0RGF0YSIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0Iiwic2l6ZSIsIm9mZnNldCIsIk9iamVjdCIsImVudHJpZXMiLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsIm1lc3NhZ2UiLCJtYXAiLCJtZXNzYWdlcyIsImlkIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWlnaHQiLCJmb250U2l6ZSIsImZsb2F0Iiwid2lkdGgiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFQTtBQUNBO0FB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QURGLENBREE7QUFBQTtBQUFBO0FBQUEsbStUQURGO0FBbUpELENBekpEOztBQTJKZUgsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUNoS0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuIiwiLyogL2xpYi9hdXRoLmpzICovXHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHBcIjtcclxuLy8gY29uc3QgQVBJX1VSTCA9ICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiOy8vXHJcblxyXG4vL3JlZ2lzdGVyIGEgbmV3IHVzZXJcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9ICh1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoYCR7QVBJX1VSTH0vYXV0aC9sb2NhbC9yZWdpc3RlcmAsIHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXHJcbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XHJcbiAgICAgICAgQ29va2llLnNldChcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuXHJcbiAgICAgICAgLy9yZXNvbHZlIHRoZSBwcm9taXNlIHRvIHNldCBsb2FkaW5nIHRvIGZhbHNlIGluIFNpZ25VcCBmb3JtXHJcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIC8vcmVkaXJlY3QgYmFjayB0byBob21lIHBhZ2UgZm9yIHJlc3RhdXJhbmNlIHNlbGVjdGlvblxyXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vcmVqZWN0IHRoZSBwcm9taXNlIGFuZCBwYXNzIHRoZSBlcnJvciBvYmplY3QgYmFjayB0byB0aGUgZm9ybVxyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGlkZW50aWZpZXIsIHBhc3N3b3JkKSA9PiB7XHJcbiAgLy9wcmV2ZW50IGZ1bmN0aW9uIGZyb20gYmVpbmcgcmFuIG9uIHRoZSBzZXJ2ZXJcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KGAke0FQSV9VUkx9L2F1dGgvbG9jYWwvYCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy9zZXQgdG9rZW4gcmVzcG9uc2UgZnJvbSBTdHJhcGkgZm9yIHNlcnZlciB2YWxpZGF0aW9uXHJcbiAgICAgICAgQ29va2llLnNldChcInRva2VuXCIsIHJlcy5kYXRhLmp3dCk7XHJcbiAgICAgICAgQ29va2llLnNldChcInVzZXJuYW1lXCIsIGlkZW50aWZpZXIpO1xyXG5cclxuICAgICAgICAvL3Jlc29sdmUgdGhlIHByb21pc2UgdG8gc2V0IGxvYWRpbmcgdG8gZmFsc2UgaW4gU2lnblVwIGZvcm1cclxuICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgLy9yZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFuY2Ugc2VsZWN0aW9uXHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy9yZWplY3QgdGhlIHByb21pc2UgYW5kIHBhc3MgdGhlIGVycm9yIG9iamVjdCBiYWNrIHRvIHRoZSBmb3JtXHJcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gIC8vcmVtb3ZlIHRva2VuIGFuZCB1c2VyIGNvb2tpZVxyXG4gIENvb2tpZS5yZW1vdmUoXCJ0b2tlblwiKTtcclxuICBDb29raWUucmVtb3ZlKFwidXNlcm5hbWVcIik7XHJcbiAgZGVsZXRlIHdpbmRvdy5fX3VzZXI7XHJcbiAgLy8gc3luYyBsb2dvdXQgYmV0d2VlbiBtdWx0aXBsZSB3aW5kb3dzXHJcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9nb3V0XCIsIERhdGUubm93KCkpO1xyXG4gIC8vcmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuXHJcbi8vSGlnaGVyIE9yZGVyIENvbXBvbmVudCB0byB3cmFwIG91ciBwYWdlcyBhbmQgbG9nb3V0IHNpbXVsdGFuZW91c2x5IGxvZ2dlZCBpbiB0YWJzXHJcbi8vIFRISVMgSVMgTk9UIFVTRUQgaW4gdGhlIHR1dG9yaWFsLCBvbmx5IHByb3ZpZGVkIGlmIHlvdSB3YW50ZWQgdG8gaW1wbGVtZW50XHJcbmV4cG9ydCBjb25zdCB3aXRoQXV0aFN5bmMgPSAoQ29tcG9uZW50KSA9PiB7XHJcbiAgY29uc3QgV3JhcHBlciA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgc3luY0xvZ291dCA9IChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcImxvZ291dFwiKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzdG9yYWdlXCIsIHN5bmNMb2dvdXQpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInN0b3JhZ2VcIiwgc3luY0xvZ291dCk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nb3V0XCIpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcbiAgfTtcclxuXHJcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcclxuICB9XHJcblxyXG4gIHJldHVybiBXcmFwcGVyO1xyXG59O1xyXG5cclxuIiwiLyogL2NvbnRleHQvQXBwQ29udGV4dC5qcyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxuICBjYXJ0OiB7IGl0ZW1zOiBbXSwgdG90YWw6IDAgfSxcbiAgYWRkSXRlbTogKCkgPT4ge30sXG4gIHJlbW92ZUl0ZW06ICgpID0+IHt9LFxuICBjbGVhckNhcnQ6ICgpID0+IHt9LCAvLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBjbGVhciB0aGUgY2FydFxuICB1c2VyOiBmYWxzZSxcbiAgc2V0VXNlcjogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEJ1dHRvbiwgRm9ybSwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXJVc2VyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvYXV0aFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7IHNpemU6IDUsIG9mZnNldDogMyB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2U5OGMyZDUxZDJiMjRkMDhhMzkwYmQ3MTgyMmY4NmYzLmpwZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9ezkwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17OTB9XG4gICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxoMj5SZWdpc3RlcjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKGVycm9yKS5sZW5ndGggIT09IDAgJiZcbiAgICAgICAgICAgICAgICBlcnJvci5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICYmXG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5tYXAoKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZXJyb3IubWVzc2FnZXNbMF0uaWR9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yLm1lc3NhZ2VzWzBdLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsPlVzZXJuYW1lOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF0YSh7IC4uLmRhdGEsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF0YS51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERhdGEoeyAuLi5kYXRhLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXRhKHsgLi4uZGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogMTIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJkYXJrIGdyZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdpc3RlclVzZXIoZGF0YS51c2VybmFtZSwgZGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcENvbnRleHQuc2V0VXNlcihyZXMuZGF0YS51c2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcmVnaXN0ZXJlZCB1c2VyOiAke0pTT04uc3RyaW5naWZ5KHJlcy5kYXRhKX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBpbiByZWdpc3RlcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJMb2FkaW5nLi5cIiA6IFwiU3VibWl0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcblxuICAgICAgICAgICAgICAgI2JhY2tncm91bmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDsgLyogUm91bmRlZCB0b3AgY29ybmVycyAqL1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IC8qIEJlaWdlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDEwcHggMTBweCAxMHB4OyAvKiBBZGp1c3RlZCBtYXJnaW4gKi9cbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=