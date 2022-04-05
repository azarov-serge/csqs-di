import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import IocProvider from "./ioc/IocProvider";
import container from "./containers/global.containers";
import { store } from "./store/store";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={store}>
    <IocProvider container={container} store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IocProvider>
  </Provider>,
  document.getElementById("root")
);
