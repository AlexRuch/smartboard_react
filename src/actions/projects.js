import axios from 'axios';

export const loadProjects = () => dispatch => {
    axios.get('http://192.168.1.106:8080/api/project/all').then(response => {
        console.log(response.data);
        dispatch({
            type: 'LOAD_ALL_PROJECTS',
            payload: {projects: response.data}
        });
    });
};
