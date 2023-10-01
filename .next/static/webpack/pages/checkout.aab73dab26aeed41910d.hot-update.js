webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/cardSection.js":
false,

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
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
var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\checkoutForm.js",
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
        width: 200,
        padding: 10,
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
        // Change button color to black
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
    style: {
      backgroundColor: "#f8f8f8",
      // Set light background color for the page
      minHeight: "100vh",
      // Ensure the background color covers the entire viewport
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, "Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "300px",
      // Adjust the width to make it smaller
      backgroundColor: "#f4f4f4"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    style: {
      padding: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 6
    },
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, checkoutItems()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2907605029",
    __self: this
  }, "#item-price.jsx-2907605029{font-size:1.1em;}#item-quantity.jsx-2907605029{font-size:0.9em;padding-bottom:4px;}#item-name.jsx-2907605029{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlrQixBQUcyQixBQUdBLEFBSUYsY0FDaEIsRUFQQSxBQUdxQixtQkFDckIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIGl0ZW1zIHdpdGggcXVhbnRpdHkgMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCAvLyBDaGFuZ2UgYnV0dG9uIGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIiwgLy8gU2V0IGxpZ2h0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBwYWdlXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLCAvLyBFbnN1cmUgdGhlIGJhY2tncm91bmQgY29sb3IgY292ZXJzIHRoZSBlbnRpcmUgdmlld3BvcnRcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICA8Q2FyZFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsIC8vIEFkanVzdCB0aGUgd2lkdGggdG8gbWFrZSBpdCBzbWFsbGVyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FydFwiXG4gICAgICA+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cmVuZGVySXRlbXMoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjaGVja291dEl0ZW1zKCl9PC9kaXY+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07IC8vIEFkanVzdCB0aGUgZm9udCBzaXplXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\checkoutForm.js */"));
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false,

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/js-cookie/src/js.cookie.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2FydCIsInVzZUNvbnRleHQiLCJBcHBDb250ZXh0IiwiY2FydCIsImFkZEl0ZW0iLCJyZW1vdmVJdGVtIiwicmVuZGVySXRlbXMiLCJpdGVtcyIsImxlbmd0aCIsIml0ZW1MaXN0IiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImlkIiwibmFtZSIsInByaWNlIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0IiwiY2hlY2tvdXRJdGVtcyIsImZvbnRXZWlnaHQiLCJ0b3RhbCIsIm1hcmdpblRvcCIsIm1pbkhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDc0JDLHdEQUFVLENBQUNDLGdEQUFELENBRGhDO0FBQUEsTUFDUkMsSUFEUSxlQUNSQSxJQURRO0FBQUEsTUFDRkMsT0FERSxlQUNGQSxPQURFO0FBQUEsTUFDT0MsVUFEUCxlQUNPQSxVQURQOztBQUdkLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSUgsSUFBSSxDQUFDSSxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsVUFBTUMsUUFBUSxHQUFHTixJQUFJLENBQUNJLEtBQUwsQ0FBV0csR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtBQUN4QyxZQUFJQSxJQUFJLENBQUNDLFFBQUwsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckIsaUJBQ0U7QUFDRSxxQkFBUyxF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RixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyxtREFBRDtBQUFVLFNBQUssRUFBRTtBQUFFbEIsYUFBTyxFQUFFO0FBQVgsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVGLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1QLFdBQVcsRUFBakIsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNcUIsYUFBYSxFQUFuQixDQUxGLENBVEYsQ0FYRjtBQUFBO0FBQUE7QUFBQSx5a05BREY7QUEyQ0Q7O0dBbEpRM0IsSTs7S0FBQUEsSTtBQW9KTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuYWFiNzNkYWIyNmFlZWQ0MTkxMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIGl0ZW1zIHdpdGggcXVhbnRpdHkgMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCAvLyBDaGFuZ2UgYnV0dG9uIGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmOGY4ZjhcIiwgLy8gU2V0IGxpZ2h0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBwYWdlXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLCAvLyBFbnN1cmUgdGhlIGJhY2tncm91bmQgY29sb3IgY292ZXJzIHRoZSBlbnRpcmUgdmlld3BvcnRcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8aDE+Q2FydDwvaDE+XG4gICAgICA8Q2FyZFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsIC8vIEFkanVzdCB0aGUgd2lkdGggdG8gbWFrZSBpdCBzbWFsbGVyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FydFwiXG4gICAgICA+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDEwIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cmVuZGVySXRlbXMoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjaGVja291dEl0ZW1zKCl9PC9kaXY+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07IC8vIEFkanVzdCB0aGUgZm9udCBzaXplXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=