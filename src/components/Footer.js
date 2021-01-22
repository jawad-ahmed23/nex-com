import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(15),
    "& p": {
      fontWeight: 500,
      fontSize: theme.spacing(2),
      marginTop: theme.spacing(10),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" component="p" variant="p">
        Copyright &copy; by Jawad Ahmed 2021
      </Typography>
    </div>
  );
}
