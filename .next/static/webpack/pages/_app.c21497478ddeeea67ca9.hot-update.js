webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/restaurantList.js":
/*!**************************************!*\
  !*** ./components/restaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _dishes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dishes */ "./components/dishes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\restaurantList.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query {\n      restaurants {\n        id\n        name\n        description\n        image {\n          url\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







function RestaurantList(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      restaurantID = _useState[0],
      setRestaurantID = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      cart = _useContext.cart;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(cart),
      state = _useState2[0],
      setState = _useState2[1];

  var GET_RESTAURANTS = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["gql"])(_templateObject());

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_RESTAURANTS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "ERROR");
  if (!data) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Not found");
  var searchQuery = data.restaurants.filter(function (res) {
    return res.name.toLowerCase().includes(props.search);
  });
  var restId = searchQuery[0].id; // Define renderer for Dishes

  var renderDishes = function renderDishes(restaurantID) {
    return __jsx(_dishes__WEBPACK_IMPORTED_MODULE_3__["default"], {
      restId: restaurantID,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    });
  };

  if (searchQuery.length > 0) {
    var restList = searchQuery.map(function (res) {
      return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        xs: "20",
        sm: "6",
        md: "4",
        lg: "3",
        key: res.id,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 7
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
        className: "restaurant-card",
        style: {
          backgroundColor: "beige",
          color: "black"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
        top: true,
        className: "restaurant-image",
        src: 'https://urchin-app-hi2hs.ondigitalocean.app/' + res.image.url,
        style: {
          height: "200px",
          objectFit: "fill"
        } // Set the image size
        ,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        style: {
          padding: "10px",
          borderRadius: "5px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        className: "restaurant-title",
        style: {
          fontSize: "90%",
          color: "black",
          background: "lightgray",
          padding: "5px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        className: "restaurant-description",
        style: {
          fontSize: "90%",
          color: "black"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "grey" // Change color to "grey"
        ,
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        className: "restaurant-button",
        style: {
          backgroundColor: "black",
          color: "white",
          fontSize: "90%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, "View Menu"))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 12
      }
    }, "No Restaurants Found");
  }
}

_s(RestaurantList, "AG1Od7CGruCtgOneqAeKWk/inGw=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"]];
});

_c = RestaurantList;
/* harmony default export */ __webpack_exports__["default"] = (RestaurantList);

var _c;

$RefreshReg$(_c, "RestaurantList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwiaWQiLCJyZW5kZXJEaXNoZXMiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW1hZ2UiLCJ1cmwiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxDQUFELENBRG5CO0FBQUEsTUFDdEJDLFlBRHNCO0FBQUEsTUFDUkMsZUFEUTs7QUFBQSxvQkFFWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FGRTtBQUFBLE1BRXJCQyxJQUZxQixlQUVyQkEsSUFGcUI7O0FBQUEsbUJBR0hMLHNEQUFRLENBQUNLLElBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSTdCLE1BQU1DLGVBQWUsR0FBR0MsMERBQUgsbUJBQXJCOztBQUo2QixrQkFn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LFNBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1osR0FBRyxDQUFDcUIsV0FEUCxDQUpGLEVBT0UsTUFBQyxpREFBRDtBQUNFLGFBQUssRUFBQyxNQURSLENBQ2U7QUFEZjtBQUVFLGVBQU8sRUFBRTtBQUFBLGlCQUFNcEMsZUFBZSxDQUFDZSxHQUFHLENBQUNNLEVBQUwsQ0FBckI7QUFBQSxTQUZYO0FBR0UsaUJBQVMsRUFBQyxtQkFIWjtBQUlFLGFBQUssRUFBRTtBQUFFSyx5QkFBZSxFQUFFLE9BQW5CO0FBQTRCQyxlQUFLLEVBQUUsT0FBbkM7QUFBNENPLGtCQUFRLEVBQUU7QUFBdEQsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLENBUEYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBNkJBLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1WLFFBQU4sQ0FERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNRixZQUFZLENBQUN2QixZQUFELENBQWxCLENBRkYsQ0FERjtBQU1ELEdBcENELE1Bb0NPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFQO0FBQ0Q7QUFDRjs7R0F2RVFILGM7VUFnQjBCWSx1RDs7O0tBaEIxQlosYztBQXlFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMjE0OTc0NzhkZGVlZWE2N2NhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2xcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG5cbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCk7XG4gIH0pO1xuXG4gIGxldCByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcblxuICAvLyBEZWZpbmUgcmVuZGVyZXIgZm9yIERpc2hlc1xuICBjb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XG4gICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT48L0Rpc2hlcz4pO1xuICB9O1xuXG4gIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxuICAgICAgPENvbCB4cz1cIjIwXCIgc209XCI2XCIgbWQ9XCI0XCIgbGc9XCIzXCIga2V5PXtyZXMuaWR9PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWNhcmRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmVpZ2VcIiwgY29sb3I6IFwiYmxhY2tcIiB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1pbWFnZVwiXG4gICAgICAgICAgICBzcmM9eydodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwLycgKyByZXMuaW1hZ2UudXJsfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjIwMHB4XCIsIG9iamVjdEZpdDogXCJmaWxsXCIgfX0gLy8gU2V0IHRoZSBpbWFnZSBzaXplXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicmVzdGF1cmFudC10aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjkwJVwiLCBjb2xvcjogXCJibGFja1wiLCBiYWNrZ3JvdW5kOiBcImxpZ2h0Z3JheVwiLCBwYWRkaW5nOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICB7cmVzLm5hbWV9XG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOTAlXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgIHtyZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIiAvLyBDaGFuZ2UgY29sb3IgdG8gXCJncmV5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVzdGF1cmFudElEKHJlcy5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIGNvbG9yOiBcIndoaXRlXCIsIGZvbnRTaXplOiBcIjkwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgTWVudVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz57cmVzdExpc3R9PC9Sb3c+XG4gICAgICAgIDxSb3c+e3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfTwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPk5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9