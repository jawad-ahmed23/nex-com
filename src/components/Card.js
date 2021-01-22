import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { CartContext } from "../providers/cart/cart.provider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    boxShadow: "0px 0px 0px",
    borderRadius: 0,
  },
  media: {
    height: 240,
  },
  btnGroup: {
    width: "100%",
  },
  btn: {
    width: "100%",
    borderRadius: 0,
  },
  cardActionsRoot: {
    padding: "0px",
  },
}));

export default function Card({ product }) {
  const { addItem } = useContext(CartContext);
  const classes = useStyles();
  const { imageUrl, name, description, price } = product;
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
          <Button
            className={classes.btn}
            size="medium"
            color="primary"
            variant="outlined"
          >
            Rs. {price}
          </Button>
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
