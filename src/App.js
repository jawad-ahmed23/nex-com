import React from "react";
import { Home, Cart, Checkout } from "./pages";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";

import "./App.css";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#C11926",
      dark: "#a20b18",
    },
    secondary: {
      main: "#ffff00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
