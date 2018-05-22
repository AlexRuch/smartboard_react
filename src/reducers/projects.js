const initialState = {
    projectsList: [],
    page: 0
};

export default function projects(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_ALL_PROJECTS':
            const sortByCreate = action.payload.projects.sort(compareByCreate);
            return {
                projectsList: sortByCreate
            };
        case 'UPDATE_PROJECTS_ENTRIES_POSITION':
            const updatedList = state.projectList.filter(project => project.projectId !== action.payload.projectId).push(action.payload);
            return{
                projectsList: updatedList
            };
        case 'ADD_NEW_PROJECT':
            return {
                projectsList: [action.payload.project, ...state.projectsList] 
            };
        case 'SORT_BY_CREATE':
            return {
                projectsList: state.projectsList.slice().sort(compareByCreate) 
            };
        case 'SORT_BY_UPDATE':
            return {
                projectsList: state.projectsList.slice().sort(compareByUpdate)
 
            };
            
        default:
            return state;
    }
}

function compareByCreate(a, b) {
    const dateA = a.createDate;
    const dateB = b.createDate;

    let comparsoin = 0;

    if (dateA < dateB) {
        comparsoin = 1;
    } else if (dateA > dateB) {
        comparsoin = -1;
    }

    return comparsoin;
}

function compareByUpdate(a, b) {
    const dateA = a.updateDate;
    const dateB = b.updateDate;

    let comparsoin = 0;

    if (dateA < dateB) {
        comparsoin = 1;
    } else if (dateA > dateB){
        comparsoin = -1;
    }

    return comparsoin;
}
