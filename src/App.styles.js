import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#C11926",
      dark: "#a20b18",
    },
    secondary: {
      main: "#ffff00",
    },
  },
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
