import Login from "view/login";
import Registry from "view/registry";
import Home from "view/home";
import Music from "view/music";
import Rank from "view/music/rank";
import RankDetail from "view/music/detail";
import TopList from "view/music/toplist";
import Search from "view/music/search";

import Goods from "view/shopcar/goods";
import Shopcar from "view/shopcar";
import Product from "view/product";

const Routes = [{
    path: "/login",
    component: Login
}, {
    path: "/registry",
    component: Registry
}, {
    path: "/home",
    component: Home
}, {
    path: "/music",
    component: Music,
    children: [{
        path: "/music/rank",
        component: Rank
    }, {
        path: "/music/detail",
        component: RankDetail
    }, {
        path: "/music/toplist",
        component: TopList
    }, {
        path: "/music/search",
        component: Search
    }]
}, {
    path: "/shopcar",
    component: Shopcar
}, {
    path: "/goods",
    component: Goods
},{
    path:"/product",
    component:Product
}]

export default Routes;