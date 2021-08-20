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
        r.json().then((user) => setProducts(user));
      }
    });
  }, []);

  const handleAddCart = (id) => {
    let item = products[id - 1];
    setShoppingCart([...shoppingCart, item]);

    fetch("/line_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: id,
        quantity: 1,
      }),
    });
  };

  console.log(shoppingCart);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/cart">
            <Cart user={user} />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products products={products} handleAddCart={handleAddCart} />
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
