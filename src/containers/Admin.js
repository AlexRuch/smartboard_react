import React from 'react';
import ProjectsListComponent from '../components/admin/projectsList';
import { connect } from 'react-redux';
import { loadProjects, createProject, sortByCreate, sortByUpdate } from '../actions/projects';


class Admin extends React.Component {

    componentDidMount(){
        this.props.loadProjects();
    }

    render() {
        
        return (
            <ProjectsListComponent projectsList={this.props.projectsList}
                                   createProject={(projectName) => this.props.createProject(projectName)}
                                   sortByCreate={() => this.props.sortByCreate()}
                                   sortByUpdate={() => this.props.sortByUpdate()}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        projectsList: state.projects.projectsList
    }

}

function mapDispatchToProps(dispatch) {
    return {
        loadProjects: () => {
            dispatch(loadProjects())
        },
        createProject: (projectName) => {
            dispatch(createProject(projectName));
        },
        sortByCreate: () => {
            dispatch(sortByCreate());
        },
        sortByUpdate: () => {
            dispatch(sortByUpdate());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
