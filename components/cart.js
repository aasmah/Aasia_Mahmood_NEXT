import React, { useContext } from "react";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
import AppContext from "./context";
import Link from "next/link";

function Cart() {
  let { cart, addItem, removeItem } = useContext(AppContext);
  const { isAuthenticated } = useContext(AppContext);

  const renderItems = () => {
    if (cart.items.length > 0) {
      const itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{
                marginBottom: 10,
                backgroundColor: "#f4f4f4",
                padding: "8px",
                borderRadius: "5px",
                color: "#333",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={item.id}
            >
              <div>
                <span id="item-name">{item.name}</span>
              </div>
              <div>
                <span id="item-price">${item.price}</span>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 25,
                    marginLeft: 10,
                    backgroundColor: "#333",
                    color: "#fff",
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 25,
                    marginLeft: 5,
                    backgroundColor: "#333",
                    color: "#fff",
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
              </div>
            </div>
          );
        }
        return null; // Return null for items with quantity 0
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };

  const checkoutItems = () => {
    return (
      <div>
        <Badge
          style={{
            width: 100,
            padding: 5,
            backgroundColor: "#f4f4f4",
            borderRadius: "5px",
            color: "#333",
          }}
          color="light"
        >
          <h5 style={{ fontWeight: 100 }}>Total:</h5>
          <h3>${cart.total}</h3>
        </Badge>
        <Link href="/checkout/">
          <Button
            style={{
              width: "60%",
              backgroundColor: "black",
              color: "#fff",
              marginTop: "20px",
            }}
            color="primary"
          >
            <a>Order</a>
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Card
        style={{
          width: "400px",
          position: "fixed",
          top: "150px",
          right: "20px",
          backgroundColor: "#f4f4f4",
        }}
        className="cart"
      >
        <h2 style={{ margin: 0, backgroundColor: "grey" }}>Cart</h2>
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: 15 }}>
          <div style={{ marginBottom: 40 }}>
            <small>Items:</small>
          </div>
          <div>{renderItems()}</div>
          <div>{checkoutItems()}</div>
        </CardBody>
      </Card>
      <style jsx>{`
        .cart-heading {
          margin: 10px;
          background-color: lightgrey;
          padding: 5px 10px;
          display: inline-block;
        }
        #item-price {
          font-size: 1.1em;
        }
        #item-quantity {
          font-size: 0.9em;
          padding-bottom: 4px;
        }
        #item-name {
          font-size: 1em;
        }
      `}</style>
    </div>
  );
}

export default Cart;
