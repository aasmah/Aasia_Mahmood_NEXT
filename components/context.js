/* /context/AppContext.js */

import React from "react";

const AppContext = React.createContext({
  isAuthenticated: true,
  cart: { items: [], total: 0 },
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}, // Add this function to clear the cart
  user: false,
  setUser: () => {},
});

export default AppContext;