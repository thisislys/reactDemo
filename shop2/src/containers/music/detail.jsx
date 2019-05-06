import React from "react";

class Detail extends React.Component {
    render() {
    	console.log(this.props)
        return <div>
        	this is Detail,id is :{this.props.location.state.id}
        </div>
    }
}
export default Detail;