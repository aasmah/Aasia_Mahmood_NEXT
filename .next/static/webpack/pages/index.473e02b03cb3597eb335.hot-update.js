webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cart */ "./components/cart.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _components_restaurantList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/restaurantList */ "./components/restaurantList.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Home() {
  _s();

  var API_URL = "https://urchin-app-hi2hs.ondigitalocean.app";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      query = _useState[0],
      setQuery = _useState[1];

  var link = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]({
    uri: "".concat(API_URL, "/graphql")
  });
  var cache = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]();
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloClient"]({
    link: link,
    cache: cache
  });
  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "background",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "container",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 3
    }
  }, __jsx("div", {
    "class": "search",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("h1", {
    "class": "header-title",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "TownTantalize"), __jsx("div", {
    "class": "input-group custom-input-group",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    "class": "form-control search-input",
    placeholder: "Enter your search query...",
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLowerCase());
    },
    value: query,
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("div", {
    "class": "input-group-append",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("button", {
    "class": "btn btn-primary",
    type: "button",
    className: "jsx-2690303068",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Search")))), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2690303068",
    __self: this
  }, "#background.jsx-2690303068{background:url(\"https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg\") center/cover no-repeat;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,0.3);margin-top:20px;max-width:800px;margin:0 auto;}.header-title.jsx-2690303068{font-size:36px;color:#333;text-align:left;font-weight:bold;padding:10px 0;}.search.jsx-2690303068{text-align:center;padding:20px 0;}.custom-input-group.jsx-2690303068{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.search-input.jsx-2690303068{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;background-color:#fff;color:#333;border-radius:5px 0 0 5px;}.btn-primary.jsx-2690303068{background-color:#333;color:white;border-radius:0 5px 5px 0;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NrQixBQUc2SSxBQVNuSCxBQVFHLEFBS0wsQUFNRCxBQU9VLGVBekJYLEdBUUksSUFrQkgsSUF6QkksT0FRbEIsQ0FrQjRCLFFBekJULGlCQUNGLENBeUJILFdBVFUsQ0FVeEIsRUF6QkEsQUFTeUIsbUJBT1osV0FDZSwwQkE5QlAsQUErQnJCLG1CQTlCeUMsd0JBc0JwQixZQXJCSCxnQkFDQSxnQkFDRixjQUNoQixtQ0FtQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdFwiO1xuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHBcIjtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGAgfSk7XG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7IGxpbmssIGNhY2hlIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XG4gICAgICA8aDEgY2xhc3M9XCJoZWFkZXItdGl0bGVcIj5Ub3duVGFudGFsaXplPC9oMT5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBjdXN0b20taW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLlwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgIDxDYXJ0IC8+XG4gIDwvZGl2PlxuPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNiYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwL3VwbG9hZHMvY2VmNzkwMzc3MzliNDdhMTgzMDg1OThiZDZhNDI5NjIuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4OyAvKiBBZGp1c3QgdGhlIG1heGltdW0gd2lkdGggYXMgbmVlZGVkICovXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBjb2xvcjogIzMzMzsgLyogRGFyayB0ZXh0IGNvbG9yICovXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5jdXN0b20taW5wdXQtZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IC8qIFdoaXRlIGJhY2tncm91bmQgZm9yIHRoZSBpbnB1dCBmaWVsZCAqL1xuICAgICAgICAgIGNvbG9yOiAjMzMzOyAvKiBEYXJrIHRleHQgY29sb3IgKi9cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDsgLyogUm91bmRlZCBsZWZ0IGNvcm5lcnMgKi9cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAvKiBEYXJrIGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBzZWFyY2ggYnV0dG9uICovXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwOyAvKiBSb3VuZGVkIHJpZ2h0IGNvcm5lcnMgKi9cbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\index.js */"));
}

_s(Home, "HYX2QbDDdTtlu7GfoQbAPZOIM6k=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUFHLDZDQUFoQjs7QUFEYyxrQkFFWUMsc0RBQVEsQ0FBQyxFQUFELENBRnBCO0FBQUEsTUFFUEMsS0FGTztBQUFBLE1BRUFDLFFBRkE7O0FBR2QsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxZQUFLTixPQUFMO0FBQUwsR0FBYixDQUFiO0FBQ0EsTUFBTU8sS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBRU4sUUFBSSxFQUFKQSxJQUFGO0FBQVFHLFNBQUssRUFBTEE7QUFBUixHQUFqQixDQUFmO0FBRUEsU0FDRSxNQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0o7QUFBSyxhQUFNLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFNLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFNLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSyxhQUFNLGdDQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFNLDJCQUZSO0FBR0UsZUFBVyxFQUFDLDRCQUhkO0FBSUUsWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFBT1IsUUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxXQUFmLEVBQUQsQ0FBZjtBQUFBLEtBSlo7QUFLRSxTQUFLLEVBQUVaLEtBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUFLLGFBQU0sb0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFNLGlCQUFkO0FBQWdDLFFBQUksRUFBQyxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQVJGLENBRkYsQ0FERixFQWdCRSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRUEsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQWlCRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsQ0FESSxDQURGO0FBQUE7QUFBQTtBQUFBLG0xS0FERjtBQW9FRDs7R0EzRVFILEk7O0tBQUFBLEk7QUE2RU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3M2UwMmIwM2NiMzU5N2ViMzM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3RcIjtcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfVVJMID0gXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGxpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9VUkx9L2dyYXBocWxgIH0pO1xuICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoeyBsaW5rLCBjYWNoZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxuICAgICAgPGgxIGNsYXNzPVwiaGVhZGVyLXRpdGxlXCI+VG93blRhbnRhbGl6ZTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgY3VzdG9tLWlucHV0LWdyb3VwXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBzZWFyY2ggcXVlcnkuLi5cIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cbiAgICA8Q2FydCAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2NlZjc5MDM3NzM5YjQ3YTE4MzA4NTk4YmQ2YTQyOTYyLmpwZ1wiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDsgLyogQWRqdXN0IHRoZSBtYXhpbXVtIHdpZHRoIGFzIG5lZWRlZCAqL1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7IC8qIERhcmsgdGV4dCBjb2xvciAqL1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuY3VzdG9tLWlucHV0LWdyb3VwIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAvKiBXaGl0ZSBiYWNrZ3JvdW5kIGZvciB0aGUgaW5wdXQgZmllbGQgKi9cbiAgICAgICAgICBjb2xvcjogIzMzMzsgLyogRGFyayB0ZXh0IGNvbG9yICovXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7IC8qIFJvdW5kZWQgbGVmdCBjb3JuZXJzICovXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzsgLyogRGFyayBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgc2VhcmNoIGJ1dHRvbiAqL1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDsgLyogUm91bmRlZCByaWdodCBjb3JuZXJzICovXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=