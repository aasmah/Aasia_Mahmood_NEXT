import { gql, useQuery } from '@apollo/client';
import Dishes from "./dishes";
import { useContext, useState } from 'react';
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

function RestaurantList(props) {
  const [restaurantID, setRestaurantID] = useState(0);
  const { cart } = useContext(AppContext);
  const [state, setState] = useState(cart);
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        id
        name
        description
        image {
          url
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  let searchQuery = data.restaurants.filter((res) => {
    return res.name.toLowerCase().includes(props.search);
  });

  let restId = searchQuery[0].id;

  // Define renderer for Dishes
  const renderDishes = (restaurantID) => {
    return (<Dishes restId={restaurantID}></Dishes>);
  };

  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col xs="20" sm="6" md="4" lg="3" key={res.id}>
        <Card className="restaurant-card" style={{ backgroundColor: "grey", color: "white" }}>
          <CardImg
            top={true}
            className="restaurant-image"
            src={'https://urchin-app-hi2hs.ondigitalocean.app/' + res.image.url}
            style={{ height: "200px", objectFit: "fill" }} // Set the image size
          />
          <CardBody style={{ padding: "10px", borderRadius: "5px" }}>
            <CardTitle className="restaurant-title" style={{ fontSize: "90%", color: "black", background: "lightgray", padding: "10px" }}>
              {res.name}
            </CardTitle>
            <CardText className="restaurant-description" style={{ fontSize: "90%", color: "black" }}>
              {res.description}
            </CardText>
            <Button
              color="grey" // Change color to "grey"
              onClick={() => setRestaurantID(res.id)}
              className="restaurant-button"
              style={{ backgroundColor: "black", color: "white", fontSize: "90%" }}
            >
              View Menu
            </Button>
          </CardBody>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row>{restList}</Row>
        <Row>{renderDishes(restaurantID)}</Row>
      </Container>
    );
  } else {
    return <h1>No Restaurants Found</h1>;
  }
}

export default RestaurantList;
