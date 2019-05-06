import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

class RouteMap extends React.Component {
    render() {
        const { routes } = this.props;
        const defaultRoutes = <Route path="/" component={()=>{
            return <Redirect to="/music/rank"/>
        }} key={0} exact/>
        return <Switch>
            {
                routes.map((item,index)=>{
                    const Comp = item.component;
                    return <Route path={item.path} component={(apiRouter)=>{
                        const children = item.children===undefined?[]:item.children
                        return <Comp routes={children} {...apiRouter}></Comp>
                    }} key={index}/>
                }).concat([defaultRoutes])
            }
            
        </Switch>
    }
}
export default RouteMap;

