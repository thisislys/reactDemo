import Index from 'view/index'
import Shopcar from 'view/shopcar'
import List from 'view/list'
import Detail from 'view/index/detail'
import Recom from 'view/index/subpage/recom'
import TopList from 'view/index/subpage/toplist'
import Search from 'view/index/subpage/search'

const Routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
        path: '/index/recom',
        name: '推荐',
        component: Recom,
    }, {
        path: '/index/toplist',
        name: '排行榜',
        component: TopList,
    }, {
        path: '/index/search',
        name: '搜索',
        component: Search,
    }]
},{
    path: '/detail/:id',
    name: '详情',
    component: Detail
},{
    path: '/shopcar',
    name: '购物车',
    component: Shopcar
},{
    path: '/list',
    name: '查看购物车',
    component: List
}]

export default Routes