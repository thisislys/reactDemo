import React from "react";
import { connect } from "react-redux";

class Shopcar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            summary: 0
        }
    }
    componentDidMount() {
        this.computed();
    }
    plus(index) {
        const { shopcarList, plus } = this.props;
        shopcarList[index].count++;
        this.computed();
        plus(shopcarList);
    }
    minus(index) {
        const { shopcarList, plus } = this.props;
        if (shopcarList[index].count < 1) return;
        shopcarList[index].count--;
        plus(shopcarList);
    }
    computed() {
        let { shopcarList } = this.props;
        let sum = 0;
        let tot = 0;
        shopcarList.forEach(item => {
            if (item.isCheck) {
                sum += item.price * item.count;
                tot += item.count;
            }
        })
        this.setState({
            total: tot,
            summary: sum
        }, () => {
            console.log(this.state.summary)
        })
    }
    render() {
        const { shopcarList } = this.props;
        return <div className="pt15 pb15">
        	<div className="pl15">
        		<input type="checkbox" id="checkall" onChange={(e)=>{
        			let isCheck = e.target.checked;
        			shopcarList.forEach(item=>{
    					item.isCheck = isCheck
    				})
    				this.computed()
        			this.props.update(shopcarList)
        		}}/>
        		<label htmlFor="checkall" className="text-middle">
        			全选/反选
        		</label>
        	</div>
        	<hr/>
        	<ol>
                {
                    shopcarList.map((item,index)=>{
                        return <li key={item.id} className="mb15">
                        	<input style={{marginLeft:15}} type="checkbox" checked={item.isCheck} onChange={(e)=>{
                        		shopcarList[index].isCheck =e.target.checked;
                        		this.computed()
                        		this.props.checkItem(shopcarList)
                        	}}/>	
                            <dl className="clearfix">
                                <dt className="col-xs-4">
                                    <img src={item.picurl} alt="" className="img-responsive"/>
                                </dt>
                                <dd className="col-xs-8">
                                    <h4>{item.name}</h4>
                                    <div>
                                        <p className="float-right mt3">
                                        	<span className="pl3 pr3 bd1" onClick={()=>this.minus(index)}>-</span>
                                        	<span className="pl3 pr3">{item.count}</span>
                                        	<span className="pl3 pr3 bd1" onClick={()=>this.plus(index)}>+</span>
                                        </p>
                                        <p className="f14 mt5">价格：<span className="text-orange">{item.price}  元</span></p>
                                        <p className="f14 mt5">产地：<span>{item.from}</span></p>
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    })
                }
            </ol>
            <ul className="bdt1 pt10 pb10" style={{position:"absolute",bottom:0,width:"100%",paddingLeft:15,paddingRight:15}}>
            	<li className="float-right">总价：{this.state.summary}</li>
            	<li>总数：{this.state.total}</li>
            </ul>
        </div>
    }
}
const mapStateToProps = (state) => {
    return state.ShopcarReducer;
}
const mapDispatchToProps = (dispatch) => {
    return {
        update(payload) {
            dispatch({ type: "UPDATE", payload })
        },
        checkItem(payload) {
            dispatch({ type: "CHECK_ITEM", payload })
        },
        plus(payload) {
            dispatch({ type: "PLUS", payload })
        },
        minus(payload) {
            dispatch({ type: "MINUS", payload })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopcar);