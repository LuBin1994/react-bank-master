import React, { Component } from 'react';
import PageTitle from '@/component/common/pageTitle'
import GoBackBtn from '@/component/common/goBackBtn'
import ProjectList from '@/component/projectList'
class Index extends Component {
  render() {
    return (
      <div className="App g-projectList">
        <PageTitle/>
        <div className="m-menuInfoTitle">
          <GoBackBtn/>
            外资项目
        </div>
       <ProjectList/>
      </div>
    );
  }
}
export default Index;
