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
      onClick: function onClick() {
        if (!isAuthenticated) alert("login you dum dum!");
      },
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
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      width: "300px",
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
    className: "jsx-2907605029",
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
    className: "jsx-2907605029",
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
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx("small", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, "Items:")), __jsx("div", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, renderItems()), __jsx("div", {
    className: "jsx-2907605029",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 11
    }
  }, checkoutItems()))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2907605029",
    __self: this
  }, "#item-price.jsx-2907605029{font-size:1.1em;}#item-quantity.jsx-2907605029{font-size:0.9em;padding-bottom:4px;}#item-name.jsx-2907605029{font-size:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNJa0IsQUFHMkIsQUFHQSxBQUlGLGNBQ2hCLEVBUEEsQUFHcUIsbUJBQ3JCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgQ2FyZEJvZHksIENhcmRUaXRsZSwgQmFkZ2UgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBDYXJ0KCkge1xuICBsZXQgeyBjYXJ0LCBhZGRJdGVtLCByZW1vdmVJdGVtIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgICBcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoKSA9PiB7XG4gICAgaWYgKGNhcnQuaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaXRlbUxpc3QgPSBjYXJ0Lml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5xdWFudGl0eSA+IDApIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1vbmVcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tbmFtZVwiPntpdGVtLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIml0ZW0tcHJpY2VcIj4ke2l0ZW0ucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZW1vdmVJdGVtKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAtXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fSBpZD1cIml0ZW0tcXVhbnRpdHlcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnF1YW50aXR5fXhcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiA1LFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIFJldHVybiBudWxsIGZvciBpdGVtcyB3aXRoIHF1YW50aXR5IDBcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGRpdj48L2Rpdj47XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoZWNrb3V0SXRlbXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCYWRnZVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjMzMzXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAxMDAgfX0+VG90YWw6PC9oNT5cbiAgICAgICAgICA8aDM+JHtjYXJ0LnRvdGFsfTwvaDM+XG4gICAgICAgIDwvQmFkZ2U+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXQvXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNjAlXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLCAvLyBDaGFuZ2UgYnV0dG9uIGNvbG9yIHRvIGJsYWNrXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge2lmKCFpc0F1dGhlbnRpY2F0ZWQpIGFsZXJ0KFwibG9naW4geW91IGR1bSBkdW0hXCIpO319XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGE+T3JkZXI8L2E+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgXG4gICAgICA8Q2FyZFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHdpZHRoOiBcIjMwMHB4XCIsIC8vIEFkanVzdCB0aGUgd2lkdGggdG8gbWFrZSBpdCBzbWFsbGVyXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIiwgLy8gUG9zaXRpb24gdGhlIGNhcmQgb24gdGhlIHJpZ2h0IHNpZGVcbiAgICAgICAgICB0b3A6IFwiMTUwcHhcIiwgLy8gQWRqdXN0IHRoZSB0b3AgcG9zaXRpb25cbiAgICAgICAgICByaWdodDogXCIyMHB4XCIsIC8vIEFkanVzdCB0aGUgcmlnaHQgcG9zaXRpb25cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJjYXJ0XCJcbiAgICAgID4gIDxoMiBzdHlsZT17eyBtYXJnaW46IDEwIH19PkNhcnQ8L2gyPlxuICAgICAgICA8Q2FyZFRpdGxlIHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+WW91ciBPcmRlcjo8L0NhcmRUaXRsZT5cbiAgICAgICAgXG4gICAgICAgIDxociAvPlxuICAgICAgICA8Q2FyZEJvZHkgc3R5bGU9e3sgcGFkZGluZzogMTUgfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlxuICAgICAgICAgICAgPHNtYWxsPkl0ZW1zOjwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj57cmVuZGVySXRlbXMoKX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PntjaGVja291dEl0ZW1zKCl9PC9kaXY+XG4gICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICA8L0NhcmQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICNpdGVtLXByaWNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICAgICNpdGVtLXF1YW50aXR5IHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgI2l0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07IC8vIEFkanVzdCB0aGUgZm9udCBzaXplXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydDtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\cart.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsImNhcnQiLCJhZGRJdGVtIiwicmVtb3ZlSXRlbSIsImlzQXV0aGVudGljYXRlZCIsInJlbmRlckl0ZW1zIiwiaXRlbXMiLCJsZW5ndGgiLCJpdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm1hcmdpbkJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpZCIsIm5hbWUiLCJwcmljZSIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luTGVmdCIsImNoZWNrb3V0SXRlbXMiLCJmb250V2VpZ2h0IiwidG90YWwiLCJtYXJnaW5Ub3AiLCJhbGVydCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFDc0JDLHdEQUFVLENBQUNDLGdEQUFELENBRGhDO0FBQUEsTUFDUkMsSUFEUSxlQUNSQSxJQURRO0FBQUEsTUFDRkMsT0FERSxlQUNGQSxPQURFO0FBQUEsTUFDT0MsVUFEUCxlQUNPQSxVQURQOztBQUFBLHFCQUVjSix3REFBVSxDQUFDQyxnREFBRCxDQUZ4QjtBQUFBLE1BRU5JLGVBRk0sZ0JBRU5BLGVBRk07O0FBSWQsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJSixJQUFJLENBQUNLLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6QixVQUFNQyxRQUFRLEdBQUdQLElBQUksQ0FBQ0ssS0FBTCxDQUFXRyxHQUFYLENBQWUsVUFBQ0MsSUFB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QUFBQTtBQUFBO0FBQUEsWUFUSCxFQVVFLE1BQUMsb0RBQUQ7QUFBVyxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLEVBYUUsTUFBQyxtREFBRDtBQUFVLFNBQUssRUFBRTtBQUFFcEIsYUFBTyxFQUFFO0FBQVgsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFO0FBQUVGLGtCQUFZLEVBQUU7QUFBaEIsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1QLFdBQVcsRUFBakIsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNcUIsYUFBYSxFQUFuQixDQUxGLENBYkYsQ0FGRjtBQUFBO0FBQUE7QUFBQSx5a05BREY7QUFzQ0Q7O0dBL0lRNUIsSTs7S0FBQUEsSTtBQWlKTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuM2M5OWQxZWQ0MjRmNTE4ZWUzM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhcmQsIENhcmRCb2R5LCBDYXJkVGl0bGUsIEJhZGdlIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gQ2FydCgpIHtcbiAgbGV0IHsgY2FydCwgYWRkSXRlbSwgcmVtb3ZlSXRlbSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gICAgXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKCkgPT4ge1xuICAgIGlmIChjYXJ0Lml0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGl0ZW1MaXN0ID0gY2FydC5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0ucXVhbnRpdHkgPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtb25lXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmNGY0XCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLW5hbWVcIj57aXRlbS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJpdGVtLXByaWNlXCI+JHtpdGVtLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSXRlbShpdGVtKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlua1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgLVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX0gaWQ9XCJpdGVtLXF1YW50aXR5XCI+XG4gICAgICAgICAgICAgICAgICB7aXRlbS5xdWFudGl0eX14XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogNSxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzMzNcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImxpbmtcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICtcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBmb3IgaXRlbXMgd2l0aCBxdWFudGl0eSAwXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja291dEl0ZW1zID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmFkZ2VcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjRmNFwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwiIzMzM1wiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogMTAwIH19PlRvdGFsOjwvaDU+XG4gICAgICAgICAgPGgzPiR7Y2FydC50b3RhbH08L2gzPlxuICAgICAgICA8L0JhZGdlPlxuICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0L1wiPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjYwJVwiLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIiwgLy8gQ2hhbmdlIGJ1dHRvbiBjb2xvciB0byBibGFja1xuICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtpZighaXNBdXRoZW50aWNhdGVkKSBhbGVydChcImxvZ2luIHlvdSBkdW0gZHVtIVwiKTt9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhPk9yZGVyPC9hPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIFxuICAgICAgPENhcmRcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB3aWR0aDogXCIzMDBweFwiLCAvLyBBZGp1c3QgdGhlIHdpZHRoIHRvIG1ha2UgaXQgc21hbGxlclxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsIC8vIFBvc2l0aW9uIHRoZSBjYXJkIG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgdG9wOiBcIjE1MHB4XCIsIC8vIEFkanVzdCB0aGUgdG9wIHBvc2l0aW9uXG4gICAgICAgICAgcmlnaHQ6IFwiMjBweFwiLCAvLyBBZGp1c3QgdGhlIHJpZ2h0IHBvc2l0aW9uXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmNGY0ZjRcIixcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FydFwiXG4gICAgICA+ICA8aDIgc3R5bGU9e3sgbWFyZ2luOiAxMCB9fT5DYXJ0PC9oMj5cbiAgICAgICAgPENhcmRUaXRsZSBzdHlsZT17eyBtYXJnaW46IDEwIH19PllvdXIgT3JkZXI6PC9DYXJkVGl0bGU+XG4gICAgICAgIFxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPENhcmRCb2R5IHN0eWxlPXt7IHBhZGRpbmc6IDE1IH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA0MCB9fT5cbiAgICAgICAgICAgIDxzbWFsbD5JdGVtczo8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+e3JlbmRlckl0ZW1zKCl9PC9kaXY+XG4gICAgICAgICAgPGRpdj57Y2hlY2tvdXRJdGVtcygpfTwvZGl2PlxuICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgPC9DYXJkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAjaXRlbS1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgfVxuICAgICAgICAjaXRlbS1xdWFudGl0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTsgLy8gQWRqdXN0IHRoZSBmb250IHNpemVcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG4gICAgICAgICNpdGVtLW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMWVtOyAvLyBBZGp1c3QgdGhlIGZvbnQgc2l6ZVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9