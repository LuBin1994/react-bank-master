import React, { Component } from 'react';
import PageTitle from '@/component/common/pageTitle';
import Manager from '@/component/manager';
class App extends Component {
    render() {
        return (
            <div className="App">
                <PageTitle/>
                <Manager/>
            </div>
        );
    }
}
export default App;