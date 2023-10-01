import React, { useState } from "react";
import Cart from "../components/cart";
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

function Home() {
  const API_URL = "https://urchin-app-hi2hs.ondigitalocean.app";
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return (
    <div className="app-wrapper">
      <div id="background-image"></div> {/* This div holds the background image */}
      <ApolloProvider client={client}>
        <div className="container">
          <div className="search">
            <h1 className="header-title">TownTantalize</h1>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="append">Search</InputGroupAddon>
              <Input
                onChange={(e) => setQuery(e.target.value.toLowerCase())}
                value={query}
                className="search-input"
                placeholder="Search for your query" /* Added placeholder text */
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
          <Cart />
        </div>
      </ApolloProvider>

      <style jsx>{`
        .app-wrapper {
          /* Other styles for the app wrapper */
          position: relative; /* Position relative to allow absolute positioning */
          min-height: 100vh; /* Ensure the app wrapper takes up the entire viewport height */
        }

        #background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://urchin-app-hi2hs.ondigitalocean.app/uploads/cef79037739b47a18308598bd6a42962.jpg") center/cover no-repeat;
          background-size: cover;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-position: center center;
          z-index: -1; /* Place it behind other content */
        }

        .container {
          width: 100%;
          max-width: 990px;
          background-color: rgba(169, 169, 169, 0.5); /* Grey background color with opacity */
          padding: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Added shadow */
        }

        .search {
          margin-bottom: 20px;
          padding: 10px;
          color: white; /* Text color */
        }

        .header-title {
          font-size: 36px;
          font-family: "Your-Preferred-Font", sans-serif; /* Change font style */
          font-weight: bold;
        }

        .search-input {
          width: 100%;
          font-size: 16px;
          background-color: white;
          border: 2px solid #ccc;
          border-radius: 4px;
          padding: 5px 10px;
        }
      `}</style>
    </div>
  );
}

export default Home;
