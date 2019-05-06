import React from "react";
import RouterView from "router";
import { NavLink } from "react-router-dom";
import Header from "comp/header";
import Layout from "comp/layout";


const NavBar = () => {
    return <nav>
		<ul className="clearfix text-center bdb1 f16">
    		<li className="col-xs-4  pl0 pr0">
    			<NavLink className="block pt10 pb10" to="/music/rank" activeClassName="navbar-active">推荐</NavLink>
    		</li>
    		<li className="col-xs-4 pl0 pr0">
    			<NavLink className="block pt10 pb10" to="/music/toplist" activeClassName="navbar-active">排行榜</NavLink>
    		</li>
    		<li className="col-xs-4  pl0 pr0">
    			<NavLink className="block pt10 pb10" to="/music/search" activeClassName="navbar-active">搜索</NavLink>
    		</li>
    	</ul>
	</nav>
}
class Music extends React.Component {
    render() {
        const { routes } = this.props;
        return <div className="wraper">
        	<Header></Header>
        	<NavBar></NavBar>
        	<Layout>
        		<RouterView routes={routes}/>
        	</Layout>
        </div>
    }
}
export default Music;