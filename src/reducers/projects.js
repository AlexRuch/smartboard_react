const initialState = {
    projectsList: [],
    page: 0,
    project: 'loooool',
    entryList:''
};

export default function projects(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_ALL_PROJECTS':
            const sortByCreate = action.payload.projects.slice().sort(compareByCreate);
            return {
                projectsList: sortByCreate
            };
        case 'LOAD_PROJECT':
            return {
                projectsList: state.projectsList,
                project: action.payload.project,
                entryList: action.payload.project.entryList.sort(comparsoinByPosition)
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

function comparsoinByPosition(a, b) {
    const positionA = a.entryPosition;
    const positionB = b.entryPosition;

    let comparsoin = 0;

    if (positionA > positionB) {
        comparsoin = 1;
    } else if (positionA < positionB){
        comparsoin = -1;
    }

    return comparsoin;   
}
