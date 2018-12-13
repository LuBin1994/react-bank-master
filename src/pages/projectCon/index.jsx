import React, { Component } from 'react';
import PageTtile from '@/component/common/pageTitle';
import ProjectCon from '@/component/projectCon';
import GoBackBtn from '@/component/common/goBackBtn';
import Menu from '@/component/common/menu';
class Index extends Component {
  render() {
    return (
      <div className="App g-projectCon">
        <PageTtile/>
          <div className="m-menuInfoTitle">
              <GoBackBtn/>
              内资项目
          </div>
        <ProjectCon/>
      </div>

    );
  }
}
export default Index;
