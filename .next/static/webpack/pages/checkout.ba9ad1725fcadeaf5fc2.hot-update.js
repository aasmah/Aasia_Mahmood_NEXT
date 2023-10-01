webpackHotUpdate_N_E("pages/checkout",{

/***/ "./components/checkoutForm.js":
/*!************************************!*\
  !*** ./components/checkoutForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cardSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cardSection */ "./components/cardSection.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\checkoutForm.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function CheckoutForm() {
  _s2();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])({
    address: "",
    city: "",
    state: "",
    stripe_id: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useElements"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_10__["default"]);

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    var updateItem = data[e.target.name] = e.target.value; // update the state data object

    setData(_objectSpread(_objectSpread({}, data), {}, {
      updateItem: updateItem
    }));
  }

  function submitOrder() {
    return _submitOrder.apply(this, arguments);
  }

  function _submitOrder() {
    var _s = $RefreshSig$();

    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cardElement, API_URL, token, userToken, response, cart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              // event.preventDefault();
              // // Use elements.getElement to get a reference to the mounted Element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card
              // const API_URL =     process.env.NEXT_PUBLIC_API_URL || "https://urchin-app-hi2hs.ondigitalocean.app";

              API_URL = "https://urchin-app-hi2hs.ondigitalocean.app";
              _context.next = 5;
              return stripe.createToken(cardElement);

            case 5:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get("token");
              _context.next = 9;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default()("".concat(API_URL, "/orders"), {
                method: "POST",
                headers: userToken && {
                  Authorization: "Bearer ".concat(userToken)
                },
                body: JSON.stringify({
                  amount: Number(Math.round(appContext.cart.total + "e2") + "e-2"),
                  dishes: appContext.cart.items,
                  address: data.address,
                  city: data.city,
                  state: data.state,
                  token: token.token.id
                })
              });

            case 9:
              response = _context.sent;
              //redirect back to home page for restaurant selection reset cart
              cart = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(appContext);
              cart = (Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_1__["default"])("cart"), {
                items: [],
                total: 0
              });
              next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/");

              if (!response.ok) {
                setError(response.statusText);
                console.log("SUCCESS");
              } // OTHER stripe methods you can use depending on app
              // // or createPaymentMethod - https://stripe.com/docs/js/payment_intents/create_payment_method
              // stripe.createPaymentMethod({
              //   type: "card",
              //   card: cardElement,
              // });
              // // or confirmCardPayment - https://stripe.com/docs/js/payment_intents/confirm_card_payment
              // stripe.confirmCardPayment(paymentIntentClientSecret, {
              //   payment_method: {
              //     card: cardElement,
              //   },
              // });


            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "QchebOVKze+CH1FRHiU38Fd0/kM="));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-250226597" + " " + "checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("h4", {
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "Checkout"), __jsx("div", {
    style: {
      marginLeft: "30px"
    },
    className: "jsx-250226597" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("h5", {
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Your information:"), __jsx("hr", {
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      flex: "0.90",
      marginRight: 10
    },
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    name: "address",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      flex: "0.65",
      marginRight: "6%"
    },
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "City"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    name: "city",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      flex: "0.25",
      marginRight: 0
    },
    className: "jsx-250226597",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "State"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    name: "state",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }))), __jsx(_cardSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
    data: data,
    stripeError: error,
    submitOrder: submitOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "250226597",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}.checkout{margin-left:0;}.Checkout{margin:0;max-width:800px;box-sizing:border-box;padding:0;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUdTLEFBR3dDLEFBV2xCLEFBR2EsQUFLUixBQUdMLEFBUUssQUFLSyxTQVpILEtBSGxCLEFBV2tCLEtBS1AsR0FyQlgsR0FTd0IsRUFyQmdCLENBa0M1QixFQUxhLFFBTUYsQ0ExQnZCLFFBYVksVUFDWixFQWFjLFlBQ0ssaUJBQ0YsZUFFZ0Isb0NBdkNsQixBQTZCZixhQTVCZSxhQUNHLE9Bc0NMLFNBckNPLEVBc0NBLGdCQXJDRixFQXNDRCxjQXJDakIsQ0FzQ2tCLGdCQUNTLHlCQUNGLDZHQUNFLHlCQUNKLGtEQUNhLGtDQUNSLDREQUNWLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXGFhc184XFxEZXNrdG9wXFxDYXBzdG9uZVxccmVzdGF1cmFudC1hd3MtZGVwbG95XFxmcm9udGVuZFxcY29tcG9uZW50c1xcY2hlY2tvdXRGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgLy8gc2V0IHRoZSBrZXkgPSB0byB0aGUgbmFtZSBwcm9wZXJ0eSBlcXVhbCB0byB0aGUgdmFsdWUgdHlwZWRcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBkYXRhIG9iamVjdFxuICAgIHNldERhdGEoeyAuLi5kYXRhLCB1cGRhdGVJdGVtIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIoKSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW50IHNlbGVjdGlvbiByZXNldCBjYXJ0XG4gICAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XG4gICAgY2FydCA9IHsgaXRlbXM6W10sIHRvdGFsOjB9XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTXCIpXG4gICAgfVxuXG4gICAgLy8gT1RIRVIgc3RyaXBlIG1ldGhvZHMgeW91IGNhbiB1c2UgZGVwZW5kaW5nIG9uIGFwcFxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgIC8vICAgdHlwZTogXCJjYXJkXCIsXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xuICAgIC8vICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XG4gICAgICA8aDQ+Q2hlY2tvdXQ8L2g0PlxuICAgICAgey8qIFVwZGF0ZSB0aGUgbWFyZ2luLWxlZnQgcHJvcGVydHkgdG8gbW92ZSB0aGUgLmNoZWNrb3V0IHRvIHRoZSBsZWZ0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMzBweFwiIH19PlxuICAgICAgICA8aDU+WW91ciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjY1XCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPENhcmRTZWN0aW9uIGRhdGE9e2RhdGF9IHN0cmlwZUVycm9yPXtlcnJvcn0gc3VibWl0T3JkZXI9e3N1Ym1pdE9yZGVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWhhbGYge1xuICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVXBkYXRlIHRoZSBzdHlsZXMgZm9yIC5jaGVja291dCBhbmQgLkNoZWNrb3V0ICovXG4gICAgICAgICAgLmNoZWNrb3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEV4aXN0aW5nIHN0eWxlcyBmb3IgbGFiZWwgYW5kIGJ1dHRvbiAqL1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\checkoutForm.js */"));
}

_s2(CheckoutForm, "qV2AdrxO8biNAyk+ubU+9y6BKoQ=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_8__["useElements"]];
});

_c = CheckoutForm;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutForm);

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwiQVBJX1VSTCIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2FydCIsInRvdGFsIiwiZGlzaGVzIiwiaXRlbXMiLCJpZCIsInJlc3BvbnNlIiwiUm91dGVyIiwicHVzaCIsIm9rIiwic3RhdHVzVGV4dCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5MZWZ0IiwiZGlzcGxheSIsImZsZXgiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDO0FBQy9CQyxXQUFPLEVBQUUsRUFEc0I7QUFFL0JDLFFBQUksRUFBRSxFQUZ5QjtBQUcvQkMsU0FBSyxFQUFFLEVBSHdCO0FBSS9C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MUMsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRTtBQUFLLFNBQUssRUFBRTtBQUFFeUMsVUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGlCQUFXLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFRLEVBQUUxQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixDQVRGLEVBb0JFLE1BQUMsb0RBQUQ7QUFBYSxRQUFJLEVBQUVYLElBQW5CO0FBQXlCLGVBQVcsRUFBRUUsS0FBdEM7QUFBNkMsZUFBVyxFQUFFZSxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLENBSEY7QUFBQTtBQUFBO0FBQUEsMi9TQURGO0FBeUZEOztJQTlKUXZCLFk7VUFRUVcsaUUsRUFDRUUsbUU7OztLQVRWYixZO0FBK0pNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jaGVja291dC5iYTlhZDE3MjVmY2FkZWFmNWZjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgLy8gc2V0IHRoZSBrZXkgPSB0byB0aGUgbmFtZSBwcm9wZXJ0eSBlcXVhbCB0byB0aGUgdmFsdWUgdHlwZWRcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBkYXRhIG9iamVjdFxuICAgIHNldERhdGEoeyAuLi5kYXRhLCB1cGRhdGVJdGVtIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIoKSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW50IHNlbGVjdGlvbiByZXNldCBjYXJ0XG4gICAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XG4gICAgY2FydCA9IHsgaXRlbXM6W10sIHRvdGFsOjB9XG4gICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTXCIpXG4gICAgfVxuXG4gICAgLy8gT1RIRVIgc3RyaXBlIG1ldGhvZHMgeW91IGNhbiB1c2UgZGVwZW5kaW5nIG9uIGFwcFxuICAgIC8vIC8vIG9yIGNyZWF0ZVBheW1lbnRNZXRob2QgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY3JlYXRlX3BheW1lbnRfbWV0aG9kXG4gICAgLy8gc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xuICAgIC8vICAgdHlwZTogXCJjYXJkXCIsXG4gICAgLy8gICBjYXJkOiBjYXJkRWxlbWVudCxcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIG9yIGNvbmZpcm1DYXJkUGF5bWVudCAtIGh0dHBzOi8vc3RyaXBlLmNvbS9kb2NzL2pzL3BheW1lbnRfaW50ZW50cy9jb25maXJtX2NhcmRfcGF5bWVudFxuICAgIC8vIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQocGF5bWVudEludGVudENsaWVudFNlY3JldCwge1xuICAgIC8vICAgcGF5bWVudF9tZXRob2Q6IHtcbiAgICAvLyAgICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gICB9LFxuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XG4gICAgICA8aDQ+Q2hlY2tvdXQ8L2g0PlxuICAgICAgey8qIFVwZGF0ZSB0aGUgbWFyZ2luLWxlZnQgcHJvcGVydHkgdG8gbW92ZSB0aGUgLmNoZWNrb3V0IHRvIHRoZSBsZWZ0ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiMzBweFwiIH19PlxuICAgICAgICA8aDU+WW91ciBpbmZvcm1hdGlvbjo8L2g1PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC45MFwiLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjY1XCIsIG1hcmdpblJpZ2h0OiBcIjYlXCIgfX0+XG4gICAgICAgICAgICA8TGFiZWw+Q2l0eTwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuMjVcIiwgbWFyZ2luUmlnaHQ6IDAgfX0+XG4gICAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0IG5hbWU9XCJzdGF0ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPENhcmRTZWN0aW9uIGRhdGE9e2RhdGF9IHN0cmlwZUVycm9yPXtlcnJvcn0gc3VibWl0T3JkZXI9e3N1Ym1pdE9yZGVyfSAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNTUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb3JtLWhhbGYge1xuICAgICAgICAgICAgZmxleDogMC41O1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVXBkYXRlIHRoZSBzdHlsZXMgZm9yIC5jaGVja291dCBhbmQgLkNoZWNrb3V0ICovXG4gICAgICAgICAgLmNoZWNrb3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEV4aXN0aW5nIHN0eWxlcyBmb3IgbGFiZWwgYW5kIGJ1dHRvbiAqL1xuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja291dEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9