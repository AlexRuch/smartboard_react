import axios from 'axios';

const SERVER_ADDRESS = 'http://192.168.10.126:8080/api';

export const loadProjects = () => dispatch => {
    axios.get(SERVER_ADDRESS + '/project/all').then(response => {
        dispatch({
            type: 'LOAD_ALL_PROJECTS',
            payload: {projects: response.data}
        });
    });
};

export const loadProject = (projectId) => dispatch =>{
    axios.get(SERVER_ADDRESS + '/project/' + projectId).then(response =>{
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
    axios.put(SERVER_ADDRESS + '/project/update/position', data, {
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'text/javascript'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {project: response.data}
        });
    });    
}

export const createProject = ( projectName ) => dispatch => {
    axios.post(SERVER_ADDRESS + '/project', projectName, {
        headers:{
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

export const deleteProject = ( projectId ) => dispatch => {
    axios.put(SERVER_ADDRESS + '/project', projectId, {
        headers:{
            'Content-Type': 'text/plain'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_ALL_PROJECTS',
            payload: {projects: response.data}
        });
    });
}

export const sortByCreate = () => dispatch => {
    dispatch({
        type: 'SORT_BY_CREATE'
    });
};

export const sortByUpdate = () => dispatch => {
    dispatch({
        type: 'SORT_BY_UPDATE'
    });
};

export const addText = ( project_id, entry_name, entry_text ) => dispatch => {
    const data = JSON.stringify({
        projectId: project_id,
        entryName: entry_name,
        entryText: entry_text,
        entryType: 'TEXT'
    });
    axios.post(SERVER_ADDRESS + '/entry/text', data, {
        headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'text/javascript'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {
                project: response.data
            }
        });
    });
};

export const addImage = ( project_id, entry_name, entry_image ) => dispatch => {
    let formData = new FormData();
    formData.append('projectId', project_id);
    formData.append('entryName', entry_name);
    formData.append('entryImage', entry_image);

    axios.post(SERVER_ADDRESS + '/entry/image', formData, {
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {
                project: response.data
            }
        });
    });
}

export const addTable = (project_id, entry_name, table_css, table_rows) => dispatch => {
    
    const data = JSON.stringify({
        projectId: project_id,
        entryName: entry_name,
        tableCSS: table_css,
        tableRows: table_rows
    });


    axios.post(SERVER_ADDRESS + '/entry/table', data, {
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'text/javascript'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {
                project: response.data
            }
        });
    });
}

export const deleteEntry = ( entry_id ) => dispatch => {
    axios.put(SERVER_ADDRESS + '/entry', entry_id, {
         headers:{
            'Access-Control-Allow-Origin':'*',
             'Content-Type': 'text/plain'
        }
    }).then(response => {
        dispatch({
            type: 'LOAD_PROJECT',
            payload: {
                project: response.data
            }
        });
    });
}

export const setCurrentEntry = (entry_id) => dispatch => {
    dispatch({
        type: 'SET_CURRENT_ENTRY',
        payload: {
            entryId: entry_id
        }
    });
}


export const loadEnableProject = ( project ) => dispatch => {
    dispatch({
        type: 'LOAD_ENABLE_PROJECT',
        payload: {
            project: project
        }
    });
}

export const changeBoardEntry = (entryIndex) => dispatch => {
    dispatch({
        type: 'CHANGE_BOARD_ENTRY',
        payload: {
            entryIndex: entryIndex
        } 
    });
}

export const setDefaultEntry = () => dispatch => {
    dispatch({
        type: 'SET_DEFAULT_ENTRY'
    });
}
export const makeProjectEnable = ( projectId ) => dispatch => {
    axios.put(SERVER_ADDRESS + '/project/enable', projectId, {
        headers:{
             'Content-Type': 'text/plain'
        }
    });
}
