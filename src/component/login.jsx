import React, { Component } from 'react';
class Login extends Component {
  render() {
    return (
      <div className="g-Login">
          <div className="u-loginTitle">杭州经济技术开发区招商项目库</div>
          <div className="m-loginGroup">
              <div className="m-loginItem">
                  <div className="m-loginIcon fl">
                      <div className="u-userIcon"></div>
                  </div>
                  <input type="text" className="u-loginInput fl"/>
              </div>
              <div className="m-loginItem">
                  <div className="m-loginIcon fl">
                      <div className="u-pwdIcon"></div>
                  </div>
                  <input type="password" className="u-loginInput fl"/>
              </div>
              <a href="/home" className="u-btn u-loginBtn">登录</a>
          </div>
      </div>
    );
  }
}
export default Login;
