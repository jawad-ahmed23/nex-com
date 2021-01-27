import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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
