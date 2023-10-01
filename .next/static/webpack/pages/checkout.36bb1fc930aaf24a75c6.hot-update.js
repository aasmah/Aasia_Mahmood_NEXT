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
      margin: 10
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
      paddingLeft: 0
    },
    sm: {
      size: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0Iiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0IiwibWFyZ2luIiwicGFkZGluZ0xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEI7QUFEa0Isb0JBRVVDLHdEQUFVLENBQUNDLDJEQUFELENBRnBCO0FBQUEsTUFFVkMsZUFGVSxlQUVWQSxlQUZVLEVBR2xCO0FBQ0E7QUFFQTs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHQyxvRUFBVSxDQUM5Qiw2R0FEOEIsQ0FBaEM7QUFJQSxTQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQUFaO0FBQWlDLE1BQUUsRUFBRTtBQUFFQyxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFLLEVBQUUsQ0FBbEI7QUFBcUJDLFlBQU0sRUFBRTtBQUE3QixLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLG1CQUFlLEVBQUVQLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFUSxpQkFBVyxFQUFFO0FBQWYsS0FBWjtBQUFnQyxNQUFFLEVBQUU7QUFBRUosVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFO0FBQWxCLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFSixhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUxGLENBREY7QUFhRDs7R0F4QlFKLFE7O0tBQUFBLFE7QUF5Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjM2YmIxZmM5MzBhYWYyNGE3NWM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBwYWdlcy9jaGVja291dC5qcyAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tvdXRGb3JtXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0XCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAvLyBnZXQgYXBwIGNvbnRleHRcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIC8vIGlzQXV0aGVudGljYXRlZCBpcyBwYXNzZWQgdG8gdGhlIGNhcnQgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG9yZGVyIGJ1dHRvblxuICAvLyBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXG4gIC8vIGxvYWQgU3RyaXBlIHRvIGluamVjdCBpbnRvIEVsZW1lbnRzIGNvbXBvbmVudHNcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgXCJwa190ZXN0XzUxTm1vUTVKTjN0T0E4TDBTWWF5aGd0ckFOZXRUZlBBTUQ3Rk55c1ZUR0dlcGtZVjJaWHFjMmY2Qlg4bFphRUZpR2RJU0NPWHBZSlhoY3g2OFlrTkRvbTJIMDB5V3RNc2E4blwiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDAgfX0gc209e3sgc2l6ZTogNCwgb3JkZXI6IDEsIG9mZnNldDogMSB9fT5cbiAgICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICA8Q2FydCBpc0F1dGhlbnRpY2F0ZWQ9e2lzQXV0aGVudGljYXRlZH0gLz5cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nTGVmdDogMCB9fSBzbT17eyBzaXplOiA1LCBvcmRlcjogMiB9fT5cbiAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgPENoZWNrb3V0Rm9ybSAvPlxuICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=