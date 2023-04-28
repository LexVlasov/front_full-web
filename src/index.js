import React from "react";
import {Provider} from 'react-redux';
import ReactDOM from "react-dom/client";
import App from "./App.js";
import CssBaseline from "@mui/material/CssBaseline";
import {BrowserRouter} from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import store from './redux/store.js'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <App/>
      </StyledEngineProvider>
      </Provider>
    </BrowserRouter>   
    </ThemeProvider>
  </>
);