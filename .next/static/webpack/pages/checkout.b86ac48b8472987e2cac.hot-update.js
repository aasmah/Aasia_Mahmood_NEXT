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
    className: "jsx-462097932" + " " + "checkout-background",
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
  }, __jsx("h1", {
    style: {
      margin: 0
    },
    className: "jsx-462097932",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Checkout"), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isAuthenticated: isAuthenticated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__["Elements"], {
    stripe: stripePromise,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(_components_checkoutForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "462097932",
    __self: this
  }, ".checkout-background.jsx-462097932{background-image:url(\"https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg\");background-size:cover;background-repeat:no-repeat;min-height:100vh;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcY2hlY2tvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUc0SCxpSEFDM0Ysc0JBQ00sNEJBQ1gsaUJBQ0osYUFDZiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhc184XFxEZXNrdG9wXFxDYXBzdG9uZVxccmVzdGF1cmFudC1hd3MtZGVwbG95XFxmcm9udGVuZFxccGFnZXNcXGNoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrb3V0Rm9ybVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuXG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgLy8gZ2V0IGFwcCBjb250ZXh0XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAvLyBpc0F1dGhlbnRpY2F0ZWQgaXMgcGFzc2VkIHRvIHRoZSBjYXJ0IGNvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBvcmRlciBidXR0b25cbiAgLy8gY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcblxuICAvLyBsb2FkIFN0cmlwZSB0byBpbmplY3QgaW50byBFbGVtZW50cyBjb21wb25lbnRzXG4gIGNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFxuICAgIFwicGtfdGVzdF81MU5tb1E1Sk4zdE9BOEwwU1lheWhndHJBTmV0VGZQQU1EN0ZOeXNWVEdHZXBrWVYyWlhxYzJmNkJYOGxaYUVGaUdkSVNDT1hwWUpYaGN4NjhZa05Eb20ySDAweVd0TXNhOG5cIlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1iYWNrZ3JvdW5kXCI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMCB9fSBzbT17eyBzaXplOiA2LCBvcmRlcjogMSwgb2Zmc2V0OiAxIH19PlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAgfX0+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICAgIDxDYXJ0IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzdHlsZT17eyBtYXJnaW46IDAgfX0gbWQ9e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XG4gICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICAgICAgPC9FbGVtZW50cz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2hlY2tvdXQtYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2NlZjc5MDM3NzM5YjQ3YTE4MzA4NTk4YmQ2YTQyOTYyLmpwZ1wiKTsgLyogUmVwbGFjZSB3aXRoIHlvdXIgaW1hZ2UgcGF0aCAqL1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBzaXplIGFzIG5lZWRlZCAqL1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\checkout.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hlY2tvdXQuanMiXSwibmFtZXMiOlsiQ2hlY2tvdXQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImlzQXV0aGVudGljYXRlZCIsInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwicGFkZGluZ1JpZ2h0Iiwic2l6ZSIsIm9yZGVyIiwib2Zmc2V0IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCO0FBRGtCLG9CQUVVQyx3REFBVSxDQUFDQywyREFBRCxDQUZwQjtBQUFBLE1BRVZDLGVBRlUsZUFFVkEsZUFGVSxFQUdsQjtBQUNBO0FBRUE7OztBQUNBLE1BQU1DLGFBQWEsR0FBR0Msb0VBQVUsQ0FDOUIsNkdBRDhCLENBQWhDO0FBSUEsU0FDRTtBQUFBLHVDQUFlLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUssU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFpQyxNQUFFLEVBQUU7QUFBRUMsVUFBSSxFQUFFLENBQVI7QUFBV0MsV0FBSyxFQUFFLENBQWxCO0FBQXFCQyxZQUFNLEVBQUU7QUFBN0IsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLG1CQUFlLEVBQUVQLGVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyw4Q0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFTyxZQUFNLEVBQUU7QUFBVixLQUFaO0FBQTJCLE1BQUUsRUFBRTtBQUFFSCxVQUFJLEVBQUUsQ0FBUjtBQUFXQyxXQUFLLEVBQUU7QUFBbEIsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBVSxVQUFNLEVBQUVKLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTEYsQ0FERjtBQUFBO0FBQUE7QUFBQSxvakdBREY7QUF5QkQ7O0dBcENRSixROztLQUFBQSxRO0FBcUNNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC5iODZhYzQ4Yjg0NzI5ODdlMmNhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCB7IEVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2hlY2tvdXRGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2NoZWNrb3V0Rm9ybVwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGV4dFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuXG5mdW5jdGlvbiBDaGVja291dCgpIHtcbiAgLy8gZ2V0IGFwcCBjb250ZXh0XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAvLyBpc0F1dGhlbnRpY2F0ZWQgaXMgcGFzc2VkIHRvIHRoZSBjYXJ0IGNvbXBvbmVudCB0byBkaXNwbGF5IHRoZSBvcmRlciBidXR0b25cbiAgLy8gY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcblxuICAvLyBsb2FkIFN0cmlwZSB0byBpbmplY3QgaW50byBFbGVtZW50cyBjb21wb25lbnRzXG4gIGNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFxuICAgIFwicGtfdGVzdF81MU5tb1E1Sk4zdE9BOEwwU1lheWhndHJBTmV0VGZQQU1EN0ZOeXNWVEdHZXBrWVYyWlhxYzJmNkJYOGxaYUVGaUdkSVNDT1hwWUpYaGN4NjhZa05Eb20ySDAweVd0TXNhOG5cIlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1iYWNrZ3JvdW5kXCI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogMCB9fSBzbT17eyBzaXplOiA2LCBvcmRlcjogMSwgb2Zmc2V0OiAxIH19PlxuICAgICAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW46IDAgfX0+Q2hlY2tvdXQ8L2gxPlxuICAgICAgICAgIDxDYXJ0IGlzQXV0aGVudGljYXRlZD17aXNBdXRoZW50aWNhdGVkfSAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCBzdHlsZT17eyBtYXJnaW46IDAgfX0gbWQ9e3sgc2l6ZTogNiwgb3JkZXI6IDIgfX0+XG4gICAgICAgICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlUHJvbWlzZX0+XG4gICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgICAgICAgPC9FbGVtZW50cz5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY2hlY2tvdXQtYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2NlZjc5MDM3NzM5YjQ3YTE4MzA4NTk4YmQ2YTQyOTYyLmpwZ1wiKTsgLyogUmVwbGFjZSB3aXRoIHlvdXIgaW1hZ2UgcGF0aCAqL1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IC8qIEFkanVzdCB0aGUgYmFja2dyb3VuZCBzaXplIGFzIG5lZWRlZCAqL1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9