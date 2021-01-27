import React, { useContext } from "react";
import { Paper, Grid, Container } from "@material-ui/core";
import Card from "./Card/Card.component";
import ProductsContext from "../../contexts/products/products.context";
import useStyles from "./CardList.styles";

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
