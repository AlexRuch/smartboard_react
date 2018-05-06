import React from 'react';
import { connect } from 'react-redux';

class Project extends React.Component {
    render() {
        if(this.props.projectsList.length !== 0){
            const project = (this.props.projectsList.filter(proj => parseInt(proj.projectId, 10) === parseInt(this.props.match.params.projectId, 10))[0]);
            this.props.projectsList.map(e => console.log(e));
            console.log(this.props.match.params.projectId);
            console.log(project);
            return(<p>{project.projectName}</p>);
        }
    }
}

function mapStateToProps(state) {
    return {
        projectsList: state.projects.projectsList
    }
}

export default connect(mapStateToProps)(Project);
