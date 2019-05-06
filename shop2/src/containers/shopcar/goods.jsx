import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Header from "comp/header";
import Layout from "comp/layout";

class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
        this.getProductList = this.getProductList.bind(this);
    }
    componentDidMount() {
        this.getProductList()
    }
    getProductList() {
        axios.get("http://localhost:3000/getProductList").then(res => {
            this.setState({
                productList: res.data
            })
        })
    }
    addToShopcar(product) {
        const { shopcarList, update } = this.props;
        update(product, shopcarList)
    }
    render() {
        const { productList } = this.state;

        return <div className="wraper">
            <Header title={"购物车"} showRight={false}></Header>
            <Layout>
                <div>
                    <div className="p10">
                        <button className="float-right mt5" onClick={()=>this.props.history.push("/shopcar")}>查看购物车</button>
                        <h3>特价促销</h3>
                    </div>
                    <ol>
                        {
                            productList.map(item=>{
                                return <li key={item.id} className="mb15">
                                    <dl className="clearfix">
                                        <dt className="col-xs-4">
                                            <img src={item.picurl} alt="" className="img-responsive"/>
                                        </dt>
                                        <dd className="col-xs-8">
                                            <h4>{item.name}</h4>
                                            <div>
                                                <button className="float-right mt3" onClick={()=>this.addToShopcar(item)}>+</button>
                                                <p className="f14 mt10">价格：<span className="text-orange">{item.price}  元</span></p>
                                            </div>
                                        </dd>
                                    </dl>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </Layout>
        </div>
    }
}
const mapStateToProps = (state) => {
    return state.ShopcarReducer
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(product, shopcarList) {

            let hasItem = shopcarList.filter(item => {
                return item.id === product.id
            })
            if (hasItem.length < 1) {
                shopcarList.push({ ...product, count: 1,isCheck:true})
            } else {
                shopcarList.forEach((item, index) => {
                    if (item.id === product.id) {
                         shopcarList[index].count++
                    }
                })
            }
            dispatch({ type: "UPDATE", payload: shopcarList })

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Goods);