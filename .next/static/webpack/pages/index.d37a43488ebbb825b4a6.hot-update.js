webpackHotUpdate_N_E("pages/index",{

/***/ "./components/context.js":
/*!*******************************!*\
  !*** ./components/context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* /context/AppContext.js */

var AppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  isAuthenticated: true,
  cart: {
    items: [],
    total: 0
  },
  addItem: function addItem() {},
  removeItem: function removeItem() {},
  //   clearCart: () => {}, // Add this function to clear the cart
  user: false,
  setUser: function setUser() {}
});
/* harmony default export */ __webpack_exports__["default"] = (AppContext);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpc0F1dGhlbnRpY2F0ZWQiLCJjYXJ0IiwiaXRlbXMiLCJ0b3RhbCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwidXNlciIsInNldFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUEsSUFBTUEsVUFBVSxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUNyQ0MsaUJBQWUsRUFBRSxJQURvQjtBQUVyQ0MsTUFBSSxFQUFFO0FBQUVDLFNBQUssRUFBRSxFQUFUO0FBQWFDLFNBQUssRUFBRTtBQUFwQixHQUYrQjtBQUdyQ0MsU0FBTyxFQUFFLG1CQUFNLENBQUUsQ0FIb0I7QUFJckNDLFlBQVUsRUFBRSxzQkFBTSxDQUFFLENBSmlCO0FBS3ZDO0FBQ0VDLE1BQUksRUFBRSxLQU4rQjtBQU9yQ0MsU0FBTyxFQUFFLG1CQUFNLENBQUU7QUFQb0IsQ0FBcEIsQ0FBbkI7QUFVZVYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDM3YTQzNDg4ZWJiYjgyNWI0YTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC9jb250ZXh0L0FwcENvbnRleHQuanMgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBcHBDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcbiAgY2FydDogeyBpdGVtczogW10sIHRvdGFsOiAwIH0sXG4gIGFkZEl0ZW06ICgpID0+IHt9LFxuICByZW1vdmVJdGVtOiAoKSA9PiB7fSxcbi8vICAgY2xlYXJDYXJ0OiAoKSA9PiB7fSwgLy8gQWRkIHRoaXMgZnVuY3Rpb24gdG8gY2xlYXIgdGhlIGNhcnRcbiAgdXNlcjogZmFsc2UsXG4gIHNldFVzZXI6ICgpID0+IHt9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcENvbnRleHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==