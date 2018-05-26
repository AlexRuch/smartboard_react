import React from 'react';
import { connect } from 'react-redux';
import EntriesList from '../components/project/entriesList';
import EntryPreview from '../components/project/entryPreview';
import ProjectHeader from '../components/project/projectHeader';
import TextEditor from '../components/project/textEditor';
import TeableEditor from '../components/project/tableEditor';
import ImageEditor from '../components/project/imageEditor';
import { changeEntryPosition, loadProject, addText, addImage, addTable, deleteEntry } from '../actions/projects.js';

class Project extends React.Component {

    componentDidMount(){
        this.props.loadProject(this.props.match.params.projectId);
    }

    render() {
            return(
                <main>
                    <section className="project">
                        <ProjectHeader project={this.props.project}/>
                        <div className="project__slide slide">
                            <EntriesList entriesList={ this.props.entryList }
                                changePosition={ (project_id, entry_id, change_type) => this.props.changeEntryPosition(project_id, entry_id, change_type) }
                                project={ this.props.project }
                                deleteEntry={ (entry_id) => this.props.deleteEntry(entry_id) }/>
                            <EntryPreview />
                        </div>
                    </section>
                    <div className='add'>
                        <input className="add__radiobutton" id="tab-text" type="radio" name="tabs" readOnly></input>
                        <label className="add__tab" htmlFor="tab-text" title="Вкладка 1">+ Текст</label>

                        <input className="add__radiobutton" id="tab-table" type="radio" name="tabs" readOnly></input>
                        <label className="add__tab" htmlFor="tab-table" title="Вкладка 2">+ Таблица</label>

                        <input className="add__radiobutton" id="tab-img" type="radio" name="tabs" readOnly></input>
                        <label className="add__tab" htmlFor="tab-img" title="Вкладка 3">+ Изображение</label>

                        <TextEditor addText={ (project_id, entry_name, entry_text) => this.props.addText(project_id, entry_name, entry_text) }
                                    project={this.props.project}/>
                        <TeableEditor addTable={(project_id, entry_name, table_css, table_rows) => this.props.addTable(project_id, entry_name, table_css, table_rows)}
                                    project={this.props.project}/>
                        <ImageEditor addImage={ (project_id, entry_name, entry_image) => this.props.addImage(project_id, entry_name, entry_image) }
                                     project={this.props.project} />
                    </div>
                </main>
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
        },
        addText: (project_id, entry_name, entry_text) => {
            dispatch(addText(project_id, entry_name, entry_text))
        },
        addImage: (project_id, entry_name, entry_image) => {
            dispatch(addImage(project_id, entry_name, entry_image))
        },
        addTable: (project_id, entry_name, table_css, table_rows) => {
            dispatch(addTable(project_id, entry_name, table_css, table_rows))
        },
        deleteEntry: (entry_id) => {
            dispatch(deleteEntry(entry_id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
