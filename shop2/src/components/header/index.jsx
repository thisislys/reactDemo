import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

class Component extends React.Component {
    static defaultProps = {
        title: "QQ音乐"
    }
    render() {
        const { title, showRight } = this.props;
        return <header className="header pr15">
                <div className={showRight===true?"show":"hide"}>
                    <Link to="/registry" className="float-right text-white f14">注册</Link>
                </div>
                {title}
        </header>
    }
}
export default Component;