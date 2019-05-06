import React from "react";
import {connect} from "react-redux";

class TopList extends React.Component {
    render() {
    	console.log(this.props)
        return <div>
        	this is TopList
        </div>
    }
}
export default connect((state)=>{
	return state;
})(TopList)