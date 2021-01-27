import React from "react";
import { Home, Cart, Checkout, ProductDetail } from "./pages";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import theme from "./App.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/product/:id" component={ProductDetail} />
        </Switch>

        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
