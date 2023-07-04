import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

import Cart from "./Component/Cart";
import { ProductList } from "./Component/ProductList";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/cart" Component={<Cart />} />
        <Route path="/products" Component={<ProductList />} />
      </Routes>
    </Router>
  </StrictMode>
);
