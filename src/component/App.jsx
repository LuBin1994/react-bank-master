import React, { Component } from 'react';
import Menu from '@/component/common/menu'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
          {this.props.children}
      </div>
    );
  }
}
export default App;
