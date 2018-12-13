import React, { Component } from 'react';
import '@/static/sass/App.scss';
class App extends Component {
  render() {
    return (
      <div className="g-manager">
          <div className="m-menuInfoTitle">
              <div className="u-icon"></div>管理员
          </div>
          <div className="m-managerInfo">
              <div className="m-title">
                  <div className="u-blueline"></div>管理员
              </div>
              <div className="m-content">
                  <div className="m-contentItem">
                      <div className="u-left">姓名 ：</div>
                      <div className="u-right">张三</div>
                  </div>
                  <div className="m-contentItem">
                      <div className="u-left">用户名 ：</div>
                      <div className="u-right">admin</div>
                  </div>
                  <div className="m-contentItem">
                      <div className="u-left">联系电话 ：</div>
                      <div className="u-right">12345678911</div>
                  </div>
                  <div className="m-contentItem">
                      <div className="u-left">管理等级 ：</div>
                      <div className="u-right">管理员</div>
                  </div>
                  <div className="m-contentItem">
                      <div className="u-left">管理权限 ：</div>
                      <div className="u-right">操作员</div>
                  </div>
              </div>
          </div>
          <a href="/login" className="u-btn u-logoutBtn">
              <div  className="u-logoutIcon"></div>登出
          </a>
      </div>
    );
  }
}
export default App;
