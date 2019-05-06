import React from "react";

class Registry extends React.Component {
    render() {
        return <div className="wraper">
        	<header className="header">
        		注册
        	</header>
        	<section className="content p10">
        		<form className="form-horizontal">
				  <div className="form-group">
				    <label htmlFor="username" className="col-sm-2 control-label">账号</label>
				    <div className="col-sm-10">
				      <input type="email" className="form-control" id="username" placeholder="Email"/>
				    </div>
				  </div>
				  <div className="form-group">
				    <label htmlFor="password" className="col-sm-2 control-label">密码</label>
				    <div className="col-sm-10">
				      <input type="password" className="form-control" id="password" placeholder="Password"/>
				    </div>
				  </div>
				  <div className="form-group">
				    <div className="col-sm-offset-2 col-sm-10">
				      <button type="submit" className="btn btn-success btn-block">注册</button>
				    </div>
				  </div>
				</form>
        	</section>
        </div>
    }
}
export default Registry;