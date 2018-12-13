import React, { Component } from 'react';
class GoBackBtn extends Component {
    constructor(props) {
        super(props);
    }
    goback(){
        window.history.back();
    }
    render() {
      return (
          <div className="u-gobackBtn" onClick={this.goback.bind(this)}></div>
    );
  }
}
export default GoBackBtn;
