import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { NavBar, Login, Landing, Cart, Products } from "./components";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Landing from "./components/Landing";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  // const [tags, setTags] = useState([]);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/line_items").then((r) => {
      if (r.ok) {
        r.json().then((cart) => setShoppingCart(cart));
      }
    });
    fetch("/products").then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
    // fetch("/tags").then((r) => {
    //   if (r.ok) {
    //     r.json().then((tags) => setTags(tags));
    //   }
    // });
  }, [user]);

  console.log(user);

  const updateLineItemQuantityFrontend = (id, quantity) => {
    const updatedData = shoppingCart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: quantity,
        };
      } else {
        return item;
      }
    });
    setShoppingCart(updatedData);
  };

  const updateLineItemQuantity = (lineItemID, quantity) => {
    updateLineItemQuantityFrontend(lineItemID, quantity);
    fetch(`/line_items/${lineItemID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity: quantity,
      }),
    });
  };

  const handleAddCart = (id, quantity) => {
    let item = products.find((item) => item.id === id);

    if (shoppingCart.some((cart) => cart.product.id === item.id)) {
      let line = shoppingCart.find((cart) => cart.product.id === item.id);
      console.log(line);
      return updateLineItemQuantity(line.id, quantity);
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

  const removeFromCart = (lineItemID) => {
    let updatedCart = shoppingCart.filter((item) => item.id !== lineItemID);
    setShoppingCart(updatedCart);
    fetch(`/line_items/${lineItemID}`, {
      method: "DELETE",
    });
  };
  const resetCart = () => {
    setShoppingCart([]);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar
        user={user}
        setUser={setUser}
        cart={shoppingCart.length}
        resetCart={resetCart}
      />
      <main>
        <Switch>
          <Route path="/cart">
            <Cart
              shoppingCart={shoppingCart}
              products={products}
              updateLineItemQuantity={updateLineItemQuantity}
              removeFromCart={removeFromCart}
              user={user}
            />
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
      <Footer />
    </>
  );
}

export default App;
