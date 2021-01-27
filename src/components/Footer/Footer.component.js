import React from "react";
import Typography from "@material-ui/core/Typography";

import useStyles from "./Footer.styles";

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" component="p" variant="subtitle1">
        Copyright &copy; by Jawad Ahmed 2021
      </Typography>
    </div>
  );
}
