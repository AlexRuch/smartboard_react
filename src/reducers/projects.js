const initialState = {
    projectsList: [],
    page: 0
};

export default function projects(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_ALL_PROJECTS':
            console.log(action.payload.projects);
            return {
                projectsList: action.payload.projects
            };
        default:
            return state;
    }
}
