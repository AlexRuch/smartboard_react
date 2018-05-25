import React from 'react';
import { connect } from 'react-redux';
import EntriesList from '../components/project/entriesList';
import EntryPreview from '../components/project/entryPreview';
import {changeEntryPosition, loadProject} from '../actions/projects.js';

class Project extends React.Component {

    componentDidMount(){
        this.props.loadProject(this.props.match.params.projectId);
    }

    render() {
        console.log(this.props.entryList);
            return(
                <section className="project">
                    <h1 className="project__name"></h1>
                    <div className="project__slide slide">
                        <EntriesList entriesList={ this.props.entryList }
                            changePosition={ (project_id, entry_id, change_type) => this.props.changeEntryPosition(project_id, entry_id, change_type) }
                            project= {this.props.project}/>
                        <EntryPreview />
                    </div>
                </section>
            );
        }
    }

function mapStateToProps(state) {
    return {
        project: state.projects.project,
        entryList: state.projects.entryList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeEntryPosition: (project_id, entry_id, change_type) => {
            dispatch(changeEntryPosition(project_id, entry_id, change_type))
        },
        loadProject: (projectId) => {
            dispatch(loadProject(projectId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
