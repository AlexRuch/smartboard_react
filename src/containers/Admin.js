import React from 'react';
import ProjectsListComponent from '../components/admin/projectsList';
import Header from '../components/header/header';
import { connect } from 'react-redux';
import { loadProjects, deleteProject, createProject, sortByCreate, sortByUpdate, makeProjectEnable } from '../actions/projects';


class Admin extends React.Component {

    componentDidMount(){
        this.props.loadProjects();
    }

    render() {
        
        return (
            <div>
            <Header/>
            <ProjectsListComponent projectsList={this.props.projectsList}
                                   createProject={(projectName) => this.props.createProject(projectName)}
                                   deleteProject={(projectId) => this.props.deleteProject(projectId)}
                                   sortByCreate={() => this.props.sortByCreate()}
                                   sortByUpdate={() => this.props.sortByUpdate()}
                                   makeProjectEnable={(projectId) => this.props.makeProjectEnable(projectId)} />
            </div>
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
        deleteProject: ( projectId ) => {
            dispatch(deleteProject( projectId ))
        },
        createProject: (projectName) => {
            dispatch(createProject(projectName));
        },
        sortByCreate: () => {
            dispatch(sortByCreate());
        },
        sortByUpdate: () => {
            dispatch(sortByUpdate());
        },
        makeProjectEnable: (projectId) => {
            dispatch(makeProjectEnable(projectId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
