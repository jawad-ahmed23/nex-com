import React, { useContext } from "react";

// MuiComponents
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import Container from "@material-ui/core/Container";

// App Context
import ProductsContext from "../contexts/products/products.context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    boxShadow: "0px 0px 0px",
  },
  title: {
    fontSize: theme.spacing(4),
    textTransform: "uppercase",
    color: "#333",
    fontWeight: "400",
  },
}));

export default function CardList(props) {
  const products = useContext(ProductsContext);

  const { title } = props;
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={6} md={4} key={product.id}>
            <Paper className={classes.paper}>
              <Card product={product} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
