import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'
class Menu extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className="m-nemu">
          <NavLink exact to="/" className="m-home m-menuItem ">
              <div className="u-homeIcon"></div>首页
          </NavLink>
          <NavLink to="/project" className="m-search m-menuItem">
              <div className="u-searchIcon"></div>项目查询
          </NavLink>
          <NavLink to="/ProjectCon" className="m-manager m-menuItem">
              <div className="u-managerIcon"></div>管理员
          </NavLink>
      </div>
    );
  }
}
export default Menu;
