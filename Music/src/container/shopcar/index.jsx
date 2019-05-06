import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "store/actions/shopcar";
import { getShopcarList } from 'api/shopcar'
import { Link } from 'react-router-dom';

class Shopcar extends Component {
    componentDidMount() {
        this._getShopcarList()
    }

    _getShopcarList() {
        const { update, shopcarList } = this.props;
        getShopcarList().then((res) => {
            update(shopcarList)
        })
    }

    render() {
        const { shopcarList, plus, minus, total, summary, checked } = this.props
        return <div>
            <div className='back'>
                <Link to='/list'>返回</Link>
            </div>

            <div className='shop'>  
                {
                    shopcarList.map((item, index) => {
                        return <div key={index}>
                            <input type="checkbox" checked={item.isCheck} onChange={(e) => {
                                checked(index, shopcarList)
                            }} />
                            <dl className='shopCont'>
                                <dt><img src={item.img} alt="" /></dt>
                                <dd>
                                    <h2>
                                        {item.name}
                                    </h2>
                                    <p>{item.price}元</p>
                                    <span onClick={() => {
                                        minus(index, shopcarList)
                                    }}>-</span>
                                    <span>{item.count}</span>
                                    <span onClick={() => {
                                        plus(index, shopcarList)
                                    }}>+</span>
                                </dd>
                            </dl>
                        </div>
                    })
                }
            </div>
            <div className='big'>
                <div className='total'>共有：{total}件</div>
                <div className='summary'>去结算：￥{summary}</div>
            </div>
        </div>
    }
}
const mapStateProps = (state) => {
    return state.ShopcarReducers
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch(actions.update(payload))
        },
        //点击加号
        plus(index, shopcarList) {
            shopcarList[index].count++;
            let tot = 0;
            let sum = 0;
            shopcarList.forEach((item, index) => {
                if (item.isCheck) {
                    tot += item.count;
                    sum += item.count * item.price;
                }
            })
            dispatch(actions.total(tot))
            dispatch(actions.summary(sum))
            dispatch(actions.plus(shopcarList))
        },
        //点击减号
        minus(index, shopcarList) {
            if (shopcarList[index].count < 1) return;
            shopcarList[index].count--;
            let tot = 0;
            let sum = 0;
            shopcarList.forEach((item, index) => {
                if (item.isCheck) {
                    tot += item.count;
                    sum += item.count * item.price;
                }
            })
            dispatch(actions.total(tot))
            dispatch(actions.summary(sum))
            dispatch(actions.minus(shopcarList))
        },
        //选中复选框
        checked(index, shopcarList) {
            shopcarList[index].isCheck = !shopcarList[index].isCheck;
            dispatch(actions.checked(shopcarList))
        }
    }
}
export default connect(mapStateProps, mapDispatchToProps)(Shopcar)