import React from 'react';

export default class Projects extends React.Component {
    render() {
        const projectsList = this.props.projects;
        let projects = '';

        if (projectsList !== undefind && projectsList.length > 0) {
            projects = projectsList.map(project => {
                <li class="proj-list__item">
                    <div class="proj-list__left">
                        <h2 class="proj-list__title">{ project.projectName }</h2>
                        <p class="prj-list__description">{ project.porojectDescription }</p>
                    </div>
                    <div class="proj-list__right">
                        <p class="proj-list__create"></p>
                        <p class="proj-list__update"></p>
                    </div>
                </li>
            });
        }
    }
}
