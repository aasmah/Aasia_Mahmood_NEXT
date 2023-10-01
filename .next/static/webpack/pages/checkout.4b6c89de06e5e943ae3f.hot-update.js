webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/cardSection.js":
/*!***********************************!*\
  !*** ./components/cardSection.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\cardSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CardSection(props) {
  return __jsx("div", {
    style: {
      marginLeft: "0",
      display: "flex",
      justifyContent: "flex-start"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "card-element",
    style: {
      color: "#333"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Credit or debit card"), __jsx("div", {
    style: {
      backgroundColor: "#f4f4f4",
      padding: "20px",
      borderRadius: "5px"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("fieldset", {
    style: {
      border: "none"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "jsx-1662088844" + " " + "form-row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    id: "card-element",
    style: {
      width: "100%"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__["CardElement"], {
    options: {
      style: {
        width: "100%",
        base: {
          fontSize: "18px",
          color: "#333"
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx("br", {
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "jsx-1662088844" + " " + "order-button-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx("button", {
    onClick: props.submitOrder,
    style: {
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "Confirm order")), props.stripeError ? __jsx("div", {
    style: {
      color: "red"
    },
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, props.stripeError.toString()) : null, __jsx("div", {
    id: "card-errors",
    role: "alert",
    className: "jsx-1662088844",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1662088844",
    __self: this
  }, ".order-button-wrapper.jsx-1662088844{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJkU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFMsQUFHMEIsMEVBQ0YsV0FDVSxxR0FDSSxpR0FDVCxnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGNhcmRTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZEVsZW1lbnQgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcblxuZnVuY3Rpb24gQ2FyZFNlY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMFwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1zdGFydFwiIH19PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXJkLWVsZW1lbnRcIiBzdHlsZT17eyBjb2xvcjogXCIjMzMzXCIgfX0+XG4gICAgICAgICAgQ3JlZGl0IG9yIGRlYml0IGNhcmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxmaWVsZHNldCBzdHlsZT17eyBib3JkZXI6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZC1lbGVtZW50XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxDYXJkRWxlbWVudFxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICBiYXNlOiB7IGZvbnRTaXplOiBcIjE4cHhcIiwgY29sb3I6IFwiIzMzM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLnN1Ym1pdE9yZGVyfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmZpcm0gb3JkZXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtwcm9wcy5zdHJpcGVFcnJvciA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pntwcm9wcy5zdHJpcGVFcnJvci50b1N0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmQtZXJyb3JzXCIgcm9sZT1cImFsZXJ0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5vcmRlci1idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkU2VjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\cardSection.js */"));
}

_c = CardSection;
/* harmony default export */ __webpack_exports__["default"] = (CardSection);

var _c;

$RefreshReg$(_c, "CardSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkU2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJDYXJkU2VjdGlvbiIsInByb3BzIiwibWFyZ2luTGVmdCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIndpZHRoIiwic3R5bGUiLCJiYXNlIiwiZm9udFNpemUiLCJzdWJtaXRPcmRlciIsInN0cmlwZUVycm9yIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQixTQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVDLGdCQUFVLEVBQUUsR0FBZDtBQUFtQkMsYUFBTyxFQUFFLE1BQTVCO0FBQW9DQyxvQkFBYyxFQUFFO0FBQXBELEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsY0FBZjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFDTEMscUJBQWUsRUFBRSxTQURaO0FBRUxDLGFBQU8sRUFBRSxNQUZKO0FBR0xDLGtCQUFZLEVBQUU7QUFIVCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FO0FBQVUsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUF1QixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLFdBQU8sRUFBRTtBQUNQQyxXQUFLLEVBQUU7QUFDTEQsYUFBSyxFQUFFLE1BREY7QUFFTEUsWUFBSSxFQUFFO0FBQUVDLGtCQUFRLEVBQUUsTUFBWjtBQUFvQlIsZUFBSyxFQUFFO0FBQTNCO0FBRkQ7QUFEQSxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRTtBQUFBLHdDQUFlLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFdBQU8sRUFBRUosS0FBSyxDQUFDYSxXQURqQjtBQUVFLFNBQUssRUFBRTtBQUNMUixxQkFBZSxFQUFFLE1BRFo7QUFFTEQsV0FBSyxFQUFFLE1BRkY7QUFHTEksWUFBTSxFQUFFLE1BSEg7QUFJTEQsa0JBQVksRUFBRSxLQUpUO0FBS0xELGFBQU8sRUFBRTtBQUxKLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLENBWkYsRUEwQkdOLEtBQUssQ0FBQ2MsV0FBTixHQUNDO0FBQUssU0FBSyxFQUFFO0FBQUVWLFdBQUssRUFBRTtBQUFULEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCSixLQUFLLENBQUNjLFdBQU4sQ0FBa0JDLFFBQWxCLEVBQS9CLENBREQsR0FFRyxJQTVCTixFQTZCRTtBQUFLLE1BQUUsRUFBQyxhQUFSO0FBQXNCLFFBQUksRUFBQyxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FERixDQVBGLENBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSxrckhBREY7QUE2REQ7O0tBOURRaEIsVztBQWdFTUEsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNGI2Yzg5ZGUwNmU1ZTk0M2FlM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50IH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5cbmZ1bmN0aW9uIENhcmRTZWN0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjBcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcImZsZXgtc3RhcnRcIiB9fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FyZC1lbGVtZW50XCIgc3R5bGU9e3sgY29sb3I6IFwiIzMzM1wiIH19PlxuICAgICAgICAgIENyZWRpdCBvciBkZWJpdCBjYXJkXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZmllbGRzZXQgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmQtZWxlbWVudFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cbiAgICAgICAgICAgICAgICA8Q2FyZEVsZW1lbnRcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYmFzZTogeyBmb250U2l6ZTogXCIxOHB4XCIsIGNvbG9yOiBcIiMzMzNcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXItYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5zdWJtaXRPcmRlcn1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDb25maXJtIG9yZGVyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7cHJvcHMuc3RyaXBlRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT57cHJvcHMuc3RyaXBlRXJyb3IudG9TdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkLWVycm9yc1wiIHJvbGU9XCJhbGVydFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAub3JkZXItYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFNlY3Rpb247XG4iXSwic291cmNlUm9vdCI6IiJ9