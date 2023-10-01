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
  console.log("URL: ".concat(API_URL));

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
  }); // process.env.NEXT_PUBLIC_API_URL ||

  return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: client,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 1
    }
  }, __jsx("div", {
    className: "jsx-1735786280" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "jsx-1735786280" + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "jsx-1735786280",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Local Restaurants"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Search"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLocaleLowerCase());
    },
    value: query,
    className: "search-input" // Add a class for styling
    ,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }))), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1735786280",
    __self: this
  }, ".container.jsx-1735786280{max-width:800px;margin:0 auto;padding:20px;}.search.jsx-1735786280{margin-bottom:20px;background-color:lightgray;padding:10px;}h2.jsx-1735786280{font-size:24px;margin-bottom:10px;color:#333;}.search-input.jsx-1735786280{width:100%;font-size:16px;background-color:white;color:#333;border:1px solid #ccc;border-radius:4px;padding:5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NjLEFBR3VCLEFBTUcsQUFNSixBQU1KLFdBQ0ksSUFOSSxDQVpMLEdBTWEsT0FhSixJQWxCVixJQVlGLFNBWGIsRUFZQSxDQVBlLEdBYUYsVUFaYixDQWF3QixzQkFDSixrQkFDRCxpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdCc7XG5pbXBvcnQgeyBJbnB1dEdyb3VwLCBJbnB1dEdyb3VwQWRkb24sIElucHV0IH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuICBjb25zb2xlLmxvZyhgVVJMOiAke0FQSV9VUkx9YClcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGAgfSlcbiAgY29uc3QgY2FjaGUgPSBuZXcgSW5NZW1vcnlDYWNoZSgpXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoeyBsaW5rLCBjYWNoZSB9KTtcbiAgLy8gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fFxuXG4gIHJldHVybiAoXG48QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICA8aDI+TG9jYWwgUmVzdGF1cmFudHM8L2gyPlxuICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+U2VhcmNoPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlLnRvTG9jYWxlTG93ZXJDYXNlKCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICAvPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgIDwvZGl2PlxuICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgIDxDYXJ0IC8+XG4gIDwvZGl2PlxuICA8c3R5bGUganN4PntgXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cblxuICAgIC5zZWFyY2gge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgLy8gQWRkIGEgbGlnaHQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgcGFkZGluZzogMTBweDsgLy8gQWRkIHBhZGRpbmcgZm9yIHNwYWNpbmdcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICMzMzM7IC8vIEFkZCBkYXJrIHRleHQgY29sb3JcbiAgICB9XG5cbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vIEFkZCBhIHdoaXRlIGJhY2tncm91bmQgY29sb3JcbiAgICAgIGNvbG9yOiAjMzMzOyAvLyBBZGQgZGFyayB0ZXh0IGNvbG9yXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvLyBBZGQgYSBib3JkZXIgZm9yIHN0eWxpbmdcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgLy8gQWRkIHJvdW5kZWQgY29ybmVyc1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7IC8vIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nXG4gICAgfVxuICBgfTwvc3R5bGU+XG48L0Fwb2xsb1Byb3ZpZGVyPlxuKTtcblxufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiZSIsInRhcmdldCIsInZhbHVlIiwidG9Mb2NhbGVMb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUNkLE1BQU1DLE9BQU8sR0FBRyw2Q0FBaEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLGdCQUFvQkYsT0FBcEI7O0FBRmMsa0JBR1lHLHNEQUFRLENBQUMsRUFBRCxDQUhwQjtBQUFBLE1BR1BDLEtBSE87QUFBQSxNQUdBQyxRQUhBOztBQUlkLE1BQU1DLElBQUksR0FBRyxJQUFJQyx1REFBSixDQUFhO0FBQUVDLE9BQUcsWUFBS1IsT0FBTDtBQUFMLEdBQWIsQ0FBYjtBQUNBLE1BQU1TLEtBQUssR0FBRyxJQUFJQyw0REFBSixFQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQUVOLFFBQUksRUFBSkEsSUFBRjtBQUFRRyxTQUFLLEVBQUxBO0FBQVIsR0FBakIsQ0FBZixDQU5jLENBT2Q7O0FBRUEsU0FDRixNQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLGdEQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDRSxDQUFEO0FBQUEsYUFDUlIsUUFBUSxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxpQkFBZixFQUFELENBREE7QUFBQSxLQURaO0FBSUUsU0FBSyxFQUFFWixLQUpUO0FBS0UsYUFBUyxFQUFDLGNBTFosQ0FLMkI7QUFMM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBRkYsQ0FERixFQWNFLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFQSxLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGO0FBQUE7QUFBQTtBQUFBLDhwSEFERTtBQW1ERDs7R0E1RFFMLEk7O0tBQUFBLEk7QUE2RE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1NjY4OWU4MjQzMTliMTdiODM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3QnO1xuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHBcIjtcbiAgY29uc29sZS5sb2coYFVSTDogJHtBUElfVVJMfWApXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGxpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9VUkx9L2dyYXBocWxgIH0pXG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKVxuICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHsgbGluaywgY2FjaGUgfSk7XG4gIC8vIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHxcblxuICByZXR1cm4gKFxuPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgPGgyPkxvY2FsIFJlc3RhdXJhbnRzPC9oMj5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPlNlYXJjaDwvSW5wdXRHcm91cEFkZG9uPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCIgLy8gQWRkIGEgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICAgICAgLz5cbiAgICAgIDwvSW5wdXRHcm91cD5cbiAgICA8L2Rpdj5cbiAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cbiAgICA8Q2FydCAvPlxuICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIC5jb250YWluZXIge1xuICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG5cbiAgICAuc2VhcmNoIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7IC8vIEFkZCBhIGxpZ2h0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIHBhZGRpbmc6IDEwcHg7IC8vIEFkZCBwYWRkaW5nIGZvciBzcGFjaW5nXG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiAjMzMzOyAvLyBBZGQgZGFyayB0ZXh0IGNvbG9yXG4gICAgfVxuXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyBBZGQgYSB3aGl0ZSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICBjb2xvcjogIzMzMzsgLy8gQWRkIGRhcmsgdGV4dCBjb2xvclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLy8gQWRkIGEgYm9yZGVyIGZvciBzdHlsaW5nXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7IC8vIEFkZCByb3VuZGVkIGNvcm5lcnNcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4OyAvLyBBZGQgcGFkZGluZyBmb3Igc3BhY2luZ1xuICAgIH1cbiAgYH08L3N0eWxlPlxuPC9BcG9sbG9Qcm92aWRlcj5cbik7XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==