import React from "react";
import { connect } from "react-redux";
import { update } from "store/actions/goods";

const mapStateToProps = (state) => {
    return state.GoodsListReducer
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGoodsList() {
            dispatch(update())
        }
    }
}
@connect(mapStateToProps, mapDispatchToProps)
class Product extends React.Component {
    componentDidMount() {
    	this.props.getGoodsList();
    }
    render() {
        console.log(this.props)
        return <div>
        	this is Product
        </div>
    }
}

export default Product;