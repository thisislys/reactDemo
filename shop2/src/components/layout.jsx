import React from "react";

class Layout extends React.Component {
    render() {
        return <section className="content">
        	{this.props.children}
        </section>
    }
}
export default Layout;