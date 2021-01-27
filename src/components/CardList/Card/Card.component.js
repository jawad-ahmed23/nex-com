import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonGroup,
} from "@material-ui/core";
import { CartContext } from "../../../providers/cart/cart.provider";

import useStyles from "./Card.styles";

export default function Card({ product }) {
  const { addItem } = useContext(CartContext);
  const classes = useStyles();
  const { id, imageUrl, name, description, price } = product;
  return (
    <MuiCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            {name.toUpperCase()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionsRoot} disableSpacing>
        <ButtonGroup orientation="vertical" className={classes.btnGroup}>
          <Link to={`/product/${id}`}>
            <Button
              className={classes.btn}
              size="medium"
              color="primary"
              variant="outlined"
            >
              Rs. {price}
            </Button>
          </Link>

          <Button
            className={classes.btn}
            size="medium"
            color="primary"
            variant="contained"
            onClick={() => addItem(product)}
          >
            ADD TO BUCKET
          </Button>
        </ButtonGroup>
      </CardActions>
    </MuiCard>
  );
}
