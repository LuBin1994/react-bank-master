import React from 'react'  
import { BrowserRouter,Route,Router,Switch} from 'react-router-dom'

// 引入所有基础配置
import Index from '@/pages/index/';
import Login from '@/pages/login';
import Manager from '@/pages/manager';
import ProjectList from '@/pages/projectList';
import ProjectCon from '@/pages/projectCon';
import Project from '@/pages/project';
import App from '@/component/App'
export default class RouteMap extends React.Component{
    updateHandle () {  
        console.log('每次router变化之后都会触发')  
    }  
    render () {  
        return (
            <BrowserRouter onUpdate={this.updateHandle.bind(this)}>
                <div>
                    <Switch>
                        <Route path='/login' extra  component={Login}></Route>
                        <App>
                        <Switch>
                            <Route path='/project'  component={ProjectList}></Route>
                            <Route path='/ProjectCon'  component={ProjectCon}></Route>
                            <Route path='/projectList'  component={Project}></Route>
                            <Route path='/manager'   component={Manager}></Route>
                            <Route path='/' component={Index}></Route>
                        </Switch>
                        </App>
                    </Switch>
                </div>

            </BrowserRouter>
        )  
    }  
}  
