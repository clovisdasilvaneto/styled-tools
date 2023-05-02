import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Global, css, ThemeProvider } from "@emotion/react";

// You first need to add the module 🔥
import StyledTools from "styled-tools-core";

// Then you can decorate your theme with our function 🚀
const { theme, globals } = StyledTools({
  colors: {
    nevinha: {
      primary: "red"
    },
    background: "#000",
    primary: "hotpink",
  },
  base: {
    fontSize: "16px",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* Since we map all the theme properties to css-variables
          you need to take our globals variable and pass it to the
          Global component of your css-in-js library 🙂
       */}
      <Global
        styles={css`
          ${globals}
        `}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
