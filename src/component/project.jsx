import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="m-project">
        <div className="m-projectNav">
          项目查询>符合条件的项目
        </div>
        <div className="m-projectInner">
          <div className="m-tableItemGroup">
              <div className="u-Id u-item"></div>
              <div className="u-proNum u-item">项目编号</div>
              <div className="u-proName u-item">项目名称</div>
              <div className="u-person u-item">联系人</div>
              <div className="u-personTel u-item">联系方式</div>
              <div className="u-proTime u-item">项目时间</div>
          </div>
          <div className="m-proGroup">
              <div className="m-tableItemGroup">
                  <div className="u-Id u-item">1</div>
                  <div className="u-proNum u-item">20180810</div>
                  <div className="u-proName u-item">杭州下沙</div>
                  <div className="u-person u-item">欧阳经理</div>
                  <div className="u-personTel u-item">13122222222</div>
                  <div className="u-proTime u-item">2018-08-10</div>
              </div>
              <div className="m-tableItemGroup">
                  <div className="u-Id u-item">1</div>
                  <div className="u-proNum u-item">20180810</div>
                  <div className="u-proName u-item">杭州下沙</div>
                  <div className="u-person u-item">欧阳经理</div>
                  <div className="u-personTel u-item">13122222222</div>
                  <div className="u-proTime u-item">2018-08-10</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
