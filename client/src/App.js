import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// import { NavBar, Login, Landing, Cart, Products } from "./components";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Landing from "./components/Landing";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/cart">
            <Cart user={user} />
          </Route>
          <Route path="/products">
            <Products user={user} />
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
