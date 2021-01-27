import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& p": {
      fontWeight: 500,
      fontSize: theme.spacing(2),
      marginTop: theme.spacing(10),
    },
  },
}));
