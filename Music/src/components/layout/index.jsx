import React, { Component } from 'react';

class Layout extends Component {
    render() {
        const { children } = this.props;
        return <section>
            {children}
        </section>


    }
}

export default Layout