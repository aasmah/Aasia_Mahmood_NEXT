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
    className: "jsx-2789084868",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2789084868" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2789084868" + " " + "search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("h2", {
    style: {
      margin: 0,
      color: "white",
      textAlign: "left",
      fontWeight: "bold",
      backgroundColor: "black"
    },
    className: "jsx-2789084868",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, "TownTantalize"), __jsx("br", {
    className: "jsx-2789084868",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "append",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "Search"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return setQuery(e.target.value.toLowerCase());
    },
    value: query,
    className: "search-input",
    style: {
      backgroundColor: "white",
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }))), __jsx(_components_restaurantList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    search: query,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(_components_cart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2789084868",
    __self: this
  }, "#background.jsx-2789084868{background:url(\"https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg\") center/cover no-repeat;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;margin:0px;}.container.jsx-2789084868{width:100%;max-width:990px;background-color:rgba(255,255,255,0.10);padding:20px;box-shadow:0px 0px 10px rgba(0,0,0,0);}.search.jsx-2789084868{margin-bottom:20px;padding:10px;}h2.jsx-2789084868{font-size:24px;margin-bottom:10px;}.search-input.jsx-2789084868{width:100%;font-size:16px;background-color:white;border:2px solid #ccc;border-radius:4px;padding:5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NrQixBQUc2SSxBQVV2SCxBQVFRLEFBS0osQUFLSixXQWpCSyxBQWtCRCxJQUxJLElBTE4sT0FXVSxDQWxCb0IsS0FRN0MsRUFLQSxlQU13QixrQkFsQlQsSUFtQkssU0FsQnVCLFNBbUJ4QixpQkFDbkIsWUFuQkEsWUFkbUIsaUJBQ0osMEVBQ1UsbUdBQ0osNkZBQ1AsWUFFZixXQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NhcnRcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgUmVzdGF1cmFudExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVzdGF1cmFudExpc3RcIjtcbmltcG9ydCB7IElucHV0R3JvdXAsIElucHV0R3JvdXBBZGRvbiwgSW5wdXQgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBBUElfVVJMID0gXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGxpbmsgPSBuZXcgSHR0cExpbmsoeyB1cmk6IGAke0FQSV9VUkx9L2dyYXBocWxgIH0pO1xuICBjb25zdCBjYWNoZSA9IG5ldyBJbk1lbW9yeUNhY2hlKCk7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoeyBsaW5rLCBjYWNoZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8ZGl2IGlkPVwiYmFja2dyb3VuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOiAwLCBjb2xvcjogXCJ3aGl0ZVwiLCB0ZXh0QWxpZ246IFwibGVmdFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiAsIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wifX0+VG93blRhbnRhbGl6ZTwvaDI+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICAgIDxJbnB1dEdyb3VwQWRkb24gYWRkb25UeXBlPVwiYXBwZW5kXCI+U2VhcmNoPC9JbnB1dEdyb3VwQWRkb24+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIndoaXRlXCIsIGNvbG9yOiBcImJsYWNrXCIgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UmVzdGF1cmFudExpc3Qgc2VhcmNoPXtxdWVyeX0gLz5cbiAgICAgICAgICA8Q2FydCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjYmFja2dyb3VuZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcC91cGxvYWRzL2NlZjc5MDM3NzM5YjQ3YTE4MzA4NTk4YmQ2YTQyOTYyLmpwZ1wiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwcHhcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogOTkwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKTtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDApOyAvKiBBZGQgc29tZSBzaGFkb3cgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\pages\\\\index.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIkFQSV9VUkwiLCJ1c2VTdGF0ZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJjbGllbnQiLCJBcG9sbG9DbGllbnQiLCJtYXJnaW4iLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRXZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQ2QsTUFBTUMsT0FBTyxHQUFHLDZDQUFoQjs7QUFEYyxrQkFFWUMsc0RBQVEsQ0FBQyxFQUFELENBRnBCO0FBQUEsTUFFUEMsS0FGTztBQUFBLE1BRUFDLFFBRkE7O0FBR2QsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLENBQWE7QUFBRUMsT0FBRyxZQUFLTixPQUFMO0FBQUwsR0FBYixDQUFiO0FBQ0EsTUFBTU8sS0FBSyxHQUFHLElBQUlDLDREQUFKLEVBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBRU4sUUFBSSxFQUFKQSxJQUFGO0FBQVFHLFNBQUssRUFBTEE7QUFBUixHQUFqQixDQUFmO0FBRUEsU0FDRSxNQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUUsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVFLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFdBQUssRUFBRSxPQUFwQjtBQUE2QkMsZUFBUyxFQUFFLE1BQXhDO0FBQWdEQyxnQkFBVSxFQUFFLE1BQTVEO0FBQXFFQyxxQkFBZSxFQUFFO0FBQXRGLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkUsRUFHRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQWlCLGFBQVMsRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLGdEQUFEO0FBQ0UsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT2IsUUFBUSxDQUFDYSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxXQUFmLEVBQUQsQ0FBZjtBQUFBLEtBRFo7QUFFRSxTQUFLLEVBQUVqQixLQUZUO0FBR0UsYUFBUyxFQUFDLGNBSFo7QUFJRSxTQUFLLEVBQUU7QUFBRWEscUJBQWUsRUFBRSxPQUFuQjtBQUE0QkgsV0FBSyxFQUFFO0FBQW5DLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSEYsQ0FERixFQWNFLE1BQUMsa0VBQUQ7QUFBZ0IsVUFBTSxFQUFFVixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsRUFlRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRixDQURGLENBREY7QUFBQTtBQUFBO0FBQUEsMDJKQURGO0FBNkREOztHQXBFUUgsSTs7S0FBQUEsSTtBQXNFTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2U2MWM1ZjAwYzU3YTc5MmUxZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FydFwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIsIEFwb2xsb0NsaWVudCwgSHR0cExpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBSZXN0YXVyYW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdFwiO1xuaW1wb3J0IHsgSW5wdXRHcm91cCwgSW5wdXRHcm91cEFkZG9uLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHBcIjtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgbGluayA9IG5ldyBIdHRwTGluayh7IHVyaTogYCR7QVBJX1VSTH0vZ3JhcGhxbGAgfSk7XG4gIGNvbnN0IGNhY2hlID0gbmV3IEluTWVtb3J5Q2FjaGUoKTtcbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7IGxpbmssIGNhY2hlIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBtYXJnaW46IDAsIGNvbG9yOiBcIndoaXRlXCIsIHRleHRBbGlnbjogXCJsZWZ0XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiICwgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCJ9fT5Ub3duVGFudGFsaXplPC9oMj5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgICAgICAgPElucHV0R3JvdXBBZGRvbiBhZGRvblR5cGU9XCJhcHBlbmRcIj5TZWFyY2g8L0lucHV0R3JvdXBBZGRvbj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17cXVlcnl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZXN0YXVyYW50TGlzdCBzZWFyY2g9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxDYXJ0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNiYWNrZ3JvdW5kIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwL3VwbG9hZHMvY2VmNzkwMzc3MzliNDdhMTgzMDg1OThiZDZhNDI5NjIuanBnXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBtYXJnaW46IDBweFxuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiA5OTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMCk7IC8qIEFkZCBzb21lIHNoYWRvdyAqL1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=