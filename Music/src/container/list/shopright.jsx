import React, { Component } from 'react';
import { getProductList } from 'api/product';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return state.ShopcarReducers
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToShop(product, shopcarList) {
            let temp = shopcarList.filter((item, index) => {
                if (item.name == product.name) {
                    return item
                }
            })
            if (temp.length) {
                shopcarList.forEach((item) => {
                    if (item.name == product.name) {
                        item.count++
                    }
                })
            } else {
                shopcarList.push({ ...product, count: 1, isCheck: true })
            }
            dispatch({ type: 'UPDATE', payload: shopcarList })
        }


    }
}

@connect(mapStateToProps, mapDispatchToProps)
class ShopListRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            id: 0
        }
        this._getProductList = this._getProductList.bind(this)
    }
    componentDidMount() {
        this._getProductList()
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id
        }, () => {
            this._getProductList()
        })
    }
    _getProductList() {
        const { id } = this.props;
        getProductList(id).then((res) => {
            this.setState({
                productList: res.data.data.collection
            })
        })
    }
    render() {
        const { productList } = this.state;
        const { total, addToShop, shopcarList } = this.props;

        return <div className='shopList'>
            {
                productList.length && productList.map((item, index) => {
                    return <dl key={index} >
                        <dt><img src={item.img} alt="" /></dt>
                        <dd>
                            <h3>{item.name}</h3>
                            <p>{item.tit}</p>
                            <p className='pushShop'>
                                <span>￥{item.price}</span>
                                <span onClick={() => {
                                    addToShop(item, shopcarList)
                                }}>加入购物车</span>
                            </p>
                        </dd>
                    </dl>
                })
            }
            <div className='lookShop'>
                <Link to='/shopcar'>查购物车:{total}</Link>
            </div>
        </div>
    }
}

export default ShopListRight