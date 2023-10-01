webpackHotUpdate_N_E("pages/index",{

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
          objectFit: "cover"
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
          color: "black"
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
          backgroundColor: "grey",
          color: "black",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwiaWQiLCJyZW5kZXJEaXNoZXMiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW1hZ2UiLCJ1cmwiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFZQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLENBQUQsQ0FEbkI7QUFBQSxNQUN0QkMsWUFEc0I7QUFBQSxNQUNSQyxlQURROztBQUFBLG9CQUVaQyx3REFBVSxDQUFDQyxnREFBRCxDQUZFO0FBQUEsTUFFckJDLElBRnFCLGVBRXJCQSxJQUZxQjs7QUFBQSxtQkFHSEwsc0RBQVEsQ0FBQ0ssSUFBRCxDQUhMO0FBQUEsTUFHdEJDLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFJN0IsTUFBTUMsZUFBZSxHQUFHQywwREFBSCxtQkFBckI7O0FBSjZCLGtCQWdCSUMsK0RBQVEsQ0FB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RFAsQ0FKRixFQU9FLE1BQUMsaURBQUQ7QUFDRSxhQUFLLEVBQUMsTUFEUixDQUNlO0FBRGY7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTW5DLGVBQWUsQ0FBQ2UsR0FBRyxDQUFDTSxFQUFMLENBQXJCO0FBQUEsU0FGWDtBQUdFLGlCQUFTLEVBQUMsbUJBSFo7QUFJRSxhQUFLLEVBQUU7QUFBRUsseUJBQWUsRUFBRSxNQUFuQjtBQUEyQkMsZUFBSyxFQUFFLE9BQWxDO0FBQTJDTyxrQkFBUSxFQUFFO0FBQXJELFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixDQVBGLENBREYsQ0FEK0I7QUFBQSxLQUFoQixDQUFqQjtBQTZCQSxXQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNVixRQUFOLENBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUYsWUFBWSxDQUFDdkIsWUFBRCxDQUFsQixDQUZGLENBREY7QUFNRCxHQXBDRCxNQW9DTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBUDtBQUNEO0FBQ0Y7O0dBdkVRSCxjO1VBZ0IwQlksdUQ7OztLQWhCMUJaLGM7QUF5RU1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNTkxYjUxNGM4NDhkZmM4ZmYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IERpc2hlcyBmcm9tIFwiLi9kaXNoZXNcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEltZyxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5mdW5jdGlvbiBSZXN0YXVyYW50TGlzdChwcm9wcykge1xuICBjb25zdCBbcmVzdGF1cmFudElELCBzZXRSZXN0YXVyYW50SURdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHsgY2FydCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShjYXJ0KTtcbiAgY29uc3QgR0VUX1JFU1RBVVJBTlRTID0gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHJlc3RhdXJhbnRzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbmFtZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICBpbWFnZSB7XG4gICAgICAgICAgdXJsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGA7XG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9SRVNUQVVSQU5UUyk7XG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVSUk9SPC9wPjtcbiAgaWYgKCFkYXRhKSByZXR1cm4gPHA+Tm90IGZvdW5kPC9wPjtcblxuICBsZXQgc2VhcmNoUXVlcnkgPSBkYXRhLnJlc3RhdXJhbnRzLmZpbHRlcigocmVzKSA9PiB7XG4gICAgcmV0dXJuIHJlcy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocHJvcHMuc2VhcmNoKTtcbiAgfSk7XG5cbiAgbGV0IHJlc3RJZCA9IHNlYXJjaFF1ZXJ5WzBdLmlkO1xuXG4gIC8vIERlZmluZSByZW5kZXJlciBmb3IgRGlzaGVzXG4gIGNvbnN0IHJlbmRlckRpc2hlcyA9IChyZXN0YXVyYW50SUQpID0+IHtcbiAgICByZXR1cm4gKDxEaXNoZXMgcmVzdElkPXtyZXN0YXVyYW50SUR9PjwvRGlzaGVzPik7XG4gIH07XG5cbiAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCByZXN0TGlzdCA9IHNlYXJjaFF1ZXJ5Lm1hcCgocmVzKSA9PiAoXG4gICAgICA8Q29sIHhzPVwiMTJcIiBzbT1cIjZcIiBtZD1cIjRcIiBsZz1cIjNcIiBrZXk9e3Jlcy5pZH0+XG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtY2FyZFwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJiZWlnZVwiLCBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgIDxDYXJkSW1nXG4gICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWltYWdlXCJcbiAgICAgICAgICAgIHNyYz17J2h0dHBzOi8vdXJjaGluLWFwcC1oaTJocy5vbmRpZ2l0YWxvY2Vhbi5hcHAvJyArIHJlcy5pbWFnZS51cmx9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX0gLy8gU2V0IHRoZSBpbWFnZSBzaXplXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicmVzdGF1cmFudC10aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjkwJVwiLCBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICB7cmVzLm5hbWV9XG4gICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgIDxDYXJkVGV4dCBjbGFzc05hbWU9XCJyZXN0YXVyYW50LWRlc2NyaXB0aW9uXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiOTAlXCIsIGNvbG9yOiBcImJsYWNrXCIgfX0+XG4gICAgICAgICAgICAgIHtyZXMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICA8L0NhcmRUZXh0PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjb2xvcj1cImdyZXlcIiAvLyBDaGFuZ2UgY29sb3IgdG8gXCJncmV5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UmVzdGF1cmFudElEKHJlcy5pZCl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3RhdXJhbnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwiOTAlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBNZW51XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PntyZXN0TGlzdH08L1Jvdz5cbiAgICAgICAgPFJvdz57cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9PC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8aDE+Tm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=