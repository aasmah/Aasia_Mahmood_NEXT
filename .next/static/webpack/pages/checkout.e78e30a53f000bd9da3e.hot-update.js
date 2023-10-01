webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/checkoutForm */ "./components/checkoutForm.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\pages\\checkout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* pages/checkout.js */








function Checkout() {
  _s();

  // get app context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      isAuthenticated = _useContext.isAuthenticated; // isAuthenticated is passed to the cart component to display the order button
  // const isAuthenticated = true;
  // load Stripe to inject into Elements components


  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__["loadStripe"])("pk_test_51NmoQ5JN3tOA8L0SYayhgtrANetTfPAMD7FNysVTGGepkYV2ZXqc2f6BX8lZaEFiGdISCOXpYJXhcx68YkNDom2H00yWtMsa8n");
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      paddingRight: 0
    },
    sm: {
      size: 4,
      order: 1,
      offset: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    style: {
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Checkout"), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isAuthenticated: isAuthenticated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    style: {
      marginLeft: 0
    },
    sm: {
      size: 4,
      order: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))));
}

_s(Checkout, "V63do9pNTv1q4M9O8C9qYlm3TOw=");

_c = Checkout;
/* harmony default export */ __webpack_exports__["default"] = (Checkout);

var _c;

$RefreshReg$(_c, "Checkout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0Iiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0IiwibWFyZ2luIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUNsQjtBQURrQixvQkFFVUMsd0RBQVUsQ0FBQ0MsMkRBQUQsQ0FGcEI7QUFBQSxNQUVWQyxlQUZVLGVBRVZBLGVBRlUsRUFHbEI7QUFDQTtBQUVBOzs7QUFDQSxNQUFNQyxhQUFhLEdBQUdDLG9FQUFVLENBQzlCLDZHQUQ4QixDQUFoQztBQUlBLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBaUMsTUFBRSxFQUFFO0FBQUVDLFVBQUksRUFBRSxDQUFSO0FBQVdDLFdBQUssRUFBRSxDQUFsQjtBQUFxQkMsWUFBTSxFQUFFO0FBQTdCLEtBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLHdEQUFEO0FBQU0sbUJBQWUsRUFBRVAsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVRLGdCQUFVLEVBQUU7QUFBZCxLQUFaO0FBQStCLE1BQUUsRUFBRTtBQUFFSixVQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFLLEVBQUU7QUFBbEIsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVKLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTEYsQ0FERjtBQWFEOztHQXhCUUosUTs7S0FBQUEsUTtBQXlCTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuZTc4ZTMwYTUzZjAwMGJkOWRhM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHBhZ2VzL2NoZWNrb3V0LmpzICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dEZvcm1cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIC8vIGdldCBhcHAgY29udGV4dFxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgLy8gaXNBdXRoZW50aWNhdGVkIGlzIHBhc3NlZCB0byB0aGUgY2FydCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgb3JkZXIgYnV0dG9uXG4gIC8vIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG5cbiAgLy8gbG9hZCBTdHJpcGUgdG8gaW5qZWN0IGludG8gRWxlbWVudHMgY29tcG9uZW50c1xuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcbiAgICBcInBrX3Rlc3RfNTFObW9RNUpOM3RPQThMMFNZYXloZ3RyQU5ldFRmUEFNRDdGTnlzVlRHR2Vwa1lWMlpYcWMyZjZCWDhsWmFFRmlHZElTQ09YcFlKWGhjeDY4WWtORG9tMkgwMHlXdE1zYThuXCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMCB9fSBzbT17eyBzaXplOiA0LCBvcmRlcjogMSwgb2Zmc2V0OiAxIH19PlxuICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkNoZWNrb3V0PC9oMT5cbiAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgc3R5bGU9e3sgbWFyZ2luTGVmdDogMCB9fSBzbT17eyBzaXplOiA0LCBvcmRlcjogMiB9fT5cbiAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=