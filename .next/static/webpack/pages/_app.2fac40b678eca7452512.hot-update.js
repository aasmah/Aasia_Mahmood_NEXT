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
          height: "150px",
          // Set a fixed height
          maxWidth: "100%",
          width: "90%" // Reduce width by 10%

        },
        src: "https://urchin-app-hi2hs.ondigitalocean.app/".concat(res.image.url),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }
      }, res.description)), __jsx("div", {
        className: "card-footer",
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
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
          lineNumber: 80,
          columnNumber: 17
        }
      }, "+ Add To Cart"))));
    }));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 12
      }
    }, "No Dishes");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kaXNoZXMuanMiXSwibmFtZXMiOlsiRGlzaGVzIiwicmVzdElkIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImFkZEl0ZW0iLCJHRVRfUkVTVEFVUkFOVF9ESVNIRVMiLCJncWwiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsInJlc3RhdXJhbnQiLCJkaXNoZXMiLCJtYXAiLCJyZXMiLCJtYXJnaW4iLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImhlaWdodCIsIm1heFdpZHRoIiwid2lkdGgiLCJpbWFnZSIsInVybCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsU0FBU0EsTUFBVCxPQUE0QjtBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSxrQkFDY0Msc0RBQVEsRUFEdEI7QUFBQSxNQUNuQkMsWUFEbUI7QUFBQSxNQUNMQyxlQURLOztBQUFBLG9CQUVOQyx3REFBVSxDQUFDQyxnREFBRCxDQUZKO0FBQUEsTUFFbEJDLE9BRmtCLGVBRWxCQSxPQUZrQjs7QUFJMUIsTUFBTUMscUJBQXFCLEdBQUdDLDBEQUFILG1CQUEzQjtBQWtCQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQXRCMEIsa0JBd0JPQywrREFBUSxDQUFDSixxQkFBRCxFQUF3QjtBQUMvREssYUFBUyxFQUFFO0FBQUVDLFFBQUUsRUFBRWI7QUFBTjtBQURvRCxHQUF4QixDQXhCZjtBQUFBLE1Bd0JsQmMsT0F4QmtCLGFBd0JsQkEsT0F4QmtCO0FBQUEsTUF3QlRDLEtBeEJTLGFBd0JUQSxLQXhCUztBQUFBLE1Bd0JGQyxJQXhCRSxhQXdCRkEsSUF4QkU7O0FBNEIxQixNQUFJRixPQUFKLEVBQWEsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNYLE1BQUksQ0FBQ0MsSUFBTCxFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUVYLE1BQUlDLFVBQVUsR0FBR0QsSUFBSSxDQUFDQyxVQUF0Qjs7QUFFQSxNQUFJakIsTUFBTSxHQUFHLENBQWIsRUFBZ0I7QUFDZCxXQUNFLG1FQUNHaUIsVUFBVSxDQUFDQyxNQUFYLENBQWtCQyxHQUFsQixDQUFzQixVQUFDQyxHQUFEO0FBQUEsYUFDckIsTUFBQyw4Q0FBRDtBQUFLLFVBQUUsRUFBQyxJQUFSO0FBQWEsVUFBRSxFQUFDLEdBQWhCO0FBQW9CLFVBQUUsRUFBQyxHQUF2QjtBQUEyQixVQUFFLEVBQUMsR0FBOUI7QUFBa0MsV0FBRyxFQUFFQSxHQUFHLENBQUNQLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLCtDQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQ0xRLGdCQUFNLEVBQUUsTUFESDtBQUVMQyxnQkFBTSxFQUFFLE1BRkg7QUFHTEMseUJBQWUsRUFBRSxNQUhaO0FBSUxDLGVBQUssRUFBRTtBQUpGLFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFFLE1BQUMsa0RBQUQ7QUFDRSxXQUFHLEVBQUUsSUFEUDtBQUVFLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFLE9BREg7QUFDWTtBQUNqQkMsa0JBQVEsRUFBRSxNQUZMO0FBR0xDLGVBQUssRUFBRSxLQUhGLENBR1M7O0FBSFQsU0FGVDtBQU9FLFdBQUcsd0RBQWlEUCxHQUFHLENBQUNRLEtBQUosQ0FBVUMsR0FBM0QsQ0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkYsRUFpQkUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVlULEdBQUcsQ0FBQ1UsSUFBaEIsQ0FERixFQUVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFXVixHQUFHLENBQUNXLFdBQWYsQ0FGRixDQWpCRixFQXFCRTtBQUNFLGlCQUFTLEVBQUMsYUFEWjtBQUVFLGFBQUssRUFBRTtBQUFFQyxpQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHdCQUFjLEVBQUU7QUFBbkMsU0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSUUsTUFBQyxpREFBRDtBQUFRLGFBQUssRUFBQyxTQUFkO0FBQXdCLGVBQU8sTUFBL0I7QUFBZ0MsZUFBTyxFQUFFO0FBQUEsaUJBQU0zQixPQUFPLENBQUNjLEdBQUQsQ0FBYjtBQUFBLFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsQ0FyQkYsQ0FERixDQURxQjtBQUFBLEtBQXRCLENBREgsQ0FERjtBQXNDRCxHQXZDRCxNQXVDTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEO0FBQ0Y7O0dBNUVRckIsTTtVQXNCUVcscUQsRUFFa0JDLHVEOzs7S0F4QjFCWixNO0FBOEVNQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJmYWM0MGI2NzhlY2E3NDUyNTEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBSb3csXG4gIENvbCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gRGlzaGVzKHsgcmVzdElkIH0pIHtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IHsgYWRkSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBjb25zdCBHRVRfUkVTVEFVUkFOVF9ESVNIRVMgPSBncWxgXG4gICAgcXVlcnkoJGlkOiBJRCEpIHtcbiAgICAgIHJlc3RhdXJhbnQoaWQ6ICRpZCkge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRpc2hlcyB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBuYW1lXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICBwcmljZVxuICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgIHVybFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVF9ESVNIRVMsIHtcbiAgICB2YXJpYWJsZXM6IHsgaWQ6IHJlc3RJZCB9LFxuICB9KTtcblxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUiBoZXJlPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgcmVzdGF1cmFudCA9IGRhdGEucmVzdGF1cmFudDtcblxuICBpZiAocmVzdElkID4gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7cmVzdGF1cmFudC5kaXNoZXMubWFwKChyZXMpID0+IChcbiAgICAgICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjNcIiBsZz1cIjNcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPENhcmRJbWdcbiAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBweFwiLCAvLyBTZXQgYSBmaXhlZCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjkwJVwiLCAvLyBSZWR1Y2Ugd2lkdGggYnkgMTAlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwLyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgPENhcmRUZXh0PntyZXMuZGVzY3JpcHRpb259PC9DYXJkVGV4dD5cbiAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtZm9vdGVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG91dGxpbmUgb25DbGljaz17KCkgPT4gYWRkSXRlbShyZXMpfT5cbiAgICAgICAgICAgICAgICAgICsgQWRkIFRvIENhcnRcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkpfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPk5vIERpc2hlczwvaDE+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc2hlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=