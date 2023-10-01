webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dishes.js":
/*!******************************!*\
  !*** ./components/dishes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\dishes.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query($id: ID!) {\n      restaurant(id: $id) {\n        id\n        name\n        dishes {\n          id\n          name\n          description\n          price\n          image {\n            url\n          }\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function Dishes(_ref) {
  _s();

  var _this = this;

  var restId = _ref.restId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      addItem = _useContext.addItem;

  var GET_RESTAURANT_DISHES = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(GET_RESTAURANT_DISHES, {
    variables: {
      id: restId
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, "ERROR here");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Not found");
  var restaurant = data.restaurant;

  if (restId > 0) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, restaurant.dishes.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "12",
        sm: "6",
        md: "3",
        lg: "3",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        style: {
          margin: "10px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
        top: true,
        style: {
          height: "auto",
          maxWidth: "100%",
          width: "100%"
        },
        src: "https://urchin-app-hi2hs.ondigitalocean.app/".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center" // Center content horizontally

        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        style: {
          background: "beige",
          color: "black",
          fontSize: "90%",
          padding: "5px 10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        style: {
          color: "white",
          // Change description text color to white
          fontSize: "90%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }
      }, res.description), __jsx("div", {
        className: "card-footer",
        style: {
          display: "flex",
          justifyContent: "center" // Center content horizontally

        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "primary",
        outline: true,
        onClick: function onClick() {
          return addItem(res);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 19
        }
      }, "+ Add To Cart")))));
    }));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 12
      }
    }, "Click to view menu");
  }
}

_s(Dishes, "en1oChIBvPo9BEyUmlI7ItVhHWA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Dishes;
/* harmony default export */ __webpack_exports__["default"] = (Dishes);

var _c;

$RefreshReg$(_c, "Dishes");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJHRVRfUkVTVEFVUkFOVF9ESVNIRVMiLCJncWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlc3RhdXJhbnQiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJtYXJnaW4iLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImhlaWdodCIsIm1heFdpZHRoIiwid2lkdGgiLCJpbWFnZSIsInVybCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmQiLCJmb250U2l6ZSIsInBhZGRpbmciLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDY0Msc0RBQVEsRUFEdEI7QUFBQSxNQUNuQkMsWUFEbUI7QUFBQSxNQUNMQyxlQURLOztBQUFBLG9CQUVOQyx3REFBVSxDQUFDQyxnREFBRCxDQUZKO0FBQUEsTUFFbEJDLE9BRmtCLGVBRWxCQSxPQUZrQjs7QUFJMUIsTUFBTUMscUJBQXFCLEdBQUdDLDBEQUFILG1CQUEzQjtBQWtCQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQXRCMEIsa0JBd0JPQywrREFBUSxDQUFDSixxQkFBRCxFQUF3QjtBQUMvREssYUFBUyxFQUFF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QUFBQSx5QkFQRixDQXpCRixDQWpCRixDQURGLENBRHFCO0FBQUEsS0FBdEIsQ0FESCxDQURGO0FBK0RELEdBaEVELE1BZ0VPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFQO0FBQ0Q7QUFDRjs7R0FyR1FyQixNO1VBc0JRVyxxRCxFQUVrQkMsdUQ7OztLQXhCMUJaLE07QUF1R01BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDQxOTQ3OWRjYjY0ZDU1MGNhZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIFJvdyxcbiAgQ29sLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBEaXNoZXMoeyByZXN0SWQgfSkge1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgeyBhZGRJdGVtIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UX0RJU0hFUyA9IGdxbGBcbiAgICBxdWVyeSgkaWQ6IElEISkge1xuICAgICAgcmVzdGF1cmFudChpZDogJGlkKSB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGlzaGVzIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHByaWNlXG4gICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgdXJsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UX0RJU0hFUywge1xuICAgIHZhcmlhYmxlczogeyBpZDogcmVzdElkIH0sXG4gIH0pO1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SIGhlcmU8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCByZXN0YXVyYW50ID0gZGF0YS5yZXN0YXVyYW50O1xuXG4gIGlmIChyZXN0SWQgPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtyZXN0YXVyYW50LmRpc2hlcy5tYXAoKHJlcykgPT4gKFxuICAgICAgICAgIDxDb2wgeHM9XCIxMlwiIHNtPVwiNlwiIG1kPVwiM1wiIGxnPVwiM1wiIGtleT17cmVzLmlkfT5cbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgIHRvcD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvJHtyZXMuaW1hZ2UudXJsfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDYXJkQm9keVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCAvLyBDZW50ZXIgY29udGVudCBob3Jpem9udGFsbHlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJiZWlnZVwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI1cHggMTBweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcmRUZXh0XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLCAvLyBDaGFuZ2UgZGVzY3JpcHRpb24gdGV4dCBjb2xvciB0byB3aGl0ZVxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI5MCVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgLy8gQ2VudGVyIGNvbnRlbnQgaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgb3V0bGluZSBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKHJlcyl9PlxuICAgICAgICAgICAgICAgICAgICArIEFkZCBUbyBDYXJ0XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8aDE+Q2xpY2sgdG8gdmlldyBtZW51PC9oMT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzaGVzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==