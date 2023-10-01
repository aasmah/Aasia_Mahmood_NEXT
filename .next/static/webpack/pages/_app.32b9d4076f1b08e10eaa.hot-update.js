webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context */ "./components/context.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index */ "./pages/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\pages\\_app.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







function MyApp(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem,
      user = _useContext.user,
      setUser = _useContext.setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    cart: cart
  }),
      state = _useState[0],
      setState = _useState[1];

  var Component = props.Component,
      pageProps = props.pageProps;
  setUser = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("setUser"), function (user) {
    setState({
      user: user
    });
  });
  addItem = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("addItem"), function (item) {
    var items = state.cart.items;
    var foundItem = true;

    if (items.length > 0) {
      foundItem = items.find(function (i) {
        return i.id === item.id;
      });
      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }

    console.log("Found Item value: ".concat(JSON.stringify(foundItem)));

    if (!foundItem) {
      var temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.cart.items), [temp]),
        total: state.cart.total + item.price
      };
      setState({
        cart: newCart
      });
      console.log("Total items: ".concat(JSON.stringify(newCart)));
    } else {
      console.log("Total so far:  ".concat(state.cart.total));
      newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity + 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price
      };
    }

    setState({
      cart: newCart
    });
    console.log("state reset to cart:".concat(JSON.stringify(state)));
  });
  removeItem = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("removeItem"), function (item) {
    var items = state.cart.items;
    var foundItem = items.find(function (i) {
      return i.id === item.id;
    });

    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map(function (item) {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, {
              quantity: item.quantity - 1
            });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price
      };
    } else {
      console.log("Try remove item ".concat(JSON.stringify(foundItem)));
      var index = items.findIndex(function (i) {
        return i.id === foundItem.id;
      });
      items.splice(index, 1);
      var newCart = {
        items: items,
        total: state.cart.total - item.price
      };
    }

    setState({
      cart: newCart
    });
  });
  return __jsx(_components_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      cart: state.cart,
      addItem: addItem,
      removeItem: removeItem,
      isAuthenticated: false,
      user: null,
      setUser: function setUser() {}
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
    crossOrigin: "anonymous",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }))));
}

_s(MyApp, "0uoHFV+lB8Ch75c38zIt7ZJVV+U=");

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJNeUFwcCIsInByb3BzIiwidXNlQ29udGV4dCIsIkFwcENvbnRleHQiLCJjYXJ0IiwiYWRkSXRlbSIsInJlbW92ZUl0ZW0iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIml0ZW0iLCJpdGVtcyIsImZvdW5kSXRlbSIsImxlbmd0aCIsImZpbmQiLCJpIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXAiLCJwYXJzZSIsInF1YW50aXR5IiwibmV3Q2FydCIsInRvdGFsIiwicHJpY2UiLCJtYXAiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsImlzQXV0aGVudGljYXRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUEsb0JBQ2lDQyx3REFBVSxDQUFDQywyREFBRCxDQUQzQztBQUFBLE1BQ1pDLElBRFksZUFDWkEsSUFEWTtBQUFBLE1BQ05DLE9BRE0sZUFDTkEsT0FETTtBQUFBLE1BQ0dDLFVBREgsZUFDR0EsVUFESDtBQUFBLE1BQ2VDLElBRGYsZUFDZUEsSUFEZjtBQUFBLE1BQ3FCQyxPQURyQixlQUNxQkEsT0FEckI7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFBRUwsUUFBSSxFQUFFQTtBQUFSLEdBQUQsQ0FGZDtBQUFBLE1BRWJNLEtBRmE7QUFBQSxNQUVOQyxRQUZNOztBQUFBLE1BR1pDLFNBSFksR0FHYVgsS0FIYixDQUdaVyxTQUhZO0FBQUEsTUFHREMsU0FIQyxHQUdhWixLQUhiLENBR0RZLFNBSEM7QUFLcEJMLFNBQU8sSUFBSSxxR0FBRCxV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SFA7QUFJTCtCLHFCQUFlLEVBQUUsS0FKWjtBQUtMOUIsVUFBSSxFQUFFLElBTEQ7QUFNTEMsYUFBTyxFQUFFLG1CQUFNLENBQUU7QUFOWixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE9BQUcsRUFBQyxZQUROO0FBRUUsUUFBSSxFQUFDLHVFQUZQO0FBR0UsYUFBUyxFQUFDLHlFQUhaO0FBSUUsZUFBVyxFQUFDLFdBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBVkYsRUFtQkUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlSyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQW5CRixDQURGO0FBeUJEOztHQWxHUWIsSzs7S0FBQUEsSztBQW9HTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zMmI5ZDQwNzZmMWIwOGUxMGVhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHRcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSwgdXNlciwgc2V0VXNlciB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IGNhcnQ6IGNhcnQgfSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG4gIHNldFVzZXIgPSAodXNlcikgPT4ge1xuICAgIHNldFN0YXRlKHsgdXNlciB9KTtcbiAgfTtcblxuICBhZGRJdGVtID0gKGl0ZW0pID0+IHtcbiAgICBsZXQgeyBpdGVtcyB9ID0gc3RhdGUuY2FydDtcbiAgICBsZXQgZm91bmRJdGVtID0gdHJ1ZTtcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKChpKSA9PiBpLmlkID09PSBpdGVtLmlkKTtcblxuICAgICAgaWYgKCFmb3VuZEl0ZW0pIGZvdW5kSXRlbSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZEl0ZW0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgRm91bmQgSXRlbSB2YWx1ZTogJHtKU09OLnN0cmluZ2lmeShmb3VuZEl0ZW0pfWApO1xuXG4gICAgaWYgKCFmb3VuZEl0ZW0pIHtcbiAgICAgIGxldCB0ZW1wID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShpdGVtKSk7XG4gICAgICB0ZW1wLnF1YW50aXR5ID0gMTtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogWy4uLnN0YXRlLmNhcnQuaXRlbXMsIHRlbXBdLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCArIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuICAgICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0IH0pO1xuICAgICAgY29uc29sZS5sb2coYFRvdGFsIGl0ZW1zOiAke0pTT04uc3RyaW5naWZ5KG5ld0NhcnQpfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgVG90YWwgc28gZmFyOiAgJHtzdGF0ZS5jYXJ0LnRvdGFsfWApO1xuICAgICAgbmV3Q2FydCA9IHtcbiAgICAgICAgaXRlbXM6IGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLmlkID09PSBmb3VuZEl0ZW0uaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7IHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdG90YWw6IHN0YXRlLmNhcnQudG90YWwgKyBpdGVtLnByaWNlLFxuICAgICAgfTtcbiAgICB9XG4gICAgc2V0U3RhdGUoeyBjYXJ0OiBuZXdDYXJ0IH0pO1xuICAgIGNvbnNvbGUubG9nKGBzdGF0ZSByZXNldCB0byBjYXJ0OiR7SlNPTi5zdHJpbmdpZnkoc3RhdGUpfWApO1xuICB9O1xuXG4gIHJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgIGxldCB7IGl0ZW1zIH0gPSBzdGF0ZS5jYXJ0O1xuICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoKGkpID0+IGkuaWQgPT09IGl0ZW0uaWQpO1xuXG4gICAgaWYgKGZvdW5kSXRlbS5xdWFudGl0eSA+IDEpIHtcbiAgICAgIHZhciBuZXdDYXJ0ID0ge1xuICAgICAgICBpdGVtczogaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGZvdW5kSXRlbS5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHsgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgLSAxIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0b3RhbDogc3RhdGUuY2FydC50b3RhbCAtIGl0ZW0ucHJpY2UsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgVHJ5IHJlbW92ZSBpdGVtICR7SlNPTi5zdHJpbmdpZnkoZm91bmRJdGVtKX1gKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KChpKSA9PiBpLmlkID09PSBmb3VuZEl0ZW0uaWQpO1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHZhciBuZXdDYXJ0ID0geyBpdGVtczogaXRlbXMsIHRvdGFsOiBzdGF0ZS5jYXJ0LnRvdGFsIC0gaXRlbS5wcmljZSB9O1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7IGNhcnQ6IG5ld0NhcnQgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2FydDogc3RhdGUuY2FydCxcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbSxcbiAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgc2V0VXNlcjogKCkgPT4ge30sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjAuMC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1HbjUzODR4cVExYW9XWEErMDU4UlhQeFBnNmZ5NElXdlROaDBFMjYzWG1GY0psU0F3aUdnRkFXL2RBaVM2SlhtXCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9