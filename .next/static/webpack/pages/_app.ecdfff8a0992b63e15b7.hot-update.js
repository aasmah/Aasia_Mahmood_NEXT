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
        xs: "12",
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
          backgroundColor: "black",
          color: "white"
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
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
        style: {
          backgroundColor: "#f8f8f8",
          padding: "10px",
          borderRadius: "5px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
        className: "restaurant-title",
        style: {
          fontSize: "90%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, res.name), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
        className: "restaurant-description",
        style: {
          fontSize: "90%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      }, res.description), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        color: "black" // Change color to "black"
        ,
        onClick: function onClick() {
          return setRestaurantID(res.id);
        },
        className: "restaurant-button",
        style: {
          backgroundColor: "black",
          fontSize: "90%"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, "View Menu"))));
    });
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, restList), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, renderDishes(restaurantID)));
  } else {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwiaWQiLCJyZW5kZXJEaXNoZXMiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW1hZ2UiLCJ1cmwiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxlQURROztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHSEwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFJN0IsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSjZCLGtCQWdCSUMsK0RBQVEsQ0FBQ0YsZUFBRCxDQWhCWjtBQUFBLE1B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QUFBLFNBRlg7QUFHRSxpQkFBUyxFQUFDLG1CQUhaO0FBSUUsYUFBSyxFQUFFO0FBQUVLLHlCQUFlLEVBQUUsT0FBbkI7QUFBNEJNLGtCQUFRLEVBQUU7QUFBdEMsU0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLENBTkYsQ0FERixDQUQrQjtBQUFBLEtBQWhCLENBQWpCO0FBNEJBLFdBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU1SLFFBQU4sQ0FERixFQUVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNRixZQUFZLENBQUN2QixZQUFELENBQWxCLENBRkYsQ0FERjtBQU1ELEdBbkNELE1BbUNPO0FBQ0wsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUFQO0FBQ0Q7QUFDRjs7R0F0RVFILGM7VUFnQjBCWSx1RDs7O0tBaEIxQlosYztBQXdFTUEsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lY2RmZmY4YTA5OTJiNjNlMTViNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBEaXNoZXMgZnJvbSBcIi4vZGlzaGVzXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCB7XG4gIEJ1dHRvbixcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2xcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZnVuY3Rpb24gUmVzdGF1cmFudExpc3QocHJvcHMpIHtcbiAgY29uc3QgW3Jlc3RhdXJhbnRJRCwgc2V0UmVzdGF1cmFudElEXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB7IGNhcnQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoY2FydCk7XG4gIGNvbnN0IEdFVF9SRVNUQVVSQU5UUyA9IGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICByZXN0YXVyYW50cyB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgO1xuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VRdWVyeShHRVRfUkVTVEFVUkFOVFMpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FUlJPUjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vdCBmb3VuZDwvcD47XG5cbiAgbGV0IHNlYXJjaFF1ZXJ5ID0gZGF0YS5yZXN0YXVyYW50cy5maWx0ZXIoKHJlcykgPT4ge1xuICAgIHJldHVybiByZXMubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHByb3BzLnNlYXJjaCk7XG4gIH0pO1xuXG4gIGxldCByZXN0SWQgPSBzZWFyY2hRdWVyeVswXS5pZDtcblxuICAvLyBEZWZpbmUgcmVuZGVyZXIgZm9yIERpc2hlc1xuICBjb25zdCByZW5kZXJEaXNoZXMgPSAocmVzdGF1cmFudElEKSA9PiB7XG4gICAgcmV0dXJuICg8RGlzaGVzIHJlc3RJZD17cmVzdGF1cmFudElEfT48L0Rpc2hlcz4pO1xuICB9O1xuXG4gIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVzdExpc3QgPSBzZWFyY2hRdWVyeS5tYXAoKHJlcykgPT4gKFxuICAgICAgPENvbCB4cz1cIjEyXCIgc209XCI2XCIgbWQ9XCI0XCIgbGc9XCIzXCIga2V5PXtyZXMuaWR9PlxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWNhcmRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1pbWFnZVwiXG4gICAgICAgICAgICBzcmM9eydodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwLycgKyByZXMuaW1hZ2UudXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZjhmOGY4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICA8Q2FyZFRpdGxlIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtdGl0bGVcIiBzdHlsZT17eyBmb250U2l6ZTogXCI5MCVcIiB9fT5cbiAgICAgICAgICAgICAge3Jlcy5uYW1lfVxuICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1kZXNjcmlwdGlvblwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjkwJVwiIH19PlxuICAgICAgICAgICAgICB7cmVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJibGFja1wiIC8vIENoYW5nZSBjb2xvciB0byBcImJsYWNrXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVzdGF1cmFudElEKHJlcy5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjkwJVwiIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgTWVudVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db2w+XG4gICAgKSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz57cmVzdExpc3R9PC9Sb3c+XG4gICAgICAgIDxSb3c+e3JlbmRlckRpc2hlcyhyZXN0YXVyYW50SUQpfTwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGgxPk5vIFJlc3RhdXJhbnRzIEZvdW5kPC9oMT47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9