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
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function CheckoutForm() {
  _s2();

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
    var _s = $RefreshSig$();

    _submitOrder = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(_s( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var cardElement, API_URL, token, userToken, response, cart;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _s();

              // event.preventDefault();
              // // Use elements.getElement to get a reference to the mounted Element.
              cardElement = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_7__["CardElement"]); // // Pass the Element directly to other Stripe.js methods:
              // // e.g. createToken - https://stripe.com/docs/js/tokens_sources/create_token?type=cardElement
              // get token back from stripe to process credit card
              // const API_URL =     process.env.NEXT_PUBLIC_API_URL || "https://urchin-app-hi2hs.ondigitalocean.app";

              API_URL = "https://urchin-app-hi2hs.ondigitalocean.app";
              _context.next = 5;
              return stripe.createToken(cardElement);

            case 5:
              token = _context.sent;
              userToken = js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("token");
              _context.next = 9;
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

            case 9:
              response = _context.sent;
              //redirect back to home page for restaurant selection reset cart
              cart = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(appContext);

              if (!response.ok) {
                // Show a success message
                alert("Your order has been placed!");
                setError(response.statusText);
                console.log("SUCCESS");
                next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push("/");
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


            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }), "QchebOVKze+CH1FRHiU38Fd0/kM="));
    return _submitOrder.apply(this, arguments);
  }

  return __jsx("div", {
    className: "jsx-1630660198" + " " + "paper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("h5", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Your information:"), __jsx("hr", {
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.90",
      marginRight: 10
    },
    className: "jsx-1630660198",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Address"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "address",
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      flex: "0.65",
      marginRight: "6%"
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
      flex: "0.25",
      marginRight: 0
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
  }, ".paper{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:550px;padding:30px;background:#fff;border-radius:6px;margin-top:90px;}.form-half{-webkit-flex:0.5;-ms-flex:0.5;flex:0.5;}*{box-sizing:border-box;}body,html{background-color:#f6f9fc;font-size:18px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}h1{color:#32325d;font-weight:400;line-height:50px;font-size:40px;margin:20px 0;padding:0;}.Checkout{margin:0 auto;max-width:800px;box-sizing:border-box;padding:0 5px;}label{color:#6b7c93;font-weight:300;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;}button{white-space:nowrap;border:0;outline:0;display:inline-block;height:40px;line-height:40px;padding:0 14px;box-shadow:0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);color:#fff;border-radius:4px;font-size:15px;font-weight:600;text-transform:uppercase;-webkit-letter-spacing:0.025em;-moz-letter-spacing:0.025em;-ms-letter-spacing:0.025em;letter-spacing:0.025em;background-color:#6772e5;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;margin-top:10px;}form{margin-bottom:40px;padding-bottom:40px;border-bottom:3px solid #e6ebf1;}button:hover{color:#fff;cursor:pointer;background-color:#7795f8;-webkit-transform:translateY(-1px);-ms-transform:translateY(-1px);transform:translateY(-1px);box-shadow:0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08);}input,.StripeElement{display:block;background-color:#f8f9fa !important;margin:10px 0 20px 0;max-width:500px;padding:10px 14px;font-size:1em;font-family:\"Source Code Pro\",monospace;box-shadow:rgba(50,50,93,0.14902) 0px 1px 3px, rgba(0,0,0,0.0196078) 0px 1px 0px;border:0;outline:0;border-radius:4px;background:white;}input::-webkit-input-placeholder{color:#aab7c4;}input::-moz-placeholder{color:#aab7c4;}input:-ms-input-placeholder{color:#aab7c4;}input::placeholder{color:#aab7c4;}input:focus,.StripeElement--focus{box-shadow:rgba(50,50,93,0.109804) 0px 4px 6px, rgba(0,0,0,0.0784314) 0px 1px 3px;-webkit-transition:all 150ms ease;-webkit-transition:all 150ms ease;transition:all 150ms ease;}.StripeElement.IdealBankElement,.StripeElement.PaymentRequestButton{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWFzXzhcXERlc2t0b3BcXENhcHN0b25lXFxyZXN0YXVyYW50LWF3cy1kZXBsb3lcXGZyb250ZW5kXFxjb21wb25lbnRzXFxjaGVja291dEZvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdTLEFBR3dDLEFBV2xCLEFBR2EsQUFJRyxBQUtYLEFBUUEsQUFNQSxBQUtLLEFBc0JBLEFBS1IsQUFTRyxBQWVBLEFBS3dCLEFBTTVCLFVBQ1osQ0FuQ2lCLEdBOUNDLEFBUUEsQUFNQSxBQXlDb0IsQUFldEMsS0FuRFcsQUFzQlcsR0FsRHRCLEdBSWlCLENBb0RVLENBcEVhLENBeUM1QixFQW5CTyxBQVFLLEFBTUMsUUFNRixDQWpDdkIsQUFzRGtDLENBOUN5QixPQU0xQyxHQXNETSxDQVJNLENBdENiLE9BWUYsR0FuQkUsSUFRaEIsS0FZbUIsQUFvQm5CLEFBY2tCLEtBckROLE1BdUV3QixJQXRFcEMsQ0FxRG9CLENBbENILE1BM0JqQixTQTZCaUMsRUFpQ2pCLFdBaUJZLEdBaEJlLG9CQWhGNUIsQUFvQ2YsS0FrQ2lDLFFBckVsQixPQWlGeUIsTUFoRnRCLE9BNkNMLElBa0RiLEtBOUZvQixFQTZDQSxnQkE1Q0YsRUE2Q0QsWUFzQmpCLEVBbEVBLENBNkNrQixnQkFDUyxRQWdDaEIsU0FDQyxRQWhDYSxFQWlDTCxrQkFDRCxpQkFDbkIsd0VBbEMyQix5QkFDSixrREFDYSxrQ0FDUiw0REFDVixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxhYXNfOFxcRGVza3RvcFxcQ2Fwc3RvbmVcXHJlc3RhdXJhbnQtYXdzLWRlcGxveVxcZnJvbnRlbmRcXGNvbXBvbmVudHNcXGNoZWNrb3V0Rm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgLy8gc2V0IHRoZSBrZXkgPSB0byB0aGUgbmFtZSBwcm9wZXJ0eSBlcXVhbCB0byB0aGUgdmFsdWUgdHlwZWRcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBkYXRhIG9iamVjdFxuICAgIHNldERhdGEoeyAuLi5kYXRhLCB1cGRhdGVJdGVtIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIoKSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW50IHNlbGVjdGlvbiByZXNldCBjYXJ0XG4gICAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykgeyBcbiAgICAgIC8vIFNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcbiAgICBhbGVydChcIllvdXIgb3JkZXIgaGFzIGJlZW4gcGxhY2VkIVwiKTtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTXCIpXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuXG5cblxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxuICAgIC8vIHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcbiAgICAvLyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQsIHtcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgPGg1PllvdXIgaW5mb3JtYXRpb246PC9oNT5cbiAgICAgIDxociAvPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuOTBcIiwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgIDxMYWJlbD5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC42NVwiLCBtYXJnaW5SaWdodDogXCI2JVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC4yNVwiLCBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgIDxDYXJkU2VjdGlvbiBkYXRhPXtkYXRhfSBzdHJpcGVFcnJvcj17ZXJyb3J9IHN1Ym1pdE9yZGVyPXtzdWJtaXRPcmRlcn0gLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMzMjMyNWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DaGVja291dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5NWY4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\aas_8\\\\Desktop\\\\Capstone\\\\restaurant-aws-deploy\\\\frontend\\\\components\\\\checkoutForm.js */"));
}

_s2(CheckoutForm, "qV2AdrxO8biNAyk+ubU+9y6BKoQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwic3RyaXBlX2lkIiwiZGF0YSIsInNldERhdGEiLCJlcnJvciIsInNldEVycm9yIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIm9uQ2hhbmdlIiwiZSIsInVwZGF0ZUl0ZW0iLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRPcmRlciIsImNhcmRFbGVtZW50IiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwiQVBJX1VSTCIsImNyZWF0ZVRva2VuIiwidG9rZW4iLCJ1c2VyVG9rZW4iLCJDb29raWVzIiwiZ2V0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiYW1vdW50IiwiTnVtYmVyIiwiTWF0aCIsInJvdW5kIiwiY2FydCIsInRvdGFsIiwiZGlzaGVzIiwiaXRlbXMiLCJpZCIsInJlc3BvbnNlIiwib2siLCJhbGVydCIsInN0YXR1c1RleHQiLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsImRpc3BsYXkiLCJmbGV4IiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUM7QUFDL0JDLFdBQU8sRUFBRSxFQURzQjtBQUUvQkMsUUFBSSxFQUFFLEVBRnlCO0FBRy9CQyxTQUFLLEVBQUUsRUFId0I7QUFJL0JDLGFBQVMs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QUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsZ0RBQUQ7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixZQUFRLEVBQUUxQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixDQVRGLEVBb0JFLE1BQUMsb0RBQUQ7QUFBYSxRQUFJLEVBQUVYLElBQW5CO0FBQXlCLGVBQVcsRUFBRUUsS0FBdEM7QUFBNkMsZUFBVyxFQUFFZSxXQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGO0FBQUE7QUFBQTtBQUFBLHNpYUFERjtBQXdJRDs7SUFqTlF2QixZO1VBUVFXLGlFLEVBQ0VFLG1FOzs7S0FUVmIsWTtBQWtOTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hlY2tvdXQuNzY5NDIyMzYxMjliMjkzZWE2YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcbmltcG9ydCB7IENhcmRFbGVtZW50LCB1c2VTdHJpcGUsIHVzZUVsZW1lbnRzIH0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSBcIi4vY2FyZFNlY3Rpb25cIjtcbmltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuL2NvbnRleHRcIjtcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xuICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgY2l0eTogXCJcIixcbiAgICBzdGF0ZTogXCJcIixcbiAgICBzdHJpcGVfaWQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xuICBjb25zdCBhcHBDb250ZXh0ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcblxuICBmdW5jdGlvbiBvbkNoYW5nZShlKSB7XG4gICAgLy8gc2V0IHRoZSBrZXkgPSB0byB0aGUgbmFtZSBwcm9wZXJ0eSBlcXVhbCB0byB0aGUgdmFsdWUgdHlwZWRcbiAgICBjb25zdCB1cGRhdGVJdGVtID0gKGRhdGFbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZSk7XG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBkYXRhIG9iamVjdFxuICAgIHNldERhdGEoeyAuLi5kYXRhLCB1cGRhdGVJdGVtIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0T3JkZXIoKSB7XG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIC8vIFVzZSBlbGVtZW50cy5nZXRFbGVtZW50IHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgbW91bnRlZCBFbGVtZW50LlxuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCk7XG5cbiAgICAvLyAvLyBQYXNzIHRoZSBFbGVtZW50IGRpcmVjdGx5IHRvIG90aGVyIFN0cmlwZS5qcyBtZXRob2RzOlxuICAgIC8vIC8vIGUuZy4gY3JlYXRlVG9rZW4gLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy90b2tlbnNfc291cmNlcy9jcmVhdGVfdG9rZW4/dHlwZT1jYXJkRWxlbWVudFxuICAgIC8vIGdldCB0b2tlbiBiYWNrIGZyb20gc3RyaXBlIHRvIHByb2Nlc3MgY3JlZGl0IGNhcmRcbiAgICAvLyBjb25zdCBBUElfVVJMID0gICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgXCJodHRwczovL3VyY2hpbi1hcHAtaGkyaHMub25kaWdpdGFsb2NlYW4uYXBwXCI7XG4gICAgY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly91cmNoaW4tYXBwLWhpMmhzLm9uZGlnaXRhbG9jZWFuLmFwcFwiO1xuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZEVsZW1lbnQpO1xuICAgIGNvbnN0IHVzZXJUb2tlbiA9IENvb2tpZXMuZ2V0KFwidG9rZW5cIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdXNlclRva2VuICYmIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJUb2tlbn1gIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFtb3VudDogTnVtYmVyKE1hdGgucm91bmQoYXBwQ29udGV4dC5jYXJ0LnRvdGFsICsgXCJlMlwiKSArIFwiZS0yXCIpLFxuICAgICAgICBkaXNoZXM6IGFwcENvbnRleHQuY2FydC5pdGVtcyxcbiAgICAgICAgYWRkcmVzczogZGF0YS5hZGRyZXNzLFxuICAgICAgICBjaXR5OiBkYXRhLmNpdHksXG4gICAgICAgIHN0YXRlOiBkYXRhLnN0YXRlLFxuICAgICAgICB0b2tlbjogdG9rZW4udG9rZW4uaWQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICAvL3JlZGlyZWN0IGJhY2sgdG8gaG9tZSBwYWdlIGZvciByZXN0YXVyYW50IHNlbGVjdGlvbiByZXNldCBjYXJ0XG4gICAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoYXBwQ29udGV4dCk7XG4gICAgXG4gICAgaWYgKCFyZXNwb25zZS5vaykgeyBcbiAgICAgIC8vIFNob3cgYSBzdWNjZXNzIG1lc3NhZ2VcbiAgICBhbGVydChcIllvdXIgb3JkZXIgaGFzIGJlZW4gcGxhY2VkIVwiKTtcbiAgICAgIHNldEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTXCIpXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuXG5cblxuICAgIC8vIE9USEVSIHN0cmlwZSBtZXRob2RzIHlvdSBjYW4gdXNlIGRlcGVuZGluZyBvbiBhcHBcbiAgICAvLyAvLyBvciBjcmVhdGVQYXltZW50TWV0aG9kIC0gaHR0cHM6Ly9zdHJpcGUuY29tL2RvY3MvanMvcGF5bWVudF9pbnRlbnRzL2NyZWF0ZV9wYXltZW50X21ldGhvZFxuICAgIC8vIHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAvLyAgIHR5cGU6IFwiY2FyZFwiLFxuICAgIC8vICAgY2FyZDogY2FyZEVsZW1lbnQsXG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBvciBjb25maXJtQ2FyZFBheW1lbnQgLSBodHRwczovL3N0cmlwZS5jb20vZG9jcy9qcy9wYXltZW50X2ludGVudHMvY29uZmlybV9jYXJkX3BheW1lbnRcbiAgICAvLyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KHBheW1lbnRJbnRlbnRDbGllbnRTZWNyZXQsIHtcbiAgICAvLyAgIHBheW1lbnRfbWV0aG9kOiB7XG4gICAgLy8gICAgIGNhcmQ6IGNhcmRFbGVtZW50LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgPGg1PllvdXIgaW5mb3JtYXRpb246PC9oNT5cbiAgICAgIDxociAvPlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiBcIjAuOTBcIiwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgIDxMYWJlbD5BZGRyZXNzPC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImFkZHJlc3NcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC42NVwiLCBtYXJnaW5SaWdodDogXCI2JVwiIH19PlxuICAgICAgICAgIDxMYWJlbD5DaXR5PC9MYWJlbD5cbiAgICAgICAgICA8SW5wdXQgbmFtZT1cImNpdHlcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IFwiMC4yNVwiLCBtYXJnaW5SaWdodDogMCB9fT5cbiAgICAgICAgICA8TGFiZWw+U3RhdGU8L0xhYmVsPlxuICAgICAgICAgIDxJbnB1dCBuYW1lPVwic3RhdGVcIiBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgIDxDYXJkU2VjdGlvbiBkYXRhPXtkYXRhfSBzdHJpcGVFcnJvcj17ZXJyb3J9IHN1Ym1pdE9yZGVyPXtzdWJtaXRPcmRlcn0gLz5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1oYWxmIHtcbiAgICAgICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5LFxuICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmYztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgY29sb3I6ICMzMjMyNWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5DaGVja291dCB7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3YzkzO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAyNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDUwLCA1MCwgOTMsIDAuMTEpLFxuICAgICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMjVlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzcyZTU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZTZlYmYxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc5NWY4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA3cHggMTRweCByZ2JhKDUwLCA1MCwgOTMsIDAuMSksXG4gICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAuU3RyaXBlRWxlbWVudCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmEgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBDb2RlIFByb1wiLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMTQ5MDIpIDBweCAxcHggM3B4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDE5NjA3OCkgMHB4IDFweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogI2FhYjdjNDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5wdXQ6Zm9jdXMsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQtLWZvY3VzIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4xMDk4MDQpIDBweCA0cHggNnB4LFxuICAgICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMDc4NDMxNCkgMHB4IDFweCAzcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5TdHJpcGVFbGVtZW50LklkZWFsQmFua0VsZW1lbnQsXG4gICAgICAgICAgLlN0cmlwZUVsZW1lbnQuUGF5bWVudFJlcXVlc3RCdXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==