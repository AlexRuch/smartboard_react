import React from 'react';

export default class ProjectHeader extends React.Component {
    render() {
        let projectName = '';
        if(this.props.project !== undefined){
            projectName = this.props.project.projectName;
        }
        return(
            <h1 className="project__name" >{projectName}</h1>
        );
        
    }
}
