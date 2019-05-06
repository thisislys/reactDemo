import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import RouteView from 'router'

class Index extends Component {
    render() {
        const { routes } = this.props;
        return <div>
            <div className='mod_nav'>
                <ul>
                    <li>
                        <NavLink activeClassName='selected' to='/index/recom'>推荐</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='selected' to='/index/toplist'>排行榜</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='selected' to='/index/search'>搜索</NavLink>
                    </li>
                </ul>
            </div>
            <RouteView routes={routes} />
        </div>
    }
}

export default Index