import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },

  totalPriceText: {
    textAlign: "right",
    marginRight: 0,
    marginBottom: theme.spacing(1),
    fontWeight: "400",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      borderRadius: 0,
    },
  },
  btn: {
    borderRadius: 0,
    textDecoration: "none",
    color: "#fff",
  },
  emtyText: {
    fontSize: "30px",
    textAlign: "center",
  },
  clearBtn: {
    textDecoration: "underline",
  },
}));
