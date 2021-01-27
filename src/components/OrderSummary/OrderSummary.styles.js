import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "300px",
    marginLeft: "auto",
    padding: theme.spacing(2),
    "& .MuiButton-root": {
      borderRadius: 0,
      width: "100%",
      marginTop: theme.spacing(2),
    },
  },
  checkoutBtn: {
    textDecoration: "none",
    width: "100%",
    color: "#fff",
    textTransform: "uppercase",
  },
}));
