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
          backgroundColor: "grey",
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
          padding: "10px"
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
        color: "hazard",
        outline: true // Change color to "grey"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXN0YXVyYW50TGlzdC5qcyJdLCJuYW1lcyI6WyJSZXN0YXVyYW50TGlzdCIsInByb3BzIiwidXNlU3RhdGUiLCJyZXN0YXVyYW50SUQiLCJzZXRSZXN0YXVyYW50SUQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJzdGF0ZSIsInNldFN0YXRlIiwiR0VUX1JFU1RBVVJBTlRTIiwiZ3FsIiwidXNlUXVlcnkiLCJsb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwic2VhcmNoUXVlcnkiLCJyZXN0YXVyYW50cyIsImZpbHRlciIsInJlcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VhcmNoIiwicmVzdElkIiwiaWQiLCJyZW5kZXJEaXNoZXMiLCJsZW5ndGgiLCJyZXN0TGlzdCIsIm1hcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaW1hZ2UiLCJ1cmwiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJiYWNrZ3JvdW5kIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUEsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQyxDQUFELENBRG5CO0FBQUEsTUFDdEJDLFlBRHNCO0FBQUEsTUFDUkMsZUFEUTs7QUFBQSxvQkFFWkMsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FGRTtBQUFBLE1BRXJCQyxJQUZxQixlQUVyQkEsSUFGcUI7O0FBQUEsbUJBR0hMLHNEQUFRLENBQUNLLElBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBSTdCLE1BQU1DLGVBQWUsR0FBR0MsMERBQUgsbUJBQXJCOztBQUo2QixrQkFn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LFNBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR1osR0FBRyxDQUFDcUIsV0FEUCxDQUpGLEVBT0UsTUFBQyxpREFBRDtBQUNFLGFBQUssRUFBQyxRQURSO0FBQ2lCLGVBQU8sTUFEeEIsQ0FDeUI7QUFEekI7QUFFRSxlQUFPLEVBQUU7QUFBQSxpQkFBTXBDLGVBQWUsQ0FBQ2UsR0FBRyxDQUFDTSxFQUFMLENBQXJCO0FBQUEsU0FGWDtBQUdFLGlCQUFTLEVBQUMsbUJBSFo7QUFJRSxhQUFLLEVBQUU7QUFBRUsseUJBQWUsRUFBRSxPQUFuQjtBQUE0QkMsZUFBSyxFQUFFLE9BQW5DO0FBQTRDTyxrQkFBUSxFQUFFO0FBQXRELFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixDQVBGLENBREYsQ0FEK0I7QUFBQSxLQUFoQixDQUFqQjtBQTZCQSxXQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNVixRQUFOLENBREYsRUFFRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTUYsWUFBWSxDQUFDdkIsWUFBRCxDQUFsQixDQUZGLENBREY7QUFNRCxHQXBDRCxNQW9DTztBQUNMLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBUDtBQUNEO0FBQ0Y7O0dBdkVRSCxjO1VBZ0IwQlksdUQ7OztLQWhCMUJaLGM7QUF5RU1BLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWJhOGU3NTBlNjRkNTA1OTY3MmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgRGlzaGVzIGZyb20gXCIuL2Rpc2hlc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkVGV4dCxcbiAgQ2FyZFRpdGxlLFxuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmZ1bmN0aW9uIFJlc3RhdXJhbnRMaXN0KHByb3BzKSB7XG4gIGNvbnN0IFtyZXN0YXVyYW50SUQsIHNldFJlc3RhdXJhbnRJRF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGNhcnQpO1xuICBjb25zdCBHRVRfUkVTVEFVUkFOVFMgPSBncWxgXG4gICAgcXVlcnkge1xuICAgICAgcmVzdGF1cmFudHMge1xuICAgICAgICBpZFxuICAgICAgICBuYW1lXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIGltYWdlIHtcbiAgICAgICAgICB1cmxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1JFU1RBVVJBTlRTKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RVJST1I8L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5Ob3QgZm91bmQ8L3A+O1xuXG4gIGxldCBzZWFyY2hRdWVyeSA9IGRhdGEucmVzdGF1cmFudHMuZmlsdGVyKChyZXMpID0+IHtcbiAgICByZXR1cm4gcmVzLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhwcm9wcy5zZWFyY2gpO1xuICB9KTtcblxuICBsZXQgcmVzdElkID0gc2VhcmNoUXVlcnlbMF0uaWQ7XG5cbiAgLy8gRGVmaW5lIHJlbmRlcmVyIGZvciBEaXNoZXNcbiAgY29uc3QgcmVuZGVyRGlzaGVzID0gKHJlc3RhdXJhbnRJRCkgPT4ge1xuICAgIHJldHVybiAoPERpc2hlcyByZXN0SWQ9e3Jlc3RhdXJhbnRJRH0+PC9EaXNoZXM+KTtcbiAgfTtcblxuICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlc3RMaXN0ID0gc2VhcmNoUXVlcnkubWFwKChyZXMpID0+IChcbiAgICAgIDxDb2wgeHM9XCIyMFwiIHNtPVwiNlwiIG1kPVwiNFwiIGxnPVwiM1wiIGtleT17cmVzLmlkfT5cbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1jYXJkXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcImdyZXlcIiwgY29sb3I6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgdG9wPXt0cnVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1pbWFnZVwiXG4gICAgICAgICAgICBzcmM9eydodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwLycgKyByZXMuaW1hZ2UudXJsfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjIwMHB4XCIsIG9iamVjdEZpdDogXCJmaWxsXCIgfX0gLy8gU2V0IHRoZSBpbWFnZSBzaXplXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIsIGJvcmRlclJhZGl1czogXCI1cHhcIiB9fT5cbiAgICAgICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwicmVzdGF1cmFudC10aXRsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjkwJVwiLCBjb2xvcjogXCJibGFja1wiLCBiYWNrZ3JvdW5kOiBcImxpZ2h0Z3JheVwiLCBwYWRkaW5nOiBcIjEwcHhcIiB9fT5cbiAgICAgICAgICAgICAge3Jlcy5uYW1lfVxuICAgICAgICAgICAgPC9DYXJkVGl0bGU+XG4gICAgICAgICAgICA8Q2FyZFRleHQgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1kZXNjcmlwdGlvblwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjkwJVwiLCBjb2xvcjogXCJibGFja1wiIH19PlxuICAgICAgICAgICAgICB7cmVzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9DYXJkVGV4dD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJoYXphcmRcIiBvdXRsaW5lIC8vIENoYW5nZSBjb2xvciB0byBcImdyZXlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRSZXN0YXVyYW50SUQocmVzLmlkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdGF1cmFudC1idXR0b25cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgY29sb3I6IFwid2hpdGVcIiwgZm9udFNpemU6IFwiOTAlXCIgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBNZW51XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbD5cbiAgICApKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PntyZXN0TGlzdH08L1Jvdz5cbiAgICAgICAgPFJvdz57cmVuZGVyRGlzaGVzKHJlc3RhdXJhbnRJRCl9PC9Sb3c+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiA8aDE+Tm8gUmVzdGF1cmFudHMgRm91bmQ8L2gxPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=