import React from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newProjectName: ''
        };
        this.createProject = this.createProject.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    createProject(){
        this.props.createProject(this.state.newProjectName);
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});       
    }
    render() {
       
        const projects = this.props.projectsList.map(project => 
                <li> 
                    <Link to={ '/admin/project/' + project.projectId } className="proj-list__item">
                        <div className="proj-list__left">
                            <h2 className="proj-list__title">{ project.projectName }</h2>
                            <p className="prj-list__description">{ project.projectDescription}</p>
                        </div>
                        <div className="proj-list__right">
                            <p className="proj-list__create">{ project.createDate }</p>
                            <p className="proj-list__update">{ project.updateDate }</p>
                        </div>
                    </Link>
                </li>
            );

        return (
            <section className="projects">
                <div className="projects__navigation">
                    <p>Сортировать по дате: </p>
                    <button className="btn_sort" onClick={this.props.sortByCreate}>Создания</button>
                    <button className="btn_sort" onClick={this.props.sortByUpdate}>Редактирования</button>
                    <p>Поиск по названию: </p>
                    <input type="text"/>
                    <input type='text' name='newProjectName' onChange={this.changeHandler} value={this.props.newProjectName}/>
                    <button onClick={this.createProject}>Создать проект</button>
                </div>
                <ul className="projects__list proj-list">
                    { projects }
                </ul>
            </section>
        );
    }
}
