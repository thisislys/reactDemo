import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    render() {
    	console.log(this.props)
        return <div>
        	this is Home
        </div>
    }
}
export default connect((state) => {
    return state.LoginReducer
})(Home);