import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    boxShadow: "0px 1px 8px lightgrey",
  },
  heading: {
    fontWeight: "400",
    textShadow: `1px 1px 1px #000`,
    fontSize: theme.spacing(3),
  },
  infoText: {
    fontWeight: 300,
  },
}));
