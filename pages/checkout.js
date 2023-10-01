import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  // get app context
  const { isAuthenticated } = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display the order button
  // const isAuthenticated = true;

  // load Stripe to inject into Elements components
  const stripePromise = loadStripe(
    "pk_test_51NmoQ5JN3tOA8L0SYayhgtrANetTfPAMD7FNysVTGGepkYV2ZXqc2f6BX8lZaEFiGdISCOXpYJXhcx68YkNDom2H00yWtMsa8n"
  );

  return (
    <div className="checkout-background">
      <Row>
      <Col style={{ paddingRight: 0 }} >
          <div className="checkout-heading">
            <h1 style={{ margin: 0, color: "white", textAlign: "left", fontWeight: "bold" , backgroundColor: "grey"}}>Checkout</h1>
          </div>
          
        </Col>
      </Row>
      <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 6, order: 1, offset: 1 }}>
         
          <Cart isAuthenticated={isAuthenticated} />
        </Col>
    
        <Col style={{ margin: 0 }} md={{ size: 6, order: 2 }}>
       
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </Col>
      </Row>
      <style jsx>{`
      
          .text-box {
            background-color: grey;
            padding: 10px;
  
        }
        .checkout-background {
          background-image: url("https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg"); /* Replace with your image path */
          background-size: cover; /* Adjust the background size as needed */
          background-repeat: no-repeat;
          min-height: 100vh;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
export default Checkout;
