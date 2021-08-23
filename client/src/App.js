import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { NavBar, Login, Landing, Cart, Products } from "./components";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Landing from "./components/Landing";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
    fetch("/line_items").then((r) => {
      if (r.ok) {
        r.json().then((cart) => setShoppingCart(cart));
      }
    });
  }, []);

  const handleAddCart = (id, quantity) => {
    let item = products.find((item) => item.id === id);

    if (shoppingCart.some((cart) => cart.product.id === item.id)) {
      console.log("already added");
    }

    fetch("/line_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
        quantity: quantity,
      }),
    })
      .then((response) => response.json())
      .then((item) => setShoppingCart([...shoppingCart, item]));
  };

  console.log(shoppingCart);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/cart">
            <Cart shoppingCart={shoppingCart} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails handleAddCart={handleAddCart} />
          </Route>
          <Route path="/products">
            <Products products={products} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
