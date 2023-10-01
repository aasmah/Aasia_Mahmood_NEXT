import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

function Dishes({ restId }) {
  const [restaurantID, setRestaurantID] = useState();
  const { addItem } = useContext(AppContext);

  const GET_RESTAURANT_DISHES = gql`
    query($id: ID!) {
      restaurant(id: $id) {
        id
        name
        dishes {
          id
          name
          description
          price
          image {
            url
          }
        }
      }
    }
  `;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: restId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant;

  if (restId > 0) {
    return (
      <>
        {restaurant.dishes.map((res) => (
          <Col xs="12" sm="6" md="3" lg="3" key={res.id}>
            <Card
              style={{
                margin: "10px",
                border: "none",
                backgroundColor: "#333",
                color: "#fff",
              }}
            >
              <CardImg
                top={true}
                style={{
                  height: "auto",
                  maxWidth: "100%",
                  width: "100%",
                }}
                src={`https://urchin-app-hi2hs.ondigitalocean.app/${res.image.url}`}
              />
              <CardBody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center", // Center content horizontally
                }}
              >
                <CardTitle
                  style={{
                    background: "beige",
                    color: "black",
                    fontSize: "90%",
                    padding: "5px 10px",
                  }}
                >
                  {res.name}
                </CardTitle>
                <CardText
                  style={{
                    color: "white", // Change description text color to white
                    fontSize: "90%",
                  }}
                >
                  {res.description}
                </CardText>
                <div
                  className="card-footer"
                  style={{
                    display: "flex",
                    justifyContent: "center", // Center content horizontally
                  }}
                >
                  <Button color="primary" outline onClick={() => addItem(res)}>
                    + Add To Cart
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </>
    );
  } else {
    return <h1>Click on the view menu</h1>;
  }
}

export default Dishes;
