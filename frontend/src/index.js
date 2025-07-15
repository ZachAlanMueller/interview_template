import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider
    componentSize="large"
    locale={"en_US"}
    theme={{
      components: {Collapse: {contentPadding: 0}},
      token: {fontFamily: `"Hind Vadodara", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif`},
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
