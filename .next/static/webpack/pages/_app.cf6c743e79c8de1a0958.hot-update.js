webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/cart.js":
/*!****************************!*\
  !*** ./components/cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\cart.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Cart() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      cart = _useContext.cart,
      addItem = _useContext.addItem,
      removeItem = _useContext.removeItem;

  var renderItems = function renderItems() {
    if (cart.items.length > 0) {
      var itemList = cart.items.map(function (item) {
        if (item.quantity > 0) {
          return __jsx("div", {
            className: "items-one",
            style: {
              marginBottom: 10,
              backgroundColor: "#f4f4f4",
              padding: "8px",
              borderRadius: "5px",
              color: "#333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            },
            key: item.id,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 13
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }
          }, __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }
          }, item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }
          }, "$", item.price), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 25,
              marginLeft: 10,
              backgroundColor: "#333",
              color: "#fff"
            },
            onClick: function onClick() {
              return removeItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }
          }, "-"), __jsx("span", {
            style: {
              marginLeft: 5
            },
            id: "item-quantity",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }
          }, item.quantity, "x"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            style: {
              height: 25,
              padding: 0,
              width: 25,
              marginLeft: 5,
              backgroundColor: "#333",
              color: "#fff"
            },
            onClick: function onClick() {
              return addItem(item);
            },
            color: "link",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }
          }, "+")));
        }

        return null; // Return null for items with quantity 0
      });
      return itemList;
    } else {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 14
        }
      });
    }
  };

  var checkoutItems = function checkoutItems() {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      style: {
        width: 100,
        padding: 5,
        backgroundColor: "#f4f4f4",
        borderRadius: "5px",
        color: "#333"
      },
      color: "light",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, __jsx("h5", {
      style: {
        fontWeight: 100
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, "Total:"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/checkout/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: {
        width: "60%",
        backgroundColor: "black",
        color: "#fff",
        marginTop: "20px"
      },
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "Order"))));
  };

  return __jsx("div", {
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "300px",
      position: "fixed",
      top: "150px",
      left: "20px",
      // Adjust the left position
      backgroundColor: "#f4f4f4"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    style: {
      padding: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 40
    },
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, checkoutItems()))), __jsx("h2", {
    style: {
      position: "fixed",
      top: "150px",
      left: "50px"
    },
    className: "jsx-1877095781",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, "Cart"), " ", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1877095781",
    __self: this
  }, "#item-price.jsx-1877095781{font-size:1.1em;}#item-quantity.jsx-1877095781{font-size:0.9em;padding-bottom:4px;}#item-name.jsx-1877095781{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ja0IsQUFHMkIsQUFHQSxBQUlGLGNBQ2hCLEVBUEEsQUFHcUIsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBDYXJ0KCkge1xuICBsZXQgeyBjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+JHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBmb3IgaXRlbXMgd2l0aCBxdWFudGl0eSAwXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmFkZ2VcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0L1wiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENhcmRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgdG9wOiBcIjE1MHB4XCIsXG4gICAgICAgICAgbGVmdDogXCIyMHB4XCIsIC8vIEFkanVzdCB0aGUgbGVmdCBwb3NpdGlvblxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcnRcIlxuICAgICAgPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PntyZW5kZXJJdGVtcygpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2NoZWNrb3V0SXRlbXMoKX08L2Rpdj5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxoMiBzdHlsZT17eyBwb3NpdGlvbjogXCJmaXhlZFwiLCB0b3A6IFwiMTUwcHhcIiwgbGVmdDogXCI1MHB4XCIgfX0+Q2FydDwvaDI+IHsvKiBNb3ZlIHRoZSBDYXJ0IGhlYWRpbmcgKi99XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\cart.js */"));
}

_s(Cart, "NqwptfjMDWaYq9bW6jPEck0eFpI=");

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

var _c;

$RefreshReg$(_c, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luTGVmdCIsImNoZWNrb3V0SXRlbXMiLCJmb250V2VpZ2h0IiwidG90YWwiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDc0JDLHdEQUFVLENBQUNDLGdEQUFELENBRGhDO0FBQUEsTUFDUkMsSUFEUSxlQUNSQSxJQURRO0FBQUEsTUFDRkMsT0FERSxlQUNGQSxPQURFO0FBQUEsTUFDT0MsVUFEUCxlQUNPQSxVQURQOztBQUdkLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSUgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsVUFBTUMsUUFBUSxHQUFHTixJQUFJLENBQUNJLEtBQUwsQ0FBV0csR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QyxZQUFJQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsaUJBQ0U7QUFDRSxxQkFBUyxFQUFDLFdBRFo7QUFFRSxp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QUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1QLFdBQVcsRUFBakIsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNcUIsYUFBYSxFQUFuQixDQUxGLENBWkYsQ0FERixFQXFCRTtBQUFJLFNBQUssRUFBRTtBQUFFSSxjQUFRLEVBQUUsT0FBWjtBQUFxQkMsU0FBRyxFQUFFLE9BQTFCO0FBQW1DQyxVQUFJLEVBQUU7QUFBekMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQkY7QUFBQTtBQUFBO0FBQUEsaXNNQURGO0FBcUNEOztHQTVJUWpDLEk7O0tBQUFBLEk7QUE4SU1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2Y2Yzc0M2U3OWM4ZGUxYTA5NTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIGl0ZW1zIHdpdGggcXVhbnRpdHkgMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxDYXJkXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgIHRvcDogXCIxNTBweFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMjBweFwiLCAvLyBBZGp1c3QgdGhlIGxlZnQgcG9zaXRpb25cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJjYXJ0XCJcbiAgICAgID5cbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTUgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cmVuZGVySXRlbXMoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjaGVja291dEl0ZW1zKCl9PC9kaXY+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8aDIgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgdG9wOiBcIjE1MHB4XCIsIGxlZnQ6IFwiNTBweFwiIH19PkNhcnQ8L2gyPiB7LyogTW92ZSB0aGUgQ2FydCBoZWFkaW5nICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9