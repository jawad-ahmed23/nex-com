import React, { useContext } from "react";

// Material UI Core Components
import {
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";

// Material UI Icons
import {
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";

import { CartContext } from "../../providers/cart/cart.provider";

import useStyles from "./Navbar.styles";

export default function Navbar() {
  const { TotalCartItems } = useContext(CartContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/">Fast Meals</Link>
          </Typography>
          <Link to="/cart">
            <IconButton className={classes.cartButton}>
              <Badge badgeContent={TotalCartItems} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
