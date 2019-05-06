import React from "react";
import App from "view/app";
import ReactDOM from "react-dom";
import store from "store";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
    	<App />
    </Provider>,
    document.getElementById('app')
);