import React, { Component } from 'react';
import Routes from './routes';
import RouteMap from './map';

class RouteView extends Component {
    render() {
        const routes = this.props.routes ? this.props.routes : Routes
        return <RouteMap routes={routes} />
    }
}

export default RouteView