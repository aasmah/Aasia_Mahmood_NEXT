webpackHotUpdate_N_E("pages/checkout",{

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/checkoutForm */ "./components/checkoutForm.js");
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\pages\\checkout.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Checkout() {
  _s();

  // get app context
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      isAuthenticated = _useContext.isAuthenticated; // isAuthenticated is passed to the cart component to display the order button
  // const isAuthenticated = true;
  // load Stripe to inject into Elements components


  var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__["loadStripe"])("pk_test_51NmoQ5JN3tOA8L0SYayhgtrANetTfPAMD7FNysVTGGepkYV2ZXqc2f6BX8lZaEFiGdISCOXpYJXhcx68YkNDom2H00yWtMsa8n");
  return __jsx("div", {
    className: "jsx-1246121759" + " " + "checkout-background",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      paddingRight: 0
    },
    sm: {
      size: 6,
      order: 1,
      offset: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1246121759" + " " + "checkout-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("h1", {
    style: {
      margin: 0,
      color: "white",
      textAlign: "left",
      fontWeight: "bold"
    },
    className: "jsx-1246121759",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Checkout")), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isAuthenticated: isAuthenticated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    style: {
      margin: 0
    },
    md: {
      size: 6,
      order: 2
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1246121759",
    __self: this
  }, ".checkout-heading.jsx-1246121759{background-color:grey;height:10px padding:10px;margin-top:10px;background-size:cover;background-repeat:no-repeat;min-height:100vh;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcY2hlY2tvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUdpQyxzQkFFVCx5QkFDRyxnQkFVTSxzQkFDTSw0QkFDWCxpQkFDSixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tvdXRGb3JtXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0XCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAvLyBnZXQgYXBwIGNvbnRleHRcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIC8vIGlzQXV0aGVudGljYXRlZCBpcyBwYXNzZWQgdG8gdGhlIGNhcnQgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG9yZGVyIGJ1dHRvblxuICAvLyBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXG4gIC8vIGxvYWQgU3RyaXBlIHRvIGluamVjdCBpbnRvIEVsZW1lbnRzIGNvbXBvbmVudHNcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgXCJwa190ZXN0XzUxTm1vUTVKTjN0T0E4TDBTWWF5aGd0ckFOZXRUZlBBTUQ3Rk55c1ZUR0dlcGtZVjJaWHFjMmY2Qlg4bFphRUZpR2RJU0NPWHBZSlhoY3g2OFlrTkRvbTJIMDB5V3RNc2E4blwiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWJhY2tncm91bmRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19IHNtPXt7IHNpemU6IDYsIG9yZGVyOiAxLCBvZmZzZXQ6IDEgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAwLCBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5DaGVja291dDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHN0eWxlPXt7IG1hcmdpbjogMCB9fSBtZD17eyBzaXplOiA2LCBvcmRlcjogMiB9fT5cbiAgICAgICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfT5cbiAgICAgICAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgLmNoZWNrb3V0LWhlYWRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGQgbWFyZ2luLXRvcCBhcyBuZWVkZWQgKlxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGltYWdlIHBhdGggKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\checkout.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0Iiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0IiwibWFyZ2luIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLG9CQUVVQyx3REFBVSxDQUFDQywyREFBRCxDQUZwQjtBQUFBLE1BRVZDLGVBRlUsZUFFVkEsZUFGVSxFQUdsQjtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLGFBQWEsR0FBR0Msb0VBQVUsQ0FDOUIsNkdBRDhCLENBQWhDO0FBSUEsU0FDRTtBQUFBLHdDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFpQyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFLENBQWxCO0FBQXFCQyxZQUFNLEVBQUU7QUFBN0IsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFdBQUssRUFBRSxPQUFwQjtBQUE2QkMsZUFBUyxFQUFFLE1BQXhDO0FBQWdEQyxnQkFBVSxFQUFFO0FBQTVELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsRUFJRSxNQUFDLHdEQUFEO0FBQU0sbUJBQWUsRUFBRVYsZUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVPLFlBQU0sRUFBRTtBQUFWLEtBQVo7QUFBMkIsTUFBRSxFQUFFO0FBQUVILFVBQUksRUFBRSxDQUFSO0FBQVdDLFdBQUssRUFBRTtBQUFsQixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFVLFVBQU0sRUFBRUosYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FQRixDQURGO0FBQUE7QUFBQTtBQUFBLHNvSEFERjtBQXNDRDs7R0FqRFFKLFE7O0tBQUFBLFE7QUFrRE1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LjQ0MDM3Zjg1OGNlNTdlYzAzYTZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xuaW1wb3J0IHsgRWxlbWVudHMgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hlY2tvdXRGb3JtXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0XCI7XG5pbXBvcnQgQ2FydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJ0XCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0KCkge1xuICAvLyBnZXQgYXBwIGNvbnRleHRcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIC8vIGlzQXV0aGVudGljYXRlZCBpcyBwYXNzZWQgdG8gdGhlIGNhcnQgY29tcG9uZW50IHRvIGRpc3BsYXkgdGhlIG9yZGVyIGJ1dHRvblxuICAvLyBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuXG4gIC8vIGxvYWQgU3RyaXBlIHRvIGluamVjdCBpbnRvIEVsZW1lbnRzIGNvbXBvbmVudHNcbiAgY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoXG4gICAgXCJwa190ZXN0XzUxTm1vUTVKTjN0T0E4TDBTWWF5aGd0ckFOZXRUZlBBTUQ3Rk55c1ZUR0dlcGtZVjJaWHFjMmY2Qlg4bFphRUZpR2RJU0NPWHBZSlhoY3g2OFlrTkRvbTJIMDB5V3RNc2E4blwiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWJhY2tncm91bmRcIj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19IHNtPXt7IHNpemU6IDYsIG9yZGVyOiAxLCBvZmZzZXQ6IDEgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgbWFyZ2luOiAwLCBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5DaGVja291dDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHN0eWxlPXt7IG1hcmdpbjogMCB9fSBtZD17eyBzaXplOiA2LCBvcmRlcjogMiB9fT5cbiAgICAgICAgICA8RWxlbWVudHMgc3RyaXBlPXtzdHJpcGVQcm9taXNlfT5cbiAgICAgICAgICAgIDxDaGVja291dEZvcm0gLz5cbiAgICAgICAgICA8L0VsZW1lbnRzPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgLmNoZWNrb3V0LWhlYWRpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgICAgICAgaGVpZ2h0OiAxMHB4XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyAvKiBBZGQgbWFyZ2luLXRvcCBhcyBuZWVkZWQgKlxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGltYWdlIHBhdGggKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==