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
    className: "jsx-3315748034" + " " + "checkout-background",
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-3315748034" + " " + "checkout-heading",
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
      fontWeight: "bold",
      backgroundColor: "grey"
    },
    className: "jsx-3315748034",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Checkout")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isAuthenticated: isAuthenticated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3315748034",
    __self: this
  }, ".text-box.jsx-3315748034{background-color:grey;padding:10px;}.checkout-background.jsx-3315748034{background-image:url(\"https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg\");background-size:cover;background-repeat:no-repeat;min-height:100vh;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcY2hlY2tvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUNrQixBQUltQyxBQUt5RixzQkFKbEcsYUFFakIsOEVBR3dCLHNCQUNNLDRCQUNYLGlCQUNKLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXHBhZ2VzXFxjaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dEZvcm1cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIC8vIGdldCBhcHAgY29udGV4dFxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgLy8gaXNBdXRoZW50aWNhdGVkIGlzIHBhc3NlZCB0byB0aGUgY2FydCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgb3JkZXIgYnV0dG9uXG4gIC8vIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG5cbiAgLy8gbG9hZCBTdHJpcGUgdG8gaW5qZWN0IGludG8gRWxlbWVudHMgY29tcG9uZW50c1xuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcbiAgICBcInBrX3Rlc3RfNTFObW9RNUpOM3RPQThMMFNZYXloZ3RyQU5ldFRmUEFNRDdGTnlzVlRHR2Vwa1lWMlpYcWMyZjZCWDhsWmFFRmlHZElTQ09YcFlKWGhjeDY4WWtORG9tMkgwMHlXdE1zYThuXCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtYmFja2dyb3VuZFwiPlxuICAgICAgPFJvdz5cbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAsIGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIn19PkNoZWNrb3V0PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMCB9fSBzbT17eyBzaXplOiA2LCBvcmRlcjogMSwgb2Zmc2V0OiAxIH19PlxuICAgICAgICAgXG4gICAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICBcbiAgICAgICAgPENvbCBzdHlsZT17eyBtYXJnaW46IDAgfX0gbWQ9e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XG4gICAgICAgXG4gICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICAgICAgPC9FbGVtZW50cz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGltYWdlIHBhdGggKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\checkout.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLG9CQUVVQyx3REFBVSxDQUFDQywyREFBRCxDQUZwQjtBQUFBLE1BRVZDLGVBRlUsZUFFVkEsZUFGVSxFQUdsQjtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLGFBQWEsR0FBR0Msb0VBQVUsQ0FDOUIsNkdBRDhCLENBQWhDO0FBSUEsU0FDRTtBQUFBLHdDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQSx3Q0FBZSxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFLENBQVY7QUFBYUMsV0FBSyxFQUFFLE9BQXBCO0FBQTZCQyxlQUFTLEVBQUUsTUFBeEM7QUFBZ0RDLGdCQUFVLEVBQUUsTUFBNUQ7QUFBcUVDLHFCQUFlLEVBQUU7QUFBdEYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FESixDQURBLENBREYsRUFRRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVMLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFpQyxNQUFFLEVBQUU7QUFBRU0sVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFLENBQWxCO0FBQXFCQyxZQUFNLEVBQUU7QUFBN0IsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsd0RBQUQ7QUFBTSxtQkFBZSxFQUFFWCxlQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FEQSxFQU1FLE1BQUMsOENBQUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFO0FBQVYsS0FBWjtBQUEyQixNQUFFLEVBQUU7QUFBRUssVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFO0FBQWxCLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLGdFQUFEO0FBQVUsVUFBTSxFQUFFVCxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQU5GLENBUkY7QUFBQTtBQUFBO0FBQUEsa29IQURGO0FBdUNEOztHQWxEUUosUTs7S0FBQUEsUTtBQW1ETUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuMjcwMTVmYWUwYmUxNTBlNzkwZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5pbXBvcnQgeyBFbGVtZW50cyB9IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xuaW1wb3J0IENoZWNrb3V0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGVja291dEZvcm1cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIC8vIGdldCBhcHAgY29udGV4dFxuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgLy8gaXNBdXRoZW50aWNhdGVkIGlzIHBhc3NlZCB0byB0aGUgY2FydCBjb21wb25lbnQgdG8gZGlzcGxheSB0aGUgb3JkZXIgYnV0dG9uXG4gIC8vIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG5cbiAgLy8gbG9hZCBTdHJpcGUgdG8gaW5qZWN0IGludG8gRWxlbWVudHMgY29tcG9uZW50c1xuICBjb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShcbiAgICBcInBrX3Rlc3RfNTFObW9RNUpOM3RPQThMMFNZYXloZ3RyQU5ldFRmUEFNRDdGTnlzVlRHR2Vwa1lWMlpYcWMyZjZCWDhsWmFFRmlHZElTQ09YcFlKWGhjeDY4WWtORG9tMkgwMHlXdE1zYThuXCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtYmFja2dyb3VuZFwiPlxuICAgICAgPFJvdz5cbiAgICAgIDxDb2wgc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiAwIH19ID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAsIGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIn19PkNoZWNrb3V0PC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMCB9fSBzbT17eyBzaXplOiA2LCBvcmRlcjogMSwgb2Zmc2V0OiAxIH19PlxuICAgICAgICAgXG4gICAgICAgICAgPENhcnQgaXNBdXRoZW50aWNhdGVkPXtpc0F1dGhlbnRpY2F0ZWR9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICBcbiAgICAgICAgPENvbCBzdHlsZT17eyBtYXJnaW46IDAgfX0gbWQ9e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XG4gICAgICAgXG4gICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICAgICAgPC9FbGVtZW50cz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIFxuICAgICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgXG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrb3V0LWJhY2tncm91bmQge1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvdXBsb2Fkcy9jZWY3OTAzNzczOWI0N2ExODMwODU5OGJkNmE0Mjk2Mi5qcGdcIik7IC8qIFJlcGxhY2Ugd2l0aCB5b3VyIGltYWdlIHBhdGggKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBBZGp1c3QgdGhlIGJhY2tncm91bmQgc2l6ZSBhcyBuZWVkZWQgKi9cbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==