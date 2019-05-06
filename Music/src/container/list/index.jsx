import React, { Component } from 'react';
import ShopListRight from './shopright';
import axios from 'axios'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shopLeft: [],
            id: 0
        }
        this.getShopId = this.getShopId.bind(this);
    }
    componentDidMount() {
        this._getShopLeftList()
    }
    _getShopLeftList() {
        axios.get("/getLeftShopList").then((res) => {
            this.setState({
                shopLeft: res.data
            })
        })
    }
    getShopId(id) {
        this.setState({
            id: id
        })
    }
    render() {
        const { shopLeft, id } = this.state;
        return <div>
            <div className='shop_wapper'>
                <div className='shopLeft'>
                    {
                        shopLeft.length && shopLeft.map((item, index) => {
                            return <ul key={index}>
                                <li onClick={() => { this.getShopId(index) }}>{item.title}</li>
                            </ul>
                        })
                    }
                </div>
                <ShopListRight id={id} />
            </div>
        </div>
    }
}

export default List