import React from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends React.Component {
    render() {
        const projectsList = this.props.projectsList;
        let projects = '';

        if (projectsList !== undefined && projectsList.length > 0) {
            projects = projectsList.map(project => 
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
        }
        console.log(this.props.projects);

        return (
            <section className="projects">
                <div className="projects__navigation">
                    <p>Сортировать по дате: </p>
                    <button className="btn_sort">Создания</button>
                    <button className="btn_sort">Редактирования</button>
                    <p>Поиск по названию: </p>
                    <input type="text"/>
                </div>
                <ul className="projects__list proj-list">
                    { projects }
                </ul>
            </section>
        );
    }
}
