import React from "react";

import { connect } from "react-redux";
import axios from "axios";
import Header from "comp/header";

class Login extends React.Component {
    login = (e) => {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (username.trim().length < 1 || password.trim().length < 1) return;
        console.log(username, password)
        axios.get("/userLogin", {
            params: {
                username,
                password
            }
        }).then(res => {
            
            if (res.data.code === 1) {
                this.props.dispatch({ type: "SET_USRETOKEN", payload: res.data.token })
                this.props.history.push("/home")
            }
        })
    }
    render() {
        return <div className="wraper">
            <Header></Header>
            <section className="content p10">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="username" className="col-sm-2 control-label">账号</label>
                    <div className="col-sm-10">
                      <input ref="username" type="text" className="form-control" id="username" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="col-sm-2 control-label">密码</label>
                    <div className="col-sm-10">
                      <input ref="password" type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button className="btn btn-success btn-block" onClick={this.login}>登陆</button>
                    </div>
                  </div>
                </form>
            </section>
        </div>
    }
}
export default connect(state => state.LoginReducer)(Login);