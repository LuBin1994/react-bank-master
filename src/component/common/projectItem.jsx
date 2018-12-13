import React, { Component } from 'react';
class ProjectItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a className="m-projectItem" >
                杭州市江干区白杨街道停车位划分管理项目<span className="u-time fr">2018-8-10</span>
            </a>
        );
    }
}
export default ProjectItem;
