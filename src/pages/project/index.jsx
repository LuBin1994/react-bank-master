import React, { Component } from 'react';
import PageTitle from '@/component/common/pageTitle';
import Project from '@/component/project';
import GoBackBtn from '@/component/common/goBackBtn';
class Index extends Component {
  render() {
    return (
      <div className="App g-project">
        <PageTitle/>
          <div className="m-menuInfoTitle">
              <GoBackBtn/>
              <div className="u-icon"></div>
              项目查询
          </div>
        <Project/>
      </div>
    );
  }
}
export default Index;
