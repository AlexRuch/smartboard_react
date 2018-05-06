import React from 'react';
import ProjectsListComponent from '../components/admin/projectsList';
import { connect } from 'react-redux';
import { loadProjects } from '../actions/projects';


class Admin extends React.Component {

    componentDidMount(){
        this.props.loadProjects();
    }

    render() {
        console.log(this.props.projectsList)
        return (
            <ProjectsListComponent projectsList={this.props.projectsList}/>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
