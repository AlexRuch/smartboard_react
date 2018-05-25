import axios from 'axios';

export const loadProjects = () => dispatch => {
    axios.get('http://localhost:8080/api/project/all').then(response => {
        console.log(response.data);
        dispatch({
            type: 'LOAD_ALL_PROJECTS',
            payload: {projects: response.data}
        });
    });
};

export const loadProject = (projectId) => dispatch =>{
    console.log('ACTION!');
    axios.get('http://localhost:8080/api/project/' + projectId).then(response =>{
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {project: response.data}
        });
    });
}

export const changeEntryPosition = (project_id, entry_id, change_type) => dispatch => {
    const data = JSON.stringify({
        projectId: project_id,
        entryId: entry_id,
        changeType: change_type
    });
    console.log(data);
    axios.put('http://localhost:8080/api/project/update/position', data, {
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'text/javascript'
        }
    }).then(response => {
        dispatch({
            type: 'UPDATE_PROJECTS_ENTRIES_POSITION',
            payload: {project: response.data}
        });
    });    
}

export const createProject = ( projectName ) => dispatch => {
    console.log(projectName);
    axios.post('http://localhost:8080/api/project', projectName, {headers:{
        'Content-Type': 'text/javascript'
        }
    }).then(response => {
        console.log(response.data);
        dispatch({
            type: 'ADD_NEW_PROJECT',
            payload: {project: response.data}
        });
    });    
};

export const sortByCreate = () => dispatch => {
    console.log('BY CREATE!');
    dispatch({
        type: 'SORT_BY_CREATE'
    });
};

export const sortByUpdate = () => dispatch => {
    console.log('BY UPDATE!');
    dispatch({
        type: 'SORT_BY_UPDATE'
    });
};
