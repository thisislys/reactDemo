import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterView from "router";

import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

class App extends React.Component {
    render() {
        return <Router>
    		<RouterView/>
    	</Router>
    }
}
export default App;