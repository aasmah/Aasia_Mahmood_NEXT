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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _cardSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cardSection */ "./components/cardSection.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context */ "./components/context.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "C:\\Users\\aas_8\\Desktop\\Capstone\\restaurant-aws-deploy\\frontend\\components\\checkoutForm.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function CheckoutForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    address: "",
    city: "",
    state: "",
    stripe_id: ""
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      error = _useState2[0],
      setError = _useState2[1];

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"])();
  var appContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["default"]);

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
    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cardElement, API_URL, token, userToken, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // event.preventDefault();
              // // Use elements.getElement to get a reference to the mounted Element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card
              // const API_URL =     process.env.NEXT_PUBLIC_API_URL || "https://urchin-app-hi2hs.ondigitalocean.app";

              API_URL = "https://urchin-app-hi2hs.ondigitalocean.app";
              _context.next = 4;
              return stripe.createToken(cardElement);

            case 4:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("token");
              _context.next = 8;
              return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default()("".concat(API_URL, "/orders"), {
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

            case 8:
              response = _context.sent;

              //Upon success redirect back to home page for restaurant selection reset cart
              if (response.ok) {
                alert("Order succesful - bon apetit!");
                appContext.clearCart;
              }

              if (!response.ok) {
                setError(response.statusText);
                alert("something went wrong!");
                console.log("Order submission failed"); // Router.push("/");
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


            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-1630660198" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, "Your information:"), __jsx("hr", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.9",
      marginRight: "2%"
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "address",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.4",
      marginRight: "2%"
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, "City"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "city",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      flex: "0.1"
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "State"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "state",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }))), __jsx(_cardSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    stripeError: error,
    submitOrder: submitOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1630660198",
    __self: this
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHN0cmlwZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAvLyBzZXQgdGhlIGtleSA9IHRvIHRoZSBuYW1lIHByb3BlcnR5IGVxdWFsIHRvIHRoZSB2YWx1ZSB0eXBlZFxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIGRhdGEgb2JqZWN0XG4gICAgc2V0RGF0YSh7IC4uLmRhdGEsIHVwZGF0ZUl0ZW0gfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcigpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL1Vwb24gc3VjY2VzcyByZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFudCBzZWxlY3Rpb24gcmVzZXQgY2FydFxuICAgIGlmIChyZXNwb25zZS5vaylcbiAgICB7XG4gICAgICBhbGVydChcIk9yZGVyIHN1Y2Nlc2Z1bCAtIGJvbiBhcGV0aXQhXCIpO1xuICAgICAgYXBwQ29udGV4dC5jbGVhckNhcnQ7XG4gICAgfSAgICBcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgYWxlcnQoXCJzb21ldGhpbmcgd2VudCB3cm9uZyFcIilcbiAgICBjb25zb2xlLmxvZyhcIk9yZGVyIHN1Ym1pc3Npb24gZmFpbGVkXCIpXG4gICAgLy8gUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cblxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxuICAgIC8vIHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcbiAgICAvLyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQsIHtcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgIFxuICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjlcIiwgbWFyZ2luUmlnaHQ6IFwiMiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNFwiLCBtYXJnaW5SaWdodDogXCIyJVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC4xXCIgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzZiN2M5MztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSxcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzLFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\checkoutForm.js */"));
}

_s(CheckoutForm, "qV2AdrxO8biNAyk+ubU+9y6BKoQ=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["useElements"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwiQVBJX1VSTCIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2FydCIsInRvdGFsIiwiZGlzaGVzIiwiaXRlbXMiLCJpZCIsInJlc3BvbnNlIiwib2siLCJhbGVydCIsImNsZWFyQ2FydCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheSIsImZsZXgiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQztBQUMvQkMsV0FBTyxFQUFFLEVBRHNCO0FBRS9CQyxRQUFJLEVBQUUsRUFGeUI7QUFHL0JDLFNBQUssRUFBRSxFQUh3QjtBQUkvQkMsYUFBUyxFQUFF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RkYsQ0FURixDQUpGLEVBbUJFLE1BQUMsb0RBQUQ7QUFBYSxRQUFJLEVBQUVYLElBQW5CO0FBQXlCLGVBQVcsRUFBRUUsS0FBdEM7QUFBNkMsZUFBVyxFQUFFZSxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJGO0FBQUE7QUFBQTtBQUFBLDBnYUFERjtBQXVJRDs7R0FoTlF2QixZO1VBUVFXLGlFLEVBQ0VFLG1FOzs7S0FUVmIsWTtBQWlOTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNmM3M2Q3NTIzNWM3NTJmNDEzYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgYWRkcmVzczogXCJcIixcbiAgICBjaXR5OiBcIlwiLFxuICAgIHN0YXRlOiBcIlwiLFxuICAgIHN0cmlwZV9pZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XG4gIGNvbnN0IGFwcENvbnRleHQgPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlKGUpIHtcbiAgICAvLyBzZXQgdGhlIGtleSA9IHRvIHRoZSBuYW1lIHByb3BlcnR5IGVxdWFsIHRvIHRoZSB2YWx1ZSB0eXBlZFxuICAgIGNvbnN0IHVwZGF0ZUl0ZW0gPSAoZGF0YVtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIGRhdGEgb2JqZWN0XG4gICAgc2V0RGF0YSh7IC4uLmRhdGEsIHVwZGF0ZUl0ZW0gfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBzdWJtaXRPcmRlcigpIHtcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL1Vwb24gc3VjY2VzcyByZWRpcmVjdCBiYWNrIHRvIGhvbWUgcGFnZSBmb3IgcmVzdGF1cmFudCBzZWxlY3Rpb24gcmVzZXQgY2FydFxuICAgIGlmIChyZXNwb25zZS5vaylcbiAgICB7XG4gICAgICBhbGVydChcIk9yZGVyIHN1Y2Nlc2Z1bCAtIGJvbiBhcGV0aXQhXCIpO1xuICAgICAgYXBwQ29udGV4dC5jbGVhckNhcnQ7XG4gICAgfSAgICBcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgc2V0RXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgYWxlcnQoXCJzb21ldGhpbmcgd2VudCB3cm9uZyFcIilcbiAgICBjb25zb2xlLmxvZyhcIk9yZGVyIHN1Ym1pc3Npb24gZmFpbGVkXCIpXG4gICAgLy8gUm91dGVyLnB1c2goXCIvXCIpO1xuICAgIH1cblxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxuICAgIC8vIHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcbiAgICAvLyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQsIHtcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgIFxuICAgIDxoNT5Zb3VyIGluZm9ybWF0aW9uOjwvaDU+XG4gICAgICA8aHIgLz5cbiAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogXCIwLjlcIiwgbWFyZ2luUmlnaHQ6IFwiMiVcIiB9fT5cbiAgICAgICAgICA8TGFiZWw+QWRkcmVzczwvTGFiZWw+XG4gICAgICAgICAgPElucHV0IG5hbWU9XCJhZGRyZXNzXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuNFwiLCBtYXJnaW5SaWdodDogXCIyJVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC4xXCIgfX0+XG4gICAgICAgICAgPExhYmVsPlN0YXRlPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICA8Q2FyZFNlY3Rpb24gZGF0YT17ZGF0YX0gc3RyaXBlRXJyb3I9e2Vycm9yfSBzdWJtaXRPcmRlcj17c3VibWl0T3JkZXJ9IC8+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIC5wYXBlciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgICAgICAgaGVpZ2h0OiA1NTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0taGFsZiB7XG4gICAgICAgICAgICBmbGV4OiAwLjU7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSxcbiAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5ZmM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzIzMjVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuQ2hlY2tvdXQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogIzZiN2M5MztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSxcbiAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjc3MmU1O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2U2ZWJmMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3OTVmODtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgN3B4IDE0cHggcmdiYSg1MCwgNTAsIDkzLCAwLjEpLFxuICAgICAgICAgICAgICAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAyMHB4IDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJTb3VyY2UgQ29kZSBQcm9cIiwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSg1MCwgNTAsIDkzLCAwLjE0OTAyKSAwcHggMXB4IDNweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAxOTYwNzgpIDBweCAxcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNhYWI3YzQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OmZvY3VzLFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTA5ODA0KSAwcHggNHB4IDZweCxcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjA3ODQzMTQpIDBweCAxcHggM3B4O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuU3RyaXBlRWxlbWVudC5JZGVhbEJhbmtFbGVtZW50LFxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LlBheW1lbnRSZXF1ZXN0QnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Rm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=