import React from 'react';
import { connect } from 'react-redux';
import EntriesList from '../components/project/entriesList';
import EntryPreview from '../components/project/entryPreview';

class Project extends React.Component {
    render() {
        if(this.props.projectsList.length !== 0){
            const project = (this.props.projectsList.filter(proj => parseInt(proj.projectId, 10) === parseInt(this.props.match.params.projectId, 10))[0]);
            this.props.projectsList.map(e => console.log(e));
            console.log(this.props.match.params.projectId);
            console.log(project);
            return(
                <section className="project">
                    <h1 className="project__name">{ project.projectName }</h1>
                    <div class="project__slide slide">
                        <EntriesList entriesList={ project.entryList }/>
                        <EntryPreview />
                    </div>
                </section>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        projectsList: state.projects.projectsList
    }
}

export default connect(mapStateToProps)(Project);
