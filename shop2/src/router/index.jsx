import React from "react";
import Routes from "./config";
import RouteMap from "./map";
class RouterView extends React.Component {
    render() {
        const { routes } = this.props;
        return <RouteMap routes={routes===undefined?Routes:routes}/>
    }
}
export default RouterView;