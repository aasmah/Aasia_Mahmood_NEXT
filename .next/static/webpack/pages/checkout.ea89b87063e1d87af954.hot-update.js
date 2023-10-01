webpackHotUpdate_N_E("pages/checkout",{

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

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      isAuthenticated = _useContext2.isAuthenticated;

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
              lineNumber: 15,
              columnNumber: 13
            }
          }, __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }
          }, __jsx("span", {
            id: "item-name",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }
          }, item.name)), __jsx("div", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }
          }, __jsx("span", {
            id: "item-price",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
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
              lineNumber: 34,
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
              lineNumber: 48,
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
              lineNumber: 51,
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
          lineNumber: 73,
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
        lineNumber: 79,
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
        lineNumber: 80,
        columnNumber: 9
      }
    }, __jsx("h5", {
      style: {
        fontWeight: 100
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, "Total:"), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, "$", cart.total)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/checkout/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
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
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, "Order"))));
  };

  return __jsx("div", {
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "400px",
      // Adjust the width to make it smaller
      position: "fixed",
      // Position the card on the right side
      top: "150px",
      // Adjust the top position
      right: "20px",
      // Adjust the right position
      backgroundColor: "#f4f4f4"
    },
    className: "cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, "  ", __jsx("h2", {
    style: {
      margin: 10
    },
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 10
    }
  }, "Cart"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    style: {
      margin: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "Your Order:"), __jsx("hr", {
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    style: {
      padding: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      marginBottom: 40
    },
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-2967537418",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, checkoutItems()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2967537418",
    __self: this
  }, ".cart.jsx-2967537418{font-size:36px;font-family:\"Your-Preferred-Font\",sans-serif;font-weight:bold;}#item-price.jsx-2967537418{font-size:1.1em;}#item-quantity.jsx-2967537418{font-size:0.9em;padding-bottom:4px;}#item-name.jsx-2967537418{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNJa0IsQUFHOEIsQUFLSCxBQUdBLEFBSUYsY0FDaEIsQ0Fab0QsQ0FLcEQsQUFHcUIsbUJBQ3JCLHlCQVJ1QixpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGNhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCB7IGNhcnQsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAgIFxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIGl0ZW1zIHdpdGggcXVhbnRpdHkgMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIC8vIENoYW5nZSBidXR0b24gY29sb3IgdG8gYmxhY2tcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxDYXJkXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiNDAwcHhcIiwgLy8gQWRqdXN0IHRoZSB3aWR0aCB0byBtYWtlIGl0IHNtYWxsZXJcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLCAvLyBQb3NpdGlvbiB0aGUgY2FyZCBvbiB0aGUgcmlnaHQgc2lkZVxuICAgICAgICAgIHRvcDogXCIxNTBweFwiLCAvLyBBZGp1c3QgdGhlIHRvcCBwb3NpdGlvblxuICAgICAgICAgIHJpZ2h0OiBcIjIwcHhcIiwgLy8gQWRqdXN0IHRoZSByaWdodCBwb3NpdGlvblxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcnRcIlxuICAgICAgPiAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMTAsfX0+Q2FydDwvaDI+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICBcbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PntyZW5kZXJJdGVtcygpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2NoZWNrb3V0SXRlbXMoKX08L2Rpdj5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJ0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJZb3VyLVByZWZlcnJlZC1Gb250XCIsIHNhbnMtc2VyaWY7IC8qIENoYW5nZSBmb250IHN0eWxlICovXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\cart.js */"));
}

_s(Cart, "QgCtvgxYOoYY5fxKMxkJu3dTZ3A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luTGVmdCIsImNoZWNrb3V0SXRlbXMiLCJmb250V2VpZ2h0IiwidG90YWwiLCJtYXJnaW5Ub3AiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsb0JBQ3NCQyx3REFBVSxDQUFDQyxnREFBRCxDQURoQztBQUFBLE1BQ1JDLElBRFEsZUFDUkEsSUFEUTtBQUFBLE1BQ0ZDLE9BREUsZUFDRkEsT0FERTtBQUFBLE1BQ09DLFVBRFAsZUFDT0EsVUFEUDs7QUFBQSxxQkFFY0osd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FGeEI7QUFBQSxNQUVOSSxlQUZNLGdCQUVOQSxlQUZNOztBQUlkLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSUosSUFBSSxDQUFDSyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsVUFBTUMsUUFBUSxHQUFHUCxJQUFJLENBQUNLLEtBQUwsQ0FBV0csR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBVTtB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixFQWFFLE1BQUMsbURBQUQ7QUFBVSxTQUFLLEVBQUU7QUFBRW5CLGFBQU8sRUFBRTtBQUFYLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRTtBQUFFRixrQkFBWSxFQUFFO0FBQWhCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNUCxXQUFXLEVBQWpCLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXFCLGFBQWEsRUFBbkIsQ0FMRixDQWJGLENBRkY7QUFBQTtBQUFBO0FBQUEsazNOQURGO0FBMkNEOztHQXBKUTVCLEk7O0tBQUFBLEk7QUFzSk1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NoZWNrb3V0LmVhODliODcwNjNlMWQ4N2FmOTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQm9keSwgQ2FyZFRpdGxlLCBCYWRnZSB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIENhcnQoKSB7XG4gIGxldCB7IGNhcnQsIGFkZEl0ZW0sIHJlbW92ZUl0ZW0gfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAgIFxuICBjb25zdCByZW5kZXJJdGVtcyA9ICgpID0+IHtcbiAgICBpZiAoY2FydC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtTGlzdCA9IGNhcnQuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLW9uZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1uYW1lXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaXRlbS1wcmljZVwiPiR7aXRlbS5wcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZUl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIC1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19IGlkPVwiaXRlbS1xdWFudGl0eVwiPlxuICAgICAgICAgICAgICAgICAge2l0ZW0ucXVhbnRpdHl9eFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDUsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDsgLy8gUmV0dXJuIG51bGwgZm9yIGl0ZW1zIHdpdGggcXVhbnRpdHkgMFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tvdXRJdGVtcyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhZGdlXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDEwMCB9fT5Ub3RhbDo8L2g1PlxuICAgICAgICAgIDxoMz4ke2NhcnQudG90YWx9PC9oMz5cbiAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9jaGVja291dC9cIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsIC8vIENoYW5nZSBidXR0b24gY29sb3IgdG8gYmxhY2tcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YT5PcmRlcjwvYT5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxDYXJkXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGg6IFwiNDAwcHhcIiwgLy8gQWRqdXN0IHRoZSB3aWR0aCB0byBtYWtlIGl0IHNtYWxsZXJcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLCAvLyBQb3NpdGlvbiB0aGUgY2FyZCBvbiB0aGUgcmlnaHQgc2lkZVxuICAgICAgICAgIHRvcDogXCIxNTBweFwiLCAvLyBBZGp1c3QgdGhlIHRvcCBwb3NpdGlvblxuICAgICAgICAgIHJpZ2h0OiBcIjIwcHhcIiwgLy8gQWRqdXN0IHRoZSByaWdodCBwb3NpdGlvblxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImNhcnRcIlxuICAgICAgPiAgPGgyIHN0eWxlPXt7IG1hcmdpbjogMTAsfX0+Q2FydDwvaDI+XG4gICAgICAgIDxDYXJkVGl0bGUgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5Zb3VyIE9yZGVyOjwvQ2FyZFRpdGxlPlxuICAgICAgICBcbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxDYXJkQm9keSBzdHlsZT17eyBwYWRkaW5nOiAxNSB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNDAgfX0+XG4gICAgICAgICAgICA8c21hbGw+SXRlbXM6PC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PntyZW5kZXJJdGVtcygpfTwvZGl2PlxuICAgICAgICAgIDxkaXY+e2NoZWNrb3V0SXRlbXMoKX08L2Rpdj5cbiAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jYXJ0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJZb3VyLVByZWZlcnJlZC1Gb250XCIsIHNhbnMtc2VyaWY7IC8qIENoYW5nZSBmb250IHN0eWxlICovXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9