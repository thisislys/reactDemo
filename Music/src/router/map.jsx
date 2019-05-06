import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

class RouteMap extends Component {
    render() {
        const { routes } = this.props;
        const defaultRoute = <Route key='0' path='/' render={() => {
            return <Redirect to='/index/recom' />
        }} exact></Route>
        return <Switch>
            {
                routes.length && routes.map((item, index) => {
                    if (item.component) {
                        const { children: routes, component: Component } = item;
                        return <Route key={index} path={item.path} component={(api) => {
                            return <Component routes={routes} api={api}/>
                        }}></Route>
                    }
                    return true
                }).concat([defaultRoute])

            }
        </Switch>
    }
}

export default RouteMap